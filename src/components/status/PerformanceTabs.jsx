
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { Award, TrendingUp, BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/progress";


const subjectData = [
  { name: "Matematik", correct: 85, total: 100 },
  { name: "Türkçe", correct: 78, total: 100 },
  { name: "Fizik", correct: 60, total: 100 },
  { name: "Kimya", correct: 70, total: 100 },
  { name: "Tarih", correct: 90, total: 100 },
  { name: "Coğrafya", correct: 75, total: 100 },
];

const progressData = [
  { name: "Hafta 1", score: 60 }, { name: "Hafta 2", score: 65 }, { name: "Hafta 3", score: 70 },
  { name: "Hafta 4", score: 68 }, { name: "Hafta 5", score: 75 }, { name: "Hafta 6", score: 72 },
  { name: "Hafta 7", score: 78 }, { name: "Hafta 8", score: 82 },
];

const timeSpentData = [
  { name: "Matematik", value: 40 }, { name: "Türkçe", value: 30 },
  { name: "Fizik", value: 20 }, { name: "Kimya", value: 25 }, { name: "Tarih", value: 15 },
];
const COLORS = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))", "#FFBB28", "#FF8042", "#00C49F"];

export function PerformanceTabs() {
  return (
    <Tabs defaultValue="performance" className="w-full mb-8">
      <TabsList className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2 bg-muted p-1 rounded-lg shadow-inner">
        <TabsTrigger value="performance" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md py-2.5">Ders Performansı</TabsTrigger>
        <TabsTrigger value="progress" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md py-2.5">İlerleme Grafiği</TabsTrigger>
        <TabsTrigger value="time" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md py-2.5">Zaman Analizi</TabsTrigger>
      </TabsList>
      
      <TabsContent value="performance" className="mt-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Ders Bazlı Performans</CardTitle>
            <CardDescription>
              Her ders için doğru ve yanlış cevap oranlarınız
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={subjectData}
                  margin={{ top: 20, right: 10, left: -20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                  <XAxis dataKey="name" fontSize={12} interval={0} angle={-15} textAnchor="end" height={50}/>
                  <YAxis fontSize={12} />
                  <Tooltip 
                    cursor={{fill: 'hsl(var(--muted))'}}
                    contentStyle={{ backgroundColor: 'hsl(var(--background))', borderRadius: '0.5rem', borderColor: 'hsl(var(--border))' }}
                    labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
                  />
                  <Bar dataKey="correct" stackId="a" fill="hsl(var(--primary))" name="Doğru" radius={[4,4,0,0]} barSize={30}/>
                  <Bar dataKey="wrong" stackId="a" fill="hsl(var(--destructive)/0.7)" name="Yanlış" radius={[4,4,0,0]} barSize={30}
                    data={subjectData.map(s => ({ ...s, wrong: s.total - s.correct }))} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-4">
              {subjectData.map((subject, index) => (
                <div key={index} className="p-3 border rounded-md hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-sm">{subject.name}</span>
                    <span className="text-gray-600 text-sm font-semibold">
                      {Math.round((subject.correct / subject.total) * 100)}%
                    </span>
                  </div>
                  <Progress 
                    value={(subject.correct / subject.total) * 100} 
                    className="h-2.5"
                    indicatorClassName="bg-gradient-to-r from-primary to-secondary"
                  />
                  <p className="text-xs text-muted-foreground mt-1">{subject.correct} doğru / {subject.total} soru</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="progress" className="mt-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Haftalık İlerleme</CardTitle>
            <CardDescription>
              Son 8 haftadaki performans değişiminiz
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={progressData}
                  margin={{ top: 20, right: 10, left: -20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                  <XAxis dataKey="name" fontSize={12}/>
                  <YAxis domain={[0, 100]} fontSize={12}/>
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--background))', borderRadius: '0.5rem', borderColor: 'hsl(var(--border))' }}
                    labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ r: 6, fill: 'hsl(var(--primary))' }}
                    activeDot={{ r: 8, stroke: 'hsl(var(--background))', strokeWidth: 2, fill: 'hsl(var(--primary))' }}
                    name="Başarı Puanı"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-primary">En Yüksek Puan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Award className="h-10 w-10 text-yellow-500 mr-4" />
                    <div>
                      <div className="text-2xl font-bold text-foreground">82%</div>
                      <div className="text-sm text-muted-foreground">Hafta 8</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/5 border-secondary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-secondary">Ortalama Puan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <TrendingUp className="h-10 w-10 text-green-500 mr-4" />
                    <div>
                      <div className="text-2xl font-bold text-foreground">71.6%</div>
                      <div className="text-sm text-muted-foreground">Son 8 hafta</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="time" className="mt-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Zaman Dağılımı</CardTitle>
            <CardDescription>
              Derslere göre harcadığınız çalışma süresi (saat)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="h-[350px] md:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={timeSpentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius="85%"
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
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
              
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Zaman Dağılımı Analizi</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Çalışma sürenizin derslere göre dağılımını gösteren bu grafik, hangi derslere daha fazla zaman ayırdığınızı göstermektedir.
                </p>
                
                <div className="space-y-3">
                  {timeSpentData.map((subject, index) => (
                    <div key={index} className="flex items-center p-2 border-b border-border/50 last:border-b-0">
                      <div 
                        className="w-3 h-3 rounded-full mr-3 shrink-0" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <div className="flex-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-foreground">{subject.name}</span>
                          <span className="font-semibold text-muted-foreground">{subject.value} saat</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="flex items-start">
                    <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 mr-3 shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-700">Öneri</h4>
                      <p className="text-blue-600 text-xs leading-relaxed">
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
