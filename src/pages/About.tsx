import React from 'react';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import CTASection from '../components/CTASection';
import { Users, Heart, Briefcase, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-green-400" />,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in every job, ensuring every space is cleaned to perfection.'
    },
    {
      icon: <Heart className="h-8 w-8 text-green-400" />,
      title: 'Integrity',
      description: 'We are honest, dependable, and transparent in all our interactions and commitments.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-400" />,
      title: 'Customer-Centric',
      description: 'We listen, adapt, and go the extra mile to exceed client expectations.'
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-400" />,
      title: 'Consistency',
      description: 'We show up on time, every time, and deliver reliable, high-quality service.'
    }
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
                About Mikhael Prestine
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to Sydney's trusted cleaning service
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-xl blur-md"></div>
            <img 
              src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Cleaning team" 
              className="relative rounded-xl w-full h-[400px] object-cover border border-gray-800"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Story" 
            subtitle="How four friends with mops built a cleaning empire"
          />
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p>
              Back in their uni days, four friends juggled lectures by day and cleaning gigs by night. What started as a way to cover rent and ramen quickly became a source of pride. They weren't just wiping surfaces—they were bringing order to chaos and smiles to tired clients.
            </p>
            <p>
              Each of them brought something unique:
            </p>
            <ul>
              <li>One had a knack for organization that made Marie Kondo look messy.</li>
              <li>Another was the detail expert—you could trust them to spot a speck of dust in a sandstorm.</li>
              <li>One had the charm and people skills to turn every client into a loyal fan.</li>
              <li>And one was the logistics brain, able to schedule ten jobs in a day and still squeeze in a coffee run.</li>
            </ul>
            <p>
              One evening, after a marathon cleaning session and a box of $5 pizza, they had a lightbulb moment. "Why are we building someone else's business when we could build our own?" That's when Mikhael Prestine was born. With a borrowed vacuum, a DIY website, and a fire in their hearts, they launched their business.
            </p>
            <p>
              They weren't just cleaners—they were a squad with a mission: to deliver sparkling clean spaces with unmatched professionalism and heart. Word spread like wildfire. Clients loved their energy, their eye for detail, and the way they treated every home and office like it was their own.
            </p>
            <p>
              From Airbnb turnovers in Bondi to corporate offices in the CBD, the Mikhael Prestine crew built a name for themselves as Sydney's most reliable, friendly, and refreshingly human cleaning service.
            </p>
            <p>
              Today, Mikhael Prestine is a thriving, locally loved business with a growing team that shares the same hustle and heart. And it all started with four friends, a mop, and a dream.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Mission & Values" />
          
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-white">Our Mission</h3>
            <p className="text-lg text-gray-300 italic">
              "To deliver exceptional, detail-driven cleaning services with integrity, care, and consistency—transforming every space into a pristine environment and building lasting trust with every client we serve."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <GlassCard key={index}>
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Legal Information
              </span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <GlassCard>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">Australian Business Number (ABN)</h3>
                <p className="text-3xl font-bold text-green-400 mb-6">52 332 299 016</p>
                <p className="text-gray-300">
                  Mikhael Prestine is a registered business operating throughout Sydney and surrounding areas. 
                  We maintain comprehensive insurance coverage for all our cleaning operations.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;