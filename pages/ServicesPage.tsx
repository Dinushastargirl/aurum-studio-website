"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MEMBERSHIP_PACKAGES = [
  { name: 'Ladies Membership', details: 'Unlimited Blow Dry + Trim', prices: ['3M: 10,000', '6M: 20,000', '12M: 30,000'], icon: 'fa-venus' },
  { name: 'Gents Membership', details: 'Unlimited Hair Cut + Beard', prices: ['3M: 10,000', '6M: 20,000', '12M: 30,000'], icon: 'fa-mars' },
  { name: 'Skin & Nail Add-on', details: 'Monthly Luxury Ritual', prices: ['3M: +15,000', '6M: +25,000', '12M: +40,000'], icon: 'fa-sparkles' },
];

const SERVICE_GROUPS = [
  {
    category: 'Hair Artistry',
    items: [
      { name: 'Ladies Signature Cut', price: '4,500', member: 'FREE' },
      { name: 'Gents Precision Cut', price: '2,000', member: 'FREE' },
      { name: 'Fashion Colour (Long)', price: '11,500', member: '9,200' },
      { name: 'Balayage / Ombre Art', price: '30,000', member: '24,000' },
      { name: 'Keratin Smoothing', price: '25,000', member: '20,000' },
    ]
  },
  {
    category: 'Clinical Skincare',
    items: [
      { name: 'Aurum Signature Facial', price: '12,500', member: '10,000' },
      { name: 'Advanced Acne Therapy', price: '10,000', member: '8,000' },
      { name: 'Deep Sea Rejuvenation', price: '15,000', member: '12,000' },
      { name: 'Skin Brightening Ritual', price: '9,500', member: '7,600' },
    ]
  },
  {
    category: 'Nail Artistry',
    items: [
      { name: 'Luxury Gel Pedicure', price: '5,000', member: '4,000' },
      { name: 'Signature Gel Manicure', price: '4,500', member: '3,600' },
      { name: 'Nail Art (Per Nail)', price: '500', member: '400' },
      { name: 'Paraffin Wax Treatment', price: '2,500', member: '2,000' },
    ]
  },
  {
    category: 'Grooming & Waxing',
    items: [
      { name: 'Full Face Threading', price: '2,000', member: 'FREE' },
      { name: 'Full Leg Wax', price: '5,000', member: '4,000' },
      { name: 'Underarm Ritual', price: '1,500', member: '1,200' },
      { name: 'Full Body Grooming', price: '18,000', member: '14,400' },
    ]
  },
  {
    category: 'Bridal & Special Occasion',
    items: [
      { name: 'Total Bridal Dressing', price: '45,000', member: '40,000' },
      { name: 'Evening Event Look', price: '10,000', member: '8,000' },
      { name: 'Saree Draping Art', price: '2,500', member: '2,000' },
      { name: 'Creative Hair Styling', price: '4,000', member: '3,200' },
    ]
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-aurum-dark min-h-screen pt-12">
      <div className="max-w-7xl mx-auto px-4 py-24">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6 italic"
          >
            Total Beauty Rituals
          </motion.h1>
          <p className="text-aurum-gold font-bold tracking-[0.4em] uppercase text-xs">Excellence in Hair, Skin & Nails in Sri Lanka</p>
        </div>

        {/* Membership Section */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl font-serif text-white italic">The Aurum Membership</h2>
            <div className="h-px flex-grow bg-aurum-gold/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MEMBERSHIP_PACKAGES.map((pkg, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-aurum-blue/10 border border-aurum-gold/30 p-8 rounded-3xl relative overflow-hidden group"
              >
                <div className="absolute -top-4 -right-4 text-aurum-gold/10 text-8xl transform rotate-12 group-hover:text-aurum-gold/20 transition-all">
                  <i className={`fas ${pkg.icon}`}></i>
                </div>
                <h3 className="text-xl font-serif text-white mb-2">{pkg.name}</h3>
                <p className="text-aurum-gold text-xs uppercase tracking-widest font-bold mb-6">{pkg.details}</p>
                <div className="space-y-3">
                  {pkg.prices.map((p, i) => (
                    <div key={i} className="flex justify-between items-center text-gray-300 text-sm">
                      <span>{p.split(':')[0]}</span>
                      <span className="font-bold text-white">LKR {p.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Full Service Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24 mb-32">
          {SERVICE_GROUPS.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="flex items-center gap-6">
                <h2 className="text-2xl font-serif text-white italic">{group.category}</h2>
                <div className="h-px flex-grow bg-aurum-blue/20" />
              </div>
              <div className="space-y-6">
                {group.items.map((item, i) => (
                  <div key={i} className="group border-b border-white/5 pb-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-aurum-light group-hover:text-aurum-gold transition-colors font-medium">{item.name}</h3>
                      <div className="flex gap-4 items-baseline">
                        <span className="text-gray-500 text-xs line-through">LKR {item.price}</span>
                        <span className="text-aurum-gold font-bold text-sm">
                          {item.member === 'FREE' ? 'FREE*' : `LKR ${item.member}`}
                        </span>
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Standard Rate vs Member Privilege</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fine Print */}
        <div className="p-12 rounded-3xl bg-white/5 border border-white/10 text-center space-y-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-serif text-white italic">Your Sanctuary in Rajagiriya</h3>
          <p className="text-gray-400 text-sm font-light italic">
            *All chemical services include a detailed consultation. Prices may vary depending on hair density and the premium brands selected for your treatment. 
            Members receive priority booking and exclusive access to new product launches.
          </p>
          <div className="flex justify-center gap-4">
             <button className="bg-aurum-gold text-aurum-dark px-10 py-4 rounded-full font-bold tracking-widest text-[10px] uppercase shadow-xl hover:scale-105 transition-transform">
              Call Rajagiriya: 071-222-9182
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;