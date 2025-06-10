import React, { useState } from 'react';
import { Save, Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  businessHours: string;
  supportHours: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  date: string;
  status: 'new' | 'replied' | 'resolved';
}

const ContactManager: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: 'support@planmoni.com',
    phone: '+234 (0) 800 PLANMONI',
    address: 'Lagos, Nigeria',
    businessHours: 'Monday - Friday, 9AM - 6PM WAT',
    supportHours: 'Weekend support via email'
  });

  const [messages, setMessages] = useState<ContactMessage[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Question about payout schedules',
      category: 'general',
      message: 'I would like to know more about how flexible the payout schedules are...',
      date: '2025-01-15',
      status: 'new'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'Technical issue with app',
      category: 'support',
      message: 'I am experiencing issues logging into my account...',
      date: '2025-01-14',
      status: 'replied'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      subject: 'Partnership inquiry',
      category: 'partnership',
      message: 'We are interested in exploring a partnership opportunity...',
      date: '2025-01-13',
      status: 'resolved'
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [replyText, setReplyText] = useState('');

  const handleSaveContactInfo = () => {
    // In a real app, this would save to a backend
    alert('Contact information updated successfully!');
  };

  const handleUpdateContactInfo = (field: keyof ContactInfo, value: string) => {
    setContactInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleUpdateMessageStatus = (id: string, status: ContactMessage['status']) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, status } : msg
    ));
  };

  const handleSendReply = () => {
    if (!selectedMessage || !replyText.trim()) return;
    
    // In a real app, this would send the reply via email
    alert('Reply sent successfully!');
    handleUpdateMessageStatus(selectedMessage.id, 'replied');
    setReplyText('');
    setSelectedMessage(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'replied': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'support': return '🔧';
      case 'billing': return '💳';
      case 'feature': return '💡';
      case 'partnership': return '🤝';
      case 'press': return '📰';
      default: return '💬';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Contact Page Management</h1>
        <p className="text-gray-600">Manage contact information and customer messages</p>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
          <button
            onClick={handleSaveContactInfo}
            className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-4 py-2 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Mail className="inline w-4 h-4 mr-2" />
                Email Address
              </label>
              <input
                type="email"
                value={contactInfo.email}
                onChange={(e) => handleUpdateContactInfo('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Phone className="inline w-4 h-4 mr-2" />
                Phone Number
              </label>
              <input
                type="text"
                value={contactInfo.phone}
                onChange={(e) => handleUpdateContactInfo('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <MapPin className="inline w-4 h-4 mr-2" />
                Address
              </label>
              <input
                type="text"
                value={contactInfo.address}
                onChange={(e) => handleUpdateContactInfo('address', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Clock className="inline w-4 h-4 mr-2" />
                Business Hours
              </label>
              <input
                type="text"
                value={contactInfo.businessHours}
                onChange={(e) => handleUpdateContactInfo('businessHours', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Support Hours
              </label>
              <input
                type="text"
                value={contactInfo.supportHours}
                onChange={(e) => handleUpdateContactInfo('supportHours', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Messages */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Contact Messages</h2>
          <p className="text-gray-600">Manage customer inquiries and support requests</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Message</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Contact</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Category</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Status</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Date</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {messages.map((message) => (
                <tr key={message.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{message.subject}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{message.message}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{message.name}</div>
                      <div className="text-sm text-gray-600">{message.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{getCategoryIcon(message.category)}</span>
                      <span className="text-sm text-gray-900 capitalize">{message.category}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                      {message.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{message.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedMessage(message)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                        title="Reply"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>
                      <select
                        value={message.status}
                        onChange={(e) => handleUpdateMessageStatus(message.id, e.target.value as any)}
                        className="text-xs border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="new">New</option>
                        <option value="replied">Replied</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reply Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reply to Message</h2>
              
              {/* Original Message */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedMessage.subject}</h3>
                    <p className="text-sm text-gray-600">From: {selectedMessage.name} ({selectedMessage.email})</p>
                  </div>
                  <span className="text-sm text-gray-500">{selectedMessage.date}</span>
                </div>
                <p className="text-gray-700">{selectedMessage.message}</p>
              </div>

              {/* Reply Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Reply</label>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none"
                    placeholder="Type your reply here..."
                  />
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendReply}
                  disabled={!replyText.trim()}
                  className="flex-1 px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactManager;