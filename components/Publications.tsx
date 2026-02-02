import React, { useState } from 'react';
import { PUBLICATIONS } from '../constants';
import { Publication } from '../types';

type PublicationFilter = 'all' | Publication['type'];

const Publications: React.FC = () => {
  const [filter, setFilter] = useState<PublicationFilter>('all');
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);

  const filteredPubs = PUBLICATIONS
    .filter(p => filter === 'all' || p.type === filter)
    .sort((a, b) => b.year - a.year);

  const getBadgeStyles = (type: Publication['type']) => {
    switch (type) {
      case 'Academic': return 'bg-sky-50 text-sky-700 border-sky-100';
      case 'Children’s books': return 'bg-rose-50 text-rose-700 border-rose-100';
      case 'Other': return 'bg-amber-50 text-amber-700 border-amber-100';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  const closeModal = () => setSelectedPub(null);

  // Helper component for filter buttons to keep code DRY
  const FilterButton = ({ type, label }: { type: PublicationFilter, label: string }) => (
    <button
      onClick={() => setFilter(type)}
      className={`px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold rounded-xl border transition-all duration-300 ${
        filter === type 
          ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/10' 
          : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300 hover:text-slate-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col mb-12 space-y-8">
        <div className="space-y-2 text-center lg:text-left">
          <h1 className="text-4xl font-serif font-bold text-slate-900">Publications</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-y-1 sm:gap-x-3">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">from newest to oldest</p>
            <span className="hidden sm:block text-slate-200 text-xs">•</span>
            <div className="flex items-center space-x-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500"></span>
              </span>
              <p className="text-[10px] uppercase tracking-widest text-sky-600 font-bold">Click for details</p>
            </div>
          </div>
        </div>
        
        {/* 
          Force 2x2 on mobile by grouping buttons into two flex containers. 
          On screens wider than mobile (sm:), the containers revert to basic flex items 
          so all buttons flow together.
        */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2">
          <div className="flex gap-2 justify-center w-full sm:w-auto">
            <FilterButton type="all" label="All" />
            <FilterButton type="Academic" label="Academic" />
          </div>
          <div className="flex gap-2 justify-center w-full sm:w-auto">
            <FilterButton type="Children’s books" label="Children’s books" />
            <FilterButton type="Other" label="Other" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredPubs.map((pub) => (
          <div 
            key={pub.id} 
            onClick={() => setSelectedPub(pub)}
            className="group p-6 bg-white border border-slate-100 rounded-2xl hover:border-sky-200 hover:shadow-xl transition-all duration-500 cursor-pointer relative"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-4">
                <span className={`inline-flex px-2.5 py-1 rounded-md border text-[9px] font-bold uppercase tracking-wider ${getBadgeStyles(pub.type)}`}>
                  {pub.type}
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-sky-600 transition-colors pr-10">
                  {pub.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                  <span className="font-bold text-slate-700">{pub.authors}</span>
                  <span className="hidden sm:inline w-1 h-1 bg-slate-200 rounded-full"></span>
                  <span className="italic">{pub.venue}</span>
                  <span className="font-bold text-slate-300">{pub.year}</span>
                </div>
              </div>
              <div className="absolute top-6 right-6 text-slate-200 group-hover:text-sky-400 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPub && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300 p-8 md:p-12 space-y-8">
            <button onClick={closeModal} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-all">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="space-y-4">
              <span className={`inline-flex px-3 py-1.5 rounded-md border text-[10px] font-bold uppercase tracking-wider ${getBadgeStyles(selectedPub.type)}`}>
                {selectedPub.type}
              </span>
              <h2 className="text-3xl font-serif font-bold text-slate-900">{selectedPub.title}</h2>
              <p className="text-slate-700 font-bold">{selectedPub.authors} <span className="text-slate-400 font-normal italic">— {selectedPub.venue}, {selectedPub.year}</span></p>
            </div>
            {selectedPub.abstract && (
              <div className="space-y-3">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Abstract</h4>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">{selectedPub.abstract}</p>
              </div>
            )}
            <div className="pt-6">
               {selectedPub.link && (
                 <a href={selectedPub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-8 py-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-sky-600 transition-all shadow-lg">
                   <span>Full Publication</span>
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                 </a>
               )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Publications;