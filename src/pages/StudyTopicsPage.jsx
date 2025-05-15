
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { BookOpen, ChevronRight, Folder, FileText, Brain, GraduationCap, Globe, Users, BookCopy, Lightbulb } from "lucide-react";

const examCategories = [
  { id: "lgs", name: "LGS", icon: <GraduationCap className="h-10 w-10 text-primary" />, bgColor: "bg-primary/10", borderColor: "border-primary",
    image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sJTIwY2hpbGRyZW58ZW58MHx8MHx8fDA&auto=format&fit=crop&w=300&q=60" },
  { id: "yks", name: "YKS", icon: <Brain className="h-10 w-10 text-primary" />, bgColor: "bg-primary/10", borderColor: "border-primary",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eSUyMHN0dWRlbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60" },
  { id: "kpss", name: "KPSS", icon: <Users className="h-10 w-10 text-primary" />, bgColor: "bg-primary/10", borderColor: "border-primary",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60" },
  { id: "yds", name: "YDS", icon: <Globe className="h-10 w-10 text-primary" />, bgColor: "bg-primary/10", borderColor: "border-primary",
    image: "https://images.unsplash.com/photo-1516410529446-21e7e7565119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2xvYmFsJTIwY29tbXVuaWNhdGlvbnxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=300&q=60" },
  { id: "yokdil", name: "YÖKDİL", icon: <BookCopy className="h-10 w-10 text-primary" />, bgColor: "bg-primary/10", borderColor: "border-primary",
    image: "https://images.unsplash.com/photo-1491841550275-5fd78501832d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNhZGVtaWN8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=300&q=60" },
];

const defaultSubjects = [
  { id: "turkce", name: "Türkçe", icon: <Lightbulb className="h-8 w-8 text-red-500" />, topics: ["Sözcükte Anlam", "Cümlede Anlam", "Paragrafta Anlam", "Ses Bilgisi", "Yazım Kuralları"], image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60" },
  { id: "matematik", name: "Matematik", icon: <Lightbulb className="h-8 w-8 text-blue-500" />, topics: ["Sayı Kümeleri", "Üslü Sayılar", "Köklü Sayılar", "Çarpanlara Ayırma", "Oran-Orantı"], image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0aGVtYXRpY3N8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60" },
  { id: "fen", name: "Fen Bilimleri", icon: <Lightbulb className="h-8 w-8 text-green-500" />, topics: ["Hücre ve Bölünmeler", "Kalıtım", "Basınç", "Elektrik", "Maddenin Halleri"], image: "https://images.unsplash.com/photo-1532187863486-abf9db50d0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNjaWVuY2V8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60" },
  { id: "din", name: "Din Kültürü", icon: <Lightbulb className="h-8 w-8 text-yellow-500" />, topics: ["Kader İnancı", "Zekat ve Sadaka", "Hac ve Umre", "Kurban İbadeti", "Dinler ve Evrensel Öğütleri"], image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVsaWdpb3VzJTIwdGV4dHxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60" },
  { id: "tarih", name: "Tarih", icon: <Lightbulb className="h-8 w-8 text-orange-500" />, topics: ["Beylikten Devlete Osmanlı", "Dünya Gücü Osmanlı", "Kurtuluş Savaşı", "Atatürk İlkeleri", "Çağdaş Türk ve Dünya Tarihi"], image: "https://images.unsplash.com/photo-1569014999900-6ea12c359560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGlzdG9yeSUyMGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60" },
  { id: "ingilizce", name: "İngilizce", icon: <Lightbulb className="h-8 w-8 text-purple-500" />, topics: ["Tenses", "Modals", "Conditionals", "Reported Speech", "Passive Voice"], image: "https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5nbGlzaCUyMGxlYXJuaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60" },
];


export function StudyTopicsPage() {
  const navigate = useNavigate();
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isSubjectsModalOpen, setIsSubjectsModalOpen] = useState(false);
  const [isTopicsModalOpen, setIsTopicsModalOpen] = useState(false);

  const handleExamCategoryClick = (exam) => {
    setSelectedExam(exam);
    setIsSubjectsModalOpen(true);
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setIsTopicsModalOpen(true);
  };

  const handleTopicClick = (topic) => {
    if (selectedExam && selectedSubject) {
      const topicId = topic.toLowerCase().replace(/\s+/g, '-');
      navigate(`/konu-calis/${selectedExam.id}/${selectedSubject.id}/${topicId}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold text-foreground mb-3">Sınavını seç, Hemen Başla</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sınav kategorini seçerek derslere ve konulara ait içeriklere ulaşabilirsin.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {examCategories.map((exam, index) => (
          <motion.div
            key={exam.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => handleExamCategoryClick(exam)}
          >
            <Card className={`hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group relative border-2 ${exam.borderColor} hover:border-secondary card-hover`}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 z-10"></div>
              <img-replace src={exam.image} alt={exam.name} class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
              <CardHeader className="relative z-20 flex flex-col items-center justify-center text-center p-6 h-48 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                 <div className={`p-3 rounded-full ${exam.bgColor} mb-3 shadow-md`}>{React.cloneElement(exam.icon, { className: exam.icon.props.className.replace(/text-\w+-\d+/, 'text-primary') })}</div>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300">{exam.name}</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={isSubjectsModalOpen} onOpenChange={setIsSubjectsModalOpen}>
        <DialogContent className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] p-0">
          <DialogHeader className="p-6 bg-primary/10">
            <DialogTitle className="text-2xl font-bold text-primary">{selectedExam?.name} Dersleri</DialogTitle>
            <DialogDescription className="text-muted-foreground">Lütfen çalışmak istediğiniz dersi seçin.</DialogDescription>
          </DialogHeader>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto">
            {defaultSubjects.map((subject, index) => (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleSubjectClick(subject)}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer group overflow-hidden relative border hover:border-primary card-hover">
                  <img-replace src={subject.image} alt={subject.name} class="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                    <div className="p-3 rounded-full bg-primary/10 mb-3">{React.cloneElement(subject.icon, { className: subject.icon.props.className.replace(/text-\w+-\d+/, 'text-primary') })}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{subject.name}</h3>
                    <Button variant="ghost" className="text-primary group-hover:underline">
                      Konuları Gör <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isTopicsModalOpen} onOpenChange={setIsTopicsModalOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[550px] p-0">
          <DialogHeader className="p-6 bg-primary/10">
            <DialogTitle className="text-2xl font-bold text-primary">{selectedSubject?.name} Konuları</DialogTitle>
            <DialogDescription className="text-muted-foreground">Aşağıdaki konulardan birini seçerek konu anlatımlarına ulaşabilirsiniz.</DialogDescription>
          </DialogHeader>
          <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
            {selectedSubject?.topics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleTopicClick(topic)}
              >
                <Button variant="outline" className="w-full justify-start text-left h-auto py-3 group hover:bg-primary/5 hover:border-primary">
                  <FileText className="mr-3 h-5 w-5 text-primary/80 group-hover:text-primary" />
                  <span className="flex-grow text-foreground group-hover:text-primary">{topic}</span>
                  <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground group-hover:text-primary" />
                </Button>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
