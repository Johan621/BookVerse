"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/animations/MagneticButton";

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

export const NavDesktop = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-1 items-center justify-between ml-8">
      <nav className="flex items-center gap-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <MagneticButton key={link.name} className="bg-transparent border-none p-0 focus:outline-none">
              <Link
                href={link.path}
                onClick={(e) => {
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
                className={`relative px-3 lg:px-4 py-2 text-sm font-medium transition-colors hover:text-foreground ${
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
      
      <div className="flex items-center gap-4">
        <Link href="/login">
          <Button variant="ghost" size="sm">Log in</Button>
        </Link>
        <MagneticButton className="p-0 border-none bg-transparent focus:outline-none">
          <Link href="/register">
            <Button variant="primary" size="sm">Sign up</Button>
          </Link>
        </MagneticButton>
      </div>
    </div>
  );
};
