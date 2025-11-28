export enum Language {
  NL = 'NL',
  PT = 'PT',
  EN = 'EN'
}

export interface Job {
  id: string;
  title: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  category: 'construction' | 'logistics' | 'technical' | 'hospitality';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}