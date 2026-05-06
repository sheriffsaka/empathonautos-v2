import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import { Car } from '../../types';
import { carService } from '../../services/carService';
import { Link } from 'react-router-dom';

export const FeaturedCars = () => {
  const [cars, setCars] = React.useState<Car[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    carService.getFeaturedCars().then(data => {
      setCars(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-32 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-4 italic">Curated Selection</h4>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase italic leading-[0.9]">Featured <br /> Inventory</h2>
          </div>
          <Link to="/showroom" className="luxury-outline-button">
            View All Showroom <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cars.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-neutral-950 border border-white/5"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={car.images[0]} 
                  alt={car.name} 
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">{car.brand}</span>
                    <span className="w-1 h-1 bg-white/10 rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">{car.condition}</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-3 uppercase italic">{car.name}</h3>
                  <div className="flex items-center gap-4 text-[10px] font-black text-white/20 uppercase tracking-[0.2em] italic">
                    <span className="not-italic text-white/40">{car.specifications.year}</span>
                    <span>{car.transmission}</span>
                    <span className="text-white/40">{car.specifications.engineSize || 'Verified'}</span>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-2 italic">Asking Price</p>
                  <p className="text-3xl font-black italic tracking-tighter">{formatPrice(car.price)}</p>
                </div>
              </div>
              
              {car.is_verified && (
                <div className="absolute top-6 left-6 bg-black px-3 py-1 text-[8px] font-black uppercase tracking-[0.3em] flex items-center gap-2 border border-white/10">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Verified Unit
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
