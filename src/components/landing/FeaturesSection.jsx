import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, BarChart2, Award } from "lucide-react";
import { fadeIn, staggerContainer } from "@/pages/LandingPage";

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Neden TESTGO?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Eğitim yolculuğunuzda size özel çözümler sunuyoruz. Güçlü analiz
            araçlarımız ve interaktif içeriklerimizle fark yaratın.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeIn}>
            <Card className="h-full card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>İnteraktif Testler</CardTitle>
                <CardDescription>
                  Konulara göre ayrılmış interaktif testlerle bilgilerinizi
                  pekiştirin.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Binlerce soru içeren test havuzumuzla kendinizi sınayın.
                  Anında geri bildirim alın ve doğru cevapları öğrenin.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/testler">Testleri İncele</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Detaylı Analizler</CardTitle>
                <CardDescription>
                  Güçlü ve zayıf yönlerinizi keşfedin, eksik konularınızı
                  belirleyin.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yapay zeka destekli analiz sistemimiz, performansınızı
                  değerlendirir ve kişiselleştirilmiş çalışma planları
                  oluşturur.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/durum-analizi">Analizleri Gör</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Deneme Sınavları</CardTitle>
                <CardDescription>
                  Ülke genelindeki deneme sınavlarına katılın ve sıralamanızı
                  görün.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gerçek sınav formatında hazırlanmış denemelerle kendinizi test
                  edin. Sınav sonrası detaylı raporlar ve sıralamalar ile
                  durumunuzu değerlendirin.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/denemeler">Denemelere Katıl</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
