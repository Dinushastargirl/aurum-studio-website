
import React from 'react';
import { motion } from 'framer-motion';
import { GOOGLE_REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-aurum-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <i className="fab fa-google text-aurum-blue text-2xl"></i>
            <span className="text-aurum-gold font-semibold tracking-[0.3em] uppercase text-xs">Customer Reviews</span>
          </div>
          <h3 className="text-4xl font-serif text-white italic">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GOOGLE_REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-aurum-dark p-8 rounded-3xl border border-aurum-blue/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-aurum-gold text-xs"></i>
                  ))}
                </div>
                <p className="text-gray-300 font-light italic text-sm leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-aurum-blue/20 flex items-center justify-center text-aurum-blue font-bold">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">{review.author}</h4>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest">{review.time}</p>
                </div>
                <div className="ml-auto">
                  <i className="fas fa-check-circle text-blue-400 text-xs" title="Verified Review"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-aurum-gold text-lg"></i>
              ))}
            </div>
            <p className="text-white text-sm font-medium">4.9 / 5.0 rating on Google Business</p>
            <a 
              href="#" 
              target="_blank" 
              className="text-aurum-blue hover:text-aurum-gold transition-colors text-xs font-bold tracking-widest uppercase mt-2 border-b border-aurum-blue/30"
            >
              See all 142 reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
