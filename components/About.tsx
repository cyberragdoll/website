import React from 'react';

const About: React.FC = () => {
  const timelineEntries = [
    {
      period: "2009 — 2012",
      title: "BA in Language & Literature (French & Spanish)",
      description: "Laying the linguistic foundation through classical and modern studies."
    },
    {
      period: "2012 — 2013",
      title: "MA in Linguistics (Computational & Variational Linguistics)",
      description: "Discovering the power of mapping human language to computational structures."
    },
    {
      period: "2013 — 2014",
      title: "MA in Artificial Intelligence (Speech & Language Technology)",
      description: "Deepening technical expertise in intelligent systems and cognitive modeling."
    },
    {
      period: "2014 — 2019",
      title: "PhD in Computational Linguistics",
      description: "Advanced doctoral research at KU Leuven, bridging technology and linguistics."
    },
    {
      period: "2019 — Now",
      title: "Educational Technologist",
      description: "Innovating at the intersection of AI, pedagogy, and higher education for the Humanities and Social Sciences Group at KU Leuven."
    }
  ];

  const lifeInterests = [
    {
      title: "The Studio",
      text: "Urban sketching and digital painting. Capturing the quiet rhythm of cities and the magic in children's stories.",
      color: "text-rose-600",
      borderHover: "hover:border-rose-100"
    },
    {
      title: "The Library",
      text: "A healthy obsession with board games and story-driven video games. Narrative matters everywhere.",
      color: "text-sky-600",
      borderHover: "hover:border-sky-100"
    },
    {
      title: "The Den",
      text: "Living in a cozy corner of Belgium with my husband and our two very curious cats.",
      color: "text-amber-600",
      borderHover: "hover:border-amber-100"
    },
    {
      title: "The Quest",
      text: "Endless curiosity. Whether it's a new AI model or a hidden alleyway, I'm always wandering toward it.",
      color: "text-rose-600",
      borderHover: "hover:border-rose-100"
    },
    {
      title: "The Kitchen",
      text: "Experimenting with recipes and the chemistry of cooking. It's just another form of creative science.",
      color: "text-sky-600",
      borderHover: "hover:border-sky-100"
    },
    {
      title: "The Archive",
      text: "Collecting vintage children's books and studying the evolution of visual storytelling across cultures.",
      color: "text-amber-600",
      borderHover: "hover:border-amber-100"
    }
  ];

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700 space-y-12 pb-2">
      {/* Uniform Header Section */}
      <div className="flex flex-col mb-12 space-y-8">
        <div className="space-y-2 text-center lg:text-left">
          <h1 className="text-4xl font-serif font-bold text-slate-900">About</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-y-1 sm:gap-x-3">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">A glimpse beyond the work</p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="text-left">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 flex items-center gap-4 mb-6">
                A little about me <div className="h-px flex-grow bg-slate-100"></div>
              </h2>
            </div>
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                I'm a curious soul with a background that bridges the gap between the structure of linguistics and the logic of computer science. While my professional life is spent navigating the evolving landscape of educational technology at KU Leuven, my heart often finds its home in the tangible world of art.
              </p>
              <p>
                I believe that curiosity is our greatest asset. Whether I'm analyzing how a new AI model interprets syntax or sketching the intricate architecture of a Belgian town square, I'm driven by a desire to understand and illustrate the beauty of the systems around us.
              </p>
              <p>
                When I'm not in the office or the studio, you'll likely find me lost in a story—be it in a dusty vintage book, a sprawling narrative video game, or a quiet conversation with my husband and cats.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex justify-center lg:justify-end py-4">
            <div className="relative group">
              {/* Blue Tapes for both */}
              <div className="absolute -top-3 -left-6 w-20 h-8 bg-sky-200/80 backdrop-blur-md -rotate-12 z-20 border border-sky-300/40 shadow-sm flex items-center justify-center rounded-sm">
                <div className="w-full h-full absolute top-0 left-0 opacity-10 bg-sky-900"></div>
              </div>
              <div className="absolute -bottom-3 -right-6 w-20 h-8 bg-sky-200/80 backdrop-blur-md rotate-12 z-20 border border-sky-300/40 shadow-sm flex items-center justify-center rounded-sm">
                <div className="w-full h-full absolute top-0 left-0 opacity-10 bg-sky-900"></div>
              </div>
              
              <div className="relative aspect-square w-64 md:w-72 overflow-hidden rounded-sm bg-white p-3 shadow-2xl -rotate-1 lg:rotate-1 group-hover:rotate-0 transition-all duration-700 mx-auto">
                <img 
                  src="/website/profile.jpg" 
                  alt="Leen" 
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="space-y-8 pt-4">
        <div className="text-left">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 flex items-center gap-4">
            Career Timeline <div className="h-px flex-grow bg-slate-100"></div>
          </h2>
        </div>

        <div className="relative pl-8 md:pl-12 ml-4 lg:ml-0">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-slate-300 rounded-full"></div>
          
          <div className="space-y-10">
            {timelineEntries.map((entry, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[37px] md:-left-[45px] top-1 w-5 h-5 rounded-full bg-white border-[3px] border-sky-400 shadow-sm z-10 group-hover:scale-125 transition-transform duration-300 ring-4 ring-white"></div>
                
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest block">
                    {entry.period}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-slate-900 leading-tight">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-slate-900 leading-relaxed max-w-2xl">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Things I love lately Section */}
      <section className="space-y-8 pt-4">
        <div className="text-left">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 flex items-center gap-4">
            Things I love lately <div className="h-px flex-grow bg-slate-100"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lifeInterests.map((item, idx) => (
            <div 
              key={idx} 
              className={`group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col space-y-4 ${item.borderHover}`}
            >
              <h3 className={`text-xl font-serif font-bold text-center ${item.color}`}>
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed text-left">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
