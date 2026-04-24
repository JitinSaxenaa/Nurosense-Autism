import React from 'react';

const SectionContainer = ({ children, className = '', id, background = 'default' }) => {
  const backgrounds = {
    default: 'bg-white',
    gray: 'bg-background',
    primary: 'bg-primary/5',
  };

  return (
    <section id={id} className={`py-20 md:py-28 ${backgrounds[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
