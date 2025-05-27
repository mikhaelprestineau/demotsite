import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="block text-white mb-2">Reliable Professional</span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Strata & Commercial Cleaning
            </span>
            <span className="block text-white mt-2">in Sydney</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sydney-based cleaning company founded by four friends with a passion for excellence. 
            We specialize in residential, commercial, and Airbnb cleaning, treating every space like our own.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link 
              to="/quote" 
              className="px-8 py-3 rounded-md font-medium bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-200 flex items-center justify-center"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3 rounded-md font-medium border border-green-400 text-green-400 hover:bg-green-400/10 transition-all duration-200 flex items-center justify-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative element - glowing orb */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-green-400/20 to-blue-500/20 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;