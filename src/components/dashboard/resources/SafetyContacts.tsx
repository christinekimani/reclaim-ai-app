import React from 'react';
import { LifeBuoy, Shield } from 'lucide-react';

const safetyContacts = [
  {
    name: 'Digital Rights Foundation',
    description: 'Provides support to journalists, activists, and human rights defenders facing online threats across Africa.',
    contact: 'https://digitalrightsfoundation.pk/',
  },
  {
    name: 'Access Now',
    description: 'Offers a 24/7 digital security helpline for civil society groups and activists around the world.',
    contact: 'https://www.accessnow.org/help/',
  },
  {
    name: 'End Cyber Harassment (South Africa)',
    description: 'An initiative focused on providing resources and support for victims of online harassment in South Africa.',
    contact: 'https://www.endcyberharassment.co.za/',
  },
];

const SafetyContacts: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Verified Digital Safety Contacts</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">These organizations are dedicated to helping individuals facing online harassment and digital threats.</p>

      <div className="space-y-6">
        {safetyContacts.map((org, index) => (
          <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              {org.name === 'Access Now' ? <LifeBuoy className="text-blue-500"/> : <Shield className="text-blue-500"/>}
              {org.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 mb-3">{org.description}</p>
            <a href={org.contact} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline dark:text-blue-400">
              Visit Website
            </a>
          </div>
        ))}
      </div>

        <div className="mt-10 p-4 bg-red-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-red-400">
            <h3 className="font-semibold text-red-800 dark:text-red-300">In Case of Immediate Danger</h3>
            <p className="text-red-700 dark:text-red-400">If you are in immediate physical danger, please contact your local law enforcement authorities without delay.</p>
        </div>
    </div>
  );
};

export default SafetyContacts;
