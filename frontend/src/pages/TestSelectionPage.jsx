
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronRight, Folder, FileText } from "lucide-react";
import { examFlowData } from "@/data/examData";

export function TestSelectionPage() {
  const navigate = useNavigate();
  const [currentExamId, setCurrentExamId] = useState(null);
  const [currentSubExamId, setCurrentSubExamId] = useState(null); 
  const [currentSubjectId, setCurrentSubjectId] = useState(null);
  
  const [isSubExamModalOpen, setIsSubExamModalOpen] = useState(false);
  const [isSubjectsModalOpen, setIsSubjectsModalOpen] = useState(false);

  const examCategories = Object.values(examFlowData);

  const handleExamCategoryClick = (examId) => {
    setCurrentExamId(examId);
    const exam = examFlowData[examId];
    if (exam.subExams) {
      setIsSubExamModalOpen(true);
    } else {
      setIsSubjectsModalOpen(true);
    }
  };

  const handleSubExamClick = (subExamId) => {
    setCurrentSubExamId(subExamId);
    setIsSubExamModalOpen(false);
    setIsSubjectsModalOpen(true);
  };

  const handleSubjectClick = (subjectId) => {
    setCurrentSubjectId(subjectId);
    setIsSubjectsModalOpen(false);
    if (currentExamId === 'yks' && currentSubExamId) {
      navigate(`/konular/${currentExamId}/${currentSubExamId}/${subjectId}?type=test`);
    } else {
      navigate(`/konular/${currentExamId}/${subjectId}?type=test`);
    }
  };
  
  const getSubjectsForModal = () => {
    if (!currentExamId) return [];
    const exam = examFlowData[currentExamId];
    if (exam.subExams) {
      if (!currentSubExamId) return [];
      const subExam = exam.subExams.find(se => se.id === currentSubExamId);
      return subExam ? subExam.subjects : [];
    }
    return exam.subjects || [];
  };

  const getModalTitle = () => {
    if (!currentExamId) return "Ders Seçimi";
    const exam = examFlowData[currentExamId];
    if (exam.subExams && currentSubExamId) {
      const subExam = exam.subExams.find(se => se.id === currentSubExamId);
      return `${exam.name} - ${subExam?.name || ''} Dersleri`;
    }
    return `${exam.name} Dersleri`;
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
          Sınav kategorini seçerek derslere ve konulara ait testleri çözmeye başlayabilirsin.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {examCategories.map((exam, index) => (
          <motion.div
            key={exam.name} 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => handleExamCategoryClick(Object.keys(examFlowData)[index])}
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

      {/* SubExam Modal (YKS için TYT/AYT seçimi) */}
      <Dialog open={isSubExamModalOpen} onOpenChange={(isOpen) => {
          setIsSubExamModalOpen(isOpen);
          if (!isOpen) setCurrentSubExamId(null); 
        }}>
        <DialogContent className="sm:max-w-[500px] md:max-w-[600px] p-0">
          <DialogHeader className="p-6 bg-primary/10">
            <DialogTitle className="text-2xl font-bold text-primary">{examFlowData[currentExamId]?.name} - Sınav Türü Seçin</DialogTitle>
            <DialogDescription className="text-muted-foreground">Lütfen TYT veya AYT seçimi yapın.</DialogDescription>
          </DialogHeader>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto">
            {examFlowData[currentExamId]?.subExams?.map((subExam, index) => (
              <motion.div
                key={subExam.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleSubExamClick(subExam.id)}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer group overflow-hidden relative border hover:border-primary card-hover">
                  <img-replace src={subExam.image} alt={subExam.name} class="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                    <div className="p-3 rounded-full bg-primary/10 mb-3">{React.cloneElement(subExam.icon, { className: subExam.icon.props.className.replace(/text-\w+-\d+/, 'text-primary') })}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{subExam.name}</h3>
                    <Button variant="ghost" className="text-primary group-hover:underline">
                      Dersleri Gör <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Subjects Modal */}
      <Dialog open={isSubjectsModalOpen} onOpenChange={(isOpen) => {
          setIsSubjectsModalOpen(isOpen);
          if (!isOpen) {
            setCurrentSubjectId(null);
            if (examFlowData[currentExamId]?.subExams) {
              // Eğer YKS gibi bir alt sınav varsa ve ders modalı kapanıyorsa, subExamId'yi de sıfırla ki ana sınav seçimine dönsün.
              // Ancak subExam modalı zaten açıksa (yani ders modalından önce subExam modalı açılmışsa) bunu yapma.
              // Bu kontrol, doğrudan ders modalının kapanması durumunda subExamId'yi sıfırlamak için.
              if (!isSubExamModalOpen) {
                 setCurrentSubExamId(null);
              }
            }
          }
        }}>
        <DialogContent className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] p-0">
          <DialogHeader className="p-6 bg-primary/10">
            <DialogTitle className="text-2xl font-bold text-primary">{getModalTitle()}</DialogTitle>
            <DialogDescription className="text-muted-foreground">Lütfen test çözmek istediğiniz dersi seçin.</DialogDescription>
          </DialogHeader>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto">
            {getSubjectsForModal().map((subject, index) => (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleSubjectClick(subject.id)}
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
             {getSubjectsForModal().length === 0 && (
              <p className="col-span-full text-center text-muted-foreground py-10">Bu sınav türü için henüz ders eklenmemiş.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
