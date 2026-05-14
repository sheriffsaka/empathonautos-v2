import React from 'react';
import { motion } from 'motion/react';
import { Building2, Landmark, Users, Briefcase, Zap, ArrowUpRight, Search } from 'lucide-react';
import { carService } from '../../services/carService';
import { Sector } from '../../types';
import { cn } from '../../lib/utils';
import { CarDetailModal } from '../common/CarDetailModal';

const iconMap: Record<string, React.ReactNode> = {
  'Banking & Finance': <Landmark className="w-6 h-6" />,
  'SMEs': <Briefcase className="w-6 h-6" />,
  'Agriculture': <Zap className="w-6 h-6" />,
  'Engineering': <Building2 className="w-6 h-6" />
};

export const CorporateModule = () => {
  const [sectors, setSectors] = React.useState<Sector[]>([]);
  const [activeSector, setActiveSector] = React.useState<string | null>(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    carService.getSectors().then(data => {
      setSectors(data);
      if (data.length > 0) setActiveSector(data[0].id);
    });
  }, []);

  const filteredSectors = sectors.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentSector = sectors.find(s => s.id === activeSector);

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-12 mb-12">
             <div className="relative max-w-2xl">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input 
                  type="text" 
                  placeholder="SEARCH SECTOR SOLUTIONS..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/10 pl-16 pr-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] focus:outline-none focus:border-white transition-all placeholder:text-white/10"
                />
             </div>
          </div>
          
          <div className="lg:col-span-5">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-4 italic">Enterprise Solutions</h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase mb-12 leading-tight">
              Optimized Fleet Management for your Sector
            </h2>
            
            <div className="flex flex-col gap-4">
              {filteredSectors.map(sector => (
                <button
                  key={sector.id}
                  onClick={() => setActiveSector(sector.id)}
                  className={cn(
                    "p-8 text-left transition-all border group relative",
                    activeSector === sector.id 
                      ? 'bg-neutral-900 border-white/20 text-white' 
                      : 'bg-transparent border-white/5 hover:border-white/20'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "p-3",
                        activeSector === sector.id ? 'bg-white text-black' : 'bg-white/5 group-hover:bg-white/10'
                      )}>
                        {iconMap[sector.name] || <Users className="w-6 h-6" />}
                      </div>
                      <span className="font-bold uppercase tracking-widest text-sm">{sector.name}</span>
                    </div>
                    {activeSector === sector.id && <ArrowUpRight className="w-5 h-5 text-white/40" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              key={activeSector}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-neutral-950 p-6 sm:p-12 h-full flex flex-col border border-white/5"
            >
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 italic">{currentSector?.name} Benefits</h3>
              <p className="text-white/50 text-lg leading-relaxed mb-12">
                {currentSector?.description} Our fleet solutions are custom-built to ensure maximum uptime and operational efficiency for your organization.
              </p>

              <div className="mb-12">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6 italic">Recommended Archetypes</h4>
                <div className="flex flex-wrap gap-4">
                  {currentSector?.recommendedTypes.map(type => (
                    <div key={type} className="px-6 py-4 bg-black border border-white/10 font-bold uppercase tracking-widest text-[10px]">
                      {type} Units
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-black border border-white/5">
                  <p className="text-[9px] font-extrabold uppercase tracking-widest text-white/30 mb-2">Benefit 01</p>
                  <h5 className="font-bold text-sm uppercase mb-2">Tax Efficiency</h5>
                  <p className="text-xs text-white/40 leading-relaxed">Full VAT deductibility and structured financing routes available.</p>
                </div>
                <div className="p-8 bg-black border border-white/5">
                  <p className="text-[9px] font-extrabold uppercase tracking-widest text-white/30 mb-2">Benefit 02</p>
                  <h5 className="font-bold text-sm uppercase mb-2">Priority Support</h5>
                  <p className="text-xs text-white/40 leading-relaxed">Dedicated account manager for all maintenance and tracking.</p>
                </div>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="luxury-button w-full mt-12"
              >
                Request Fleet Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <CarDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        car={{
          title: `${currentSector?.name} Fleet`,
          name: `${currentSector?.name} Solutions`,
          brand: 'Corporate Division',
          image: "https://images.unsplash.com/photo-1549923155-46624a6dd241?q=80&w=2000&auto=format&fit=crop", // Business image
          price: 'Bespoke Quote',
          shipping_status: 'Consultation Required'
        }} 
      />
    </section>
  );
};

