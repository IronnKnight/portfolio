export interface CaseStudy {
  company: string;
  role: string;
  period: string;
  context: string;
  problem: string;
  decisions: string[];
  impact: string;
  techStack: string[];
}

export interface Principle {
  title: string;
  description: string;
}

export interface TechCategory {
  name: string;
  items: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  statement: string;
  socials: SocialLink[];
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormState {
  success: boolean;
  message: string;
}
