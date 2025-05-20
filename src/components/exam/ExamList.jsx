
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users } from "lucide-react";
import { fadeIn, staggerContainer } from "@/pages/ExamPage";

export function ExamList({ upcomingExams, pastExams, onRegisterExam, onViewDetails }) {
  return (
    <Tabs defaultValue="upcoming" className="w-full mb-8">
      <TabsList className="w-full grid grid-cols-2 mb-6">
        <TabsTrigger value="upcoming">Yaklaşan Sınavlar</TabsTrigger>
        <TabsTrigger value="past">Geçmiş Sınavlar</TabsTrigger>
      </TabsList>
      
      <TabsContent value="upcoming">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {upcomingExams.map((exam) => (
            <motion.div key={exam.id} variants={fadeIn}>
              <Card>
                <CardHeader>
                  <CardTitle>{exam.title}</CardTitle>
                  <CardDescription>{exam.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      <span>{exam.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <span>{exam.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      <span>{exam.participants.toLocaleString()} Katılımcı</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-4">
                  <Button variant="outline">Detaylar</Button>
                  <Button onClick={() => onRegisterExam(exam.id)}>Sınava Kaydol</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </TabsContent>
      
      <TabsContent value="past">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {pastExams.map((exam) => (
            <motion.div key={exam.id} variants={fadeIn}>
              <Card>
                <CardHeader>
                  <CardTitle>{exam.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                      <span>{exam.date}</span>
                      <Clock className="h-4 w-4 text-gray-500 ml-4 mr-2" />
                      <span>{exam.time}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Puanınız</div>
                      <div className="text-2xl font-bold text-primary">{exam.score}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Sıralamanız</div>
                      <div className="text-2xl font-bold text-primary">{exam.rank.toLocaleString()}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Yüzdelik Dilim</div>
                      <div className="text-2xl font-bold text-primary">%{exam.percentile}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={() => onViewDetails(exam)}>Detaylı Sonuçlar</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </TabsContent>
    </Tabs>
  );
}
