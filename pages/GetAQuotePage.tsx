
import React, { useState } from 'react';
import { services } from '../constants';

const GetAQuotePage: React.FC = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342]">Request a Personalized Quote</h1>
                        <p className="mt-4 text-lg text-gray-600">Fill out the form below, and our team will get back to you with a quote tailored to your needs.</p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        {formSubmitted ? (
                            <div className="text-center py-10">
                                <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h2 className="mt-4 text-2xl font-semibold text-gray-800">Thank you!</h2>
                                <p className="mt-2 text-gray-600">Our team will get back to you shortly with your personalized quote.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                        <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Service Type</label>
                                    <select id="serviceType" required className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm">
                                        <option value="">Select a service...</option>
                                        {services.map(service => (
                                            <option key={service.id} value={service.title}>{service.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="propertyDetails" className="block text-sm font-medium text-gray-700">Property Details (if applicable)</label>
                                    <textarea name="propertyDetails" id="propertyDetails" rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm"></textarea>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm" placeholder="Please provide any additional details here."></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-[#D4AF37] text-[#0A2342] font-semibold py-3 px-4 border border-transparent rounded-md shadow-sm text-base hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]">
                                        Get My Quote
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetAQuotePage;
