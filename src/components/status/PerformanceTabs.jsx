
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { Award, TrendingUp, BookOpen } from "lucide-react";
import { subjectData, progressData, timeSpentData, COLORS } from "@/pages/StatusAnalysisPage";

export function PerformanceTabs() {
  return (
    <Tabs defaultValue="performance" className="w-full mb-8">
      <TabsList className="w-full grid grid-cols-3 mb-6">
        <TabsTrigger value="performance">Ders Performansı</TabsTrigger>
        <TabsTrigger value="progress">İlerleme Grafiği</TabsTrigger>
        <TabsTrigger value="time">Zaman Analizi</TabsTrigger>
      </TabsList>
      
      <TabsContent value="performance">
        <Card>
          <CardHeader>
            <CardTitle>Ders Bazlı Performans</CardTitle>
            <CardDescription>
              Her ders için doğru ve yanlış cevap oranlarınız
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={subjectData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="correct" stackId="a" fill="#4f46e5" name="Doğru" />
                  <Bar dataKey="wrong" stackId="a" fill="#ef4444" name="Yanlış" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-8 space-y-4">
              {subjectData.map((subject, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{subject.name}</span>
                    <span className="text-gray-600">
                      {subject.correct} / {subject.total} ({Math.round((subject.correct / subject.total) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${(subject.correct / subject.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="progress">
        <Card>
          <CardHeader>
            <CardTitle>Haftalık İlerleme</CardTitle>
            <CardDescription>
              Son 8 haftadaki performans değişiminiz
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={progressData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[50, 100]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#4f46e5" 
                    strokeWidth={3}
                    dot={{ r: 6 }}
                    activeDot={{ r: 8 }}
                    name="Başarı Puanı"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">En Yüksek Puan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Award className="h-10 w-10 text-yellow-500 mr-4" />
                    <div>
                      <div className="text-2xl font-bold">85%</div>
                      <div className="text-sm text-gray-500">Hafta 8</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Ortalama Puan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <TrendingUp className="h-10 w-10 text-green-500 mr-4" />
                    <div>
                      <div className="text-2xl font-bold">74.5%</div>
                      <div className="text-sm text-gray-500">Son 8 hafta</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="time">
        <Card>
          <CardHeader>
            <CardTitle>Zaman Dağılımı</CardTitle>
            <CardDescription>
              Derslere göre harcadığınız çalışma süresi (saat)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-[400px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={timeSpentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {timeSpentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} saat`, 'Çalışma Süresi']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4">Zaman Dağılımı Analizi</h3>
                <p className="text-gray-600 mb-6">
                  Çalışma sürenizin derslere göre dağılımını gösteren bu grafik, hangi derslere daha fazla zaman ayırdığınızı göstermektedir.
                </p>
                
                <div className="space-y-4">
                  {timeSpentData.map((subject, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-3" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span>{subject.name}</span>
                          <span className="font-medium">{subject.value} saat</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start">
                    <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-blue-800">Öneri</h4>
                      <p className="text-blue-700 text-sm">
                        Matematik ve Türkçe derslerine ayırdığınız zaman ideal seviyede. Fizik ve Kimya derslerine biraz daha fazla zaman ayırmanız başarınızı artırabilir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
