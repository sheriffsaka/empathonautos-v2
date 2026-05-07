import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShieldCheck, Truck, Globe } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      title: "Performance Excellence",
      subtitle: "Porsche 911 GT3"
    },
    {
      image: "https://res.cloudinary.com/di7okmjsx/image/upload/v1778084831/G63_AMG_wo0tqd.jpg",
      title: "Luxury Unbound",
      subtitle: "Cullinan Black Badge"
    },
    {
      image: "https://res.cloudinary.com/di7okmjsx/image/upload/v1778084831/Cullinan_Black_Badge_xzint9.jpg",
      title: "Tactical Presence",
      subtitle: "G63 AMG Stealth"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-black text-white">
      {/* Background visual element */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 skew-x-[-6deg] translate-x-20 z-0 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">The Gold Standard in Nigeria</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-[calc(-0.05em)] mb-8 leading-[0.85] uppercase italic">
            Find the <br /> Right Car <br />
            <span className="text-white/10 not-italic">—</span> For You.
          </h1>
          
          <p className="text-xl text-white/60 max-w-lg mb-12 leading-relaxed">
            Buy, source, or bulk-order premium vehicles with complete transparency. From individual dreams to corporate fleets.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <NavLink 
              to="/showroom" 
              className="luxury-button"
            >
              Browse Cars
            </NavLink>
            <NavLink 
              to="/corporate" 
              className="luxury-outline-button"
            >
              Fleet Solutions
            </NavLink>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-neutral-900 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="grayscale" />
                </div>
              ))}
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30">
              Trusted by <span className="text-white">12,000+</span> Buyers
            </p>
          </div>
        </motion.div>
        
        <div className="relative hidden lg:block h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={slides[currentSlide].image}
                alt={slides[currentSlide].subtitle}
                className="w-full h-full object-cover grayscale-0 brightness-110 shadow-2xl"
              />
              <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-6 py-4 border border-white/10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">{slides[currentSlide].title}</p>
                <p className="text-sm font-black italic uppercase tracking-tighter">{slides[currentSlide].subtitle}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-10 -left-10 bg-black p-8 border border-white/10 shadow-2xl max-w-xs z-20">
            <p className="font-bold italic text-2xl mb-2 text-white">"Highest standards of verification."</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Empathon Autos. — Founder</p>
          </div>

          <div className="absolute -bottom-8 right-0 flex gap-2">
            {slides.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1 transition-all duration-500 ${currentSlide === i ? 'w-12 bg-white' : 'w-4 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const TrustStrip = () => {
  const items = [
    { icon: <CheckCircle2 className="w-5 h-5" />, text: 'Verified Vehicles' },
    { icon: <ShieldCheck className="w-5 h-5" />, text: 'Transparent Sourcing' },
    { icon: <Truck className="w-5 h-5" />, text: 'End-to-End Support' },
    { icon: <Globe className="w-5 h-5" />, text: 'Global Network' },
  ];

  return (
    <div className="bg-neutral-950 text-white py-10 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-8 md:gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-3 group text-center md:text-left">
              <div className="text-white/30 group-hover:text-white transition-colors">{item.icon}</div>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
