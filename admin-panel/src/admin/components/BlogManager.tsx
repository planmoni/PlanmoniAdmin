import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, Search, Filter, Calendar, User, Upload, X } from 'lucide-react';
import { blogDataManager, BlogPost } from '../../data/blogData';

const BlogManager: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [viewingPost, setViewingPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    status: 'draft' as const,
    readTime: '',
    image: '',
    slug: ''
  });

  const categories = ['Psychology', 'Financial Planning', 'Savings', 'Technology', 'Freelancing', 'Budgeting'];

  // Load posts on component mount
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    const allPosts = blogDataManager.getAllPosts();
    setPosts(allPosts);
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || post.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleCreatePost = () => {
    if (!newPost.title || !newPost.excerpt || !newPost.author || !newPost.category) {
      alert('Please fill in all required fields');
      return;
    }

    const slug = newPost.slug || generateSlug(newPost.title);
    
    const postData = {
      ...newPost,
      slug,
      date: new Date().toISOString().split('T')[0]
    };

    blogDataManager.addPost(postData);
    loadPosts();
    resetForm();
    setShowCreateModal(false);
    alert('Blog post created successfully!');
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setNewPost({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content || '',
      author: post.author,
      category: post.category,
      status: post.status,
      readTime: post.readTime,
      image: post.image || '',
      slug: post.slug
    });
    setShowEditModal(true);
  };

  const handleUpdatePost = () => {
    if (!editingPost) return;

    if (!newPost.title || !newPost.excerpt || !newPost.author || !newPost.category) {
      alert('Please fill in all required fields');
      return;
    }

    const slug = newPost.slug || generateSlug(newPost.title);

    const updatedData = {
      ...newPost,
      slug
    };

    blogDataManager.updatePost(editingPost.id, updatedData);
    loadPosts();
    resetForm();
    setEditingPost(null);
    setShowEditModal(false);
    alert('Blog post updated successfully!');
  };

  const handleViewPost = (post: BlogPost) => {
    setViewingPost(post);
    setShowViewModal(true);
  };

  const handleDeletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      blogDataManager.deletePost(id);
      loadPosts();
      alert('Blog post deleted successfully!');
    }
  };

  const resetForm = () => {
    setNewPost({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      category: '',
      status: 'draft',
      readTime: '',
      image: '',
      slug: ''
    });
  };

  const handleCloseModals = () => {
    setShowCreateModal(false);
    setShowEditModal(false);
    setShowViewModal(false);
    setEditingPost(null);
    setViewingPost(null);
    resetForm();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600">Create and manage blog posts</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>New Post</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Post</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Author</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Category</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Status</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Date</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-start space-x-3">
                      {post.image && (
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-16 h-12 object-cover rounded-lg flex-shrink-0"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{post.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{post.author}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{post.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleViewPost(post)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                        title="View Post"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleEditPost(post)}
                        className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                        title="Edit Post"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeletePost(post.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                        title="Delete Post"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Post Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Create New Blog Post</h2>
                <button
                  onClick={handleCloseModals}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="Enter post title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Slug</label>
                  <input
                    type="text"
                    value={newPost.slug}
                    onChange={(e) => setNewPost({...newPost, slug: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="URL slug (auto-generated if empty)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Featured Image</label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={newPost.image}
                      onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                      placeholder="Enter image URL (e.g., /assets/blog-image.jpg)"
                    />
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Upload className="w-4 h-4" />
                      <span>Or upload an image file (feature coming soon)</span>
                    </div>
                    {newPost.image && (
                      <div className="mt-2">
                        <img 
                          src={newPost.image} 
                          alt="Preview" 
                          className="w-32 h-24 object-cover rounded-lg border border-gray-200"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Excerpt *</label>
                  <textarea
                    value={newPost.excerpt}
                    onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none"
                    placeholder="Brief description of the post"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Content</label>
                  <textarea
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none"
                    placeholder="Write your blog post content here..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Author *</label>
                    <input
                      type="text"
                      value={newPost.author}
                      onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                      placeholder="Author name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Read Time</label>
                    <input
                      type="text"
                      value={newPost.readTime}
                      onChange={(e) => setNewPost({...newPost, readTime: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                      placeholder="e.g., 5 min read"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                    <select
                      value={newPost.category}
                      onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    >
                      <option value="">Select category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                    <select
                      value={newPost.status}
                      onChange={(e) => setNewPost({...newPost, status: e.target.value as any})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="scheduled">Scheduled</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={handleCloseModals}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreatePost}
                  className="flex-1 px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  Create Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Post Modal */}
      {showEditModal && editingPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Edit Blog Post</h2>
                <button
                  onClick={handleCloseModals}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="Enter post title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Slug</label>
                  <input
                    type="text"
                    value={newPost.slug}
                    onChange={(e) => setNewPost({...newPost, slug: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="URL slug"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Featured Image</label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={newPost.image}
                      onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                      placeholder="Enter image URL (e.g., /assets/blog-image.jpg)"
                    />
                    {newPost.image && (
                      <div className="mt-2">
                        <img 
                          src={newPost.image} 
                          alt="Preview" 
                          className="w-32 h-24 object-cover rounded-lg border border-gray-200"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Excerpt *</label>
                  <textarea
                    value={newPost.excerpt}
                    onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none"
                    placeholder="Brief description of the post"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Content</label>
                  <textarea
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none"
                    placeholder="Write your blog post content here..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Author *</label>
                    <input
                      type="text"
                      value={newPost.author}
                      onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                      placeholder="Author name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Read Time</label>
                    <input
                      type="text"
                      value={newPost.readTime}
                      onChange={(e) => setNewPost({...newPost, readTime: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                      placeholder="e.g., 5 min read"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                    <select
                      value={newPost.category}
                      onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    >
                      <option value="">Select category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                    <select
                      value={newPost.status}
                      onChange={(e) => setNewPost({...newPost, status: e.target.value as any})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="scheduled">Scheduled</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={handleCloseModals}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdatePost}
                  className="flex-1 px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  Update Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Post Modal */}
      {showViewModal && viewingPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">View Blog Post</h2>
                <button
                  onClick={handleCloseModals}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                {viewingPost.image && (
                  <img 
                    src={viewingPost.image} 
                    alt={viewingPost.title}
                    className="w-full h-64 object-cover rounded-xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
                
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{viewingPost.title}</h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                    <span>By {viewingPost.author}</span>
                    <span>•</span>
                    <span>{viewingPost.date}</span>
                    <span>•</span>
                    <span>{viewingPost.readTime}</span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(viewingPost.status)}`}>
                      {viewingPost.status}
                    </span>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-xl text-gray-600 mb-6">{viewingPost.excerpt}</p>
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {viewingPost.content}
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => {
                    handleCloseModals();
                    handleEditPost(viewingPost);
                  }}
                  className="px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  Edit Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogManager;