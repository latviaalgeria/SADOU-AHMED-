import React from 'react';
import { ShieldCheck, Users, BarChart } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
    <div className="text-green-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-green-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Conseil et accompagnement technique personnalisé",
      description: "Sous la direction de l'Ingénieur d'État SADOU AHMED, notre équipe accompagne les agriculteurs tout au long de leur campagne agricole, depuis l’analyse des besoins jusqu’à la mise en place de protocoles de traitement, en passant par le suivi de terrain et des conseils agronomiques adaptés aux réalités locales.",
      icon: <ShieldCheck size={40} />
    },
    {
      title: "Diagnostic phytosanitaire et recommandations ciblées",
      description: "Nous examinons vos cultures pour identifier les problèmes et proposons des solutions adaptées pour améliorer leur santé et leur rendement.",
      icon: <Users size={40} />
    },
    {
      title: "Vente de produits phytosanitaires adaptés",
      description: "Une fois le diagnostic réalisé, nous proposons les produits les plus adaptés à vos besoins. Notre gamme comprend des produits de haute qualité, similaires à ceux des grandes marques comme Bayer, Syngénta, Profert, Casap, SRID, Agrichem et bien d'autres. En tant que premier distributeur, nous assurons des prix compétitifs et un stock rigoureusement sélectionné pour répondre aux exigences des agriculteurs d’aujourd’hui.",
      icon: <BarChart size={40} />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Nos Services</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
           Chez EURL Phyto Safety, nous ne nous contentons pas de vendre des produits — nous bâtissons des partenariats techniques durables avec les agriculteurs. Notre approche repose sur trois étapes clés : diagnostic, accompagnement, puis solution par produit adapté.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;