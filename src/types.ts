export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  metrics: string;
  client: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  ctaText: string;
  ctaType: 'katalog' | 'portfolio' | 'konsultasi';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  budgetRange: string;
  message: string;
}
