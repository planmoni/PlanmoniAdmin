import React from 'react';
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
      <div className="bg-gradient-to-br from-[#1F3A8A] to-[#1e3a8a] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Scale className="w-16 h-16 text-blue-200" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-blue-100 mb-4">
            Please read these terms carefully before using Planmoni
          </p>
          <p className="text-blue-200">
            Last updated: January 15, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="p-8 lg:p-12">
              
              {/* Introduction */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="w-8 h-8 text-[#1F3A8A]" />
                  <h2 className="text-3xl font-bold text-gray-900">Agreement to Terms</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    These Terms of Service ("Terms") govern your use of the Planmoni application and services 
                    ("Service") operated by Planmoni ("us", "we", or "our"). By accessing or using our Service, 
                    you agree to be bound by these Terms.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 my-6">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-yellow-800 mb-2">Important Notice</h3>
                        <p className="text-yellow-700">
                          If you disagree with any part of these terms, then you may not access the Service. 
                          These Terms apply to all visitors, users, and others who access or use the Service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Description */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-8 h-8 text-[#1F3A8A]" />
                  <h2 className="text-3xl font-bold text-gray-900">Service Description</h2>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What Planmoni Provides</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Secure vault system for storing and managing your funds</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Automated payout scheduling based on your preferences</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Financial planning tools and analytics</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Emergency withdrawal options with built-in safeguards</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Customer support and account management</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* User Responsibilities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                      You Must
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Provide accurate and complete information</li>
                      <li>• Maintain the security of your account credentials</li>
                      <li>• Use the Service only for lawful purposes</li>
                      <li>• Comply with all applicable laws and regulations</li>
                      <li>• Notify us immediately of any security breaches</li>
                      <li>• Keep your contact information up to date</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <XCircle className="w-6 h-6 text-red-600 mr-2" />
                      You Must Not
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Use the Service for illegal activities</li>
                      <li>• Attempt to hack or compromise our systems</li>
                      <li>• Share your account with unauthorized persons</li>
                      <li>• Provide false or misleading information</li>
                      <li>• Violate any applicable laws or regulations</li>
                      <li>• Interfere with other users' use of the Service</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Financial Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Terms</h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Vault and Payout System</h3>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        <strong>Vault Security:</strong> Funds deposited into your Planmoni vault are held securely 
                        and cannot be accessed outside of your predetermined payout schedule, except through the 
                        emergency withdrawal process.
                      </p>
                      <p>
                        <strong>Payout Schedules:</strong> Once created, payout schedules are binding. Modifications 
                        may be subject to waiting periods and security checks to maintain the integrity of the system.
                      </p>
                      <p>
                        <strong>Emergency Withdrawals:</strong> Emergency withdrawals are subject to a 72-hour 
                        cooldown period and may incur fees. This feature is designed for genuine emergencies only.
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Fees and Charges</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Regular scheduled payouts: No fees</li>
                      <li>• Emergency withdrawals: Small fee to encourage disciplined use</li>
                      <li>• Premium features: Subscription-based pricing</li>
                      <li>• All fees are clearly disclosed before any transaction</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong>Service Availability:</strong> While we strive for 99.9% uptime, we cannot guarantee 
                      uninterrupted service. Planned maintenance will be communicated in advance.
                    </p>
                    <p>
                      <strong>Financial Decisions:</strong> Planmoni is a tool to help you manage your finances. 
                      You are responsible for your financial decisions and their consequences.
                    </p>
                    <p>
                      <strong>Third-Party Services:</strong> We are not liable for issues arising from third-party 
                      payment processors, banks, or other external services we integrate with.
                    </p>
                    <p>
                      <strong>Maximum Liability:</strong> Our total liability to you for any claims arising from 
                      these Terms or the Service shall not exceed the amount of fees you have paid to us in the 
                      12 months preceding the claim.
                    </p>
                  </div>
                </div>
              </div>

              {/* Account Termination */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Account Termination</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Your Rights</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Close your account at any time</li>
                      <li>• Withdraw all funds before closure</li>
                      <li>• Export your data before termination</li>
                      <li>• 30-day notice for voluntary closure</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Our Rights</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Suspend accounts for Terms violations</li>
                      <li>• Terminate for illegal activities</li>
                      <li>• Close inactive accounts (with notice)</li>
                      <li>• Comply with legal requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Step 1: Direct Resolution</h3>
                      <p className="text-gray-600">
                        Contact our support team first. Most issues can be resolved quickly through direct communication.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Step 2: Mediation</h3>
                      <p className="text-gray-600">
                        If direct resolution fails, we'll engage in good faith mediation through a neutral third party.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Step 3: Arbitration</h3>
                      <p className="text-gray-600">
                        Final disputes will be resolved through binding arbitration in accordance with Nigerian law.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
                
                <div className="bg-[#1F3A8A] text-white rounded-2xl p-8">
                  <div className="space-y-4">
                    <p className="text-blue-100">
                      We reserve the right to modify these Terms at any time. When we make changes:
                    </p>
                    <ul className="space-y-2 text-blue-200">
                      <li>• We'll notify you via email and in-app notification</li>
                      <li>• Changes take effect 30 days after notification</li>
                      <li>• Continued use constitutes acceptance of new Terms</li>
                      <li>• You may close your account if you disagree with changes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="bg-gray-50 rounded-2xl p-8">
                  <p className="text-gray-600 mb-6">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">legal@planmoni.com</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600">
                        Planmoni Legal Department<br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Governing Law */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-600">
                  These Terms shall be interpreted and governed by the laws of the Federal Republic of Nigeria. 
                  Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the 
                  courts of Lagos State, Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;