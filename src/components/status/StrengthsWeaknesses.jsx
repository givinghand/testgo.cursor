
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

export function StrengthsWeaknesses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Güçlü Yönleriniz</CardTitle>
            <CardDescription>
              En başarılı olduğunuz konular
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">Türkçe - Paragraf Soruları</div>
                  <div className="text-sm text-gray-600">Başarı oranı: 92%</div>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">Matematik - Fonksiyonlar</div>
                  <div className="text-sm text-gray-600">Başarı oranı: 88%</div>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">Tarih - Osmanlı Tarihi</div>
                  <div className="text-sm text-gray-600">Başarı oranı: 85%</div>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Geliştirilmesi Gereken Yönler</CardTitle>
            <CardDescription>
              Daha fazla çalışmanız gereken konular
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <TrendingDown className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <div className="font-medium">Fizik - Elektrik ve Manyetizma</div>
                  <div className="text-sm text-gray-600">Başarı oranı: 45%</div>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <TrendingDown className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <div className="font-medium">Kimya - Organik Kimya</div>
                  <div className="text-sm text-gray-600">Başarı oranı: 52%</div>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <TrendingDown className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <div className="font-medium">Matematik - İntegral</div>
                  <div className="text-sm text-gray-600">Başarı oranı: 58%</div>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
