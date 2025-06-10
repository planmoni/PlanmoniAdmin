import React, { useState } from 'react';
import { Save, Eye, Edit } from 'lucide-react';

interface PolicySection {
  id: string;
  title: string;
  content: string;
  order: number;
}

const PrivacyPolicyManager: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState('January 15, 2025');
  const [sections, setSections] = useState<PolicySection[]>([
    {
      id: '1',
      title: 'Introduction',
      content: `At Planmoni, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our financial planning application and services.

By using Planmoni, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our services.`,
      order: 1
    },
    {
      id: '2',
      title: 'Information We Collect',
      content: `We collect several types of information:

Personal Information:
• Full name and contact information (email, phone number)
• Government-issued identification for verification purposes
• Bank account details and payment information
• Date of birth and address for identity verification
• Profile photo (optional)

Financial Information:
• Transaction history and payout schedules
• Account balances and vault information
• Payment method details (encrypted and tokenized)
• Financial goals and preferences

Usage Information:
• Device information (type, operating system, unique identifiers)
• App usage patterns and feature interactions
• IP address and location data (with permission)
• Log files and analytics data`,
      order: 2
    },
    {
      id: '3',
      title: 'How We Use Your Information',
      content: `We use your information for:

Service Provision:
• Process and manage your payout plans
• Execute financial transactions securely
• Provide customer support and assistance
• Send important service notifications

Security & Compliance:
• Verify your identity and prevent fraud
• Comply with legal and regulatory requirements
• Monitor for suspicious activities
• Maintain audit trails for transactions

Improvement & Analytics:
• Analyze usage patterns to improve our services
• Develop new features and functionality
• Conduct research and analytics
• Personalize your experience

Communication:
• Send transaction confirmations and alerts
• Provide updates about our services
• Respond to your inquiries and requests
• Send marketing communications (with consent)`,
      order: 3
    },
    {
      id: '4',
      title: 'Data Security',
      content: `We implement comprehensive security measures:

Technical Safeguards:
• 256-bit SSL encryption for all data transmission
• Advanced encryption for stored data
• Multi-factor authentication
• Regular security audits and penetration testing
• Secure cloud infrastructure with redundancy

Operational Safeguards:
• Limited access to personal data on need-to-know basis
• Employee background checks and training
• Incident response and breach notification procedures
• Regular backup and disaster recovery testing
• Compliance with industry security standards`,
      order: 4
    },
    {
      id: '5',
      title: 'Information Sharing',
      content: `We DO NOT sell your personal information. Planmoni will never sell, rent, or trade your personal information to third parties for marketing purposes.

Limited Sharing Scenarios:
• Service Providers: Trusted partners who help us operate our services (payment processors, cloud providers)
• Legal Requirements: When required by law, court order, or regulatory authorities
• Business Transfers: In the event of a merger, acquisition, or sale of assets
• Consent: When you explicitly consent to sharing for specific purposes`,
      order: 5
    },
    {
      id: '6',
      title: 'Your Rights',
      content: `You have the following rights:

Access & Control:
• Access your personal information
• Update or correct your data
• Download your data
• Delete your account

Privacy Controls:
• Opt out of marketing communications
• Control cookie preferences
• Limit data processing
• Request data portability`,
      order: 6
    },
    {
      id: '7',
      title: 'Data Retention',
      content: `We retain your personal information only for as long as necessary:

• Active accounts: Data retained while your account is active
• Closed accounts: Financial records retained for 7 years as required by law
• Marketing data: Deleted immediately upon opt-out request
• Analytics data: Anonymized and aggregated after 2 years`,
      order: 7
    },
    {
      id: '8',
      title: 'Contact Information',
      content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

Email: privacy@planmoni.com
Address: Planmoni Privacy Office, Lagos, Nigeria`,
      order: 8
    }
  ]);

  const [editingSection, setEditingSection] = useState<PolicySection | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleSave = () => {
    // In a real app, this would save to a backend
    alert('Privacy Policy updated successfully!');
  };

  const handleEditSection = (section: PolicySection) => {
    setEditingSection({ ...section });
  };

  const handleUpdateSection = () => {
    if (!editingSection) return;
    
    setSections(sections.map(section => 
      section.id === editingSection.id ? editingSection : section
    ));
    setEditingSection(null);
  };

  const handleSectionChange = (field: keyof PolicySection, value: string | number) => {
    if (!editingSection) return;
    
    setEditingSection({
      ...editingSection,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy Management</h1>
          <p className="text-gray-600">Edit privacy policy content and sections</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowPreview(true)}
            className="inline-flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span>Preview</span>
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
          >
            <Save className="w-5 h-5" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      {/* Last Updated */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Document Information</h2>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Last Updated</label>
          <input
            type="text"
            value={lastUpdated}
            onChange={(e) => setLastUpdated(e.target.value)}
            className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
            placeholder="e.g., January 15, 2025"
          />
        </div>
      </div>

      {/* Policy Sections */}
      <div className="space-y-4">
        {sections.sort((a, b) => a.order - b.order).map((section) => (
          <div key={section.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
                <span className="text-sm text-gray-500">Section {section.order}</span>
              </div>
              <button
                onClick={() => handleEditSection(section)}
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </div>
            
            <div className="prose max-w-none">
              <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Section Modal */}
      {editingSection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Section</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Section Title</label>
                    <input
                      type="text"
                      value={editingSection.title}
                      onChange={(e) => handleSectionChange('title', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Order</label>
                    <input
                      type="number"
                      min="1"
                      value={editingSection.order}
                      onChange={(e) => handleSectionChange('order', parseInt(e.target.value) || 1)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Content</label>
                  <textarea
                    value={editingSection.content}
                    onChange={(e) => handleSectionChange('content', e.target.value)}
                    rows={20}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none font-mono text-sm"
                    placeholder="Enter section content..."
                  />
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => setEditingSection(null)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateSection}
                  className="flex-1 px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  Update Section
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Privacy Policy Preview</h2>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="prose max-w-none">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                  <p className="text-gray-600">Last updated: {lastUpdated}</p>
                </div>

                {sections.sort((a, b) => a.order - b.order).map((section) => (
                  <div key={section.id} className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicyManager;