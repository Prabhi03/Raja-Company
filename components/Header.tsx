import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { services } from '../constants';
import LogoIcon from './LogoIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  
  const activeLinkStyle = {
    color: '#D4AF37', // Gold color for active link
    fontWeight: '600',
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }

  return (
    <header className="bg-[#0A2342] text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" aria-label="Raja & Company Home" className="flex items-center gap-2">
              <LogoIcon className="w-12 h-12" />
              <div>
                  <span className="text-2xl font-bold" style={{fontFamily: 'Montserrat, sans-serif'}}>
                      Raja & Company
                  </span>
                  <span className="block text-xs font-normal text-gray-300 tracking-wider">Property Consultant</span>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="hover:text-[#D4AF37] transition-colors duration-300">Home</NavLink>
            <div className="relative" ref={servicesMenuRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="hover:text-[#D4AF37] transition-colors duration-300 flex items-center"
              >
                Services
                <svg className={`w-4 h-4 ml-1 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white text-gray-800 rounded-md shadow-xl py-2 max-h-96 overflow-y-auto">
                  {services.map(service => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/about" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="hover:text-[#D4AF37] transition-colors duration-300">About</NavLink>
            <NavLink to="/blog" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="hover:text-[#D4AF37] transition-colors duration-300">Blog</NavLink>
            <NavLink to="/property-value-calculator" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="hover:text-[#D4AF37] transition-colors duration-300">Property Value Calculator</NavLink>
            <NavLink to="/contact" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="hover:text-[#D4AF37] transition-colors duration-300">Contact</NavLink>
          </nav>
          <div className="hidden md:block">
            <Link to="/get-a-quote" className="bg-[#D4AF37] text-[#0A2342] font-semibold px-5 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-300">
              Get a Quote
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A2342] absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={closeAllMenus} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#14386E]">Home</Link>
            <div className="px-3 py-2">
                <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="w-full text-left text-base font-medium text-white flex justify-between items-center">
                    Services
                    <svg className={`w-5 h-5 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {isServicesOpen && (
                    <div className="mt-2 space-y-1 max-h-60 overflow-y-auto">
                        {services.map(service => (
                            <Link key={service.id} to={`/services/${service.id}`} onClick={closeAllMenus} className="block pl-4 pr-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-[#14386E]">
                                {service.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <Link to="/about" onClick={closeAllMenus} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#14386E]">About</Link>
            <Link to="/blog" onClick={closeAllMenus} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#14386E]">Blog</Link>
            <Link to="/property-value-calculator" onClick={closeAllMenus} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#14386E]">Property Value Calculator</Link>
            <Link to="/contact" onClick={closeAllMenus} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#14386E]">Contact</Link>
            <Link to="/get-a-quote" onClick={closeAllMenus} className="block px-3 py-2 mt-2 rounded-md text-base font-medium text-center text-[#0A2342] bg-[#D4AF37] hover:bg-yellow-500">Get a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;