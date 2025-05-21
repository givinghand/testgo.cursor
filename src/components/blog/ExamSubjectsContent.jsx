import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { examFlowData } from "@/data/examData"; 
import { CheckCircle, ListTree, AlertTriangle, BarChart2, BookOpen } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const ExamSubjectsContent = ({ examKey }) => {
  const exam = examFlowData[examKey.toLowerCase()];

  if (!exam) {
    return (
      <Card className="mt-6 bg-destructive/10 border-destructive/30">
        <CardHeader>
          <CardTitle className="flex items-center text-destructive">
            <AlertTriangle className="mr-2 h-6 w-6" /> Sınav Bilgisi Bulunamadı
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-destructive-foreground">
            "{examKey.toUpperCase()}" sınavı için konu detayları şu anda mevcut değil. Lütfen daha sonra tekrar kontrol edin.
          </p>
        </CardContent>
      </Card>
    );
  }

  const renderSubjects = (subjects, parentExamName) => {
    if (!subjects || subjects.length === 0) {
      return <p className="text-muted-foreground">Bu bölüm için henüz konu eklenmemiş.</p>;
    }
    return subjects.map((subject, subjectIndex) => (
      <motion.div key={subject.id} custom={subjectIndex} initial="hidden" animate="visible" variants={fadeIn}>
        <Card className="mb-4 overflow-hidden bg-card shadow-sm border border-border/50">
          <CardHeader className="bg-muted/30 p-4">
            <CardTitle className="text-lg font-semibold text-primary flex items-center">
              {React.cloneElement(subject.icon, { className: "mr-2 h-5 w-5"})}
              {subject.name} ({parentExamName})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            {Object.entries(subject.topics).length > 0 ? (
              <ul className="space-y-1.5">
                {Object.entries(subject.topics).map(([topicKey, topicName], topicIndex) => (
                  <li key={topicKey} className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>{topicName}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">Bu ders için henüz konu başlığı eklenmemiş.</p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    ));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center">
        <ListTree className="mr-3 h-7 w-7 text-primary" /> {exam.name} Konuları ve Ders İçerikleri
      </h2>
      <p className="text-muted-foreground mb-6 text-sm md:text-base">
        Aşağıda {exam.name} sınavı kapsamında yer alan dersler ve bu derslere ait konu başlıklarını bulabilirsiniz. TESTGO platformunda bu konulara yönelik testler çözebilir ve konu anlatımlarına erişebilirsiniz.
      </p>
      {exam.subExams ? (
        <Accordion type="multiple" collapsible className="w-full space-y-3">
          {Object.entries(exam.subExams).map(([subExamId, subExam]) => (
            <AccordionItem key={subExamId} value={subExamId} className="border border-border/50 rounded-lg overflow-hidden bg-card shadow-sm">
              <AccordionTrigger className="p-4 hover:no-underline text-xl font-semibold text-primary bg-muted/30">
                 <div className="flex items-center">
                   <BookOpen className="mr-3 h-6 w-6" />
                   {subExam.name} Dersleri
                 </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 pt-2 space-y-4 bg-background">
                {renderSubjects(subExam.subjects, `${exam.name} - ${subExam.name}`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        renderSubjects(exam.subjects, exam.name)
      )}
       <Card className="mt-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border-primary/20">
            <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Hazırlığa Başla!</h3>
                <p className="text-sm text-muted-foreground mb-4">
                    Bu konulara hakim olmak için TESTGO'daki testleri çözebilir ve konu anlatımlarını inceleyebilirsiniz.
                </p>
                <div className="flex gap-3">
                     <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link to={`/test-coz?exam=${examKey.toLowerCase()}`}>
                            <BarChart2 className="mr-2 h-4 w-4"/> {exam.name} Testleri Çöz
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link to={`/konu-calis?exam=${examKey.toLowerCase()}`}>
                            <BookOpen className="mr-2 h-4 w-4"/> {exam.name} Konularına Çalış
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
};

export default ExamSubjectsContent;
