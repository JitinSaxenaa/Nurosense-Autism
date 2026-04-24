import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Disclaimer from './components/sections/Disclaimer';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import AssessmentPage from './pages/AssessmentPage';
import UploadPage from './pages/UploadPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/assessment/:type" element={<AssessmentPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
