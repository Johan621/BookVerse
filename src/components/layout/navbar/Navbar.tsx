"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "@/components/common/Container";
import { NavLogo } from "./NavLogo";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";
import { ScrollProgress } from "./ScrollProgress";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Check if scrolled past top
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
        isScrolled ? "glass border-b border-white/5 py-3" : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <NavLogo />
        <NavDesktop />
        <NavMobile />
      </Container>
      <ScrollProgress />
    </motion.header>
  );
};
