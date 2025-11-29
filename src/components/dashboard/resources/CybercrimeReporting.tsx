import React from 'react';
import { ExternalLink } from 'lucide-react';

const reportingLinks = [
  { country: 'Kenya', url: 'https://www.cybercrime.go.ke/', name: 'National KE-CIRT/CC' },
  { country: 'Nigeria', url: 'https://cert.gov.ng/', name: 'ngCERT' },
  { country: 'South Africa', url: 'https://www.cybersecurityhub.gov.za/', name: 'Cybersecurity Hub' },
  { country: 'Ghana', url: 'https://csirt.gov.gh/', name: 'National Cyber Security Centre' },
  { country: 'Rwanda', url: 'https://www.nca.rw/service/cybersecurity', name: 'Rwanda NCSA' },
];

const CybercrimeReporting: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Country-Specific Cybercrime Reporting</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Here are official government portals where you can report cybercrime in several African countries.</p>

      <div className="space-y-4">
        {reportingLinks.map((link) => (
          <a 
            key={link.country} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div>
              <p className="font-semibold text-lg text-gray-900 dark:text-white">{link.country}</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">{link.name}</p>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-500" />
          </a>
        ))}
      </div>

      <div className="mt-10 p-4 bg-yellow-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-yellow-400">
        <h3 className="font-semibold text-yellow-800 dark:text-yellow-300">No Portal for Your Country?</h3>
        <p className="text-yellow-700 dark:text-yellow-400">If your country is not listed, we recommend visiting your local police service's official website or station to inquire about the appropriate cybercrime reporting procedures.</p>
      </div>
    </div>
  );
};

export default CybercrimeReporting;
