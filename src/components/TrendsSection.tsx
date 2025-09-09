'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

// Design trends data simplified for student portfolios
const designTrends = [
  {
    "name": "Clean Minimalism",
    "description": "Simple layouts with focus on content and readability"
  },
  {
    "name": "Dark Mode",
    "description": "Eye-friendly dark themes popular among students and developers"
  },
  {
    "name": "Mobile-First",
    "description": "Designs that work perfectly on smartphones and tablets"
  },
  {
    "name": "Simple Animations",
    "description": "Subtle motion effects that enhance user experience"
  }
];

const TrendsSection = () => {
  return (
    <section className="py-10 sm:py-12 px-4 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-8"
        >
          <motion.h2 
            className="text-2xl font-bold mb-2 text-white"
            variants={fadeInUp}
          >
            Student-Friendly Design Tips
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-sm"
            variants={fadeInUp}
          >
            Simple design approaches for student portfolios
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {designTrends.map((trend, index) => (
            <motion.div 
              key={trend.name}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6"
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-medium text-white">{trend.name}</h3>
              </div>
              <p className="text-gray-400">{trend.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrendsSection;