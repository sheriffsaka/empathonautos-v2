import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const slides = [
  {
    image: "https://res.cloudinary.com/di7okmjsx/image/upload/v1778084831/G63_AMG_wo0tqd.jpg",
    title: "Vanguard Selection",
    subtitle: "Absolute Majesty",
    description: "The Empathon Blue Tier represents the pinnacle of automotive acquisition in Nigeria."
  },
  {
    image: "https://res.cloudinary.com/di7okmjsx/image/upload/v1778084831/Cullinan_Black_Badge_xzint9.jpg",
    title: "Precision Engine",
    subtitle: "Supreme Authority",
    description: "Engineered excellence. Every vehicle undergoes a rigorous 200-point inspection before it joins our blue rank."
  }
];

export const HeroV3 = () => {
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
    <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-[#001440]">
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
            className="w-full h-full object-cover brightness-[0.5] mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-[#001440]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001440] via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#70d1ff] mb-6 italic border-l-2 border-[#70d1ff] pl-4">
              {slides[current].title}
            </h4>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase text-white leading-[0.85] italic mb-8">
              {slides[current].subtitle}
            </h1>
            <p className="text-[#a0c4ff] text-lg md:text-xl max-w-md font-medium leading-relaxed mb-12">
              {slides[current].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#70d1ff] text-[#001440] px-10 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all flex items-center gap-3">
                View Collection <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-[#70d1ff] text-[#70d1ff] px-10 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-[#70d1ff]/10 transition-all">
                Contact Concierge
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 z-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "h-[2px] transition-all duration-500",
                current === i ? "w-20 bg-[#70d1ff]" : "w-10 bg-white/20"
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button 
            onClick={prev}
            className="w-14 h-14 flex items-center justify-center bg-white/5 backdrop-blur-md hover:bg-[#70d1ff] text-white hover:text-[#001440] border border-white/10 transition-all rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next}
            className="w-14 h-14 flex items-center justify-center bg-white/5 backdrop-blur-md hover:bg-[#70d1ff] text-white hover:text-[#001440] border border-white/10 transition-all rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
