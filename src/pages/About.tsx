import React from 'react';
import { ArrowLeft, Target, Users, Award, Heart, Lightbulb, Shield, Globe, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: "Martins Osodi",
      role: "CEO & Co-Founder",
      bio: "Former fintech executive with 10+ years experience in digital banking and financial inclusion across Africa.",
      image: "/assets/team-placeholder.jpg"
    },
    {
      name: "Kemi Adebisi",
      role: "CTO & Co-Founder",
      bio: "Software architect and security expert who previously built payment systems for major Nigerian banks.",
      image: "/assets/team-placeholder.jpg"
    },
    {
      name: "Chinedu Okoro",
      role: "Head of Product",
      bio: "Product strategist with deep expertise in behavioral economics and user experience design.",
      image: "/assets/team-placeholder.jpg"
    },
    {
      name: "Folake Adeyemi",
      role: "Head of Operations",
      bio: "Operations leader with extensive experience in financial services compliance and risk management.",
      image: "/assets/team-placeholder.jpg"
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "Your financial security is our top priority. We implement bank-level security measures to protect your funds and data.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User-Centric",
      description: "Every feature we build is designed with our users' financial wellbeing and success in mind.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously innovate to create better solutions for financial discipline and planning.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Accessibility",
      description: "Financial planning tools should be accessible to everyone, regardless of income level or background.",
      color: "from-green-500 to-green-600"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "Planmoni was founded with a mission to help people develop better financial habits through technology."
    },
    {
      year: "2024",
      title: "Beta Launch",
      description: "Launched our beta version with 1,000 early users, gathering valuable feedback and insights."
    },
    {
      year: "2024",
      title: "Seed Funding",
      description: "Raised seed funding to accelerate product development and expand our team."
    },
    {
      year: "2025",
      title: "Public Launch",
      description: "Officially launched Planmoni to the public, helping thousands achieve financial discipline."
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
              <img src="/assets/AppLogo.png" alt="Planmoni" className="h-8 w-8" />
              <span className="text-xl font-bold text-[#1F3A8A]">Planmoni</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1F3A8A] to-[#1e3a8a] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            About Planmoni
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
            We're on a mission to help people develop better financial habits through intelligent technology and behavioral design.
          </p>
          <div className="flex items-center justify-center space-x-8 text-blue-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15K+</div>
              <div className="text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">₦2.8M</div>
              <div className="text-sm">Monthly Payouts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Target className="h-4 w-4" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Empowering Financial Discipline Through Technology
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  At Planmoni, we believe that financial discipline shouldn't be a struggle. Traditional banking gives you 
                  access to all your money all the time, making it easy to spend impulsively and difficult to stick to 
                  financial goals.
                </p>
                <p>
                  Our solution is simple yet powerful: we help you lock away your money and receive it back on a schedule 
                  that matches your needs. This creates natural barriers to impulsive spending while ensuring you have 
                  access to funds when you truly need them.
                </p>
                <p>
                  By combining behavioral psychology with modern technology, we're helping thousands of people across 
                  Africa build better financial habits and achieve their goals.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl opacity-20 blur-xl"></div>
              <img 
                src="/assets/SetYourPayoutPlan.png" 
                alt="Planmoni Mission" 
                className="relative w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Planmoni
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600">
              How Planmoni came to be
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Problem We Discovered</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our founders noticed a common pattern among friends, family, and colleagues: people would receive money 
                (salary, business income, gifts) and struggle to make it last. The issue wasn't lack of income—it was 
                the difficulty of managing access to that income over time.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Traditional budgeting apps and financial advice focused on tracking and willpower, but didn't address 
                the fundamental issue: when all your money is easily accessible, it's easy to spend it impulsively.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Solution We Built</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We realized that the solution wasn't more tracking or more willpower—it was better access control. 
                By creating a system that locks your money away and releases it on a predetermined schedule, we could 
                help people naturally develop better spending habits.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The result is Planmoni: a financial planning tool that combines the security of a vault with the 
                flexibility of personalized payout schedules, helping users achieve their financial goals through 
                structured access to their own money.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in Planmoni's growth
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1F3A8A] rounded-full flex items-center justify-center text-white font-bold">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="h-4 w-4" />
              <span>Our Team</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet the People Behind Planmoni
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team brings together expertise in fintech, product design, and behavioral economics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#1F3A8A] font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-[#1F3A8A] to-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Help us build a world where everyone has the tools and discipline to achieve their financial goals. 
            Whether you're a user, partner, or team member, there's a place for you in the Planmoni community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://getapp.planmoni.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-[#1F3A8A] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              <span>Download Planmoni</span>
            </a>
            <a 
              href="/careers" 
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              <span>Join Our Team</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;