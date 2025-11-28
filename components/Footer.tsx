import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold text-white tracking-tighter">ACERTO<span className="text-orange-500">.</span></span>
            <p className="text-sm mt-2">© {new Date().getFullYear()} Acerto Personeelsdiensten.</p>
          </div>
          <div className="flex space-x-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
            <a href="#" className="hover:text-white transition-colors">NBBU Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;