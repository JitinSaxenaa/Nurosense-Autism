import React from 'react';
import { MousePointerClick, Cpu, ActivitySquare } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <MousePointerClick className="w-8 h-8 font-bold" />,
      title: "1. Choose Input Method",
      description: "Choose assessment or upload report directly to the platform."
    },
    {
      icon: <Cpu className="w-8 h-8 font-bold" />,
      title: "2. AI Processing",
      description: "Our secure platform utilizes advanced machine learning algorithms to identify core autism markers."
    },
    {
      icon: <ActivitySquare className="w-8 h-8 font-bold" />,
      title: "3. Detailed Insights",
      description: "Receive a comprehensive risk assessment score with explainable insights immediately."
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">How It Works</h2>
          <p className="text-xl text-slate-400">
            A seamless 3-step process designed to provide rapid, reliable, and secure behavioral analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting Line - hidden on mobile */}
          <div className="hidden md:block absolute top-12 left-[15%] w-[70%] h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-secondary mb-8 group-hover:-translate-y-2 group-hover:border-secondary transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
