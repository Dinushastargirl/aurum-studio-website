"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';
import Image from '../components/Image';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-aurum-dark min-h-screen pt-12">
      {/* Header */}
      <div className="py-24 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif text-white mb-6"
        >
          Our <span className="text-aurum-blue italic">Artistic Journey</span>
        </motion.h1>
        <p className="text-aurum-gold font-bold tracking-[0.4em] uppercase text-xs">Since 2012 • Rajagiriya, Sri Lanka</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-24 space-y-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <Image src={IMAGES.ABOUT_1} alt="Studio Interior" className="w-full h-[500px] object-cover rounded-3xl shadow-2xl" />
          <h2 className="text-3xl font-serif text-white italic">Excellence in every detail.</h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Aurum Studio was founded on a simple yet profound realization: that luxury isn't about excess, but about the purity of the experience. Our studio in Rajagiriya was designed to be more than a salon—it's a sanctuary where technical mastery meets total beauty rituals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-aurum-gold">The Craft of Artistry</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              We specialize in total transformations that respect the health of your hair and skin. Our artists use only the finest formulations to achieve depth, dimension, and radiance that lasts.
            </p>
          </div>
          <Image src={IMAGES.ABOUT_2} alt="Artistry" className="w-full h-[400px] object-cover rounded-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-aurum-blue/10 p-12 rounded-3xl text-center border border-aurum-blue/20"
        >
          <h3 className="text-2xl font-serif text-white mb-4 italic">"Beauty is the illumination of your soul."</h3>
          <div className="w-16 h-px bg-aurum-gold mx-auto mb-4" />
          <p className="text-aurum-gold text-sm font-bold tracking-widest uppercase">The Aurum Creed</p>
        </motion.div>

        <div className="space-y-8">
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Every appointment begins with a deep-dive consultation. We analyze facials, skin tones, hair textures, and lifestyle to craft a look that isn't just beautiful in our mirror, but effortless in your world.
          </p>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Join us for an experience that transcends the ordinary. From the moment you step through our doors, you are the masterpiece we are dedicated to perfecting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;