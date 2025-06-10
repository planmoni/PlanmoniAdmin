import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminApp from './admin/AdminApp';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import HelpCenter from './pages/HelpCenter';
import PressKit from './pages/PressKit';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Navigation from './pages/Navigation';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Navigation Page */}
        <Route path="/nav" element={<Navigation />} />
        <Route path="/navigation" element={<Navigation />} />
        
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminApp />} />
        
        {/* Public Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/press" element={<PressKit />} />
        <Route path="/press-kit" element={<PressKit />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        
        {/* Default redirect to navigation */}
        <Route path="/" element={<Navigate to="/nav" replace />} />
        <Route path="*" element={<Navigate to="/nav" replace />} />
      </Routes>
    </Router>
  );
};

export default App;