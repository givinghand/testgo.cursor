import React from 'react';
import { Card } from "@/components/ui/card";
import { PremiumLock } from './PremiumLock';

export function TestResults({ results }) {
  return (
    <div className="space-y-8">
      {/* Basic Results - Available to all users */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Test Results</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Questions:</span>
            <span className="font-medium">{results.totalQuestions}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Correct Answers:</span>
            <span className="font-medium text-green-600">{results.correctAnswers}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Wrong Answers:</span>
            <span className="font-medium text-red-600">{results.wrongAnswers}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Score:</span>
            <span className="font-bold text-lg">{results.score}%</span>
          </div>
        </div>
      </Card>

      {/* Detailed Analysis - Premium Only */}
      <PremiumLock>
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Detailed Analysis</h2>
          <div className="space-y-6">
            {/* Time Analysis */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Time Analysis</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Average Time per Question:</span>
                  <span>{results.analysis.averageTimePerQuestion}s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Fastest Answer:</span>
                  <span>{results.analysis.fastestAnswer}s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Slowest Answer:</span>
                  <span>{results.analysis.slowestAnswer}s</span>
                </div>
              </div>
            </div>

            {/* Subject Performance */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Subject Performance</h3>
              <div className="space-y-2">
                {results.analysis.subjectPerformance.map((subject) => (
                  <div key={subject.name} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{subject.name}:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary" 
                          style={{ width: `${subject.score}%` }}
                        />
                      </div>
                      <span className="font-medium min-w-[3ch]">{subject.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Recommendations</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {results.analysis.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </PremiumLock>
    </div>
  );
} 