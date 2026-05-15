import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, MapPin, Award, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1549923155-46624a6dd241?q=80&w=2000&auto=format&fit=crop" 
            alt="Office" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#70d1ff] mb-6 italic border-l-2 border-[#70d1ff] pl-4">The Empathon Story</h4>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] italic mb-8">
            Engineered <br /> for Excellence.
          </h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 italic">Our Philosophy</h2>
            <p className="text-white/60 text-xl leading-relaxed mb-12">
              Founded on the principles of transparency and technical precision, Empathon Autos has redefined the bridge between global automotive excellence and the Nigerian market.
            </p>
            <p className="text-white/40 leading-relaxed italic">
              "We don't just sell cars; we deliver verified assets that represent a legacy of quality and a commitment to our clients' success."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-950 p-10 border border-white/5">
              <Shield className="w-8 h-8 text-[#70d1ff] mb-6" />
              <h3 className="text-xs font-black uppercase tracking-widest mb-4">Verified Provenance</h3>
              <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-wider">Every unit undergoes a 200-point inspection.</p>
            </div>
            <div className="bg-neutral-950 p-10 border border-white/5">
              <Zap className="w-8 h-8 text-[#70d1ff] mb-6" />
              <h3 className="text-xs font-black uppercase tracking-widest mb-4">Swift Logistics</h3>
              <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-wider">Proprietary chains for rapid delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-neutral-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl font-black italic mb-2">1.2K+</p>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">Units Delivered</p>
            </div>
            <div>
              <p className="text-5xl font-black italic mb-2">98%</p>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">Client Retention</p>
            </div>
            <div>
              <p className="text-5xl font-black italic mb-2">15</p>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">Global Partners</p>
            </div>
            <div>
              <p className="text-5xl font-black italic mb-2">24/7</p>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">Concierge Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8 italic">Collective Impact</h4>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-20 italic">
            Building the <br /> Future of Mobility.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Target className="w-6 h-6 mx-auto text-[#70d1ff]" />
              <p className="text-[10px] font-black uppercase tracking-widest">Precision</p>
            </div>
            <div className="space-y-4">
              <Users className="w-6 h-6 mx-auto text-[#70d1ff]" />
              <p className="text-[10px] font-black uppercase tracking-widest">Integrity</p>
            </div>
            <div className="space-y-4">
              <Award className="w-6 h-6 mx-auto text-[#70d1ff]" />
              <p className="text-[10px] font-black uppercase tracking-widest">Mastery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
