
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function QuestionDisplay({
  currentQuestion,
  currentQuestionIndex,
  selectedAnswers,
  handleAnswerSelect
}) {
  if (!currentQuestion) return null;

  return (
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
  );
}
