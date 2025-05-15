
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, FileText, Users, Award, BarChart2, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ExamList } from "@/components/exam/ExamList";
import { ExamDetails } from "@/components/exam/ExamDetails";
import { ExamInfoCards } from "@/components/exam/ExamInfoCards";

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const upcomingExamsData = [
  {
    id: 1,
    title: "TYT Deneme Sınavı - 8",
    date: "15 Haziran 2025",
    time: "10:00 - 12:15",
    participants: 12580,
    status: "upcoming",
    description: "Türkiye genelinde yapılacak olan TYT deneme sınavı. Tüm TYT konularını kapsamaktadır."
  },
  {
    id: 2,
    title: "AYT Matematik Deneme Sınavı",
    date: "18 Haziran 2025",
    time: "14:00 - 15:15",
    participants: 8750,
    status: "upcoming",
    description: "AYT Matematik konularını kapsayan özel deneme sınavı."
  },
  {
    id: 3,
    title: "AYT Fen Bilimleri Deneme Sınavı",
    date: "22 Haziran 2025",
    time: "10:00 - 11:30",
    participants: 9120,
    status: "upcoming",
    description: "Fizik, Kimya ve Biyoloji derslerini kapsayan AYT Fen Bilimleri deneme sınavı."
  }
];

export const pastExamsData = [
  {
    id: 4,
    title: "TYT Deneme Sınavı - 7",
    date: "1 Haziran 2025",
    time: "10:00 - 12:15",
    participants: 11980,
    status: "completed",
    score: 68.5,
    rank: 4250,
    percentile: 65
  },
  {
    id: 5,
    title: "AYT Edebiyat-Sosyal Deneme Sınavı",
    date: "25 Mayıs 2025",
    time: "14:00 - 15:30",
    participants: 7850,
    status: "completed",
    score: 72.0,
    rank: 2100,
    percentile: 73
  },
  {
    id: 6,
    title: "TYT Deneme Sınavı - 6",
    date: "18 Mayıs 2025",
    time: "10:00 - 12:15",
    participants: 12350,
    status: "completed",
    score: 65.5,
    rank: 4800,
    percentile: 61
  }
];

export const examDetailsData = {
  id: 4,
  title: "TYT Deneme Sınavı - 7",
  date: "1 Haziran 2025",
  time: "10:00 - 12:15",
  participants: 11980,
  status: "completed",
  score: 68.5,
  rank: 4250,
  percentile: 65,
  sections: [
    {
      name: "Türkçe",
      questions: 40,
      correct: 32,
      wrong: 6,
      empty: 2,
      netScore: 30.8,
      percentile: 72
    },
    {
      name: "Matematik",
      questions: 40,
      correct: 28,
      wrong: 8,
      empty: 4,
      netScore: 26.4,
      percentile: 68
    },
    {
      name: "Sosyal Bilimler",
      questions: 20,
      correct: 14,
      wrong: 4,
      empty: 2,
      netScore: 13.2,
      percentile: 65
    },
    {
      name: "Fen Bilimleri",
      questions: 20,
      correct: 12,
      wrong: 5,
      empty: 3,
      netScore: 11.0,
      percentile: 58
    }
  ],
  wrongTopics: [
    { subject: "Matematik", topic: "İntegral", count: 3 },
    { subject: "Fizik", topic: "Elektrik ve Manyetizma", count: 2 },
    { subject: "Kimya", topic: "Organik Kimya", count: 2 },
    { subject: "Türkçe", topic: "Anlatım Bozuklukları", count: 2 }
  ]
};

export function ExamPage() {
  const [selectedExam, setSelectedExam] = useState(null);
  const [showExamDetails, setShowExamDetails] = useState(false);
  const { toast } = useToast();

  const handleRegisterExam = (examId) => {
    toast({
      title: "Sınava Kaydoldunuz!",
      description: "Deneme sınavına başarıyla kaydoldunuz. Sınav günü size hatırlatma gönderilecektir.",
    });
  };

  const handleViewExamDetails = (exam) => {
    setSelectedExam(exam); // In a real app, you'd fetch details for this exam
    setShowExamDetails(true);
  };

  const handleBackToList = () => {
    setShowExamDetails(false);
    setSelectedExam(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {!showExamDetails ? (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2">Ülke Geneli Deneme Sınavları</h1>
            <p className="text-gray-600">
              Türkiye genelinde yapılan deneme sınavlarına katılın, seviyenizi ölçün ve sıralamanızı görün.
            </p>
          </motion.div>

          <ExamList 
            upcomingExams={upcomingExamsData}
            pastExams={pastExamsData}
            onRegisterExam={handleRegisterExam}
            onViewDetails={handleViewExamDetails}
          />
          
          <ExamInfoCards />
        </>
      ) : (
        <ExamDetails 
          examDetails={examDetailsData} // Pass the static data for now
          onBack={handleBackToList} 
        />
      )}
    </div>
  );
}
