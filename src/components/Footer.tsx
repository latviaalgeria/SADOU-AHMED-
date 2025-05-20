import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">EURL Phyto Safety</h2>
            <p className="text-green-200">Votre partenaire /Services et développement agricoles</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61574780871853" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200 transition-colors duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-green-200 transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-green-200 transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-green-200 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <hr className="border-green-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 text-sm mb-4 md:mb-0">
            &copy; {currentYear}  EURL Phyto Safety – Aïn Defla, Algérie Tous droits réservés.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-green-200 hover:text-white text-sm transition-colors duration-300">
              Politique de confidentialité
            </a>
            <a href="#" className="text-green-200 hover:text-white text-sm transition-colors duration-300">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;