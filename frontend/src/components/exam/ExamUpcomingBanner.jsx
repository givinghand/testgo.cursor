
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CalendarCheck } from 'lucide-react';

export function ExamUpcomingBanner({ date }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-10 p-5 bg-gradient-to-r from-primary/80 via-secondary/80 to-accent/80 rounded-xl shadow-lg text-center text-primary-foreground"
    >
      <div className="flex items-center justify-center mb-2">
        <CalendarCheck className="h-7 w-7 mr-3" />
        <h2 className="text-xl md:text-2xl font-semibold">Yaklaşan TESTGO Denemesi!</h2>
      </div>
      <p className="text-base md:text-lg font-medium">{date}</p>
      <p className="text-xs mt-1 opacity-90">Sakın kaçırma, yerini ayırt!</p>
    </motion.div>
  );
}
