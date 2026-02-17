
import { NavItem, TeamMember, GalleryItem, BlogPost, GoogleReview } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'team', label: 'Team', href: '#team' },
  { id: 'blog', label: 'Blog', href: '#blog' },
];

export const IMAGES = {
  LOGO: 'https://i.ibb.co/7Tz8WwT/image.png',
  HERO: 'https://i.ibb.co/SwZsqDFb/image.png',
  ABOUT_1: 'https://i.ibb.co/0pPpyNCB/image.png',
  ABOUT_2: 'https://i.ibb.co/nqnq3RFT/image.png',
  TEAM_NILUSHA: 'https://i.ibb.co/Md8p4kY/image.png',
  TEAM_ROHAN: 'https://i.ibb.co/0pRZvdWN/image.png',
  GALLERY: [
    'https://i.ibb.co/cXSM2FVb/image.png',
    'https://i.ibb.co/2002jqYm/image.png',
    'https://i.ibb.co/svH3bj1D/image.png',
    'https://i.ibb.co/C3CY6Mys/image.png',
    'https://i.ibb.co/WNc5nLFX/image.png',
    'https://i.ibb.co/hRD5M5NN/image.png',
    'https://i.ibb.co/D2c1QYF/image.png',
    'https://i.ibb.co/s9h0R6ws/image.png',
    'https://i.ibb.co/3m5Hh6NZ/image.png',
    'https://i.ibb.co/4cbc7Zp/image.png'
  ]
};

export const TEAM: TeamMember[] = [
  { name: 'Nilusha', role: 'Hair Stylist', image: IMAGES.TEAM_NILUSHA },
  { name: 'Rohan', role: 'Beautician', image: IMAGES.TEAM_ROHAN }
];

export const SERVICES = [
  {
    title: 'Hair Color',
    icon: 'fa-palette',
    description: 'Expert balayage, highlights, and full transformations.',
    price: 'From $120'
  },
  {
    title: 'Hair Treatment',
    icon: 'fa-magic',
    description: 'Keratin, deep conditioning, and scalp therapy.',
    price: 'From $80'
  },
  {
    title: 'Facials',
    icon: 'fa-spa',
    description: 'Bespoke skin rituals for a radiant glow.',
    price: 'From $95'
  },
  {
    title: 'Mani & Pedi',
    icon: 'fa-hand-sparkles',
    description: 'Luxury nail care and aesthetic treatments.',
    price: 'From $45'
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
    title: 'Top Hair Color Trends for 2024',
    excerpt: 'Discover the most popular colors and techniques for the new year.',
    date: 'Oct 15, 2024',
    category: 'Styling',
    image: IMAGES.GALLERY[0],
    content: 'Long form content about hair color trends...'
  },
  {
    id: 2,
    title: 'Essential Summer Hair Care',
    excerpt: 'How to protect your hair from sun and sea during the holidays.',
    date: 'Sep 28, 2024',
    category: 'Care',
    image: IMAGES.GALLERY[1],
    content: 'Detailed tips on summer hair protection...'
  },
  {
    id: 3,
    title: 'The Secret to Radiant Skin',
    excerpt: 'Our master beautician shares her daily routine for perfect skin.',
    date: 'Sep 10, 2024',
    category: 'Beauty',
    image: IMAGES.GALLERY[2],
    content: 'Professional skin care routine advice...'
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 1,
    author: 'Dilshan Perera',
    rating: 5,
    text: 'Best salon in Rajagiriya! Nilusha did an amazing job with my hair cut. Very professional service.',
    time: '2 days ago'
  },
  {
    id: 2,
    author: 'Amanda Silva',
    rating: 5,
    text: 'Aurum Studio is pure luxury. The facial treatment was so relaxing. Highly recommended!',
    time: '1 week ago'
  },
  {
    id: 3,
    author: 'Kasun Rathnayake',
    rating: 5,
    text: 'Great atmosphere and friendly staff. Rohan is a master beautician. Will definitely come back.',
    time: '3 weeks ago'
  }
];
