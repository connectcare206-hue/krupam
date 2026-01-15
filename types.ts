
export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  roles: string[];
  benefits: string;
  category?: string;
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
  CORE_STAFFING = 'Contract Staffing',
  IT_AI = 'IT & AI',
  SOLAR_REALESTATE = 'Solar & Real Estate',
  SUPPORT = 'Customer Support',
  TRAVEL_OPS = 'Travel & Back-Office',
  AI_SOLUTIONS = 'AI Voice & Chat',
  MANPOWER = 'Manpower Services',
  OVERSEAS = 'Overseas & Expat',
  RPO = 'RPO Services',
  CV_SERVICES = 'CV & Resume',
  EXECUTIVE = 'Executive Search'
}

export type InquiryType = 'Employer' | 'Candidate' | 'General';

export interface InquiryData {
  type: InquiryType;
  name: string;
  contact: string;
  details: string;
  company?: string;
  skills?: string;
  experience?: string;
}
