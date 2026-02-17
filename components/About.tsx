import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-aurum-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="pt-12">
              <img 
                src={IMAGES.ABOUT_1} 
                alt="Total Beauty Interior" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover border border-aurum-blue/10"
              />
            </div>
            <div>
              <img 
                src={IMAGES.ABOUT_2} 
                alt="Skincare Rituals" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover border border-aurum-gold/10"
              />
            </div>
            
            {/* Decorative Gold Box */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-aurum-gold/20 -z-10 rounded-xl" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-aurum-gold font-medium tracking-widest uppercase text-sm">Our Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Sri Lanka's Destination for <br /> <span className="text-aurum-blue">Total Artistic Beauty</span>
            </h3>
            <p className="text-gray-400 font-light text-lg leading-relaxed">
              Founded on the principles of precision and holistic artistry, Aurum Studio isn't just a salon—it's Rajagiriya's premier sanctuary for total self-expression. We provide a comprehensive range of premium services covering hair, skin, and nail health.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Bespoke Total Hair Transformations",
                "Advanced Clinical Skincare & Facials",
                "Luxury Nail Artistry & Spa Care",
                "Full-Body Grooming & Waxing Services"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-aurum-gold rounded-full mr-4" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-8">
              <button className="group flex items-center text-aurum-gold font-bold text-lg hover:text-aurum-blue transition-colors">
                LEARN MORE ABOUT OUR CRAFT
                <i className="fas fa-arrow-right ml-3 transform group-hover:translate-x-2 transition-transform"></i>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;