import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
             <img 
  src="/images/photo.jpg" 
  alt="Agricultural field" 
  className="rounded-lg shadow-lg object-cover h-[600px] w-full"
/>
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-lg font-semibold">10+ années d'expertise</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">À propos de nous</h2>
            <div className="w-20 h-1 bg-green-600 mb-6"></div>
            
            <p className="text-gray-600 mb-6">
  <strong>EURL Phyto Safety</strong> est une entreprise algérienne basée à <strong>Aïn Defla</strong> dédiée à <strong>l’accompagnement technique des agriculteurs</strong> et au <strong>diagnostic phytosanitaire</strong>. Dirigée par <strong>l'Ingénieur d'État SADOU AHMED</strong>, notre mission est de :<br /><br />

  <strong>Renforcer les compétences</strong> des agriculteurs algériens pour améliorer qualité et rendement.<br /><br />

  <strong>Apporter les dernières avancées scientifiques</strong> sur le terrain grâce à des visites régulières et des recommandations concrètes.<br /><br />

  <strong>Mettre en œuvre des programmes de formation continue</strong> et des ateliers sur :<br /><br />

  – la lutte raisonnée contre les maladies et ravageurs<br />
  – la nutrition des plantes et la fertilisation<br />
  – l’irrigation moderne et durable<br />
  – la sécurité dans la manipulation des produits phytosanitaires
</p>
            
            <p className="text-gray-600 mb-6">
              Notre entreprise s'est développée avec une vision claire : devenir le partenaire de confiance des agriculteurs en leur offrant non seulement des produits de qualité, mais aussi un accompagnement personnalisé pour optimiser leurs rendements .
            </p>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;