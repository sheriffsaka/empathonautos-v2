import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, User, Briefcase, Store } from 'lucide-react';
import { cn } from '../../lib/utils';

const audiences = [
  {
    id: 'individuals',
    title: 'Individual Buyers',
    subtitle: 'Bespoke Luxury & Daily Performance',
    icon: <User className="w-5 h-5" />,
    description: 'Precision-sourced vehicles for personal distinction and uncompromising reliability.',
    link: '/showroom',
    cars: [
      {
        name: 'Mercedes-Benz G63 AMG',
        image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=1000',
        year: '2024',
        status: 'In Showroom'
      },
      {
        name: 'Land Rover Defender 110',
        image: 'https://res.cloudinary.com/di7okmjsx/image/upload/v1778092867/Land_Rover_Defender_110_izjf7m.jpg',
        year: '2023',
        status: 'Available'
      },
      {
        name: 'Lexus LX 600 Ultra Luxury',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000',
        year: '2024',
        status: 'Verified'
      }
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate Entities',
    subtitle: 'Logistics Efficiency & Fleet Power',
    icon: <Briefcase className="w-5 h-5" />,
    description: 'Scalable fleet solutions, executive shuttles, and duty-ready logistics vehicles.',
    link: '/corporate',
    cars: [
      {
        name: 'Toyota Coaster Executive',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000',
        year: '2023',
        status: 'Fleet Ready'
      },
      {
        name: 'Ford F-150 Raptor',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1000',
        year: '2024',
        status: 'Industrial'
      },
      {
        name: 'Mercedes-Benz Sprinter',
        image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=1000',
        year: '2022',
        status: 'Logistics'
      }
    ]
  },
  {
    id: 'dealers',
    title: 'Licensed Dealers',
    subtitle: 'Bulk Inventory & Sourcing Nodes',
    icon: <Store className="w-5 h-5" />,
    description: 'Wholesale acquisition pipelines for regional showroom expansion and bulk orders.',
    link: '/dealers',
    cars: [
      {
        name: 'Luxury SUV Batch (5 Units)',
        image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=1000',
        year: 'Mixed 2022-24',
        status: 'Bulk Export'
      },
      {
        name: 'Sedan Liquidation Lot',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000',
        year: 'Mixed 2021-23',
        status: 'Auction Base'
      },
      {
        name: 'Electric Fleet Inventory',
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000',
        year: '2024',
        status: 'New Node'
      }
    ]
  }
];

export const AudienceShowcase = () => {
  const [activeTab, setActiveTab] = useState(audiences[0].id);

  const currentAudience = audiences.find(a => a.id === activeTab)!;

  return (
    <section className="py-40 bg-black text-white border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-xl">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-6 italic underline underline-offset-8">Target Sectors</h4>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] italic mb-8">
              Engineered <br /> for Impact.
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-4 bg-neutral-950 p-2 border border-white/5">
            {audiences.map((audience) => (
              <button
                key={audience.id}
                onClick={() => setActiveTab(audience.id)}
                className={cn(
                  "px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-3",
                  activeTab === audience.id 
                    ? "bg-white text-black" 
                    : "text-white/40 hover:text-white"
                )}
              >
                {audience.icon}
                {audience.title}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16"
          >
            <div className="lg:col-span-4 flex flex-col justify-center">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/20 mb-4 block italic">
                {currentAudience.subtitle}
              </span>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-tight italic">
                {currentAudience.title}
              </h3>
              <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-sm">
                {currentAudience.description}
              </p>
              <NavLink 
                to={currentAudience.link} 
                className="luxury-button self-start group"
              >
                Explore Solution <ArrowRight className="inline-block ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </NavLink>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentAudience.cars.map((car, idx) => (
                  <motion.div
                    key={car.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    className="group"
                  >
                    <div className="aspect-[3/4] bg-neutral-900 border border-white/5 overflow-hidden mb-6 relative">
                      <img 
                        src={car.image} 
                        alt={car.name} 
                        className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                      />
                      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-[8px] font-black uppercase tracking-widest italic">
                        {car.status}
                      </div>
                    </div>
                    <h4 className="text-sm font-black uppercase tracking-widest mb-1 italic group-hover:text-white transition-colors">
                      {car.name}
                    </h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/20 italic">
                      Model {car.year}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
