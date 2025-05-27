import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';

const Home: React.FC = () => {
  const services = [
    {
      title: 'Strata Cleaning',
      description: 'Professional cleaning for common areas, lobbies, and shared spaces in strata properties.',
      image: 'https://images.pexels.com/photos/4101135/pexels-photo-4101135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        { text: 'Common Area Cleaning' },
        { text: 'Garbage Room Cleaning' },
        { text: 'Garden & Outdoor Tidying' },
        { text: 'Regular Maintenance Reporting' },
      ],
    },
    {
      title: 'Commercial Office Cleaning',
      description: 'Keep your workplace pristine with our professional office cleaning services.',
      image: 'https://images.pexels.com/photos/3770838/pexels-photo-3770838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        { text: 'Daily/Weekly General Cleaning' },
        { text: 'Desk and Surface Sanitization' },
        { text: 'Restroom Cleaning and Disinfection' },
        { text: 'COVID-safe Sanitization Services' },
      ],
    },
    {
      title: 'End of Lease Cleaning',
      description: 'Ensure your bond return with our thorough end of lease cleaning services.',
      image: 'https://images.pexels.com/photos/4108721/pexels-photo-4108721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        { text: 'Deep Kitchen Cleaning' },
        { text: 'Bathroom Detailing' },
        { text: 'Carpet Steam Cleaning' },
        { text: 'Property Inspection Checklist Coverage' },
      ],
    },
  ];

  return (
    <div>
      <HeroSection />

      {/* About Preview Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Sydney's Trusted Cleaning Experts
                </span>
              </h2>
              <p className="text-gray-300 mb-6">
                Mikhael Prestine is a Sydney-based cleaning company founded by four friends with a passion for excellence. 
                What began as part-time cleaning work has grown into a trusted service known for attention to detail, 
                reliability, and a personal touch.
              </p>
              <p className="text-gray-300 mb-8">
                We specialize in residential, commercial, and strata cleaning, treating every space like our own. 
                With a focus on quality and customer satisfaction, Mikhael Prestine delivers sparkling results—every time.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center font-medium text-green-400 hover:text-green-300 transition-colors"
              >
                Learn more about our story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-xl blur-md"></div>
              <img 
                src="https://images.pexels.com/photos/7605945/pexels-photo-7605945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cleaning team" 
                className="relative rounded-xl shadow-2xl border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Services" 
            subtitle="We offer a comprehensive range of professional cleaning services to meet all your needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                image={service.image}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-3 rounded-md font-medium bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-200"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Why Choose Us" 
            subtitle="Experience the Mikhael Prestine difference with our commitment to excellence"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassCard>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Reliable Staff</h3>
                <p className="text-gray-300">Our team shows up on time, every time, delivering consistent quality service you can count on.</p>
              </div>
            </GlassCard>
            
            <GlassCard glowColor="from-blue-400/20 to-purple-500/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-400/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Attention to Detail</h3>
                <p className="text-gray-300">We pride ourselves on thorough cleaning, reaching areas that others miss for a truly pristine result.</p>
              </div>
            </GlassCard>
            
            <GlassCard glowColor="from-purple-400/20 to-pink-500/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-400/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fully Insured</h3>
                <p className="text-gray-300">Rest easy knowing our work is covered by comprehensive insurance for your peace of mind.</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it - hear from our satisfied customers"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Anil N"
              location="Homebush West, NSW"
              quote="I am writing to wholeheartedly recommend the services of Mikhael Prestine Company. Their team exhibits a level of professionalism and dedication that is rare in today's service industry. The property now boasts a pristine appearance, thanks to their relentless pursuit of excellence."
            />
            <TestimonialCard
              name="Sarah L"
              location="Sydney CBD"
              quote="Incredibly thorough and professional. They transformed our office space and the attention to detail was outstanding. Highly recommend their commercial cleaning services!"
            />
            <TestimonialCard
              name="Michael T"
              location="Bondi"
              quote="Used their end of lease cleaning service and got my full bond back! Every corner was spotless. Will definitely use again and recommend to friends."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;