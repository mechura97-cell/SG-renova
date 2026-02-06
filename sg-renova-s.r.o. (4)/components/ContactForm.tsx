
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[500px]">
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-3xl font-black text-zinc-950 mb-4 tracking-tighter">Poptávka odeslána!</h3>
        <p className="text-zinc-500 text-lg font-medium leading-relaxed">
          Děkujeme za váš zájem o SG RENOVA s.r.o. Ozveme se vám během nejbližších 24 hodin, abychom probrali váš projekt.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-blue-700 font-black hover:underline uppercase tracking-widest text-xs"
        >
          Odeslat další dotaz
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-zinc-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Jméno a příjmení</label>
            <input 
              required
              type="text" 
              placeholder="Jan Novák"
              className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all outline-none font-medium"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Telefon</label>
            <input 
              required
              type="tel" 
              placeholder="+420 123 456 789"
              className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all outline-none font-medium"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">E-mail</label>
          <input 
            required
            type="email" 
            placeholder="jan.novak@email.cz"
            className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all outline-none font-medium"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Typ služby</label>
          <div className="relative">
            <select className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all outline-none appearance-none font-bold text-zinc-950">
              <option>Celková rekonstrukce</option>
              <option>Koupelna</option>
              <option>Podlahy</option>
              <option>Elektro / Smart Home</option>
              <option>Instalatérské práce</option>
              <option>Jiné / Konzultace</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Vaše zpráva</label>
          <textarea 
            rows={4}
            placeholder="Popište nám stručně svůj záměr..."
            className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all outline-none resize-none font-medium"
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-blue-700 text-white py-5 rounded-2xl font-black text-lg hover:bg-zinc-950 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-700/20 disabled:opacity-70 active:scale-95"
        >
          {status === 'submitting' ? 'Odesílám...' : (
            <>
              Odeslat nezávaznou poptávku <Send size={20} />
            </>
          )}
        </button>
        
        <p className="text-center text-[10px] font-bold text-zinc-400 mt-4 uppercase tracking-widest">
          Garance odpovědi do 24 hodin.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
