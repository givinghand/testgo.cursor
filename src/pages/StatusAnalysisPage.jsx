
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Zap, Clock, Award, BookOpen } from "lucide-react";
import { OverallStats } from "@/components/status/OverallStats";
import { PerformanceTabs } from "@/components/status/PerformanceTabs";
import { StrengthsWeaknesses } from "@/components/status/StrengthsWeaknesses";

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const subjectData = [
  { name: "Matematik", correct: 75, wrong: 25, total: 100 },
  { name: "Fizik", correct: 60, wrong: 20, total: 80 },
  { name: "Kimya", correct: 45, wrong: 15, total: 60 },
  { name: "Biyoloji", correct: 55, wrong: 15, total: 70 },
  { name: "Türkçe", correct: 80, wrong: 10, total: 90 },
  { name: "Tarih", correct: 65, wrong: 15, total: 80 },
  { name: "Coğrafya", correct: 50, wrong: 10, total: 60 },
];

export const progressData = [
  { name: "Hafta 1", score: 65 },
  { name: "Hafta 2", score: 68 },
  { name: "Hafta 3", score: 72 },
  { name: "Hafta 4", score: 75 },
  { name: "Hafta 5", score: 71 },
  { name: "Hafta 6", score: 78 },
  { name: "Hafta 7", score: 82 },
  { name: "Hafta 8", score: 85 },
];

export const timeSpentData = [
  { name: "Matematik", value: 25 },
  { name: "Fizik", value: 15 },
  { name: "Kimya", value: 10 },
  { name: "Biyoloji", value: 12 },
  { name: "Türkçe", value: 20 },
  { name: "Tarih", value: 8 },
  { name: "Coğrafya", value: 10 },
];

export const COLORS = ['#4f46e5', '#3b82f6', '#0ea5e9', '#06b6d4', '#14b8a6', '#10b981', '#84cc16'];

export function StatusAnalysisPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Mevcut Durum Analizi</h1>
        <p className="text-gray-600">
          Çalışmalarınızın detaylı analizini inceleyerek güçlü ve zayıf yönlerinizi keşfedin.
        </p>
      </motion.div>

      <OverallStats />
      <PerformanceTabs />
      <StrengthsWeaknesses />
    </div>
  );
}
