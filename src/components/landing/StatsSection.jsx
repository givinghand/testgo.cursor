
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/pages/LandingPage";

export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-primary">500+</p>
            <p className="text-gray-600">Konu Başlığı</p>
          </motion.div>
          <motion.div variants={fadeIn} className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-primary">50.000+</p>
            <p className="text-gray-600">Soru Bankası</p>
          </motion.div>
          <motion.div variants={fadeIn} className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-primary">100.000+</p>
            <p className="text-gray-600">Aktif Öğrenci</p>
          </motion.div>
          <motion.div variants={fadeIn} className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-primary">95%</p>
            <p className="text-gray-600">Başarı Oranı</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
