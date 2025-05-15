import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { fadeIn } from "@/utils/animations.jsx";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-green-600 text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Rocket className="h-16 w-16 mx-auto mb-6 text-green-200" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
            Bugün Gelişimini Başlat!
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-xl mx-auto">
            Daha fazla bekleme. TESTGO ile potansiyelini keşfet, hedeflerine
            ulaş ve başarıya giden yolda ilk adımını at.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-background text-primary hover:bg-background/90 shadow-lg transform hover:scale-105 transition-transform duration-300 group px-10 py-3 text-lg font-bold"
          >
            <Link to="/test-coz">
              Hemen Test Çöz
              <Rocket className="ml-2.5 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
