import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0A2342] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>Raja & Company</h3>
                                <p className="text-sm text-[#D4AF37] tracking-wider">Property Consultant</p>
                            </div>
                        </div>
                        <p className="text-gray-400 pr-8">
                            With over 30 years of experience, Ravinder Pal Singh (Raja) provides trusted expertise in property dealing and advisory, guiding you through every step of your real estate journey.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors duration-300">About</Link></li>
                            <li><Link to="/#services" className="hover:text-[#D4AF37] transition-colors duration-300">Services</Link></li>
                            <li><Link to="/blog" className="hover:text-[#D4AF37] transition-colors duration-300">Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors duration-300">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                        <div className="flex space-x-4">
                            <SocialIcon href="https://www.facebook.com/ravinderpalsingh.raja.7/"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></SocialIcon>
                            <SocialIcon href="https://www.instagram.com/ravinderpalsinghraja?igsh=MWxwZnNtZjg5ejZpZA=="><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.483.011-4.706.068-2.61.12-3.793 1.3-3.912 3.912C3.323 8.517 3.312 8.884 3.312 12s.011 3.483.068 4.706c.12 2.61 1.3 3.793 3.912 3.912 1.223.056 1.59.068 4.706.068s3.483-.011 4.706-.068c2.61-.12 3.793-1.3 3.912-3.912.056-1.223.068-1.59.068-4.706s-.011-3.483-.068-4.706c-.12-2.61-1.3-3.793-3.912-3.912C15.483 3.975 15.116 3.965 12 3.965zM12 6.837a5.163 5.163 0 100 10.326 5.163 5.163 0 000-10.326zm0 8.528a3.365 3.365 0 110-6.73 3.365 3.365 0 010 6.73zm4.938-8.202a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" /></svg></SocialIcon>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Raja & Company Property Consultant. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;