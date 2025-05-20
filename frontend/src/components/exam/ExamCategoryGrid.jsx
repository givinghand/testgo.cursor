
import React from 'react';
import { motion } from 'framer-motion';
import { ExamCategoryCard } from './ExamCategoryCard'; // Aynı dizinde olduğu varsayıldı

export function ExamCategoryGrid({ categories, onCategoryClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          onClick={() => onCategoryClick(category)}
          className="cursor-pointer"
        >
          <ExamCategoryCard category={category} />
        </motion.div>
      ))}
    </div>
  );
}
