import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import BlogManager from './components/BlogManager';
import CareersManager from './components/CareersManager';
import ApplicationsManager from './components/ApplicationsManager';
import PressKitManager from './components/PressKitManager';
import AboutManager from './components/AboutManager';
import HelpCenterManager from './components/HelpCenterManager';
import ContactManager from './components/ContactManager';
import PrivacyPolicyManager from './components/PrivacyPolicyManager';
import TermsManager from './components/TermsManager';
import AdminLayout from './components/AdminLayout';

const AdminApp: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const token = localStorage.getItem('admin_token');
    if (token) {
      // In a real app, you'd validate the token with your backend
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_token', 'demo_token_' + Date.now());
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_token');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1F3A8A] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <Router>
      <AdminLayout onLogout={handleLogout}>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/blog" element={<BlogManager />} />
          <Route path="/admin/careers" element={<CareersManager />} />
          <Route path="/admin/applications" element={<ApplicationsManager />} />
          <Route path="/admin/press-kit" element={<PressKitManager />} />
          <Route path="/admin/about" element={<AboutManager />} />
          <Route path="/admin/help-center" element={<HelpCenterManager />} />
          <Route path="/admin/contact" element={<ContactManager />} />
          <Route path="/admin/privacy-policy" element={<PrivacyPolicyManager />} />
          <Route path="/admin/terms" element={<TermsManager />} />
          <Route path="*" element={<Navigate to="/admin\" replace />} />
        </Routes>
      </AdminLayout>
    </Router>
  );
};

export default AdminApp;