import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, Filter } from 'lucide-react';

interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
  order: number;
}

const HelpCenterManager: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: '1',
      category: 'Getting Started',
      question: 'How do I create my first payout plan?',
      answer: 'Creating your first payout plan is simple! Download the Planmoni app, complete the quick verification process, add funds to your vault, and set up your preferred payout schedule.',
      order: 1
    },
    {
      id: '2',
      category: 'Getting Started',
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, debit cards, credit cards, and USSD payments. All transactions are secured with bank-level encryption.',
      order: 2
    },
    {
      id: '3',
      category: 'Security & Safety',
      question: 'How secure is my money with Planmoni?',
      answer: 'Your funds are protected with bank-level security including 256-bit encryption, multi-factor authentication, and secure vault storage.',
      order: 1
    },
    {
      id: '4',
      category: 'Payouts & Scheduling',
      question: 'Can I modify my payout schedule after creating it?',
      answer: 'Yes! You can adjust future payout dates, change frequencies, and update amounts. Some changes may require a waiting period for security purposes.',
      order: 1
    }
  ]);

  const [showFaqModal, setShowFaqModal] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const [newFaq, setNewFaq] = useState({
    category: '',
    question: '',
    answer: '',
    order: 1
  });

  const categories = [
    'Getting Started',
    'Payouts & Scheduling',
    'Security & Safety',
    'Fees & Pricing',
    'Account Management',
    'Technical Support'
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || faq.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedFaqs = filteredFaqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

  // Sort FAQs within each category by order
  Object.keys(groupedFaqs).forEach(category => {
    groupedFaqs[category].sort((a, b) => a.order - b.order);
  });

  const handleCreateFaq = () => {
    const faq: FAQ = {
      id: Date.now().toString(),
      ...newFaq
    };
    setFaqs([...faqs, faq]);
    setNewFaq({ category: '', question: '', answer: '', order: 1 });
    setShowFaqModal(false);
  };

  const handleEditFaq = (faq: FAQ) => {
    setEditingFaq(faq);
    setNewFaq({
      category: faq.category,
      question: faq.question,
      answer: faq.answer,
      order: faq.order
    });
    setShowFaqModal(true);
  };

  const handleUpdateFaq = () => {
    if (!editingFaq) return;
    
    setFaqs(faqs.map(faq => 
      faq.id === editingFaq.id 
        ? { ...faq, ...newFaq }
        : faq
    ));
    setEditingFaq(null);
    setNewFaq({ category: '', question: '', answer: '', order: 1 });
    setShowFaqModal(false);
  };

  const handleDeleteFaq = (id: string) => {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      setFaqs(faqs.filter(faq => faq.id !== id));
    }
  };

  const handleCloseModal = () => {
    setShowFaqModal(false);
    setEditingFaq(null);
    setNewFaq({ category: '', question: '', answer: '', order: 1 });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Help Center Management</h1>
          <p className="text-gray-600">Manage FAQ and support articles</p>
        </div>
        <button
          onClick={() => setShowFaqModal(true)}
          className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add FAQ</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="space-y-8">
        {Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
          <div key={category} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-[#1F3A8A] rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                {categoryFaqs.length}
              </div>
              {category}
            </h2>
            
            <div className="space-y-4">
              {categoryFaqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          Order: {faq.order}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => handleEditFaq(faq)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteFaq(faq.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit FAQ Modal */}
      {showFaqModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {editingFaq ? 'Edit FAQ' : 'Add New FAQ'}
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                    <select
                      value={newFaq.category}
                      onChange={(e) => setNewFaq({...newFaq, category: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    >
                      <option value="">Select category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Order</label>
                    <input
                      type="number"
                      min="1"
                      value={newFaq.order}
                      onChange={(e) => setNewFaq({...newFaq, order: parseInt(e.target.value) || 1})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                      placeholder="1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Question</label>
                  <input
                    type="text"
                    value={newFaq.question}
                    onChange={(e) => setNewFaq({...newFaq, question: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="Enter the question"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Answer</label>
                  <textarea
                    value={newFaq.answer}
                    onChange={(e) => setNewFaq({...newFaq, answer: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none"
                    placeholder="Enter the detailed answer"
                  />
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={editingFaq ? handleUpdateFaq : handleCreateFaq}
                  className="flex-1 px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  {editingFaq ? 'Update FAQ' : 'Add FAQ'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpCenterManager;