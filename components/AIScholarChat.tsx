import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';
import { PUBLICATIONS, TALKS, ART_PIECES } from '../constants';

const AIScholarChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const context = `
      Name: Leen Sevens
      Roles: Computational Linguist, Academic Speaker, Professional Artist.
      Academic Focus: ${PUBLICATIONS.filter(p => p.type === 'Academic').map(p => p.title).join(', ')}
      Children's Books: ${PUBLICATIONS.filter(p => p.type === 'Children’s books').map(p => p.title).join(', ')}
      Other Writing: ${PUBLICATIONS.filter(p => p.type === 'Other').map(p => p.title).join(', ')}
      Selected Talks & Conversations: ${TALKS.map(t => `${t.title} at ${t.event} (${t.type})`).join(', ')}
      Art Style: Exploring curiosity, AI impact, and human-centered design.
      Art Portfolio Includes: ${ART_PIECES.map(a => a.title).join(', ')}
    `;

    const response = await getGeminiResponse(userMessage, context);
    setMessages(prev => [...prev, { role: 'assistant', content: response || "I'm sorry, I couldn't process that." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {isOpen ? (
        <div className="bg-white w-[350px] md:w-[380px] h-[480px] rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-slate-900 p-4 text-white flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] flex">
               <div className="h-full flex-grow bg-rose-400"></div>
               <div className="h-full flex-grow bg-sky-400"></div>
               <div className="h-full flex-grow bg-amber-400"></div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center font-serif italic text-sm">
                S
              </div>
              <h4 className="font-bold text-xs uppercase tracking-widest">Scholar Assistant</h4>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-10 space-y-4">
                <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Ask anything about Leen's work</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button 
                    onClick={() => { setInputValue("What is your research focus?"); }}
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] uppercase font-bold text-slate-500 hover:border-sky-400 transition-colors"
                  >
                    Research focus?
                  </button>
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-white text-slate-700 shadow-sm border border-slate-100'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex space-x-1">
                  <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-100 bg-white">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex items-center space-x-2"
            >
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="flex-grow px-3 py-2 bg-slate-50 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-sky-500/50"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="p-2.5 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center space-x-3 bg-white text-slate-900 px-5 py-3 rounded-xl shadow-xl border border-slate-100 transition-all duration-300 hover:border-sky-400"
        >
          <div className="w-6 h-6 rounded bg-sky-100 text-sky-600 flex items-center justify-center font-serif italic text-xs font-bold">
            S
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold">Ask Assistant</span>
        </button>
      )}
    </div>
  );
};

export default AIScholarChat;