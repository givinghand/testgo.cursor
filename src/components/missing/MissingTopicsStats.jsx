
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";

export function MissingTopicsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Eksik Konu Sayısı</CardTitle>
            <CardDescription>Geliştirilmesi gereken konular</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary mb-2">12</div>
            <div className="flex items-center text-amber-600 text-sm mb-4">
              <AlertCircle className="mr-1 h-4 w-4" />
              <span>4 kritik öncelikli konu</span>
            </div>
            <Progress value={35} className="h-2" />
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
            <CardTitle className="text-lg">Tamamlanan Konular</CardTitle>
            <CardDescription>Yeterli seviyede bildiğiniz konular</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary mb-2">28</div>
            <div className="flex items-center text-green-600 text-sm mb-4">
              <CheckCircle className="mr-1 h-4 w-4" />
              <span>Toplam 40 konudan 28'i tamamlandı</span>
            </div>
            <Progress value={70} className="h-2" />
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
            <CardTitle className="text-lg">Tahmini Tamamlanma</CardTitle>
            <CardDescription>Mevcut çalışma hızınıza göre</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary mb-2">3 hafta</div>
            <div className="flex items-center text-blue-600 text-sm mb-4">
              <Clock className="mr-1 h-4 w-4" />
              <span>Günde ortalama 2 saat çalışma ile</span>
            </div>
            <Progress value={25} className="h-2" />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
