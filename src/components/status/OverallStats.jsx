
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Zap, Clock } from "lucide-react";

export function OverallStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Genel Başarı</CardTitle>
            <CardDescription>Son 30 gündeki performansınız</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary mb-2">78%</div>
            <div className="flex items-center text-green-600 text-sm mb-4">
              <TrendingUp className="mr-1 h-4 w-4" />
              <span>%5 artış (önceki aya göre)</span>
            </div>
            <Progress value={78} className="h-2" />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Çözülen Soru</CardTitle>
            <CardDescription>Toplam çözülen soru sayısı</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary mb-2">1,248</div>
            <div className="flex items-center text-green-600 text-sm mb-4">
              <Zap className="mr-1 h-4 w-4" />
              <span>Son hafta 124 soru çözüldü</span>
            </div>
            <Progress value={65} className="h-2" />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Çalışma Süresi</CardTitle>
            <CardDescription>Toplam çalışma süreniz</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary mb-2">86 saat</div>
            <div className="flex items-center text-amber-600 text-sm mb-4">
              <Clock className="mr-1 h-4 w-4" />
              <span>Günlük ortalama: 2.5 saat</span>
            </div>
            <Progress value={72} className="h-2" />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
