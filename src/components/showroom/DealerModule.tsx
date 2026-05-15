import React from 'react';
import { motion } from 'motion/react';
import { Package, Truck, ArrowRight, BarChart3, ShieldCheck, Search } from 'lucide-react';
import { carService } from '../../services/carService';
import { DealerInventory } from '../../types';
import { cn } from '../../lib/utils';
import { CarDetailModal } from '../common/CarDetailModal';

export const DealerModule = () => {
  const [inventory, setInventory] = React.useState<DealerInventory[]>([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    carService.getDealerInventory().then(setInventory);
  }, []);

  const filteredInventory = inventory.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openDossier = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20 pb-12 border-b border-white/5">
          <div className="max-w-2xl">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#70d1ff] mb-6 italic border-l-2 border-[#70d1ff] pl-4">Liquidity Solutions</h4>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-10 leading-[0.9]">
              Dealer Deals <br /> & Liquidations.
            </h2>
            <div className="bg-neutral-900 p-8 border border-white/10 space-y-6">
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                Empathon Autos provides a high-velocity marketplace for individual and corporate sellers. Whether you're looking to upgrade or require an immediate <span className="text-white font-black italic">Distress Sale</span>, our network ensures the fastest turnaround in the country.
              </p>
              <div className="flex items-center gap-6">
                 <button className="text-[9px] font-black uppercase tracking-widest bg-white text-black px-8 py-4 flex items-center gap-3">Sell Your Vehicle <ArrowRight className="w-4 h-4" /></button>
                 <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20 italic">Global Audience Access</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-12 w-full lg:w-auto">
            <div className="flex gap-4">
              <div className="text-center px-12 border-r border-white/10">
                <p className="text-4xl font-black italic">500+</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-white/20 mt-2">Cars Supplied</p>
              </div>
              <div className="text-center px-12">
                <p className="text-4xl font-black italic">45</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-white/20 mt-2">Partner Dealers</p>
              </div>
            </div>
            <div className="relative w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input 
                type="text" 
                placeholder="SEARCH BULK LOTS..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-neutral-950 border border-white/10 pl-16 pr-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] focus:outline-none focus:border-white transition-all placeholder:text-white/10"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {filteredInventory.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-neutral-950 overflow-hidden flex flex-col md:flex-row h-full border border-white/5 hover:border-white/20 transition-all duration-700 cursor-pointer"
              onClick={() => openDossier(item)}
            >
              <div className="w-full md:w-1/2 overflow-hidden">
                <img 
                   src={item.images[0]} 
                   alt={item.title} 
                   className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-8">
                  <div className={cn(
                    "px-3 py-1 text-[8px] font-black uppercase tracking-widest border",
                    item.shipping_status === 'Available' ? 'border-green-500/20 text-green-500' : 'border-orange-500/20 text-orange-500'
                  )}>
                    {item.shipping_status}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/20">{item.brand} Inventory</span>
                </div>
                
                <h3 className="text-3xl font-black tracking-tight uppercase mb-6 leading-tight group-hover:italic transition-all">{item.title}</h3>
                <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-12">Bulk Manifest: <span className="text-white italic">{item.quantity} Units</span></p>
                
                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-8">
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-2">Lot Appraisal</p>
                    <p className="font-black text-2xl uppercase tracking-tighter">{item.price_range}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-white group-hover:translate-x-3 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 pt-24">
          <div className="flex flex-col gap-8 group">
            <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white transition-all">
               <BarChart3 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black uppercase tracking-tight italic">Market Intel</h4>
            <p className="text-white/40 text-sm leading-relaxed font-medium">Historical auction data and resale value predictions for the local Nigerian market.</p>
          </div>
          
          <div className="flex flex-col gap-8 group">
            <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white transition-all">
               <Truck className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black uppercase tracking-tight italic">Logistics Hub</h4>
            <p className="text-white/40 text-sm leading-relaxed font-medium">Save on logistics by shipping in shared containers with our large-scale volume.</p>
          </div>
          
          <div className="flex flex-col gap-8 group">
            <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white transition-all">
               <ShieldCheck className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black uppercase tracking-tight italic">Secure Clearing</h4>
            <p className="text-white/40 text-sm leading-relaxed font-medium">Escrow protected payments for international procurement and clearing.</p>
          </div>
        </div>
      </div>

      <CarDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        car={{
          ...selectedItem,
          price: selectedItem?.price_range
        }} 
      />
    </section>
  );
};

