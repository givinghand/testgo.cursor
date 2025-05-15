
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, BookOpen, CheckCircle, Clock, Download, FileText, Play, Plus } from "lucide-react";
import { MissingTopicsStats } from "@/components/missing/MissingTopicsStats";
import { MissingTopicsTabs } from "@/components/missing/MissingTopicsTabs";
import { MissingTopicsSummary } from "@/components/missing/MissingTopicsSummary";

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

export const missingTopicsData = [
  {
    id: 1,
    subject: "Matematik",
    topic: "İntegral",
    subtopics: [
      { name: "Belirsiz İntegral", mastery: 40 },
      { name: "Belirli İntegral", mastery: 30 },
      { name: "İntegral Uygulamaları", mastery: 25 },
    ],
    resources: [
      { type: "video", title: "İntegral Temel Kavramlar", duration: "18 dk" },
      { type: "document", title: "İntegral Formülleri", pages: 5 },
      { type: "practice", title: "İntegral Alıştırmaları", questions: 25 },
    ]
  },
  {
    id: 2,
    subject: "Fizik",
    topic: "Elektrik ve Manyetizma",
    subtopics: [
      { name: "Elektrik Alan", mastery: 45 },
      { name: "Manyetik Alan", mastery: 35 },
      { name: "Elektromanyetik İndüksiyon", mastery: 20 },
    ],
    resources: [
      { type: "video", title: "Elektrik Alan ve Potansiyel", duration: "22 dk" },
      { type: "document", title: "Manyetizma Özet", pages: 8 },
      { type: "practice", title: "Elektromanyetizma Testleri", questions: 30 },
    ]
  },
  {
    id: 3,
    subject: "Kimya",
    topic: "Organik Kimya",
    subtopics: [
      { name: "Hidrokarbonlar", mastery: 50 },
      { name: "Fonksiyonel Gruplar", mastery: 40 },
      { name: "Organik Tepkimeler", mastery: 30 },
    ],
    resources: [
      { type: "video", title: "Organik Kimya Giriş", duration: "25 dk" },
      { type: "document", title: "Fonksiyonel Gruplar Şeması", pages: 3 },
      { type: "practice", title: "Organik Kimya Soruları", questions: 20 },
    ]
  },
  {
    id: 4,
    subject: "Biyoloji",
    topic: "Genetik",
    subtopics: [
      { name: "Mendel Genetiği", mastery: 55 },
      { name: "DNA ve RNA", mastery: 45 },
      { name: "Genetik Hastalıklar", mastery: 35 },
    ],
    resources: [
      { type: "video", title: "Mendel Genetiği Anlatım", duration: "20 dk" },
      { type: "document", title: "DNA Yapısı ve İşlevi", pages: 6 },
      { type: "practice", title: "Genetik Problemleri", questions: 15 },
    ]
  },
];

export const recommendedStudyPlanData = [
  {
    day: "Pazartesi",
    tasks: [
      { time: "16:00 - 17:00", subject: "Matematik", topic: "İntegral - Belirsiz İntegral" },
      { time: "17:15 - 18:15", subject: "Fizik", topic: "Elektrik Alan" },
    ]
  },
  {
    day: "Salı",
    tasks: [
      { time: "16:00 - 17:00", subject: "Kimya", topic: "Hidrokarbonlar" },
      { time: "17:15 - 18:15", subject: "Matematik", topic: "İntegral - Belirli İntegral" },
    ]
  },
  {
    day: "Çarşamba",
    tasks: [
      { time: "16:00 - 17:00", subject: "Fizik", topic: "Manyetik Alan" },
      { time: "17:15 - 18:15", subject: "Biyoloji", topic: "DNA ve RNA" },
    ]
  },
  {
    day: "Perşembe",
    tasks: [
      { time: "16:00 - 17:00", subject: "Matematik", topic: "İntegral Uygulamaları" },
      { time: "17:15 - 18:15", subject: "Kimya", topic: "Fonksiyonel Gruplar" },
    ]
  },
  {
    day: "Cuma",
    tasks: [
      { time: "16:00 - 17:00", subject: "Fizik", topic: "Elektromanyetik İndüksiyon" },
      { time: "17:15 - 18:15", subject: "Biyoloji", topic: "Genetik Hastalıklar" },
    ]
  },
  {
    day: "Cumartesi",
    tasks: [
      { time: "10:00 - 11:30", subject: "Matematik", topic: "İntegral Genel Tekrar" },
      { time: "13:00 - 14:30", subject: "Fizik", topic: "Elektrik ve Manyetizma Genel Tekrar" },
    ]
  },
  {
    day: "Pazar",
    tasks: [
      { time: "10:00 - 11:30", subject: "Kimya", topic: "Organik Kimya Genel Tekrar" },
      { time: "13:00 - 14:30", subject: "Biyoloji", topic: "Genetik Genel Tekrar" },
    ]
  },
];

export function MissingTopicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Eksik Konu Analizi</h1>
        <p className="text-gray-600">
          Eksik olduğunuz konuları tespit edin ve kişiselleştirilmiş çalışma planı oluşturun.
        </p>
      </motion.div>

      <MissingTopicsStats />
      <MissingTopicsTabs />
      <MissingTopicsSummary />
    </div>
  );
}
