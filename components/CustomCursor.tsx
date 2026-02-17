"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useCustomCursor } from '../hooks/useCustomCursor';

const CustomCursor: React.FC = () => {
  const { mousePosition, isHovering } = useCustomCursor();

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden lg:flex items-center justify-center"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    >
      <div className={`relative flex items-center justify-center transition-colors duration-300 ${isHovering ? 'text-aurum-blue' : 'text-aurum-gold'}`}>
        <i className="fas fa-paint-brush text-2xl drop-shadow-lg"></i>
        {isHovering && (
          <motion.div
            layoutId="cursor-ring"
            className="absolute -inset-2 border-2 border-aurum-blue rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default CustomCursor;