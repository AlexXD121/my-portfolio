'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="bg-black border-t border-emerald-800/30 py-6 sm:py-8"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Logo and Social Links */}
          <motion.div 
            className="flex flex-col items-start"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h3 
              className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2"
              variants={staggerItem}
            >
              Dhaval Rathva
            </motion.h3>
            <motion.div 
              className="flex space-x-4"
              variants={staggerItem}
            >
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  <span className="text-xl">{link.icon === 'GitHub' ? '🐙' : 
                                           link.icon === 'LinkedIn' ? '🔗' : 
                                           link.icon === 'Twitter' ? '🐦' : 
                                           link.icon === 'Email' ? '✉️' : '🔗'}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Navigation Links */}
          <motion.div
            className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-1 sm:gap-y-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {NAV_LINKS.map((link, index) => (
              <motion.div 
                key={link.path}
                variants={staggerItem}
                custom={index}
              >
                <Link 
                  href={link.path}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Contact Button */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <Link 
              href="/contact"
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/20 text-emerald-400 rounded-lg hover:bg-emerald-500/30 transition-all duration-300 text-xs sm:text-sm inline-flex items-center"
            >
              Contact Me <span className="ml-1">→</span>
            </Link>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-3 sm:pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} Dhaval Rathva. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-1 md:mt-0">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;