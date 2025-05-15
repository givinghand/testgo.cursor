
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, Award, TrendingUp, Clock, Brain, Star } from "lucide-react";

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
        y: y + (Math.random() * 200 + 100), // Fall further
        scale: 0.5,
        rotate: rotation + (Math.random() * 360 - 180) // Spin more
      }}
      transition={{ duration: Math.random() * 2 + 2, ease: "easeOut" }} // Slower fall
    />
  );
};

const ConfettiExplosion = ({ count = 100 }) => {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const newPieces = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * -20 - 80, // Start higher and more spread out
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


export function TestResults({ testData, selectedAnswers, calculateScore, timeLeft, totalTime, timeTaken }) {
  const score = calculateScore();
  const totalQuestions = testData.questions.length;
  const wrongAnswers = totalQuestions - score - (totalQuestions - Object.keys(selectedAnswers).length);
  const emptyAnswers = totalQuestions - Object.keys(selectedAnswers).length;
  const accuracy = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  const timeSaved = totalTime - timeTaken;
  const timePerQuestion = totalQuestions > 0 ? Math.round(timeTaken / totalQuestions) : 0;

  let performanceMessage = "";
  let performanceColor = "text-foreground";
  let performanceIcon = <Star className="h-6 w-6 mr-2" />;

  if (accuracy >= 90) {
    performanceMessage = "Çok Başarılı!";
    performanceColor = "text-green-500";
    performanceIcon = <Award className="h-6 w-6 mr-2 text-green-500" />;
  } else if (accuracy >= 70) {
    performanceMessage = "Başarılı!";
    performanceColor = "text-sky-500";
    performanceIcon = <TrendingUp className="h-6 w-6 mr-2 text-sky-500" />;
  } else if (accuracy >= 55) {
    performanceMessage = "Daha da geliştirebilirsin.";
    performanceColor = "text-yellow-500";
    performanceIcon = <Brain className="h-6 w-6 mr-2 text-yellow-500" />;
  } else {
    performanceMessage = "Konuya çalışıp tekrar denemelisin.";
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
        <Card className="shadow-xl overflow-hidden">
          <CardHeader className="text-center bg-primary/10 p-6">
            <motion.div initial={{ scale:0 }} animate={{scale:1}} transition={{delay:0.2, type: "spring", stiffness:150}}>
              <Award className="mx-auto h-16 w-16 text-primary mb-3" />
            </motion.div>
            <CardTitle className="text-3xl font-bold text-primary">Test Sonuçları</CardTitle>
            <CardDescription className="text-muted-foreground">{testData.title}</CardDescription>
          </CardHeader>
          <CardContent className="py-6 px-4 sm:px-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-5xl font-bold text-foreground">{score} / {totalQuestions}</p>
              <p className="text-xl text-muted-foreground">Doğru Cevap ({accuracy.toFixed(1)}%)</p>
            </motion.div>
            <Progress value={accuracy} className="h-3 mb-6 progress-gradient rounded-full" />
            
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
                    <p className="text-xl font-semibold">{wrongAnswers < 0 ? 0 : wrongAnswers}</p>
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
              className="my-6 p-4 bg-card border border-border rounded-lg shadow-sm"
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
                {timeSaved > 0 && (
                  <div className="flex items-center justify-center md:justify-start col-span-1 md:col-span-2">
                     <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Artan Süre: {Math.floor(timeSaved / 60)} dk {timeSaved % 60} sn</span>
                  </div>
                )}
              </div>
            </motion.div>
            
            <p className="text-muted-foreground text-sm mt-4">
              Detaylı analiz ve konu bazlı performansınız için "Durumum" sayfasını ziyaret edebilirsiniz.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-center gap-3 p-4 sm:p-6 bg-muted/50 border-t">
            <Button onClick={() => window.location.reload()} variant="outline" className="w-full sm:w-auto">Yeniden Başla</Button>
            <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="/test-coz">Yeni Test Seç</a>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
