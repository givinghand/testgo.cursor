
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Award, BarChart2, AlertCircle, CheckCircle, XCircle } from "lucide-react";

export function ExamDetails({ examDetails, onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
          Geri
        </Button>
        <h1 className="text-2xl font-bold">{examDetails.title} Sonuçları</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Toplam Puan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary mb-2">{examDetails.score}</div>
            <div className="flex items-center text-gray-600 text-sm">
              <FileText className="mr-1 h-4 w-4" />
              <span>{examDetails.date} tarihli sınav</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Sıralama</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary mb-2">{examDetails.rank.toLocaleString()}</div>
            <div className="flex items-center text-gray-600 text-sm">
              <Users className="mr-1 h-4 w-4" />
              <span>Toplam {examDetails.participants.toLocaleString()} katılımcı arasında</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Yüzdelik Dilim</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary mb-2">%{examDetails.percentile}</div>
            <div className="flex items-center text-gray-600 text-sm">
              <Award className="mr-1 h-4 w-4" />
              <span>Katılımcıların %{examDetails.percentile}'inden daha başarılı</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ders Bazlı Performans</CardTitle>
          <CardDescription>
            Her ders için doğru, yanlış ve boş sayıları
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Ders</th>
                  <th className="text-center py-3 px-4">Soru Sayısı</th>
                  <th className="text-center py-3 px-4">Doğru</th>
                  <th className="text-center py-3 px-4">Yanlış</th>
                  <th className="text-center py-3 px-4">Boş</th>
                  <th className="text-center py-3 px-4">Net</th>
                  <th className="text-center py-3 px-4">Yüzdelik</th>
                </tr>
              </thead>
              <tbody>
                {examDetails.sections.map((section, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 font-medium">{section.name}</td>
                    <td className="text-center py-3 px-4">{section.questions}</td>
                    <td className="text-center py-3 px-4 text-green-600">{section.correct}</td>
                    <td className="text-center py-3 px-4 text-red-600">{section.wrong}</td>
                    <td className="text-center py-3 px-4 text-gray-500">{section.empty}</td>
                    <td className="text-center py-3 px-4 font-medium">{section.netScore}</td>
                    <td className="text-center py-3 px-4">
                      <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        %{section.percentile}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Güçlü Yönler</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Türkçe dersinde yüksek başarı gösterdiniz.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Matematik dersinde ortalama üstü performans sergiliyorsunuz.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Sosyal Bilimler dersinde iyi bir net oranınız var.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Geliştirilmesi Gereken Yönler</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                  <span>Fen Bilimleri dersinde daha fazla çalışma yapmalısınız.</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                  <span>Matematik dersinde yanlış sayınızı azaltmalısınız.</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                  <span>Boş bıraktığınız soruları azaltmak için zaman yönetiminizi geliştirin.</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>En Çok Yanlış Yapılan Konular</CardTitle>
          <CardDescription>
            Bu konulara daha fazla çalışmanız önerilir
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {examDetails.wrongTopics.map((topic, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    topic.subject === "Matematik" ? "bg-blue-100 text-blue-600" :
                    topic.subject === "Fizik" ? "bg-purple-100 text-purple-600" :
                    topic.subject === "Kimya" ? "bg-green-100 text-green-600" :
                    "bg-orange-100 text-orange-600"
                  }`}>
                    <BarChart2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">{topic.subject} - {topic.topic}</div>
                    <div className="text-sm text-gray-600">{topic.count} yanlış soru</div>
                  </div>
                </div>
                <Button variant="outline" size="sm">Konuyu Çalış</Button>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-800 mb-1">Öneri</h4>
                <p className="text-blue-700 text-sm">
                  Yanlış yaptığınız konulara odaklanarak çalışmanız, bir sonraki sınavda puanınızı önemli ölçüde artırabilir. Eksik konu analizinizi inceleyerek detaylı çalışma planı oluşturabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Detaylı Sınav Raporunu İndir</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
