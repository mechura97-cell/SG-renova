
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-zinc-950/50 backdrop-brightness-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 pb-40 md:pb-0">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tighter">
          Rekonstrukce <br />
          <span className="text-blue-500">bez kompromisů</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-100 mb-10 font-medium max-w-2xl mx-auto opacity-90">
          SG RENOVA s.r.o. přináší spojení francouzské elegance a české preciznosti. Realizujeme vaše sny o moderním bydlení.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#reference"
            className="bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-800 transition-all hover:scale-105 shadow-xl shadow-blue-700/30"
          >
            Naše projekty
          </a>
          <a
            href="#kontakt"
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-zinc-950 transition-all"
          >
            Konzultace zdarma
          </a>
        </div>
      </div>

      {/* Stats overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950/90 to-transparent py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="text-center border-r border-white/10">
            <div className="text-2xl md:text-4xl font-extrabold text-white mb-1">12+</div>
            <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-black">Let praxe</div>
          </div>
          <div className="text-center md:border-r border-white/10">
            <div className="text-2xl md:text-4xl font-extrabold text-white mb-1">50+</div>
            <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-black">Projektů</div>
          </div>
          <div className="text-center border-r md:border-r border-white/10 pt-4 md:pt-0">
            <div className="text-2xl md:text-4xl font-extrabold text-white mb-1">100%</div>
            <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-black">Kvalita</div>
          </div>
          <div className="text-center pt-4 md:pt-0">
            <div className="text-2xl md:text-4xl font-extrabold text-white mb-1">2</div>
            <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-black">Zakladatelé</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
