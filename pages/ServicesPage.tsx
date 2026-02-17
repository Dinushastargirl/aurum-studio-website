"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MEMBERSHIP_PACKAGES = [
  { name: 'Ladies Membership', details: 'Blow Dry + Trim', prices: ['3M: 10,000', '6M: 20,000', '12M: 30,000'], icon: 'fa-venus' },
  { name: 'Gents Membership', details: 'Hair Cut + Beard', prices: ['3M: 10,000', '6M: 20,000', '12M: 30,000'], icon: 'fa-mars' },
  { name: 'Root Colour Add-on', details: 'Membership Extra', prices: ['3M: +10,000', '6M: +20,000', '12M: +30,000'], icon: 'fa-paint-brush' },
];

const SERVICE_GROUPS = [
  {
    category: 'Hair Styling & Cuts',
    items: [
      { name: 'Ladies Hair Cut', price: '4,500', member: 'FREE' },
      { name: 'Ladies Trim', price: '2,500', member: 'FREE' },
      { name: 'Gents Hair Cut', price: '2,000', member: 'FREE' },
      { name: 'Gents Beard', price: '1,000', member: 'FREE' },
      { name: 'Blow Dry (Long)', price: '4,000', member: 'FREE' },
    ]
  },
  {
    category: 'Technical Colour',
    items: [
      { name: 'Fashion Colour (Long)', price: '11,500', member: '9,200' },
      { name: 'Balayage / Ombre', price: '30,000', member: '24,000' },
      { name: 'Full Grey Cover 1"+', price: '5,500', member: '4,400' },
      { name: 'Ladies Grey Hair 1"', price: '4,000', member: '3,200' },
    ]
  },
  {
    category: 'Keratin & Treatments',
    items: [
      { name: 'Keratin / Botox (Long)', price: '25,000', member: '20,000' },
      { name: 'Spa Conditioning', price: '3,500', member: '2,800' },
      { name: 'Mask Conditioning', price: '3,500', member: '2,800' },
      { name: 'Oil Only (w/ Steam)', price: '2,000', member: '1,500' },
    ]
  },
  {
    category: 'Facials & Skin',
    items: [
      { name: 'Basic Facial', price: '7,500', member: '6,000' },
      { name: 'Acne / Lightening', price: '10,000', member: '8,000' },
      { name: 'Full Face Threading', price: '2,000', member: 'FREE' },
      { name: 'Full Leg Wax', price: '5,000', member: '4,000' },
    ]
  },
  {
    category: 'Mani & Pedi',
    items: [
      { name: 'Ladies Gel Pedicure', price: '5,000', member: '4,000' },
      { name: 'Ladies Gel Manicure', price: '4,500', member: '3,600' },
      { name: 'Gents Pedicure', price: '3,500', member: '2,800' },
      { name: 'Gents Manicure', price: '2,500', member: '2,000' },
    ]
  },
  {
    category: 'Special Dressing',
    items: [
      { name: 'Full Dressing', price: '10,000', member: '8,000' },
      { name: 'Hair Style', price: '4,000', member: '3,200' },
      { name: 'Saree Drape', price: '2,000', member: '1,600' },
    ]
  }
];

const PACKAGES = [
  { name: 'Ladies Package', items: 'Cut + Threading + Basic Facial + Mani + Pedi', price: '16,000' },
  { name: 'Gents Package', items: 'Cut + Beard + Basic Facial + Mani + Pedi', price: '14,000' },
  { name: 'Group for 4 People', items: 'Exclusive Studio Access', price: '50,000' },
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
            The Service Menu
          </motion.h1>
          <p className="text-aurum-gold font-bold tracking-[0.4em] uppercase text-xs">Beyond the Chair: Quality rituals</p>
        </div>

        {/* Membership Section */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl font-serif text-white italic">Become a Member</h2>
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
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Standard vs Member Rate</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Packages Section */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl font-serif text-white italic">Value Packages</h2>
            <div className="h-px flex-grow bg-aurum-gold/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, idx) => (
              <motion.div
                key={idx}
                className="bg-aurum-dark border border-aurum-blue/30 p-10 rounded-3xl text-center space-y-6 hover:border-aurum-gold transition-colors"
              >
                <h3 className="text-2xl font-serif text-white italic">{pkg.name}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{pkg.items}</p>
                <div className="pt-4">
                  <span className="text-aurum-gold text-2xl font-serif italic">LKR {pkg.price}</span>
                </div>
                <button className="w-full bg-aurum-blue text-white py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">Book Package</button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Fine Print */}
        <div className="p-12 rounded-3xl bg-white/5 border border-white/10 text-center space-y-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-serif text-white italic">Important Note</h3>
          <p className="text-gray-400 text-sm font-light italic">
            *Prices may change according to hair density and brand of products used. <br />
            Members enjoy special "Free" status for specific recurring services as part of their selected plan.
          </p>
          <div className="flex justify-center gap-4">
             <button className="bg-aurum-gold text-aurum-dark px-10 py-4 rounded-full font-bold tracking-widest text-[10px] uppercase shadow-xl hover:scale-105 transition-transform">
              Contact 071-222-9182
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;