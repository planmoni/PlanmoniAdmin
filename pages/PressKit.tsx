import React from 'react';
import { ArrowLeft, Download, Image, FileText, Users, Award, TrendingUp, Calendar, ExternalLink } from 'lucide-react';

const PressKit: React.FC = () => {
  const assets = [
    {
      category: "Logos",
      items: [
        { name: "Primary Logo (PNG)", size: "2.1 MB", format: "PNG", description: "High-resolution primary logo with transparent background" },
        { name: "Primary Logo (SVG)", size: "45 KB", format: "SVG", description: "Vector format for scalable applications" },
        { name: "Logo Dark Mode", size: "1.8 MB", format: "PNG", description: "Logo optimized for dark backgrounds" },
        { name: "Logo Horizontal", size: "2.3 MB", format: "PNG", description: "Horizontal layout version of the logo" },
        { name: "Icon Only", size: "890 KB", format: "PNG", description: "Planmoni icon without text" }
      ]
    },
    {
      category: "Screenshots",
      items: [
        { name: "App Interface - iOS", size: "3.2 MB", format: "PNG", description: "Main app interface on iOS devices" },
        { name: "App Interface - Android", size: "3.1 MB", format: "PNG", description: "Main app interface on Android devices" },
        { name: "Payout Calculator", size: "2.8 MB", format: "PNG", description: "Screenshot of the payout calculator feature" },
        { name: "Vault Dashboard", size: "2.9 MB", format: "PNG", description: "User dashboard showing vault and payouts" },
        { name: "Security Features", size: "2.7 MB", format: "PNG", description: "Security and authentication screens" }
      ]
    },
    {
      category: "Marketing Materials",
      items: [
        { name: "Product Brochure", size: "5.4 MB", format: "PDF", description: "Comprehensive product overview brochure" },
        { name: "Feature Infographic", size: "4.2 MB", format: "PNG", description: "Visual representation of key features" },
        { name: "User Journey Map", size: "3.8 MB", format: "PDF", description: "Visual guide to the user experience" },
        { name: "Brand Guidelines", size: "8.1 MB", format: "PDF", description: "Complete brand and style guidelines" }
      ]
    }
  ];

  const companyFacts = [
    { label: "Founded", value: "2023" },
    { label: "Headquarters", value: "Lagos, Nigeria" },
    { label: "Team Size", value: "25+ employees" },
    { label: "Active Users", value: "15,000+" },
    { label: "Monthly Payouts", value: "₦2.8M+" },
    { label: "Funding", value: "Seed Stage" },
    { label: "App Rating", value: "4.9/5 stars" },
    { label: "Uptime", value: "99.9%" }
  ];

  const keyMessages = [
    {
      title: "Financial Discipline Through Technology",
      description: "Planmoni helps users develop better financial habits by creating structured access to their own money, reducing impulsive spending and promoting long-term financial health."
    },
    {
      title: "Behavioral Design Approach",
      description: "Unlike traditional budgeting apps that rely on willpower, Planmoni uses behavioral economics principles to create natural barriers to impulsive financial decisions."
    },
    {
      title: "Security-First Platform",
      description: "Built with bank-level security, Planmoni ensures user funds are protected with 256-bit encryption, multi-factor authentication, and secure vault storage."
    },
    {
      title: "Flexible Financial Planning",
      description: "Users can create custom payout schedules that match their lifestyle, from weekly allowances to monthly salaries, with emergency access when truly needed."
    }
  ];

  const recentNews = [
    {
      date: "January 15, 2025",
      title: "Planmoni Reaches 15,000 Active Users Milestone",
      outlet: "TechCabal",
      link: "#"
    },
    {
      date: "December 20, 2024",
      title: "How Nigerian Fintech Planmoni is Changing Financial Habits",
      outlet: "Nairametrics",
      link: "#"
    },
    {
      date: "November 30, 2024",
      title: "Planmoni Raises Seed Funding to Expand Financial Planning Platform",
      outlet: "Techpoint Africa",
      link: "#"
    },
    {
      date: "October 15, 2024",
      title: "The Psychology Behind Planmoni's Approach to Financial Discipline",
      outlet: "BusinessDay",
      link: "#"
    }
  ];

  const leadership = [
    {
      name: "Adebayo Ogundimu",
      role: "CEO & Co-Founder",
      bio: "Former fintech executive with 10+ years experience in digital banking and financial inclusion across Africa. Previously led product teams at major Nigerian banks.",
      image: "/assets/team-placeholder.jpg"
    },
    {
      name: "Dr. Kemi Adebisi",
      role: "CTO & Co-Founder",
      bio: "Software architect and security expert who previously built payment systems for major Nigerian banks. PhD in Computer Science from University of Lagos.",
      image: "/assets/team-placeholder.jpg"
    },
    {
      name: "Chinedu Okoro",
      role: "Head of Product",
      bio: "Product strategist with deep expertise in behavioral economics and user experience design. Former product manager at leading fintech companies.",
      image: "/assets/team-placeholder.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-[#1F3A8A]">Planmoni</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1F3A8A] to-[#1e3a8a] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Press Kit
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Everything you need to know about Planmoni for your story
          </p>
          <button className="inline-flex items-center space-x-2 bg-white text-[#1F3A8A] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
            <Download className="w-5 h-5" />
            <span>Download Complete Press Kit</span>
          </button>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Company at a Glance
            </h2>
            <p className="text-xl text-gray-600">
              Key facts and figures about Planmoni
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyFacts.map((fact, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-[#1F3A8A] mb-2">{fact.value}</div>
                <div className="text-gray-600 font-medium">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Messages */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Messages
            </h2>
            <p className="text-xl text-gray-600">
              Core themes and talking points about Planmoni
            </p>
          </div>

          <div className="space-y-8">
            {keyMessages.map((message, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{message.title}</h3>
                <p className="text-gray-600 leading-relaxed">{message.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="h-4 w-4" />
              <span>Leadership Team</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-xl text-gray-600">
              The team driving Planmoni's mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-xl font-bold">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-[#1F3A8A] font-semibold mb-4">{leader.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Assets */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Media Assets
            </h2>
            <p className="text-xl text-gray-600">
              High-quality assets for your stories and articles
            </p>
          </div>

          <div className="space-y-12">
            {assets.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Image className="w-6 h-6 mr-3 text-[#1F3A8A]" />
                  {category.category}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>{item.format}</span>
                            <span>{item.size}</span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full bg-[#1F3A8A] text-white py-3 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors flex items-center justify-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Coverage */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FileText className="h-4 w-4" />
              <span>Recent Coverage</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              In the News
            </h2>
            <p className="text-xl text-gray-600">
              Recent media coverage and press mentions
            </p>
          </div>

          <div className="space-y-6">
            {recentNews.map((news, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{news.date}</span>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {news.outlet}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{news.title}</h3>
                </div>
                <button className="ml-6 text-[#1F3A8A] hover:text-[#1e3a8a] transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-gradient-to-br from-[#1F3A8A] to-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Media Contact
            </h2>
            <p className="text-xl text-blue-100">
              Get in touch for interviews, quotes, or additional information
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Press Inquiries</h3>
                <div className="space-y-3 text-blue-100">
                  <p>Email: press@planmoni.com</p>
                  <p>Phone: +234 (0) 800 PLANMONI</p>
                  <p>Response time: Within 24 hours</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">General Information</h3>
                <div className="space-y-3 text-blue-100">
                  <p>Website: planmoni.com</p>
                  <p>Email: hello@planmoni.com</p>
                  <p>Address: Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-blue-200 mb-4">
              Need something specific? We're here to help with your story.
            </p>
            <a 
              href="mailto:press@planmoni.com" 
              className="inline-flex items-center space-x-2 bg-white text-[#1F3A8A] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              <span>Contact Press Team</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressKit;