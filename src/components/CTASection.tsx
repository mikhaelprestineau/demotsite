import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-green-900/20 blur-3xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for a Pristine Clean Space?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch today for a free, no-obligation quote. We're ready to transform your space.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/quote" 
              className="px-8 py-3 rounded-md font-medium bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-200 flex items-center justify-center"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 rounded-md font-medium border border-green-400 text-green-400 hover:bg-green-400/10 transition-all duration-200 flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;