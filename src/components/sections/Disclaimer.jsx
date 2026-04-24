import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="bg-slate-950 text-slate-400 py-3 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col md:flex-row items-center justify-center gap-3">
        <div className="text-yellow-500/80 shrink-0">
          <AlertTriangle size={18} />
        </div>
        <p className="font-medium text-xs md:text-sm tracking-wide">
          <strong className="text-slate-300">Disclaimer:</strong> This tool provides early screening assistance and is not a medical diagnosis.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
