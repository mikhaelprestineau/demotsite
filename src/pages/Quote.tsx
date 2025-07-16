import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import { Send, CheckCircle } from 'lucide-react';



const Quote: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    propertyType: '',
    frequency: '',
    address: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // --- 1. Client-side Validation ---
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType || !formData.propertyType) {
      setSubmitError('Please fill out all required fields marked with *');
      return;
    }

    // Check if the API URL is configured (helps with debugging)
   
    
    // --- 2. Reset State & Start Submission ---
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);
    
    // --- 3. API Call with Robust Error Handling ---
    try {
      const response = await fetch('https://mikhel-api.vercel.app/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      // Robust check: Handle both network errors and application errors from the API
      if (!response.ok || !result.success) {
        // Use the specific error message from the API if available
        throw new Error(result.error || 'An unknown error occurred while submitting the quote.');
      }

      // --- 4. Handle Success ---
      setSubmitSuccess(true);
      setFormData({ // Reset form on success
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        propertyType: '',
        frequency: '',
        address: '',
        message: '',
      });
      
      // Optional: Hide the success message after a few seconds
      setTimeout(() => setSubmitSuccess(false), 5000);

    } catch (error: unknown) {
      // --- 5. Handle Failure ---
      // Type-safe error handling for TypeScript
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError('Failed to submit quote. Please try again later.');
      }
    } finally {
      // --- 6. End Submission ---
      // This always runs, ensuring the button is re-enabled
      setIsSubmitting(false);
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
                Request a Free Quote
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you with a customized quote
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard>
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-400/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Quote Request Submitted!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for your interest in Mikhael Prestine Cleaning Services. We've received your quote request and will get back to you within 24 hours with a customized quote.
                </p>
                <p className="text-gray-400">
                  If you need immediate assistance, please call us at 0415 123 456.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-6">Tell Us About Your Cleaning Needs</h3>
                
                {submitError && (
                  <div className="bg-red-400/20 border border-red-400 rounded-md p-4 mb-6">
                    <p className="text-red-400">{submitError}</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-700 bg-gray-800 text-white px-4 py-2 focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-700 bg-gray-800 text-white px-4 py-2 focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-white mb-2">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-700 bg-gray-800 text-white px-4 py-2 focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="serviceType" className="block text-white mb-2">
                        Service Type <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-700 bg-gray-800 text-white px-4 py-2 focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="strata">Strata Cleaning</option>
                        <option value="commercial">Commercial Office Cleaning</option>
                        <option value="endOfLease">End of Lease Cleaning</option>
                        <option value="window">Window Cleaning</option>
                        <option value="carpet">Carpet & Floor Cleaning</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="propertyType" className="block text-white mb-2">
                        Property Type <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-700 bg-gray-800 text-white px-4 py-2 focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                        required
                      >
                        <option value="">Select property type</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="office">Office</option>
                        <option value="retail">Retail</option>
                        <option value="warehouse">Warehouse</option>
                        <option value="strata">Strata Complex</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="frequency" className="block text-white mb-2">
                        Cleaning Frequency
                      </label>
                      <select
                        id="frequency"
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-700 bg-gray-800 text-white px-4 py-2 focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                      >
                        <option value="">Select frequency</option>
                        <option value="oneTime">One-Time Clean</option>
                        <option value="weekly">Weekly</option>
                        <option value="fortnightly">Fortnightly</option>
                        <option value="monthly">Monthly</option>
                        <option value="custom">Custom Schedule</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-white mb-2">
                        Property Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-700 bg-gray-800 text-white px-4 py-2 focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6 md:col-span-2">
                    <label htmlFor="message" className="block text-white mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please provide any specific requirements or details about your cleaning needs"
                      className="w-full rounded-md border-gray-700 bg-gray-800 text-white px-4 py-2 focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-md font-medium bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        Request Quote
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </GlassCard>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Why Choose Mikhael Prestine" 
            subtitle="Experience the difference with our professional cleaning services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <GlassCard>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fully Insured</h3>
                <p className="text-gray-300">Our services are backed by comprehensive insurance for your peace of mind.</p>
              </div>
            </GlassCard>
            
            <GlassCard>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Experienced Team</h3>
                <p className="text-gray-300">Our professional cleaners have years of experience in all types of cleaning.</p>
              </div>
            </GlassCard>
            
            <GlassCard>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quality Products</h3>
                <p className="text-gray-300">We use high-quality cleaning products for the best results.</p>
              </div>
            </GlassCard>
            
            <GlassCard>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-300">We're not satisfied until you're satisfied with our cleaning results.</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;