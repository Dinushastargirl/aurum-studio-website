import { NavItem, TeamMember, GalleryItem, BlogPost, GoogleReview } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'team', label: 'Team', href: '#team' },
  { id: 'blog', label: 'Blog', href: '#blog' },
];

export const CONTACT_INFO = {
  address: '425/7 Atigala Gdn Rd, Sri Jayawardenepura Kotte 10001',
  phone: '071 222 9182',
  whatsapp: '94712229182',
  bookingUrl: 'https://www.fresha.com/a/aurum-studio-sri-jayawardenepura-kotte-atigala-garden-road-tvknpalf'
};

export const SOCIAL_LINKS = {
  tiktok: 'https://www.tiktok.com/@aurum.salon',
  facebook: 'https://www.facebook.com/aurumltd/',
  instagram: 'https://www.instagram.com/aurumltd/',
  youtube: 'https://www.youtube.com/@AurumStudioRajagiriya'
};

export const IMAGES = {
  LOGO: 'https://i.ibb.co/7Tz8WwT/image.png',
  HERO: 'https://i.ibb.co/SwZsqDFb/image.png',
  ABOUT_1: 'https://i.ibb.co/0pPpyNCB/image.png',
  ABOUT_2: 'https://i.ibb.co/nqnq3RFT/image.png',
  TEAM_NILUSHA: 'https://i.ibb.co/Md8p4kY/image.png',
  TEAM_ROHAN: 'https://i.ibb.co/0pRZvdWN/image.png',
  GALLERY: [
    'https://i.ibb.co/cXSM2FV/image.png',
    'https://i.ibb.co/2002jqY/image.png',
    'https://i.ibb.co/svH3bj1/image.png',
    'https://i.ibb.co/C3CY6My/image.png',
    'https://i.ibb.co/WNc5nLF/image.png',
    'https://i.ibb.co/hRD5M5N/image.png',
    'https://i.ibb.co/D2c1QYF/image.png',
    'https://i.ibb.co/s9h0R6w/image.png',
    'https://i.ibb.co/3m5Hh6N/image.png',
    'https://i.ibb.co/4cbc7Zp/image.png'
  ]
};

export const TEAM: TeamMember[] = [
  { name: 'Nilusha', role: 'Master Hair Stylist', image: IMAGES.TEAM_NILUSHA },
  { name: 'Rohan', role: 'Advanced Skin & Nail Expert', image: IMAGES.TEAM_ROHAN }
];

export const SERVICES = [
  {
    title: 'Advanced Hair Artistry',
    icon: 'fa-palette',
    description: 'Bespoke coloring, precision cuts, and bridal transformations.',
    price: 'LKR 4,500+'
  },
  {
    title: 'Clinical Skincare',
    icon: 'fa-spa',
    description: 'Total facial rituals, acne treatments, and rejuvenation.',
    price: 'LKR 7,500+'
  },
  {
    title: 'Luxury Nail Spa',
    icon: 'fa-hand-sparkles',
    description: 'Gel artistry, restorative manicures, and pedicures.',
    price: 'LKR 2,500+'
  },
  {
    title: 'Grooming & Waxing',
    icon: 'fa-magic',
    description: 'Precision threading, waxing, and full-body grooming.',
    price: 'LKR 1,000+'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = IMAGES.GALLERY.map((url, index) => ({
  id: index,
  url,
  alt: `Aurum Studio Transformation ${index + 1}`
}));

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Total Beauty',
    excerpt: 'Exploring modern luxury and artistic expression in Sri Lanka.',
    date: 'Dec 2024',
    category: 'Lifestyle',
    image: IMAGES.GALLERY[0],
    content: 'Deep dive into our studio philosophy...'
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 1,
    author: 'Dilshan Perera',
    rating: 5,
    text: 'Best total beauty studio in Rajagiriya! Nilusha did an amazing job with my hair.',
    time: '2 days ago'
  },
  {
    id: 2,
    author: 'Amanda Silva',
    rating: 5,
    text: 'Aurum Studio is pure luxury. It is a one-stop-shop for my hair, nails, and facials.',
    time: '1 week ago'
  }
];