import React, { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Clock, DollarSign, Users, Heart, Lightbulb, Target, Coffee, Wifi, Car, Briefcase, Eye } from 'lucide-react';
import { careersDataManager, JobPosition } from '../data/careersData';
import JobApplicationForm from '../components/JobApplicationForm';

const Careers: React.FC = () => {
  const [openPositions, setOpenPositions] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [viewingPosition, setViewingPosition] = useState<JobPosition | null>(null);

  useEffect(() => {
    loadPositions();
  }, []);

  const loadPositions = () => {
    setLoading(true);
    // Get only active positions for the public careers page
    const activePositions = careersDataManager.getActivePositions();
    setOpenPositions(activePositions);
    setLoading(false);
  };

  const handleApplyNow = (position: JobPosition) => {
    setSelectedPosition(position);
    setShowApplicationForm(true);
  };

  const handleViewPosition = (position: JobPosition) => {
    setViewingPosition(position);
  };

  const handleCloseApplicationForm = () => {
    setShowApplicationForm(false);
    setSelectedPosition(null);
  };

  const handleApplicationSuccess = () => {
    // Could show a success message or redirect
    console.log('Application submitted successfully');
  };

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Compensation",
      description: "Market-leading salaries, equity options, and performance bonuses",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and skill development programs",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and unlimited PTO",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Modern Office",
      description: "State-of-the-art office in Lagos with high-speed internet and modern amenities",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Transportation",
      description: "Transportation allowance and parking for office-based employees",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const values = [
    {
      title: "User-First Mindset",
      description: "Every decision we make starts with how it impacts our users' financial wellbeing."
    },
    {
      title: "Continuous Learning",
      description: "We're always learning, growing, and improving both personally and professionally."
    },
    {
      title: "Transparency",
      description: "We believe in open communication, honest feedback, and transparent processes."
    },
    {
      title: "Innovation",
      description: "We're not afraid to challenge the status quo and try new approaches to old problems."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Calculate team stats
  const teamStats = {
    totalPositions: openPositions.length,
    teamSize: '25+',
    employeeRating: '4.8/5'
  };

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
            Join Our Mission
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
            Help us build the future of financial discipline and empower millions of people to achieve their financial goals.
          </p>
          <div className="flex items-center justify-center space-x-8 text-blue-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{teamStats.teamSize}</div>
              <div className="text-sm">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{teamStats.totalPositions}</div>
              <div className="text-sm">Open Positions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{teamStats.employeeRating}</div>
              <div className="text-sm">Employee Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="h-4 w-4" />
              <span>Why Planmoni</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a team that's passionate about making a real difference in people's financial lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Make a Real Impact
                </h3>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    At Planmoni, your work directly impacts thousands of people's financial wellbeing. 
                    Every feature you build, every bug you fix, and every user you help contributes to 
                    our mission of financial empowerment.
                  </p>
                  <p>
                    We're not just building another app—we're creating a movement that helps people 
                    develop better financial habits and achieve their dreams.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl opacity-20 blur-xl"></div>
                <img 
                  src="/assets/StayDisciplined.png" 
                  alt="Team Impact" 
                  className="relative w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our team so they can do their best work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div id="open-positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Briefcase className="h-4 w-4" />
              <span>Open Positions</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity to make a difference in financial technology
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1F3A8A] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading positions...</p>
            </div>
          ) : openPositions.length > 0 ? (
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={position.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="bg-[#1F3A8A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {position.department}
                        </span>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <DollarSign className="w-4 h-4" />
                          <span>{position.salary}</span>
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(position.status)}`}>
                          {position.status}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{position.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.slice(0, 3).map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2 text-gray-600">
                              <div className="w-1.5 h-1.5 bg-[#1F3A8A] rounded-full mt-2 flex-shrink-0"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                          {position.requirements.length > 3 && (
                            <li className="text-sm text-gray-500">
                              +{position.requirements.length - 3} more requirements
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <div className="mt-4 text-sm text-gray-500">
                        Posted on {new Date(position.postedDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-4">
                      <button 
                        onClick={() => handleApplyNow(position)}
                        className="w-full bg-[#1F3A8A] text-white py-4 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                      >
                        Apply Now
                      </button>
                      <button 
                        onClick={() => handleViewPosition(position)}
                        className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:border-gray-400 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Open Positions</h3>
              <p className="text-gray-600 mb-6">
                We don't have any open positions at the moment, but we're always looking for talented people.
              </p>
              <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                Send Us Your Resume
              </button>
            </div>
          )}

          {openPositions.length > 0 && (
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Don't see a position that fits? We're always looking for talented people.
              </p>
              <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                Send Us Your Resume
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Application Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600">
              We've designed our process to be fair, transparent, and respectful of your time
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1F3A8A] rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application Review</h3>
                <p className="text-gray-600">
                  We review your application and resume. If there's a good fit, we'll reach out within 3-5 business days.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1F3A8A] rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Initial Screening</h3>
                <p className="text-gray-600">
                  A 30-minute call with our talent team to discuss your background, interests, and the role.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1F3A8A] rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Technical/Skills Assessment</h3>
                <p className="text-gray-600">
                  Depending on the role, this might be a coding challenge, case study, or portfolio review.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1F3A8A] rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Team Interviews</h3>
                <p className="text-gray-600">
                  Meet with team members you'll be working with to discuss collaboration and culture fit.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1F3A8A] rounded-full flex items-center justify-center text-white font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Final Decision</h3>
                <p className="text-gray-600">
                  We'll make a decision within 2-3 days and provide feedback regardless of the outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-[#1F3A8A] to-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Be part of a mission-driven team that's transforming how people think about money and financial planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const positionsSection = document.querySelector('#open-positions');
                if (positionsSection) {
                  positionsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-[#1F3A8A] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              View Open Positions
            </button>
            <a 
              href="mailto:careers@planmoni.com" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Contact HR Team
            </a>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && selectedPosition && (
        <JobApplicationForm
          position={selectedPosition}
          onClose={handleCloseApplicationForm}
          onSuccess={handleApplicationSuccess}
        />
      )}

      {/* Position Details Modal */}
      {viewingPosition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Position Details</h2>
                <button
                  onClick={() => setViewingPosition(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="bg-[#1F3A8A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {viewingPosition.department}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{viewingPosition.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{viewingPosition.type}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <DollarSign className="w-4 h-4" />
                    <span>{viewingPosition.salary}</span>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(viewingPosition.status)}`}>
                    {viewingPosition.status}
                  </span>
                </div>
                
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">{viewingPosition.title}</h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{viewingPosition.description}</p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
                  <ul className="space-y-3">
                    {viewingPosition.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-600">
                        <div className="w-2 h-2 bg-[#1F3A8A] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm text-gray-500 pt-6 border-t border-gray-200">
                  Posted on {new Date(viewingPosition.postedDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setViewingPosition(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setViewingPosition(null);
                    handleApplyNow(viewingPosition);
                  }}
                  className="px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  Apply for This Position
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;