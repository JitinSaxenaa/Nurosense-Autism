import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import SurveysSection from '../components/sections/SurveysSection';
import UploadSection from '../components/sections/UploadSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ResultsPreview from '../components/sections/ResultsPreview';

const HomePage = () => {
  return (
    <main className="bg-slate-900 min-h-screen">
      <HeroSection />
      
      {/* Interactive Main Sections */}
      <section id="interactive-tools" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div id="surveys">
              <SurveysSection />
            </div>
            <div id="upload">
              <UploadSection />
            </div>
          </div>
        </div>
      </section>

      {/* Results Preview Showcase Section */}
      <section id="dashboard" className="py-20 md:py-28 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block border border-secondary/30 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Platform Preview
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Interactive AI Dashboard</h2>
            <p className="text-xl text-slate-400">
              Get immediate, explainable results after completing an assessment or uploading a report. Here's a preview of the insights you'll receive.
            </p>
          </div>
          
          <div className="mx-auto max-w-5xl">
            <ResultsPreview />
          </div>
        </div>
      </section>

      <HowItWorksSection />
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
