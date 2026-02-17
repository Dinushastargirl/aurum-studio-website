"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const BookCTA: React.FC = () => {
  return (
    <section className="py-24 bg-aurum-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-aurum-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-aurum-dark/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-white"
          >
            <h2 className="text-4xl md:text-6xl font-serif italic">Your Transformation Awaits</h2>
            <p className="text-white/80 max-w-2xl mx-auto font-light text-lg leading-relaxed">
              Step into the gold standard of beauty. Whether you desire a subtle refresh or a complete artistic overhaul, our masters are ready to bring your vision to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href={CONTACT_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-aurum-gold text-aurum-dark px-16 py-6 rounded-full font-bold tracking-[0.3em] uppercase text-sm shadow-2xl hover:scale-105 transition-transform inline-block"
            >
              Book Your Appointment
            </a>
            <p className="mt-6 text-white/50 text-xs uppercase tracking-widest font-semibold">
              Trusted by 5000+ Clients
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookCTA;