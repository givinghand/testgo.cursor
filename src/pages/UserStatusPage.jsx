import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogIn, BarChart2, Edit3, Upload, Loader2, FileQuestion, ThumbsUp, ThumbsDown, Clock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { UserProfileHeader } from "@/components/status/UserProfileHeader";
import { UserStatsCards } from "@/components/status/UserStatsCards";
import { UserPerformanceTabs } from "@/components/status/UserPerformanceTabs";
import { UserStrengthsWeaknesses } from "@/components/status/UserStrengthsWeaknesses";
import { staggerContainer, fadeIn } from "@/utils/animations.jsx";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { supabase } from "@/lib/supabaseClient";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

function AvatarUploadModal({ isOpen, onOpenChange, currentAvatarUrl, onAvatarUpdate }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(currentAvatarUrl);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const { user, updateProfileAvatar } = useAuth();

  useEffect(() => {
    setPreviewUrl(currentAvatarUrl);
  }, [currentAvatarUrl, isOpen]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { 
        toast({
          title: "Dosya Boyutu Çok Büyük",
          description: "Lütfen 2MB'den küçük bir resim dosyası seçin.",
          variant: "destructive",
        });
        setSelectedFile(null);
        setPreviewUrl(currentAvatarUrl); 
        event.target.value = null; 
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !user) return;
    setIsUploading(true);
    try {
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, selectedFile);

      if (uploadError) throw uploadError;
      
      const { data: urlData } = supabase.storage.from('avatars').getPublicUrl(filePath);
      
      const publicUrl = urlData?.publicUrl;

      if (!publicUrl) throw new Error("Dosya URL'si alınamadı.");
      
      await updateProfileAvatar(publicUrl);
      onAvatarUpdate(publicUrl); 
      toast({ title: "Avatar Yüklendi", description: "Profil resminiz başarıyla güncellendi." });
      onOpenChange(false);

    } catch (error) {
      console.error("Avatar yükleme hatası:", error);
      toast({ title: "Hata", description: `Avatar yüklenemedi: ${error.message}`, variant: "destructive" });
    } finally {
      setIsUploading(false);
      setSelectedFile(null); 
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) { 
        setSelectedFile(null);
        setPreviewUrl(currentAvatarUrl);
      }
      onOpenChange(open);
    }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profil Resmini Değiştir</DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4">
          {previewUrl && (
            <div className="flex justify-center">
              <img src={previewUrl} alt="Avatar Preview" className="w-32 h-32 rounded-full object-cover border-2 border-primary" />
            </div>
          )}
          <Input id="avatarFile" type="file" accept="image/png, image/jpeg, image/webp" onChange={handleFileChange} disabled={isUploading} />
          {selectedFile && <p className="text-sm text-muted-foreground">Seçilen dosya: {selectedFile.name}</p>}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" disabled={isUploading}>İptal</Button>
          </DialogClose>
          <Button onClick={handleUpload} disabled={!selectedFile || isUploading}>
            {isUploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
            Yükle
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const transformTestResultsForCharts = (results) => {
  if (!results || results.length === 0) {
    return {
      subjectData: [],
      progressData: [],
      timeSpentData: [],
      strengths: [],
      weaknesses: [],
      overallScore: 0,
      rank: 0, // This would need more complex calculation or a dedicated endpoint
      totalParticipants: 0, // Same as rank
      completedTests: results.length,
      averageSuccessRate: 0,
    };
  }

  const subjectPerformance = {};
  results.forEach(result => {
    const subject = result.subject_id || 'Bilinmeyen Ders';
    if (!subjectPerformance[subject]) {
      subjectPerformance[subject] = { name: subject.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), correct: 0, total: 0, time: 0 };
    }
    subjectPerformance[subject].correct += result.score;
    subjectPerformance[subject].total += result.total_questions;
    subjectPerformance[subject].time += result.time_taken;
  });

  const subjectData = Object.values(subjectPerformance).map(s => ({
    ...s,
    color: `hsl(${Math.random() * 360}, 70%, 60%)` 
  }));

  const progressData = results
    .sort((a, b) => new Date(a.taken_at) - new Date(b.taken_at))
    .slice(-10) // Son 10 testi alalım
    .map((result, index) => ({
      name: `Test ${index + 1}`, // Veya tarih formatı
      score: (result.score / result.total_questions) * 100,
    }));

  const timeSpentData = Object.values(subjectPerformance).map(s => ({
    name: s.name,
    value: Math.round(s.time / 60), // Dakika cinsinden
  }));
  
  // Strengths & Weaknesses (basit örnek, daha detaylı analiz yapılabilir)
  const topicPerformance = {};
  results.forEach(result => {
    const topic = result.topic_id || 'Genel';
    if (!topicPerformance[topic]) {
      topicPerformance[topic] = { name: topic.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), correct: 0, total: 0, count: 0 };
    }
    topicPerformance[topic].correct += result.score;
    topicPerformance[topic].total += result.total_questions;
    topicPerformance[topic].count += 1;
  });

  const allTopicSuccessRates = Object.values(topicPerformance).map(t => ({
    topic: t.name,
    successRate: t.total > 0 ? Math.round((t.correct / t.total) * 100) : 0,
    count: t.count
  })).filter(t => t.count > 0); // En az 1 kere çözülmüş konular

  const strengths = allTopicSuccessRates.filter(t => t.successRate >= 80).sort((a,b) => b.successRate - a.successRate).slice(0,3);
  const weaknesses = allTopicSuccessRates.filter(t => t.successRate < 60).sort((a,b) => a.successRate - b.successRate).slice(0,3);

  const totalCorrect = results.reduce((sum, r) => sum + r.score, 0);
  const totalAttemptedQuestions = results.reduce((sum, r) => sum + r.total_questions, 0);
  const averageSuccessRate = totalAttemptedQuestions > 0 ? Math.round((totalCorrect / totalAttemptedQuestions) * 100) : 0;
  
  return {
    subjectData,
    progressData,
    timeSpentData,
    strengths,
    weaknesses,
    overallScore: totalCorrect, // Basit bir toplam puan
    rank: 0, // Needs external calculation
    totalParticipants: 0, // Needs external calculation
    completedTests: results.length,
    averageSuccessRate,
  };
};


