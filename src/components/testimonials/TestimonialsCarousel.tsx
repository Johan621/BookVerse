"use client";

import * as React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { TestimonialCard, TestimonialProps } from "./TestimonialCard";
import { useEffect, useRef } from "react";

const TESTIMONIALS: TestimonialProps[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    college: "Delhi University",
    photoInitials: "SJ",
    rating: 5,
    review: "I saved over ₹4,000 this semester just by exchanging my old engineering books. The AI matches are incredibly accurate and the process is so smooth.",
    booksExchanged: 12,
    savings: 4200,
    colorClass: "from-purple-500 to-indigo-500",
  },
  {
    id: "2",
    name: "Rahul Mehta",
    college: "IIT Bombay",
    photoInitials: "RM",
    rating: 5,
    review: "The duplicate detection saved me from buying a book I already had in my digital library. Best platform for students, hands down.",
    booksExchanged: 8,
    savings: 3100,
    colorClass: "from-blue-500 to-cyan-500",
  },
  {
    id: "3",
    name: "Priya Sharma",
    college: "VIT Vellore",
    photoInitials: "PS",
    rating: 4,
    review: "Love the verified listings. I never have to worry about the condition of the books. Meeting on campus makes it super safe and easy.",
    booksExchanged: 15,
    savings: 5500,
    colorClass: "from-emerald-500 to-teal-500",
  },
  {
    id: "4",
    name: "Vikram Singh",
    college: "BITS Pilani",
    photoInitials: "VS",
    rating: 5,
    review: "Sold my entire 1st-year stash in less than a week. The dashboard analytics are super motivating to keep sharing.",
    booksExchanged: 22,
    savings: 8900,
    colorClass: "from-rose-500 to-orange-500",
  },
  {
    id: "5",
    name: "Ananya Desai",
    college: "SRM Institute",
    photoInitials: "AD",
    rating: 5,
    review: "The price predictor is genius. I know exactly what to charge and what to pay. It makes negotiating completely stress-free.",
    booksExchanged: 6,
    savings: 2400,
    colorClass: "from-pink-500 to-rose-500",
  },
];

export const TestimonialsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    // Simple auto-scroll animation loop
    const sequence = async () => {
      await controls.start({
        x: "-50%",
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };
    sequence();
  }, [controls]);

  // Duplicate items to create infinite scroll effect
  const carouselItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="relative w-full overflow-hidden py-12" ref={containerRef}>
      
      {/* Gradient Fades for edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div 
        className="flex"
        animate={controls}
        whileHover={{ animationPlayState: "paused" }}
        style={{ width: "fit-content" }}
      >
        {carouselItems.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
};
