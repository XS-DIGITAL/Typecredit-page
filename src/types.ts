export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  amount: string;
  rating: number;
  avatar: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface LoanTier {
  level: number;
  title: string;
  amountRange: string;
  minAmount: number;
  maxAmount: number;
  tenure: string;
  perks: string[];
}
