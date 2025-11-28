import React, { useState } from 'react';
import { Lightbulb, Image as ImageIcon, Loader2, Download, Wand2 } from 'lucide-react';
import { getStrategicAdvice, generateJobImage } from '../services/geminiService';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface EmployerToolsProps {
  language: Language;
}

const EmployerTools: React.FC<EmployerToolsProps> = ({ language }) => {
  const t = TRANSLATIONS[language].employer_view;
  const [activeTab, setActiveTab] = useState<'strategy' | 'image'>('strategy');
  
  // Strategy State
  const [strategyPrompt, setStrategyPrompt] = useState('');
  const [strategyResult, setStrategyResult] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  // Image Gen State
  const [imagePrompt, setImagePrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aspectRatio, setAspectRatio] = useState('16:9');

  const handleStrategy = async () => {
    if (!strategyPrompt) return;
    setIsThinking(true);
    try {
      const result = await getStrategicAdvice(strategyPrompt);
      setStrategyResult(result);
    } catch (e) {
      setStrategyResult("Could not generate advice. Please try again.");
    } finally {
      setIsThinking(false);
    }
  };

  const handleImageGen = async () => {
    if (!imagePrompt) return;
    setIsGenerating(true);
    try {
      const result = await generateJobImage(imagePrompt, aspectRatio, '1K');
      setGeneratedImage(result);
    } catch (e) {
      alert("Failed to generate image.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-900 text-white p-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Wand2 className="text-orange-500" />
          {t.tools_title}
        </h2>
        <p className="text-slate-400 mt-2">{t.tools_subtitle}</p>
      </div>

      <div className="flex border-b border-slate-200">
        <button 
          onClick={() => setActiveTab('strategy')}
          className={`flex-1 py-4 text-center font-medium transition-colors ${activeTab === 'strategy' ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50' : 'text-slate-600 hover:bg-slate-50'}`}
        >
          <div className="flex items-center justify-center gap-2">
            <Lightbulb className="w-4 h-4" /> {t.tab_strategy}
          </div>
        </button>
        <button 
          onClick={() => setActiveTab('image')}
          className={`flex-1 py-4 text-center font-medium transition-colors ${activeTab === 'image' ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50' : 'text-slate-600 hover:bg-slate-50'}`}
        >
           <div className="flex items-center justify-center gap-2">
            <ImageIcon className="w-4 h-4" /> {t.tab_branding}
          </div>
        </button>
      </div>

      <div className="p-6 min-h-[400px]">
        {activeTab === 'strategy' && (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800">
              <strong>Info:</strong> {t.strat_hint}
            </div>
            <textarea
              value={strategyPrompt}
              onChange={(e) => setStrategyPrompt(e.target.value)}
              placeholder={t.strat_placeholder}
              className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none min-h-[120px]"
            />
            <button
              onClick={handleStrategy}
              disabled={isThinking || !strategyPrompt}
              className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-500 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isThinking ? <Loader2 className="animate-spin" /> : <Lightbulb className="w-4 h-4" />}
              {t.strat_btn}
            </button>

            {strategyResult && (
              <div className="mt-6 p-6 bg-slate-50 rounded-xl border border-slate-200 prose prose-slate max-w-none">
                <h3 className="text-lg font-bold mb-2">Analysis Result:</h3>
                <div className="whitespace-pre-wrap text-slate-700">{strategyResult}</div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'image' && (
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-xl text-sm text-orange-800">
              {t.img_hint}
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                value={imagePrompt}
                onChange={(e) => setImagePrompt(e.target.value)}
                placeholder={t.img_placeholder}
                className="flex-1 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <select 
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value)}
                className="p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none bg-white"
              >
                  <option value="16:9">Landscape (16:9)</option>
                  <option value="1:1">Square (1:1)</option>
                  <option value="9:16">Portrait (9:16)</option>
              </select>
            </div>
            <button
              onClick={handleImageGen}
              disabled={isGenerating || !imagePrompt}
              className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-500 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isGenerating ? <Loader2 className="animate-spin" /> : <Wand2 className="w-4 h-4" />}
              {t.img_btn}
            </button>

            {generatedImage && (
              <div className="mt-6 bg-slate-100 p-4 rounded-xl flex flex-col items-center">
                <img src={generatedImage} alt="Generated" className="rounded-lg shadow-lg max-h-[400px] w-auto" />
                <a 
                    href={generatedImage} 
                    download="acerto-generated.png"
                    className="mt-4 text-orange-600 font-bold flex items-center gap-2 hover:underline"
                >
                    <Download className="w-4 h-4" /> {t.img_download}
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerTools;