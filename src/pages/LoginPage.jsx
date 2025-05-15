
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TestTube2 } from "lucide-react";

export function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/20 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="text-center">
            <Link to="/" className="inline-block mb-4">
              <TestTube2 className="h-12 w-12 text-primary mx-auto" />
            </Link>
            <CardTitle className="text-3xl font-bold">TESGO'ya Giriş Yap</CardTitle>
            <CardDescription>Hesabınıza erişmek için bilgilerinizi girin.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="tcKimlik">TC Kimlik Numarası</Label>
              <Input id="tcKimlik" type="text" placeholder="TC Kimlik Numaranız" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Şifre</Label>
              <Input id="password" type="password" placeholder="Şifreniz" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <Link to="/sifremi-unuttum" className="text-primary hover:underline">
                Şifremi Unuttum
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full text-lg py-3">Giriş Yap</Button>
            <p className="text-center text-sm text-muted-foreground">
              Hesabınız yok mu?{" "}
              <Link to="/uye-ol" className="font-semibold text-primary hover:underline">
                Hemen Üye Ol
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
