
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { UserCircle, Award, BarChart2, TrendingUp } from "lucide-react";
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";

export function UserStatsCards({ score = 0, rank = 0, totalParticipants = 0, tests = 0, avgSuccess = 0 }) {
  const rankPercentile = totalParticipants > 0 ? Math.round(((totalParticipants - rank) / totalParticipants) * 100) : 0;
  
  const stats = [
    { title: "Toplam Puan", value: score, icon: <UserCircle className="h-6 w-6 text-primary" />, desc: "Tüm testlerden puan" },
    { title: "Genel Sıralama", value: `${rank.toLocaleString()} / ${totalParticipants.toLocaleString()}`, icon: <Award className="h-6 w-6 text-yellow-500" />, desc: `Sıralamada %${rankPercentile} dilimindesiniz` },
    { title: "Tamamlanan Test", value: tests, icon: <BarChart2 className="h-6 w-6 text-secondary" />, desc: "Toplam çözülen test" },
    { title: "Ortalama Başarı", value: `${avgSuccess}%`, icon: <TrendingUp className="h-6 w-6 text-green-500" />, progress: avgSuccess },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat, i) => (
        <motion.div key={i} variants={fadeIn}>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border-l-4 border-primary/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              {stat.desc && <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>}
              {stat.progress !== undefined && <Progress value={stat.progress} className="h-2 mt-3" indicatorClassName="bg-gradient-to-r from-primary to-secondary"/>}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
