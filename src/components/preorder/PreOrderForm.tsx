import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Car as CarIcon, DollarSign, Calendar, MessageSquare, CheckCircle, ShieldCheck } from 'lucide-react';
import { carService } from '../../services/carService';
import { cn } from '../../lib/utils';

export const PreOrderForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [useFinancing, setUseFinancing] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    const preOrder = {
      user_details: {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
      },
      preferences: {
        brand: formData.get('brand') as string,
        model: formData.get('model') as string,
        budget_range: formData.get('budget') as string,
        year_range: formData.get('year') as string,
        additional_notes: formData.get('notes') as string,
      }
    };

    try {
      await carService.submitPreOrder(preOrder);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-40 flex flex-col items-center justify-center text-center px-6 bg-black text-white">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center mb-12 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
        >
          <CheckCircle className="w-10 h-10" />
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">Request Logged</h2>
        <p className="text-white/40 max-w-sm leading-relaxed mb-12 font-medium">
          Your pre-order specification has been sent to our global sourcing desk. A specialist will be in touch within 4 working hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="luxury-outline-button"
        >
          Log Another Request
        </button>
      </div>
    );
  }

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="py-10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-6 italic underline underline-offset-8">Global Procurement</h4>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-10 leading-[0.9]">
            Exclusivity <br /> On Demand.
          </h2>
          <p className="text-white/50 text-xl leading-relaxed mb-16 max-w-lg">
            Our global sourcing network allows us to find specific vehicle trims, limited editions, and heavy-duty machinery.
          </p>

          <div className="space-y-12">
            <div className="flex gap-8 group">
              <div className="shrink-0 w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white transition-all">
                <CarIcon className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-black uppercase tracking-widest text-sm mb-3">Dossier Accuracy</h5>
                <p className="text-xs text-white/40 leading-relaxed font-medium uppercase tracking-tight">Specify color, trim, and technical packages with surgical precision.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="shrink-0 w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white transition-all">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-black uppercase tracking-widest text-sm mb-3">Escrow Protected</h5>
                <p className="text-xs text-white/40 leading-relaxed font-medium uppercase tracking-tight">Your deposit is held in a secure corporate escrow until inspection is passed.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 p-6 sm:p-12 lg:p-20 border border-white/20 relative overflow-hidden shadow-2xl shadow-white/5">
          <div className="absolute top-0 right-0 p-20 opacity-[0.01] pointer-events-none">
            <Send className="w-96 h-96 -rotate-12" />
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Primary Contact</label>
                  <input required name="name" type="text" placeholder="SHERIFFDEEN A." className="input-noir italic" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Direct Line</label>
                  <input required name="phone" type="text" placeholder="+234 ..." className="input-noir italic" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Vehicle Brand</label>
                  <input required name="brand" type="text" placeholder="E.G. ROLLS-ROYCE" className="input-noir placeholder:text-white/5" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Model / Package</label>
                  <input required name="model" type="text" placeholder="E.G. CULLINAN BLACK BADGE" className="input-noir placeholder:text-white/5" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Acquisition Notes</label>
                <textarea name="notes" rows={4} placeholder="SPECIFIC TRIM, INTERIOR COLOR, OR ARMORED REQUIREMENTS..." className="input-noir placeholder:text-white/5 resize-none h-32" />
              </div>

              {/* Financing Section */}
              <div className="pt-10 border-t border-white/5 space-y-8">
                <div className="flex items-center justify-between">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#70d1ff] italic">Financial Mode</h4>
                  <div className="flex bg-black p-1 border border-white/10 rounded-sm">
                    <button 
                      type="button"
                      onClick={() => setUseFinancing(false)}
                      className={cn("px-6 py-2 text-[8px] font-black uppercase tracking-widest transition-all", !useFinancing ? "bg-white text-black" : "text-white/30")}
                    >
                      Cash Outright
                    </button>
                    <button 
                      type="button"
                      onClick={() => setUseFinancing(true)}
                      className={cn("px-6 py-2 text-[8px] font-black uppercase tracking-widest transition-all", useFinancing ? "bg-[#70d1ff] text-[#001440]" : "text-white/30")}
                    >
                      Financier / Bank
                    </button>
                  </div>
                </div>

                {useFinancing && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                  >
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Preferred Institution</label>
                      <select required name="bank" className="input-noir italic bg-neutral-900 border-none w-full appearance-none">
                        <option value="">SELECT BANK...</option>
                        <option value="jaiz">JAIZ BANK (NON-INTEREST)</option>
                        <option value="firstbank">FIRST BANK OF NIGERIA</option>
                        <option value="gtb">GTCO (GTBANK)</option>
                        <option value="access">ACCESS BANK</option>
                        <option value="zenith">ZENITH BANK</option>
                        <option value="other">OTHER INSTITUTION</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Estimated Down Payment %</label>
                      <input name="downpayment" type="text" placeholder="E.G. 30%" className="input-noir italic" />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            <button 
              disabled={loading}
              type="submit" 
              className="luxury-button w-full flex items-center justify-center gap-4 py-8"
            >
              {loading ? 'Transmitting...' : (
                <>Submit Pre-Order Details <Send className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
