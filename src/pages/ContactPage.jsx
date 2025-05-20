
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageSquare, User, Info, Twitter, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme mantığı buraya eklenecek
    // Şimdilik sadece bir toast mesajı gösterelim
    toast({
      title: "Mesajınız Gönderildi!",
      description: "En kısa sürede sizinle iletişime geçeceğiz.",
      variant: "default", 
    });
    e.target.reset(); // Formu sıfırla
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          İletişime Geçin
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Soru, öneri veya şikayetleriniz için bize ulaşmaktan çekinmeyin.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary flex items-center">
                <MessageSquare className="h-6 w-6 mr-2" /> Bize Yazın
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="messageType" className="block text-sm font-medium text-foreground mb-1">Mesaj Tipi</label>
                    <Select required>
                      <SelectTrigger id="messageType" className="w-full">
                        <SelectValue placeholder="Seçiniz" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="soru">Soru</SelectItem>
                        <SelectItem value="oneri">Öneri</SelectItem>
                        <SelectItem value="sikayet">Şikayet</SelectItem>
                        <SelectItem value="isbirligi">İş Birliği</SelectItem>
                        <SelectItem value="diger">Diğer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1">Ad Soyad</label>
                    <Input type="text" id="fullName" placeholder="Adınız ve Soyadınız" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">E-Posta <span className="text-destructive">*</span></label>
                    <Input type="email" id="email" placeholder="ornek@mail.com" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Telefon <span className="text-destructive">*</span></label>
                    <Input type="tel" id="phone" placeholder="05XX XXX XX XX" required />
                    <p className="text-xs text-muted-foreground mt-1">Buraya yazdığınız numara üzerinden SMS olarak bilgilendirme yapılacaktır!</p>
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Konu</label>
                  <Input type="text" id="subject" placeholder="Mesajınızın konusu" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Mesajınız <span className="text-destructive">*</span></label>
                  <Textarea id="message" placeholder="Mesajınızı buraya yazın..." rows={5} required />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="h-5 w-5 mr-2" /> Gönder
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="space-y-8"
        >
          <Card className="shadow-lg bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <Phone className="h-5 w-5 mr-2" /> Telefon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:+902121234567" className="text-lg hover:underline">+90 212 123 45 67</a>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <Mail className="h-5 w-5 mr-2" /> E-Posta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:info@testgo.com" className="text-lg hover:underline">info@testgo.com</a>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" /> Adres
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                TESTGO Eğitim Teknolojileri A.Ş.<br />
                Örnek Mah. Bilgi Sok. No:123<br />
                İstanbul, Türkiye
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                <Info className="h-5 w-5 mr-2 text-primary" /> Sosyal Medya
              </CardTitle>
            </CardHeader>
            <CardContent className="flex space-x-4">
              <Button variant="outline" size="icon" asChild className="text-primary border-primary hover:bg-primary/10">
                <a href="#" target="_blank" rel="noopener noreferrer"><Instagram /></a>
              </Button>
              <Button variant="outline" size="icon" asChild className="text-primary border-primary hover:bg-primary/10">
                <a href="#" target="_blank" rel="noopener noreferrer"><Twitter /></a>
              </Button>
              <Button variant="outline" size="icon" asChild className="text-primary border-primary hover:bg-primary/10">
                <a href="#" target="_blank" rel="noopener noreferrer"><Facebook /></a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
