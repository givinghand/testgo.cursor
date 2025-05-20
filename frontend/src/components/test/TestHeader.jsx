
import React from 'react';
import { Clock } from 'lucide-react';

export function TestHeader({ examId, subExamId, subjectId, topicId, timeLeft, formatTime, isPracticeTest, testTitle }) {
  const examDisplay = isPracticeTest ? (examId === 'genel-deneme' ? 'Genel Deneme' : examId?.toUpperCase()) : examId?.toUpperCase();
  const subExamDisplay = subExamId ? ` / ${subExamId.toUpperCase()}` : '';
  const subjectDisplay = subjectId === 'karma' && isPracticeTest ? 'Karma Deneme' : (subjectId ? ` / ${subjectId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}` : '');
  const topicDisplay = topicId === 'genel' && isPracticeTest ? '' : (topicId ? ` - ${topicId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}` : '');

  let fullTitle = testTitle;
  if (!fullTitle) {
     fullTitle = isPracticeTest 
        ? `${examDisplay}${subExamDisplay}${subjectDisplay}`.trim()
        : `${examDisplay}${subExamDisplay}${subjectDisplay}${topicDisplay}`.trim();
  }


  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-4 p-3 bg-card rounded-lg shadow-sm">
      <div className="mb-2 sm:mb-0 text-center sm:text-left">
        <p className="text-xs sm:text-sm font-semibold text-primary truncate max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          {examDisplay}{subExamDisplay}{subjectDisplay}
        </p>
        <h1 className="text-base sm:text-lg md:text-xl font-bold text-foreground truncate max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          {isPracticeTest ? fullTitle : topicId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </h1>
      </div>
      <div className="flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-destructive/10 text-destructive font-bold rounded-md text-sm sm:text-lg">
        <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
        {formatTime(timeLeft)}
      </div>
    </header>
  );
}
