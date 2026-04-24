import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle, Info, Activity, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const ResultsPreview = ({ 
  risk = 0.78, 
  level = "High", 
  confidence = 0.82,
  model_metrics = {
    accuracy: 0.87,
    f1_score: 0.84,
    precision: 0.85,
    recall: 0.83
  },
  breakdown = {
    social_interaction: 0.3,
    communication: 0.5,
    repetitive_behavior: 0.8
  }, 
  explanation = "Detected behavioral patterns such as low eye contact and delayed speech.", 
  recommendations = [
    "Speech therapy",
    "Behavioral exercises",
    "Consult specialist"
  ]
}) => {

  const riskScore = Math.round(risk * 100);
  const confidenceScore = Math.round(confidence * 100);
  
  const isHighRisk = riskScore > 60;
  const isMediumRisk = riskScore > 35 && riskScore <= 60;
  
  let colorClass = "text-emerald-500";
  let bgClass = "bg-emerald-500/10";
  if (isHighRisk) { colorClass = "text-rose-500"; bgClass = "bg-rose-500/10"; }
  else if (isMediumRisk) { colorClass = "text-orange-500"; bgClass = "bg-orange-500/10"; }

  const [animatedRisk, setAnimatedRisk] = useState(0);

  useEffect(() => {
    // Count up animation for Risk Score
    const timer = setTimeout(() => {
      setAnimatedRisk(riskScore);
    }, 300);
    return () => clearTimeout(timer);
  }, [riskScore]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col gap-6"
    >
      
      {/* Top Row: Risk & Confidence */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Risk Card */}
        <motion.div variants={itemVariants} className="glass-card p-8 border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-white/20 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <h3 className="text-slate-400 font-semibold uppercase tracking-wider text-sm mb-6">Autism Risk Level</h3>
          
          <div className="relative w-48 h-48 flex items-center justify-center mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" className="stroke-slate-800" strokeWidth="8" fill="none" />
              <motion.circle 
                cx="50" cy="50" r="45" 
                className={`stroke-current ${colorClass} drop-shadow-[0_0_10px_rgba(currentcolor,0.5)]`} 
                strokeWidth="8" 
                fill="none" 
                strokeDasharray="283" 
                initial={{ strokeDashoffset: 283 }}
                animate={{ strokeDashoffset: 283 - (283 * animatedRisk) / 100 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black text-white">{animatedRisk}%</span>
            </div>
          </div>
          
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${bgClass} border border-current/20`}>
            <span className={`text-lg font-bold ${colorClass}`}>{level} Risk Detected</span>
          </div>
        </motion.div>

        {/* Confidence & Explanation */}
        <div className="flex flex-col gap-6">
          <motion.div variants={itemVariants} className="glass-card p-6 border border-white/10 flex flex-col justify-center h-1/3">
            <div className="flex justify-between items-end mb-3">
              <h3 className="text-slate-400 font-semibold uppercase tracking-wider text-sm">Model Confidence</h3>
              <span className="text-2xl font-bold text-white">{confidenceScore}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden shadow-inner">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-primary h-full rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${confidenceScore}%` }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              >
                <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-sm mix-blend-overlay animate-pulse" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-6 border border-white/10 flex-1 flex flex-col">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Info className="text-secondary" size={16}/> AI Explanation
            </h4>
            <p className="text-slate-300 leading-relaxed text-lg font-medium">
              "{explanation}"
            </p>
          </motion.div>
        </div>
      </div>

      {/* Middle Row: Breakdown & Recommendations */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Behavioral Breakdown Chart */}
        <motion.div variants={itemVariants} className="glass-card p-6 border border-white/10">
          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Activity className="text-primary" size={16}/> Behavioral Metrics
          </h4>
          <div className="space-y-6">
            {Object.entries(breakdown).map(([key, val], index) => {
              const label = key.replace(/([A-Z_])/g, ' $1').replace(/_/g, ' ').replace(/^./, str => str.toUpperCase());
              const percent = Math.round(val * 100);
              
              let barColor = "from-emerald-400 to-emerald-600";
              if(percent > 40 && percent <= 70) barColor = "from-orange-400 to-orange-600";
              if(percent > 70) barColor = "from-rose-400 to-rose-600";

              return (
                <div key={key}>
                  <div className="flex justify-between text-sm mb-2 text-slate-300 font-medium">
                    <span>{label}</span>
                    <span>{percent}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5">
                    <motion.div 
                      className={`bg-gradient-to-r ${barColor} h-2.5 rounded-full shadow-[0_0_10px_rgba(currentcolor,0.5)]`} 
                      initial={{ width: 0 }}
                      animate={{ width: `${percent}%` }}
                      transition={{ duration: 1, delay: 0.8 + (index * 0.2), ease: "easeOut" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div variants={itemVariants} className="glass-card p-6 border border-white/10">
          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5">Recommended Actions</h4>
          <ul className="space-y-4">
            {recommendations.map((rec, index) => (
              <motion.li 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + (index * 0.15) }}
                className="flex items-start gap-4 bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800/80 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 shadow-inner">
                  <CheckCircle size={16} />
                </div>
                <span className="text-slate-200 font-medium mt-1">{rec}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Global Model Performance */}
      <motion.div variants={itemVariants} className="glass-card p-6 border border-primary/20 bg-primary/5 mt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
            <BrainCircuit size={18} /> Global Model Performance
          </h4>
          <p className="text-xs text-slate-500 italic">Metrics represent model performance on validation dataset.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Accuracy", val: model_metrics.accuracy },
            { label: "F1 Score", val: model_metrics.f1_score },
            { label: "Precision", val: model_metrics.precision },
            { label: "Recall", val: model_metrics.recall }
          ].map((metric, i) => (
            <div key={metric.label} className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl flex flex-col items-center justify-center">
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">{metric.label}</span>
              <span className="text-2xl font-bold text-white">{(metric.val * 100).toFixed(1)}%</span>
            </div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
};

export default ResultsPreview;
