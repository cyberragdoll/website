import React, { useState, useEffect } from 'react';
import { Section } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Publications from './components/Publications';
import Talks from './components/Talks';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Awards from './components/Awards';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Section;
      if (['home', 'publications', 'talks', 'awards', 'art', 'about', 'contact'].includes(hash)) {
        setActiveSection(hash);
      } else {
        setActiveSection('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run once on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (section: Section) => {
    window.location.hash = section;
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'publications': return <Publications />;
      case 'talks': return <Talks />;
      case 'awards': return <Awards />;
      case 'art': return <Portfolio />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-sky-50 selection:text-sky-700">
      <Navbar activeSection={activeSection} onNavigate={navigate} />
      
      {/* Reduced mobile padding from pt-28 to pt-20 */}
      <main className="flex-grow pt-20 md:pt-44 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderSection()}
        </div>
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;