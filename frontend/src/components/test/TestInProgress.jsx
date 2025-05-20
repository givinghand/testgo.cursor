
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Clock, ChevronRight, ListChecks } from "lucide-react";

export function TestInProgress({
  testData,
  currentQuestion,
  currentQuestionIndex,
  timeLeft,
  formatTime,
  selectedAnswers,
  handleAnswerSelect,
  goToNextQuestion,
  setCurrentQuestionIndex,
  isQuestionListOpen,
  setIsQuestionListOpen,
  examId,
  subjectId,
  topicId
}) {
  return (
    <div className="container mx-auto px-2 py-4 md:px-4 md:py-6 flex flex-col h-[calc(100vh-8rem)]">
      <header className="flex justify-between items-center mb-4 p-3 bg-card rounded-lg shadow-sm">
        <div>
          <p className="text-xs sm:text-sm font-semibold text-primary">{examId?.toUpperCase()} / {subjectId?.toUpperCase()}</p>
          <h1 className="text-base sm:text-lg md:text-xl font-bold text-foreground truncate max-w-[200px] sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
            {topicId?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h1>
        </div>
        <div className="flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-destructive/10 text-destructive font-bold rounded-md text-sm sm:text-lg">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
          {formatTime(timeLeft)}
        </div>
      </header>

      <main className="flex-grow overflow-y-auto p-1 flex flex-col">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-md flex-grow flex flex-col"
        >
          <div className="flex items-start mb-3 sm:mb-4">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-base sm:text-lg font-bold mr-2 sm:mr-3 shadow">
              {currentQuestionIndex + 1}
            </div>
            <p className="text-sm sm:text-base md:text-lg font-medium text-foreground flex-grow pt-0.5 sm:pt-1">{currentQuestion.text}</p>
          </div>

          {currentQuestion.image && (
            <div className="mb-3 sm:mb-4 rounded-md overflow-hidden max-h-48 sm:max-h-64 flex justify-center items-center bg-muted">
              <img-replace src={currentQuestion.image} alt={`Soru ${currentQuestionIndex + 1} için görsel`} class="object-contain max-h-full max-w-full" />
            </div>
          )}

          <div className="space-y-2 sm:space-y-3 mt-auto">
            {currentQuestion.options.map((option) => (
              <Button
                key={option.id}
                variant={selectedAnswers[currentQuestion.id] === option.id ? "default" : "outline"}
                className={`w-full justify-start text-left h-auto py-2.5 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm transition-all duration-200 ease-in-out transform hover:scale-[1.01]
                  ${selectedAnswers[currentQuestion.id] === option.id 
                    ? 'bg-primary text-primary-foreground ring-2 ring-primary ring-offset-1 shadow-md' 
                    : 'bg-card hover:bg-primary/5 hover:border-primary text-foreground border-border'
                  }`}
                onClick={() => handleAnswerSelect(currentQuestion.id, option.id)}
              >
                <span className={`mr-2 sm:mr-3 font-bold w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border-2 text-xs sm:text-sm
                  ${selectedAnswers[currentQuestion.id] === option.id 
                    ? 'border-primary-foreground bg-primary-foreground text-primary' 
                    : 'border-primary text-primary'
                  }`}>
                  {option.id}
                </span>
                <span className="flex-grow">{option.text}</span>
              </Button>
            ))}
          </div>
        </motion.div>
      </main>

      <footer className="mt-auto pt-3 sm:pt-4 flex justify-between items-center p-2 sm:p-3 bg-card rounded-lg shadow-sm">
        <Dialog open={isQuestionListOpen} onOpenChange={setIsQuestionListOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="text-primary border-primary hover:bg-primary/10 text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 h-auto">
              <ListChecks className="mr-1.5 h-4 w-4 sm:h-5 sm:w-5" />
              Sorular ({currentQuestionIndex + 1}/{testData.questions.length})
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-xs md:max-w-sm p-0">
            <DialogHeader className="p-3 sm:p-4 border-b">
              <DialogTitle className="text-primary text-base sm:text-lg">Soru Listesi</DialogTitle>
            </DialogHeader>
            <div className="p-3 sm:p-4 grid grid-cols-4 sm:grid-cols-5 gap-1.5 sm:gap-2 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
              {testData.questions.map((q, index) => (
                <Button
                  key={q.id}
                  variant={index === currentQuestionIndex ? "default" : selectedAnswers[q.id] ? "secondary" : "outline"}
                  size="icon"
                  className={`h-8 w-8 sm:h-9 sm:w-9 text-xs sm:text-sm font-semibold rounded-md transition-all
                    ${index === currentQuestionIndex ? 'bg-primary text-primary-foreground' : 
                      selectedAnswers[q.id] ? 'bg-secondary text-secondary-foreground' : 
                      'border-border hover:bg-muted'}`}
                  onClick={() => {
                    setCurrentQuestionIndex(index);
                    setIsQuestionListOpen(false);
                  }}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
        
        <Button 
          onClick={goToNextQuestion} 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 h-auto"
          disabled={!selectedAnswers[currentQuestion.id] && currentQuestionIndex !== testData.questions.length -1 }
        >
          {currentQuestionIndex === testData.questions.length - 1 ? "Testi Bitir" : "Sonraki Soru"}
          <ChevronRight className="ml-1.5 h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </footer>
    </div>
  );
}
