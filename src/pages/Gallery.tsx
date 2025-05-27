import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      category: 'commercial',
      title: 'Office Cleaning',
      image: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      category: 'commercial',
      title: 'Lobby Maintenance',
      image: 'https://images.pexels.com/photos/4626375/pexels-photo-4626375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      category: 'residential',
      title: 'Kitchen Deep Clean',
      image: 'https://images.pexels.com/photos/4107274/pexels-photo-4107274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      category: 'residential',
      title: 'Bathroom Sanitizing',
      image: 'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      category: 'window',
      title: 'Window Cleaning',
      image: 'https://images.pexels.com/photos/3770078/pexels-photo-3770078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 6,
      category: 'strata',
      title: 'Common Area Maintenance',
      image: 'https://images.pexels.com/photos/4099042/pexels-photo-4099042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 7,
      category: 'carpet',
      title: 'Carpet Steam Cleaning',
      image: 'https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 8,
      category: 'floor',
      title: 'Floor Polishing',
      image: 'https://images.pexels.com/photos/4107275/pexels-photo-4107275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const beforeAfterImages = [
    {
      id: 'ba1',
      title: 'Office Transformation',
      before: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      after: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'ba2',
      title: 'Kitchen Makeover',
      before: 'https://images.pexels.com/photos/4098525/pexels-photo-4098525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      after: 'https://images.pexels.com/photos/4107274/pexels-photo-4107274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-green-900/20 blur-3xl opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Our Work
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the results of our professional cleaning services
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Before & After" 
            subtitle="See the difference our cleaning services make"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfterImages.map((item) => (
              <GlassCard key={item.id}>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-center text-gray-400 mb-2">Before</p>
                    <div 
                      className="h-60 bg-cover bg-center rounded-lg cursor-pointer relative overflow-hidden"
                      style={{ backgroundImage: `url(${item.before})` }}
                      onClick={() => setSelectedImage(item.before)}
                    >
                      <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-all duration-200 flex items-center justify-center">
                        <p className="text-white font-medium bg-black/50 px-3 py-1 rounded">View Larger</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-center text-gray-400 mb-2">After</p>
                    <div 
                      className="h-60 bg-cover bg-center rounded-lg cursor-pointer relative overflow-hidden"
                      style={{ backgroundImage: `url(${item.after})` }}
                      onClick={() => setSelectedImage(item.after)}
                    >
                      <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-all duration-200 flex items-center justify-center">
                        <p className="text-white font-medium bg-black/50 px-3 py-1 rounded">View Larger</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Cleaning Gallery" 
            subtitle="Browse through our cleaning projects and services"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(image.image)}
              >
                <div className="aspect-square">
                  <img 
                    src={image.image} 
                    alt={image.title} 
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-medium">{image.title}</p>
                    <p className="text-gray-300 text-sm capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;