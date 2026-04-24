import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrainCircuit, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Dashboard', id: 'dashboard' },
    { name: 'Features', id: 'features' },
    { name: 'Workflow', id: 'workflow' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Sticky styling
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy behavior only on HomePage
      if (location.pathname === '/') {
        const sections = navLinks.map(link => document.getElementById(link.id));
        const scrollPosition = window.scrollY + 100; // offset for navbar height

        let currentActive = 'home';
        sections.forEach(section => {
          if (section && section.offsetTop <= scrollPosition) {
            currentActive = section.id;
          }
        });
        setActiveSection(currentActive);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    // If not on the homepage, first we'd navigate to home.
    // Assuming mostly using SPA on home, we just scroll if element exists.
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-[40px]">
          
          <Link to="/" onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl group-hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all">
              <BrainCircuit className="w-7 h-7 text-white" />
            </div>
            <span className="font-extrabold text-2xl text-white tracking-tight drop-shadow-[0_0_8px_rgba(124,58,237,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.6)] transition-all">
              Nurosense <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Autism</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {location.pathname === '/' && (
              <div className="flex gap-8">
                {navLinks.map((link) => (
                  <button 
                    key={link.id} 
                    onClick={() => scrollToSection(link.id)}
                    className={`relative font-medium text-sm transition-all hover:text-white ${
                      activeSection === link.id
                        ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' 
                        : 'text-slate-400'
                    }`}
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
                    )}
                  </button>
                ))}
              </div>
            )}
            
            <button 
              onClick={() => location.pathname !== '/' ? window.location.href = '/#surveys' : scrollToSection('surveys')}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-full font-semibold shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Screening
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-primary transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-white/10 flex flex-col overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[400px] py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="px-6 flex flex-col gap-2">
          {location.pathname === '/' && navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => scrollToSection(link.id)}
              className={`p-3 rounded-lg font-medium transition-colors text-left ${
                activeSection === link.id 
                  ? 'bg-primary/20 text-white border-l-4 border-primary' 
                  : 'text-slate-400 hover:bg-slate-800 border-l-4 border-transparent'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => location.pathname !== '/' ? window.location.href = '/#surveys' : scrollToSection('surveys')} 
            className="w-full mt-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            Start Screening
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
