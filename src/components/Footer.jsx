
import React from "react";
import { Link } from "react-router-dom";
import { TestTube2, Facebook, Twitter, Instagram, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TestTube2 className="h-7 w-7 text-primary" />
               <span className="text-2xl font-bold">
                <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              Gelişimini takip et, rekabete katıl. Test çöz, öğren, başar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/hakkimizda" className="hover:text-primary transition-colors">Hakkımızda</Link></li>
              <li><Link to="/kvkk-gizlilik" className="hover:text-primary transition-colors">KVKK & Gizlilik Politikası</Link></li>
              <li><Link to="/iletisim" className="hover:text-primary transition-colors">İletişim</Link></li>
              <li><Link to="/sss" className="hover:text-primary transition-colors">Sıkça Sorulan Sorular</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span>info@testgo.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span>+90 212 123 45 67</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Haberdar Olun</h3>
            <p className="text-sm text-slate-400 mb-3">Yeniliklerden ve duyurulardan ilk siz haberdar olun.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="E-posta adresiniz" className="bg-slate-800 border-slate-700 text-white placeholder-slate-500 text-sm focus:ring-primary focus:border-primary" />
              <Button type="submit" variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-10 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TESTGO. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
