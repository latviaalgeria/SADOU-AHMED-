import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-md transition-colors duration-300"
      title={language === 'fr' ? 'Changer en arabe' : 'تغيير إلى الفرنسية'}
    >
      <Languages size={20} />
      <span>{language === 'fr' ? 'عربي' : 'FR'}</span>
    </button>
  );
};

export default LanguageSwitcher;