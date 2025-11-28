import React, { useState } from 'react';
import { MapPin, Euro, Clock, Briefcase, ArrowRight, Star } from 'lucide-react';
import { Language, Job } from '../types';
import { TRANSLATIONS, MOCK_JOBS } from '../constants';

interface JobsProps {
  language: Language;
}

const Jobs: React.FC<JobsProps> = ({ language }) => {
  const t = TRANSLATIONS[language].jobs;
  const [filter, setFilter] = useState<'all' | Job['category']>('all');

  const filteredJobs = filter === 'all' 
    ? MOCK_JOBS 
    : MOCK_JOBS.filter(job => job.category === filter);

  const categories = [
      { id: 'all', label: language === Language.NL ? 'Alles' : 'All Sectors' },
      { id: 'construction', label: language === Language.NL ? 'Bouw' : 'Construction' },
      { id: 'technical', label: language === Language.NL ? 'Techniek' : 'Technical' },
      { id: 'logistics', label: language === Language.NL ? 'Logistiek' : 'Logistics' }
  ];

  // Helper to process bold markdown in translations
  const renderPromo = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="text-orange-600">{part.slice(2, -2)}</strong>;
        }
        return part;
    });
  };

  return (
    <div className="py-24 bg-white" id="jobs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-orange-600 font-bold mb-2 uppercase tracking-wider text-sm">
                    <Star className="w-4 h-4 fill-orange-600" />
                    {t.hot}
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-6">{t.title}</h2>
                <p className="text-lg text-slate-600">
                    {renderPromo(t.promo)}
                </p>
            </div>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id as any)}
                        className={`px-6 py-3 rounded-full text-sm font-bold transition-all transform hover:-translate-y-1 ${
                            filter === cat.id 
                            ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 ring-2 ring-slate-900 ring-offset-2' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredJobs.map((job) => (
            <div key={job.id} className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:border-orange-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-16 -mt-16 group-hover:bg-orange-50 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide 
                        ${job.category === 'construction' ? 'bg-orange-100 text-orange-700' : 
                        job.category === 'technical' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                        {job.category}
                    </span>
                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                        <Briefcase className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors" />
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-500 transition-colors">{job.title}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center text-slate-600 bg-slate-50 p-3 rounded-xl">
                        <MapPin className="w-4 h-4 mr-3 text-orange-500" />
                        <span className="font-medium text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center text-slate-600 bg-slate-50 p-3 rounded-xl">
                        <Euro className="w-4 h-4 mr-3 text-green-600" />
                        <span className="font-medium text-sm">{job.salary}</span>
                    </div>
                    <div className="flex items-center text-slate-600 bg-slate-50 p-3 rounded-xl col-span-2">
                         <Clock className="w-4 h-4 mr-3 text-blue-500" />
                        <span className="font-medium text-sm">{job.type} • Immediate Start</span>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <p className="text-slate-400 text-sm font-medium">Posted 2 days ago</p>
                    <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-500 transition-colors flex items-center shadow-lg shadow-slate-900/10 group-hover:shadow-orange-500/20">
                        {t.apply}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <button className="text-slate-900 hover:text-orange-600 font-bold text-lg inline-flex items-center transition-colors border-b-2 border-slate-900 hover:border-orange-600 pb-1">
                {t.view_all} <ArrowRight className="w-5 h-5 ml-2" />
             </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;