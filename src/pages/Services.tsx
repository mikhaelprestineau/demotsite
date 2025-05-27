import React from 'react';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import CTASection from '../components/CTASection';
import { CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Strata Cleaning',
      description: 'Professional cleaning for common areas, lobbies, and shared spaces in strata properties.',
      image: 'https://images.pexels.com/photos/4101135/pexels-photo-4101135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      services: [
        'Common Area Cleaning (lobbies, hallways, foyers)',
        'Stairwell and Lift Cleaning',
        'Garbage Room and Bin Cleaning',
        'Car Park Sweeping and Pressure Cleaning',
        'Window and Glass Door Cleaning (common areas)',
        'Garden and Outdoor Area Tidying',
        'Letterbox Area Cleaning',
        'Light Fixture Dusting and Cobweb Removal',
        'Regular Maintenance Reporting (e.g., lights out, damage)',
        'Scheduled Deep Cleaning for Shared Facilities',
      ],
    },
    {
      title: 'Commercial Office Cleaning',
      description: 'Keep your workplace pristine with our professional office cleaning services.',
      image: 'https://images.pexels.com/photos/3770838/pexels-photo-3770838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      services: [
        'Daily/Weekly General Cleaning',
        'Desk and Surface Sanitization',
        'Restroom Cleaning and Disinfection',
        'Breakroom and Kitchenette Cleaning',
        'Trash Removal and Bin Sanitizing',
        'Touchpoint Disinfection (e.g., doorknobs, switches)',
        'Dusting (blinds, vents, baseboards)',
        'Interior Glass Cleaning',
        'Supply Replenishment (toiletries, hand soaps, paper towels)',
        'After-hours or Weekend Cleaning',
        'COVID-safe Sanitization Services',
      ],
    },
    {
      title: 'End of Lease Cleaning',
      description: 'Ensure your bond return with our thorough end of lease cleaning services.',
      image: 'https://images.pexels.com/photos/4108721/pexels-photo-4108721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      services: [
        'Deep Kitchen Cleaning (oven, stove, range hood, cupboards)',
        'Bathroom Detailing (tiles, grout, shower screens, taps)',
        'Wall Spot Cleaning and Scuff Removal',
        'Window and Tracks Cleaning (interior & exterior)',
        'Carpet Steam Cleaning',
        'Floor Mopping and Vacuuming',
        'Skirting Boards and Doors Cleaning',
        'Light Fixtures and Fans Dusting',
        'Garage or Balcony Cleaning',
        'Rubbish Removal',
        'Property Inspection Checklist Coverage',
      ],
    },
    {
      title: 'Window Cleaning',
      description: 'Crystal clear windows with our professional window cleaning services.',
      image: 'https://images.pexels.com/photos/3768918/pexels-photo-3768918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      services: [
        'Interior Window Cleaning',
        'Exterior Window Washing',
        'High-Rise Window Cleaning (with safety harness or boom lift)',
        'Flyscreen Cleaning',
        'Window Frame and Track Cleaning',
        'Water Spot and Stain Removal',
        'Skylight Cleaning',
        'Mirror Cleaning',
        'Solar Panel Cleaning (if applicable)',
        'Glass Balustrade Cleaning',
      ],
    },
    {
      title: 'Carpet & Floor Cleaning',
      description: 'Rejuvenate your carpets and floors with our specialized cleaning services.',
      image: 'https://images.pexels.com/photos/5591579/pexels-photo-5591579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      services: [
        'Carpet Vacuuming',
        'Carpet Steam Cleaning',
        'Carpet Dry Cleaning',
        'Spot and Stain Treatment',
        'Odour Neutralization',
        'Upholstery Cleaning',
        'Tile and Grout Cleaning',
        'Floor Stripping and Sealing (vinyl/linoleum)',
        'Hardwood Floor Polishing',
        'Concrete Floor Cleaning',
        'Anti-slip Floor Treatment',
        'Floor Buffing and Burnishing',
      ],
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
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Service Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Service Plans" 
            subtitle="Choose a cleaning schedule that works for you"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Weekly</h3>
                <p className="text-gray-300 mb-6">Perfect for high-traffic areas requiring consistent maintenance</p>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Maximum cleanliness maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Preferred scheduling priority</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Discounted long-term rates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Regular cleaning staff</span>
                  </li>
                </ul>
                <p className="text-gray-400 italic">Contact us for pricing</p>
              </div>
            </GlassCard>
            
            <GlassCard glowColor="from-blue-400/20 to-blue-500/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Fortnightly</h3>
                <p className="text-gray-300 mb-6">Ideal balance of cleanliness and cost-effectiveness</p>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Regular maintenance cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Scheduled consistent service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Moderate cost efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Familiar cleaning team</span>
                  </li>
                </ul>
                <p className="text-gray-400 italic">Contact us for pricing</p>
              </div>
            </GlassCard>
            
            <GlassCard glowColor="from-purple-400/20 to-pink-500/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Monthly</h3>
                <p className="text-gray-300 mb-6">Great for spaces with lower traffic or supplemental cleaning</p>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Deep cleaning focus</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Flexible scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Budget-friendly option</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Thorough refreshing clean</span>
                  </li>
                </ul>
                <p className="text-gray-400 italic">Contact us for pricing</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Cleaning Services" 
            subtitle="Comprehensive solutions for all your cleaning needs"
          />
          
          <div className="space-y-20">
            {serviceCategories.map((category, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-xl blur-md"></div>
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="relative rounded-xl shadow-xl border border-gray-800 w-full h-80 object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                    <h4 className="text-lg font-medium text-white mb-4">Our {category.title} includes:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.services.map((service, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Service Areas" 
            subtitle="We provide our professional cleaning services throughout Sydney"
          />
          
          <GlassCard className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Sydney-Wide Coverage</h3>
            <p className="text-gray-300 mb-8">
              Mikhael Prestine Cleaning Services operates across all Sydney suburbs, providing our full range of cleaning services to residential and commercial clients throughout the greater Sydney area.
            </p>
            <p className="text-gray-300">
              Whether you're in the CBD, Eastern Suburbs, North Shore, Western Sydney, or anywhere in between, our professional cleaning team is ready to deliver exceptional service to your doorstep.
            </p>
          </GlassCard>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Services;