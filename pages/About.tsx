import React, { useState, useEffect } from 'react';
import { ArrowLeft, Target, Users, Award, Heart, Lightbulb, Shield, Globe, TrendingUp, ExternalLink, CheckCircle, Star } from 'lucide-react';
import { aboutDataManager, TeamMember, Milestone, Value } from '../src/data/aboutData';

const About: React.FC = () => {
  const [missionText, setMissionText] = useState('');
  const [storyText, setStoryText] = useState('');
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [values, setValues] = useState<Value[]>([]);

  useEffect(() => {
    loadAboutData();
  }, []);

  const loadAboutData = () => {
    const aboutContent = aboutDataManager.getAboutContent();
    setMissionText(aboutContent.missionText);
    setStoryText(aboutContent.storyText);
    setTeam(aboutContent.teamMembers);
    setMilestones(aboutContent.milestones);
    setValues(aboutContent.values);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-8 h-8" />;
      case 'Heart': return <Heart className="w-8 h-8" />;
      case 'Lightbulb': return <Lightbulb className="w-8 h-8" />;
      case 'Globe': return <Globe className="w-8 h-8" />;
      case 'Target': return <Target className="w-8 h-8" />;
      case 'Users': return <Users className="w-8 h-8" />;
      case 'Award': return <Award className="w-8 h-8" />;
      default: return <Shield className="w-8 h-8" />;
    }
  };

  const getColorForIndex = (index: number) => {
    const colors = [
      "from-blue-500 to-blue-600",
      "from-emerald-500 to-emerald-600", 
      "from-amber-500 to-amber-600",
      "from-purple-500 to-purple-600",
      "from-rose-500 to-rose-600",
      "from-indigo-500 to-indigo-600"
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-[#1F3A8A]">Planmoni</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1F3A8A] via-blue-700 to-indigo-800 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-white/20">
            <Star className="h-4 w-4" />
            <span>About Planmoni</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-8 leading-tight">
            Building the Future of
            <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Financial Discipline
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            We're on a mission to help people develop better financial habits through intelligent technology and behavioral design.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">15K+</div>
              <div className="text-blue-200">Active Users</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">₦2.8M</div>
              <div className="text-blue-200">Monthly Payouts</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-200">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <Target className="h-4 w-4" />
                <span>Our Mission</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Empowering Financial Discipline Through 
                <span className="text-[#1F3A8A]"> Technology</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                {missionText.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span>{paragraph}</span>
                  </p>
                ))}
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://getapp.planmoni.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Experience Planmoni</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative text-white text-6xl font-bold opacity-30">MISSION</div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm animate-pulse delay-300"></div>
                <div className="absolute top-1/2 right-12 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="h-4 w-4" />
              <span>Our Values</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Core Values That Drive Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do at Planmoni, from product development to customer support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.id} className="group bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-20 h-20 bg-gradient-to-br ${getColorForIndex(index)} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {getIconComponent(value.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1F3A8A] transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="h-4 w-4" />
              <span>Our Journey</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How Planmoni Came to Be
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The story behind our mission to revolutionize financial discipline
            </p>
          </div>

          <div className="space-y-12">
            {storyText.split('\n\n').map((section, index) => (
              <div key={index} className={`${index % 2 === 0 ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : 'bg-gradient-to-br from-green-50 to-emerald-50'} rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100`}>
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'} rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                    {index + 1}
                  </div>
                  <div className="text-lg text-gray-700 leading-relaxed">
                    {section.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className={pIndex > 0 ? 'mt-6' : ''}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="h-4 w-4" />
              <span>Company Timeline</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Key Milestones in Our Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From inception to impact - the journey of building Planmoni
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1F3A8A] to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.id} className="flex items-start space-x-8 relative">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#1F3A8A] to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="h-4 w-4" />
              <span>Our Team</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet the People Behind Planmoni
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our diverse team brings together expertise in fintech, product design, and behavioral economics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={member.id} className="group text-center bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative mb-6">
                  <div className={`w-32 h-32 bg-gradient-to-br ${getColorForIndex(index)} rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-105 transition-transform`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1F3A8A] transition-colors">{member.name}</h3>
                <p className="text-[#1F3A8A] font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-[#1F3A8A] via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Help us build a world where everyone has the tools and discipline to achieve their financial goals. 
            Whether you're a user, partner, or team member, there's a place for you in the Planmoni community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://getapp.planmoni.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-[#1F3A8A] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              <span>Download Planmoni</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <a 
              href="/careers" 
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <Users className="w-5 h-5" />
              <span>Join Our Team</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;