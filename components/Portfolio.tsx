import React, { useState, useEffect } from 'react';
import { ART_PIECES } from '../constants';
import { ArtPiece } from '../types';

type ArtFilter = 'all' | ArtPiece['category'];

const Portfolio: React.FC = () => {
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);
  const [filter, setFilter] = useState<ArtFilter>('all');

  const filteredArt = [...ART_PIECES]
    .filter(p => filter === 'all' || p.category === filter)
    .sort((a, b) => b.year - a.year);

  const getBadgeStyles = (category: ArtPiece['category']) => {
    switch (category) {
      case 'Digital art': return 'bg-sky-50 text-sky-700 border-sky-100';
      case 'Painting': return 'bg-rose-50 text-rose-700 border-rose-100';
      case 'Urban sketching': return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'Comics': return 'bg-indigo-50 text-indigo-700 border-indigo-100';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  const closeModal = () => setSelectedArt(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const categories: ArtFilter[] = ['all', 'Digital art', 'Painting', 'Urban sketching', 'Comics'];

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col mb-12 space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl font-serif font-bold text-slate-900">Art</h1>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-y-1 sm:gap-x-3">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Selected Works Only</p>
                <span className="hidden sm:block text-slate-200 text-xs">•</span>
                <div className="flex items-center space-x-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500"></span>
                  </span>
                  <p className="text-[10px] uppercase tracking-widest text-rose-600 font-bold">Click to enlarge</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed italic max-w-lg mx-auto lg:mx-0">
              This gallery represents a small selection of my favorite works. For a more comprehensive look at my portfolio, please follow my social channels.
            </p>

            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/fabledfoxx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-slate-400 hover:text-rose-500 transition-colors text-xs font-bold uppercase tracking-widest"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014 3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="lowercase">fabledfoxx</span>
              </a>
              <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
              <a 
                href="https://www.facebook.com/fabledfoxart" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-slate-400 hover:text-sky-500 transition-colors text-xs font-bold uppercase tracking-widest"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
                <span className="lowercase">fabledfoxart</span>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end gap-2 shrink-0">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold rounded-xl border transition-all duration-300 ${
                  filter === c 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/10' 
                    : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300 hover:text-slate-600'
                }`}
              >
                {c === 'all' ? 'All' : c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredArt.map((piece) => (
          <div 
            key={piece.id} 
            onClick={() => setSelectedArt(piece)}
            className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden bg-slate-50 relative">
              <img 
                src={piece.thumbnailUrl} 
                alt={piece.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
            </div>
            <div className="p-6 space-y-4">
              <span className={`inline-flex px-2 py-0.5 rounded-md border text-[9px] font-bold uppercase tracking-wider ${getBadgeStyles(piece.category)}`}>
                {piece.category}
              </span>
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-rose-500 transition-colors truncate pr-2">
                  {piece.title}
                </h3>
                <span className="text-[10px] font-bold text-slate-300 mt-1">{piece.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedArt && (
        <div className="fixed inset-0 z-[110] flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md" onClick={closeModal}></div>
          <button onClick={closeModal} className="fixed top-6 right-6 md:top-10 md:right-10 p-4 text-white/40 hover:text-white transition-all z-[120]" aria-label="Close">
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="relative z-[115] w-full h-full flex flex-col items-center justify-center max-w-5xl mx-auto space-y-6 md:space-y-10 animate-in zoom-in-95 duration-500 py-10">
            <div className="relative w-full h-full max-h-[60vh] md:max-h-[65vh] flex items-center justify-center px-4">
              <img src={selectedArt.imageUrl} alt={selectedArt.title} className="max-w-full max-h-full object-contain rounded-sm shadow-2xl" />
            </div>
            <div className="text-center space-y-4 md:space-y-6 p-4 max-w-2xl mx-auto">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">{selectedArt.title}</h2>
                <div className="flex items-center justify-center space-x-4">
                  <span className={`inline-flex px-3 py-1 rounded-md border text-[10px] font-bold uppercase tracking-wider ${getBadgeStyles(selectedArt.category)}`}>
                    {selectedArt.category}
                  </span>
                  <span className="text-white/40 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">{selectedArt.year}</span>
                </div>
              </div>
              
              {selectedArt.description && (
                <p className="text-sm md:text-base text-white/70 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">
                  {selectedArt.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;