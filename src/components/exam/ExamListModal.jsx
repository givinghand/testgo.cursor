
import React from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, ChevronRight, AlertTriangle } from "lucide-react";

export function ExamListModal({ isOpen, onOpenChange, selectedCategory, sampleExams, upcomingTestgoExamDate, onExamClick }) {
  const filteredExams = sampleExams.filter(exam => 
    selectedCategory?.id 
      ? exam.subject.toLowerCase().includes(selectedCategory.id.toLowerCase().substring(0,3)) || 
        (selectedCategory.id === "yks" && (exam.subject === "TYT" || exam.subject === "AYT Matematik"))
      : true
  );

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[650px] md:max-w-[750px] p-0">
        <DialogHeader className="p-6 bg-primary/10">
          <DialogTitle className="text-2xl font-bold text-primary">{selectedCategory?.name}</DialogTitle>
          <DialogDescription className="text-muted-foreground">Aşağıdaki deneme sınavlarından birini seçebilirsiniz.</DialogDescription>
        </DialogHeader>
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 p-4 bg-secondary/10 border border-secondary/30 rounded-lg text-center"
          >
            <div className="flex items-center justify-center text-secondary mb-1">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <h3 className="text-sm font-semibold">En Yakın TESTGO Denemesi:</h3>
            </div>
            <p className="text-sm font-medium text-secondary">{upcomingTestgoExamDate}</p>
          </motion.div>

          {filteredExams.map((exam, index) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => onExamClick(exam)}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group bg-card hover:border-primary card-hover">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary mb-1">{exam.title}</h4>
                    <div className="flex items-center text-xs text-muted-foreground space-x-3">
                      <span className="flex items-center"><Calendar className="h-3.5 w-3.5 mr-1" /> {exam.date}</span>
                      <span className="flex items-center"><Clock className="h-3.5 w-3.5 mr-1" /> {exam.time}</span>
                      <span className="flex items-center"><Users className="h-3.5 w-3.5 mr-1" /> {exam.participants.toLocaleString()}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground group-hover:text-primary">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          {filteredExams.length === 0 && (
            <p className="text-center text-muted-foreground py-4">Bu kategori için şu anda aktif deneme bulunmamaktadır.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
