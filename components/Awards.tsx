import React, { useState } from 'react';
import { AWARDS } from '../constants';
import { Award } from '../types';

const Awards: React.FC = () => {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);

  // Explicitly sort newest to oldest
  const sortedAwards = [...AWARDS].sort((a, b) => b.year - a.year);

  const closeModal = () => setSelectedAward(null);

  // Helper to get all available images for an award
  const getAwardImages = (award: Award) => {
    const images = [];
    if (award.imageUrl) images.push(award.imageUrl);
    if (award.gallery) images.push(...award.gallery);
    return images.slice(0, 4); // Limit to top 4
  };

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col mb-12 space-y-8">
        <div className="space-y-2 text-center lg:text-left">
          <h1 className="text-4xl font-serif font-bold text-slate-900">Awards</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-y-1 sm:gap-x-3">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Sorted newest to oldest</p>
            <span className="hidden sm:block text-slate-200 text-xs">•</span>
            <div className="flex items-center space-x-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
              </span>
              <p className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold">Click for details</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {sortedAwards.map((award) => (
          <div 
            key={award.id} 
            onClick={() => setSelectedAward(award)}
            className="group relative p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-indigo-200 hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1 pr-8">
                <div className="flex items-center space-x-2">
                   <span className="text-indigo-500 font-bold text-sm">{award.year}</span>
                   <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                   <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{award.organization}</span>
                </div>
                <h3 className="text-base sm:text-xl font-serif font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{award.title}</h3>
                {award.description && (
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {award.description}
                  </p>
                )}
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-6 text-slate-200 group-hover:text-indigo-300 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedAward && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            onClick={closeModal}
          ></div>

{/* SHELL (does not scroll) */}
   <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden">

<style>{`
/* Scrollbar width */
.modal-scroll::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.modal-scroll::-webkit-scrollbar-thumb {
  background-color: #cbd5e1; /* slate-300 */
  border-radius: 999px;
}

/* Thumb (the draggable bar) */
.modal-scroll::-webkit-scrollbar-thumb {
  background-color: #e2e8f0; /* slate-200 */
  border-radius: 999px;
}

/* Thumb on hover (slightly darker) */
.modal-scroll::-webkit-scrollbar-thumb:hover {
  background-color: #cbd5e1; /* slate-300 */
}

/* Arrow buttons */
.modal-scroll::-webkit-scrollbar-button {
  background-color: #f8fafc; /* slate-50 */
}
`}</style>
     
  {/* stays put */}
  <button
    onClick={closeModal}
    className="absolute top-6 right-6 z-20 p-2 text-slate-400 hover:text-slate-900 transition-all"
    aria-label="Close"
  >
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>

      {/* SCROLL AREA (only this scrolls) */}
<div className="modal-scroll max-h-[90vh] overflow-y-auto p-8 pr-10 space-y-8">
  <div className="pr-2 space-y-8">

                <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-tight">
                  {selectedAward.title}
                </h2>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest flex flex-wrap items-center gap-x-2">{selectedAward.organization}</p>
              </div>

              {selectedAward.description && (
                <div className="space-y-3">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Description</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {selectedAward.description}
                  </p>
                </div>
              )}

              {getAwardImages(selectedAward).length > 0 && (
                <div className="space-y-6 pt-4 border-t border-slate-50">
                   <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Photos</h4>
                   <div className="flex flex-col gap-6">
                      {getAwardImages(selectedAward).map((url, i) => (
                        <div key={i} className="flex justify-center rounded-2xl overflow-hidden shadow-sm">
                          <img 
                            src={url} 
                            className="max-w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                            alt={`Award visual ${i + 1}`} 
                          />
                        </div>
                      ))}
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Awards;
