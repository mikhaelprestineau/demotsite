// /src/pages/Contact.tsx
import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError('Please fill out all required fields');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const response = await fetch('https://mikhel-api.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        // If the API returns an error, display it
        throw new Error(result.error || 'An unknown error occurred.');
      }

      // Handle success
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error : unknown) {
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError('Failed to send message. Please try again later.');
      }
    } finally {
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
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team for a free quote or to discuss your cleaning needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Get In Touch" 
                centered={false}
                className="mb-8" 
              />
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-green-400/20 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
         <div className=" items-center flex flex-col gap-x-1 text-white">
        <h3 className="text-lg font-medium text-white mb-1">Phone Numbers</h3>
          <span>0406443589</span> 
          <span>0488969388</span> 
          <span>0477364935</span>
           </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-green-400/20 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                    <p className="text-gray-300">emmanuel@mikhaelprestine.com.au</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-green-400/20 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Location</h3>
                    <p className="text-gray-300">Sydney, New South Wales</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-green-400/20 flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 8am - 9pm</p>
                    <p className="text-gray-300">Saturday: 9am - 4pm</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <GlassCard>
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                
                {submitSuccess ? (
                  <div className="bg-green-400/20 border border-green-400 rounded-md p-4 mb-6">
                    <p className="text-green-400">Your message has been sent successfully! We'll get back to you soon.</p>
                  </div>
                ) : null}
                
                {submitError ? (
                  <div className="bg-red-400/20 border border-red-400 rounded-md p-4 mb-6">
                    <p className="text-red-400">{submitError}</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
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
                  
                  <div className="mb-4">
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
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-md border-gray-700 bg-gray-800 text-white px-4 py-2 focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full rounded-md border-gray-700 bg-gray-800 text-white px-4 py-2 focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-md font-medium bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-200 flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Service Area" 
            subtitle="We provide cleaning services throughout Sydney"
          />
          
          <div className="relative rounded-xl overflow-hidden h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-xl blur-md"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424145.8262352955!2d150.6517773093133!3d-33.84792702266925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1701125421999!5m2!1sen!2sus" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sydney Map"
              className="relative rounded-xl border border-gray-800"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;