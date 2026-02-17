
import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';
import { Page } from '../App';
import Image from './Image';

interface TeamPreviewProps {
  onNavigate: (page: Page) => void;
}

const TeamPreview: React.FC<TeamPreviewProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-aurum-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-aurum-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">The Talent</h2>
            <h3 className="text-4xl font-serif text-white">Our Artistic Team</h3>
          </div>
          <button 
            onClick={() => onNavigate('team')}
            className="text-aurum-light hover:text-aurum-gold transition-colors font-bold tracking-widest text-xs uppercase border-b border-white/20 pb-1"
          >
            Full Profiles
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {TEAM.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => onNavigate('team')}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-aurum-blue/5">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aurum-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              <h4 className="text-2xl font-serif text-white mb-1">{member.name}</h4>
              <p className="text-aurum-gold text-xs tracking-widest uppercase font-semibold">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
