import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();

  const switchLang = (lang) => i18n.changeLanguage(lang);

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <header className="sticky top-0 bg-white border-b z-10 flex justify-between items-center px-8 py-2 font-serif text-sm">
      <span>{today}</span>
      <h1 className="text-2xl font-black tracking-wide">The New York Times</h1>
      <div className="text-right">
        <button onClick={() => switchLang('eng')} className="mr-2 font-medium">ENG</button>
        <span className="text-gray-500">|</span>
        <button onClick={() => switchLang('esp')} className="ml-2 font-medium">ESP</button>
      </div>
    </header>
  );
};

export default Header;
