"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import CustomCursor from './components/CustomCursor';

export type Page = 'home' | 'about' | 'team' | 'services' | 'blog';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeSection, setActiveSection] = useState('home');

  // Scroll to top when changing "pages"
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative min-h-screen selection:bg-aurum-blue selection:text-white">
      <CustomCursor />
      <Navbar 
        activeSection={activeSection} 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
      />
      
      <main className="pt-20">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={navigateTo} 
            setActiveSection={setActiveSection} 
            activeSection={activeSection}
          />
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'team' && <TeamPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'blog' && <BlogPage />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;