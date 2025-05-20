import { supabase } from '@/lib/supabaseClient';

const DEFAULT_QUESTIONS_LGS = 12;
const DEFAULT_QUESTIONS_YKS = 15;
const DEFAULT_QUESTIONS_OTHER = 10; // Diğer sınavlar için varsayılan soru sayısı

const FALLBACK_QUESTIONS_POOL_URL = '/questions.json'; // Yerel yedek sorular

let questionsPool = null; // Soru havuzunu cache'lemek için

async function fetchQuestionsPool() {
  if (questionsPool) {
    return questionsPool;
  }

  try {
    // Temporarily skip Supabase storage fetch attempt until bucket is configured
    throw new Error('Skipping Supabase storage fetch'); // Force using local fallback

    /* Commented out until Supabase storage bucket is properly configured
    const { data, error } = await supabase.storage
      .from('test-assets')
      .download('questions.json');

    if (error) {
      console.warn("Supabase'den sorular çekilemedi, yerel yedek kullanılıyor:", error.message);
      throw error;
    }
    
    const jsonData = JSON.parse(await data.text());
    questionsPool = jsonData;
    return questionsPool;
    */

  } catch (supabaseError) {
    try {
      const response = await fetch(FALLBACK_QUESTIONS_POOL_URL);
      if (!response.ok) {
        throw new Error(`Yerel sorular yüklenemedi: ${response.statusText}`);
      }
      const jsonData = await response.json();
      questionsPool = jsonData;
      console.info("Yerel yedek sorular başarıyla yüklendi.");
      return questionsPool;
    } catch (localError) {
      console.error("Hem Supabase hem de yerel sorular yüklenemedi:", localError.message);
      return { lgs: {}, yks: {}, kpss_lisans: {}, kpss_onlisans: {}, yds: {}, yokdil: {} }; // Boş havuz döndür
    }
  }
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const generateTestData = async (examId, subExamId, subjectId, topicId, isPracticeTest = false) => {
  const pool = await fetchQuestionsPool();
  
  let examSpecificPool;
  if (examId === 'yks' && subExamId) {
    examSpecificPool = pool.yks?.[subExamId.toLowerCase()];
  } else {
    examSpecificPool = pool[examId?.toLowerCase()];
  }

  if (!examSpecificPool) {
    console.warn(`Sınav ID'si için soru bulunamadı: ${examId} ${subExamId || ''}`);
    return createFallbackTest(examId, subExamId, subjectId, topicId, isPracticeTest);
  }
  
  const subjectPool = examSpecificPool[subjectId?.toLowerCase()];
  if (!subjectPool) {
    console.warn(`Ders ID'si için soru bulunamadı: ${subjectId} (Sınav: ${examId} ${subExamId || ''})`);
    return createFallbackTest(examId, subExamId, subjectId, topicId, isPracticeTest);
  }

  let topicSpecificQuestions = subjectPool[topicId?.toLowerCase()];
  if (!topicSpecificQuestions || topicSpecificQuestions.length === 0) {
    // Konuya özel soru yoksa, o dersteki tüm sorulardan rastgele seç
    topicSpecificQuestions = Object.values(subjectPool).flat();
    if (topicSpecificQuestions.length === 0) {
       console.warn(`Konu/Ders için soru bulunamadı: ${topicId}/${subjectId} (Sınav: ${examId} ${subExamId || ''})`);
       return createFallbackTest(examId, subExamId, subjectId, topicId, isPracticeTest);
    }
  }

  let numQuestions;
  if (examId === 'lgs') {
    numQuestions = DEFAULT_QUESTIONS_LGS;
  } else if (examId === 'yks') {
    numQuestions = DEFAULT_QUESTIONS_YKS;
  } else {
    numQuestions = isPracticeTest ? 20 : DEFAULT_QUESTIONS_OTHER;
  }
  
  const selectedQuestions = shuffleArray([...topicSpecificQuestions]).slice(0, numQuestions);

  if (selectedQuestions.length === 0) {
    console.warn(`Seçilecek yeterli soru bulunamadı: ${topicId}/${subjectId} (Sınav: ${examId} ${subExamId || ''})`);
    return createFallbackTest(examId, subExamId, subjectId, topicId, isPracticeTest, selectedQuestions.length > 0 ? selectedQuestions.length : undefined);
  }


  const formattedQuestions = selectedQuestions.map((q, index) => ({
    id: q.id || index + 1,
    text: q.text,
    image: q.image || null,
    options: q.options.map(opt => typeof opt === 'string' ? { id: opt.charAt(0), text: opt.substring(3) } : opt ), // Eğer seçenekler string ise objeye çevir
    correctAnswer: q.correctAnswer,
    explanation: q.explanation || "Bu soru için detaylı açıklama henüz eklenmemiştir."
  }));
  
  const baseTitle = topicId.replace(/-/g, ' ');
  const subjectTitle = subjectId.replace(/-/g, ' ');
  const examTitle = (subExamId ? `${examId.toUpperCase()}-${subExamId.toUpperCase()}` : examId.toUpperCase());

  return {
    title: `${subjectTitle.replace(/\b\w/g, l => l.toUpperCase())} - ${baseTitle.replace(/\b\w/g, l => l.toUpperCase())}`,
    description: `Bu test ${baseTitle} konusundaki bilgilerinizi ölçmektedir. ${examTitle} sınavına yönelik hazırlanmıştır.`,
    questions: formattedQuestions,
    totalTime: (isPracticeTest ? (numQuestions * 1.5) : numQuestions) * 60, // Soru başına 1 veya 1.5 dk
  };
};

// Yedek test oluşturma fonksiyonu
const createFallbackTest = (examId, subExamId, subjectId, topicId, isPracticeTest, numQs) => {
  const questions = [];
  let totalQuestions = numQs;
   if (numQs === undefined) {
    if (examId === 'lgs') totalQuestions = DEFAULT_QUESTIONS_LGS;
    else if (examId === 'yks') totalQuestions = DEFAULT_QUESTIONS_YKS;
    else totalQuestions = isPracticeTest ? 20 : DEFAULT_QUESTIONS_OTHER;
   }


  const baseTitle = topicId.replace(/-/g, ' ');
  const subjectTitle = subjectId.replace(/-/g, ' ');
  const examTitle = (subExamId ? `${examId.toUpperCase()}-${subExamId.toUpperCase()}` : examId.toUpperCase());

  for (let i = 1; i <= totalQuestions; i++) {
    const options = [
      { id: "A", text: `Yedek Seçenek A - Soru ${i}` },
      { id: "B", text: `Yedek Seçenek B - Soru ${i}` },
      { id: "C", text: `Yedek Seçenek C - Soru ${i}` },
      { id: "D", text: `Yedek Seçenek D - Soru ${i}` },
    ];
    questions.push({
      id: i,
      text: `Bu bir yedek sorudur. ${baseTitle} konusu ile ilgili ${i}. örnek soru. ${subjectTitle} dersi kapsamındadır.`,
      image: null,
      options: options,
      correctAnswer: options[0].id,
      explanation: "Bu soru için bir açıklama bulunmamaktadır çünkü yedek soru havuzundan gelmektedir."
    });
  }
  return {
    title: `${subjectTitle.toUpperCase()} - ${baseTitle.replace(/\b\w/g, l => l.toUpperCase())} (Yedek Test)`,
    description: `Bu test için özel sorular bulunamadı, genel yedek sorular gösterilmektedir. ${examTitle} sınavına yönelik hazırlanmıştır.`,
    questions: questions,
    totalTime: (isPracticeTest ? (totalQuestions * 1.5) : totalQuestions) * 60,
  };
};