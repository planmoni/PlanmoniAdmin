import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, User, ArrowRight, Search, TrendingUp, DollarSign, Target, Users, X } from 'lucide-react';
import { blogDataManager, BlogPost } from '../src/data/blogData';

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  useEffect(() => {
    loadBlogPosts();
  }, []);

  const loadBlogPosts = () => {
    const publishedPosts = blogDataManager.getPublishedPosts();
    setBlogPosts(publishedPosts);
    
    // Set the first post as featured
    if (publishedPosts.length > 0) {
      setFeaturedPost(publishedPosts[0]);
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory && post.id !== featuredPost?.id;
  });

  // Get unique categories from published posts
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const categoriesWithCounts = [
    { name: 'All Posts', count: blogPosts.length, value: 'all', icon: <Target className="w-4 h-4" /> },
    ...categories.map(category => ({
      name: category,
      count: blogPosts.filter(post => post.category === category).length,
      value: category,
      icon: getCategoryIcon(category)
    }))
  ];

  function getCategoryIcon(category: string) {
    switch (category) {
      case 'Financial Planning': return <TrendingUp className="w-4 h-4" />;
      case 'Psychology': return <Users className="w-4 h-4" />;
      case 'Savings': return <DollarSign className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  }

  const handleReadArticle = (post: BlogPost) => {
    setSelectedArticle(post);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  // If an article is selected, show the full article view
  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleCloseArticle}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Blog</span>
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold text-[#1F3A8A]">Planmoni</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* Article Header */}
              <div className="relative h-64 sm:h-80 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                {selectedArticle.image ? (
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="text-white text-6xl font-bold opacity-20">
                    {selectedArticle.category.toUpperCase()}
                  </div>
                )}
              </div>

              {/* Article Body */}
              <div className="p-8 lg:p-12">
                {/* Meta Information */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedArticle.category}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>{selectedArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <span className="text-sm text-gray-500">{selectedArticle.readTime}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {selectedArticle.title}
                </h1>

                {/* Excerpt */}
                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                  {selectedArticle.excerpt}
                </p>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed">
                    {selectedArticle.content ? (
                      selectedArticle.content.split('\n').map((paragraph, index) => {
                        if (paragraph.startsWith('## ')) {
                          return (
                            <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                              {paragraph.replace('## ', '')}
                            </h2>
                          );
                        } else if (paragraph.startsWith('### ')) {
                          return (
                            <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                              {paragraph.replace('### ', '')}
                            </h3>
                          );
                        } else if (paragraph.trim() === '') {
                          return <br key={index} />;
                        } else {
                          return (
                            <p key={index} className="mb-4 leading-relaxed">
                              {paragraph}
                            </p>
                          );
                        }
                      })
                    ) : (
                      <p className="text-gray-600 italic">
                        Full article content coming soon...
                      </p>
                    )}
                  </div>
                </div>

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {selectedArticle.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{selectedArticle.author}</div>
                        <div className="text-sm text-gray-600">Author</div>
                      </div>
                    </div>
                    <button
                      onClick={handleCloseArticle}
                      className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                    >
                      <span>Back to Blog</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Related Articles CTA */}
        <div className="py-16 bg-gradient-to-br from-gray-100 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Put These Tips into Practice?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Download Planmoni and start building better financial habits today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://getapp.planmoni.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
              >
                <span>Download Planmoni</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={handleCloseArticle}
                className="inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 transition-colors"
              >
                <span>Read More Articles</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-[#1F3A8A]">Planmoni</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1F3A8A] to-[#1e3a8a] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Planmoni Blog
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Insights, tips, and strategies for better financial discipline and planning
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                
                {/* Categories */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categoriesWithCounts.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`w-full flex items-center justify-between p-3 text-left rounded-xl transition-colors group ${
                          selectedCategory === category.value
                            ? 'bg-[#1F3A8A] text-white'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`transition-colors ${
                            selectedCategory === category.value
                              ? 'text-white'
                              : 'text-gray-400 group-hover:text-[#1F3A8A]'
                          }`}>
                            {category.icon}
                          </div>
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          selectedCategory === category.value
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-[#1F3A8A] to-[#1e3a8a] text-white rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Get the latest financial tips and insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                    <button className="w-full bg-white text-[#1F3A8A] py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-16">
                  <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                    <div className="relative h-64 sm:h-80 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      {featuredPost.image ? (
                        <img 
                          src={featuredPost.image} 
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="text-white text-6xl font-bold opacity-20">FEATURED</div>
                      )}
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-[#1F3A8A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {featuredPost.category}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{featuredPost.date}</span>
                          </div>
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <button 
                          onClick={() => handleReadArticle(featuredPost)}
                          className="inline-flex items-center space-x-2 text-[#1F3A8A] font-semibold hover:text-[#1e3a8a] transition-colors"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Blog Posts Grid */}
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedCategory === 'all' ? 'Latest Articles' : `${selectedCategory} Articles`}
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>Sort by:</span>
                    <select className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Latest</option>
                      <option>Most Popular</option>
                      <option>Most Read</option>
                    </select>
                  </div>
                </div>

                {filteredPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-8">
                    {filteredPosts.map((post, index) => (
                      <article 
                        key={post.id} 
                        onClick={() => handleReadArticle(post)}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-1"
                      >
                        <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          {post.image ? (
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          ) : (
                            <div className="text-gray-400 text-4xl font-bold opacity-30">
                              {post.category.toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1F3A8A] transition-colors leading-tight">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center space-x-1">
                                <User className="w-3 h-3" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{post.date}</span>
                              </div>
                            </div>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-gray-400 text-6xl mb-4">📝</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                    <p className="text-gray-600">
                      {searchTerm 
                        ? `No articles match "${searchTerm}"`
                        : `No articles in ${selectedCategory} category yet`
                      }
                    </p>
                  </div>
                )}

                {/* Load More */}
                {filteredPosts.length > 6 && (
                  <div className="text-center pt-8">
                    <button className="bg-[#1F3A8A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors">
                      Load More Articles
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-gray-100 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Put These Tips into Practice?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Download Planmoni and start building better financial habits today
          </p>
          <a 
            href="https://getapp.planmoni.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
          >
            <span>Download Planmoni</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;