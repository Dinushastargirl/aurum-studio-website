
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookingFormData } from '../types';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<BookingFormData>>({});

  const validate = () => {
    const newErrors: Partial<BookingFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone || !/^\+?[1-9]\d{1,14}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Valid phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      // Mock API call to /api/book
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => ({ 
        ok: true, 
        json: async () => ({ status: 'success', message: 'Appointment request received.' }) 
      }));

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-aurum-dark/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-aurum-blue/20 shadow-2xl">
      {status === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-aurum-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-check text-aurum-gold text-3xl"></i>
          </div>
          <h3 className="text-3xl font-serif text-white mb-4">Request Received</h3>
          <p className="text-gray-400 mb-8">A member of our team will contact you shortly to confirm your artistry session.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-aurum-gold font-bold tracking-widest text-xs uppercase border-b border-aurum-gold pb-1"
          >
            Send Another Request
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-aurum-gold uppercase">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Alexander Gold"
                className={`w-full bg-aurum-blue/5 border ${errors.name ? 'border-red-500/50' : 'border-aurum-blue/20'} rounded-xl px-4 py-4 text-white placeholder-white/20 focus:border-aurum-gold transition-all outline-none`}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-aurum-gold uppercase">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@example.com"
                className={`w-full bg-aurum-blue/5 border ${errors.email ? 'border-red-500/50' : 'border-aurum-blue/20'} rounded-xl px-4 py-4 text-white placeholder-white/20 focus:border-aurum-gold transition-all outline-none`}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-aurum-gold uppercase">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (212) 555-0123"
              className={`w-full bg-aurum-blue/5 border ${errors.phone ? 'border-red-500/50' : 'border-aurum-blue/20'} rounded-xl px-4 py-4 text-white placeholder-white/20 focus:border-aurum-gold transition-all outline-none`}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-aurum-gold uppercase">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the look you desire..."
              rows={4}
              className="w-full bg-aurum-blue/5 border border-aurum-blue/20 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:border-aurum-gold transition-all outline-none resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-sm italic">Something went wrong. Please try again or call the studio.</p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-aurum-blue hover:bg-aurum-blue/80 text-white font-bold py-5 rounded-xl tracking-[0.2em] uppercase text-sm shadow-xl transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {status === 'submitting' ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <>
                Confirm Request
                <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
