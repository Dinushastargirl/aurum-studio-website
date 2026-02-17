"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES, CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url("${IMAGES.HERO}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-aurum-dark/90 via-aurum-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-aurum-gold font-medium tracking-[0.3em] uppercase mb-4 block">
              Luxury Total Beauty Studio
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              Premium <br />
              <span className="text-aurum-blue">Artistic Services</span> <br />
              in Sri Lanka
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg font-light leading-relaxed">
              Experience world-class hair, skin, and nail care. Our experts specialize in high-end transformations tailored to your unique style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={CONTACT_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-aurum-gold hover:bg-aurum-gold/80 text-aurum-dark px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-xl text-center text-sm tracking-widest uppercase"
              >
                Book Appointment
              </a>
              <a 
                href="#services-preview"
                className="border border-aurum-blue hover:bg-aurum-blue/10 text-aurum-light px-10 py-4 rounded-full font-bold transition-all duration-300 text-center text-sm tracking-widest uppercase"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-aurum-gold"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-px h-12 bg-aurum-gold/40" />
      </motion.div>
    </div>
  );
};

export default Hero;