
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle } from "lucide-react";

export function TestResults({ testData, selectedAnswers, calculateScore }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Test Sonuçları</CardTitle>
          <CardDescription>
            {testData.title} testini tamamladınız. İşte sonuçlarınız:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Doğru Sayısı:</span>
              <span className="font-bold text-green-600">{calculateScore()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Yanlış Sayısı:</span>
              <span className="font-bold text-red-600">{testData.questions.length - calculateScore()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Başarı Oranı:</span>
              <span className="font-bold text-primary">{Math.round((calculateScore() / testData.questions.length) * 100)}%</span>
            </div>
          </div>
          
          <div className="relative pt-4">
            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full progress-gradient rounded-full"
                style={{ width: `${(calculateScore() / testData.questions.length) * 100}%` }}
              ></div>
            </div>
            <div className="absolute top-0 left-0 w-full flex justify-between text-xs text-gray-600">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full grid grid-cols-3 mb-6">
          <TabsTrigger value="all">Tüm Sorular</TabsTrigger>
          <TabsTrigger value="correct">Doğru Cevaplar</TabsTrigger>
          <TabsTrigger value="incorrect">Yanlış Cevaplar</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="space-y-6">
            {testData.questions.map((question) => (
              <Card key={question.id}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-start">
                    <span className="bg-gray-200 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      {question.id}
                    </span>
                    <span>{question.text}</span>
                  </CardTitle>
                  <CardDescription>
                    {selectedAnswers[question.id] === question.correctAnswer ? (
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="mr-2 h-5 w-5" /> Doğru cevap!
                      </span>
                    ) : (
                      <span className="flex items-center text-red-600">
                        <XCircle className="mr-2 h-5 w-5" /> Yanlış cevap! Doğru cevap: {question.correctAnswer}
                      </span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    {question.options.map((option) => (
                      <div
                        key={option.id}
                        className={`p-3 rounded-lg border ${
                          option.id === question.correctAnswer
                            ? "border-green-500 bg-green-50"
                            : selectedAnswers[question.id] === option.id && option.id !== question.correctAnswer
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center mr-3 ${
                            option.id === question.correctAnswer
                              ? "bg-green-500 text-white"
                              : selectedAnswers[question.id] === option.id && option.id !== question.correctAnswer
                              ? "bg-red-500 text-white"
                              : "border border-gray-300"
                          }`}>
                            {option.id}
                          </div>
                          <span>{option.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium mb-1">Açıklama:</p>
                    <p>{question.explanation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="correct">
          <div className="space-y-6">
            {testData.questions
              .filter(question => selectedAnswers[question.id] === question.correctAnswer)
              .map((question) => (
                <Card key={question.id}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        {question.id}
                      </span>
                      <span>{question.text}</span>
                    </CardTitle>
                    <CardDescription>
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="mr-2 h-5 w-5" /> Doğru cevap!
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      {question.options.map((option) => (
                        <div
                          key={option.id}
                          className={`p-3 rounded-lg border ${
                            option.id === question.correctAnswer
                              ? "border-green-500 bg-green-50"
                              : "border-gray-200"
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center mr-3 ${
                              option.id === question.correctAnswer
                                ? "bg-green-500 text-white"
                                : "border border-gray-300"
                            }`}>
                              {option.id}
                            </div>
                            <span>{option.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium mb-1">Açıklama:</p>
                      <p>{question.explanation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="incorrect">
          <div className="space-y-6">
            {testData.questions
              .filter(question => selectedAnswers[question.id] !== question.correctAnswer)
              .map((question) => (
                <Card key={question.id}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start">
                      <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        {question.id}
                      </span>
                      <span>{question.text}</span>
                    </CardTitle>
                    <CardDescription>
                      <span className="flex items-center text-red-600">
                        <XCircle className="mr-2 h-5 w-5" /> Yanlış cevap! Doğru cevap: {question.correctAnswer}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      {question.options.map((option) => (
                        <div
                          key={option.id}
                          className={`p-3 rounded-lg border ${
                            option.id === question.correctAnswer
                              ? "border-green-500 bg-green-50"
                              : selectedAnswers[question.id] === option.id
                              ? "border-red-500 bg-red-50"
                              : "border-gray-200"
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center mr-3 ${
                              option.id === question.correctAnswer
                                ? "bg-green-500 text-white"
                                : selectedAnswers[question.id] === option.id
                                ? "bg-red-500 text-white"
                                : "border border-gray-300"
                            }`}>
                              {option.id}
                            </div>
                            <span>{option.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium mb-1">Açıklama:</p>
                      <p>{question.explanation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 flex justify-center">
        <Button onClick={() => window.location.reload()}>Yeni Test Başlat</Button>
      </div>
    </motion.div>
  );
}
