import React from 'react';
import { Gavel, BookText, AlertTriangle } from 'lucide-react';

const LegalRights: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Simplified Legal Rights Information</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Understanding your rights is the first step to justice. This is a general guide, not a substitute for legal advice.</p>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0"><Gavel className="w-8 h-8 text-indigo-500" /></div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Right to Protection</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Most African countries have laws against harassment, defamation, and threats, which extend to online activities. You have the right to report these incidents to law enforcement.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0"><BookText className="w-8 h-8 text-indigo-500" /></div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Freedom of Speech vs. Harassment</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">While freedom of speech is a fundamental right, it does not protect targeted harassment, hate speech, or incitement to violence. Understanding this distinction is key to building your case.</p>
          </div>
        </div>
      </div>

      <div className="mt-10 p-4 bg-red-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-red-400">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-red-800 dark:text-red-300">Important Disclaimer</h3>
            <p className="text-red-700 dark:text-red-400">Laws vary significantly by country. This information is for educational purposes only. Always consult with a qualified legal professional in your jurisdiction for advice on your specific situation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalRights;
