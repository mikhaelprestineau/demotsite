import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location?: string;
  quote: string;
  rating?: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  quote,
  rating = 5,
  image,
}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-xl blur-md opacity-75"></div>
      <div className="relative p-6 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl h-full">
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <blockquote className="text-gray-300 mb-6 italic">"{quote}"</blockquote>
        <div className="flex items-center">
          {image && (
            <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
              <img 
                src={image} 
                alt={name} 
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-medium text-white">{name}</p>
            {location && <p className="text-sm text-gray-400">{location}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;