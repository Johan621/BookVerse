"use client";

import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter = ({ end, duration = 2, suffix = "", prefix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);
      
      if (progress < 1) {
        // easeOutExpo
        const currentCount = end * (progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress));
        setCount(Math.floor(currentCount));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  const formattedCount = new Intl.NumberFormat("en-IN").format(count);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{formattedCount}{suffix}
    </span>
  );
};
