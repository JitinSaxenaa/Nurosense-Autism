import React from 'react';

const Card = ({ children, className = '', hoverEffect = false, ...props }) => {
  return (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100/50 
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20' : ''} 
        ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
