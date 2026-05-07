import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const slides = [
  {
    image: "https://res.cloudinary.com/di7okmjsx/image/upload/v1778084831/G63_AMG_wo0tqd.jpg",
    title: "Tactical Presence",
    subtitle: "G63 AMG Stealth Edition",
    description: "Unmatched ruggedness meets peerless luxury in our curated selection of verified G-Wagons."
  },
  {
    image: "https://res.cloudinary.com/di7okmjsx/image/upload/v1778084831/Cullinan_Black_Badge_xzint9.jpg",
    title: "Luxury Unbound",
    subtitle: "Cullinan Black Badge",
    description: "The peak of automotive excellence. Hand-selected for the most discerning collectors."
  },
  {
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
    title: "Pure Velocity",
    subtitle: "Porsche 911 GT3 RS",
    description: "Precision engineering from Stuttgart, verified to the highest global standards for Nigerian roads."
  }
];

export const HeroV2 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover grayscale-[0.2] brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50 mb-6 italic underline underline-offset-8 decoration-white/20">
              {slides[current].title}
            </h4>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] italic mb-8">
              {slides[current].subtitle.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-md font-medium leading-relaxed mb-12">
              {slides[current].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-10 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center gap-3">
                Explore Fleet <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                Pre-Order Now
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-12 right-6 md:right-12 z-20 flex flex-col md:flex-row items-center gap-8">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "h-1 transition-all duration-500",
                current === i ? "w-12 bg-white" : "w-6 bg-white/20"
              )}
            />
          ))}
        </div>
        <div className="flex gap-1">
          <button 
            onClick={prev}
            className="p-4 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={next}
            className="p-4 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
