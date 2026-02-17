
import React from 'react';
import { motion } from 'framer-motion';

const GoogleMap: React.FC = () => {
  return (
    <section className="w-full h-[450px] bg-aurum-dark overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-full grayscale-[100%] contrast-[120%] invert-[90%]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.513289058444!2d79.89182315!3d6.90518775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25997232323e7%3A0x600b3d8f8a85f8!2sRajagiriya!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Aurum Studio Salon Location Rajagiriya"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default GoogleMap;
