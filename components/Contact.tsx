import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Formspree ID
  const FORMSPREE_ID = "xykpergr"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "There was an issue sending your message. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700 pb-0">
      <div className="max-w-6xl mx-auto">
        {/* Uniform Header Section */}
        <div className="flex flex-col mb-12 space-y-8">
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-4xl font-serif font-bold text-slate-900">Contact</h1>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-y-1 sm:gap-x-3">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Get in touch</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <p className="text-slate-600 leading-relaxed text-base mb-12">
              Whether it's a research collaboration, a speaking engagement, or art inquiry, 
              I'd love to hear from you. My inbox is always open for thoughtful inquiries.
            </p>
            
            {/* Social grid: stacked on mobile (base), side-by-side on tablet (md), stacked on desktop (lg) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-xs md:max-w-2xl lg:max-w-xs mx-auto lg:mx-0">
              {/* LinkedIn */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/leensevens" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold hover:text-indigo-600 transition-colors lowercase">leensevens</a>
                </div>
              </div>

              {/* Art Instagram */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014 3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Art Instagram</p>
                  <a href="https://www.instagram.com/fabledfoxx" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold hover:text-rose-600 transition-colors lowercase">@fabledfoxx</a>
                </div>
              </div>

              {/* Art Facebook */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-sky-50 text-sky-700 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Art Facebook</p>
                  <a href="https://www.facebook.com/fabledfoxart" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold hover:text-sky-600 transition-colors lowercase">@fabledfoxart</a>
                </div>
              </div>

              {/* Personal Instagram */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014 3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Personal Instagram</p>
                  <a href="https://www.instagram.com/cyberragdoll" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold hover:text-amber-600 transition-colors lowercase">@cyberragdoll</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 min-h-[400px]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white rounded-2xl animate-in fade-in zoom-in-95 duration-500">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 text-sm max-w-xs mx-auto mb-8">
                  Thank you for reaching out. Your message has been sent to leen.sevens@kuleuven.be.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-amber-600 font-bold hover:underline text-[10px] uppercase tracking-widest"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Your Name</label>
                  <input 
                    name="name"
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
                    placeholder="E.g. Ada Lovelace"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
                    placeholder="ada@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Message</label>
                  <textarea 
                    name="message"
                    id="message" 
                    rows={5} 
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none text-sm"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                {error && (
                  <p className="text-rose-500 text-[10px] font-bold uppercase tracking-widest text-center">{error}</p>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-slate-900 text-white font-bold text-[11px] uppercase tracking-[0.2em] rounded-xl hover:bg-amber-500 transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;