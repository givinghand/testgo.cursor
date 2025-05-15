
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, TestTube2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { to: "/blog", text: "Blog" },
    { to: "/test-coz", text: "Test Çöz" },
    { to: "/konu-calis", text: "Konu Çalış" },
    { to: "/denemeler", text: "Denemeler" },
    { to: "/durumum", text: "Durumum" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <TestTube2 className="h-8 w-8 text-primary" />
          <span className="text-3xl font-extrabold tracking-tight">
            <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span>
          </span>
        </Link>

        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            className="text-primary hover:bg-primary/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.to}>
                  <Link to={link.to} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-base font-semibold text-foreground hover:text-primary hover:bg-primary/5")}>
                      {link.text}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Link to="/giris" legacyBehavior passHref>
            <Button variant="ghost" size="sm" className="text-base font-semibold text-foreground hover:text-primary hover:bg-primary/5">
              Giriş Yap
            </Button>
          </Link>
          <Button asChild size="sm" className="text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/uye-ol">Sen de Katıl</Link>
          </Button>
        </div>

        {isOpen && (
          <motion.div 
            className="absolute top-16 left-0 right-0 z-40 bg-background border-b border-primary/20 shadow-lg md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-3 rounded-md hover:bg-primary/10 text-base font-semibold text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <Link
                to="/giris"
                className="px-4 py-3 rounded-md hover:bg-primary/10 text-base font-semibold text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Giriş Yap
              </Link>
              <Button asChild className="w-full mt-2 py-3 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/uye-ol" onClick={() => setIsOpen(false)}>Sen de Katıl</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
