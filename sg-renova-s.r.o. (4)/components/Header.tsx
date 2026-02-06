
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Úvod', href: '#uvod' },
    { name: 'Služby', href: '#sluzby' },
    { name: 'O nás', href: '#o-nas' },
    { name: 'Reference', href: '#reference' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-black tracking-tighter text-zinc-950 uppercase">
              SG <span className="text-blue-700">RENOVA</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-zinc-600 hover:text-blue-700 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#kontakt"
              className="border-2 border-blue-700 text-blue-700 px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-700 hover:text-white transition-all active:scale-95"
            >
              Nezávazná poptávka
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-950 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-t transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0 shadow-xl' : '-translate-y-full'}`}>
        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-zinc-700 hover:text-blue-700"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setIsMobileMenuOpen(false)}
            className="border-2 border-blue-700 text-blue-700 text-center px-6 py-3 rounded-xl font-bold hover:bg-blue-700 hover:text-white transition-colors"
          >
            Nezávazná poptávka
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
