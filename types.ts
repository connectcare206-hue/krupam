
export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  roles: string[];
  benefits: string;
}

export interface PricingPlan {
  experience: string;
  cost: string;
  hourlyRate: string;
  features: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export enum Industry {
  IT_AI = 'IT & AI',
  DATA_AI = 'AI / ML & Data',
  PHARMA = 'Pharma & Healthcare',
  ACCOUNTING = 'Bookkeeping & Accounting'
}
