import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
Expertise et solutions phytosanitaires
         </h1>
          <p className="text-xl text-white opacity-90 mb-8">
Nous accompagnons les agriculteurs algériens avec des conseils techniques personnalisés, un suivi de terrain, et des produits phytosanitaires de qualité.          </p>
          <button 
            onClick={scrollToContact}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Contactez-nous
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;