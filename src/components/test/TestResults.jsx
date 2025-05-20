
import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, Award, TrendingUp, Clock, Brain, Star, ListChecks, FolderLock as LockIcon, RotateCcw, Home } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabaseClient";
import { useToast } from "@/components/ui/use-toast";

const ConfettiPiece = ({ x, y, rotation, color }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: '10px',
        height: '10px',
        backgroundColor: color,
        rotate: rotation,
      }}
      initial={{ opacity: 1, y: y, scale: 1 }}
      animate={{ 
        opacity: 0, 
        y: y + (Math.random() * 200 + 100), 
        scale: 0.5,
        rotate: rotation + (Math.random() * 360 - 180) 
      }}
      transition={{ duration: Math.random() * 2 + 2, ease: "easeOut" }} 
    />
  );
};

const ConfettiExplosion = ({ count = 100 }) => {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const newPieces = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * -20 - 80, 
      rotation: Math.random() * 360,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    }));
    setPieces(newPieces);
  }, [count]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999, overflow: 'hidden' }}>
      {pieces.map(p => <ConfettiPiece key={p.id} {...p} />)}
    </div>
  );
};

const QuestionReviewModal = ({ question, selectedAnswer, isOpen, onOpenChange, isPremium }) => {
  if (!question) return null;
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg md:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-primary">Soru İnceleme: Soru {question.id}</DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4 max-h-[70vh] overflow-y-auto">
          {question.image && (
            <div className="mb-3 sm:mb-4 rounded-md overflow-hidden max-h-48 sm:max-h-64 flex justify-center items-center bg-muted">
              <img src={question.image} alt={`Soru ${question.id} için görsel`} className="object-contain max-h-full max-w-full" />
            </div>
          )}
          <p className="text-foreground font-medium">{question.text}</p>
          <div className="space-y-2">
            {question.options.map(option => (
              <div
                key={option.id}
                className={`p-3 rounded-md border
                  ${option.id === question.correctAnswer ? 'bg-green-500/10 border-green-500 text-green-700' : ''}
                  ${option.id === selectedAnswer && option.id !== question.correctAnswer ? 'bg-red-500/10 border-red-500 text-red-700' : ''}
                  ${option.id === selectedAnswer && option.id === question.correctAnswer ? 'ring-2 ring-green-500' : ''}
                  ${option.id !== selectedAnswer && option.id !== question.correctAnswer ? 'bg-card' : ''}
                `}
              >
                <span className="font-bold">{option.id})</span> {option.text}
                {option.id === question.correctAnswer && <span className="ml-2 font-semibold">(Doğru Cevap)</span>}
                {option.id === selectedAnswer && option.id !== question.correctAnswer && <span className="ml-2 font-semibold">(Sizin Cevabınız)</span>}
              </div>
            ))}
          </div>
          {isPremium ? (
            <Card className="bg-primary/5 border-primary/20 mt-4">
              <CardContent className="p-4">
                <h4 className="font-semibold text-primary mb-1">Açıklama:</h4>
                <p className="text-sm text-muted-foreground">{question.explanation}</p>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-muted/50 border-border mt-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-background/70 backdrop-blur-sm flex flex-col items-center justify-center z-10 p-2">
                <LockIcon className="h-8 w-8 text-primary mb-2"/>
                <p className="text-sm font-semibold text-foreground text-center">Detaylı açıklamalar için Premium'a geçin.</p>
                <Button asChild size="sm" className="mt-2 text-xs">
                   <Link to="/premium-uye-ol">Premium'a Yükselt</Link>
                </Button>
              </div>
              <CardContent className="p-4 blur-sm select-none">
                <h4 className="font-semibold text-primary mb-1">Açıklama:</h4>
                <p className="text-sm text-muted-foreground">{question.explanation}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const BlurredOverlay = ({ message, actionText, actionLink }) => (
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 p-4 rounded-lg">
      <LockIcon className="h-10 w-10 text-primary mb-3"/>
      <p className="text-lg font-semibold text-foreground mb-3 text-center">{message}</p>
      {actionLink && actionText && (
         <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
           <Link to={actionLink}>{actionText}</Link>
         </Button>
      )}
    </div>
  );

export function TestResults({ testData, selectedAnswers, calculateScore, timeTaken, examParams }) {
  const { user, loading: authLoading, checkUserPremiumStatus } = useAuth();
  const isPremium = !authLoading && user ? checkUserPremiumStatus() : false;
  const { toast } = useToast();
  const navigate = useNavigate();

  const score = calculateScore();
  const totalQuestions = testData.questions.length;
  const wrongAnswersCount = totalQuestions - score - (totalQuestions - Object.keys(selectedAnswers).length);
  const emptyAnswers = totalQuestions - Object.keys(selectedAnswers).length;
  const accuracy = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  const timePerQuestion = totalQuestions > 0 ? Math.round(timeTaken / totalQuestions) : 0;

  const [reviewQuestion, setReviewQuestion] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isSavingResult, setIsSavingResult] = useState(false);

  const saveTestResult = useCallback(async () => {
    if (!user || isSavingResult) return;
    setIsSavingResult(true);
    try {
      const { data, error } = await supabase
        .from('user_test_results')
        .insert([{
          user_id: user.id,
          test_name: testData.title,
          exam_id: examParams.examId,
          subject_id: examParams.subjectId,
          topic_id: examParams.topicId,
          sub_exam_id: examParams.subExamId, // YKS için AYT/TYT
          score: score,
          total_questions: totalQuestions,
          time_taken: timeTaken,
          answers: selectedAnswers,
          taken_at: new Date().toISOString(),
        }]);

      if (error) throw error;
      toast({
        title: "Sonuçlar Kaydedildi!",
        description: "Test sonuçlarınız başarıyla profilinize kaydedildi.",
        className: "bg-green-500 text-white"
      });
    } catch (error) {
      console.error("Error saving test result:", error);
      toast({
        title: "Sonuç Kaydedilemedi",
        description: "Test sonuçları kaydedilirken bir hata oluştu: " + error.message,
        variant: "destructive"
      });
    } finally {
      setIsSavingResult(false);
    }
  }, [user, testData, selectedAnswers, score, totalQuestions, timeTaken, examParams, toast, isSavingResult]);

  useEffect(() => {
    if(user && testData){ // Test verisi ve kullanıcı varsa kaydetmeyi dene
        saveTestResult();
    }
  }, [user, testData, saveTestResult]);


  const handleQuestionReview = (question) => {
    setReviewQuestion(question);
    setIsReviewModalOpen(true);
  };


  let performanceMessage = "";
  let performanceColor = "text-foreground";
  let performanceIcon = <Star className="h-6 w-6 mr-2" />;

  if (accuracy >= 90) {
    performanceMessage = "Mükemmel!";
    performanceColor = "text-green-500";
    performanceIcon = <Award className="h-6 w-6 mr-2 text-green-500" />;
  } else if (accuracy >= 70) {
    performanceMessage = "Çok İyi!";
    performanceColor = "text-sky-500";
    performanceIcon = <TrendingUp className="h-6 w-6 mr-2 text-sky-500" />;
  } else if (accuracy >= 50) {
    performanceMessage = "İyi Yoldasın!";
    performanceColor = "text-yellow-500";
    performanceIcon = <Brain className="h-6 w-6 mr-2 text-yellow-500" />;
  } else {
    performanceMessage = "Daha Çok Çalışmalısın.";
    performanceColor = "text-red-500";
    performanceIcon = <XCircle className="h-6 w-6 mr-2 text-red-500" />;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {accuracy >= 70 && <ConfettiExplosion />}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="shadow-xl overflow-hidden bg-card">
          <CardHeader className="text-center bg-primary/10 p-6">
            <motion.div initial={{ scale:0 }} animate={{scale:1}} transition={{delay:0.2, type: "spring", stiffness:150}}>
              <Award className="mx-auto h-16 w-16 text-primary mb-3" />
            </motion.div>
            <CardTitle className="text-3xl font-bold text-primary">Test Sonuçları</CardTitle>
            <CardDescription className="text-muted-foreground">{testData.title}</CardDescription>
          </CardHeader>
          <CardContent className="py-6 px-4 sm:px-6">
            <div className="mb-6 p-4 border border-border rounded-lg bg-background relative">
              {!isPremium && (
                 <BlurredOverlay 
                  message="Detaylı soru analizi için Premium üyeliğe geçin!"
                  actionText="Premium'a Yükselt"
                  actionLink="/premium-uye-ol"
                />
              )}
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <ListChecks className="h-5 w-5 mr-2 text-primary" /> Soru Analizi
              </h3>
              <div className={`grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 ${!isPremium ? 'blur-sm select-none pointer-events-none' : ''}`}>
                {testData.questions.map((q, index) => {
                  const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
                  const isAnswered = selectedAnswers.hasOwnProperty(q.id);
                  let buttonClass = "bg-muted hover:bg-muted/80 border-border";
                  if (isAnswered) {
                    buttonClass = isCorrect ? "bg-green-500/20 hover:bg-green-500/30 border-green-500 text-green-700" : "bg-red-500/20 hover:bg-red-500/30 border-red-500 text-red-700";
                  }
                  
                  return (
                    <Button
                      key={q.id}
                      variant="outline"
                      size="icon"
                      className={`h-9 w-9 text-xs font-semibold rounded-md transition-all ${buttonClass}`}
                      onClick={() => isPremium && handleQuestionReview(q)}
                      title={`Soru ${index + 1} ${isAnswered ? (isCorrect ? '(Doğru)' : '(Yanlış)') : '(Boş)'}`}
                      disabled={!isPremium}
                    >
                      {index + 1}
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                className="mb-6"
              >
                <p className="text-5xl font-bold text-foreground">{score} / {totalQuestions}</p>
                <p className="text-xl text-muted-foreground">Doğru Cevap ({accuracy.toFixed(1)}%)</p>
              </motion.div>
              <Progress value={accuracy} className="h-3 mb-6 progress-gradient rounded-full bg-muted" />
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-6">
                <motion.div variants={{hidden: {opacity:0, y:20}, visible:{opacity:1,y:0}}} initial="hidden" animate="visible" transition={{delay:0.3}}>
                  <Card className="bg-green-500/10 p-3 rounded-lg">
                    <div className="flex items-center justify-center text-green-600 mb-1">
                      <CheckCircle className="h-5 w-5 mr-1.5" />
                      <p className="text-xl font-semibold">{score}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Doğru</p>
                  </Card>
                </motion.div>
                <motion.div variants={{hidden: {opacity:0, y:20}, visible:{opacity:1,y:0}}} initial="hidden" animate="visible" transition={{delay:0.4}}>
                  <Card className="bg-red-500/10 p-3 rounded-lg">
                    <div className="flex items-center justify-center text-red-600 mb-1">
                      <XCircle className="h-5 w-5 mr-1.5" />
                      <p className="text-xl font-semibold">{wrongAnswersCount < 0 ? 0 : wrongAnswersCount}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Yanlış</p>
                  </Card>
                </motion.div>
                <motion.div variants={{hidden: {opacity:0, y:20}, visible:{opacity:1,y:0}}} initial="hidden" animate="visible" transition={{delay:0.5}}>
                  <Card className="bg-gray-500/10 p-3 rounded-lg">
                    <div className="flex items-center justify-center text-gray-600 mb-1">
                      <div className="h-5 w-5 mr-1.5 flex items-center justify-center font-bold text-base">-</div>
                      <p className="text-xl font-semibold">{emptyAnswers}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Boş</p>
                  </Card>
                </motion.div>
              </div>

              <motion.div 
                variants={{hidden: {opacity:0, y:20}, visible:{opacity:1,y:0}}} initial="hidden" animate="visible" transition={{delay:0.6}}
                className="my-6 p-4 bg-background border border-border rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">Performans Değerlendirmesi</h3>
                <div className={`flex items-center justify-center text-lg font-medium ${performanceColor} mb-2`}>
                  {performanceIcon}
                  {performanceMessage}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center md:justify-start">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>Süre: {Math.floor(timeTaken / 60)} dk {timeTaken % 60} sn</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                    <span>Soru Başına Süre: {timePerQuestion} sn</span>
                  </div>
                </div>
              </motion.div>
              
              <p className="text-muted-foreground text-sm mt-4">
                Detaylı analiz ve konu bazlı performansınız için "Durumum" sayfasını ziyaret edebilirsiniz.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-center items-center gap-3 p-4 sm:p-6 bg-muted/50 border-t">
            <Button onClick={() => navigate(0)} variant="outline" className="w-full sm:w-auto">
              <RotateCcw className="mr-2 h-4 w-4" /> Yeniden Başla
            </Button>
            <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/test-coz">
                <Home className="mr-2 h-4 w-4" /> Yeni Test Seç
              </Link>
            </Button>
             <Button onClick={() => navigate("/durumum")} variant="secondary" className="w-full sm:w-auto">
                <ListChecks className="mr-2 h-4 w-4" /> Durumumu Gör
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      {reviewQuestion && (
        <QuestionReviewModal
          question={reviewQuestion}
          selectedAnswer={selectedAnswers[reviewQuestion.id]}
          isOpen={isReviewModalOpen}
          onOpenChange={setIsReviewModalOpen}
          isPremium={isPremium}
        />
      )}
    </div>
  );
}
