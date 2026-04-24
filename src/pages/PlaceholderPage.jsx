import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionContainer from '../components/ui/SectionContainer';

const PlaceholderPage = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="pt-32 pb-20 min-h-[70vh] bg-slate-50 flex items-center justify-center">
      <SectionContainer>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{title}</h1>
          <p className="text-xl text-slate-600 mb-8">
            This page is currently under construction.
          </p>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default PlaceholderPage;
