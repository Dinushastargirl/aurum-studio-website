"use client";

import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import ServicesPreview from '../components/ServicesPreview';
import TeamPreview from '../components/TeamPreview';
import Gallery from '../components/Gallery';
import BlogPreview from '../components/BlogPreview';
import Reviews from '../components/Reviews';
import BookCTA from '../components/BookCTA';
import ContactPreview from '../components/ContactPreview';
import GoogleMap from '../components/GoogleMap';
import { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  setActiveSection: (section: string) => void;
  activeSection: string;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, setActiveSection }) => {
  useEffect(() => {
    const observerOptions = { threshold: 0.3 };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['hero', 'about-preview', 'services-preview', 'team-preview', 'gallery', 'reviews', 'blog-preview', 'contact-preview'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <div className="space-y-0">
      <div id="hero"><Hero /></div>
      <div id="about-preview"><AboutPreview onNavigate={onNavigate} /></div>
      <div id="services-preview"><ServicesPreview onNavigate={onNavigate} /></div>
      <div id="team-preview"><TeamPreview onNavigate={onNavigate} /></div>
      <div id="gallery"><Gallery isPreview={true} onNavigate={onNavigate} /></div>
      <div id="reviews"><Reviews /></div>
      <div id="blog-preview"><BlogPreview onNavigate={onNavigate} /></div>
      <BookCTA />
      <div id="contact-preview">
        <ContactPreview />
        <GoogleMap />
      </div>
    </div>
  );
};

export default HomePage;