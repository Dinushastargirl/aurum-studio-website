
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import Image from '../components/Image';
import { BlogPost } from '../types';

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Scroll to top when post is selected
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPost]);

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  return (
    <div className="bg-aurum-dark min-h-screen pt-12">
      <AnimatePresence mode="wait">
        {!selectedPost ? (
          <motion.div
            key="blog-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-7xl mx-auto px-4 py-24"
          >
            <div className="text-center mb-24">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-serif text-white mb-6 italic"
              >
                Studio Insights
              </motion.h1>
              <p className="text-aurum-gold font-bold tracking-[0.4em] uppercase text-xs">Trends, Care & Beauty Rituals</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {BLOG_POSTS.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-8 bg-aurum-blue/5">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white text-aurum-dark text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-xl">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-gray-500 text-[10px] font-bold tracking-widest uppercase">
                      <span>{post.date}</span>
                      <div className="w-8 h-px bg-aurum-blue/30" />
                      <span>By Aurum Studio</span>
                    </div>
                    <h2 className="text-2xl font-serif text-white group-hover:text-aurum-gold transition-colors">{post.title}</h2>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="pt-4">
                      <button className="text-aurum-blue hover:text-aurum-gold font-bold tracking-[0.2em] uppercase text-xs transition-colors flex items-center gap-3">
                        Read the article
                        <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-32 p-16 rounded-3xl bg-aurum-blue/5 border border-aurum-blue/10 text-center">
              <h3 className="text-3xl font-serif text-white italic mb-6">Stay Inspired</h3>
              <p className="text-gray-400 font-light max-w-lg mx-auto mb-10">
                Subscribe to our newsletter for exclusive style guides and early access to appointment slots.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow bg-aurum-dark border border-aurum-blue/20 rounded-full px-8 py-4 text-white focus:outline-none focus:border-aurum-gold transition-colors"
                />
                <button className="bg-aurum-gold text-aurum-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl">
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="blog-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto px-4 py-24"
          >
            <button 
              onClick={handleBackToList}
              className="flex items-center gap-3 text-aurum-gold hover:text-white transition-colors uppercase tracking-widest text-xs font-bold mb-12 group"
            >
              <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-2"></i>
              Back to Insights
            </button>

            <div className="space-y-8">
              <div className="space-y-4">
                <span className="bg-aurum-blue/20 text-aurum-blue text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full">
                  {selectedPost.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center gap-6 text-gray-500 text-xs font-medium tracking-wider uppercase">
                  <span>{selectedPost.date}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-aurum-gold/40" />
                  <span>By Aurum Studio Team</span>
                </div>
              </div>

              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-aurum-blue/10">
                <Image 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="pt-8 prose prose-invert prose-lg max-w-none">
                <p className="text-aurum-gold text-xl italic font-serif leading-relaxed mb-8">
                  {selectedPost.excerpt}
                </p>
                <div className="text-gray-300 font-light leading-loose space-y-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>
                  <p>
                    {selectedPost.content}
                  </p>
                  <h3 className="text-2xl font-serif text-white italic pt-4">Professional Tips from Our Stylists</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="p-8 bg-aurum-blue/5 border-l-4 border-aurum-gold rounded-r-2xl italic text-aurum-light">
                    "At Aurum Studio, we believe that every transformation starts with understanding the unique narrative of our clients. Great style is not just seen; it is felt."
                  </div>
                  <p>
                    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
                  </p>
                </div>
              </div>

              <div className="pt-16 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-aurum-blue/20 flex items-center justify-center">
                    <i className="fas fa-user-circle text-2xl text-aurum-blue"></i>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">Written by Aurum Studio</p>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">Master Styling Experts</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  {['facebook-f', 'instagram', 'whatsapp'].map(social => (
                    <button key={social} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-aurum-gold hover:border-aurum-gold transition-all">
                      <i className={`fab fa-${social}`}></i>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPage;
