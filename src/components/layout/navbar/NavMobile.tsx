"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Browse Books", path: "/books" },
  { name: "Exchange", path: "/exchange" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Wishlist", path: "/wishlist" },
  { name: "Profile", path: "/profile" },
  { name: "Community", path: "/#community" },
  { name: "About", path: "/#about" },
  { name: "Testimonials", path: "/#testimonials" },
  { name: "FAQ", path: "/#faq" },
];

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on route change, only if open
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isOpen) setIsOpen(false);
  }, [pathname, isOpen]);

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={toggleMenu}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
      >
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 7 : 0,
          }}
          className="h-[2px] w-6 bg-foreground block rounded-full transition-transform"
        />
        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -10 : 0,
          }}
          className="h-[2px] w-6 bg-foreground block rounded-full transition-transform"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -7 : 0,
          }}
          className="h-[2px] w-6 bg-foreground block rounded-full transition-transform"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 z-40 flex flex-col items-center gap-6 glass-heavy p-8 border-t border-white/10 shadow-xl"
          >
            <nav className="flex flex-col items-center gap-4 w-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={(e) => {
                      setIsOpen(false);
                      if (link.path.startsWith("/#")) {
                        const targetId = link.path.substring(2);
                        const el = document.getElementById(targetId);
                        if (el) {
                          if (pathname === "/") {
                            e.preventDefault();
                            el.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }
                    }}
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
              <Link href="/login" className="w-full" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">Log in</Button>
              </Link>
              <Link href="/register" className="w-full" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full">Sign up</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
