import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2, Edit } from 'lucide-react';
import { aboutDataManager, TeamMember, Milestone, Value } from '../../data/aboutData';

const AboutManager: React.FC = () => {
  const [missionText, setMissionText] = useState('');
  const [storyText, setStoryText] = useState('');
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [values, setValues] = useState<Value[]>([]);

  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showMilestoneModal, setShowMilestoneModal] = useState(false);
  const [showValueModal, setShowValueModal] = useState(false);

  const [newTeamMember, setNewTeamMember] = useState({
    name: '',
    role: '',
    bio: '',
    image: ''
  });

  const [newMilestone, setNewMilestone] = useState({
    year: '',
    title: '',
    description: ''
  });

  const [newValue, setNewValue] = useState({
    title: '',
    description: '',
    icon: 'Shield'
  });

  // Load data on component mount
  useEffect(() => {
    loadAboutData();
  }, []);

  const loadAboutData = () => {
    const aboutContent = aboutDataManager.getAboutContent();
    setMissionText(aboutContent.missionText);
    setStoryText(aboutContent.storyText);
    setTeamMembers(aboutContent.teamMembers);
    setMilestones(aboutContent.milestones);
    setValues(aboutContent.values);
  };

  const handleSave = () => {
    // Save all current state to the data manager
    aboutDataManager.updateMissionText(missionText);
    aboutDataManager.updateStoryText(storyText);
    aboutDataManager.updateTeamMembers(teamMembers);
    aboutDataManager.updateMilestones(milestones);
    aboutDataManager.updateValues(values);
    
    alert('Changes saved successfully!');
  };

  const handleAddTeamMember = () => {
    const member = aboutDataManager.addTeamMember(newTeamMember);
    setTeamMembers([...teamMembers, member]);
    setNewTeamMember({ name: '', role: '', bio: '', image: '' });
    setShowTeamModal(false);
  };

  const handleAddMilestone = () => {
    const milestone = aboutDataManager.addMilestone(newMilestone);
    setMilestones([...milestones, milestone]);
    setNewMilestone({ year: '', title: '', description: '' });
    setShowMilestoneModal(false);
  };

  const handleAddValue = () => {
    const value = aboutDataManager.addValue(newValue);
    setValues([...values, value]);
    setNewValue({ title: '', description: '', icon: 'Shield' });
    setShowValueModal(false);
  };

  const handleDeleteTeamMember = (id: string) => {
    if (confirm('Are you sure you want to remove this team member?')) {
      aboutDataManager.deleteTeamMember(id);
      setTeamMembers(teamMembers.filter(member => member.id !== id));
    }
  };

  const handleDeleteMilestone = (id: string) => {
    if (confirm('Are you sure you want to delete this milestone?')) {
      aboutDataManager.deleteMilestone(id);
      setMilestones(milestones.filter(milestone => milestone.id !== id));
    }
  };

  const handleDeleteValue = (id: string) => {
    if (confirm('Are you sure you want to delete this value?')) {
      aboutDataManager.deleteValue(id);
      setValues(values.filter(value => value.id !== id));
    }
  };

  const iconOptions = ['Shield', 'Heart', 'Lightbulb', 'Globe', 'Target', 'Users', 'Award', 'Zap'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">About Page Management</h1>
          <p className="text-gray-600">Edit company information, team, and story</p>
        </div>
        <button
          onClick={handleSave}
          className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
        >
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Mission Statement</h2>
        <textarea
          value={missionText}
          onChange={(e) => setMissionText(e.target.value)}
          rows={8}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none"
          placeholder="Enter mission statement..."
        />
      </div>

      {/* Story Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Our Story</h2>
        <textarea
          value={storyText}
          onChange={(e) => setStoryText(e.target.value)}
          rows={10}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none"
          placeholder="Enter company story..."
        />
      </div>

      {/* Values Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Core Values</h2>
          <button
            onClick={() => setShowValueModal(true)}
            className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-4 py-2 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Value</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {values.map((value) => (
            <div key={value.id} className="border border-gray-200 rounded-xl p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-gray-900">{value.title}</h3>
                <button
                  onClick={() => handleDeleteValue(value.id)}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-gray-600 text-sm mb-2">{value.description}</p>
              <span className="text-xs text-gray-500">Icon: {value.icon}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Team Members</h2>
          <button
            onClick={() => setShowTeamModal(true)}
            className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-4 py-2 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Member</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="border border-gray-200 rounded-xl p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-[#1F3A8A] font-medium text-sm">{member.role}</p>
                </div>
                <button
                  onClick={() => handleDeleteTeamMember(member.id)}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Company Milestones</h2>
          <button
            onClick={() => setShowMilestoneModal(true)}
            className="inline-flex items-center space-x-2 bg-[#1F3A8A] text-white px-4 py-2 rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Milestone</span>
          </button>
        </div>

        <div className="space-y-4">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="flex items-start space-x-4 border border-gray-200 rounded-xl p-4">
              <div className="w-16 h-16 bg-[#1F3A8A] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                {milestone.year}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
              <button
                onClick={() => handleDeleteMilestone(milestone.id)}
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add Team Member Modal */}
      {showTeamModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Team Member</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={newTeamMember.name}
                    onChange={(e) => setNewTeamMember({...newTeamMember, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
                  <input
                    type="text"
                    value={newTeamMember.role}
                    onChange={(e) => setNewTeamMember({...newTeamMember, role: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="Job title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
                  <textarea
                    value={newTeamMember.bio}
                    onChange={(e) => setNewTeamMember({...newTeamMember, bio: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none"
                    placeholder="Brief biography"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Image URL</label>
                  <input
                    type="text"
                    value={newTeamMember.image}
                    onChange={(e) => setNewTeamMember({...newTeamMember, image: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="/assets/team-member.jpg"
                  />
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => setShowTeamModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTeamMember}
                  className="flex-1 px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  Add Member
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Milestone Modal */}
      {showMilestoneModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Milestone</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Year</label>
                  <input
                    type="text"
                    value={newMilestone.year}
                    onChange={(e) => setNewMilestone({...newMilestone, year: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="2025"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={newMilestone.title}
                    onChange={(e) => setNewMilestone({...newMilestone, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="Milestone title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={newMilestone.description}
                    onChange={(e) => setNewMilestone({...newMilestone, description: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none"
                    placeholder="Describe the milestone"
                  />
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => setShowMilestoneModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddMilestone}
                  className="flex-1 px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  Add Milestone
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Value Modal */}
      {showValueModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Core Value</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={newValue.title}
                    onChange={(e) => setNewValue({...newValue, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                    placeholder="Value title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Icon</label>
                  <select
                    value={newValue.icon}
                    onChange={(e) => setNewValue({...newValue, icon: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all"
                  >
                    {iconOptions.map(icon => (
                      <option key={icon} value={icon}>{icon}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={newValue.description}
                    onChange={(e) => setNewValue({...newValue, description: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#1F3A8A] transition-all resize-none"
                    placeholder="Describe this core value"
                  />
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => setShowValueModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddValue}
                  className="flex-1 px-6 py-3 bg-[#1F3A8A] text-white rounded-xl font-semibold hover:bg-[#1e3a8a] transition-colors"
                >
                  Add Value
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutManager;