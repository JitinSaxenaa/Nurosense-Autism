import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  ...props 
}) => {
  const baseClasses = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5",
    secondary: "bg-secondary text-white shadow-md shadow-secondary/30 hover:shadow-lg hover:shadow-secondary/40 hover:-translate-y-0.5",
    outline: "border-2 border-primary text-primary hover:bg-primary/5",
    ghost: "text-slate-600 hover:text-primary hover:bg-slate-100"
  };

  return (
    <button 
      type={type} 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
