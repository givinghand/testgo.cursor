import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { fadeIn, scaleUp } from "@/utils/animations.jsx";

export function HeroSection() {
  return (
    <section className="relative text-white py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Gelişimin Yeni Adı:{" "}
            <span className="block sm:inline text-green-300">TESTGO</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-gray-100">
            Test çöz, gelişimini takip et, rekabete katıl. Öğrenme yolculuğunda
            sana özel bir deneyim.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-white text-primary hover:bg-gray-100 shadow-lg transform hover:scale-105 transition-transform duration-300 group px-8 py-3 text-lg font-bold"
          >
            <Link to="/test-coz">
              Hemen Ücretsiz Test Çözmeye Başla
              <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 glass-effect">
            <img
              class="absolute inset-0 w-full h-full object-cover"
              alt="Modern bir sınıfta etkileşimli dijital tabletlerle çalışan neşeli öğrenciler"
              src="https://images.unsplash.com/photo-1576870397449-6ef1af18beb4"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
