
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import type { Service } from '../types';

interface ServiceDetailPageProps {
    services: Service[];
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ services }) => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const service = services.find(s => s.id === serviceId);

    if (!service) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-cover bg-center h-80 flex items-center justify-center" style={{ backgroundImage: `url(${service.heroImage})` }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold" style={{fontFamily: 'Montserrat, sans-serif'}}>{service.title}</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-[#0A2342] mb-4">About This Service</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                            {service.intro.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Benefits */}
                    <section className="mb-12 bg-gray-50 p-8 rounded-lg">
                        <h2 className="text-3xl font-semibold text-[#0A2342] mb-6">Benefits & Key Highlights</h2>
                        <ul className="space-y-4">
                            {service.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700 text-lg">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Call to Action */}
                    <section className="text-center bg-[#0A2342] text-white p-10 rounded-lg shadow-xl">
                        <h2 className="text-3xl font-bold mb-4">Interested in Our {service.title} Service?</h2>
                        <p className="text-lg text-gray-300 mb-8">Let's discuss how we can help you achieve your property goals.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/get-a-quote" className="bg-[#D4AF37] text-[#0A2342] font-semibold px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors duration-300">
                                Request a Quote
                            </Link>
                            <Link to="/contact" className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-[#0A2342] transition-colors duration-300">
                                Contact Us for More Info
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;
