import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Car as CarIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Showroom', href: '/showroom' },
    { name: 'Corporate', href: '/corporate' },
    { name: 'Dealers', href: '/dealers' },
    { name: 'Pre-Order', href: '/pre-order' },
    { name: 'Track Order', href: '/track' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled 
          ? 'bg-black/80 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <CarIcon className="w-8 h-8 text-white" />
          <div className="flex flex-col gap-0 leading-[0.8]">
            <span className="text-xl font-black tracking-tighter uppercase text-white italic">Empathon</span>
            <span className="text-[8px] font-black tracking-[0.4em] uppercase text-white/30 ml-0.5">Autos</span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  'text-[10px] font-black tracking-[0.2em] uppercase transition-all hover:text-white',
                  isActive ? 'text-white' : 'text-white/40'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/pre-order" className="luxury-button">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold tracking-tight uppercase text-white"
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/pre-order" onClick={() => setIsOpen(false)} className="luxury-button w-full py-6 text-center">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
