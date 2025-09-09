'use client'

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 pt-20"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-md w-full text-center">
        <motion.div
          className="text-6xl mb-6"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💥
        </motion.div>
        
        <h1 className="text-3xl font-bold text-white mb-4">
          Something went wrong!
        </h1>
        
        <p className="text-gray-400 mb-8 leading-relaxed">
          Don&apos;t worry, it&apos;s not your fault. We&apos;re working on fixing this issue.
        </p>
        
        <div className="space-y-4">
          <motion.button
            onClick={reset}
            className="w-full px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-medium hover:shadow-lg glow-green transition-all duration-300"
            animate="visible"
            initial="hidden"
          >
            Try Again
          </motion.button>
          
          <motion.a
            href="/"
            className="block w-full px-8 py-3 border-2 border-emerald-500 text-emerald-400 rounded-lg font-medium hover:bg-emerald-500 hover:text-black transition-all duration-300 text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Go Home
          </motion.a>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <motion.details 
            className="mt-8 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-400 mb-2">
              🔍 Error Details (Development Mode)
            </summary>
            <div className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800">
              <p className="text-xs text-red-400 mb-2">
                <strong>Error:</strong> {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-gray-500 mb-2">
                  <strong>Digest:</strong> {error.digest}
                </p>
              )}
              <pre className="text-xs text-gray-400 overflow-auto max-h-40">
                {error.stack}
              </pre>
            </div>
          </motion.details>
        )}
      </div>
    </motion.div>
  );
}