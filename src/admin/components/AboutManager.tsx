import React, { useState } from 'react';
import { Save, Plus, Trash2, Edit } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const AboutManager: React.FC = () => {
  const [missionText, setMissionText] = useState(`At Planmoni, we believe that financial discipline shouldn't be a struggle. Traditional banking gives you access to all your money all the time, making it easy to spend impulsively and difficult to stick to financial goals.

Our solution is simple yet powerful: we help you lock away your money and receive it back on a schedule that matches your needs. This creates natural barriers to impulsive spending while ensuring you have access to funds when you truly need them.

By combining behavioral psychology with modern technology, we're helping thousands of people across Africa build better financial habits and achieve their goals.`);

  const [storyText, setStoryText] = useState(`Our founders noticed a common pattern among friends, family, and colleagues: people would receive money (salary, business income, gifts) and struggle to make it last. The issue wasn't lack of income—it was the difficulty of managing access to that income over time.

Traditional budgeting apps and financial advice focused on tracking and willpower, but didn't address the fundamental issue: when all your money is easily accessible, it's easy to spend it impulsively.

We realized that the solution wasn't more tracking or more willpower—it was better access control. By creating a system that locks your money away and releases it on a predetermined schedule, we could help people naturally develop better spending habits.

The result is Planmoni: a financial planning tool that combines the security of a vault with the flexibility of personalized payout schedules, helping users achieve their financial goals through structured access to their own money.`);

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: '1',
      name: 'Adebayo Ogundimu',
      role: 'CEO & Co-Founder',
      bio: 'Former fintech executive with 10+ years experience in digital banking and financial inclusion across Africa.',
      image: '/assets/team-placeholder.jpg'
    },
    {
      id: '2',
      name: 'Kemi Adebisi',
      role: 'CTO & Co-Founder',
      bio: 'Software architect and security expert who previously built payment systems for major Nigerian banks.',
      image: '/assets/team-placeholder.jpg'
    },
    {
      id: '3',
      name: 'Chinedu Okoro',
      role: 'Head of Product',
      bio: 'Product strategist with deep expertise in behavioral economics and user experience design.',
      image: '/assets/team-placeholder.jpg'
    },
    {
      id: '4',
      name: 'Folake Adeyemi',
      role: 'Head of Operations',
      bio: 'Operations leader with extensive experience in financial services compliance and risk management.',
      image: '/assets/team-placeholder.jpg'
    }
  ]);

  const [milestones, setMilestones] = useState<Milestone[]>([
    {
      id: '1',
      year: '2023',
      title: 'Company Founded',
      description: 'Planmoni was founded with a mission to help people develop better financial habits through technology.'
    },
    {
      id: '2',
      year: '2024',
      title: 'Beta Launch',
      description: 'Launched our beta version with 1,000 early users, gathering valuable feedback and insights.'
    },
    {
      id: '3',
      year: '2024',
      title: 'Seed Funding',
      description: 'Raised seed funding to accelerate product development and expand our team.'
    },
    {
      id: '4',
      year: '2025',
      title: 'Public Launch',
      description: 'Officially launched Planmoni to the public, helping thousands achieve financial discipline.'
    }
  ]);

  const [values, setValues] = useState<Value[]>([
    {
      id: '1',
      title: 'Security First',
      description: 'Your financial security is our top priority. We implement bank-level security measures to protect your funds and data.',
      icon: 'Shield'
    },
    {
      id: '2',
      title: 'User-Centric',
      description: 'Every feature we build is designed with our users\' financial wellbeing and success in mind.',
      icon: 'Heart'
    },
    {
      id: '3',
      title: 'Innovation',
      description: 'We continuously innovate to create better solutions for financial discipline and planning.',
      icon: 'Lightbulb'
    },
    {
      id: '4',
      title: 'Accessibility',
      description: 'Financial planning tools should be accessible to everyone, regardless of income level or background.',
      icon: 'Globe'
    }
  ]);

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

  const handleSave = () => {
    // In a real app, this would save to a backend
    alert('Changes saved successfully!');
  };

  const handleAddTeamMember = () => {
    const member: TeamMember = {
      id: Date.now().toString(),
      ...newTeamMember
    };
    setTeamMembers([...teamMembers, member]);
    setNewTeamMember({ name: '', role: '', bio: '', image: '' });
    setShowTeamModal(false);
  };

  const handleAddMilestone = () => {
    const milestone: Milestone = {
      id: Date.now().toString(),
      ...newMilestone
    };
    setMilestones([...milestones, milestone]);
    setNewMilestone({ year: '', title: '', description: '' });
    setShowMilestoneModal(false);
  };

  const handleAddValue = () => {
    const value: Value = {
      id: Date.now().toString(),
      ...newValue
    };
    setValues([...values, value]);
    setNewValue({ title: '', description: '', icon: 'Shield' });
    setShowValueModal(false);
  };

  const handleDeleteTeamMember = (id: string) => {
    if (confirm('Are you sure you want to remove this team member?')) {
      setTeamMembers(teamMembers.filter(member => member.id !== id));
    }
  };

  const handleDeleteMilestone = (id: string) => {
    if (confirm('Are you sure you want to delete this milestone?')) {
      setMilestones(milestones.filter(milestone => milestone.id !== id));
    }
  };

  const handleDeleteValue = (id: string) => {
    if (confirm('Are you sure you want to delete this value?')) {
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