import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center px-4">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-blue-500/30 rounded-full blur-3xl opacity-70"></div>
          <h1 className="text-9xl font-bold text-white relative">404</h1>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-md font-medium bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-200 flex items-center justify-center"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-md font-medium border border-green-400 text-green-400 hover:bg-green-400/10 transition-all duration-200 flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;