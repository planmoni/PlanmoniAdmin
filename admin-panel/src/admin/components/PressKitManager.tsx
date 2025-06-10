import React, { useState } from 'react';
import { Plus, Edit, Trash2, Download, Upload, Image, FileText } from 'lucide-react';

interface PressAsset {
  id: string;
  name: string;
  category: 'logos' | 'screenshots' | 'marketing';
  format: string;
  size: string;
  description: string;
  url: string;
}

interface NewsItem {
  id: string;
  date: string;
  title: string;
  outlet: string;
  link: string;
}

const PressKitManager: React.FC = () => {
  const [assets, setAssets] = useState<PressAsset[]>([
    {
      id: '1',
      name: 'Primary Logo (PNG)',
      category: 'logos',
      format: 'PNG',
      size: '2.1 MB',
      description: 'High-resolution primary logo with transparent background',
      url: '/assets/AppLogo.png'
    },
    {
      id: '2',
      name: 'App Interface - iOS',
      category: 'screenshots',
      format: 'PNG',
      size: '3.2 MB',
      description: 'Main app interface on iOS devices',
      url: '/assets/IOSImage.png'
    }
  ]);

  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      id: '1',
      date: '2025-01-15',
      title: 'Planmoni Reaches 15,000 Active Users Milestone',
      outlet: 'TechCabal',
      link: '#'
    },
    {
      id: '2',
      date: '2024-12-20',
      title: 'How Nigerian Fintech Planmoni is Changing Financial Habits',
      outlet: 'Nairametrics',
      link: '#'
    }
  ]);

  const [showAssetModal, setShowAssetModal] = useState(false);
  const [showNewsModal, setShowNewsModal] = useState(false);

  const [newAsset, setNewAsset] = useState({
    name: '',
    category: 'logos' as const,
    format: '',
    size: '',
    description: '',
    url: ''
  });

  const [newNews, setNewNews] = useState({
    date: '',
    title: '',
    outlet: '',
    link: ''
  });

  const [companyFacts, setCompanyFacts] = useState([
    { label: 'Founded', value: '2023' },
    { label: 'Headquarters', value: 'Lagos, Nigeria' },
    { label: 'Team Size', value: '25+ employees' },
    { label: 'Active Users', value: '15,000+' },
    { label: 'Monthly Payouts', value: '₦2.8M+' },
    { label: 'Funding', value: 'Seed Stage' },
    { label: 'App Rating', value: '4.9/5 stars' },
    { label: 'Uptime', value: '99.9%' }
  ]);

  const handleAddAsset = () => {
    const asset: PressAsset = {
      id: Date.now().toString(),
      ...newAsset
    };
    setAssets([...assets, asset]);
    setNewAsset({
      name: '',
      category: 'logos',
      format: '',
      size: '',
      description: '',
      url: ''
    });
    setShowAssetModal(false);
  };

  const handleAddNews = () => {
    const news: NewsItem = {
      id: Date.now().toString(),
      ...newNews
    };
    setNewsItems([news, ...newsItems]);
    setNewNews({
      date: '',
      title: '',
      outlet: '',
      link: ''
    });
    setShowNewsModal(false);
  };

  const handleDeleteAsset = (id: string) => {
    if (confirm('Are you sure you want to delete this asset?')) {
      setAssets(assets.filter(asset => asset.id !== id));
    }
  };

  const handleDeleteNews = (id: string) => {
    if (confirm('Are you sure you want to delete this news item?')) {
      setNewsItems(newsItems.filter(news => news.id !== id));
    }
  };

  const updateCompanyFact = (index: number, field: 'label' | 'value', value: string) => {
    const updated = [...companyFacts];
    updated[index] = { ...updated[index], [field]: value };
    setCompanyFacts(updated);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'logos': return <Image className="w-5 h-5" />;
      case 'screenshots': return <Image className="w-5 h-5" />;
      case 'marketing': return <FileText className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Press Kit Management</h1>
        <p className="text-gray-600">Manage press assets, company information, and media coverage</p>
      </div>

      {/* Company Facts */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Company Facts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {companyFacts.map((fact, index) => (
            <div key={index} className="space-y-2">
              <input
                type="text"
                value={fact.label}
                onChange={(e) => updateCompanyFact(index, 'label', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Label"
              />
              <input
                type="text"
                value={fact.value}
                onChange={(e) => updateCompanyFact(index, 'value', e.target.value)}
                className="w-full px-3 py-2 text-lg font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Value"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Media Assets */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Media Assets</h2>
          <button
            onClick={() => setShowAssetModal(true)}
            className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-4 py-2 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Asset</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {assets.map((asset) => (
            <div key={asset.id} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {getCategoryIcon(asset.category)}
                  <span className="text-sm font-medium text-gray-900">{asset.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDeleteAsset(asset.id)}
                    className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{asset.description}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>{asset.format}</span>
                <span>{asset.size}</span>
              </div>
              
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Coverage */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Coverage</h2>
          <button
            onClick={() => setShowNewsModal(true)}
            className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-4 py-2 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add News</span>
          </button>
        </div>

        <div className="space-y-4">
          {newsItems.map((news) => (
            <div key={news.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-sm text-gray-500">{news.date}</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {news.outlet}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900">{news.title}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDeleteNews(news.id)}
                  className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Asset Modal */}
      {showAssetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Media Asset</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Asset Name</label>
                  <input
                    type="text"
                    value={newAsset.name}
                    onChange={(e) => setNewAsset({...newAsset, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="e.g., Primary Logo (PNG)"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                    <select
                      value={newAsset.category}
                      onChange={(e) => setNewAsset({...newAsset, category: e.target.value as any})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    >
                      <option value="logos">Logos</option>
                      <option value="screenshots">Screenshots</option>
                      <option value="marketing">Marketing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Format</label>
                    <input
                      type="text"
                      value={newAsset.format}
                      onChange={(e) => setNewAsset({...newAsset, format: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                      placeholder="PNG"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Size</label>
                    <input
                      type="text"
                      value={newAsset.size}
                      onChange={(e) => setNewAsset({...newAsset, size: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                      placeholder="2.1 MB"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={newAsset.description}
                    onChange={(e) => setNewAsset({...newAsset, description: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none"
                    placeholder="Brief description of the asset"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">File URL</label>
                  <input
                    type="text"
                    value={newAsset.url}
                    onChange={(e) => setNewAsset({...newAsset, url: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="/assets/logo.png"
                  />
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => setShowAssetModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddAsset}
                  className="flex-1 px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  Add Asset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add News Modal */}
      {showNewsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add News Coverage</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    value={newNews.date}
                    onChange={(e) => setNewNews({...newNews, date: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={newNews.title}
                    onChange={(e) => setNewNews({...newNews, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="Article title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Media Outlet</label>
                  <input
                    type="text"
                    value={newNews.outlet}
                    onChange={(e) => setNewNews({...newNews, outlet: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="e.g., TechCabal"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Article Link</label>
                  <input
                    type="url"
                    value={newNews.link}
                    onChange={(e) => setNewNews({...newNews, link: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => setShowNewsModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddNews}
                  className="flex-1 px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  Add News
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PressKitManager;