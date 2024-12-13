import { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const loadProfiles = () => {
      const savedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
      console.log('Loaded profiles:', savedProfiles);
      setProfiles(savedProfiles);
    };

    loadProfiles();
    
    window.addEventListener('storage', loadProfiles);
    return () => {
      window.removeEventListener('storage', loadProfiles);
    };
  }, []);

  const handleEdit = (profile) => {
    console.log('Editing profile:', profile);
    alert(`Editing profile for ${profile.firstName} ${profile.lastName}`);
  };

  const handleDelete = (profile) => {
    if (window.confirm(`Are you sure you want to delete ${profile.firstName}'s profile?`)) {
      const updatedProfiles = profiles.filter(p => p.id !== profile.id);
      localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
      setProfiles(updatedProfiles);
      alert('Profile deleted successfully');
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-blue-700">Total Users</h3>
          <p className="text-3xl font-bold text-blue-900">{profiles.length}</p>
          <p className="text-sm text-blue-600 mt-2">Active Profiles</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-green-700">Scans Today</h3>
          <p className="text-3xl font-bold text-green-900">24</p>
          <p className="text-sm text-green-600 mt-2">↑ 8% from yesterday</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-yellow-700">Detection Rate</h3>
          <p className="text-3xl font-bold text-yellow-900">98.5%</p>
          <p className="text-sm text-yellow-600 mt-2">Last 7 days</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-purple-700">High Risk Cases</h3>
          <p className="text-3xl font-bold text-purple-900">3</p>
          <p className="text-sm text-purple-600 mt-2">Needs attention</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {profiles.slice(0, 5).map((profile) => (
            <div key={profile.id} className="flex items-center justify-between p-4 bg-gray-50 rounded">
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-medium">{profile.firstName} {profile.lastName}</p>
                  <p className="text-sm text-gray-500">Profile created</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(profile.id).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">System Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded">
            <h4 className="font-medium text-gray-700">API Status</h4>
            <p className="text-sm text-green-600">Operational</p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h4 className="font-medium text-gray-700">Model Status</h4>
            <p className="text-sm text-green-600">Active</p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h4 className="font-medium text-gray-700">Database Status</h4>
            <p className="text-sm text-green-600">Connected</p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h4 className="font-medium text-gray-700">Storage Status</h4>
            <p className="text-sm text-green-600">85% Available</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Gender</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Health Info</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {profiles.map((profile) => (
              <tr key={profile.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {profile.firstName} {profile.lastName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {profile.age}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {profile.gender}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{profile.email}</div>
                  <div className="text-sm text-gray-500">{profile.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    <p>Skin Type: {profile.skinType}</p>
                    {profile.familyHistory && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mr-2">
                        Family History
                      </span>
                    )}
                    {profile.previousConditions && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Previous Conditions
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(profile)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(profile)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {['overview', 'analyses', 'users', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm capitalize`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'users' && renderUsers()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;