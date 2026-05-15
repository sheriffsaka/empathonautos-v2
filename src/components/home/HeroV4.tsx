import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
  },
  {
    image: "https://images.unsplash.com/photo-1549399542-7db3f01f05ad?q=80&w=2000&auto=format&fit=crop",
    title: "Pure Aesthetics",
    subtitle: "Monochromatic Drift",
    description: "Discover the art of the monochrome. Vehicles selected for their structural beauty and presence."
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

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-white">
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 lg:px-24 z-10 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-6 mb-12">
                <span className="w-16 h-[2px] bg-black"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40">
                  {slides[current].title}
                </span>
              </div>
              <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase text-black leading-[0.85] mb-12 italic">
                {slides[current].subtitle}
              </h1>
              <p className="text-black/60 text-xl font-medium leading-relaxed mb-16 border-l-8 border-black pl-10">
                {slides[current].description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12">
                <button className="group flex items-center gap-6 text-[10px] font-black uppercase tracking-widest bg-black text-white px-10 py-5 hover:bg-neutral-800 transition-all">
                  Discover Now <MoveRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                </button>
                
                <div className="flex items-center gap-6">
                  <div className="flex gap-2">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={cn(
                          "w-3 h-3 rounded-full transition-all duration-500",
                          current === i ? "bg-black scale-125 shadow-lg" : "bg-black/10"
                        )}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 ml-4">
                    <button onClick={prev} className="p-2 hover:bg-neutral-100 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                    <button onClick={next} className="p-2 hover:bg-neutral-100 transition-colors"><ChevronRight className="w-5 h-5" /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="relative hidden lg:block overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ scale: 1.2, opacity: 0, x: 100 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 1.1, opacity: 0, x: -50 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-cover grayscale brightness-[1.05]"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        </div>
      </div>
      
      {/* Mobile background overlay */}
      <div className="absolute inset-0 lg:hidden pointer-events-none">
        <div className="absolute inset-0 bg-white/90" />
        <img 
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-full object-cover grayscale opacity-10"
        />
      </div>
    </div>
  );
};
