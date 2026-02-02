import React from 'react';
import { Section } from '../types';

interface FooterProps {
  onNavigate: (section: Section) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Row 1: Branding - whitespace-nowrap ensures it stays on one line */}
          <div className="flex items-center">
            <span className="text-4xl font-handwritten font-bold tracking-tight text-slate-900 whitespace-nowrap">
              Leen Sevens
            </span>
          </div>
          
          {/* Row 2: Navigation Links */}
          {/* Mobile: gap-y-1 for tighter spacing between the two lines. */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 md:gap-x-6 lg:gap-x-8 md:gap-y-4 text-[10px] uppercase tracking-widest md:tracking-[0.2em] text-slate-400 font-bold px-2 max-w-[320px] sm:max-w-md md:max-w-none">
            <button onClick={() => onNavigate('home')} className="hover:text-rose-400 transition-colors whitespace-nowrap">Home</button>
            <button onClick={() => onNavigate('publications')} className="hover:text-sky-400 transition-colors whitespace-nowrap">Publications</button>
            <button onClick={() => onNavigate('talks')} className="hover:text-amber-400 transition-colors whitespace-nowrap">Talks & Conversations</button>
            <button onClick={() => onNavigate('awards')} className="hover:text-indigo-400 transition-colors whitespace-nowrap">Awards</button>
            <button onClick={() => onNavigate('art')} className="hover:text-rose-400 transition-colors whitespace-nowrap">Art</button>
            <button onClick={() => onNavigate('about')} className="hover:text-sky-400 transition-colors whitespace-nowrap">About</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-amber-400 transition-colors whitespace-nowrap">Contact</button>
          </div>

          {/* Row 3: Copyright at the very bottom, centered */}
          <div className="pt-4 border-t border-slate-50 w-full text-center">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
              © {new Date().getFullYear()} Leen Sevens
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;