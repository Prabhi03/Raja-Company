
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services, testimonials } from '../constants';
import type { Testimonial } from '../types';

const HeroBanner: React.FC = () => (
    <div className="relative bg-cover bg-center h-[60vh] md:h-[80vh] flex items-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?random=100')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>Trusted Real Estate Expertise for Over 30 Years</h1>
            <p className="text-lg md:text-2xl mb-8">Guiding You in Every Step of Property Investment and Advisory.</p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link to="/#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-[#D4AF37] text-[#0A2342] font-semibold px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors duration-300">Explore Services</Link>
                <Link to="/get-a-quote" className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-[#0A2342] transition-colors duration-300">Get a Quote</Link>
                <Link to="/property-value-calculator" className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-3 rounded-md hover:bg-[#D4AF37] hover:text-[#0A2342] transition-colors duration-300">Calculate Property Value</Link>
            </div>
        </div>
    </div>
);

const ServicesOverview: React.FC = () => (
    <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342]">Our Services</h2>
                <p className="mt-4 text-lg text-gray-600">Comprehensive solutions for all your property needs.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.slice(0, 6).map((service) => ( // Show first 6 for overview
                    <div key={service.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                        <div className="flex justify-center mb-4">
                           <div className="bg-[#0A2342] text-[#D4AF37] p-4 rounded-full">
                               <service.Icon className="w-8 h-8"/>
                           </div>
                        </div>
                        <h3 className="text-xl font-semibold text-[#0A2342] mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                        <Link to={`/services/${service.id}`} className="text-[#D4AF37] font-semibold hover:underline">Learn More &rarr;</Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialsSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const currentTestimonial: Testimonial = testimonials[currentIndex];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342]">What Our Clients Say</h2>
                </div>
                <div className="relative max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
                    <div className="text-center">
                        <p className="text-lg text-gray-700 italic mb-6">"{currentTestimonial.quote}"</p>
                        <p className="font-bold text-[#0A2342] text-xl">{currentTestimonial.name}</p>
                        <p className="text-gray-500">{currentTestimonial.location}</p>
                    </div>
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-[#0A2342] text-white p-2 rounded-full hover:bg-[#1E3A8A] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-[#0A2342] text-white p-2 rounded-full hover:bg-[#1E3A8A] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};


const HomePage: React.FC = () => {
    return (
        <div>
            <HeroBanner />
            <ServicesOverview />
            <TestimonialsSlider />
        </div>
    );
};

export default HomePage;
