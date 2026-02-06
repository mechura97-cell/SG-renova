
import React from 'react';
import { PROJECTS } from '../constants';

interface ReferencesProps {
  onProjectClick: (id: string) => void;
}

const References: React.FC<ReferencesProps> = ({ onProjectClick }) => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-black uppercase tracking-[0.2em] text-xs mb-2 block">Reference</span>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tighter">Naše práce</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] aspect-[16/10] bg-zinc-100"
            >
              <img 
                src={project.mainImage} 
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <span className="text-blue-500 text-xs font-black uppercase tracking-[0.2em] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="text-3xl font-black text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-zinc-300 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 font-medium">
                  Zobrazit celou galerii projektu →
                </p>
              </div>
              
              {/* Fallback label for mobile */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur p-6">
                <p className="text-[10px] text-blue-700 font-black uppercase tracking-widest">{project.category}</p>
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default References;
