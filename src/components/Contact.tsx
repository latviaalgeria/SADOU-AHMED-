import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Contactez-nous</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Vous avez des questions ou besoin de conseils? Notre équipe est à votre disposition pour vous aider.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Nos coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-green-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Téléphone</h4>
                    <p className="text-gray-600">05.50.17.25.60</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-green-600 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">phyto.safety25@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-green-600 mr-4">
                    <MapPin size={24} />
                  </div>
                 <div>
  <h4 className="text-lg font-medium text-gray-800">Localisation</h4>
  <p className="text-gray-600">
    RN 04, DHAYA SUD / AIN DEFLA, 'Aïn Defla, Algeria<br />
    <a
      href="https://maps.app.goo.gl/6116hppoTQv6MMZA8"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 underline"
    >
      Voir sur Google Maps
    </a>
  </p>
</div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="text-lg font-medium text-green-800 mb-2">Horaires d'ouverture</h4>
                <p className="text-gray-600">Du samedi au jeudi : 8h00 - 18h00</p>
<p className="text-gray-600">Vendredi : Fermé</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Envoyez-nous un message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                  <strong className="font-bold">Merci !</strong>
                  <span className="block sm:inline"> Votre message a été envoyé avec succès.</span>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;