import React from 'react';
import { IMAGES } from '../constants';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-aurum-dark pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <button 
            onClick={() => onNavigate('home')} 
            className="mb-10 transition-transform hover:scale-105"
          >
            <img 
              src={IMAGES.LOGO} 
              alt="AURUM STUDIO" 
              className="h-10 w-auto brightness-110" 
              loading="lazy"
            />
          </button>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-10 text-center">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About Us', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Team', id: 'team' },
              { label: 'Blog', id: 'blog' },
              { label: 'Gallery', id: 'gallery' },
              { label: 'Contact', id: 'home' },
            ].map((link) => (
              <button 
                key={link.label}
                onClick={() => onNavigate(link.id as Page)} 
                className="text-gray-400 hover:text-aurum-gold transition-colors text-xs uppercase tracking-[0.2em] font-medium"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => onNavigate('services')}
              className="text-aurum-gold hover:text-aurum-blue transition-colors text-xs uppercase tracking-[0.2em] font-bold"
            >
              Book Appointment
            </button>
          </div>

          <div className="flex gap-8 mb-12">
            {[
              { icon: 'facebook-f', label: 'facebook' },
              { icon: 'instagram', label: 'instagram' },
              { icon: 'youtube', label: 'youtube' },
              { icon: 'tiktok', label: 'tiktok' },
              { icon: 'whatsapp', label: 'whatsapp' }
            ].map((social) => (
              <a 
                key={social.label}
                href="#" 
                className="text-gray-400 hover:text-aurum-blue transition-all text-xl"
                aria-label={social.label}
              >
                <i className={`fab fa-${social.icon}`}></i>
              </a>
            ))}
          </div>

          <div className="w-full border-t border-aurum-blue/5 pt-10 text-center">
            <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-bold">
              AURUM STUDIO • Rajagiriya • Sri Lanka
            </p>
            <p className="text-gray-700 text-[9px] mt-2 uppercase tracking-widest font-light">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;