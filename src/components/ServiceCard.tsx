import React from 'react';
import { Check } from 'lucide-react';

interface ServiceFeature {
  text: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  features: ServiceFeature[];
  image: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  image,
  className = '',
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 h-full flex flex-col">
        <div 
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;