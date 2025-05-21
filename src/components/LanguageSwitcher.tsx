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
      className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-300 ${
        document.documentElement.scrollTop > 50
          ? 'bg-green-600 text-white hover:bg-green-700'
          : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
      }`}
      title={language === 'fr' ? 'Changer en arabe' : 'تغيير إلى الفرنسية'}
    >
      <Languages size={20} />
      <span className="font-medium">{language === 'fr' ? 'العربية' : 'Français'}</span>
    </button>
  );
};

export default LanguageSwitcher;