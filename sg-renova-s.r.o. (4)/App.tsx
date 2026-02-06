
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import References from './components/References';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (id: string) => {
    const project = PROJECTS.find(p => p.id === id);
    if (project) {
      setSelectedProject(project);
      document.body.style.overflow = 'hidden';
    }
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <section id="uvod">
          <Hero />
        </section>
        
        <section id="sluzby">
          <Services />
        </section>

        <section id="o-nas">
          <About />
        </section>

        <section id="reference">
          <References onProjectClick={handleOpenProject} />
        </section>

        <section id="kontakt" className="bg-[#f0f4f8] py-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-blue-700 font-black uppercase tracking-[0.2em] text-xs mb-4 block">Poptávka</span>
                <h2 className="text-5xl md:text-6xl font-black text-zinc-950 mb-8 tracking-tighter leading-tight">Pojďme postavit <br /> váš sen</h2>
                <p className="text-xl text-zinc-500 font-medium mb-12 leading-relaxed">
                  Každý projekt začíná nezávaznou konzultací. Vyplňte formulář a my vám připravíme řešení na míru.
                </p>
                <div className="space-y-6">
                  {[
                    { n: "1", t: "Analýza vašich potřeb a představ" },
                    { n: "2", t: "Návrh řešení a cenová nabídka" },
                    { n: "3", t: "Precizní realizace bez starostí" }
                  ].map((step) => (
                    <div key={step.n} className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-blue-700 text-xl font-black shadow-sm group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 transition-all duration-300">
                        {step.n}
                      </div>
                      <p className="text-lg font-bold text-zinc-800 tracking-tight">{step.t}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseProject} 
        />
      )}
    </div>
  );
};

export default App;
