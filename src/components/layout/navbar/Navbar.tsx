"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/common/Container";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { ScrollProgress } from "./ScrollProgress";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Browse Books", path: "/books" },
  { name: "Exchange", path: "/exchange" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Wishlist", path: "/dashboard/wishlist" },
  { name: "Profile", path: "/profile" },
  { name: "Community", path: "/#community" },
  { name: "About", path: "/#about" },
  { name: "Testimonials", path: "/#testimonials" },
  { name: "FAQ", path: "/#faq" },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Check if scrolled past top
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide on scroll down, show on scroll up
    // Don't hide navbar if mobile menu is open
    if (latest > previous && latest > 150 && !isMobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  }, [pathname, isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith("/#")) {
      const targetId = path.substring(2);
      const el = document.getElementById(targetId);
      if (el) {
        if (pathname === "/") {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled || isMobileMenuOpen ? "glass border-b border-white/5 py-3" : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center w-full">
        
        {/* Left: Logo */}
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm"
            >
              <BookOpen className="h-5 w-5" />
            </motion.div>
            <span className="text-xl font-bold tracking-tight text-gradient">BookVerse</span>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex flex-auto items-center justify-center">
          <nav className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <MagneticButton key={link.name} className="bg-transparent border-none p-0 focus:outline-none">
                  <Link
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={`relative px-2 py-2 text-sm font-medium transition-colors hover:text-foreground whitespace-nowrap shrink-0 flex items-center ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </MagneticButton>
              );
            })}
          </nav>
        </div>

        {/* Right: Auth Buttons & Mobile Toggle */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <Link href="/login" className="shrink-0">
              <Button variant="ghost" size="sm" className="whitespace-nowrap">Log in</Button>
            </Link>
            <MagneticButton className="p-0 border-none bg-transparent focus:outline-none shrink-0">
              <Link href="/register" className="shrink-0">
                <Button variant="primary" size="sm" className="whitespace-nowrap">Sign up</Button>
              </Link>
            </MagneticButton>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 7 : 0 }}
                className="h-[2px] w-6 bg-foreground block rounded-full transition-transform"
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1, x: isMobileMenuOpen ? -10 : 0 }}
                className="h-[2px] w-6 bg-foreground block rounded-full transition-transform"
              />
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -7 : 0 }}
                className="h-[2px] w-6 bg-foreground block rounded-full transition-transform"
              />
            </button>
          </div>
        </div>

      </Container>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 z-40 flex flex-col items-center gap-6 glass-heavy p-8 border-b border-white/10 shadow-xl"
          >
            <nav className="flex flex-col items-center gap-4 w-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={`text-lg font-medium transition-colors ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="flex w-full flex-col gap-3 mt-4">
              <Link href="/login" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Log in</Button>
              </Link>
              <Link href="/register" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full">Sign up</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgress />
    </motion.header>
  );
};
