import { PreOrderForm } from '../components/preorder/PreOrderForm';

const PreOrder = () => {
  return (
    <div className="bg-black text-white">
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 border-b border-white/5">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-4 italic">Bespoke Acquisition</h4>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Vehicle <br /> Sourcing</h1>
      </div>
      <PreOrderForm />
    </div>
  );
};

export default PreOrder;
