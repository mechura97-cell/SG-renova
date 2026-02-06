
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-black uppercase tracking-[0.2em] text-xs mb-2 block">Náš příběh</span>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tighter">Bratři v řemeslu</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541944743827-e04bb645d974?auto=format&fit=crop&q=80&w=800" 
                alt="Construction team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-3xl max-w-xs shadow-2xl border border-white/50">
              <p className="text-zinc-800 italic font-medium text-lg leading-relaxed">
                "Věříme, že domov je místo, kde by se design měl potkávat s funkčností bez jakýchkoliv kompromisů."
              </p>
              <p className="mt-4 font-black text-zinc-950 uppercase tracking-widest text-xs">— Šimon & Josef Grůzovi</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-black text-zinc-950 mb-4 flex items-center gap-3 tracking-tight">
                <span className="w-10 h-1 bg-blue-700 rounded-full"></span>
                Šimon Grůza: Francouzská škola
              </h3>
              <p className="text-lg text-zinc-500 font-medium leading-relaxed">
                Šimon strávil několik let ve Francii, kde pracoval na prestižních projektech rekonstrukcí historických statků i moderních vil. Přináší smysl pro detail a cit pro ušlechtilé materiály.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-zinc-950 mb-4 flex items-center gap-3 tracking-tight">
                <span className="w-10 h-1 bg-blue-700 rounded-full"></span>
                Josef Grůza: Mistr technologií
              </h3>
              <p className="text-lg text-zinc-500 font-medium leading-relaxed">
                Josef se technické činnosti věnuje již od střední školy. Jeho doménou je moderní elektroinstalace a chytré domácnosti. Propojuje technickou preciznost s praktickým řešením.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-100">
              <p className="text-zinc-900 font-bold mb-4 uppercase tracking-widest text-xs">Naše standardy</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-zinc-600 font-medium">
                  <span className="text-blue-700 font-bold text-xl">✓</span> Osobní přístup zakladatelů
                </li>
                <li className="flex items-center gap-2 text-zinc-600 font-medium">
                  <span className="text-blue-700 font-bold text-xl">✓</span> Fixní rozpočet a termín
                </li>
                <li className="flex items-center gap-2 text-zinc-600 font-medium">
                  <span className="text-blue-700 font-bold text-xl">✓</span> Realizace na klíč
                </li>
                <li className="flex items-center gap-2 text-zinc-600 font-medium">
                  <span className="text-blue-700 font-bold text-xl">✓</span> Čistota na pracovišti
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
