export interface CaseStudy {
  project: string;
  url?: string;
  position: string;
  period: string;
  highlights: string[];
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
