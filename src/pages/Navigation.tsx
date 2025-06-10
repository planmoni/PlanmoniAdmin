import React from 'react';
import { ExternalLink, Shield, Users, FileText, Briefcase, Mail, HelpCircle, Newspaper, Scale, Eye } from 'lucide-react';

const Navigation: React.FC = () => {
  const adminLinks = [
    { name: 'Admin Dashboard', path: '/admin', icon: <Shield className="w-5 h-5" />, description: 'Main admin panel (login: admin / planmoni2025)' },
    { name: 'Blog Manager', path: '/admin/blog', icon: <FileText className="w-5 h-5" />, description: 'Manage blog posts and articles' },
    { name: 'Careers Manager', path: '/admin/careers', icon: <Briefcase className="w-5 h-5" />, description: 'Manage job positions' },
    { name: 'Applications Manager', path: '/admin/applications', icon: <Users className="w-5 h-5" />, description: 'Review job applications' },
    { name: 'About Manager', path: '/admin/about', icon: <Users className="w-5 h-5" />, description: 'Edit company information' },
    { name: 'Press Kit Manager', path: '/admin/press-kit', icon: <Newspaper className="w-5 h-5" />, description: 'Manage media assets' },
    { name: 'Help Center Manager', path: '/admin/help-center', icon: <HelpCircle className="w-5 h-5" />, description: 'Manage FAQ and support' },
    { name: 'Contact Manager', path: '/admin/contact', icon: <Mail className="w-5 h-5" />, description: 'Manage contact information' },
    { name: 'Privacy Policy Manager', path: '/admin/privacy-policy', icon: <Scale className="w-5 h-5" />, description: 'Edit privacy policy' },
    { name: 'Terms Manager', path: '/admin/terms', icon: <Scale className="w-5 h-5" />, description: 'Edit terms of service' },
  ];

  const publicLinks = [
    { name: 'About Page', path: '/about', icon: <Users className="w-5 h-5" />, description: 'Company information and team' },
    { name: 'Blog', path: '/blog', icon: <FileText className="w-5 h-5" />, description: 'Financial tips and articles' },
    { name: 'Careers', path: '/careers', icon: <Briefcase className="w-5 h-5" />, description: 'Job openings and applications' },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5" />, description: 'Contact form and information' },
    { name: 'Help Center', path: '/help', icon: <HelpCircle className="w-5 h-5" />, description: 'FAQ and support articles' },
    { name: 'Press Kit', path: '/press', icon: <Newspaper className="w-5 h-5" />, description: 'Media assets and company info' },
    { name: 'Privacy Policy', path: '/privacy', icon: <Scale className="w-5 h-5" />, description: 'Privacy policy and data protection' },
    { name: 'Terms of Service', path: '/terms', icon: <Scale className="w-5 h-5" />, description: 'Terms and conditions' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/assets/AppLogo.png" alt="Planmoni" className="h-8 w-8" />
              <span className="text-xl font-bold text-[#1F3A8A]">Planmoni</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1F3A8A] to-[#1e3a8a] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Site Navigation
          </h1>
          <p className="text-xl text-blue-100">
            Quick access to all admin and public pages
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Admin Panel Links */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield className="h-4 w-4" />
                <span>Admin Panel</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Content Management System
              </h2>
              <p className="text-xl text-gray-600">
                Login credentials: <code className="bg-gray-100 px-2 py-1 rounded">admin</code> / <code className="bg-gray-100 px-2 py-1 rounded">planmoni2025</code>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adminLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-red-300 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-200 transition-colors">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Public Pages Links */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Eye className="h-4 w-4" />
                <span>Public Pages</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Website Pages
              </h2>
              <p className="text-xl text-gray-600">
                All public-facing pages that visitors can access
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-16 bg-gradient-to-br from-gray-100 to-blue-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              How to Use
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-red-600 mr-2" />
                  Admin Panel
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Click any admin link to open in a new tab</li>
                  <li>• Login with: <strong>admin</strong> / <strong>planmoni2025</strong></li>
                  <li>• Manage all website content from the admin dashboard</li>
                  <li>• Changes are saved to localStorage and persist</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-5 h-5 text-blue-600 mr-2" />
                  Public Pages
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Click any public link to view the page</li>
                  <li>• Content reflects what you manage in the admin</li>
                  <li>• All pages are fully functional and responsive</li>
                  <li>• Job applications and contact forms work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;