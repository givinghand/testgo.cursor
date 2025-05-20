
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, LogIn, TrendingUp, Zap, Clock, Award, UserCircle, Edit3, Check, CheckCircle, AlertTriangle } from "lucide-react"; // Check eklendi
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";

const mockUserData = {
  name: "Ayşe Yılmaz",
  email: "ayse@testgo.com",
  overallScore: 785,
  rank: 1250,
  totalParticipants: 15000,
  completedTests: 42,
  averageSuccessRate: 75,
  strongestSubject: "Matematik",
  weakestSubject: "Fizik",
  profileImageUrl: "https://i.pravatar.cc/150?u=ayse.yilmaz",
  subjectData: [
    { name: "Matematik", correct: 85, total: 100, color: "hsl(var(--primary))" },
    { name: "Türkçe", correct: 78, total: 100, color: "hsl(var(--secondary))" },
    { name: "Fizik", correct: 60, total: 100, color: "hsl(var(--destructive))" },
    { name: "Kimya", correct: 70, total: 100, color: "hsl(var(--accent))" },
    { name: "Tarih", correct: 90, total: 100, color: "hsl(250 50% 60%)" },
  ],
  progressData: [
    { name: "Hafta 1", score: 60 }, { name: "Hafta 2", score: 65 }, { name: "Hafta 3", score: 70 },
    { name: "Hafta 4", score: 68 }, { name: "Hafta 5", score: 75 }, { name: "Hafta 6", score: 72 },
    { name: "Hafta 7", score: 78 }, { name: "Hafta 8", score: 82 },
  ],
  timeSpentData: [
    { name: "Matematik", value: 40 }, { name: "Türkçe", value: 30 },
    { name: "Fizik", value: 20 }, { name: "Kimya", value: 25 }, { name: "Tarih", value: 15 },
  ],
  strengths: [
    { topic: "Türkçe - Paragraf Soruları", successRate: 92 },
    { topic: "Matematik - Fonksiyonlar", successRate: 88 },
    { topic: "Tarih - Osmanlı Tarihi", successRate: 85 },
  ],
  weaknesses: [
    { topic: "Fizik - Elektrik ve Manyetizma", successRate: 45 },
    { topic: "Kimya - Organik Kimya", successRate: 52 },
    { topic: "Matematik - İntegral", successRate: 58 },
  ],
};

const COLORS = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))", "#FFBB28", "#FF8042"];

function UserProfileHeader({ name, email, profileImageUrl }) {
  return (
    <motion.div
      variants={fadeIn}
      className="mb-10 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left sm:justify-between p-6 bg-card rounded-xl shadow-lg"
    >
      <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
        <div className="relative mb-4 sm:mb-0 sm:mr-6">
          <img-replace
            src={profileImageUrl}
            alt={name}
            className="w-24 h-24 rounded-full border-4 border-primary shadow-md"
          /> 
          Kullanıcı profil resmi
          <div className="absolute bottom-0 right-0 bg-green-500 p-1.5 rounded-full border-2 border-card">
            <Check className="h-3 w-3 text-white" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">Merhaba, {name}!</h1>
          <p className="text-md text-muted-foreground">{email}</p>
        </div>
      </div>
      <Button variant="outline" size="lg" className="mt-4 sm:mt-0">
        <Edit3 className="mr-2 h-4 w-4" /> Profilini Düzenle
      </Button>
    </motion.div>
  );
}

