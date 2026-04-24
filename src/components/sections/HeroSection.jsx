import React, { useState, useEffect } from 'react';
import { FileText, Activity, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative pt-[140px] pb-32 md:pt-[180px] md:pb-40 overflow-hidden flex items-center min-h-screen bg-slate-950">
      
      {/* Animated Deep Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: mousePos.x * 2, 
            y: mousePos.y * 2,
            scale: [1, 1.05, 1]
          }}
          transition={{ scale: { repeat: Infinity, duration: 10, ease: "linear" } }}
          className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[130px]" 
        />
        <motion.div 
          animate={{ x: -mousePos.x * 2, y: -mousePos.y * 2 }}
          className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-secondary/15 blur-[120px]" 
        />
        <motion.div 
          style={{ y: yParallax }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-[140px]" 
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Floating UI Elements (Optional SaaS Touch) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0, y: [0, -15, 0] }} 
          transition={{ duration: 1, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
          className="hidden lg:block absolute left-4 top-1/4 glass-card p-4 mx-2 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(124,58,237,0.15)] bg-slate-800/60 backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-sm">78%</div>
            <div>
              <p className="text-white text-sm font-bold">High Risk</p>
              <p className="text-slate-400 text-xs">Score detected</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0, y: [0, 15, 0] }} 
          transition={{ duration: 1, delay: 0.5, y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
          className="hidden lg:block absolute right-4 top-1/3 glass-card p-4 mx-2 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(14,165,233,0.15)] bg-slate-800/60 backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center"><Activity size={20}/></div>
            <div>
              <p className="text-white text-sm font-bold">Analysis Ready</p>
              <p className="text-slate-400 text-xs">Insights generated</p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <div className="space-y-8 max-w-4xl mx-auto flex flex-col items-center">
            
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary-200 font-medium text-sm backdrop-blur-sm shadow-[0_0_15px_rgba(124,58,237,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-blue-100 font-semibold tracking-wide uppercase text-xs">Next-Gen Intelligence</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">Autism Intelligence</span> Platform
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Advanced screening through behavioral analysis and AI-driven report interpretation for early detection.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 pt-8 justify-center items-center w-full">
              <Link to="#surveys" onClick={(e) => { e.preventDefault(); document.getElementById('surveys')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 text-lg px-10 py-4 shadow-[0_0_30px_rgba(124,58,237,0.4)]"
                >
                  <Activity size={22} /> Start Assessment
                </motion.button>
              </Link>
              <Link to="/upload" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }} 
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-outline flex items-center justify-center gap-2 text-lg px-10 py-4"
                >
                  <FileText size={22} /> Upload Report
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => document.getElementById('interactive-tools')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-slate-400 text-sm font-medium tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-primary"
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
