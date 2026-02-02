
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { NavigationSection } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<NavigationSection>(NavigationSection.Home);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'philosophy', 'gallery', 'experience'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current as NavigationSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-lumina-gold/30">
      <Navbar activeSection={activeSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="philosophy">
          <Philosophy />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="experience">
          <Experience />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
