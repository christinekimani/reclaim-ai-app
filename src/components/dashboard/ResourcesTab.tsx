import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ShieldCheck, MessageSquare, FileText, Link as LinkIcon, Phone } from 'lucide-react';
import Chatbot from './Chatbot';
import GuidedOnboarding from './resources/GuidedOnboarding';
import DigitalSafety from './resources/DigitalSafety';
import LegalRights from './resources/LegalRights';
import ValidEvidenceGuide from './resources/ValidEvidenceGuide';
import CybercrimeReporting from './resources/CybercrimeReporting';
import SafetyContacts from './resources/SafetyContacts';

type Resource = {
  key: string;
  icon: React.ElementType;
  title: string;
  description: string;
  actionText: string;
  component: React.ElementType;
};

const resources: Resource[] = [
  {
    key: 'onboarding',
    icon: BookOpen,
    title: 'Guided Onboarding Tutorial',
    description: 'Learn how to use the platform effectively to build your case.',
    actionText: 'Start Tutorial',
    component: GuidedOnboarding,
  },
  {
    key: 'digital-safety',
    icon: ShieldCheck,
    title: 'Digital Safety Learning Center',
    description: 'Essential tips to protect yourself from online threats.',
    actionText: 'Learn More',
    component: DigitalSafety,
  },
  {
    key: 'legal-rights',
    icon: FileText,
    title: 'Simplified Legal Rights Information',
    description: 'Understand your rights when facing digital harassment.',
    actionText: 'Learn More',
    component: LegalRights,
  },
    {
    key: 'valid-evidence',
    icon: FileText,
    title: 'Guidance on Valid Digital Evidence',
    description: 'Learn what makes digital evidence admissible and effective.',
    actionText: 'Learn More',
    component: ValidEvidenceGuide,
  },
  {
    key: 'reporting-links',
    icon: LinkIcon,
    title: 'Country-Specific Cybercrime Reporting',
    description: 'Find official links to report cybercrime in your country.',
    actionText: 'View Links',
    component: CybercrimeReporting,
  },
  {
    key: 'safety-contacts',
    icon: Phone,
    title: 'Verified Digital Safety Contacts',
    description: 'Connect with organizations that can help.',
    actionText: 'View Contacts',
    component: SafetyContacts,
  },
];

const ResourceCard = ({ icon: Icon, title, description, actionText, onClick }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow">
    <Icon className="w-10 h-10 text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 flex-grow">{description}</p>
    <button
      onClick={onClick}
      className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors font-semibold"
    >
      {actionText}
    </button>
  </div>
);

export default function ResourcesTab() {
  const [activeResource, setActiveResource] = useState<string | null>(null);

  const ActiveComponent =
    activeResource === 'chatbot' ? Chatbot :
    resources.find((r) => r.key === activeResource)?.component;

  if (ActiveComponent) {
    return (
      <div className="p-4 md:p-6">
        <button
          onClick={() => setActiveResource(null)}
          className="flex items-center gap-2 mb-6 text-sm font-semibold text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Resources
        </button>
        <ActiveComponent />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Resources & Support</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.key}
            icon={resource.icon}
            title={resource.title}
            description={resource.description}
            actionText={resource.actionText}
            onClick={() => setActiveResource(resource.key)}
          />
        ))}
         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow">
            <MessageSquare className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Support Chatbot</h3>
            <p className="text-gray-600 dark:text-gray-300 flex-grow">Get instant answers to your questions from our AI assistant.</p>
            <button
             onClick={() => setActiveResource('chatbot')}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors font-semibold"
            >
              Start a Conversation
            </button>
          </div>
      </div>
    </div>
  );
}
