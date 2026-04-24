import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import { ShieldAlert, BrainCircuit, Activity, LineChart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-white" />,
      title: "AI-Powered Prediction",
      description: "Leverage state-of-the-art predictive models trained on diverse clinical datasets for high accuracy context mapping.",
      color: "from-primary to-purple-600"
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-white" />,
      title: "Explainable AI Insights",
      description: "Transparent AI decisions mapping predictions back to specific questionnaire answers or report markers.",
      color: "from-secondary to-blue-600"
    },
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      title: "Behavioral Analytics",
      description: "In-depth breakdown of cognitive and social behavioral trait clusters mapped against baseline metrics.",
      color: "from-accent to-emerald-600"
    },
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: "Progress Tracking",
      description: "Monitor changes and developmental milestones securely over time via your private dashboard.",
      color: "from-orange-400 to-rose-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Cutting-Edge Features</h2>
          <p className="text-xl text-slate-400">
            Engineered to support individuals, parents, and practitioners with powerful intelligence tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
