
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  alt: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export interface GoogleReview {
  id: number;
  author: string;
  rating: number;
  text: string;
  time: string;
  avatar?: string;
}
