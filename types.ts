
export type InquiryType = 'Employer' | 'Candidate' | 'General';

export interface InquiryData {
  type: InquiryType;
  name: string;
  contact: string;
  details: string;
  company?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}
