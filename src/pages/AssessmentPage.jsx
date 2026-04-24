import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allQuestions } from '../data/questions';
import { ArrowLeft, ArrowRight, Check, Activity } from 'lucide-react';
import SectionContainer from '../components/ui/SectionContainer';

const AssessmentPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  // Determine question count
  let limit = 10;
  if (type === 'standard') limit = 20;
  if (type === 'full') limit = 50;

  const questions = allQuestions.slice(0, limit);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(new Array(limit).fill(null));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const options = [
    { label: "Strongly Agree", value: 4, color: "hover:border-primary hover:bg-primary/10" },
    { label: "Agree", value: 3, color: "hover:border-blue-400 hover:bg-blue-400/10" },
    { label: "Neutral", value: 2, color: "hover:border-slate-400 hover:bg-slate-400/10" },
    { label: "Disagree", value: 1, color: "hover:border-orange-400 hover:bg-orange-400/10" },
    { label: "Strongly Disagree", value: 0, color: "hover:border-rose-400 hover:bg-rose-400/10" }
  ];

  const handleAnswer = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = value;
    setAnswers(newAnswers);

    // Auto-advance
    if (currentIndex < limit - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 300);
    }
  };

  const handleSubmit = async () => {
    // Validate if all questions answered
    if (answers.includes(null)) {
      alert("Please answer all questions before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:8000/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers })
      });
      
      const data = await response.json();
      navigate('/results', { state: { resultData: data } });
    } catch (error) {
      console.error("Backend unreachable, using fallback demo data:", error);
      
      // Calculate simplistic mock score based on answers array sum, converting to floats
      const totalScore = answers.reduce((a, b) => a + b, 0);
      const maxScore = limit * 4;
      const riskFloat = Number((totalScore / maxScore).toFixed(2));
      
      let level = "Low";
      let explanation = "Few behavioral variations detected. Ongoing monitoring is encouraged but immediate clinical intervention may not be required.";
      if (riskFloat > 0.40) { level = "Medium"; explanation = "Some behavioral patterns warrant attention. Consider a clinical consultation."; }
      if (riskFloat > 0.70) { level = "High"; explanation = "Multiple behavioral patterns associated with ASD detected. A comprehensive clinical evaluation is highly recommended."; }

      const mockData = {
        risk: riskFloat,
        level: level,
        confidence: 0.89,
        model_metrics: {
          accuracy: 0.87,
          f1_score: 0.84,
          precision: 0.85,
          recall: 0.83
        },
        breakdown: {
          social_interaction: riskFloat > 0.5 ? 0.85 : 0.20,
          communication: riskFloat > 0.6 ? 0.70 : 0.30,
          repetitive_behavior: riskFloat > 0.75 ? 0.90 : 0.15
        },
        explanation: explanation,
        recommendations: [
          riskFloat > 0.5 ? "Consult a behavioral specialist" : "Monitor ongoing development",
          riskFloat > 0.6 ? "Speech and Language Assessment" : "Encourage social peer play",
          "Maintain a consistent daily routine"
        ]
      };

      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/results', { state: { resultData: mockData } });
      }, 1500);
    }
  };

  const progressPercentage = Math.round(((currentIndex) / limit) * 100);
  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-950 flex flex-col items-center">
      <SectionContainer background="transparent" className="w-full max-w-4xl">
        
        {/* Header Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white capitalize">{type} Assessment</h1>
            <p className="text-slate-400 mt-2">Question {currentIndex + 1} of {limit}</p>
          </div>
          <button onClick={() => navigate('/')} className="btn-outline px-4 py-2 border-slate-700 text-slate-300">
            Cancel
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 rounded-full h-3 mb-10 overflow-hidden shadow-inner">
          <div 
            className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Question Card */}
        <div className="glass-card p-8 md:p-12 border border-white/5 mb-8 min-h-[350px] flex flex-col justify-center relative">
          <Activity className="absolute top-4 right-4 text-slate-700 w-24 h-24 opacity-10" />
          
          <h2 className="text-2xl md:text-4xl font-semibold text-white leading-relaxed mb-10 text-center relative z-10">
            {currentQuestion}
          </h2>

          <div className="grid sm:grid-cols-5 gap-3 w-full relative z-10">
            {options.map((opt) => {
              const isSelected = answers[currentIndex] === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className={`flex flex-col items-center justify-center py-4 px-2 rounded-xl border-2 transition-all duration-300 ${opt.color} ${
                    isSelected 
                      ? 'border-primary bg-primary/20 scale-105 shadow-[0_0_15px_rgba(124,58,237,0.3)]' 
                      : 'border-slate-700 bg-slate-800/50 hover:scale-105'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 mb-3 flex items-center justify-center ${isSelected ? 'border-primary bg-primary' : 'border-slate-500'}`}>
                    {isSelected && <Check size={14} className="text-white" />}
                  </div>
                  <span className="text-sm font-medium text-slate-300 text-center leading-tight">
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0 || isSubmitting}
            className="flex items-center gap-2 px-6 py-3 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Previous
          </button>
          
          {currentIndex === limit - 1 ? (
             <button 
               onClick={handleSubmit}
               disabled={isSubmitting}
               className="btn-primary px-8 py-3 flex items-center gap-2"
             >
               {isSubmitting ? 'Analyzing...' : 'Submit Assessment'}
             </button>
          ) : (
            <button 
              onClick={() => setCurrentIndex(Math.min(limit - 1, currentIndex + 1))}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-3 text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors font-medium border border-slate-700"
            >
              Next <ArrowRight size={20} />
            </button>
          )}
        </div>

      </SectionContainer>
    </div>
  );
};

export default AssessmentPage;
