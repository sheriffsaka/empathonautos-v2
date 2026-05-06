import React from 'react';
import { motion } from 'motion/react';
import { Filter, Search, ChevronDown, Check } from 'lucide-react';
import { Car } from '../../types';
import { carService } from '../../services/carService';
import { formatPrice, cn } from '../../lib/utils';

export const IndividualShowroom = () => {
  const [cars, setCars] = React.useState<Car[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [activeBrand, setActiveBrand] = React.useState<string>('All');
  const [activeType, setActiveType] = React.useState<string>('All');
  const [maxPrice, setMaxPrice] = React.useState<number>(100000000);

  React.useEffect(() => {
    carService.getCars().then(data => {
      setCars(data);
      setLoading(false);
    });
  }, []);

  const brands = ['All', ...new Set(cars.map(c => c.brand))];
  const types = ['All', ...new Set(cars.map(c => c.type))];

  const filteredCars = cars.filter(c => 
    (activeBrand === 'All' || c.brand === activeBrand) &&
    (activeType === 'All' || c.type === activeType) &&
    (c.price <= maxPrice)
  );

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 shrink-0">
            <div className="sticky top-32">
              <div className="flex items-center gap-2 mb-10 pb-4 border-b border-white/10">
                <Filter className="w-4 h-4 text-white/40" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Filter Discovery</span>
              </div>

              <div className="mb-12">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6 italic">Price Threshold</h4>
                <div className="space-y-4">
                  <input 
                    type="range" 
                    min="10000000" 
                    max="100000000" 
                    step="5000000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                    className="w-full accent-white cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40">
                    <span>10M</span>
                    <span className="text-white">{formatPrice(maxPrice)}</span>
                    <span>100M</span>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6 italic">Brand Selection</h4>
                <div className="flex flex-col gap-3">
                  {brands.map(brand => (
                    <button 
                      key={brand}
                      onClick={() => setActiveBrand(brand)}
                      className={cn(
                        "text-sm font-medium transition-all text-left flex items-center justify-between group",
                        activeBrand === brand ? 'text-white' : 'text-white/30 hover:text-white'
                      )}
                    >
                      <span className="tracking-tight uppercase">{brand}</span>
                      {activeBrand === brand && <Check className="w-3 h-3" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6 italic">Body Type</h4>
                <div className="flex flex-col gap-3">
                  {types.map(type => (
                    <button 
                      key={type}
                      onClick={() => setActiveType(type)}
                      className={cn(
                        "text-sm font-medium transition-all text-left flex items-center justify-between group",
                        activeType === type ? 'text-white' : 'text-white/30 hover:text-white'
                      )}
                    >
                      <span className="tracking-tight uppercase">{type}</span>
                      {activeType === type && <Check className="w-3 h-3" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                Inventory Units: <span className="text-white">{filteredCars.length}</span>
              </p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border border-white/10 px-6 py-3 hover:bg-white hover:text-black transition-all active:scale-95">
                  Sort By: Priority <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-20">
              {filteredCars.map((car, idx) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (idx % 2) * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="aspect-[16/10] bg-neutral-900 border border-white/5 overflow-hidden mb-8 relative">
                    <img 
                      src={car.images[0]} 
                      alt={car.name} 
                      className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                    />
                    {car.is_verified && (
                      <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-2 py-1 text-[7px] font-black uppercase tracking-widest border border-white/10 text-white">
                        Verified
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">{car.name}</h3>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">{car.brand} <span className="mx-1">•</span> {car.condition}</p>
                      </div>
                      <p className="text-xl font-bold italic">{formatPrice(car.price)}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8 border-y border-white/5 py-8">
                      <div className="text-[9px] font-black uppercase tracking-widest text-white/20 italic">
                        <span className="block text-white mb-2 font-black text-xs not-italic">{car.specifications.year}</span>
                        Model Yr
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-white/20 italic">
                        <span className="block text-white mb-2 font-black text-xs not-italic">{car.transmission}</span>
                        Shift
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-white/20 italic">
                        <span className="block text-white mb-2 font-black text-xs not-italic">{car.specifications.fuelType}</span>
                        Engine
                      </div>
                    </div>
                    <button className="luxury-outline-button w-full mt-10">
                      View Dossier
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
