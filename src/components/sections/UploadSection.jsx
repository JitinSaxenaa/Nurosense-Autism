import React from 'react';
import { UploadCloud, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UploadSection = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col glass-card p-8 sm:p-12 border border-secondary/20 bg-slate-800/80">
      <div className="mb-10">
        <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-secondary/20">
          <UploadCloud className="text-white w-7 h-7" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Upload & Analyze Report</h2>
        <p className="text-slate-400 text-lg md:text-xl">
          Have an existing clinical report or behavioral breakdown? Upload it directly to our secure AI engine for immediate cross-referencing and insight extraction.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-end mt-8">
        <div 
          className="cursor-pointer border-2 border-dashed border-slate-600 hover:border-secondary/50 rounded-2xl flex flex-col items-center justify-center py-16 px-6 transition-all duration-300 w-full text-center hover:bg-slate-700/50 group"
          onClick={() => navigate('/upload')}
        >
          <div className="w-20 h-20 bg-slate-700 text-slate-400 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300">
            <UploadCloud className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Go to Upload Portal</h3>
          <p className="text-slate-400 mb-8 max-w-sm">
            Launch our advanced Drag & Drop interface to scan your documents securely.
          </p>
          <button className="btn-secondary flex items-center gap-2 group-hover:scale-105">
            Open Portal
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadSection;
