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
  whatsapp: '94712229182', // For WhatsApp direct links
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
  alt: `Aurum Studio Total Beauty Transformation ${index + 1}`
}));

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Hair & Skin Trends in Sri Lanka 2024',
    excerpt: 'Discover the most popular beauty rituals specifically curated for the tropical climate.',
    date: 'Oct 15, 2024',
    category: 'Lifestyle',
    image: IMAGES.GALLERY[0],
    content: 'Long form content about total beauty trends...'
  },
  {
    id: 2,
    title: 'Caring for Your Skin Post-Treatment',
    excerpt: 'How to maintain that Aurum glow after your clinical facial.',
    date: 'Sep 28, 2024',
    category: 'Skincare',
    image: IMAGES.GALLERY[1],
    content: 'Detailed tips on post-facial skincare...'
  },
  {
    id: 3,
    title: 'The Secret to Stronger Nails',
    excerpt: 'Our nail experts share their daily routine for long-lasting gel wear.',
    date: 'Sep 10, 2024',
    category: 'Nails',
    image: IMAGES.GALLERY[2],
    content: 'Professional nail care advice...'
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 1,
    author: 'Dilshan Perera',
    rating: 5,
    text: 'Best total beauty studio in Rajagiriya! Nilusha did an amazing job with my hair, and the skin treatment was top-notch.',
    time: '2 days ago'
  },
  {
    id: 2,
    author: 'Amanda Silva',
    rating: 5,
    text: 'Aurum Studio is pure luxury. It is a one-stop-shop for my hair, nails, and facials. Highly recommended!',
    time: '1 week ago'
  },
  {
    id: 3,
    author: 'Kasun Rathnayake',
    rating: 5,
    text: 'Great atmosphere and friendly staff. Rohan is a master beautician for both skin and nails.',
    time: '3 weeks ago'
  }
];