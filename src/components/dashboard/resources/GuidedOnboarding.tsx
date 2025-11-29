import React from 'react';
import { FilePlus, BarChart, FileText } from 'lucide-react';

const steps = [
  {
    icon: FilePlus,
    title: 'Step 1: Upload Your Evidence',
    description: 'Navigate to the Evidence tab and securely upload screenshots, screen recordings, or audio files of the harassment. Our system accepts various formats and ensures your data is encrypted.'
  },
  {
    icon: BarChart,
    title: 'Step 2: Analyze Evidence with AI',
    description: 'Once uploaded, click the Analyze button on any piece of evidence. Our AI will process the content to identify patterns, sentiment, and key information, providing you with a preliminary analysis.'
  },
  {
    icon: FileText,
    title: 'Step 3: Generate and View Reports',
    description: 'After analysis, you can generate a consolidated report from the Reports tab. This report organizes the evidence and AI findings into a downloadable PDF, ready for legal or official use.'
  }
];

const GuidedOnboarding: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Guided Onboarding Tutorial</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Welcome to Amani Legal Shield. Here’s how to get started and make the most of our platform.</p>
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 rounded-full p-3">
              <step.icon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-4 bg-blue-50 dark:bg-gray-700/50 rounded-lg">
        <h3 className="font-semibold text-blue-800 dark:text-blue-300">Have More Questions?</h3>
        <p className="text-blue-700 dark:text-blue-400">Our Support Chatbot is available 24/7 to help you with any issues or questions you might have.</p>
      </div>
    </div>
  );
};

export default GuidedOnboarding;
