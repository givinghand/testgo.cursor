
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronRight, ListChecks } from "lucide-react";

export function QuestionNavigation({
  testData,
  currentQuestionIndex,
  selectedAnswers,
  goToNextQuestion,
  setCurrentQuestionIndex,
  isQuestionListOpen,
  setIsQuestionListOpen,
  currentQuestion
}) {
  if (!testData || !currentQuestion) return null;
  
  return (
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
  );
}
