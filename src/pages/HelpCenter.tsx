import React from 'react';
import { ArrowLeft, Search, MessageCircle, Phone, Mail, Clock, CheckCircle, AlertCircle, Info, ExternalLink, BookOpen, Shield } from 'lucide-react';

const HelpCenter: React.FC = () => {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I create my first payout plan?",
          answer: "Creating your first payout plan is simple! Download the Planmoni app, complete the quick verification process, add funds to your vault, and set up your preferred payout schedule. Our step-by-step guide will walk you through each stage."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, debit cards, credit cards, and USSD payments. All transactions are secured with bank-level encryption to protect your financial information."
        },
        {
          question: "How long does verification take?",
          answer: "Account verification typically takes 5-10 minutes. You'll need to provide a valid ID and phone number. Once verified, you can immediately start using all Planmoni features."
        }
      ]
    },
    {
      category: "Payouts & Scheduling",
      questions: [
        {
          question: "Can I modify my payout schedule after creating it?",
          answer: "Yes! You can adjust future payout dates, change frequencies, and update amounts. Some changes may require a waiting period for security purposes."
        },
        {
          question: "What happens if I miss a payout date?",
          answer: "Don't worry! If you miss a payout date, the funds remain securely in your vault. You can reschedule the payout or adjust your plan through the app."
        },
        {
          question: "How do emergency withdrawals work?",
          answer: "Emergency withdrawals have a 72-hour cooldown period to encourage disciplined use. During this time, you can cancel the request if you change your mind."
        }
      ]
    },
    {
      category: "Security & Safety",
      questions: [
        {
          question: "How secure is my money with Planmoni?",
          answer: "Your funds are protected with bank-level security including 256-bit encryption, multi-factor authentication, and secure vault storage. We partner with licensed financial institutions to ensure your money is always safe and insured."
        },
        {
          question: "What if I forget my password?",
          answer: "You can reset your password using the 'Forgot Password' link on the login screen. We'll send a secure reset link to your registered email address."
        },
        {
          question: "Can I access my account from multiple devices?",
          answer: "Yes, you can access your Planmoni account from multiple devices. We recommend enabling two-factor authentication for enhanced security."
        }
      ]
    },
    {
      category: "Fees & Pricing",
      questions: [
        {
          question: "Are there any fees for using Planmoni?",
          answer: "Regular scheduled payouts have no fees. Emergency withdrawals may incur a small fee to encourage disciplined use. We believe in transparency - no hidden charges, ever."
        },
        {
          question: "How does Planmoni make money?",
          answer: "Planmoni generates revenue through premium features, emergency withdrawal fees, and partnerships with financial institutions. We never invest your locked funds."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      available: "24/7"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "support@planmoni.com",
      action: "Send Email",
      available: "Response within 2 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "+234 (0) 800 PLANMONI",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM"
    }
  ];

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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Find answers to common questions or get in touch with our support team
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
          </div>
        </div>
      </div>

      {/* Quick Contact Options */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need immediate help?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the best way to reach our support team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#1F3A8A] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="text-sm text-gray-500 mb-6">{option.available}</div>
                <button className="w-full bg-[#1F3A8A] text-white py-3 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find quick answers to the most common questions about Planmoni
            </p>
          </div>

          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-[#1F3A8A] rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                    {categoryIndex + 1}
                  </div>
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                        <h4 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h4>
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 group-open:bg-[#1F3A8A] group-open:text-white group-open:rotate-45 transition-all">
                          +
                        </div>
                      </summary>
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600">
              Explore more ways to get help and learn about Planmoni
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 border border-gray-200 rounded-2xl hover:shadow-xl hover:border-[#1F3A8A] transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1F3A8A] transition-colors">User Guide</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive guide to using all Planmoni features and getting the most out of your financial planning
              </p>
              <div className="inline-flex items-center space-x-2 text-[#1F3A8A] font-semibold group-hover:text-[#1e3a8a] transition-colors">
                <span>Read Guide</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group text-center p-8 border border-gray-200 rounded-2xl hover:shadow-xl hover:border-green-500 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Best Practices</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tips and strategies for effective financial planning and making the most of your payout schedules
              </p>
              <div className="inline-flex items-center space-x-2 text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                <span>Learn More</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group text-center p-8 border border-gray-200 rounded-2xl hover:shadow-xl hover:border-orange-500 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">Troubleshooting</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Solutions to common technical issues and problems you might encounter while using Planmoni
              </p>
              <div className="inline-flex items-center space-x-2 text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                <span>Get Help</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Still Need Help */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still need help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is here to help you with any questions or issues
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact Support</span>
            </a>
            <a 
              href="mailto:support@planmoni.com" 
              className="inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;