"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_ITEMS } from '../constants';
import GalleryModal from './GalleryModal';
import { GalleryItem } from '../types';
import Image from './Image';

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedItem(null);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % GALLERY_ITEMS.length;
    setCurrentIndex(nextIdx);
    setSelectedItem(GALLERY_ITEMS[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setCurrentIndex(prevIdx);
    setSelectedItem(GALLERY_ITEMS[prevIdx]);
  };

  return (
    <div className="py-24 bg-aurum-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-aurum-gold font-medium tracking-widest uppercase text-sm mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-serif text-white italic"
          >
            Artistic Transformations
          </motion.h3>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index % 3 * 0.1, duration: 0.6 }}
              className="relative group overflow-hidden rounded-2xl cursor-pointer border border-aurum-blue/10 bg-aurum-dark shadow-xl"
              onClick={() => openModal(item, index)}
            >
              <Image 
                src={item.url} 
                alt={item.alt}
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-aurum-blue/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-plus text-xl"></i>
                  </div>
                  <p className="font-serif text-lg tracking-widest uppercase italic">Enlarge View</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <GalleryModal 
        item={selectedItem} 
        onClose={closeModal} 
        onNext={handleNext} 
        onPrev={handlePrev} 
      />
    </div>
  );
};

export default Gallery;