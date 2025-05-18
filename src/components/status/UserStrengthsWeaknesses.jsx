
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Zap, CheckCircle, AlertTriangle } from "lucide-react"; // Replaced TrendingDown with Zap for weaknesses, or AlertTriangle
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";

export function UserStrengthsWeaknesses({ strengths = [], weaknesses = [] }) {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" variants={staggerContainer}>
      <motion.div variants={fadeIn}>
        <Card className="shadow-lg h-full border-l-4 border-green-500">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground flex items-center">
              <CheckCircle className="h-6 w-6 mr-2 text-green-500" /> Güçlü Yönleriniz
            </CardTitle>
            <CardDescription>En başarılı olduğunuz konular ve dersler.</CardDescription>
          </CardHeader>
          <CardContent>
            {strengths.length > 0 ? (
              <ul className="space-y-3">
                {strengths.map((item, i) => (
                  <li key={i} className="flex items-center justify-between p-3 bg-green-500/10 rounded-md hover:bg-green-500/20 transition-colors">
                    <span className="text-sm font-medium text-green-700">{item.topic}</span>
                    <span className="text-sm font-bold text-green-600">{item.successRate}%</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">Henüz güçlü yönleriniz belirlenmedi. Test çözmeye devam edin!</p>
            )}
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="shadow-lg h-full border-l-4 border-red-500">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2 text-red-500" /> Geliştirilecek Alanlar
            </CardTitle>
            <CardDescription>Daha fazla odaklanmanız gereken konular.</CardDescription>
          </CardHeader>
          <CardContent>
             {weaknesses.length > 0 ? (
              <ul className="space-y-3">
                {weaknesses.map((item, i) => (
                  <li key={i} className="flex items-center justify-between p-3 bg-red-500/10 rounded-md hover:bg-red-500/20 transition-colors">
                    <span className="text-sm font-medium text-red-700">{item.topic}</span>
                    <span className="text-sm font-bold text-red-600">{item.successRate}%</span>
                  </li>
                ))}
              </ul>
            ) : (
               <p className="text-sm text-muted-foreground">Harika! Geliştirilecek belirgin bir alanınız bulunmuyor. Pratiğe devam edin.</p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
