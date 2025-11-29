import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const ValidEvidenceGuide: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Guidance on Valid Digital Evidence</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Collecting the right kind of evidence is crucial. Here’s what makes digital evidence strong and what to avoid.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
            <CheckCircle />
            What to Collect
          </h2>
          <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
            <li><b>Un-edited Screenshots/Recordings:</b> Capture the full screen, including the URL, date, and time.</li>
            <li><b>Direct Messages & Emails:</b> Preserve the original format. Avoid copy-pasting text.</li>
            <li><b>Social Media Profiles:</b> Take screenshots of the harasser's profile page, showing their username and public information.</li>
            <li><b>Metadata:</b> If possible, keep the original files, as they contain hidden data (like timestamps) that can be crucial.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
            <XCircle />
            What to Avoid
          </h2>
          <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
            <li><b>Cropped Images:</b> These can be challenged as being out of context.</li>
            <li><b>Summaries or Transcripts:</b> Always prioritize the original evidence over your own typed-out versions.</li>
            <li><b>Deleting Original Posts:</b> Even if they are offensive, the original posts are the primary evidence.</li>
            <li><b>Engaging with the Harasser:</b> While difficult, avoid getting into back-and-forth arguments as it can complicate your case.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 p-4 bg-blue-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-blue-400">
        <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-300">Act Quickly</h3>
                <p className="text-blue-700 dark:text-blue-400">Online content can be deleted. Capture evidence as soon as you see it.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ValidEvidenceGuide;
