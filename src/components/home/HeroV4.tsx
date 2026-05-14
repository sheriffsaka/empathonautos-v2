import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1614200187524-dc4b84210ee1?q=80&w=2000&auto=format&fit=crop",
    title: "Clinical Perfection",
    subtitle: "The White Series",
    description: "A minimalist approach to automotive luxury. Pure lines, verified provenance."
  },
  {
    image: "https://images.unsplash.com/photo-1555652736-e92021d28a10?q=80&w=2000&auto=format&fit=crop",
    title: "Minimalist Performance",
    subtitle: "Urban Sophistication",
    description: "Designed for the modern elite. Transparency in every transaction, clarity in every detail."
  }
];

export const HeroV4 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-white">
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 lg:px-20 z-10 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-black"></span>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-black/40">
                  {slides[current].title}
                </span>
              </div>
              <h1 className="text-6xl sm:text-8xl font-black tracking-tighter uppercase text-black leading-[0.9] mb-10">
                {slides[current].subtitle}
              </h1>
              <p className="text-black/60 text-xl font-medium leading-relaxed mb-12 border-l-4 border-black pl-8">
                {slides[current].description}
              </p>
              <div className="flex items-center gap-12">
                <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-black">
                  Discover Now <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex gap-3">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-500",
                        current === i ? "bg-black scale-150" : "bg-black/10"
                      )}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="relative hidden lg:block overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-cover grayscale brightness-110"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-white/5" />
        </div>
      </div>
      
      {/* Mobile background */}
      <div className="absolute inset-0 lg:hidden opacity-10">
        <img 
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  );
};
