import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPage: string;
  navigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, currentPage, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[language].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ page, label, mobile = false }: { page: string; label: string; mobile?: boolean }) => {
    const active = currentPage === page;
    const baseClasses = mobile
      ? "block px-4 py-3 rounded-lg text-lg font-medium transition-all"
      : "px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer";
    
    // Updated text colors for light background
    const activeClasses = active
      ? "bg-orange-50 text-orange-600 font-bold"
      : "text-slate-600 hover:text-orange-600 hover:bg-slate-50";

    return (
      <a
        onClick={() => {
          navigate(page);
          if (mobile) setIsOpen(false);
        }}
        className={`${baseClasses} ${activeClasses}`}
      >
        {label}
      </a>
    );
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => navigate('home')}>
            <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-slate-900 tracking-tighter group-hover:scale-105 transition-transform">
                  ACERTO<span className="text-orange-500">.</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase -mt-1 text-slate-500">
                  International Staffing
                </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 items-center">
            <NavLink page="home" label={t.home} />
            <div className="h-4 w-px bg-slate-200 mx-2"></div>
            <NavLink page="employers" label={t.employers} />
            <NavLink page="candidates" label={t.candidates} />
            <NavLink page="jobs" label={t.jobs} />
            
            <div className="ml-4 flex items-center space-x-3">
                {/* Language Switcher */}
                <div className="relative group">
                <button className="flex items-center text-slate-600 hover:text-orange-500 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors">
                    <Globe className="w-4 h-4 mr-1.5" />
                    <span className="font-bold text-xs">{language}</span>
                </button>
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl py-2 hidden group-hover:block ring-1 ring-black ring-opacity-5 animate-in fade-in slide-in-from-top-2 duration-200">
                    {Object.values(Language).map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`block w-full text-left px-4 py-2 text-sm font-medium ${language === lang ? 'bg-orange-50 text-orange-600' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                        {lang}
                    </button>
                    ))}
                </div>
                </div>

                <button 
                    onClick={() => navigate('contact')}
                    className="bg-slate-900 hover:bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-slate-900/10 hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5 flex items-center gap-2"
                >
                    <Phone className="w-4 h-4" />
                    <span>{t.contact}</span>
                </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full bg-slate-100 text-slate-900 hover:bg-orange-100 hover:text-orange-500 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-5">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <NavLink page="home" label={t.home} mobile />
            <NavLink page="employers" label={t.employers} mobile />
            <NavLink page="candidates" label={t.candidates} mobile />
            <NavLink page="jobs" label={t.jobs} mobile />
            <NavLink page="contact" label={t.contact} mobile />
            
            <div className="pt-6 border-t border-slate-100 mt-4">
               <div className="flex justify-center space-x-4">
                  {Object.values(Language).map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm border-2 transition-all ${language === lang ? 'border-orange-500 text-orange-600 bg-orange-50' : 'border-slate-200 text-slate-500'}`}
                    >
                        {lang}
                    </button>
                    ))}
               </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;