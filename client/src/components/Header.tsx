'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import { fadeIn } from '@/lib/animations';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(pathname);
    setMobileMenuOpen(false);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <motion.header 
      className={`w-full py-4 sm:py-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-transparent backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        <Link href="/" className="text-2xl font-bold text-cyan-300 hover:text-cyan-400 transition-colors">
          Dhaval<span className="text-gray-200">.dev</span>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path}
                  className={`relative text-gray-200 hover:text-cyan-300 transition-colors duration-300 px-2 py-2 text-sm font-medium ${activeLink === link.path ? 'text-cyan-300' : ''}`}
                  onClick={() => setActiveLink(link.path)}
                >
                  {link.label}
                  {activeLink === link.path && (
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-300"
                      layoutId="navbar-indicator"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-gray-200 hover:text-cyan-300 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {!mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 w-full bg-transparent backdrop-blur-sm shadow-md py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className={`block py-2 text-gray-200 hover:text-cyan-300 transition-colors ${activeLink === link.path ? 'text-cyan-300 font-medium' : ''}`}
                    onClick={() => {
                      setActiveLink(link.path);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;