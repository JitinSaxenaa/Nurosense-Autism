import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SurveysSection = () => {
  const navigate = useNavigate();
  const surveys = [
    { id: "quick", title: "Quick Test", questions: 10, description: "A high-level screening to detect initial patterns." },
    { id: "standard", title: "Standard Test", questions: 20, description: "A balanced assessment covering core behavioral traits." },
    { id: "full", title: "Full Assessment", questions: 50, description: "Comprehensive analysis mapping to clinical markers." }
  ];

  const handleStart = (id) => {
    navigate(`/assessment/${id}`);
  };

  return (
    <div className="h-full flex flex-col glass-card p-8 sm:p-12 border border-primary/20 bg-slate-800/80">
      <div className="mb-10">
        <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
          <Activity className="text-white w-7 h-7" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Take Online Assessment</h2>
        <p className="text-slate-400 text-lg md:text-xl">
          Answer structured behavioral questions and get instant AI-based insights mapped to established methodologies.
        </p>
      </div>

      <div className="grid gap-6 mt-auto">
        {surveys.map((survey) => (
          <div key={survey.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl bg-slate-700/30 border border-slate-600/50 hover:bg-slate-700/60 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all duration-300 group cursor-pointer" onClick={() => handleStart(survey.id)}>
            <div className="mb-4 sm:mb-0">
              <h3 className="font-bold text-xl text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                {survey.title}
              </h3>
              <p className="text-sm text-slate-400 mb-2">{survey.description}</p>
              <div className="inline-flex gap-2 text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                <span>{survey.questions} Questions</span>
              </div>
            </div>
            <button className="btn-primary w-full sm:w-auto mt-4 sm:mt-0 flex-shrink-0 flex items-center justify-center gap-2 group-hover:scale-105">
              Start Test
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurveysSection;
