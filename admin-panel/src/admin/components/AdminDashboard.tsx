import React from 'react';
import { 
  FileText, 
  Briefcase, 
  Newspaper, 
  Users, 
  HelpCircle, 
  Mail, 
  Shield, 
  Scale,
  TrendingUp,
  Eye,
  Edit,
  Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const stats = [
    { name: 'Blog Posts', value: '12', icon: FileText, color: 'bg-blue-500' },
    { name: 'Open Positions', value: '6', icon: Briefcase, color: 'bg-green-500' },
    { name: 'Press Releases', value: '4', icon: Newspaper, color: 'bg-purple-500' },
    { name: 'Help Articles', value: '24', icon: HelpCircle, color: 'bg-orange-500' },
  ];

  const quickActions = [
    { name: 'Create Blog Post', href: '/admin/blog', icon: Plus, color: 'bg-blue-500' },
    { name: 'Add Job Opening', href: '/admin/careers', icon: Plus, color: 'bg-green-500' },
    { name: 'Update About Page', href: '/admin/about', icon: Edit, color: 'bg-purple-500' },
    { name: 'Manage Help Center', href: '/admin/help-center', icon: Edit, color: 'bg-orange-500' },
  ];

  const recentActivity = [
    { action: 'Blog post "Financial Discipline Tips" published', time: '2 hours ago', type: 'blog' },
    { action: 'New job opening "Senior Developer" added', time: '1 day ago', type: 'career' },
    { action: 'Privacy Policy updated', time: '3 days ago', type: 'legal' },
    { action: 'Help Center FAQ updated', time: '1 week ago', type: 'help' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#1F3A8A] to-[#1e3a8a] rounded-3xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome to Planmoni Admin</h1>
        <p className="text-blue-100 text-lg">
          Manage all aspects of your website content from this central dashboard.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link
                key={index}
                to={action.href}
                className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all group"
              >
                <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-900">{action.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Content Management Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Content Sections */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Content Sections</h2>
          <div className="space-y-4">
            {[
              { name: 'Blog Management', href: '/admin/blog', icon: FileText, desc: 'Create and edit blog posts' },
              { name: 'Careers', href: '/admin/careers', icon: Briefcase, desc: 'Manage job openings' },
              { name: 'Press Kit', href: '/admin/press-kit', icon: Newspaper, desc: 'Update press materials' },
              { name: 'About Page', href: '/admin/about', icon: Users, desc: 'Edit company information' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  to={item.href}
                  className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#1F3A8A] transition-colors">
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Support & Legal */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Support & Legal</h2>
          <div className="space-y-4">
            {[
              { name: 'Help Center', href: '/admin/help-center', icon: HelpCircle, desc: 'Manage FAQ and support articles' },
              { name: 'Contact Page', href: '/admin/contact', icon: Mail, desc: 'Update contact information' },
              { name: 'Privacy Policy', href: '/admin/privacy-policy', icon: Shield, desc: 'Edit privacy policy' },
              { name: 'Terms of Service', href: '/admin/terms', icon: Scale, desc: 'Update terms and conditions' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  to={item.href}
                  className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#1F3A8A] transition-colors">
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-2 h-2 bg-[#1F3A8A] rounded-full"></div>
              <div className="flex-1">
                <p className="text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-600">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;