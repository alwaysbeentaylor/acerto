import React from 'react';
import { ArrowRight, Briefcase, Users, Star, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  language: Language;
  navigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ language, navigate }) => {
  const t = TRANSLATIONS[language].hero;

  return (
    <div className="relative min-h-[90vh] flex flex-col pt-32 pb-12 overflow-hidden bg-white">
      
      {/* Background Elements - Light Theme */}
      <div className="absolute inset-0 z-0">
         {/* Subtle pattern or gradient */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-white to-white"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
         
         {/* Animated Orbs - Soft Colors */}
         <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-orange-200/20 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="text-center max-w-4xl mx-auto mb-16 animate__animated animate__fadeInDown">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6">
                <Star className="w-3 h-3 fill-orange-600" />
                {t.tag}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              {t.title_start} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">{t.title_end}</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Employer Card */}
            <div 
              onClick={() => navigate('employers')}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 cursor-pointer hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 animate__animated animate__fadeInLeft"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Briefcase className="w-40 h-40 text-slate-900" />
              </div>
              
              <div className="relative z-10">
                <div className="bg-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.cta_employer}</h3>
                <p className="text-slate-500 mb-8 h-12 font-medium">{t.cta_employer_desc}</p>
                
                <div className="flex items-center text-orange-600 font-bold group-hover:text-orange-700">
                    <span className="border-b-2 border-orange-200 group-hover:border-orange-600 transition-colors pb-0.5">{t.cta_employer_btn}</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Candidate Card */}
            <div 
              onClick={() => navigate('candidates')}
              className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 cursor-pointer hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 animate__animated animate__fadeInRight"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Users className="w-40 h-40 text-white" />
              </div>

              <div className="relative z-10">
                <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                    <Users className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.cta_candidate}</h3>
                <p className="text-slate-400 mb-8 h-12 font-medium">{t.cta_candidate_desc}</p>
                
                <div className="flex items-center text-blue-400 font-bold group-hover:text-blue-300">
                    <span className="border-b-2 border-blue-500/50 group-hover:border-blue-400 transition-colors pb-0.5">{t.cta_candidate_btn}</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-x-12 gap-y-4 animate__animated animate__fadeInUp animate__delay-1s">
              {['NBBU Gecertificeerd', 'NEN 4400-1', 'SNF Huisvesting', 'VCU Veiligheid'].map((cert, i) => (
                  <div key={i} className="flex items-center text-slate-500 font-semibold text-sm">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      {cert}
                  </div>
              ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;