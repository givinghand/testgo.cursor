
import React from "react";
import { Clock } from "lucide-react";

export function TestHeader({ examId, subjectId, topicId, timeLeft, formatTime, isPracticeTest }) {
  const currentExamId = isPracticeTest ? (examId || 'Genel Deneme') : examId;
  const currentSubjectId = isPracticeTest ? (subjectId || 'Karma') : subjectId;
  const currentTopicId = isPracticeTest ? (topicId || 'Genel') : topicId;

  const displayExamId = currentExamId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const displaySubjectId = currentSubjectId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const displayTopicId = currentTopicId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <header className="flex justify-between items-center mb-4 p-3 bg-card rounded-lg shadow-sm">
      <div>
        <p className="text-xs sm:text-sm font-semibold text-primary">{displayExamId} / {displaySubjectId}</p>
        <h1 className="text-base sm:text-lg md:text-xl font-bold text-foreground truncate max-w-[200px] sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
          {displayTopicId}
        </h1>
      </div>
      <div className="flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-destructive/10 text-destructive font-bold rounded-md text-sm sm:text-lg">
        <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
        {formatTime(timeLeft)}
      </div>
    </header>
  );
}
