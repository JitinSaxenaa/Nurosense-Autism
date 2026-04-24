import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ResultsPreview from '../components/sections/ResultsPreview';
import SectionContainer from '../components/ui/SectionContainer';
import { ArrowLeft, Save, Share2 } from 'lucide-react';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resultData } = location.state || {};

  useEffect(() => {
    if (!resultData) {
      // If no data is passed (e.g., direct navigation), redirect back home
      navigate('/');
    }
  }, [resultData, navigate]);

  if (!resultData) return null;

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-900">
      <SectionContainer background="transparent" id="results">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <div>
              <button 
                onClick={() => navigate('/')} 
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4"
              >
                <ArrowLeft size={18} /> Back to Dashboard
              </button>
              <h1 className="text-3xl md:text-5xl font-bold text-white">Analysis Report</h1>
              <p className="text-slate-400 mt-2 text-lg">AI generated behavioral insights based on your input.</p>
            </div>
            
            <div className="flex gap-3 mt-4 md:mt-0">
              <button className="btn-outline flex items-center gap-2 py-2 px-4 shadow-none">
                <Share2 size={18} /> Share
              </button>
              <button className="btn-primary flex items-center gap-2 py-2 px-4 shadow-none">
                <Save size={18} /> Save PDF
              </button>
            </div>
          </div>

          {/* Results Display */}
          <ResultsPreview {...resultData} />
          
          <div className="mt-8 text-center bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-slate-400 text-sm">
            This dashboard displays dynamic data simulated by the AI. Connect it to your actual `/predict` endpoint to render live analysis.
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default ResultsPage;
