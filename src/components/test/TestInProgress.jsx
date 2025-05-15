
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, Clock, ChevronRight, ChevronLeft } from "lucide-react";

export function TestInProgress({
  testData,
  currentQuestion,
  currentQuestionIndex,
  timeLeft,
  formatTime,
  progress,
  selectedAnswers,
  handleAnswerSelect,
  goToPreviousQuestion,
  goToNextQuestion,
  showExplanation,
  setShowExplanation,
  setCurrentQuestionIndex
}) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{testData.title}</h1>
        <p className="text-gray-600 mb-4">{testData.description}</p>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div className="flex items-center">
            <div className="bg-primary/10 text-primary font-medium rounded-full px-4 py-1 flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {formatTime(timeLeft)}
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="flex justify-between text-sm mb-1">
              <span>İlerleme</span>
              <span>{currentQuestionIndex + 1} / {testData.questions.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-start">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                {currentQuestionIndex + 1}
              </span>
              <span>{currentQuestion.text}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <div
                  key={option.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedAnswers[currentQuestion.id] === option.id
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-primary/50 hover:bg-gray-50"
                  }`}
                  onClick={() => handleAnswerSelect(currentQuestion.id, option.id)}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 border ${
                      selectedAnswers[currentQuestion.id] === option.id
                        ? "border-primary bg-primary text-white"
                        : "border-gray-300"
                    }`}>
                      {option.id}
                    </div>
                    <span>{option.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Önceki Soru
            </Button>
            
            <div className="flex gap-2">
              {selectedAnswers[currentQuestion.id] && (
                <Button 
                  variant="outline" 
                  onClick={() => setShowExplanation(!showExplanation)}
                >
                  {showExplanation ? "Açıklamayı Gizle" : "Açıklamayı Göster"}
                </Button>
              )}
              
              <Button onClick={goToNextQuestion}>
                {currentQuestionIndex === testData.questions.length - 1 ? "Testi Bitir" : "Sonraki Soru"}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
        
        {showExplanation && selectedAnswers[currentQuestion.id] && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Açıklama</CardTitle>
                <CardDescription>
                  {selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer ? (
                    <span className="flex items-center text-green-600">
                      <CheckCircle className="mr-2 h-5 w-5" /> Doğru cevap!
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600">
                      <XCircle className="mr-2 h-5 w-5" /> Yanlış cevap! Doğru cevap: {currentQuestion.correctAnswer}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{currentQuestion.explanation}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
      
      <div className="mt-8 grid grid-cols-5 sm:grid-cols-10 gap-2">
        {testData.questions.map((question, index) => (
          <div
            key={question.id}
            className={`w-full aspect-square rounded-md flex items-center justify-center cursor-pointer text-sm font-medium transition-all ${
              index === currentQuestionIndex
                ? "bg-primary text-white"
                : selectedAnswers[question.id]
                ? "bg-primary/20 text-primary"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setCurrentQuestionIndex(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
