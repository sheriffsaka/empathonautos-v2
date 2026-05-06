import React from 'react';
import { motion } from 'motion/react';
import { Search, Loader2, Package, Check, Anchor, Truck, MapPin, AlertCircle } from 'lucide-react';
import { carService } from '../../services/carService';
import { Order, OrderStatus } from '../../types';
import { cn } from '../../lib/utils';

const statusIcons: Record<OrderStatus, React.ReactNode> = {
  'Request Received': <Package className="w-5 h-5" />,
  'Sourcing': <Search className="w-5 h-5" />,
  'Purchased': <Anchor className="w-5 h-5" />,
  'In Transit': <Truck className="w-5 h-5" />,
  'Arrived': <MapPin className="w-5 h-5" />,
  'Ready': <Check className="w-5 h-5" />
};

export const TrackingInterface = () => {
  const [orderId, setOrderId] = React.useState('');
  const [order, setOrder] = React.useState<Order | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [searched, setSearched] = React.useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) return;
    
    setLoading(true);
    setSearched(true);
    try {
      const data = await carService.getOrderByID(orderId);
      setOrder(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 bg-black min-h-[70vh] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-6 italic underline underline-offset-8">Active Manifests</h4>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-10">Supply Intelligence</h2>
          <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed font-medium">
            Enter your unique Order identity (EA-XXXXXX) to view the current status and location of your vehicle in our supply chain.
          </p>
        </div>

        <form onSubmit={handleSearch} className="mb-32 relative group">
          <input 
            type="text" 
            placeholder="ENTER ORDER IDENTITY (E.G. EA-102030)" 
            value={orderId}
            onChange={(e) => setOrderId(e.target.value.toUpperCase())}
            className="w-full bg-neutral-950 border border-white/5 p-10 text-2xl font-black tracking-widest placeholder:text-white/5 focus:outline-none focus:border-white/20 transition-all group-hover:shadow-[0_0_100px_rgba(255,255,255,0.02)] uppercase italic"
          />
          <button 
            type="submit"
            disabled={loading}
            className="absolute right-6 top-6 bottom-6 bg-white text-black px-12 flex items-center justify-center font-black uppercase tracking-widest text-[10px] hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Fetch Protocol'}
          </button>
        </form>

        {searched && !loading && !order && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center p-24 bg-neutral-950 border border-white/5 text-center"
          >
            <AlertCircle className="w-16 h-16 text-white/10 mb-8" />
            <h3 className="text-xl font-black uppercase tracking-widest mb-4 italic">Identity Invalid</h3>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Please verify your EA manifest ID or contact sourcing ops.</p>
          </motion.div>
        )}

        {order && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/5 pb-16">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4">Current Vector</p>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">{order.status}</h3>
              </div>
              <div className="text-left md:text-right">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4">Manifest ID</p>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white/10">{order.id}</h3>
              </div>
            </div>

            <div className="relative pt-12">
              <div className="absolute left-[23px] top-12 bottom-12 w-[1px] bg-white/10" />
              
              <div className="space-y-16">
                {order.timeline.map((event, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-12 items-start group"
                  >
                    <div className={cn(
                      "relative z-10 w-12 h-12 flex items-center justify-center bg-black border-2 transition-all duration-500",
                      idx === order.timeline.length - 1 ? 'border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'border-white/10 text-white/20 group-hover:border-white/30'
                    )}>
                      {statusIcons[event.status]}
                    </div>
                    <div className="pt-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-3 italic">{event.timestamp}</p>
                      <h4 className="font-black text-2xl uppercase tracking-tighter mb-4 italic transition-colors group-hover:text-white">{event.status}</h4>
                      <p className="text-sm text-white/40 leading-relaxed max-w-xl font-medium">{event.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900 border border-white/10 p-12 mt-24 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex flex-col gap-2">
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Estimated Final Arrival</p>
                 <p className="text-2xl font-black italic uppercase tracking-tighter">May 24, 2024</p>
              </div>
              <button className="luxury-button">
                Manifest Audit Report
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
