import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-20">
        <div className="col-span-1 md:col-span-1">
          <NavLink to="/" className="flex items-center gap-2 mb-6">
            <img 
              src="https://res.cloudinary.com/di7okmjsx/image/upload/v1778084269/emplogo_wrxa0g.png" 
              alt="Empathon Logo"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </NavLink>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            The leading Nigerian automobile platform providing transparent car sourcing, sales, and corporate fleet solutions. Truly professional.
          </p>
          <div className="flex gap-4">
            <Facebook className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
            <li><NavLink to="/showroom" className="hover:text-white transition-colors">Showroom</NavLink></li>
            <li><NavLink to="/corporate" className="hover:text-white transition-colors">Corporate Fleet</NavLink></li>
            <li><NavLink to="/dealers" className="hover:text-white transition-colors">Dealer Inventory</NavLink></li>
            <li><NavLink to="/pre-order" className="hover:text-white transition-colors">Pre-order System</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-8">Utility</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><NavLink to="/track" className="hover:text-white transition-colors">Order Tracking</NavLink></li>
            <li><NavLink to="/faqs" className="hover:text-white transition-colors">FAQs</NavLink></li>
            <li><NavLink to="/support" className="hover:text-white transition-colors">Support Center</NavLink></li>
            <li><NavLink to="/privacy" className="hover:text-white transition-colors">Privacy Policy</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-8">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 shrink-0 text-white" />
              <span>Victoria Island, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 shrink-0 text-white" />
              <span>+234 800 EMPATHON</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 shrink-0 text-white" />
              <span>concierge@empathon.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Empathon Autos. All rights reserved.
        </p>
        <div className="hidden md:flex gap-8 text-gray-500 text-xs uppercase tracking-widest font-bold">
          <span>Swiss Precision</span>
          <span>Bespoke Service</span>
        </div>
      </div>
    </footer>
  );
};
