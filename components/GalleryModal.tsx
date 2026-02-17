
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '../types';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose, onNext, onPrev }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-aurum-dark/95 backdrop-blur-xl flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button 
          className="absolute top-8 right-8 text-white/50 hover:text-aurum-gold text-3xl transition-colors z-[110]"
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>

        <button 
          className="absolute left-4 lg:left-12 text-white/30 hover:text-aurum-gold text-4xl transition-all z-[110]"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-5xl w-full aspect-[4/5] lg:aspect-video rounded-2xl overflow-hidden shadow-2xl border border-aurum-blue/20"
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={item.url} 
            alt={item.alt} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-aurum-dark to-transparent">
            <p className="text-aurum-gold font-serif text-xl italic">{item.alt}</p>
          </div>
        </motion.div>

        <button 
          className="absolute right-4 lg:right-12 text-white/30 hover:text-aurum-gold text-4xl transition-all z-[110]"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;
