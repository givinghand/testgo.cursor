
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { TestTube2 } from "lucide-react";

export function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/20 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-lg shadow-2xl">
          <CardHeader className="text-center">
            <Link to="/" className="inline-block mb-4">
              <TestTube2 className="h-12 w-12 text-primary mx-auto" />
            </Link>
            <CardTitle className="text-3xl font-bold">TESGO'ya Üye Ol</CardTitle>
            <CardDescription>Gelişim yolculuğuna ilk adımını at!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Ad</Label>
                <Input id="firstName" placeholder="Adınız" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Soyad</Label>
                <Input id="lastName" placeholder="Soyadınız" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tcKimlik">TC Kimlik Numarası</Label>
              <Input id="tcKimlik" type="text" placeholder="TC Kimlik Numaranız" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-posta Adresi</Label>
              <Input id="email" type="email" placeholder="ornek@eposta.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Şifre</Label>
              <Input id="password" type="password" placeholder="Şifreniz (en az 8 karakter)" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Şifre Tekrar</Label>
              <Input id="confirmPassword" type="password" placeholder="Şifrenizi tekrar girin" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground">
                <Link to="/kullanim-kosullari" className="text-primary hover:underline">Kullanım Koşulları</Link>'nı ve <Link to="/kvkk-gizlilik" className="text-primary hover:underline">Gizlilik Politikası</Link>'nı okudum, kabul ediyorum.
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full text-lg py-3">Üye Ol</Button>
            <p className="text-center text-sm text-muted-foreground">
              Zaten bir hesabın var mı?{" "}
              <Link to="/giris" className="font-semibold text-primary hover:underline">
                Giriş Yap
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
