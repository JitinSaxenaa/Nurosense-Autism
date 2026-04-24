import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Globe, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="bg-primary/20 p-2 rounded-xl">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">
                Nurosense <span className="text-primary font-black">Autism</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Empowering early detection and risk assessment of autism spectrum traits using scientifically inspired behavioral tools and AI analytics.
            </p>
            <div className="flex gap-4">
              {[Globe, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Screening', 'Reports'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-slate-400 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="flex flex-col gap-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Contact Support'].map((item) => (
                <li key={item}>
                  <Link to="/contact" className="text-slate-400 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-500 text-sm mb-1">
              &copy; {new Date().getFullYear()} Nurosense Autism. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs mt-2 uppercase tracking-wide font-medium bg-slate-800/50 inline-block px-3 py-1 rounded-full border border-slate-700/50">
              Disclaimer: This tool is for early screening purposes only and not a medical diagnosis.
            </p>
          </div>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> for Healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
