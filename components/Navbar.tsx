"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, IMAGES } from '../constants';
import { Page } from '../App';

interface NavbarProps {
  activeSection: string;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    // Included 'gallery' in the whitelist to allow direct navigation
    if (['home', 'about', 'team', 'services', 'blog', 'gallery'].includes(id)) {
      onNavigate(id as Page);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-aurum-dark/90 backdrop-blur-md border-b border-aurum-blue/20 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <button onClick={() => handleNavClick('home')} className="flex items-center">
              <img src={IMAGES.LOGO} alt="AURUM STUDIO" className="h-10 w-auto brightness-110" />
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${
                    currentPage === item.id ? 'text-aurum-gold' : 'text-aurum-light hover:text-aurum-blue'
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-aurum-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
              <button className="bg-aurum-blue hover:bg-aurum-blue/80 text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 transform hover:scale-105 border border-aurum-gold/20">
                Book Appointment
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-aurum-light p-2">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 right-0 bg-aurum-dark border-b border-aurum-blue/20 overflow-hidden md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left py-2 text-sm font-semibold tracking-widest uppercase ${
                    currentPage === item.id ? 'text-aurum-gold' : 'text-aurum-light'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full bg-aurum-blue text-white py-4 rounded-lg text-sm font-bold tracking-widest uppercase">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;