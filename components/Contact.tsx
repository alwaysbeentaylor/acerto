import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = TRANSLATIONS[language].contact;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
        setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-4xl font-bold mb-6">{t.title}</h2>
            <p className="text-slate-400 mb-12 text-lg">
              Whether you are an employer looking for skills or a professional looking for opportunities, we are here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-slate-400 mt-1">+31 (0) 10 123 4567</p>
                  <p className="text-slate-500 text-sm">Mon-Fri, 9am - 5pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-slate-400 mt-1">info@acerto.nl</p>
                </div>
              </div>

              <div className="flex items-start">
                 <div className="bg-orange-500/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">Office</h3>
                  <p className="text-slate-400 mt-1">
                    Rotterdamseweg 123<br />
                    3000 AB Rotterdam<br />
                    The Netherlands
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 text-slate-900">
             {isSubmitted ? (
                 <div className="h-full flex flex-col items-center justify-center text-center py-20">
                     <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                     <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                     <p className="text-slate-600">{t.success}</p>
                 </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t.form_name}</label>
                    <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t.form_email}</label>
                    <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t.form_message}</label>
                    <textarea 
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>
                <button 
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1"
                >
                    {t.send}
                </button>
                </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;