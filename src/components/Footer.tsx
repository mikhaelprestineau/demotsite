import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Mikhael Prestine</h3>
            <p className="mb-4 text-gray-400">
              Professional cleaning services in Australia, treating every space like our own.
            </p>
            <p className="text-sm text-gray-500">ABN: 52332299016</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-green-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-green-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-400 hover:text-green-400 transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-green-400 transition-colors">
                Strata Cleaning
              </li>
              <li className="text-gray-400 hover:text-green-400 transition-colors">
                Commercial Office Cleaning
              </li>
              <li className="text-gray-400 hover:text-green-400 transition-colors">
                End of Lease Cleaning
              </li>
              <li className="text-gray-400 hover:text-green-400 transition-colors">
                Window Cleaning
              </li>
              <li className="text-gray-400 hover:text-green-400 transition-colors">
                Carpet & Floor Cleaning
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
        <Phone className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
        
  
        <div className=" items-center flex flex-col gap-x-1 text-gray-400">
          <span>0406443589</span>
          
          <span>0488969388</span>
         
          <span>0477364935</span>
        </div>
      </li>
              <li className="flex items-center gap-1 text-green-400">
                <Mail size={30} />
                <span className="text-gray-400">emmanuel@mikhaelprestine.com.au</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-400">Australia, NSW</span>
              </li>
              <li className="flex items-center gap-1">
                <Clock className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-400">Mon - Fri: 8am - 9pm</span>
              </li>
            </ul>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mikhael Prestine Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;