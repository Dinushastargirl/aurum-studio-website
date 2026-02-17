
import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import { Page } from '../App';
import Image from './Image';

interface BlogPreviewProps {
  onNavigate: (page: Page) => void;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-aurum-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-aurum-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">Insights</h2>
            <h3 className="text-4xl font-serif text-white">Latest from Our Blog</h3>
          </div>
          <button 
            onClick={() => onNavigate('blog')}
            className="text-aurum-light hover:text-aurum-gold transition-colors font-bold tracking-widest text-xs uppercase border-b border-white/20 pb-1"
          >
            View All Posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onNavigate('blog')}
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl mb-6 bg-aurum-blue/5">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-aurum-blue text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">{post.date}</span>
                <h4 className="text-xl font-serif text-white group-hover:text-aurum-gold transition-colors">{post.title}</h4>
                <p className="text-gray-400 text-sm font-light line-clamp-2">{post.excerpt}</p>
                <div className="pt-2">
                  <span className="text-aurum-blue text-[10px] font-bold tracking-widest uppercase border-b border-aurum-blue/30 group-hover:border-aurum-gold transition-all">Read More</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