function UserStatsCards({ score, rank, totalParticipants, tests, avgSuccess }) {
  const rankPercentile = Math.round(((totalParticipants - rank) / totalParticipants) * 100);
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {[
        { title: "Toplam Puan", value: score, icon: <UserCircle className="h-6 w-6 text-primary" />, desc: "Tüm testlerden puan" },
        { title: "Genel Sıralama", value: `${rank.toLocaleString()} / ${totalParticipants.toLocaleString()}`, icon: <Award className="h-6 w-6 text-yellow-500" />, desc: `%{rankPercentile} dilimindesiniz` },
        { title: "Tamamlanan Test", value: tests, icon: <BarChart2 className="h-6 w-6 text-secondary" />, desc: "Toplam çözülen test" },
        { title: "Ortalama Başarı", value: `${avgSuccess}%`, icon: <TrendingUp className="h-6 w-6 text-green-500" />, progress: avgSuccess },
      ].map((stat, i) => (
        <motion.div key={i} variants={fadeIn}>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              {stat.desc && <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>}
              {stat.progress && <Progress value={stat.progress} className="h-2 mt-3" indicatorClassName="bg-gradient-to-r from-primary to-secondary"/>}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

function UserPerformanceTabs({ subjectData, progressData, timeSpentData }) {
  return (
    <motion.div variants={fadeIn}>
      <Tabs defaultValue="performance" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 bg-muted p-1 rounded-lg">
          <TabsTrigger value="performance" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Ders Performansı</TabsTrigger>
          <TabsTrigger value="progress" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">İlerleme Grafiği</TabsTrigger>
          <TabsTrigger value="time" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Zaman Analizi</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="mt-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Ders Bazlı Performans</CardTitle>
              <CardDescription>Her ders için doğru cevap oranlarınız.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={subjectData} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" fontSize={12} />
                    <YAxis fontSize={12} />
                    <Tooltip
                      contentStyle={{ backgroundColor: 'hsl(var(--background))', borderRadius: '0.5rem', borderColor: 'hsl(var(--border))' }}
                      labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
                    />
                    <Bar dataKey="correct" name="Doğru Sayısı" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              {subjectData.map((subject) => (
                <div key={subject.name} className="mb-3">
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-medium text-foreground">{subject.name}</span>
                    <span className="text-muted-foreground">{Math.round((subject.correct / subject.total) * 100)}%</span>
                  </div>
                  <Progress value={(subject.correct / subject.total) * 100} className="h-2" indicatorClassName="bg-gradient-to-r from-primary to-secondary" />
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
                  <LineChart data={progressData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
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
                        label={({ name, percent, value }) => `${name}: ${value}s (${(percent * 100).toFixed(0)}%)`}
                        fontSize={12}
                      >
                        {timeSpentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} saat`, 'Çalışma Süresi']}/>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3">
                  {timeSpentData.map((entry, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <span style={{ backgroundColor: COLORS[index % COLORS.length] }} className="w-3 h-3 rounded-full mr-2 shrink-0"></span>
                      <span className="font-medium text-foreground mr-1">{entry.name}:</span>
                      <span className="text-muted-foreground">{entry.value} saat</span>
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

function UserStrengthsWeaknesses({ strengths, weaknesses }) {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" variants={staggerContainer}>
      <motion.div variants={fadeIn}>
        <Card className="shadow-lg h-full">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground flex items-center">
              <CheckCircle className="h-6 w-6 mr-2 text-green-500" /> Güçlü Yönleriniz
            </CardTitle>
            <CardDescription>En başarılı olduğunuz konular ve dersler.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {strengths.map((item, i) => (
                <li key={i} className="flex items-center justify-between p-3 bg-green-500/10 rounded-md">
                  <span className="text-sm font-medium text-green-700">{item.topic}</span>
                  <span className="text-sm font-bold text-green-600">{item.successRate}%</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="shadow-lg h-full">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2 text-red-500" /> Geliştirilecek Alanlar
            </CardTitle>
            <CardDescription>Daha fazla odaklanmanız gereken konular.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {weaknesses.map((item, i) => (
                <li key={i} className="flex items-center justify-between p-3 bg-red-500/10 rounded-md">
                  <span className="text-sm font-medium text-red-700">{item.topic}</span>
                  <span className="text-sm font-bold text-red-600">{item.successRate}%</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function UserStatusPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false); 
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LogIn className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-4">Durumunu Görmek İçin Giriş Yapmalısın</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Kişisel performansını, detaylı analizlerini ve gelişimini takip edebilmek için lütfen hesabına giriş yap.
          </p>
          <Button size="lg" onClick={() => navigate("/giris")} className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3">
            Hemen Giriş Yap
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Hesabın yok mu? <Link to="/uye-ol" className="font-medium text-primary hover:underline">Hemen Sen de Katıl!</Link>
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        <UserProfileHeader 
          name={mockUserData.name} 
          email={mockUserData.email}
          profileImageUrl={mockUserData.profileImageUrl}
        />
        <UserStatsCards 
          score={mockUserData.overallScore}
          rank={mockUserData.rank}
          totalParticipants={mockUserData.totalParticipants}
          tests={mockUserData.completedTests}
          avgSuccess={mockUserData.averageSuccessRate}
        />
        <UserPerformanceTabs 
          subjectData={mockUserData.subjectData}
          progressData={mockUserData.progressData}
          timeSpentData={mockUserData.timeSpentData}
        />
        <UserStrengthsWeaknesses 
          strengths={mockUserData.strengths}
          weaknesses={mockUserData.weaknesses}
        />
        <motion.div variants={fadeIn} className="mt-12 text-center">
          <Button size="lg" asChild className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity text-lg px-10 py-3 shadow-lg">
            <Link to="/test-coz">
              <BarChart2 className="mr-2 h-5 w-5" /> Yeni Test Çözmeye Başla
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
