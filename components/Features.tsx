import React from 'react';
import { HeartHandshake, Globe2, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface FeaturesProps {
  language: Language;
}

const Features: React.FC<FeaturesProps> = ({ language }) => {
  const t = TRANSLATIONS[language].features;

  const features = [
    {
      icon: <HeartHandshake className="w-8 h-8 text-white" />,
      title: t.personal,
      description: t.personal_desc,
      color: "bg-orange-500"
    },
    {
      icon: <Globe2 className="w-8 h-8 text-white" />,
      title: t.network,
      description: t.network_desc,
      color: "bg-blue-600"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: t.compliance,
      description: t.compliance_desc,
      color: "bg-slate-800"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">{t.title}</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="relative group">
              <div className={`absolute inset-0 ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              <div className="p-8 rounded-2xl border border-slate-100 hover:border-transparent transition-colors text-center relative z-10">
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;