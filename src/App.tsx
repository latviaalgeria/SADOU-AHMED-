import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'EURL Phyto Safety | Protection des cultures';
    
    // Add favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%232E7D32"><path d="M6.5 18C5.1 18 4 16.9 4 15.5S5.1 13 6.5 13H7v-2H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v1.5c0 1.4 1.1 2.5 2.5 2.5S10 19.9 10 18.5V13c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2v5.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V17h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-3v2h.5c1.4 0 2.5 1.1 2.5 2.5S21.9 18 20.5 18H19v.5c0 2.5-2 4.5-4.5 4.5S10 21 10 18.5V17H7v1.5c0 1.4-1.1 2.5-2.5 2.5S2 19.9 2 18.5V17h4v-3h4c1.1 0 2 .9 2 2v1.5c0 1.4-1.1 2.5-2.5 2.5S7 18.9 7 17.5V16h2v1.5c0 .3.2.5.5.5s.5-.2.5-.5V12h-3c-2.2 0-4 1.8-4 4s1.8 4 4 4h1"/></svg>';
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;