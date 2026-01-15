import { ServiceCard, PricingPlan, Industry, ProcessStep, Testimonial } from './types';

export const SERVICES: Record<Industry, ServiceCard> = {
  [Industry.CORE_STAFFING]: {
    title: 'Global Contract Staffing',
    category: 'Core',
    description: 'Scalable offshore workforce solutions. We provide deployment-ready Indian talent for global firms, ensuring 100% compliance and 70% cost reduction.',
    icon: 'fa-file-contract',
    roles: ['Contractual Employees', 'Offshore Teams', 'Project Staffing'],
    benefits: 'Zero hiring liabilities, instant scaling.'
  },
  [Industry.IT_AI]: {
    title: 'IT & AI Talent Solutions',
    category: 'Technology',
    description: 'Expert recruitment for high-tech sectors. From Full Stack Devs to AI Engineers, we source elite talent for USA, UK, and AU tech hubs.',
    icon: 'fa-laptop-code',
    roles: ['AI/ML Specialists', 'SaaS Developers', 'Cloud Architects', 'DevOps Experts'],
    benefits: 'Vetted tech talent at $4-8/hour.'
  },
  [Industry.SOLAR_REALESTATE]: {
    title: 'Renewable & Real Estate Hiring',
    category: 'Industry Specific',
    description: 'Targeted staffing for the Solar and Real Estate industries. We source sales powerhouses and project managers who understand high-growth infrastructure.',
    icon: 'fa-solar-panel',
    roles: ['Channel Sales Partners', 'Site Engineers', 'Project Coordinators'],
    benefits: 'Specialized niche industry expertise.'
  },
  [Industry.SUPPORT]: {
    title: 'Global Customer Support BPO',
    category: 'Operations',
    description: '24/7 Voice and Non-Voice support teams. High-quality English proficiency for North American and European customer service standards.',
    icon: 'fa-headset',
    roles: ['International Support Agents', 'Technical Helpdesk', 'CX Specialists'],
    benefits: 'Round-the-clock global service coverage.'
  },
  [Industry.TRAVEL_OPS]: {
    title: 'Travel & Back-Office RPO',
    category: 'Operations',
    description: 'Back-office process support for travel and logistics agencies. Handle documentation, CRM management, and operations at scale.',
    icon: 'fa-plane-departure',
    roles: ['Logistics Ops Executives', 'CRM Managers', 'Documentation Staff'],
    benefits: 'Operational efficiency at offshore costs.'
  },
  [Industry.AI_SOLUTIONS]: {
    title: 'AI Voice & Chat Automation',
    category: 'Innovation',
    description: 'The future of staffing. Deploy AI-driven voice agents for lead handling and appointment scheduling to supplement your human workforce.',
    icon: 'fa-robot',
    roles: ['AI Lead Handlers', 'Automated Scheduling', 'Chatbot Management'],
    benefits: '90% reduction in simple inquiry costs.'
  },
  [Industry.MANPOWER]: {
    title: 'Bulk Manpower Sourcing',
    category: 'Core',
    description: 'Volume hiring solutions for large enterprises. Rapid sourcing and screening of 100+ candidates for major project launches.',
    icon: 'fa-users-gear',
    roles: ['Mass Hiring Projects', 'General Staffing', 'Entry-level Batches'],
    benefits: 'Speed-to-hire for volume requirements.'
  },
  [Industry.OVERSEAS]: {
    title: 'Overseas & Expat Recruitment',
    category: 'Global',
    description: 'Navigating international hiring complexities. We assist in cross-border talent placement and expat compliance for global projects.',
    icon: 'fa-earth-americas',
    roles: ['International Headhunting', 'Expat Vetting', 'Visa Compliance Support'],
    benefits: 'Elite global talent search capability.'
  },
  [Industry.RPO]: {
    title: 'Recruitment Process Outsourcing',
    category: 'Managed Services',
    description: 'We act as your internal HR team. Dedicated recruiters who manage the end-to-end cycle from sourcing to final onboarding.',
    icon: 'fa-building-circle-check',
    roles: ['Dedicated Hiring Managers', 'ATS Management', 'Onboarding Support'],
    benefits: 'No internal HR overheads.'
  },
  [Industry.CV_SERVICES]: {
    title: 'Candidate Profile Optimization',
    category: 'Specialized',
    description: 'Professional CV formatting and profile creation. Ensuring candidates meet the presentation standards of top-tier global firms.',
    icon: 'fa-id-card',
    roles: ['Resume Redesign', 'LinkedIn Optimization', 'Profile Verification'],
    benefits: 'Standardized high-quality talent presentation.'
  },
  [Industry.EXECUTIVE]: {
    title: 'C-Suite Executive Search',
    category: 'Elite',
    description: 'Confidential headhunting for leadership roles. Finding the directors and VPs who will steer your company to the next level.',
    icon: 'fa-crown',
    roles: ['VPs & Directors', 'Strategic Leads', 'Technical Founders'],
    benefits: 'Niche, discreet leadership sourcing.'
  }
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    experience: 'Junior Talent (1–3 Years)',
    cost: 'USD 500 – 690',
    hourlyRate: '$4 - $5',
    features: ['Fully Screened', 'English Proficient', 'Immediate Availability', 'Replacement Guarantee']
  },
  {
    experience: 'Expert Talent (3–7+ Years)',
    cost: 'USD 700 – 950',
    hourlyRate: '$6 - $8',
    features: ['Lead Experience', 'Advanced Certifications', 'Niche Technical Skills', 'Direct Manager Reporting']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Role Specification',
    description: 'We define the technical and cultural requirements for your ideal candidate.',
    icon: 'fa-comments'
  },
  {
    number: '02',
    title: 'Talent Sourcing',
    description: 'Our recruiters scour our database of 500k+ Indian professionals.',
    icon: 'fa-magnifying-glass'
  },
  {
    number: '03',
    title: 'Rigorous Vetting',
    description: 'Candidates undergo technical tests and behavioral interviews.',
    icon: 'fa-user-check'
  },
  {
    number: '04',
    title: 'Client Finalization',
    description: 'You interview the top 3-5 candidates and make the final hire.',
    icon: 'fa-calendar-days'
  },
  {
    number: '05',
    title: 'Seamless Onboarding',
    description: 'We handle the contracts and logistics. Your new hire starts immediately.',
    icon: 'fa-handshake'
  }
];