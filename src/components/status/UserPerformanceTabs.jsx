
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { Progress } from "@/components/ui/progress";
import { fadeIn } from "@/utils/animations.jsx";

const COLORS = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))", "#FFBB28", "#FF8042", "#00C49F"];

export function UserPerformanceTabs({ subjectData = [], progressData = [], timeSpentData = [] }) {
  return (
    <motion.div variants={fadeIn}>
      <Tabs defaultValue="performance" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 bg-muted p-1 rounded-lg shadow-inner">
          <TabsTrigger value="performance" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md py-2.5">Ders Performansı</TabsTrigger>
          <TabsTrigger value="progress" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md py-2.5">İlerleme Grafiği</TabsTrigger>
          <TabsTrigger value="time" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md py-2.5">Zaman Analizi</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="mt-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Ders Bazlı Performans</CardTitle>
              <CardDescription>Her ders için doğru cevap oranlarınız ve toplam çözülen soru sayıları.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={subjectData} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" fontSize={11} interval={0} angle={-15} textAnchor="end" height={50} />
                    <YAxis fontSize={12} />
                    <Tooltip
                      cursor={{fill: 'hsl(var(--muted))'}}
                      contentStyle={{ backgroundColor: 'hsl(var(--background))', borderRadius: '0.5rem', borderColor: 'hsl(var(--border))' }}
                      labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
                    />
                    <Bar dataKey="correct" name="Doğru Sayısı" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={25} />
                    <Bar dataKey="total" name="Toplam Soru" fill="hsl(var(--primary) / 0.3)" radius={[4, 4, 0, 0]} barSize={25} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              {subjectData.map((subject) => (
                <div key={subject.name} className="mb-4 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-medium text-foreground">{subject.name}</span>
                    <span className="text-muted-foreground font-semibold">{Math.round((subject.correct / subject.total) * 100)}%</span>
                  </div>
                  <Progress value={(subject.correct / subject.total) * 100} className="h-2" indicatorClassName="bg-gradient-to-r from-primary to-secondary" />
                   <p className="text-xs text-muted-foreground mt-1">{subject.correct} doğru / {subject.total} soru</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="mt-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Haftalık İlerleme</CardTitle>
              <CardDescription>Son 8 haftadaki genel başarı puanı değişiminiz.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressData} margin={{ top: 5, right: 10, left: -25, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" fontSize={12} />
                    <YAxis domain={[0, 100]} fontSize={12} />
                    <Tooltip
                      contentStyle={{ backgroundColor: 'hsl(var(--background))', borderRadius: '0.5rem', borderColor: 'hsl(var(--border))' }}
                      labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
                    />
                    <Line type="monotone" dataKey="score" name="Başarı Puanı" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 5, fill: 'hsl(var(--primary))' }} activeDot={{ r: 7, stroke: 'hsl(var(--background))', strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="time" className="mt-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Zaman Dağılımı</CardTitle>
              <CardDescription>Derslere göre harcadığınız toplam çalışma süresi (saat).</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="h-[300px] md:h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={timeSpentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius="80%"
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent, value }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        fontSize={12}
                        stroke="hsl(var(--background))"
                        strokeWidth={2}
                      >
                        {timeSpentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value, name) => [`${value} saat (${((value / timeSpentData.reduce((acc, curr) => acc + curr.value, 0)) * 100).toFixed(0)}%)`, name]}/>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3">
                  {timeSpentData.map((entry, index) => (
                    <div key={index} className="flex items-center text-sm p-2 border-b border-border/50 last:border-b-0">
                      <span style={{ backgroundColor: COLORS[index % COLORS.length] }} className="w-3 h-3 rounded-full mr-3 shrink-0"></span>
                      <span className="font-medium text-foreground mr-1 flex-grow">{entry.name}:</span>
                      <span className="text-muted-foreground font-semibold">{entry.value} saat</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

