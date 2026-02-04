import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.scss';

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const main = mainRef.current;
    const header = document.querySelector('.header');
    if (!main) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { rootMargin: '0px 0px -100px 0px', threshold: 0.05 }
    );

    main.querySelectorAll('section.section').forEach((section) => {
      sectionObserver.observe(section);
    });

    const handleScroll = () => {
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('header--scrolled');
        } else {
          header.classList.remove('header--scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      main.querySelectorAll('section.section').forEach((section) => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main ref={mainRef}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;