
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle, Clock } from "lucide-react";

export function MissingTopicsSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Konu Başarı Dağılımı</CardTitle>
            <CardDescription>
              Tüm konulardaki başarı durumunuz
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-green-600">Tam Öğrenilmiş</span>
                <span className="font-medium">28 konu</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-medium text-amber-600">Kısmen Öğrenilmiş</span>
                <span className="font-medium">8 konu</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "20%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-medium text-red-600">Eksik</span>
                <span className="font-medium">4 konu</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "10%" }}></div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-1">70%</div>
                <div className="text-sm text-gray-600">Genel Başarı Oranı</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-1">85%</div>
                <div className="text-sm text-gray-600">Hedef Başarı Oranı</div>
              </div>
            </div>
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
            <CardTitle>Öneriler</CardTitle>
            <CardDescription>
              Eksik konularınızı tamamlamak için öneriler
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">Düzenli Çalışma Programı</div>
                  <div className="text-sm text-gray-600 mb-2">
                    Haftada en az 5 gün, günde 2 saat düzenli çalışma ile eksik konularınızı 3 hafta içinde tamamlayabilirsiniz.
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium">Öncelikli Konular</div>
                  <div className="text-sm text-gray-600 mb-2">
                    Matematik (İntegral) ve Fizik (Elektrik ve Manyetizma) konularına öncelik vermeniz, diğer konuları anlamanızı da kolaylaştıracaktır.
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">Pratik Yapma</div>
                  <div className="text-sm text-gray-600 mb-2">
                    Her konu çalışmasından sonra mutlaka o konuyla ilgili test çözün. Bu, öğrenmenizi pekiştirecek ve eksiklerinizi gösterecektir.
                  </div>
                </div>
              </li>
            </ul>
            
            <div className="mt-6">
              <Button className="w-full">Kişiselleştirilmiş Çalışma Planı Oluştur</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
