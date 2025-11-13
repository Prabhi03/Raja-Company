
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342]">About Raja & Company</h1>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3">
                        <img
                            src="https://picsum.photos/400/500?random=200"
                            alt="Ravinder Pal Singh (Raja)"
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-3xl font-semibold text-[#0A2342] mb-4">Biography</h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Ravinder Pal Singh (Raja) brings over 30 years of experience in property dealing and advisory. Known for his deep understanding of the real estate market and personalized client approach, he has guided countless individuals and businesses in finding their perfect properties and investments. His career is built on a foundation of integrity, transparency, and an unwavering commitment to his clients' success. Raja's extensive network and market insights make him a formidable advocate and a trusted advisor in any real estate transaction.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mt-20 text-center md:text-left">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-[#0A2342] mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To provide exceptional real estate services with integrity, professionalism, and a deep commitment to our clients' goals. We strive to make every property transaction a seamless and rewarding experience, building lifelong relationships based on trust and mutual respect.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-[#0A2342] mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To be the most trusted and respected real estate advisory in the region, known for our market expertise, innovative solutions, and unwavering dedication to client satisfaction. We aim to empower our clients to make informed decisions that enhance their financial well-being.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-20">
                    <p className="text-xl text-gray-800 mb-6">Ready to start your property journey with an expert?</p>
                    <Link
                        to="/get-a-quote"
                        className="bg-[#D4AF37] text-[#0A2342] font-semibold px-8 py-4 rounded-md hover:bg-yellow-500 transition-colors duration-300 text-lg"
                    >
                        Schedule a Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;