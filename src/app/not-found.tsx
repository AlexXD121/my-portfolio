'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp, buttonVariants } from '@/lib/animations';

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 pt-20"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-lg w-full text-center">
        <motion.div
          className="text-8xl mb-8"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🚀
        </motion.div>
        
        <motion.h1 
          className="text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-2xl font-semibold text-emerald-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Page Not Found
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Looks like this page took a trip to space! 🌌 
          <br />
          Don&apos;t worry, let&apos;s get you back on track.
        </motion.p>
        
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-medium hover:shadow-lg glow-green transition-all duration-300"
            >
              🏠 Go Home
            </Link>
          </motion.div>
          
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link
              href="/projects"
              className="inline-block px-8 py-3 border-2 border-emerald-500 text-emerald-400 rounded-lg font-medium hover:bg-emerald-500 hover:text-black transition-all duration-300 ml-4"
            >
              🚀 View Projects
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <p>Lost? Try these popular pages:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/about" className="hover:text-emerald-400 transition-colors">
              About
            </Link>
            <span>•</span>
            <Link href="/projects" className="hover:text-emerald-400 transition-colors">
              Projects
            </Link>
            <span>•</span>
            <Link href="/blogs" className="hover:text-emerald-400 transition-colors">
              Blogs
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}