import React from 'react';
import { Lock, AtSign, Shield } from 'lucide-react';

const safetyTips = [
  {
    icon: Lock,
    title: 'Use Strong, Unique Passwords',
    description: 'Combine uppercase and lowercase letters, numbers, and symbols. Use a password manager to keep track of them. Enable Two-Factor Authentication (2FA) on important accounts like email and social media.'
  },
  {
    icon: AtSign,
    title: 'Recognize Phishing Attempts',
    description: 'Be cautious of unsolicited emails or messages asking for personal information. Check the sender\'s address and look for grammar mistakes. Never click on suspicious links.'
  },
  {
    icon: Shield,
    title: 'Secure Your Social Media',
    description: 'Review your privacy settings on platforms like Facebook, Twitter, and Instagram. Limit who can see your posts and personal information. Be mindful of what you share publicly.'
  }
];

const DigitalSafety: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Digital Safety Learning Center</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Empower yourself with the knowledge to stay safe online. Here are some fundamental practices.</p>

      <div className="space-y-8">
        {safetyTips.map((tip, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-green-500/10 text-green-500 dark:bg-green-500/20 rounded-full p-3">
              <tip.icon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{tip.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-4 bg-yellow-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-yellow-400">
        <h3 className="font-semibold text-yellow-800 dark:text-yellow-300">Stay Vigilant</h3>
        <p className="text-yellow-700 dark:text-yellow-400">Digital safety is an ongoing process. Regularly update your passwords and review your privacy settings.</p>
      </div>
    </div>
  );
};

export default DigitalSafety;
