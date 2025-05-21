import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronRight, Folder, FileText, BookOpen } from "lucide-react";
import { examFlowData } from "@/data/examData";

export function StudyTopicsPage() {
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
      navigate(`/konular/${currentExamId}/${currentSubExamId}/${subjectId}?type=study`);
    } else {
      navigate(`/konular/${currentExamId}/${subjectId}?type=study`);
    }
  };

  const getSubjectsForModal = () => {
    if (!currentExamId) return [];
    const exam = examFlowData[currentExamId];
    if (exam.subExams) {
      if (!currentSubExamId) return [];
      // Handle both array and object structures for subExams
      const subExamDetails = Array.isArray(exam.subExams)
        ? exam.subExams.find(se => se.id === currentSubExamId)
        : exam.subExams[currentSubExamId];
      return subExamDetails ? subExamDetails.subjects : [];
    }
    return exam.subjects || [];
  };

  const getModalTitle = () => {
    if (!currentExamId) return "Ders Seçimi";
    const exam = examFlowData[currentExamId];
    if (exam.subExams && currentSubExamId) {
      // Handle both array and object structures for subExams
      const subExamDetails = Array.isArray(exam.subExams)
        ? exam.subExams.find(se => se.id === currentSubExamId)
        : exam.subExams[currentSubExamId];
      return `${exam.name} - ${subExamDetails?.name || ''} Dersleri`;
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
          Sınav kategorini seçerek derslere ve konulara ait içeriklere ulaşabilirsin.
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
            <Card className={`hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden group relative border-2 ${exam.borderColor} hover:scale-110 hover:rotate-1 hover:border-2 card-hover`}>
              <div className={`absolute inset-0 ${exam.gradient} opacity-80 group-hover:opacity-95 transition-all duration-500 z-10`}></div>
              <img-replace src={exam.image} alt={exam.name} class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <CardHeader className="relative z-20 flex flex-col items-center justify-center text-center p-6 h-48">
                <div className="p-3 rounded-full bg-white/90 shadow-lg mb-3 group-hover:scale-110 transition-transform duration-500">{React.cloneElement(exam.icon, { className: exam.icon.props.className })}</div>
                <CardTitle className="text-2xl font-bold text-white drop-shadow-lg">{exam.name}</CardTitle>
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
            <DialogDescription className="text-muted-foreground">Lütfen sınav türünü seçin.</DialogDescription>
          </DialogHeader>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto">
            {Object.entries(examFlowData[currentExamId]?.subExams || {}).map(([subExamId, subExam], index) => (
              <motion.div
                key={subExamId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleSubExamClick(subExamId)}
              >
                <Card className={`hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden group relative border-2 ${examFlowData[currentExamId]?.borderColor} hover:scale-110 hover:rotate-1 hover:border-2 card-hover`}>
                  <div className={`absolute inset-0 ${examFlowData[currentExamId]?.gradient} opacity-80 group-hover:opacity-95 transition-all duration-500 z-10`}></div>
                  <img-replace src={subExam.image} alt={subExam.name} class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                    <div className="p-3 rounded-full bg-white/90 shadow-lg mb-3 group-hover:scale-110 transition-transform duration-500">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white drop-shadow-lg mb-2">{subExam.name}</h3>
                    <Button variant="secondary" className="bg-white/90 hover:bg-white">
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
            if (examFlowData[currentExamId]?.subExams && !isSubExamModalOpen) {
                 setCurrentSubExamId(null);
            }
          }
        }}>
        <DialogContent className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] p-0">
          <DialogHeader className="p-6 bg-primary/10">
            <DialogTitle className="text-2xl font-bold text-primary">{getModalTitle()}</DialogTitle>
            <DialogDescription className="text-muted-foreground">Lütfen konu çalışmak istediğiniz dersi seçin.</DialogDescription>
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
                <Card className={`hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden group relative border-2 ${examFlowData[currentExamId]?.borderColor} hover:scale-110 hover:rotate-1 hover:border-2 card-hover`}>
                  <div className={`absolute inset-0 ${examFlowData[currentExamId]?.gradient} opacity-80 group-hover:opacity-95 transition-all duration-500 z-10`}></div>
                  <img-replace src={subject.image} alt={subject.name} class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                    <div className="p-3 rounded-full bg-white/90 shadow-lg mb-3 group-hover:scale-110 transition-transform duration-500">{React.cloneElement(subject.icon, { className: subject.icon.props.className })}</div>
                    <h3 className="text-xl font-semibold text-white drop-shadow-lg mb-2">{subject.name}</h3>
                    <Button variant="secondary" className="bg-white/90 hover:bg-white">
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
