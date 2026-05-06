import { CorporateModule } from '../components/showroom/CorporateModule';
import { IndividualShowroom } from '../components/showroom/IndividualShowroom';

const Corporate = () => {
  return (
    <div className="bg-black text-white">
      <div className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-0 opacity-60 brightness-75 transition-all duration-1000"
            alt="Corporate Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-6 italic underline underline-offset-8">Enterprise Tier</h4>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Fleet <br /> Solutions</h1>
        </div>
      </div>
      <CorporateModule />
      
      <div className="pt-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-4 italic">Fleet Gallery</h4>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-12">Available Assets</h2>
        </div>
        <IndividualShowroom />
      </div>
    </div>
  );
};

export default Corporate;
