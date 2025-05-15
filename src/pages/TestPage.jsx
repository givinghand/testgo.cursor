
import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { TestInProgress } from "@/components/test/TestInProgress";
import { TestResults } from "@/components/test/TestResults";
import { HelpCircle } from "lucide-react";

const generateTestData = (examId, subjectId, topicId) => {
  const questions = [];
  const totalQuestions = 10;
  const imageFrequency = 3; 

  for (let i = 1; i <= totalQuestions; i++) {
    const questionText = `${topicId.replace(/-/g, ' ')} konusu ile ilgili ${i}. örnek soru. Bu soru ${subjectId} dersi kapsamındadır. ${examId} sınavına hazırlık için önemlidir. Cevabınız nedir?`;
    const options = [
      { id: "A", text: `Seçenek A - Soru ${i}` },
      { id: "B", text: `Seçenek B - Soru ${i}` },
      { id: "C", text: `Seçenek C - Soru ${i}` },
      { id: "D", text: `Seçenek D - Soru ${i}` },
    ];
    const correctAnswer = options[Math.floor(Math.random() * 4)].id;
    const explanation = `${i}. sorunun detaylı açıklaması burada yer alacak. Doğru cevap ${correctAnswer} çünkü... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
    
    let questionImage = null;
    if (i % imageFrequency === 0) {
      const imageKeywords = `${topicId.split('-')[0]},${subjectId},education,study,question${i}`;
      questionImage = `https://source.unsplash.com/300x200/?${imageKeywords}`;
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
    title: `${subjectId.toUpperCase()} - ${topicId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
    description: `Bu test ${topicId.replace(/-/g, ' ')} konusundaki bilgilerinizi ölçmektedir. ${examId.toUpperCase()} sınavına yönelik hazırlanmıştır.`,
    questions: questions,
    totalTime: 15 * 60, 
  };
};


export function TestPage() {
  const { examId, subjectId, topicId } = useParams();
  const [testData, setTestData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [testCompleted, setTestCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0); 
  const { toast } = useToast();
  const [isQuestionListOpen, setIsQuestionListOpen] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const calculateScore = useCallback(() => {
    if (!testData) return 0;
    let correctCount = 0;
    testData.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
  }, [testData, selectedAnswers]);

  const finishTest = useCallback(() => {
    setEndTime(Date.now());
    setTestCompleted(true);
    toast({
      title: "Test Tamamlandı!",
      description: "Sonuçlarınız hesaplandı. Detaylı analizi inceleyebilirsiniz.",
    });
  }, [toast]);

  useEffect(() => {
    if (examId && subjectId && topicId) {
      const newTestData = generateTestData(examId, subjectId, topicId);
      setTestData(newTestData);
      setSelectedAnswers({});
      setCurrentQuestionIndex(0);
      setTestCompleted(false);
      setTimeLeft(newTestData.totalTime);
      setStartTime(Date.now());
      setEndTime(null);
    }
  }, [examId, subjectId, topicId]);
  
  useEffect(() => {
    if (!testCompleted && timeLeft > 0 && testData && startTime) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !testCompleted && testData && startTime) {
      finishTest();
      toast({
        title: "Süre Doldu!",
        description: "Test süresi doldu. Sonuçlarınız hesaplanıyor.",
        variant: "destructive",
      });
    }
  }, [timeLeft, testCompleted, toast, testData, finishTest, startTime]);

  if (!testData) {
    return (
      <div className="container mx-auto px-4 py-12 text-center flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <HelpCircle className="mx-auto h-16 w-16 text-primary mb-6 animate-pulse" />
        <h1 className="text-3xl font-bold text-foreground mb-3">Test Yükleniyor...</h1>
        <p className="text-lg text-muted-foreground">Lütfen bekleyin, sizin için soruları hazırlıyoruz.</p>
      </div>
    );
  }

  const currentQuestion = testData.questions[currentQuestionIndex];

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answerId
    }));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < testData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishTest();
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (testCompleted) {
    const timeTaken = endTime && startTime ? Math.floor((endTime - startTime) / 1000) : testData.totalTime - timeLeft;
    return (
      <TestResults 
        testData={testData} 
        selectedAnswers={selectedAnswers} 
        calculateScore={calculateScore}
        timeLeft={timeLeft}
        totalTime={testData.totalTime}
        timeTaken={timeTaken}
      />
    );
  }

  return (
    <TestInProgress
      testData={testData}
      currentQuestion={currentQuestion}
      currentQuestionIndex={currentQuestionIndex}
      timeLeft={timeLeft}
      formatTime={formatTime}
      selectedAnswers={selectedAnswers}
      handleAnswerSelect={handleAnswerSelect}
      goToNextQuestion={goToNextQuestion}
      setCurrentQuestionIndex={setCurrentQuestionIndex}
      isQuestionListOpen={isQuestionListOpen}
      setIsQuestionListOpen={setIsQuestionListOpen}
      examId={examId}
      subjectId={subjectId}
      topicId={topicId}
    />
  );
}
