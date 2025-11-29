import { useState } from 'react';
import { User, Shield, Bell, HardDrive } from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'data':
        return <DataSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">Settings</h2>
        <div className="flex space-x-8 border-b mb-6">
            <TabButton icon={User} label="Profile" tabName="profile" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabButton icon={Shield} label="Security" tabName="security" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabButton icon={Bell} label="Notifications" tabName="notifications" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabButton icon={HardDrive} label="Data" tabName="data" activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div>
            {renderContent()}
        </div>
    </div>
  );
};

const TabButton = ({ icon: Icon, label, tabName, activeTab, setActiveTab }) => (
    <button 
        onClick={() => setActiveTab(tabName)}
        className={`flex items-center space-x-2 pb-2 border-b-2 ${activeTab === tabName ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
        <Icon size={20} />
        <span className="font-medium">{label}</span>
    </button>
)

const ProfileSettings = () => (
    <div>
        <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
        <div className="flex items-center space-x-6">
            <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/80752e7d-bd2b-4c91-852a-2577e00f4628/avatar-2pdbv98-1764376829637.webp" alt="User Avatar" className="w-24 h-24 rounded-full bg-gray-200"/>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">Change Picture</button>
                <p className="text-xs text-gray-500 mt-2">JPG, GIF or PNG. 1MB max.</p>
            </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" defaultValue="John Doe" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" defaultValue="john.doe@example.com" readOnly className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm sm:text-sm" />
            </div>
        </div>
        <div className="mt-6 text-right">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Save Changes</button>
        </div>
    </div>
);

const SecuritySettings = () => (
    <div>
        <h3 className="text-xl font-semibold mb-4">Security Settings</h3>
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                <input type="password" className="mt-1 block w-full md:w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input type="password" className="mt-1 block w-full md:w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input type="password" className="mt-1 block w-full md:w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
        </div>
        <div className="mt-6 text-right">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Update Password</button>
        </div>
        <div className="mt-8 pt-6 border-t">
            <h4 className="text-lg font-semibold">Two-Factor Authentication</h4>
            <p className="text-sm text-gray-500 mb-4">Add an extra layer of security to your account.</p>
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300">Enable 2FA</button>
        </div>
    </div>
);

const NotificationSettings = () => (
    <div>
        <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
        <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                    <p className="font-medium">Evidence Analysis Complete</p>
                    <p className="text-sm text-gray-500">Notify me when AI analysis of my evidence is finished.</p>
                </div>
                <label className="switch"><input type="checkbox" defaultChecked /><span className="slider round"></span></label>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                    <p className="font-medium">New Report Generated</p>
                    <p className="text-sm text-gray-500">Notify me when a new report is available for download.</p>
                </div>
                <label className="switch"><input type="checkbox" defaultChecked /><span className="slider round"></span></label>
            </div>
             <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                    <p className="font-medium">Security Alerts</p>
                    <p className="text-sm text-gray-500">Notify me about unusual activity or changes to my account.</p>
                </div>
                <label className="switch"><input type="checkbox" defaultChecked /><span className="slider round"></span></label>
            </div>
        </div>
    </div>
);

const DataSettings = () => (
    <div>
        <h3 className="text-xl font-semibold mb-4">Data Management</h3>
         <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-semibold">Export Your Data</h4>
            <p className="text-sm text-gray-500 mb-4">You can export all your evidence and reports as a single zip file.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Export Data</button>
        </div>
        <div className="mt-8 p-4 border border-red-300 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-red-700">Delete Account</h4>
            <p className="text-sm text-gray-600 mb-4">Permanently delete your account and all associated data. This action is irreversible.</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">Delete My Account</button>
        </div>
    </div>
);

export default SettingsPage;
