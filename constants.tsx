
import React from 'react';
import type { Service, Testimonial } from './types';

// Icons
const BuildingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375a.375.375 0 01.375.375v1.5a.375.375 0 01-.375.375H9a.375.375 0 01-.375-.375v-1.5A.375.375 0 019 6.75zM9 12.75h6.375a.375.375 0 01.375.375v1.5a.375.375 0 01-.375.375H9a.375.375 0 01-.375-.375v-1.5A.375.375 0 019 12.75z" />
  </svg>
);

const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m-3-1l-3 1m-3-1l-3-1m3-1l3 1.091m0 0l3 1.091m-3-1.091l-3 1.091m-3-1.091l-3-1.091" />
    </svg>
);

const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.14-4.141a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm-2.121-.06a3 3 0 113.172-3.172m-1.414 1.414a3 3 0 10-3.172-3.172 3 3 0 003.172 3.172zm6.061 4.491a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
    </svg>
);

const KeyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
);

const ScaleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.036.243c-2.132 0-4.14-.817-5.62-2.24l-2.62-2.62a1.5 1.5 0 00-2.122 0l-2.62 2.62A5.988 5.988 0 013.75 16.25c-.642 0-1.27-.09-1.88-.261a1.5 1.5 0 01-.59-1.202L4.12 5.492m14.632 0l-2.62 10.726m-12-10.726l2.62 10.726" />
    </svg>
);

const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 13.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12" />
    </svg>
);


export const services: Service[] = [
  {
    id: "housing-consultant",
    title: "Housing Consultant",
    heroImage: "https://picsum.photos/1200/400?random=1",
    intro: [
      "As your dedicated Housing Consultant, we provide expert advice and guidance on all aspects of housing. Whether you're a first-time buyer, a seasoned investor, or looking for affordable housing options, our consultancy is tailored to meet your unique needs.",
      "We navigate the complexities of the housing market for you, ensuring you make informed decisions that align with your financial goals and lifestyle aspirations. Our goal is to make your housing journey smooth, successful, and stress-free."
    ],
    benefits: [
      "Personalized housing strategies",
      "In-depth market analysis and insights",
      "Guidance on financing and mortgage options",
      "Support through the entire buying or selling process",
      "Access to a wide network of properties"
    ],
    Icon: UserGroupIcon,
    shortDescription: "Expert advice for all your housing needs, from buying to investing."
  },
  {
    id: "real-estate-agent",
    title: "Real Estate Agent",
    heroImage: "https://picsum.photos/1200/400?random=2",
    intro: [
      "With over 30 years of experience as a Real Estate Agent, Ravinder Pal Singh (Raja) offers unparalleled service in buying, selling, and renting properties. We are committed to achieving the best possible outcome for our clients.",
      "Our approach combines deep market knowledge with a client-first philosophy. We handle every detail, from property listings and marketing to negotiations and closing, ensuring a seamless transaction from start to finish."
    ],
    benefits: [
      "Strategic pricing and marketing for sellers",
      "Expert negotiation to protect your interests",
      "Comprehensive property search for buyers",
      "Handling of all paperwork and legal formalities",
      "A trusted partner committed to your success"
    ],
    Icon: HomeIcon,
    shortDescription: "Your trusted partner for buying, selling, and renting properties."
  },
  {
    id: "real-estate-consultant",
    title: "Real Estate Consultant",
    heroImage: "https://picsum.photos/1200/400?random=3",
    intro: [
      "Our Real Estate Consultancy service provides high-level strategic advice to investors, developers, and property owners. We help you maximize the value of your real estate assets through data-driven insights and expert recommendations.",
      "From feasibility studies and market research to portfolio analysis and investment strategy, we offer a comprehensive suite of consulting services to guide your real estate decisions."
    ],
    benefits: [
      "In-depth market research and feasibility studies",
      "Investment strategy and portfolio management",
      "Risk assessment and mitigation",
      "Development and asset management advice",
      "Objective, expert opinions to guide your decisions"
    ],
    Icon: BuildingIcon,
    shortDescription: "Strategic advice to maximize the value of your real estate assets."
  },
  {
    id: "apartment-rental-agency",
    title: "Apartment Rental Agency",
    heroImage: "https://picsum.photos/1200/400?random=4",
    intro: [
        "Finding the perfect apartment to rent can be a daunting task. Our Apartment Rental Agency service simplifies the process for tenants and landlords alike. We connect qualified tenants with quality properties, ensuring a perfect match.",
        "For tenants, we offer a curated selection of apartments and guide you through the application process. For landlords, we provide comprehensive services including tenant screening, lease agreements, and property management."
    ],
    benefits: [
        "Wide selection of quality rental apartments",
        "Thorough tenant screening for landlords",
        "Assistance with lease agreements and paperwork",
        "Streamlined rental process for tenants",
        "Professional property marketing and showings"
    ],
    Icon: KeyIcon,
    shortDescription: "Connecting tenants with quality apartments and landlords with qualified renters."
  },
  {
    id: "property-valuer",
    title: "Property Valuer",
    heroImage: "https://picsum.photos/1200/400?random=5",
    intro: [
        "Accurate property valuation is crucial for any real estate transaction. As an experienced Property Valuer, we provide precise and reliable valuations for residential, commercial, and industrial properties.",
        "Our valuations are based on thorough market analysis, property inspection, and industry-standard methodologies. Whether for sale, purchase, financing, or legal purposes, you can trust our expert opinion."
    ],
    benefits: [
        "Accurate and unbiased property valuations",
        "Detailed valuation reports",
        "Valuations for all property types",
        "Services for mortgage, insurance, and legal needs",
        "Deep understanding of market trends and value drivers"
    ],
    Icon: ScaleIcon,
    shortDescription: "Precise and reliable valuations for all types of properties."
  },
  {
    id: "land-agent",
    title: "Land Agent",
    heroImage: "https://picsum.photos/1200/400?random=6",
    intro: [
        "Specializing in the sale and acquisition of land, our Land Agent services cater to developers, investors, and individuals. We have a deep understanding of land value, zoning regulations, and development potential.",
        "Whether you are looking to buy a plot for your dream home or sell a large tract for development, we provide the expertise to navigate the unique complexities of land transactions."
    ],
    benefits: [
        "Expertise in land acquisition and sales",
        "Knowledge of zoning and land use regulations",
        "Valuation of development potential",
        "Negotiation of complex land deals",
        "Network of developers and land investors"
    ],
    Icon: GlobeIcon,
    shortDescription: "Specialized services for the buying and selling of land."
  },
  {
      id: "affordable-housing-consultant",
      title: "Affordable Housing Consultant",
      heroImage: "https://picsum.photos/1200/400?random=7",
      intro: ["We are passionate about making housing accessible to everyone. As Affordable Housing Consultants, we work with developers, government agencies, and non-profits to create and manage affordable housing projects.", "Our expertise covers funding applications, project feasibility, compliance, and community engagement, helping to bring vital housing solutions to fruition."],
      benefits: ["Expert guidance on affordable housing projects", "Assistance with funding and grant applications", "Regulatory compliance and policy navigation", "Community-focused development strategies", "Commitment to creating sustainable communities"],
      Icon: UserGroupIcon,
      shortDescription: "Creating and managing sustainable affordable housing solutions."
  },
  {
      id: "buying-agent-services",
      title: "Buying Agent Services",
      heroImage: "https://picsum.photos/1200/400?random=8",
      intro: ["A buying agent works exclusively for you, the buyer. Our Buying Agent Services are designed to give you an edge in the competitive property market. We source, negotiate, and secure the perfect property on your behalf.", "From off-market opportunities to tough negotiations, we represent your best interests at every step, saving you time, money, and stress."],
      benefits: ["Exclusive representation for buyers", "Access to off-market properties", "Expert negotiation on your behalf", "Objective advice and property assessment", "A streamlined and efficient property search"],
      Icon: HomeIcon,
      shortDescription: "Your exclusive representative for finding and securing the perfect property."
  },
  {
      id: "commercial-property-buying-sales",
      title: "Commercial Property Buying & Sales",
      heroImage: "https://picsum.photos/1200/400?random=9",
      intro: ["The commercial property market requires specialized knowledge. We offer expert services for the buying and selling of commercial real estate, including office spaces, retail units, and industrial properties.", "Our team provides in-depth market analysis, strategic marketing, and skilled negotiation to ensure you achieve your commercial investment goals."],
      benefits: ["Specialized expertise in commercial real estate", "Targeted marketing for commercial properties", "Investment analysis and due diligence", "Negotiation of complex commercial leases and sales", "Access to a network of commercial investors and tenants"],
      Icon: BuildingIcon,
      shortDescription: "Expert services for buying and selling commercial real estate."
  },
  {
      id: "commercial-property-consulting",
      title: "Commercial Property Consulting",
      heroImage: "https://picsum.photos/1200/400?random=10",
      intro: ["Our Commercial Property Consulting services provide strategic advice to businesses and investors. We help you make informed decisions about leasing, acquiring, or divesting commercial properties to support your business objectives.", "From location analysis to lease negotiation and portfolio optimization, we are your strategic partner in commercial real estate."],
      benefits: ["Strategic advice for corporate real estate", "Lease analysis and negotiation", "Location and site selection services", "Portfolio optimization and management", "Market entry and expansion strategies"],
      Icon: BuildingIcon,
      shortDescription: "Strategic advice to align your commercial property with your business goals."
  },
  {
      id: "property-advisor",
      title: "Property Advisor",
      heroImage: "https://picsum.photos/1200/400?random=11",
      intro: ["As your trusted Property Advisor, we provide comprehensive, unbiased advice to help you navigate the property market with confidence. We take the time to understand your goals and provide personalized recommendations.", "Whether you're building a property portfolio, making your first investment, or deciding on a family home, our advisory service is your key to making smart property decisions."],
      benefits: ["Personalized property investment strategies", "Unbiased and independent advice", "Holistic approach to your property goals", "Long-term planning and portfolio growth", "Guidance on market timing and opportunities"],
      Icon: UserGroupIcon,
      shortDescription: "Personalized, unbiased advice to help you make smart property decisions."
  },
  {
      id: "property-dealer",
      title: "Property Dealer",
      heroImage: "https://picsum.photos/1200/400?random=12",
      intro: ["With over three decades as a reputable Property Dealer, Ravinder Pal Singh (Raja) has built a legacy of trust and success. We facilitate property transactions with integrity and professionalism.", "Our extensive network and deep market knowledge allow us to connect buyers and sellers efficiently, ensuring fair deals and smooth closings for all types of properties."],
      benefits: ["30+ years of trusted experience", "Extensive network of buyers and sellers", "Facilitation of all types of property deals", "Commitment to integrity and transparency", "Efficient and professional transaction management"],
      Icon: KeyIcon,
      shortDescription: "Over 30 years of trusted experience in facilitating property deals."
  }
];

export const testimonials: Testimonial[] = [
    {
        quote: "Raja's expertise is unmatched. He guided us through our first home purchase with patience and professionalism. We couldn't have done it without him.",
        name: "A. Kumar",
        location: "Ludhiana, PB"
    },
    {
        quote: "The property valuation service was incredibly detailed and accurate. It was essential for our investment decisions. Highly recommended!",
        name: "Priya Sharma",
        location: "Ludhiana, PB"
    },
    {
        quote: "Selling our commercial property was a complex process, but Ravinder's team handled everything flawlessly. They secured a great price for us in a short time.",
        name: "S. Gupta",
        location: "Ludhiana, PB"
    },
    {
        quote: "As a buying agent, Raja found us an off-market property that was exactly what we were looking for. His dedication and negotiation skills are top-notch.",
        name: "Mehra Family",
        location: "Ludhiana, PB"
    }
];