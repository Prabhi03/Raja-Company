
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342]">Get In Touch</h1>
                    <p className="mt-4 text-lg text-gray-600">We'd love to hear from you. Reach out to us for any inquiries or to start your consultation.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-[#0A2342] mb-6">Send Us a Message</h2>
                        {formSubmitted ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold">Thank you!</strong>
                                <span className="block sm:inline"> Your message has been sent. We'll get back to you soon.</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-[#0A2342] text-white py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A2342]">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-[#0A2342] mb-4">Direct Contact Details</h3>
                            <div className="space-y-3 text-gray-700">
                                <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg> +91-9815207245</p>
                                <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg> Ravinderpalsingh801@gmail.com</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                             <h3 className="text-xl font-semibold text-[#0A2342] mb-4">Our Location</h3>
                             <div className="aspect-w-16 aspect-h-9">
                                <img src="https://picsum.photos/600/300?grayscale" alt="Map Location" className="w-full h-full object-cover rounded-md"/>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;