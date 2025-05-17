
export const generateTestData = (examId, subjectId, topicId, isPracticeTest = false) => {
  const questions = [];
  const totalQuestions = isPracticeTest ? 20 : 10; // Practice tests have more questions
  const imageFrequency = isPracticeTest ? 4 : 3;

  const baseTitle = topicId.replace(/-/g, ' ');
  const subjectTitle = subjectId.replace(/-/g, ' ');
  const examTitle = examId.replace(/-/g, ' ');

  for (let i = 1; i <= totalQuestions; i++) {
    const questionText = `${baseTitle} konusu ile ilgili ${i}. örnek soru. Bu soru ${subjectTitle} dersi kapsamındadır. ${examTitle} sınavına hazırlık için önemlidir. Cevabınız nedir? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
    const options = [
      { id: "A", text: `Seçenek A - Soru ${i} için oldukça uzun bir metin içeren bir seçenek. Bu seçenek, metnin nasıl kaydırılacağını veya sığdırılacağını test etmek için burada.` },
      { id: "B", text: `Seçenek B - Soru ${i} için farklı bir metin.` },
      { id: "C", text: `Seçenek C - Soru ${i}. Lorem ipsum dolor sit amet.` },
      { id: "D", text: `Seçenek D - Soru ${i}. Consectetur adipiscing elit.` },
    ];
    const correctAnswer = options[Math.floor(Math.random() * 4)].id;
    const explanation = `${i}. sorunun detaylı açıklaması burada yer alacak. Doğru cevap ${correctAnswer} çünkü... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    
    let questionImage = null;
    if (i % imageFrequency === 0) {
      const imageKeywords = `${topicId.split('-')[0]},${subjectId},education,study,question${i},abstract`;
      questionImage = `https://source.unsplash.com/400x250/?${imageKeywords}&random=${Math.random()}`;
    }

    questions.push({
      id: i,
      text: questionText,
      image: questionImage,
      options: options,
      correctAnswer: correctAnswer,
      explanation: explanation
    });
  }
  return {
    title: `${subjectTitle.toUpperCase()} - ${baseTitle.replace(/\b\w/g, l => l.toUpperCase())}`,
    description: `Bu test ${baseTitle} konusundaki bilgilerinizi ölçmektedir. ${examTitle.toUpperCase()} sınavına yönelik hazırlanmıştır.`,
    questions: questions,
    totalTime: (isPracticeTest ? 25 : 15) * 60, // Practice tests have more time
  };
};
