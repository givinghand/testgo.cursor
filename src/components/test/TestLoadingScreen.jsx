
import React from "react";
import { motion } from "framer-motion";

export function TestLoadingScreen({ duration = 7000 }) {
  const progressDuration = (duration / 1000) - 0.5; // Adjust for delays

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] bg-background text-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div className="lava-lamp mx-auto">
          <div className="bubble bubble1"></div>
          <div className="bubble bubble2"></div>
          <div className="bubble bubble3"></div>
          <div className="bubble bubble4"></div>
        </div>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-2xl sm:text-3xl font-bold text-primary mb-3"
      >
        Sınavınız Hazırlanıyor...
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-base sm:text-lg text-muted-foreground max-w-md"
      >
        Lütfen bekleyin, en iyi soruları sizin için seçiyoruz. Başarıya bir adım daha yakınsınız!
      </motion.p>
      <motion.div 
        className="mt-8 w-full max-w-xs h-2 bg-primary/20 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <motion.div 
          className="h-full bg-primary rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: progressDuration, ease: "linear", delay: 0.5 }}
        />
      </motion.div>
    </div>
  );
}
