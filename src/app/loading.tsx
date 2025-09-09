'use client'

import { motion } from 'framer-motion';
import { spinnerVariants, pulseVariants } from '@/lib/animations';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="relative mb-8"
          variants={pulseVariants}
          animate="animate"
        >
          <motion.div
            className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full mx-auto"
            variants={spinnerVariants}
            animate="animate"
          />
          <motion.div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-green-400 rounded-full mx-auto"
            variants={spinnerVariants}
            animate="animate"
            style={{ animationDelay: '0.5s' }}
          />
        </motion.div>
        
        <motion.h2
          className="text-xl font-semibold text-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Loading...
        </motion.h2>
        
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Please wait while we prepare something awesome
        </motion.p>
        
        <motion.div
          className="flex justify-center space-x-1 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-emerald-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}