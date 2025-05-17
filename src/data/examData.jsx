
import React from "react";
import { Award, TrendingUp, Users, FileText, CheckCircle } from "lucide-react";

export const examCategoriesData = [
  { id: "lgs", name: "LGS Denemeleri", icon: <Award className="h-10 w-10 text-primary" />, bgColor: "bg-primary/10", borderColor: "border-primary",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=70",
    description: "Liselere Geçiş Sistemi (LGS) için özel olarak hazırlanmış, güncel müfredata uygun deneme sınavları." },
  { id: "yks", name: "YKS Denemeleri", icon: <TrendingUp className="h-10 w-10 text-primary" />, bgColor: "bg-primary/10", borderColor: "border-primary",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=400&q=70",
    description: "Yükseköğretim Kurumları Sınavı (YKS) için TYT ve AYT formatlarında, kapsamlı deneme sınavları." },
  { id: "kpss", name: "KPSS Denemeleri", icon: <Users className="h-10 w-10 text-primary" />, bgColor: "bg-primary/10", borderColor: "border-primary",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVldGluZ3xlbnwwfHwwfHx8MA&auto=format&fit=crop&w=400&q=70",
    description: "Kamu Personel Seçme Sınavı (KPSS) için Lisans, Ön Lisans ve Ortaöğretim düzeylerinde denemeler." },
  { id: "yds", name: "YDS Denemeleri", icon: <FileText className="h-10 w-10 text-primary" />, bgColor: "bg-primary/10", borderColor: "border-primary",
    image: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=70",
    description: "Yabancı Dil Bilgisi Seviye Tespit Sınavı (YDS) için güncel format ve soru tiplerine uygun denemeler." },
  { id: "yokdil", name: "YÖKDİL Denemeleri", icon: <CheckCircle className="h-10 w-10 text-primary" />, bgColor: "bg-primary/10", borderColor: "border-primary",
    image: "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=400&q=70",
    description: "Yükseköğretim Kurumları Yabancı Dil Sınavı (YÖKDİL) için Fen, Sağlık ve Sosyal Bilimler alanlarında denemeler." },
];

export const sampleExams = [
  { id: "deneme1", title: "TESTGO Türkiye Geneli TYT Deneme Sınavı - 1", date: "25 Mayıs 2025", time: "10:00 - 12:15", participants: 12580, subject: "TYT" },
  { id: "deneme2", title: "TESTGO AYT Matematik Denemesi - Özel Seri", date: "28 Mayıs 2025", time: "14:00 - 16:00", participants: 8750, subject: "AYT Matematik" },
  { id: "deneme3", title: "TESTGO LGS Son Prova Denemesi - 3", date: "1 Haziran 2025", time: "09:30 - 11:30", participants: 15200, subject: "LGS" },
  { id: "deneme4", title: "TESTGO KPSS Genel Yetenek Denemesi - 5", date: "5 Haziran 2025", time: "10:00 - 12:00", participants: 9500, subject: "KPSS" },
  { id: "deneme5", title: "TESTGO YDS İngilizce Denemesi - Bahar Dönemi", date: "8 Haziran 2025", time: "14:00 - 17:00", participants: 7200, subject: "YDS" },
];

export const upcomingTestgoExamDate = "15 Haziran 2025 Cumartesi, Saat 10:00 - TESTGO Türkiye Geneli YKS Deneme Sınavı";
