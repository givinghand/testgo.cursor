
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

export function StrengthsWeaknesses() {
  const strengths = [
    { topic: "Türkçe - Paragraf Soruları", successRate: 92 },
    { topic: "Matematik - Fonksiyonlar", successRate: 88 },
    { topic: "Tarih - Osmanlı Tarihi", successRate: 85 },
  ];
  const weaknesses = [
    { topic: "Fizik - Elektrik ve Manyetizma", successRate: 45 },
    { topic: "Kimya - Organik Kimya", successRate: 52 },
    { topic: "Matematik - İntegral", successRate: 58 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Card className="border-l-4 border-green-500 h-full">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <CheckCircle className="h-6 w-6 mr-2 text-green-500" />
              Güçlü Yönleriniz
            </CardTitle>
            <CardDescription>
              En başarılı olduğunuz konular
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {strengths.map((item, index) => (
                <li key={index} className="flex items-center justify-between p-3 bg-green-500/10 rounded-md hover:bg-green-500/20 transition-colors">
                  <div>
                    <div className="font-medium text-sm text-green-700">{item.topic}</div>
                  </div>
                  <div className="text-sm font-bold text-green-600">{item.successRate}%</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <Card className="border-l-4 border-red-500 h-full">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <AlertTriangle className="h-6 w-6 mr-2 text-red-500" />
              Geliştirilecek Alanlar
            </CardTitle>
            <CardDescription>
              Daha fazla çalışmanız gereken konular
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {weaknesses.map((item, index) => (
                <li key={index} className="flex items-center justify-between p-3 bg-red-500/10 rounded-md hover:bg-red-500/20 transition-colors">
                  <div>
                    <div className="font-medium text-sm text-red-700">{item.topic}</div>
                  </div>
                  <div className="text-sm font-bold text-red-600">{item.successRate}%</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
