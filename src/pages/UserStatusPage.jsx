
import React from "react";
import { Link } from "react-router-dom"; // Link import edildi
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart2, Award, TrendingUp, UserCircle, Edit3 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Bu sayfa üye girişi gerektirir. Şimdilik örnek verilerle gösterilecek.
const userData = {
  name: "Ayşe Yılmaz",
  overallScore: 785,
  rank: 1250,
  totalParticipants: 15000,
  completedTests: 42,
  averageSuccessRate: 75, // Yüzde
  strongestSubject: "Matematik",
  weakestSubject: "Fizik",
};

export function UserStatusPage() {
  // Üye girişi yapılmadıysa giriş sayfasına yönlendirilebilir.
  // const isAuthenticated = false; // Bu değer backend'den veya context'ten gelmeli.
  // if (!isAuthenticated) {
  //   return <Navigate to="/giris" />;
  // }

  const rankPercentile = Math.round(((userData.totalParticipants - userData.rank) / userData.totalParticipants) * 100);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-col sm:flex-row justify-between items-center"
      >
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Merhaba, {userData.name}!</h1>
          <p className="text-lg text-gray-600">İşte genel performans durumun ve istatistiklerin.</p>
        </div>
        <Button variant="outline">
          <Edit3 className="mr-2 h-4 w-4" /> Profilini Düzenle
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Toplam Puan</CardTitle>
              <UserCircle className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{userData.overallScore}</div>
              <p className="text-xs text-muted-foreground">Tüm testlerden elde edilen toplam puan</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Genel Sıralama</CardTitle>
              <Award className="h-5 w-5 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{userData.rank.toLocaleString()} / {userData.totalParticipants.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">%{rankPercentile} dilimindesiniz</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ortalama Başarı</CardTitle>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">%{userData.averageSuccessRate}</div>
              <Progress value={userData.averageSuccessRate} className="h-2 mt-2" />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Detaylı İstatistikler</CardTitle>
              <CardDescription>Performansına dair daha fazla bilgi.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                <span className="font-medium">Tamamlanan Test Sayısı:</span>
                <span className="font-bold text-primary">{userData.completedTests}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                <span className="font-medium">En Güçlü Ders:</span>
                <span className="font-bold text-green-600">{userData.strongestSubject}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                <span className="font-medium">Geliştirilmesi Gereken Ders:</span>
                <span className="font-bold text-red-600">{userData.weakestSubject}</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Son Aktiviteler</CardTitle>
              <CardDescription>Yakın zamanda çözdüğün testler ve başarımların.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Buraya son aktiviteler listelenebilir */}
              <p className="text-muted-foreground text-sm">Henüz görüntülenecek aktivite yok.</p>
              <Button className="mt-4 w-full">Tüm Aktiviteleri Gör</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Button size="lg" asChild>
          <Link to="/test-coz">
            <BarChart2 className="mr-2 h-5 w-5" /> Yeni Test Çöz
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
