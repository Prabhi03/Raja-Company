import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
    return (
        <div className="bg-gray-50 py-20 min-h-[60vh] flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342]">Our Blog</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Coming Soon! We're currently curating valuable articles and insights about the real estate market. Please check back later.
                    </p>
                    <div className="mt-8">
                        <Link
                            to="/"
                            className="bg-[#D4AF37] text-[#0A2342] font-semibold px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors duration-300"
                        >
                            Return to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
