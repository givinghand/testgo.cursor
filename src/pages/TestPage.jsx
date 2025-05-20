
import React, { useState, useEffect, useCallback } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { TestResults } from "@/components/test/TestResults";
import { TestLoadingScreen } from "@/components/test/TestLoadingScreen";
import { TestHeader } from "@/components/test/TestHeader";
import { QuestionDisplay } from "@/components/test/QuestionDisplay";
import { QuestionNavigation } from "@/components/test/QuestionNavigation";
import { generateTestData } from "@/lib/testUtils";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogIn, ShieldCheck, Construction, BookOpen, AlertTriangle } from "lucide-react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

const UNDER_CONSTRUCTION_EXAMS = ['kpss-lisans', 'kpss-onlisans', 'yds', 'yokdil'];

export function TestPage() {
  const params = useParams();
  const { examId, subExamId, subjectId, topicId } = params;
  const location = useLocation();
  const navigate = useNavigate();
  const isPracticeTest = location.pathname.includes("/deneme/");
  const { user, loading: authLoading, checkUserPremiumStatus } = useAuth();
  const isPremium = !authLoading && user ? checkUserPremiumStatus() : false;

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
  const [showConstructionModal, setShowConstructionModal] = useState(false);
  const [testLoadError, setTestLoadError] = useState(null);

  const loadingDuration = 1500; 

  const calculateScore = useCallback(() => {
    if (!testData?.questions) return 0;
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
    if (authLoading) return;

    if (!user) {
      navigate(`/giris?redirect=${location.pathname}`);
      return;
    }
    
    if (UNDER_CONSTRUCTION_EXAMS.includes(examId?.toLowerCase())) {
      setShowConstructionModal(true);
      setIsLoading(false); 
      return;
    }

    setIsLoading(true);
    setTestLoadError(null);
    const loadTest = async () => {
      try {
        const currentExamId = isPracticeTest ? (examId || 'genel-deneme') : examId;
        const currentSubExamId = isPracticeTest ? (subExamId || null) : subExamId;
        const currentSubjectId = isPracticeTest ? (subjectId || 'karma') : subjectId;
        const currentTopicId = isPracticeTest ? (topicId || 'genel') : topicId;

        if (currentExamId && currentSubjectId && currentTopicId) {
          const newTestData = await generateTestData(currentExamId, currentSubExamId, currentSubjectId, currentTopicId, isPracticeTest);
          if (!newTestData || !newTestData.questions || newTestData.questions.length === 0) {
            throw new Error("Soru bulunamadı veya test verisi hatalı.");
          }
          setTestData(newTestData);
          setSelectedAnswers({});
          setCurrentQuestionIndex(0);
          setTestCompleted(false);
          setTimeLeft(newTestData.totalTime);
          setStartTime(Date.now());
          setEndTime(null);
        } else {
           throw new Error("Test parametreleri eksik.");
        }
      } catch (error) {
        setTestLoadError(error.message || "Sorular yüklenirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.");
        toast({
          title: "Test Yüklenemedi",
          description: error.message || "Sorular yüklenirken bir sorun oluştu.",
          variant: "destructive"
        });
      } finally {
         setTimeout(() => setIsLoading(false), loadingDuration);
      }
    };
    
    loadTest();

  }, [examId, subExamId, subjectId, topicId, isPracticeTest, user, authLoading, navigate, location.pathname, toast]);
  
  useEffect(() => {
    if (!isLoading && !testCompleted && timeLeft > 0 && testData && startTime && !showConstructionModal && !testLoadError) {
      const timer = setTimeout(() => {
        setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!isLoading && timeLeft === 0 && !testCompleted && testData && startTime && !showConstructionModal && !testLoadError) {
      finishTest();
      toast({
        title: "Süre Doldu!",
        description: "Test süresi doldu. Sonuçlarınız hesaplanıyor.",
        variant: "destructive",
      });
    }
  }, [isLoading, timeLeft, testCompleted, toast, testData, finishTest, startTime, showConstructionModal, testLoadError]);

  if (authLoading) {
     return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
        <LoadingSpinner />
        <p className="mt-4 text-lg text-muted-foreground">Kullanıcı doğrulanıyor...</p>
      </div>
    );
  }

  if (!user && !authLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
          <LogIn className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-4">Testi Çözmek İçin Giriş Yapmalısın</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Bu içeriğe erişebilmek için lütfen hesabına giriş yap.
          </p>
          <Button size="lg" onClick={() => navigate(`/giris?redirect=${location.pathname}`)} className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3">
            Hemen Giriş Yap
          </Button>
      </div>
    );
  }
  
  if (showConstructionModal) {
    const studyPath = `/konu-calis/${examId}${subExamId ? `/${subExamId}` : ''}/${subjectId}/${topicId}`;
    return (
        <Dialog open={showConstructionModal} onOpenChange={(isOpen) => {
            if (!isOpen) navigate("/test-coz"); 
        }}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 mb-4">
                        <Construction className="h-6 w-6 text-yellow-600" />
                    </div>
                    <DialogTitle className="text-center text-2xl font-bold text-foreground">Geliştirme Aşamasında</DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-center text-muted-foreground py-4">
                    Bu sınav tipi ({examId?.toUpperCase()}) için test sistemi henüz geliştirme aşamasındadır. 
                    Anlayışınız için teşekkür ederiz.
                    <br /><br />
                    Dilerseniz, ilgili konuya çalışmaya devam edebilirsiniz:
                </DialogDescription>
                <DialogFooter className="sm:justify-center pt-4">
                    <Button
                        onClick={() => navigate(studyPath)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                    >
                        <BookOpen className="mr-2 h-4 w-4" /> Konuya Çalış
                    </Button>
                    <Button variant="outline" onClick={() => navigate("/test-coz")} className="w-full sm:w-auto mt-2 sm:mt-0">
                        Başka Test Seç
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
  }


  if (!isPremium && testData?.isPremiumTest) { 
    return (
       <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
          <ShieldCheck className="h-20 w-20 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-4">Premium İçerik</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Bu testi çözebilmek için Premium üyeliğinizin olması gerekmektedir.
          </p>
          <Button size="lg" onClick={() => navigate("/premium-uye-ol")} className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg px-8 py-3">
            Premium'a Yükselt
          </Button>
      </div>
    );
  }

  if (isLoading) {
    return <TestLoadingScreen duration={loadingDuration} />;
  }
  
  if (testLoadError) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
        <AlertTriangle className="h-20 w-20 text-destructive mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-destructive mb-4">Test Yüklenemedi</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          {testLoadError}
        </p>
        <Button size="lg" onClick={() => navigate("/test-coz")} className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3">
          Başka Bir Test Seç
        </Button>
      </div>
    );
  }

  if (!testData || !testData.questions || testData.questions.length === 0) {
     return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
        <AlertTriangle className="h-20 w-20 text-destructive mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-destructive mb-4">Sorular Bulunamadı</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Bu konu için henüz soru eklenmemiş veya sorular yüklenirken bir sorun oluştu.
        </p>
        <Button size="lg" onClick={() => navigate("/test-coz")} className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3">
          Farklı Bir Konu Seç
        </Button>
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
        timeTaken={timeTaken}
        examParams={params}
      />
    );
  }

  return (
    <div className="container mx-auto px-2 py-4 md:px-4 md:py-6 flex flex-col h-[calc(100vh-8rem)]">
      <TestHeader
        examId={examId}
        subExamId={subExamId}
        subjectId={subjectId}
        topicId={topicId}
        timeLeft={timeLeft}
        formatTime={formatTime}
        isPracticeTest={isPracticeTest}
        testTitle={testData?.title}
      />
      <main className="flex-grow overflow-y-auto p-1 flex flex-col">
        <QuestionDisplay
          currentQuestion={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          selectedAnswers={selectedAnswers}
          handleAnswerSelect={handleAnswerSelect}
        />
      </main>
      <QuestionNavigation
        testData={testData}
        currentQuestion={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        selectedAnswers={selectedAnswers}
        goToNextQuestion={goToNextQuestion}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        isQuestionListOpen={isQuestionListOpen}
        setIsQuestionListOpen={setIsQuestionListOpen}
      />
    </div>
  );
}
