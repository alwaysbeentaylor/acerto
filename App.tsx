import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Jobs from './components/Jobs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import EmployerTools from './components/EmployerTools';
import CVReview from './components/CVReview';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

const HomeView: React.FC<{ language: Language, navigate: (path: string) => void }> = ({ language, navigate }) => {
    const t = TRANSLATIONS[language].home_cta;
    return (
        <>
            <Hero language={language} navigate={navigate} />
            <Features language={language} />
            <Jobs language={language} />
            
            <div className="py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-orange-500 rounded-[2.5rem] p-12 relative overflow-hidden text-center shadow-2xl shadow-orange-500/20">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-slate-900 opacity-10 rounded-full blur-3xl"></div>
                        
                        <h2 className="relative z-10 text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
                            {t.title}
                        </h2>
                        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => navigate('contact')}
                                className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                            >
                                {t.btn_contact}
                            </button>
                            <button 
                                onClick={() => navigate('candidates')}
                                className="bg-orange-600 text-white border-2 border-orange-400 px-10 py-4 rounded-full font-bold hover:bg-orange-700 transition-all"
                            >
                                {t.btn_job}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Contact language={language} />
        </>
    );
};

const EmployersView: React.FC<{ language: Language }> = ({ language }) => {
    const t = TRANSLATIONS[language].employer_view;
    return (
        <div className="pt-24 min-h-screen bg-slate-50 animate__animated animate__fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">{t.subtitle}</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">
                            {t.title}
                        </h1>
                    </div>
                    <p className="max-w-lg text-slate-600 mt-4 md:mt-0 font-medium">
                        {t.desc}
                    </p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    <div className="lg:col-span-2">
                        <EmployerTools language={language} />
                    </div>
                    <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{t.why_title}</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-orange-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-slate-300">{t.why_1}</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-orange-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-slate-300">{t.why_2}</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-orange-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-slate-300">{t.why_3}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-700">
                            <div className="text-4xl font-bold text-orange-500 mb-1">98%</div>
                            <div className="text-slate-400 text-sm">{t.stat_label}</div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <Contact language={language} />
                </div>
            </div>
        </div>
    );
};

const CandidatesView: React.FC<{ language: Language, navigate: (p: string) => void }> = ({ language, navigate }) => {
    const t = TRANSLATIONS[language].candidate_view;
    return (
        <div className="pt-24 min-h-screen bg-slate-50 animate__animated animate__fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">{t.subtitle}</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">
                        {t.title}
                    </h1>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 mb-20">
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <CVReview language={language} />
                    </div>
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 h-full">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t.benefits_title}</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    {title: t.b1_title, desc: t.b1_desc, icon: "🏠"},
                                    {title: t.b2_title, desc: t.b2_desc, icon: "🏥"},
                                    {title: t.b3_title, desc: t.b3_desc, icon: "🚗"},
                                    {title: t.b4_title, desc: t.b4_desc, icon: "💶"}
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="text-2xl bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center">{item.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                <Jobs language={language} />
            </div>
        </div>
    );
};

// Inner App to use Hooks
const AppContent = () => {
    const [language, setLanguage] = useState<Language>(Language.NL);
    const navigate = useNavigate();
    const location = useLocation();

    const getCurrentPage = () => {
        const path = location.pathname.substring(1); 
        return path || 'home';
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-slate-50">
            <Navbar 
                language={language} 
                setLanguage={setLanguage} 
                currentPage={getCurrentPage()}
                navigate={(page) => navigate(page === 'home' ? '/' : `/${page}`)}
            />
            
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomeView language={language} navigate={(p) => navigate(p === 'home' ? '/' : `/${p}`)} />} />
                    <Route path="/employers" element={<EmployersView language={language} />} />
                    <Route path="/candidates" element={<CandidatesView language={language} navigate={(p) => navigate(`/${p}`)} />} />
                    <Route path="/jobs" element={<div className="pt-20"><Jobs language={language} /></div>} />
                    <Route path="/contact" element={<div className="pt-20"><Contact language={language} /></div>} />
                    <Route path="*" element={<HomeView language={language} navigate={(p) => navigate(p === 'home' ? '/' : `/${p}`)} />} />
                </Routes>
            </main>

            <Footer />
            <ChatAssistant language={language} />
        </div>
    );
};

const App: React.FC = () => {
  return (
    <HashRouter>
        <AppContent />
    </HashRouter>
  );
};

export default App;