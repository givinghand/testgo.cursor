import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function ExamPageHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10 text-center"
    >
      <Award className="mx-auto h-16 w-16 text-primary mb-4" />
      <h1 className="text-4xl font-bold text-foreground mb-3">Türkiye Geneli Deneme Sınavları</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Kendinizi gerçek sınav atmosferinde test edin, sıralamanızı görün ve eksiklerinizi belirleyin.
      </p>
    </motion.div>
  );
}
