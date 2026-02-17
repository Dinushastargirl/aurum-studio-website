
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Page } from '../App';

interface ServicesPreviewProps {
  onNavigate: (page: Page) => void;
}

const ServicesPreview: React.FC<ServicesPreviewProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-aurum-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-aurum-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">What We Do</h2>
          <h3 className="text-4xl font-serif text-white italic">Artistic Services</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-aurum-dark/50 border border-aurum-blue/10 hover:border-aurum-gold/30 transition-all duration-500 cursor-pointer"
              onClick={() => onNavigate('services')}
            >
              <div className="w-12 h-12 rounded-full bg-aurum-blue/10 flex items-center justify-center mb-6 group-hover:bg-aurum-gold group-hover:text-aurum-dark transition-colors duration-500">
                <i className={`fas ${service.icon} text-xl text-aurum-gold group-hover:text-aurum-dark`}></i>
              </div>
              <h4 className="text-xl font-serif text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 text-sm font-light mb-4 leading-relaxed">{service.description}</p>
              <span className="text-aurum-gold text-xs font-bold tracking-wider">{service.price}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => onNavigate('services')}
            className="bg-aurum-blue hover:bg-aurum-blue/80 text-white px-10 py-4 rounded-full font-bold tracking-widest text-xs uppercase transition-all shadow-xl"
          >
            Full Service Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
