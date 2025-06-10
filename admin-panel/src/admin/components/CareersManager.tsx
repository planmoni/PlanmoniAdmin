import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, MapPin, Clock, DollarSign, Briefcase, Eye, X } from 'lucide-react';
import { careersDataManager, JobPosition } from '../../data/careersData';

const CareersManager: React.FC = () => {
  const [positions, setPositions] = useState<JobPosition[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [editingPosition, setEditingPosition] = useState<JobPosition | null>(null);
  const [viewingPosition, setViewingPosition] = useState<JobPosition | null>(null);

  const [newPosition, setNewPosition] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
    requirements: [''],
    status: 'active' as const
  });

  const departments = ['Engineering', 'Product', 'Marketing', 'Customer Success', 'Operations', 'Finance'];
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];

  // Load positions on component mount
  useEffect(() => {
    loadPositions();
  }, []);

  const loadPositions = () => {
    const allPositions = careersDataManager.getAllPositions();
    setPositions(allPositions);
  };

  const handleCreatePosition = () => {
    if (!newPosition.title || !newPosition.department || !newPosition.location || !newPosition.description) {
      alert('Please fill in all required fields');
      return;
    }

    const positionData = {
      ...newPosition,
      requirements: newPosition.requirements.filter(req => req.trim() !== ''),
      postedDate: new Date().toISOString().split('T')[0]
    };

    careersDataManager.addPosition(positionData);
    loadPositions();
    resetForm();
    setShowCreateModal(false);
    alert('Job position created successfully!');
  };

  const handleEditPosition = (position: JobPosition) => {
    setEditingPosition(position);
    setNewPosition({
      title: position.title,
      department: position.department,
      location: position.location,
      type: position.type,
      salary: position.salary,
      description: position.description,
      requirements: [...position.requirements],
      status: position.status
    });
    setShowEditModal(true);
  };

  const handleUpdatePosition = () => {
    if (!editingPosition) return;

    if (!newPosition.title || !newPosition.department || !newPosition.location || !newPosition.description) {
      alert('Please fill in all required fields');
      return;
    }

    const updatedData = {
      ...newPosition,
      requirements: newPosition.requirements.filter(req => req.trim() !== '')
    };

    careersDataManager.updatePosition(editingPosition.id, updatedData);
    loadPositions();
    resetForm();
    setEditingPosition(null);
    setShowEditModal(false);
    alert('Job position updated successfully!');
  };

  const handleViewPosition = (position: JobPosition) => {
    setViewingPosition(position);
    setShowViewModal(true);
  };

  const handleDeletePosition = (id: string) => {
    if (confirm('Are you sure you want to delete this position?')) {
      careersDataManager.deletePosition(id);
      loadPositions();
      alert('Job position deleted successfully!');
    }
  };

  const resetForm = () => {
    setNewPosition({
      title: '',
      department: '',
      location: '',
      type: 'Full-time',
      salary: '',
      description: '',
      requirements: [''],
      status: 'active'
    });
  };

  const handleCloseModals = () => {
    setShowCreateModal(false);
    setShowEditModal(false);
    setShowViewModal(false);
    setEditingPosition(null);
    setViewingPosition(null);
    resetForm();
  };

  const addRequirement = () => {
    setNewPosition({
      ...newPosition,
      requirements: [...newPosition.requirements, '']
    });
  };

  const updateRequirement = (index: number, value: string) => {
    const updated = [...newPosition.requirements];
    updated[index] = value;
    setNewPosition({
      ...newPosition,
      requirements: updated
    });
  };

  const removeRequirement = (index: number) => {
    setNewPosition({
      ...newPosition,
      requirements: newPosition.requirements.filter((_, i) => i !== index)
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Careers Management</h1>
          <p className="text-gray-600">Manage job openings and applications</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add Position</span>
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Positions</p>
              <p className="text-3xl font-bold text-gray-900">{positions.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Positions</p>
              <p className="text-3xl font-bold text-gray-900">
                {positions.filter(p => p.status === 'active').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Departments</p>
              <p className="text-3xl font-bold text-gray-900">
                {new Set(positions.map(p => p.department)).size}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Remote Positions</p>
              <p className="text-3xl font-bold text-gray-900">
                {positions.filter(p => p.location.toLowerCase().includes('remote')).length}
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Positions Grid */}
      <div className="grid gap-6">
        {positions.map((position) => (
          <div key={position.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-[#1F3A8A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {position.department}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{position.type}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <DollarSign className="w-4 h-4" />
                    <span>{position.salary}</span>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(position.status)}`}>
                    {position.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{position.title}</h3>
                <p className="text-gray-600 mb-4">{position.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.slice(0, 3).map((req, index) => (
                      <li key={index} className="flex items-start space-x-2 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#1F3A8A] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                    {position.requirements.length > 3 && (
                      <li className="text-sm text-gray-500">
                        +{position.requirements.length - 3} more requirements
                      </li>
                    )}
                  </ul>
                </div>

                <p className="text-sm text-gray-500">Posted on {position.postedDate}</p>
              </div>
              
              <div className="flex flex-col justify-center space-y-3 lg:w-48">
                <button 
                  onClick={() => handleViewPosition(position)}
                  className="flex items-center justify-center space-x-2 bg-gray-50 text-gray-700 px-4 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>
                <button 
                  onClick={() => handleEditPosition(position)}
                  className="flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-xl font-semibold hover:bg-blue-100 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button 
                  onClick={() => handleDeletePosition(position.id)}
                  className="flex items-center justify-center space-x-2 bg-red-50 text-red-700 px-4 py-3 rounded-xl font-semibold hover:bg-red-100 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {positions.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
            <div className="text-gray-400 text-6xl mb-4">💼</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Job Positions</h3>
            <p className="text-gray-600 mb-6">
              Create your first job position to start building your team.
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Add First Position</span>
            </button>
          </div>
        )}
      </div>

      {/* Create Position Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Add New Position</h2>
                <button
                  onClick={handleCloseModals}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Job Title *</label>
                  <input
                    type="text"
                    value={newPosition.title}
                    onChange={(e) => setNewPosition({...newPosition, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="e.g., Senior Frontend Developer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Department *</label>
                    <select
                      value={newPosition.department}
                      onChange={(e) => setNewPosition({...newPosition, department: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    >
                      <option value="">Select department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Job Type</label>
                    <select
                      value={newPosition.type}
                      onChange={(e) => setNewPosition({...newPosition, type: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    >
                      {jobTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Location *</label>
                    <input
                      type="text"
                      value={newPosition.location}
                      onChange={(e) => setNewPosition({...newPosition, location: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                      placeholder="e.g., Lagos, Nigeria"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Salary Range</label>
                    <input
                      type="text"
                      value={newPosition.salary}
                      onChange={(e) => setNewPosition({...newPosition, salary: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                      placeholder="e.g., ₦8M - ₦12M"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Job Description *</label>
                  <textarea
                    value={newPosition.description}
                    onChange={(e) => setNewPosition({...newPosition, description: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none"
                    placeholder="Describe the role and responsibilities..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Requirements</label>
                  <div className="space-y-2">
                    {newPosition.requirements.map((req, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={req}
                          onChange={(e) => updateRequirement(index, e.target.value)}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                          placeholder="Enter requirement"
                        />
                        {newPosition.requirements.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeRequirement(index)}
                            className="p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addRequirement}
                      className="text-[#1F3A8A] hover:text-[#1e3a8a] font-semibold text-sm"
                    >
                      + Add Requirement
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                  <select
                    value={newPosition.status}
                    onChange={(e) => setNewPosition({...newPosition, status: e.target.value as any})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                  >
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                    <option value="closed">Closed</option>
                  </select>
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
                  onClick={handleCreatePosition}
                  className="flex-1 px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  Add Position
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Position Modal */}
      {showEditModal && editingPosition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Edit Position</h2>
                <button
                  onClick={handleCloseModals}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Job Title *</label>
                  <input
                    type="text"
                    value={newPosition.title}
                    onChange={(e) => setNewPosition({...newPosition, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="e.g., Senior Frontend Developer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Department *</label>
                    <select
                      value={newPosition.department}
                      onChange={(e) => setNewPosition({...newPosition, department: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    >
                      <option value="">Select department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Job Type</label>
                    <select
                      value={newPosition.type}
                      onChange={(e) => setNewPosition({...newPosition, type: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    >
                      {jobTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Location *</label>
                    <input
                      type="text"
                      value={newPosition.location}
                      onChange={(e) => setNewPosition({...newPosition, location: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                      placeholder="e.g., Lagos, Nigeria"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Salary Range</label>
                    <input
                      type="text"
                      value={newPosition.salary}
                      onChange={(e) => setNewPosition({...newPosition, salary: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                      placeholder="e.g., ₦8M - ₦12M"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Job Description *</label>
                  <textarea
                    value={newPosition.description}
                    onChange={(e) => setNewPosition({...newPosition, description: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none"
                    placeholder="Describe the role and responsibilities..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Requirements</label>
                  <div className="space-y-2">
                    {newPosition.requirements.map((req, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={req}
                          onChange={(e) => updateRequirement(index, e.target.value)}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                          placeholder="Enter requirement"
                        />
                        {newPosition.requirements.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeRequirement(index)}
                            className="p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addRequirement}
                      className="text-[#1F3A8A] hover:text-[#1e3a8a] font-semibold text-sm"
                    >
                      + Add Requirement
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                  <select
                    value={newPosition.status}
                    onChange={(e) => setNewPosition({...newPosition, status: e.target.value as any})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                  >
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                    <option value="closed">Closed</option>
                  </select>
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
                  onClick={handleUpdatePosition}
                  className="flex-1 px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  Update Position
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Position Modal */}
      {showViewModal && viewingPosition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">View Position</h2>
                <button
                  onClick={handleCloseModals}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-[#1F3A8A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {viewingPosition.department}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{viewingPosition.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{viewingPosition.type}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <DollarSign className="w-4 h-4" />
                    <span>{viewingPosition.salary}</span>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(viewingPosition.status)}`}>
                    {viewingPosition.status}
                  </span>
                </div>
                
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{viewingPosition.title}</h1>
                  <p className="text-gray-600 mb-6">{viewingPosition.description}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {viewingPosition.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#1F3A8A] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm text-gray-500">
                  Posted on {viewingPosition.postedDate}
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => {
                    handleCloseModals();
                    handleEditPosition(viewingPosition);
                  }}
                  className="px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  Edit Position
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersManager;