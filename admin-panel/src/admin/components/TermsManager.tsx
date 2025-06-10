import React, { useState } from 'react';
import { Save, Eye, Edit } from 'lucide-react';

interface TermsSection {
  id: string;
  title: string;
  content: string;
  order: number;
}

const TermsManager: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState('January 15, 2025');
  const [sections, setSections] = useState<TermsSection[]>([
    {
      id: '1',
      title: 'Agreement to Terms',
      content: `These Terms of Service ("Terms") govern your use of the Planmoni application and services ("Service") operated by Planmoni ("us", "we", or "our"). By accessing or using our Service, you agree to be bound by these Terms.

If you disagree with any part of these terms, then you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.`,
      order: 1
    },
    {
      id: '2',
      title: 'Service Description',
      content: `Planmoni provides:
• Secure vault system for storing and managing your funds
• Automated payout scheduling based on your preferences
• Financial planning tools and analytics
• Emergency withdrawal options with built-in safeguards
• Customer support and account management`,
      order: 2
    },
    {
      id: '3',
      title: 'User Responsibilities',
      content: `You Must:
• Provide accurate and complete information
• Maintain the security of your account credentials
• Use the Service only for lawful purposes
• Comply with all applicable laws and regulations
• Notify us immediately of any security breaches
• Keep your contact information up to date

You Must Not:
• Use the Service for illegal activities
• Attempt to hack or compromise our systems
• Share your account with unauthorized persons
• Provide false or misleading information
• Violate any applicable laws or regulations
• Interfere with other users' use of the Service`,
      order: 3
    },
    {
      id: '4',
      title: 'Financial Terms',
      content: `Vault Security: Funds deposited into your Planmoni vault are held securely and cannot be accessed outside of your predetermined payout schedule, except through the emergency withdrawal process.

Payout Schedules: Once created, payout schedules are binding. Modifications may be subject to waiting periods and security checks to maintain the integrity of the system.

Emergency Withdrawals: Emergency withdrawals are subject to a 72-hour cooldown period and may incur fees. This feature is designed for genuine emergencies only.

Fees and Charges:
• Regular scheduled payouts: No fees
• Emergency withdrawals: Small fee to encourage disciplined use
• Premium features: Subscription-based pricing
• All fees are clearly disclosed before any transaction`,
      order: 4
    },
    {
      id: '5',
      title: 'Limitation of Liability',
      content: `Service Availability: While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. Planned maintenance will be communicated in advance.

Financial Decisions: Planmoni is a tool to help you manage your finances. You are responsible for your financial decisions and their consequences.

Third-Party Services: We are not liable for issues arising from third-party payment processors, banks, or other external services we integrate with.

Maximum Liability: Our total liability to you for any claims arising from these Terms or the Service shall not exceed the amount of fees you have paid to us in the 12 months preceding the claim.`,
      order: 5
    },
    {
      id: '6',
      title: 'Account Termination',
      content: `Your Rights:
• Close your account at any time
• Withdraw all funds before closure
• Export your data before termination
• 30-day notice for voluntary closure

Our Rights:
• Suspend accounts for Terms violations
• Terminate for illegal activities
• Close inactive accounts (with notice)
• Comply with legal requirements`,
      order: 6
    },
    {
      id: '7',
      title: 'Dispute Resolution',
      content: `Step 1: Direct Resolution
Contact our support team first. Most issues can be resolved quickly through direct communication.

Step 2: Mediation
If direct resolution fails, we'll engage in good faith mediation through a neutral third party.

Step 3: Arbitration
Final disputes will be resolved through binding arbitration in accordance with Nigerian law.`,
      order: 7
    },
    {
      id: '8',
      title: 'Changes to Terms',
      content: `We reserve the right to modify these Terms at any time. When we make changes:
• We'll notify you via email and in-app notification
• Changes take effect 30 days after notification
• Continued use constitutes acceptance of new Terms
• You may close your account if you disagree with changes`,
      order: 8
    },
    {
      id: '9',
      title: 'Contact Information',
      content: `If you have any questions about these Terms of Service, please contact us:

Email: legal@planmoni.com
Address: Planmoni Legal Department, Lagos, Nigeria`,
      order: 9
    },
    {
      id: '10',
      title: 'Governing Law',
      content: `These Terms shall be interpreted and governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria.`,
      order: 10
    }
  ]);

  const [editingSection, setEditingSection] = useState<TermsSection | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleSave = () => {
    // In a real app, this would save to a backend
    alert('Terms of Service updated successfully!');
  };

  const handleEditSection = (section: TermsSection) => {
    setEditingSection({ ...section });
  };

  const handleUpdateSection = () => {
    if (!editingSection) return;
    
    setSections(sections.map(section => 
      section.id === editingSection.id ? editingSection : section
    ));
    setEditingSection(null);
  };

  const handleSectionChange = (field: keyof TermsSection, value: string | number) => {
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
          <h1 className="text-3xl font-bold text-gray-900">Terms of Service Management</h1>
          <p className="text-gray-600">Edit terms of service content and sections</p>
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

      {/* Terms Sections */}
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
                <h2 className="text-2xl font-bold text-gray-900">Terms of Service Preview</h2>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="prose max-w-none">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
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

export default TermsManager;