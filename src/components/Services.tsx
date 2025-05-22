import React from 'react';
import { ShieldCheck, Users, BarChart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext'; // <-- import your context

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
  const { t } = useLanguage(); // <-- use the translation hook

  const services = [
    {
      title: t("services.card1.title"),
      description: t("services.card1.description"),
      icon: <ShieldCheck size={40} />
    },
    {
      title: t("services.card2.title"),
      description: t("services.card2.description"),
      icon: <Users size={40} />
    },
    {
      title: t("services.card3.title"),
      description: t("services.card3.description"),
      icon: <BarChart size={40} />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t("services.title")}</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            {t("services.subtitle")}
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
