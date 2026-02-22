import React, { useState } from 'react';
import { TALKS } from '../constants';
import { Talk } from '../types';

type TalkFilter = 'all' | Talk['type'];

const Talks: React.FC = () => {
  const [filter, setFilter] = useState<TalkFilter>('all');
  const [selectedTalk, setSelectedTalk] = useState<Talk | null>(null);
  const now = new Date();

  const filteredTalks = [...TALKS]
    .filter(t => filter === 'all' || t.type === filter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const upcomingTalks = filteredTalks.filter(t => new Date(t.date) >= now);
  const previousTalks = filteredTalks.filter(t => new Date(t.date) < now);

  const getTalkImages = (talk: Talk) => {
  const images: string[] = [];
  if (talk.imageUrl) images.push(talk.imageUrl);
  if (talk.gallery) images.push(...talk.gallery);
  return images.slice(0, 4); // optional: keep/remove this limit
  };

  const getBadgeStyles = (type: Talk['type']) => {
    switch (type) {
      case 'Academic & Professional': return 'bg-sky-50 text-sky-700 border-sky-100';
      case 'science communication': return 'bg-rose-50 text-rose-700 border-rose-100';
      case 'Media & Interviews': return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'Hosting': return 'bg-indigo-50 text-indigo-700 border-indigo-100';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  const closeModal = () => setSelectedTalk(null);

  const TalkCard: React.FC<{ talk: Talk }> = ({ talk }) => (
    <div 
      onClick={() => setSelectedTalk(talk)}
      className="group flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-amber-200 hover:shadow-xl transition-all duration-500 cursor-pointer relative"
    >
      <div className="md:w-1/4 space-y-1">
        <div className="text-amber-500 font-bold text-sm">
          {new Date(talk.date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
        </div>
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          {talk.location}
        </div>
      </div>
      
      <div className="md:w-3/4 space-y-4 pr-10">
        <div className="flex items-center flex-wrap gap-2">
           <span className={`px-2 py-0.5 rounded-md border text-[9px] font-bold uppercase tracking-wider ${getBadgeStyles(talk.type)}`}>
            {talk.type}
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{talk.event}</span>
        </div>
        <h3 className="text-base sm:text-xl font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
          {talk.title}
        </h3>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-6 text-slate-200 group-hover:text-amber-400 transition-colors">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col mb-12 space-y-8">
        <div className="space-y-2 text-center lg:text-left">
          <h1 className="text-4xl font-serif font-bold text-slate-900">Talks & Conversations</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-y-1 sm:gap-x-3">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">from newest to oldest (internal talks excluded)</p>
            <span className="text-slate-200">•</span>
            <div className="flex items-center space-x-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
              </span>
              <p className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">Click for details</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-2">
          {(['all', 'Academic & Professional', 'science communication', 'Media & Interviews', 'Hosting'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold rounded-xl border transition-all duration-300 ${
                filter === f 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/10' 
                  : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300 hover:text-slate-600'
              }`}
            >
              {f === 'all' ? 'All' : f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        {upcomingTalks.length > 0 && (
          <section className="space-y-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 flex items-center gap-4">
              Upcoming <div className="h-px flex-grow bg-slate-100"></div>
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {upcomingTalks.map(talk => <TalkCard key={talk.id} talk={talk} />)}
            </div>
          </section>
        )}

        <section className="space-y-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 flex items-center gap-4">
            Archive <div className="h-px flex-grow bg-slate-100"></div>
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {previousTalks.map(talk => <TalkCard key={talk.id} talk={talk} />)}
          </div>
        </section>
      </div>

      {selectedTalk && (
  <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 animate-in fade-in duration-300">
    <div
      className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
      onClick={closeModal}
    />

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
  background-color: #cbd5e1; /* slate-200 */
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



      
      {/* Close button stays put */}
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

          <span
            className={`inline-flex px-3 py-1.5 rounded-md border text-[10px] font-bold uppercase tracking-wider ${getBadgeStyles(
              selectedTalk.type
            )}`}
          >
            {selectedTalk.type}
          </span>

          <h2 className="text-xl sm:text-3xl font-serif font-bold text-slate-900">
            {selectedTalk.title}
          </h2>

          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest flex flex-wrap items-center gap-x-2">
            <span className="text-amber-600">
              {new Date(selectedTalk.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>

            <span className="text-slate-200">•</span>

            <span className="min-w-0">
              {selectedTalk.event}
              <span className="text-slate-200">{" • "}</span>
              <span className="whitespace-nowrap">{selectedTalk.location}</span>
            </span>
          </div>
        </div>

        <p className="whitespace-pre-line text-slate-600 leading-relaxed">
          {selectedTalk.description}
        </p>

        {getTalkImages(selectedTalk).length > 0 && (
          <div className="space-y-6 pt-4 border-t border-slate-50">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
              Photos
            </h4>

            <div className="flex flex-col gap-6">
              {getTalkImages(selectedTalk).map((url, i) => (
                <div
                  key={i}
                  className="flex justify-center rounded-2xl overflow-hidden shadow-sm"
                >
                  <img
                    src={url}
                    className="max-w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    alt={`Talk photo ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTalk.link && (
          <div className="pt-6">
            <a
              href={selectedTalk.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-sky-600 transition-all shadow-lg"
            >
              <span>Learn more</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
)}
          
    </div>
  );
};

export default Talks;
