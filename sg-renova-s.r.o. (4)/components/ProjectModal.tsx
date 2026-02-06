
import React from 'react';
import { X } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div 
        className="absolute inset-0 bg-zinc-950/95 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row border border-white/20">
        {/* Gallery Section */}
        <div className="md:w-2/3 p-6 md:p-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.gallery.map((img, idx) => (
              <div 
                key={idx} 
                className={`overflow-hidden rounded-3xl ${idx === 0 ? 'sm:col-span-2' : ''}`}
              >
                <img 
                  src={img} 
                  alt={`${project.title} gallery ${idx}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="md:w-1/3 p-10 bg-zinc-50 border-l border-zinc-100 sticky top-0">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-white rounded-full shadow-lg text-zinc-400 hover:text-zinc-950 transition-all active:scale-90"
          >
            <X size={20} />
          </button>

          <span className="text-blue-700 font-black uppercase tracking-[0.2em] text-[10px] mb-2 block">
            {project.category}
          </span>
          <h2 className="text-4xl font-black text-zinc-950 mb-8 tracking-tighter leading-tight">{project.title}</h2>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-black text-zinc-950 mb-4 uppercase text-[10px] tracking-widest">Detail projektu</h4>
              <p className="text-zinc-500 font-medium leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-200">
              <h4 className="font-black text-zinc-950 mb-6 uppercase text-[10px] tracking-widest">Zaujala vás naše práce?</h4>
              <a 
                href="#kontakt" 
                onClick={onClose}
                className="block w-full text-center bg-zinc-950 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-zinc-950/20 active:scale-95"
              >
                Získat cenovou nabídku
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
