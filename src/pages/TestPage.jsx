
import React, { useState, useEffect, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { TestInProgress } from "@/components/test/TestInProgress";
import { TestResults } from "@/components/test/TestResults";
import { TestLoadingScreen } from "@/components/test/TestLoadingScreen";
import { generateTestData } from "@/lib/testUtils";

export function TestPage() {
  const { examId, subjectId, topicId } = useParams();
  const location = useLocation();
  const isPracticeTest = location.pathname.includes("/deneme/");

  const [testData, setTestData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [testCompleted, setTestCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0); 
  const { toast } = useToast();
  const [isQuestionListOpen, setIsQuestionListOpen] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadingDuration = 7000; // 7 seconds

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
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const loadingTimer = setTimeout(() => {
      const currentExamId = isPracticeTest ? (examId || 'genel-deneme') : examId;
      const currentSubjectId = isPracticeTest ? (subjectId || 'karma') : subjectId;
      const currentTopicId = isPracticeTest ? (topicId || 'genel') : topicId;

      if (currentExamId && currentSubjectId && currentTopicId) {
        const newTestData = generateTestData(currentExamId, currentSubjectId, currentTopicId, isPracticeTest);
        setTestData(newTestData);
        setSelectedAnswers({});
        setCurrentQuestionIndex(0);
        setTestCompleted(false);
        setTimeLeft(newTestData.totalTime);
        setStartTime(Date.now());
        setEndTime(null);
      }
      setIsLoading(false);
    }, loadingDuration);

    return () => clearTimeout(loadingTimer);
  }, [examId, subjectId, topicId, isPracticeTest]);
  
  useEffect(() => {
    if (!isLoading && !testCompleted && timeLeft > 0 && testData && startTime) {
      const timer = setTimeout(() => {
        setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!isLoading && timeLeft === 0 && !testCompleted && testData && startTime) {
      finishTest();
      toast({
        title: "Süre Doldu!",
        description: "Test süresi doldu. Sonuçlarınız hesaplanıyor.",
        variant: "destructive",
      });
    }
  }, [isLoading, timeLeft, testCompleted, toast, testData, finishTest, startTime]);

  if (isLoading || !testData) {
    return <TestLoadingScreen duration={loadingDuration} />;
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
       toast({
        title: "Test Tamamlandı!",
        description: "Sonuçlarınız hesaplandı. Detaylı analizi inceleyebilirsiniz.",
      });
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
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        setTestCompleted={setTestCompleted}
        setSelectedAnswers={setSelectedAnswers}
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
      examId={examId || (isPracticeTest ? 'genel-deneme' : '')}
      subjectId={subjectId || (isPracticeTest ? 'karma' : '')}
      topicId={topicId || (isPracticeTest ? 'genel' : '')}
    />
  );
}
