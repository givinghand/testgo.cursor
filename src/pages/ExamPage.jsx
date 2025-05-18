
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ExamPageHeader } from "@/components/exam/ExamPageHeader";
import { ExamCategoryGrid } from "@/components/exam/ExamCategoryGrid";
import { ExamListModal } from "@/components/exam/ExamListModal";
import { ExamUpcomingBanner } from "@/components/exam/ExamUpcomingBanner";
import { examCategoriesData, sampleExams, upcomingTestgoExamDate } from "@/data/examData";

export function ExamPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isExamsModalOpen, setIsExamsModalOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsExamsModalOpen(true);
  };

  const handleExamClick = (exam) => {
    // Şimdilik /test-coz/deneme/:examId/baslangic gibi bir yola yönlendiriyoruz.
    // Gerçek test başlangıç ekranı veya TestPage'e yönlendirme yapılabilir.
    // Örnek olarak TestPage'e yönlendirme:
    // navigate(`/test-coz/${selectedCategory.id}/deneme/${exam.id}`); 
    // Veya özel bir deneme başlangıç ekranına:
    navigate(`/deneme/${exam.id}`);
    setIsExamsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <ExamPageHeader />
      <ExamUpcomingBanner date={upcomingTestgoExamDate} />
      <ExamCategoryGrid 
        categories={examCategoriesData}
        onCategoryClick={handleCategoryClick}
      />
      <ExamListModal
        isOpen={isExamsModalOpen}
        onOpenChange={setIsExamsModalOpen}
        selectedCategory={selectedCategory}
        sampleExams={sampleExams}
        upcomingTestgoExamDate={upcomingTestgoExamDate} // Bu prop artık ExamUpcomingBanner'da kullanılıyor, modal için gereksiz olabilir.
        onExamClick={handleExamClick}
      />
    </div>
  );
}
