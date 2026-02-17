
import React from 'react';
import { motion } from 'framer-motion';
import { TEAM, GALLERY_ITEMS } from '../constants';

const TeamPage: React.FC = () => {
  return (
    <div className="bg-aurum-dark min-h-screen pt-12">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 italic">The Master Artists</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
            Our team consists of world-class stylists and beauty experts dedicated to the highest standards of craft.
          </p>
        </div>

        {/* Detailed Profiles */}
        <div className="space-y-32">
          {TEAM.map((member, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="w-full lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <img src={member.image} alt={member.name} className="w-full h-[600px] object-cover rounded-3xl" />
                  <div className="absolute inset-0 border border-aurum-gold/20 rounded-3xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform" />
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-aurum-gold font-bold tracking-widest text-xs uppercase">{member.role}</h2>
                <h3 className="text-4xl font-serif text-white italic">{member.name}</h3>
                <p className="text-gray-400 text-lg font-light leading-relaxed">
                  With over a decade of experience in the luxury styling industry, {member.name} has mastered the art of {member.role === 'Hair Stylist' ? 'complex colorations and precision cutting' : 'holistic beauty and advanced skin rejuvenation'}. 
                </p>
                <div className="pt-4 flex gap-8">
                  <div className="text-center">
                    <p className="text-white font-serif text-2xl">10+</p>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">Years Exp</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-serif text-2xl">2k+</p>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">Clients</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-serif text-2xl">50+</p>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">Awards</p>
                  </div>
                </div>
                <button className="bg-aurum-blue text-white px-8 py-3 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-aurum-blue/80 transition-all">
                  Book with {member.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-moving Carousel */}
      <div className="py-24 bg-aurum-blue/5 overflow-hidden">
        <div className="text-center mb-12 px-4">
          <h4 className="text-white font-serif text-2xl italic">Salon Glimpse</h4>
        </div>
        <div className="relative flex gap-6 overflow-hidden">
          <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: [0, -2000] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...GALLERY_ITEMS, ...GALLERY_ITEMS].map((item, i) => (
              <img 
                key={i} 
                src={item.url} 
                className="h-64 w-96 object-cover rounded-xl shadow-lg border border-aurum-blue/10" 
                alt="Salon Work"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
