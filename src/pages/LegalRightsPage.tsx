import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function LegalRightsPage() {
  return (
    <div className="p-8">
      <Link to="/dashboard" className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <ArrowLeft size={16} className="mr-2" />
        Back to Dashboard
      </Link>
      <h1 className="text-3xl font-bold mb-4">Simplified Legal Rights Information</h1>
      <p className="text-gray-600">This is where the information about legal rights will be displayed.</p>
    </div>
  );
}