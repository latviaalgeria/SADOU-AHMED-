import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Header
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "Compétences, expérience et solutions pour l'agriculture moderne",
    "hero.description": "Nous accompagnons les agriculteurs algériens avec des conseils techniques personnalisés, un suivi de terrain, et des produits phytosanitaires de qualité.",
    "hero.cta": "Contactez-nous",
    
    // Services
    "services.title": "Nos Services",
    "services.subtitle": "Chez EURL Phyto Safety, nous ne nous contentons pas de vendre des produits — nous bâtissons des partenariats techniques durables avec les agriculteurs. Notre approche repose sur trois étapes clés : diagnostic, accompagnement, puis solution par produit adapté.",
    "services.card1.title": "Conseil et accompagnement technique personnalisé",
    "services.card1.description": "Sous la direction de l'Ingénieur d'État SADOU AHMED, notre équipe accompagne les agriculteurs tout au long de leur campagne agricole, depuis l'analyse des besoins jusqu'à la mise en place de protocoles de traitement, en passant par le suivi de terrain et des conseils agronomiques adaptés aux réalités locales.",
    "services.card2.title": "Diagnostic phytosanitaire et recommandations ciblées",
    "services.card2.description": "Nous examinons vos cultures pour identifier les problèmes et proposons des solutions adaptées pour améliorer leur santé et leur rendement.",
    "services.card3.title": "Solutions agricoles adaptées à vos besoins",
    "services.card3.description": "Une fois le diagnostic réalisé, nous vous apportons les solutions les plus adaptées à vos besoins. Notre gamme comprend des produits originaux et de haute qualité issus de grandes marques multinationales telles que Bayer, Syngenta,Corteva, BASF, FMC. Nous collaborons également avec des fournisseurs reconnus comme Profect, Casap, SRID, Agrichem et bien d'autres. En tant que distributeur direct, nous garantissons des prix compétitifs et un stock rigoureusement sélectionné pour répondre aux exigences des agriculteurs modernes.",
    
    // About
    "about.title": "À propos de nous",
    "about.experience": "10+ années d'expertise",
    "about.description": "EURL Phyto Safety est une entreprise algérienne basée à Aïn Defla dédiée à l'accompagnement technique des agriculteurs et au diagnostic phytosanitaire.",
    
    // Contact
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Vous avez des questions ou besoin de conseils? Notre équipe est à votre disposition pour vous aider.",
    "contact.info.title": "Nos coordonnées",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer",
    "contact.form.success": "Votre message a été envoyé avec succès.",
    "contact.hours.title": "Horaires d'ouverture",
    "contact.hours.weekdays": "Du samedi au jeudi : 8h00 - 18h00",
    "contact.hours.friday": "Vendredi : Fermé",
    
    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.privacy": "Politique de confidentialité",
    "footer.legal": "Mentions légales",
    "footer.tagline": "Votre partenaire /Services et développement agricoles"
  },
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.services": "خدماتنا",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",
    
    // Hero
    "hero.title": "كفاءة, خبرة وحلول للزراعة الحديثة",
    "hero.description": "نرافق المزارعين الجزائريين بالمشورة الفنية المخصصة والمتابعة الميدانية والمنتجات العالية الجودة",
    "hero.cta": "اتصل بنا",
    
    // Services
    "services.title": "خدماتنا",
    "services.subtitle": "في EURL Phyto Safety، لا نكتفي ببيع المنتجات - نحن نبني شراكات فنية مستدامة مع المزارعين. يعتمد نهجنا على ثلاث خطوات رئيسية: التشخيص والمرافقة ثم الحل بالمنتج المناسب.",
    "services.card1.title": "استشارات ودعم فني مخصص",
    "services.card1.description": "تحت إشراف المهندس صادو أحمد، يرافق فريقنا المزارعين طوال موسمهم الزراعي، من تحليل الاحتياجات إلى تنفيذ بروتوكولات العلاج، مع المتابعة الميدانية والمشورة الزراعية المكيفة مع الواقع المحلي.",
    "services.card2.title": "التشخيص وتوصيات محددة",
    "services.card2.description": "نفحص محاصيلك لتحديد المشاكل ونقترح حلولاً مناسبة لتحسين صحتها وإنتاجيتها.",
    "services.card3.title": "حلول زراعية تناسب احتياجاتك",
    "services.card3.description": "بمجرد اكتمال التشخيص، نقدم لك الحلول الأنسب لاحتياجاتك. تشمل مجموعتنا منتجات أصلية عالية الجودة من شركات عالمية كبرى مثل باير، سينجنتا، كورتيفا، باسف، FMC. نتعاون أيضًا مع موردين معروفين مثل بروفكت، كاساب، SRID، أجريكيم وغيرهم. كموزع مباشر، نضمن أسعارًا تنافسية ومخزونًا مختارًا بعناية لتلبية متطلبات المزارعين العصريين.",
    
    // About
    "about.title": "من نحن",
    "about.experience": "+10 سنوات من الخبرة",
    "about.description": "EURL Phyto Safety هي شركة جزائرية مقرها عين الدفلى متخصصة في الدعم الفني للمزارعين والتشخيص النباتي.",
    
    // Contact
    "contact.title": "اتصل بنا",
    "contact.subtitle": "هل لديك أسئلة أو تحتاج إلى نصيحة؟ فريقنا في خدمتك للمساعدة.",
    "contact.info.title": "معلومات الاتصال",
    "contact.form.name": "الاسم",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.message": "الرسالة",
    "contact.form.submit": "إرسال",
    "contact.form.success": "تم إرسال رسالتك بنجاح.",
    "contact.hours.title": "ساعات العمل",
    "contact.hours.weekdays": "من السبت إلى الخميس: 8:00 - 18:00",
    "contact.hours.friday": "الجمعة: مغلق",
    
    // Footer
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.privacy": "سياسة الخصوصية",
    "footer.legal": "الشروط القانونية",
    "footer.tagline": "شريكك في الخدمات والتنمية الزراعية"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
