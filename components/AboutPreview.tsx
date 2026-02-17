"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';
import { Page } from '../App';
import Image from './Image';

interface AboutPreviewProps {
  onNavigate: (page: Page) => void;
}

const AboutPreview: React.FC<AboutPreviewProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-aurum-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('about')}
            className="mb-12 group flex flex-col items-center"
          >
            <Image 
              src={IMAGES.LOGO} 
              alt="AURUM STUDIO" 
              className="h-24 w-auto mb-4 filter drop-shadow-2xl transition-all duration-500 group-hover:brightness-125" 
              priority
            />
            <div className="h-px w-24 bg-aurum-gold mx-auto group-hover:w-32 transition-all duration-500" />
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              A luxury studio for <span className="text-aurum-blue">total beauty services</span>.
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              AURUM STUDIO is a high-end total beauty destination in Rajagiriya. We provide premium hair, skin, and nail services. Our team focus on quality and personal style for every client.
            </p>
            <button 
              onClick={() => onNavigate('about')}
              className="mt-8 text-aurum-gold font-bold tracking-widest text-xs uppercase border-b border-aurum-gold pb-1 hover:text-aurum-blue hover:border-aurum-blue transition-colors"
            >
              About Our Studio
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;