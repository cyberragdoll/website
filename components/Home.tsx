import React from 'react';
import { Section } from '../types';

interface HomeProps {
  onNavigate: (section: Section) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 lg:space-y-16 animate-in fade-in duration-700">
      {/* Hero Section Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-24 gap-y-12 lg:gap-y-0 items-start">
        
        {/* Roles, Headline, and Intro */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <h2 className="text-slate-400 font-bold tracking-[0.2em] uppercase text-[10px] text-center">
                EDUCATIONAL TECHNOLOGIST • COMPUTATIONAL LINGUIST • ARTIST
              </h2>
            </div>
            
            <h1 className="text-3xl md:text-[2.75rem] font-serif font-bold text-slate-900 leading-[1.2] max-w-2xl text-center mx-auto lg:mx-0 lg:w-full">
              Curiously wandering <br />
              between <span className="text-sky-500">AI</span>, <span className="text-amber-500">humanities</span>, <br />
              and <span className="text-rose-500">creativity</span>.
            </h1>
          </div>
          
          <p className="text-base md:text-[1.1rem] text-slate-600 leading-relaxed max-w-full border-l-2 border-sky-400 pl-6 text-left mx-auto lg:mx-0">
            I'm Dr. Leen Sevens, a computational linguist working in educational technology at KU Leuven. My work focuses on how AI reshapes learning, writing, and assessment, and how these technologies can be used responsibly, creatively, and in a human-centered way in higher education. I'm also an artist, translating curiosity into images when language runs out. :)
          </p>

          {/* Explore Strip (Desktop/Tablet) */}
          <div className="hidden lg:flex pt-4 flex-row items-center justify-start gap-x-4 border-t border-slate-100 w-full">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 shrink-0">Explore:</span>
            
            <div className="flex flex-wrap justify-start gap-x-6">
              <button 
                onClick={() => onNavigate('publications')}
                className="group text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-sky-500 transition-colors py-1"
              >
                Publications
              </button>
              <button 
                onClick={() => onNavigate('talks')}
                className="group text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-amber-500 transition-colors py-1"
              >
                Talks
              </button>
              <button 
                onClick={() => onNavigate('awards')}
                className="group text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-indigo-500 transition-colors py-1"
              >
                Awards
              </button>
              <button 
                onClick={() => onNavigate('art')}
                className="group text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-rose-500 transition-colors py-1"
              >
                Art
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="group text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-sky-500 transition-colors py-1"
              >
                About
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="group text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-amber-500 transition-colors py-1"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Photograph */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end px-4 py-4 lg:pt-8">
          <div className="relative group">
            {/* Top Tape */}
            <div className="absolute -top-4 -left-8 w-20 h-9 bg-sky-200/80 backdrop-blur-md -rotate-12 z-20 border border-sky-300/40 shadow-sm flex items-center justify-center rounded-sm">
               <div className="w-full h-full absolute top-0 left-0 opacity-10 bg-sky-900"></div>
            </div>
            
            {/* Bottom Tape */}
            <div className="absolute -bottom-4 -right-8 w-24 h-10 bg-sky-200/80 backdrop-blur-md rotate-6 z-20 border border-sky-300/40 shadow-sm flex items-center justify-center rounded-sm">
               <div className="w-full h-full absolute top-0 left-0 opacity-10 bg-sky-900"></div>
            </div>

            <div className="relative aspect-square w-64 sm:w-72 md:w-80 lg:w-[360px] overflow-hidden rounded-sm bg-white p-3 lg:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] -rotate-1 lg:rotate-1 hover:rotate-0 transition-all duration-700 ease-out mx-auto">
              <img 
                src="/website/profile.jpg" 
                alt="Leen Sevens" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000";
                }}
              />
            </div>
          </div>
        </div>

        {/* Explore Strip (Mobile) */}
        <div className="lg:hidden col-span-1 pt-4 flex flex-col items-center justify-center gap-y-2 border-t border-slate-100 w-full">
           <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Explore:</span>
           <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4 text-center">
              <button onClick={() => onNavigate('publications')} className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Publications</button>
              <button onClick={() => onNavigate('talks')} className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Talks</button>
              <button onClick={() => onNavigate('awards')} className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Awards</button>
              <button onClick={() => onNavigate('art')} className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Art</button>
              <button onClick={() => onNavigate('about')} className="text-[10px] uppercase tracking-widest font-bold text-slate-500">About</button>
              <button onClick={() => onNavigate('contact')} className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Contact</button>
           </div>
        </div>
      </section>

      {/* Vision/Philosophy Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
        <div className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-sky-100 transition-all duration-500">
          <h3 className="text-xl font-serif font-bold text-sky-600 mb-4 whitespace-nowrap overflow-hidden text-ellipsis text-center">Academic Background</h3>
          <p className="text-slate-600 text-sm leading-relaxed text-left">
            Trained in computational linguistics with a strong grounding in educational technology, I work at the intersection of AI, language, and higher education—exploring how human expertise and intelligent systems can meaningfully support learning, teaching, and assessment.
          </p>
        </div>

        <div className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-amber-100 transition-all duration-500">
          <h3 className="text-xl font-serif font-bold text-amber-600 mb-4 whitespace-nowrap overflow-hidden text-ellipsis text-center">Speaking</h3>
          <p className="text-slate-600 text-sm leading-relaxed text-left">
            I speak on the responsible, creative, and humane use of AI in higher education, with a focus on writing, assessment, visual communication, and how educators and students can work with AI rather than around it.
          </p>
        </div>

        <div className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-rose-100 transition-all duration-500">
          <h3 className="text-xl font-serif font-bold text-rose-600 mb-4 whitespace-nowrap overflow-hidden text-ellipsis text-center">Artistic Philosophy</h3>
          <p className="text-slate-600 text-sm leading-relaxed text-left">
            My work is driven by curiosity and a love for small, everyday moments. Through urban sketching, painting, and illustrated stories, I explore ways of making the world feel approachable—especially for children—by turning observation, science, and imagination into something tangible and playful.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
