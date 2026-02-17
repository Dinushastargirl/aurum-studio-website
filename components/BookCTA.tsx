"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingForm from './BookingForm';

const BookCTA: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-24 bg-aurum-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-aurum-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-aurum-dark/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-white"
          >
            <h2 className="text-4xl md:text-6xl font-serif italic">Your Transformation Awaits</h2>
            <p className="text-white/80 max-w-xl font-light text-lg leading-relaxed">
              Step into the gold standard of beauty. Whether you desire a subtle refresh or a complete artistic overhaul, our masters are ready.
            </p>
            {!showForm && (
              <button 
                onClick={() => setShowForm(true)}
                className="bg-aurum-gold text-aurum-dark px-12 py-5 rounded-full font-bold tracking-widest uppercase text-sm shadow-2xl hover:scale-105 transition-transform"
              >
                Inquire Now
              </button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <BookingForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookCTA;