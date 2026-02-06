
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="text-3xl font-black tracking-tighter uppercase">
              SG <span className="text-blue-700">RENOVA</span>
            </a>
            <p className="text-zinc-500 leading-relaxed font-medium">
              Prémiové rekonstrukce pro náročné. Spojujeme mezinárodní zkušenosti s moderní vizí bydlení.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black mb-8 text-zinc-500 uppercase tracking-[0.2em]">Kontakt</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-blue-600 group-hover:bg-blue-700 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-zinc-300 font-bold">+420 777 123 456</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-blue-600 group-hover:bg-blue-700 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-zinc-300 font-bold">info@sg-renova.cz</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-blue-600">
                  <MapPin size={18} />
                </div>
                <span className="text-zinc-300 font-bold">Praha & Střední Čechy</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black mb-8 text-zinc-500 uppercase tracking-[0.2em]">Navigace</h4>
            <ul className="space-y-4">
              {['Úvod', 'Služby', 'O nás', 'Reference'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-zinc-500 hover:text-white transition-colors font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black mb-8 text-zinc-500 uppercase tracking-[0.2em]">Krédo</h4>
            <p className="text-zinc-400 italic font-medium leading-relaxed">
              "Kvalita není náhoda, je to výsledek vysokého záměru a inteligentního provedení."
            </p>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-widest">
          <p>© {new Date().getFullYear()} SG RENOVA s.r.o. — Rekonstrukce s vizí.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">GDPR</a>
            <a href="#" className="hover:text-white transition-colors">Podmínky</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
