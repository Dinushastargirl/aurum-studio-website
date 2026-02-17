
import React from 'react';
import { motion } from 'framer-motion';

const ContactPreview: React.FC = () => {
  return (
    <section className="py-20 bg-aurum-dark border-t border-aurum-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-aurum-gold font-bold tracking-widest uppercase text-xs mb-3"
          >
            Contact
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-serif text-white"
          >
            Find Us
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="w-14 h-14 bg-aurum-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-map-marker-alt text-aurum-gold text-xl"></i>
            </div>
            <h4 className="text-white font-semibold text-lg">Address</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              Aurum Studio,<br />
              Rajagiriya, Sri Lanka
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center space-y-4"
          >
            <div className="w-14 h-14 bg-aurum-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fab fa-whatsapp text-aurum-gold text-xl"></i>
            </div>
            <h4 className="text-white font-semibold text-lg">WhatsApp</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              Contact us via WhatsApp<br />
              for quick bookings
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-4"
          >
            <div className="w-14 h-14 bg-aurum-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-clock text-aurum-gold text-xl"></i>
            </div>
            <h4 className="text-white font-semibold text-lg">Open Hours</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              Tue - Sun: 8:00 AM - 7:30 PM<br />
              Monday: Closed
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-12 border-t border-aurum-blue/10 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-sm text-gray-400"
        >
          <div className="flex gap-4">
            <span className="text-aurum-gold font-bold uppercase tracking-wider">Tuesday - Sunday:</span>
            <span>8:00 AM - 7:30 PM</span>
          </div>
          <div className="flex gap-4">
            <span className="text-aurum-gold font-bold uppercase tracking-wider">Monday:</span>
            <span className="italic">Closed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPreview;
