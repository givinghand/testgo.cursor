
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X, BookOpen, BarChart2, UserCircle, LogIn, Award, Edit3 } from "lucide-react";

const navLinks = [
  { name: "Blog", path: "/blog", icon: <BookOpen className="h-5 w-5" /> },
  { name: "Test Çöz", path: "/test-coz", icon: <Edit3 className="h-5 w-5" /> },
  { name: "Konu Çalış", path: "/konu-calis", icon: <BarChart2 className="h-5 w-5" /> },
  { name: "Denemeler", path: "/denemeler", icon: <Award className="h-5 w-5" /> },
  { name: "Durumum", path: "/durumum", icon: <UserCircle className="h-5 w-5" /> },
];

const AuthButtons = () => (
  <>
    <Button variant="ghost" asChild className="text-foreground hover:text-primary transition-colors">
      <Link to="/giris">
        <LogIn className="mr-2 h-4 w-4" /> Giriş Yap
      </Link>
    </Button>
    <Button asChild className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 shadow-md">
      <Link to="/uye-ol">Sen de Katıl</Link>
    </Button>
  </>
);


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-3xl font-extrabold">
              <span className="text-primary">TEST</span>
              <span className="text-secondary">GO</span>
            </h1>
          </Link>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150
                   ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-primary hover:bg-primary/5'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            <AuthButtons />
          </div>

          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card p-0">
                <div className="p-4 border-b border-border flex justify-between items-center">
                   <Link to="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
                     <h1 className="text-2xl font-extrabold">
                       <span className="text-primary">TEST</span>
                       <span className="text-secondary">GO</span>
                     </h1>
                   </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6 text-muted-foreground" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-2 p-4">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors duration-150
                         ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-primary hover:bg-primary/5'}`
                      }
                    >
                      {React.cloneElement(link.icon, { className: `mr-3 h-5 w-5 ${link.isActive ? 'text-primary' : ''}`})}
                      {link.name}
                    </NavLink>
                  ))}
                </nav>
                <div className="p-4 border-t border-border space-y-3">
                    <Button variant="ghost" asChild className="w-full justify-start text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      <Link to="/giris">
                        <LogIn className="mr-2 h-4 w-4" /> Giriş Yap
                      </Link>
                    </Button>
                    <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 shadow-md" onClick={() => setIsOpen(false)}>
                      <Link to="/uye-ol">Sen de Katıl</Link>
                    </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
