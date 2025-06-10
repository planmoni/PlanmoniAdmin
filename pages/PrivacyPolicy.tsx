import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users, FileText, AlertTriangle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
            <Shield className="w-16 h-16 text-blue-200" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 mb-4">
            Your privacy and data security are our top priorities
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
                  <h2 className="text-3xl font-bold text-gray-900">Introduction</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    At Planmoni, we are committed to protecting your privacy and ensuring the security of your personal information. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                    financial planning application and services.
                  </p>
                  <p>
                    By using Planmoni, you consent to the data practices described in this policy. If you do not agree with 
                    the practices described in this policy, please do not use our services.
                  </p>
                </div>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="w-8 h-8 text-[#1F3A8A]" />
                  <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Full name and contact information (email, phone number)</li>
                      <li>• Government-issued identification for verification purposes</li>
                      <li>• Bank account details and payment information</li>
                      <li>• Date of birth and address for identity verification</li>
                      <li>• Profile photo (optional)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Information</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Transaction history and payout schedules</li>
                      <li>• Account balances and vault information</li>
                      <li>• Payment method details (encrypted and tokenized)</li>
                      <li>• Financial goals and preferences</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Usage Information</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Device information (type, operating system, unique identifiers)</li>
                      <li>• App usage patterns and feature interactions</li>
                      <li>• IP address and location data (with permission)</li>
                      <li>• Log files and analytics data</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="w-8 h-8 text-[#1F3A8A]" />
                  <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">Service Provision</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Process and manage your payout plans</li>
                      <li>• Execute financial transactions securely</li>
                      <li>• Provide customer support and assistance</li>
                      <li>• Send important service notifications</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">Security & Compliance</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Verify your identity and prevent fraud</li>
                      <li>• Comply with legal and regulatory requirements</li>
                      <li>• Monitor for suspicious activities</li>
                      <li>• Maintain audit trails for transactions</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">Improvement & Analytics</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Analyze usage patterns to improve our services</li>
                      <li>• Develop new features and functionality</li>
                      <li>• Conduct research and analytics</li>
                      <li>• Personalize your experience</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">Communication</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Send transaction confirmations and alerts</li>
                      <li>• Provide updates about our services</li>
                      <li>• Respond to your inquiries and requests</li>
                      <li>• Send marketing communications (with consent)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Lock className="w-8 h-8 text-[#1F3A8A]" />
                  <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Safeguards</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• 256-bit SSL encryption for all data transmission</li>
                        <li>• Advanced encryption for stored data</li>
                        <li>• Multi-factor authentication</li>
                        <li>• Regular security audits and penetration testing</li>
                        <li>• Secure cloud infrastructure with redundancy</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Safeguards</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Limited access to personal data on need-to-know basis</li>
                        <li>• Employee background checks and training</li>
                        <li>• Incident response and breach notification procedures</li>
                        <li>• Regular backup and disaster recovery testing</li>
                        <li>• Compliance with industry security standards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="w-8 h-8 text-[#1F3A8A]" />
                  <h2 className="text-3xl font-bold text-gray-900">Information Sharing</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">We DO NOT sell your personal information</h3>
                    <p className="text-gray-600">
                      Planmoni will never sell, rent, or trade your personal information to third parties for marketing purposes.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Limited Sharing Scenarios</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Service Providers:</strong> Trusted partners who help us operate our services (payment processors, cloud providers)</li>
                      <li>• <strong>Legal Requirements:</strong> When required by law, court order, or regulatory authorities</li>
                      <li>• <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                      <li>• <strong>Consent:</strong> When you explicitly consent to sharing for specific purposes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-8 h-8 text-[#1F3A8A]" />
                  <h2 className="text-3xl font-bold text-gray-900">Your Rights</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Access & Control</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Access your personal information</li>
                      <li>• Update or correct your data</li>
                      <li>• Download your data</li>
                      <li>• Delete your account</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Privacy Controls</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Opt out of marketing communications</li>
                      <li>• Control cookie preferences</li>
                      <li>• Limit data processing</li>
                      <li>• Request data portability</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-gray-600 mb-4">
                    We retain your personal information only for as long as necessary to provide our services and comply with legal obligations:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Active accounts:</strong> Data retained while your account is active</li>
                    <li>• <strong>Closed accounts:</strong> Financial records retained for 7 years as required by law</li>
                    <li>• <strong>Marketing data:</strong> Deleted immediately upon opt-out request</li>
                    <li>• <strong>Analytics data:</strong> Anonymized and aggregated after 2 years</li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-[#1F3A8A]" />
                  <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
                </div>
                
                <div className="bg-[#1F3A8A] text-white rounded-2xl p-8">
                  <p className="text-blue-100 mb-6">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-bold mb-2">Email</h3>
                      <p className="text-blue-200">privacy@planmoni.com</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Address</h3>
                      <p className="text-blue-200">
                        Planmoni Privacy Office<br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this 
                  Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;