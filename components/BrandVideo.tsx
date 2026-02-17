"use client";

import React from 'react';
import { motion } from 'framer-motion';

const BrandVideo: React.FC = () => {
  return (
    <section className="py-24 bg-aurum-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-aurum-gold font-medium tracking-widest uppercase text-xs mb-4"
          >
            Experience Aurum
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-serif text-white italic"
          >
            The Art of Transformation
          </motion.h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(30,122,138,0.2)] border border-aurum-blue/20"
        >
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/MGw35gzFE84?autoplay=0&mute=1&loop=1&playlist=MGw35gzFE84" 
            title="Aurum Studio Brand Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 font-light text-sm italic">
            Visualizing the luxury experience at our Rajagiriya sanctuary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandVideo;