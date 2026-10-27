export type InstitutionType = 
  | 'Engineering College' 
  | 'University' 
  | 'Other Higher Education Institution' 
  | 'Other';

export type ServiceType = 
  | 'NBA Accreditation' 
  | 'NAAC Accreditation' 
  | 'NIRF Ranking' 
  | 'Consultancy Projects' 
  | 'Deemed University Establishment' 
  | 'Private University Establishment' 
  | 'Other';

export interface ContactFormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  institutionType: InstitutionType;
  serviceRequired: ServiceType;
  message: string;
  consent: boolean;
  honeypot?: string; // spam protection
}

export interface ServiceItem {
  id: string;
  serviceKey: ServiceType;
  title: string;
  shortTitle: string;
  description: string;
  iconName: string;
  ctaText: string;
  highlights: string[];
}

export interface QualificationItem {
  degree: string;
  institution: string;
  abbreviation: string;
  badge: string;
}

export interface ValueProposition {
  title: string;
  description: string;
  icon: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
}
