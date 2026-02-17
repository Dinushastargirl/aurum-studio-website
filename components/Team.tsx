
import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="py-24 bg-aurum-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-aurum-gold font-medium tracking-widest uppercase text-sm mb-4"
          >
            The Experts
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-white"
          >
            Meet Our Master Stylists
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {TEAM.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="relative h-[500px] overflow-hidden rounded-2xl border border-aurum-blue/20">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aurum-dark via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <h4 className="text-3xl font-serif text-white mb-2">{member.name}</h4>
                  <p className="text-aurum-gold font-medium tracking-widest uppercase text-xs mb-4">
                    {member.role}
                  </p>
                  <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="text-white hover:text-aurum-blue"><i className="fab fa-instagram text-xl"></i></a>
                    <a href="#" className="text-white hover:text-aurum-blue"><i className="fab fa-linkedin-in text-xl"></i></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
