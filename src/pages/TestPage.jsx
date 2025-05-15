
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, Clock, AlertCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { TestInProgress } from "@/components/test/TestInProgress";
import { TestResults } from "@/components/test/TestResults";

const testData = {
  title: "Matematik - Fonksiyonlar",
  description: "Bu test fonksiyonlar konusundaki bilgilerinizi ölçmektedir.",
  questions: [
    {
      id: 1,
      text: "f(x) = 2x + 3 ve g(x) = x² - 1 fonksiyonları için (f∘g)(2) değeri nedir?",
      options: [
        { id: "A", text: "7" },
        { id: "B", text: "9" },
        { id: "C", text: "11" },
        { id: "D", text: "13" },
        { id: "E", text: "15" }
      ],
      correctAnswer: "B",
      explanation: "g(2) = 2² - 1 = 3, f(g(2)) = f(3) = 2(3) + 3 = 9"
    },
    {
      id: 2,
      text: "f(x) = |x - 2| fonksiyonunun grafiği aşağıdakilerden hangisidir?",
      options: [
        { id: "A", text: "V şeklinde, tepe noktası (2,0)" },
        { id: "B", text: "V şeklinde, tepe noktası (0,2)" },
        { id: "C", text: "Doğru, y = x - 2" },
        { id: "D", text: "Doğru, y = 2 - x" },
        { id: "E", text: "Parabol, tepe noktası (2,0)" }
      ],
      correctAnswer: "A",
      explanation: "|x - 2| fonksiyonu x = 2 noktasında minimum değer olan 0'ı alır ve bu noktadan uzaklaştıkça değeri artar. Bu da V şeklinde, tepe noktası (2,0) olan bir grafiktir."
    },
    {
      id: 3,
      text: "f(x) = x³ - 3x² + 2x fonksiyonunun x = 2 noktasındaki türevi nedir?",
      options: [
        { id: "A", text: "0" },
        { id: "B", text: "2" },
        { id: "C", text: "4" },
        { id: "D", text: "6" },
        { id: "E", text: "8" }
      ],
      correctAnswer: "C",
      explanation: "f'(x) = 3x² - 6x + 2, f'(2) = 3(2)² - 6(2) + 2 = 12 - 12 + 2 = 2"
    },
    {
      id: 4,
      text: "f(x) = 2ˣ ve g(x) = log₂x fonksiyonları için f(g(8)) değeri nedir?",
      options: [
        { id: "A", text: "3" },
        { id: "B", text: "4" },
        { id: "C", text: "8" },
        { id: "D", text: "16" },
        { id: "E", text: "32" }
      ],
      correctAnswer: "C",
      explanation: "g(8) = log₂8 = 3, f(g(8)) = f(3) = 2³ = 8"
    },
    {
      id: 5,
      text: "f(x) = x² - 4x + 3 fonksiyonunun minimum değeri nedir?",
      options: [
        { id: "A", text: "-1" },
        { id: "B", text: "0" },
        { id: "C", text: "1" },
        { id: "D", text: "2" },
        { id: "E", text: "3" }
      ],
      correctAnswer: "A",
      explanation: "f(x) = x² - 4x + 3 = (x - 2)² - 1, minimum değer x = 2 noktasında alınır ve değeri -1'dir."
    }
  ]
};

export function TestPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [testCompleted, setTestCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 dakika (saniye cinsinden)
  const { toast } = useToast();

  const currentQuestion = testData.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / testData.questions.length) * 100;
  
  useEffect(() => {
    if (!testCompleted && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !testCompleted) {
      finishTest();
      toast({
        title: "Süre Doldu!",
        description: "Test süresi doldu. Sonuçlarınız hesaplanıyor.",
        variant: "destructive",
      });
    }
  }, [timeLeft, testCompleted, toast]);

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerId
    });
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < testData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    } else {
      finishTest();
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
    }
  };

  const finishTest = () => {
    setTestCompleted(true);
    toast({
      title: "Test Tamamlandı!",
      description: "Sonuçlarınız hesaplandı. Detaylı analizi inceleyebilirsiniz.",
    });
  };

  const calculateScore = () => {
    let correctCount = 0;
    testData.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {!testCompleted ? (
        <TestInProgress
          testData={testData}
          currentQuestion={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          timeLeft={timeLeft}
          formatTime={formatTime}
          progress={progress}
          selectedAnswers={selectedAnswers}
          handleAnswerSelect={handleAnswerSelect}
          goToPreviousQuestion={goToPreviousQuestion}
          goToNextQuestion={goToNextQuestion}
          showExplanation={showExplanation}
          setShowExplanation={setShowExplanation}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
      ) : (
        <TestResults
          testData={testData}
          selectedAnswers={selectedAnswers}
          calculateScore={calculateScore}
        />
      )}
    </div>
  );
}
