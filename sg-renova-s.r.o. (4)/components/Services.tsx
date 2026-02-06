
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-black uppercase tracking-[0.2em] text-xs mb-2 block">Co nabízíme</span>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tighter">Komplexní řešení</h2>
          <p className="mt-4 text-xl text-zinc-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Od drobných úprav po kompletní rekonstrukce na klíč. Zajistíme všechna řemesla pod hlavičkou SG RENOVA s.r.o.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all hover:-translate-y-1 group border border-zinc-100"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-3 tracking-tight">{service.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
