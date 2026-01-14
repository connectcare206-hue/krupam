
import { ServiceCard, PricingPlan, Industry, ProcessStep, Testimonial } from './types';

export const SERVICES: Record<Industry, ServiceCard> = {
  [Industry.IT_AI]: {
    title: 'IT & AI Recruitment',
    description: 'Strategic contractual hiring for global tech teams. We provide elite developers and AI specialists at 40-70% lower costs than traditional outsourcing firms.',
    icon: 'fa-code',
    roles: ['Software Developers (Full Stack)', 'AI/ML Engineers', 'Data Scientists', 'Cloud & DevOps Specialists', 'QA & Automation'],
    benefits: 'Cut hiring costs by 60%+ while maintaining high code quality.'
  },
  [Industry.PHARMA]: {
    title: 'Pharma & Healthcare',
    description: 'Specialized staffing for global pharma compliance. We source verified candidates for manufacturing, regulatory affairs, and clinical research.',
    icon: 'fa-microscope',
    roles: ['Regulatory Affairs', 'Clinical Research (CRA)', 'QA/QC Managers', 'Manufacturing Support', 'Pharmacovigilance'],
    benefits: 'Verified, compliant talent for accelerated global market entry.'
  },
  [Industry.ACCOUNTING]: {
    title: 'Bookkeeping & Accounting',
    description: 'Finance back-office support tailored for USA, UK, CA, and AU standards. Ensure 100% accuracy and compliance with global financial regulations.',
    icon: 'fa-file-invoice-dollar',
    roles: ['CPA Support Staff', 'Senior Bookkeepers', 'AP/AR Specialists', 'Payroll Management', 'Tax Support Analysts'],
    benefits: 'Reduce operational overhead while maintaining CPA-level accuracy.'
  },
  [Industry.DATA_AI]: {
    title: 'Contractual Staffing',
    description: 'A flexible recruitment model where you maintain 100% control. We handle the heavy lifting of sourcing and screening; you finalize the hire.',
    icon: 'fa-user-tie',
    roles: ['Project-Based Experts', 'Remote Support Teams', 'Specialized Contractors'],
    benefits: 'No vendor lock-ins. You hire. We deliver the talent.'
  }
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    experience: 'Junior (1–3 Years)',
    cost: 'USD 500 – 690',
    hourlyRate: '$4 - $5',
    features: ['Technical Vetting Included', 'Identity Verification', 'Direct Communication', 'Replacement Guarantee']
  },
  {
    experience: 'Senior (3–7 Years)',
    cost: 'USD 700 – 950',
    hourlyRate: '$6 - $8',
    features: ['Lead-Level Expertise', 'Complex Project Management', 'Niche Tech Specialization', 'Priority Support']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Requirement Discovery',
    description: 'We align on your specific tech stack, role requirements, and project timeline.',
    icon: 'fa-comments'
  },
  {
    number: '02',
    title: 'Sourcing & Screening',
    description: 'Our team rigorously vets candidates through technical assessments and cultural checks.',
    icon: 'fa-magnifying-glass'
  },
  {
    number: '03',
    title: 'Profile Shortlist',
    description: 'You receive a curated list of pre-screened profiles ready for evaluation.',
    icon: 'fa-user-check'
  },
  {
    number: '04',
    title: 'Direct Interviews',
    description: 'You interview candidates directly to ensure they fit your specific team needs.',
    icon: 'fa-calendar-days'
  },
  {
    number: '05',
    title: 'Final Selection',
    description: 'The hiring decision is yours. We handle the onboarding and logistics.',
    icon: 'fa-handshake'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Connectcare helped us build a 5-person dev team in weeks for the cost of one local senior hire. Incredible ROI.",
    author: "Mark S.",
    role: "CTO",
    location: "USA"
  },
  {
    quote: "Professional, fast, and compliant. The quality of Pharma regulatory candidates exceeded our expectations.",
    author: "Elena R.",
    role: "Operations Director",
    location: "UK"
  },
  {
    quote: "Remarkable accuracy in accounting support. They truly understand Australian standards.",
    author: "Sanjay G.",
    role: "Founder, CPA Firm",
    location: "Australia"
  }
];
