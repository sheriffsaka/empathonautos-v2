import { DealerModule } from '../components/showroom/DealerModule';

const Dealers = () => {
  return (
    <div className="bg-black text-white">
      <div className="relative pt-48 pb-32 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-0 opacity-50 brightness-75 transition-all duration-1000"
            alt="Dealers Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-6 italic underline underline-offset-8">B2B Distribution</h4>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Dealer <br /> Portal</h1>
        </div>
      </div>
      <DealerModule />
    </div>
  );
};

export default Dealers;
