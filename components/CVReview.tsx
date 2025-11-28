import React, { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { analyzeImage } from '../services/geminiService';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface CVReviewProps {
  language: Language;
}

const CVReview: React.FC<CVReviewProps> = ({ language }) => {
  const t = TRANSLATIONS[language].candidate_view;
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selected);
      setAnalysis('');
    }
  };

  const handleAnalyze = async () => {
    if (!preview) return;
    setIsAnalyzing(true);

    try {
      const base64Data = preview.split(',')[1];
      const mimeType = preview.split(';')[0].split(':')[1];
      
      const langName = language === Language.NL ? "Dutch" : language === Language.PT ? "Portuguese" : "English";
      const prompt = `
        Analyze this image. It is likely a CV, a certificate, or a photo of a workplace/skill.
        Response language: ${langName}.
        If it's a CV: Provide 3 quick tips to improve it for Dutch employers.
        If it's a Certificate: Validate what role this is good for in the Netherlands.
        If it's a generic photo: Describe the skills shown.
        Keep it encouraging and professional.
      `;

      const result = await analyzeImage(base64Data, mimeType, prompt);
      setAnalysis(result);
    } catch (error) {
      setAnalysis("Sorry, could not analyze the image. Please try a different one.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl overflow-hidden relative">
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
            <div>
                <h2 className="text-3xl font-bold mb-2">{t.cv_title}</h2>
                <p className="text-blue-100 max-w-md">{t.cv_desc}</p>
            </div>
            <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
                <FileText className="w-8 h-8 text-blue-200" />
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Upload Area */}
            <div className="space-y-4">
                <div 
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl h-64 flex flex-col items-center justify-center cursor-pointer transition-all ${file ? 'border-green-400 bg-green-400/10' : 'border-blue-300/30 hover:border-white hover:bg-white/5'}`}
                >
                    {preview ? (
                        <img src={preview} alt="Preview" className="h-full w-full object-cover rounded-xl opacity-80" />
                    ) : (
                        <>
                            <Upload className="w-12 h-12 text-blue-200 mb-4" />
                            <span className="font-medium text-blue-100">{t.upload_hint}</span>
                            <span className="text-xs text-blue-300 mt-2">JPG, PNG supported</span>
                        </>
                    )}
                </div>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleFileChange}
                />
                
                <button
                    onClick={handleAnalyze}
                    disabled={!file || isAnalyzing}
                    className="w-full bg-white text-blue-900 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                    {isAnalyzing ? <Loader2 className="animate-spin" /> : <CheckCircle className="w-5 h-5" />}
                    {t.analyze_btn}
                </button>
            </div>

            {/* Results Area */}
            <div className="bg-black/20 rounded-2xl p-6 min-h-[250px] border border-white/10">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-400" />
                    {t.feedback_title}
                </h3>
                {analysis ? (
                    <div className="prose prose-invert prose-sm">
                        <div className="whitespace-pre-wrap">{analysis}</div>
                    </div>
                ) : (
                    <div className="h-full flex items-center justify-center text-blue-300/50 italic text-center">
                        ...
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default CVReview;