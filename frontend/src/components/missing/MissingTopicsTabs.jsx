
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, BookOpen, CheckCircle, Download, FileText, Play, Plus } from "lucide-react";
import { missingTopicsData, recommendedStudyPlanData, fadeIn, staggerContainer } from "@/pages/MissingTopicsPage";

export function MissingTopicsTabs() {
  return (
    <Tabs defaultValue="missing" className="w-full mb-8">
      <TabsList className="w-full grid grid-cols-2 mb-6">
        <TabsTrigger value="missing">Eksik Konular</TabsTrigger>
        <TabsTrigger value="plan">Çalışma Planı</TabsTrigger>
      </TabsList>
      
      <TabsContent value="missing">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {missingTopicsData.map((topic) => (
            <motion.div key={topic.id} variants={fadeIn}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                      topic.subject === "Matematik" ? "bg-blue-100 text-blue-600" :
                      topic.subject === "Fizik" ? "bg-purple-100 text-purple-600" :
                      topic.subject === "Kimya" ? "bg-green-100 text-green-600" :
                      "bg-orange-100 text-orange-600"
                    }`}>
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{topic.subject}</div>
                      <div>{topic.topic}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <h4 className="font-medium text-sm text-gray-500">Alt Konular ve Hakimiyet</h4>
                    {topic.subtopics.map((subtopic, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span>{subtopic.name}</span>
                          <span className={`font-medium ${
                            subtopic.mastery < 30 ? "text-red-600" :
                            subtopic.mastery < 50 ? "text-amber-600" :
                            "text-green-600"
                          }`}>
                            {subtopic.mastery}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              subtopic.mastery < 30 ? "bg-red-500" :
                              subtopic.mastery < 50 ? "bg-amber-500" :
                              "bg-green-500"
                            }`}
                            style={{ width: `${subtopic.mastery}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="font-medium text-sm text-gray-500 mb-3">Önerilen Kaynaklar</h4>
                  <div className="space-y-3">
                    {topic.resources.map((resource, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                            resource.type === "video" ? "bg-red-100 text-red-600" :
                            resource.type === "document" ? "bg-blue-100 text-blue-600" :
                            "bg-green-100 text-green-600"
                          }`}>
                            {resource.type === "video" ? <Play className="h-4 w-4" /> :
                             resource.type === "document" ? <FileText className="h-4 w-4" /> :
                             <CheckCircle className="h-4 w-4" />}
                          </div>
                          <div>
                            <div className="font-medium">{resource.title}</div>
                            <div className="text-xs text-gray-500">
                              {resource.type === "video" ? `Video • ${resource.duration}` :
                               resource.type === "document" ? `Doküman • ${resource.pages} sayfa` :
                               `Alıştırma • ${resource.questions} soru`}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          {resource.type === "video" ? <Play className="h-4 w-4" /> :
                           resource.type === "document" ? <Download className="h-4 w-4" /> :
                           <Plus className="h-4 w-4" />}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Bu Konuyu Çalış</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </TabsContent>
      
      <TabsContent value="plan">
        <Card>
          <CardHeader>
            <CardTitle>Haftalık Çalışma Planı</CardTitle>
            <CardDescription>
              Eksik konularınız için özel olarak hazırlanmış çalışma programı
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recommendedStudyPlanData.map((day, dayIndex) => (
                <div key={dayIndex}>
                  <h3 className="text-lg font-semibold mb-4">{day.day}</h3>
                  <div className="space-y-4">
                    {day.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex border rounded-lg overflow-hidden">
                        <div className="w-24 bg-primary/10 flex items-center justify-center text-primary font-medium p-4">
                          {task.time}
                        </div>
                        <div className="flex-1 p-4">
                          <div className="font-medium">{task.subject}</div>
                          <div className="text-sm text-gray-600">{task.topic}</div>
                        </div>
                        <div className="flex items-center pr-4">
                          <Button variant="ghost" size="sm">Detay</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-800 mb-1">Çalışma Planı Hakkında</h4>
                  <p className="text-blue-700 text-sm">
                    Bu çalışma planı, eksik olduğunuz konular ve öğrenme hızınız dikkate alınarak yapay zeka tarafından oluşturulmuştur. Planı kendi programınıza göre özelleştirebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Planı Düzenle</Button>
            <Button>Planı İndir</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
