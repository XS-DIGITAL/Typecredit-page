import { Testimonial, FaqItem, LoanTier } from './types';

export const APP_CONFIG = {
  appName: 'TypeCredit',
  apkFileName: 'typecredit-app.apk',
  apkDownloadUrl: 'https://github.com/kaitlinmoris-cloud/vibe-coding-platform/releases/download/v0.1/typecredit-app.apk',
  apkSize: '24.6 MB',
  apkVersion: '2.4.1',
  minAndroidVersion: '8.0+',
};

export const LOAN_TIERS: LoanTier[] = [
  {
    level: 1,
    title: 'Starter Tier',
    amountRange: '₦20,000 – ₦50,000',
    minAmount: 20000,
    maxAmount: 50000,
    tenure: '14 – 30 Days',
    perks: ['Zero paperwork', 'Everyone approved', 'Immediate bank transfer'],
  },
  {
    level: 2,
    title: 'Builder Tier',
    amountRange: '₦50,000 – ₦100,000',
    minAmount: 50000,
    maxAmount: 100000,
    tenure: '30 – 60 Days',
    perks: ['Lower interest rate', 'Flexible repayment', 'Auto-limit boost'],
  },
  {
    level: 3,
    title: 'Premier Tier',
    amountRange: '₦100,000 – ₦200,000',
    minAmount: 100000,
    maxAmount: 200000,
    tenure: '30 – 90 Days',
    perks: ['Priority disbursement in 60s', 'Extended grace days', 'Dedicated support'],
  },
  {
    level: 4,
    title: 'Champion Tier',
    amountRange: '₦200,000 – ₦300,000',
    minAmount: 200000,
    maxAmount: 300000,
    tenure: 'Up to 90 Days',
    perks: ['Maximum limit ₦300k', 'Lowest fees guaranteed', 'VIP rapid renewals'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Amara O.',
    role: 'Fashion Retailer & Student',
    location: 'Ikeja, Lagos',
    comment: '“I got my first loan of ₦20,000 within minutes when my stock was stuck. Now my limit is ₦150,000. TypeCredit changed everything for my weekly restocking!”',
    amount: '₦150,000 Limit',
    rating: 5,
    avatar: '/assets/images/avatar_amara_1789731864203.jpg',
    verified: true,
  },
  {
    id: '2',
    name: 'Tunde K.',
    role: 'Logistics Supervisor',
    location: 'Wuse 2, Abuja',
    comment: '“No stress, no hidden charges. The setup was super easy and everyone is eligible. Funds landed directly into my Kuda account in less than 3 minutes.”',
    amount: '₦280,000 Limit',
    rating: 5,
    avatar: '/assets/images/avatar_tunde_1789731882199.jpg',
    verified: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Eligibility',
    question: 'Is everyone really eligible for TypeCredit?',
    answer: 'Yes! TypeCredit is intentionally built without traditional restrictive credit checks or rigid salary slips. If you are 18+ with an active Nigerian mobile phone number and bank account, you qualify for the initial ₦20,000 limit immediately upon downloading the app.',
  },
  {
    category: 'Loan Growth',
    question: 'How do I grow my limit from ₦20,000 to ₦300,000?',
    answer: 'Your credit limit grows progressively with each on-time repayment. Once you clear a loan cycle, your account automatically unlocks higher tier bands (₦50k, ₦100k, ₦150k, up to ₦300,000) with longer repayment terms.',
  },
  {
    category: 'Disbursement',
    question: 'How fast do funds arrive in my bank account?',
    answer: 'Once you accept your loan offer in the app, disbursement is handled via automated Nigerian interbank switches (NIBSS). Most users receive credit alerts in their accounts within 60 to 180 seconds.',
  },
  {
    category: 'Security',
    question: 'Is my personal information and bank details secure?',
    answer: 'Your security is paramount. We use 256-bit SSL banking-grade encryption, adhere strictly to the Nigeria Data Protection Regulation (NDPR), and never contact your friends, employers, or family members.',
  },
  {
    category: 'Repayment',
    question: 'What repayment options are available?',
    answer: 'You can repay conveniently through direct debit card authorization, quick bank transfer to a dedicated virtual account, or automated USSD codes for your specific bank.',
  },
];
