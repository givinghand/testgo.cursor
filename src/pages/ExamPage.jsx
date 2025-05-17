
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ExamPageHeader } from "@/components/exam/ExamPageHeader";
import { ExamCategoryCard } from "@/components/exam/ExamCategoryCard";
import { ExamListModal } from "@/components/exam/ExamListModal";
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
    navigate(`/test-coz/deneme/${exam.id}/baslangic`);
    setIsExamsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <ExamPageHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {examCategoriesData.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => handleCategoryClick(category)}
          >
            <ExamCategoryCard category={category} />
          </motion.div>
        ))}
      </div>

      <ExamListModal
        isOpen={isExamsModalOpen}
        onOpenChange={setIsExamsModalOpen}
        selectedCategory={selectedCategory}
        sampleExams={sampleExams}
        upcomingTestgoExamDate={upcomingTestgoExamDate}
        onExamClick={handleExamClick}
      />
    </div>
  );
}
