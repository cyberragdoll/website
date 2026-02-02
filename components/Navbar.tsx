import React, { useState } from 'react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: Section; color: string }[] = [
    { label: 'Home', value: 'home', color: 'bg-rose-400' },
    { label: 'Publications', value: 'publications', color: 'bg-sky-400' },
    { label: 'Talks & Conversations', value: 'talks', color: 'bg-amber-400' },
    { label: 'Awards', value: 'awards', color: 'bg-indigo-400' },
    { label: 'Art', value: 'art', color: 'bg-rose-400' },
    { label: 'About', value: 'about', color: 'bg-sky-400' },
    { label: 'Contact', value: 'contact', color: 'bg-amber-400' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      {/* Top Accent Stripes */}
      <div className="h-[2px] w-full flex">
        <div className="h-full flex-grow bg-rose-400/50"></div>
        <div className="h-full flex-grow bg-sky-400/50"></div>
        <div className="h-full flex-grow bg-amber-400/50"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop & Tablet Stacked Header */}
        <div className="hidden md:flex flex-col items-center py-6 space-y-4">
          <button 
            onClick={() => onNavigate('home')} 
            className="group"
          >
            <span className="text-4xl font-handwritten font-bold tracking-tight text-slate-900 group-hover:text-slate-600 transition-colors whitespace-nowrap">
              Leen Sevens
            </span>
          </button>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`text-[10px] uppercase tracking-widest font-bold transition-all relative py-1 focus:outline-none whitespace-nowrap ${
                  activeSection === item.value ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {item.label}
                {activeSection === item.value && (
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] ${item.color} rounded-full animate-in fade-in zoom-in-50 duration-300`}></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navbar (Slimmer to save space) */}
        <div className="md:hidden flex justify-between items-center h-16">
          <button 
            onClick={() => onNavigate('home')} 
            className="text-2xl font-handwritten font-bold text-slate-900"
          >
            Leen Sevens
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-500 hover:text-slate-600 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-4 px-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onNavigate(item.value);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest ${
                activeSection === item.value
                  ? 'bg-slate-50 text-slate-900'
                  : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;