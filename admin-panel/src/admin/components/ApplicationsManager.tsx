import React, { useState, useEffect } from 'react';
import { Search, Filter, Eye, Mail, Phone, Calendar, User, Briefcase, MapPin, FileText, Download, Trash2 } from 'lucide-react';
import { applicationsDataManager, JobApplication } from '../../data/applicationsData';

const ApplicationsManager: React.FC = () => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = () => {
    const allApplications = applicationsDataManager.getAllApplications();
    setApplications(allApplications);
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.positionTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || app.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleViewApplication = (application: JobApplication) => {
    setSelectedApplication(application);
    setShowViewModal(true);
  };

  const handleUpdateStatus = (id: string, status: JobApplication['status']) => {
    applicationsDataManager.updateApplication(id, { status });
    loadApplications();
  };

  const handleDeleteApplication = (id: string) => {
    if (confirm('Are you sure you want to delete this application?')) {
      applicationsDataManager.deleteApplication(id);
      loadApplications();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewing': return 'bg-blue-100 text-blue-800';
      case 'interview': return 'bg-purple-100 text-purple-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'hired': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === 'pending').length,
    reviewing: applications.filter(app => app.status === 'reviewing').length,
    interview: applications.filter(app => app.status === 'interview').length,
    hired: applications.filter(app => app.status === 'hired').length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Job Applications</h1>
          <p className="text-gray-600">Manage and review job applications</p>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Applications</p>
              <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Review</p>
              <p className="text-3xl font-bold text-gray-900">{stats.pending}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Under Review</p>
              <p className="text-3xl font-bold text-gray-900">{stats.reviewing}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Interview Stage</p>
              <p className="text-3xl font-bold text-gray-900">{stats.interview}</p>
            </div>
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Hired</p>
              <p className="text-3xl font-bold text-gray-900">{stats.hired}</p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search applications..."
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
              <option value="pending">Pending</option>
              <option value="reviewing">Reviewing</option>
              <option value="interview">Interview</option>
              <option value="rejected">Rejected</option>
              <option value="hired">Hired</option>
            </select>
          </div>
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {filteredApplications.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-gray-900">Applicant</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-900">Position</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-900">Experience</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-900">Applied Date</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredApplications.map((application) => (
                  <tr key={application.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {application.applicantName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{application.applicantName}</h3>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Mail className="w-3 h-3" />
                            <span>{application.email}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Phone className="w-3 h-3" />
                            <span>{application.phone}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-gray-900">{application.positionTitle}</div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <MapPin className="w-3 h-3" />
                          <span>{application.location}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900">{application.experience}</span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={application.status}
                        onChange={(e) => handleUpdateStatus(application.id, e.target.value as JobApplication['status'])}
                        className={`text-xs border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${getStatusColor(application.status)}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="reviewing">Reviewing</option>
                        <option value="interview">Interview</option>
                        <option value="rejected">Rejected</option>
                        <option value="hired">Hired</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(application.appliedDate).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleViewApplication(application)}
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                          title="View Application"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteApplication(application.id)}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                          title="Delete Application"
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
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📄</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Applications Found</h3>
            <p className="text-gray-600">
              {searchTerm || filterStatus !== 'all' 
                ? 'No applications match your current filters'
                : 'No job applications have been submitted yet'
              }
            </p>
          </div>
        )}
      </div>

      {/* View Application Modal */}
      {showViewModal && selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Application Details</h2>
                <button
                  onClick={() => setShowViewModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-8">
                {/* Applicant Info */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Applicant Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                      <p className="text-gray-900">{selectedApplication.applicantName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                      <p className="text-gray-900">{selectedApplication.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                      <p className="text-gray-900">{selectedApplication.phone}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                      <p className="text-gray-900">{selectedApplication.location}</p>
                    </div>
                  </div>
                </div>

                {/* Position Info */}
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Position Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Position</label>
                      <p className="text-gray-900">{selectedApplication.positionTitle}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Experience Level</label>
                      <p className="text-gray-900">{selectedApplication.experience}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Available Start Date</label>
                      <p className="text-gray-900">{new Date(selectedApplication.availableStartDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Salary Expectation</label>
                      <p className="text-gray-900">{selectedApplication.salaryExpectation || 'Not specified'}</p>
                    </div>
                  </div>
                </div>

                {/* Links */}
                {(selectedApplication.portfolioUrl || selectedApplication.linkedinUrl) && (
                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Links</h3>
                    <div className="space-y-3">
                      {selectedApplication.portfolioUrl && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Portfolio</label>
                          <a 
                            href={selectedApplication.portfolioUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            {selectedApplication.portfolioUrl}
                          </a>
                        </div>
                      )}
                      {selectedApplication.linkedinUrl && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">LinkedIn</label>
                          <a 
                            href={selectedApplication.linkedinUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            {selectedApplication.linkedinUrl}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Resume */}
                {selectedApplication.resumeFileName && (
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Resume</h3>
                    <div className="flex items-center space-x-3">
                      <FileText className="w-6 h-6 text-green-600" />
                      <span className="text-gray-900">{selectedApplication.resumeFileName}</span>
                      <button className="text-green-600 hover:text-green-800 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Cover Letter */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Cover Letter</h3>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {selectedApplication.coverLetter}
                    </p>
                  </div>
                </div>

                {/* Application Status */}
                <div className="bg-yellow-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Application Status</h3>
                  <div className="flex items-center space-x-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedApplication.status)}`}>
                      {selectedApplication.status}
                    </span>
                    <span className="text-gray-600">
                      Applied on {new Date(selectedApplication.appliedDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowViewModal(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <a
                  href={`mailto:${selectedApplication.email}?subject=Re: ${selectedApplication.positionTitle} Application`}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Applicant</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationsManager;