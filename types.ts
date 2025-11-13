
import type React from 'react';

export interface Service {
  id: string;
  title: string;
  heroImage: string;
  intro: string[];
  benefits: string[];
  // Fix: Imported React types.
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  shortDescription: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}