export function UserStatusPage() {
  const { user, profile, loading: authLoading, checkUserPremiumStatus, fetchProfile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isPremium = checkUserPremiumStatus();
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [userTestResults, setUserTestResults] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [chartData, setChartData] = useState(null);

  const fetchUserTestResults = useCallback(async () => {
    if (!user) return;
    setIsLoadingData(true);
    try {
      const { data, error } = await supabase
        .from('user_test_results')
        .select('*')
        .eq('user_id', user.id)
        .order('taken_at', { ascending: false });

      if (error) throw error;
      setUserTestResults(data || []);
      setChartData(transformTestResultsForCharts(data || []));

    } catch (error) {
      console.error("Error fetching test results:", error.message);
      toast({ title: "Test Sonuçları Yüklenemedi", description: error.message, variant: "destructive" });
      setUserTestResults([]);
      setChartData(transformTestResultsForCharts([])); // Hata durumunda boş veri ile ayarla
    } finally {
      setIsLoadingData(false);
    }
  }, [user, toast]);


  useEffect(() => {
    if (user && !profile && !authLoading) { 
      fetchProfile(user.id);
    }
    if (user && !authLoading) {
      fetchUserTestResults();
    }
  }, [user, authLoading, profile, fetchProfile, fetchUserTestResults]);

  const handleAvatarUpdate = (newAvatarUrl) => {
    setIsAvatarModalOpen(false);
  };

  if (authLoading) { 
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
         <LoadingSpinner />
         <p className="mt-4 text-lg text-muted-foreground">Kullanıcı doğrulanıyor...</p>
      </div>
    );
  }

  if (!user) {
     return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
          <LogIn className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-4">Durumunu Görüntülemek İçin Giriş Yapmalısın</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Kişisel gelişimini takip etmek, test performansını analiz etmek ve özel öneriler almak için üye girişi yapman gerekiyor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#2785E5] hover:bg-[#2785E5]/90 hover:scale-105 transition-all duration-200 text-white shadow-sm hover:shadow-md text-lg px-8 py-3">
              <Link to="/giris?redirect=/durumum">Giriş Yap</Link>
            </Button>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient text-primary-foreground shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg px-8 py-3 hover:animate-none hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500">
              <Link to="/uye-ol">Sen de Katıl</Link>
            </Button>
          </div>
      </div>
    );
  }
  
  if (isLoadingData || !profile) {
     return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
         <LoadingSpinner />
         <p className="mt-4 text-lg text-muted-foreground">Kullanıcı verileri yükleniyor...</p>
      </div>
    );
  }
  
  const BlurredOverlay = ({ message, actionText, actionLink }) => (
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 p-4 rounded-lg">
      <p className="text-lg font-semibold text-foreground mb-3 text-center">{message}</p>
      {actionLink && actionText && (
         <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
           <Link to={actionLink}>{actionText}</Link>
         </Button>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        <UserProfileHeader 
          name={profile.full_name} 
          email={user.email}
          profileImageUrl={profile.avatar_url}
          onEditClick={() => setIsAvatarModalOpen(true)}
        />

        {userTestResults.length === 0 && !isLoadingData ? (
          <motion.div variants={fadeIn} className="text-center py-12 bg-card rounded-xl shadow-lg border border-border/20">
            <FileQuestion className="h-20 w-20 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-foreground mb-3">Henüz Test Çözmemişsin!</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              İlerlemeni ve performansını burada görmek için ilk testini çözmeye ne dersin?
            </p>
            <div className="space-x-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/test-coz">
                  <BarChart2 className="mr-2 h-5 w-5" /> Test Çöz
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/konu-calis">
                  <Clock className="mr-2 h-5 w-5" /> Konu Çalış
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : chartData && (
          <>
            <UserStatsCards 
              score={chartData.overallScore}
              rank={chartData.rank}
              totalParticipants={chartData.totalParticipants}
              tests={chartData.completedTests}
              avgSuccess={chartData.averageSuccessRate}
            />
            
            <div className="relative">
              {!isPremium && (
                <BlurredOverlay 
                  message="Detaylı analizler ve zaman takibi için Premium üyeliğe geçin!"
                  actionText="Premium'a Yükselt"
                  actionLink="/premium-uye-ol"
                />
              )}
              <UserPerformanceTabs 
                subjectData={chartData.subjectData}
                progressData={chartData.progressData}
                timeSpentData={chartData.timeSpentData}
              />
            </div>

            <UserStrengthsWeaknesses 
              strengths={chartData.strengths}
              weaknesses={chartData.weaknesses}
            />

            <motion.div variants={fadeIn} className="mt-12 text-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity text-lg px-10 py-3 shadow-lg">
                <Link to="/test-coz">
                  <BarChart2 className="mr-2 h-5 w-5" /> Yeni Test Çözmeye Başla
                </Link>
              </Button>
            </motion.div>
          </>
        )}
      </motion.div>
      <AvatarUploadModal 
        isOpen={isAvatarModalOpen}
        onOpenChange={setIsAvatarModalOpen}
        currentAvatarUrl={profile.avatar_url}
        onAvatarUpdate={handleAvatarUpdate}
      />
    </div>
  );
}
