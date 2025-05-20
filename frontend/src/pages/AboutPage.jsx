
import React from "react";
import { motion } from "framer-motion";
import { Users, Target, BookOpen, Zap, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Users className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Hakkımızda: <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Öğrenme ve gelişim yolculuğunuzda size rehberlik etmek için buradayız.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img 
            alt="TESTGO ekibi bir proje üzerinde çalışırken"
            class="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[400px]"
           src="https://images.unsplash.com/photo-1630510590497-e69fac21bfbd" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-foreground">Misyonumuz</h2>
          <p className="text-muted-foreground leading-relaxed">
            TESTGO olarak misyonumuz, her seviyeden öğrencinin potansiyelini en üst düzeye çıkarmasına yardımcı olmaktır. Yenilikçi teknolojiler ve pedagojik yaklaşımlar kullanarak, kişiselleştirilmiş, etkileşimli ve motive edici bir öğrenme deneyimi sunmayı hedefliyoruz. Bilgiye erişimi kolaylaştırarak ve öğrenmeyi keyifli hale getirerek, herkesin başarıya ulaşabileceğine inanıyoruz.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Platformumuz, öğrencilerin eksiklerini tespit etmelerine, güçlü yönlerini pekiştirmelerine ve sınavlara en iyi şekilde hazırlanmalarına olanak tanır. Sürekli güncellenen içeriğimiz ve kullanıcı dostu arayüzümüzle, öğrenme sürecinizi desteklemek için var gücümüzle çalışıyoruz.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">Değerlerimiz</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Lightbulb className="h-8 w-8 text-primary" />, title: "Yenilikçilik", description: "Öğrenme teknolojilerindeki en son gelişmeleri takip ederek sürekli yenileniyoruz." },
            { icon: <Target className="h-8 w-8 text-primary" />, title: "Öğrenci Odaklılık", description: "Tüm kararlarımızı ve geliştirmelerimizi öğrencilerimizin ihtiyaçlarını merkeze alarak yapıyoruz." },
            { icon: <BookOpen className="h-8 w-8 text-primary" />, title: "Erişilebilirlik", description: "Kaliteli eğitimi herkes için erişilebilir kılmayı amaçlıyoruz." },
            { icon: <Zap className="h-8 w-8 text-primary" />, title: "Motivasyon", description: "Öğrenmeyi eğlenceli ve motive edici hale getirmek için oyunlaştırma ve interaktif öğeler kullanıyoruz." },
            { icon: <Users className="h-8 w-8 text-primary" />, title: "Güvenilirlik", description: "Doğru, güncel ve güvenilir içerik sunarak kullanıcılarımızın güvenini kazanıyoruz." },
            { icon: <BookOpen className="h-8 w-8 text-primary" />, title: "Sürekli Gelişim", description: "Platformumuzu ve içeriklerimizi kullanıcı geri bildirimleriyle sürekli geliştiriyoruz." },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow duration-300 card-hover"
            >
              <div className="flex items-center mb-3">
                {item.icon}
                <h3 className="text-xl font-semibold text-foreground ml-3">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="text-center bg-primary/10 p-8 md:p-12 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-primary mb-4">Bize Katılın!</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
          TESTGO ailesinin bir parçası olun, öğrenme serüveninizde yeni bir sayfa açın. Gelişiminize yatırım yapın ve hedeflerinize ulaşın.
        </p>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link to="/uye-ol">Hemen Ücretsiz Kayıt Ol</Link>
        </Button>
      </motion.div>
    </div>
  );
}
