import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import CTASection from '../components/CTASection';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqItems: FaqItem[] = [
    {
      question: "How do I book your cleaning services?",
      answer: "Booking our services is easy! You can contact us through our website's contact form, give us a call, or send us an email. We'll get back to you promptly to discuss your needs and schedule a cleaning appointment at your convenience."
    },
    {
      question: "What cleaning products do you use?",
      answer: "We use high-quality cleaning products from trusted suppliers like Bunnings. We select products that are effective for specific cleaning tasks while being safe for your property and the environment. If you have specific product preferences or sensitivities, please let us know and we'll accommodate your needs."
    },
    {
      question: "Are your cleaners insured?",
      answer: "Yes, all our cleaners are fully insured. We carry comprehensive public liability insurance to protect both our clients and our team in the unlikely event of an accident or damage during the cleaning process."
    },
    {
      question: "Do you provide cleaning equipment and supplies?",
      answer: "Yes, we bring all necessary cleaning equipment and supplies to every job. Our professional-grade equipment ensures efficient and thorough cleaning. However, if you prefer us to use your own supplies for any reason, we're happy to accommodate this request."
    },
    {
      question: "How much does your cleaning service cost?",
      answer: "Our pricing varies depending on the type of service, size of the property, condition, and specific requirements. We provide customized quotes based on your needs rather than a one-size-fits-all approach. Contact us for a free, no-obligation quote tailored to your specific situation."
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "It's entirely up to you. Many clients provide access instructions and aren't present during cleaning. Others prefer to be home, especially for the first service. We're flexible and can work with your preference."
    },
    {
      question: "What happens if I'm not satisfied with the cleaning?",
      answer: "Your satisfaction is our priority. If you're not completely happy with any aspect of our service, please let us know within 24 hours of the cleaning, and we'll return to address any issues at no additional cost."
    },
    {
      question: "Do you offer regular cleaning contracts?",
      answer: "Yes, we offer weekly, fortnightly, and monthly cleaning contracts for both residential and commercial properties. Regular clients receive priority scheduling and may qualify for discounted rates compared to one-time cleanings."
    },
    {
      question: "How many cleaners will you send?",
      answer: "The number of cleaners depends on the size of the property and the scope of work. For smaller jobs, we might send one or two cleaners, while larger commercial spaces might require a team. We'll discuss this during the quoting process."
    },
    {
      question: "What areas in Sydney do you service?",
      answer: "We provide cleaning services throughout the entire Sydney metropolitan area, including all suburbs and surrounding regions. No matter where you're located in Sydney, we can assist with your cleaning needs."
    }
  ];

  const toggleItem = (index: number) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-green-900/20 blur-3xl opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our cleaning services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Items Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <GlassCard key={index} className="overflow-hidden">
                <button
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-xl font-bold text-white pr-8">{item.question}</h3>
                  <div className="flex-shrink-0">
                    {openItem === index ? (
                      <ChevronUp className="h-6 w-6 text-green-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-green-400" />
                    )}
                  </div>
                </button>
                <div
                  className={`mt-4 text-gray-300 overflow-hidden transition-all duration-300 ${
                    openItem === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className={`pt-2 ${openItem !== index && 'hidden'}`}>{item.answer}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Still Have Questions?" 
            subtitle="We're here to help with any other questions you may have"
          />
          
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-8">
              If you couldn't find the answer to your question in our FAQ section, please don't hesitate to contact us directly. Our friendly team is ready to assist you with any inquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:0415123456" 
                className="px-8 py-3 rounded-md font-medium bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-200 flex items-center justify-center"
              >
                Call Us: 0415 123 456
              </a>
              <a 
                href="mailto:info@mikhaelprestine.com.au" 
                className="px-8 py-3 rounded-md font-medium border border-green-400 text-green-400 hover:bg-green-400/10 transition-all duration-200 flex items-center justify-center"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Faq;