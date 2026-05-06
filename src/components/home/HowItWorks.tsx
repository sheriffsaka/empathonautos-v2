import React from 'react';
import { motion } from 'motion/react';
import { Search, ShieldCheck, ClipboardCheck, Truck } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Consultation',
    description: 'Tell us your needs, budget, and purpose. We provide expert advice on the best vehicle choices.'
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: 'Sourcing & Audit',
    description: 'We source locally or internationally, performing a rigorous 150-point inspection on every unit.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Verification',
    description: 'Everything is verified—from VIN history to mechanical health and customs documentation.'
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Secure Delivery',
    description: 'Your vehicle is delivered to your doorstep, fully cleared and ready for the road.'
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-4 italic">Our Methodology</h4>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">How We Build Trust</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group pt-12"
            >
              <div className="absolute top-0 left-0 text-7xl font-bold text-white/5 group-hover:text-white/10 transition-colors z-0">
                0{idx + 1}
              </div>
              <div className="relative z-10">
                <div className="mb-6 text-white transform group-hover:scale-110 transition-transform origin-left">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
