'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

// Template data simplified for student portfolios
const portfolioTemplates = [
  {
    "name": "Minimalist Design",
    "description": "Clean and simple approach perfect for students",
    "features": ["Clean typography", "Fast loading", "Mobile-friendly"],
    "tech_stack": ["HTML", "CSS", "Vanilla JS"],
    "color": "#4A90E2"
  },
  {
    "name": "Project Showcase",
    "description": "Highlight your student projects and assignments",
    "features": ["Project gallery", "Code links", "Tech stacks"],
    "tech_stack": ["Next.js", "GitHub API"],
    "color": "#50C878"
  },
  {
    "name": "Student Portfolio",
    "description": "Perfect for college applications and internships",
    "features": ["Resume integration", "Course showcase", "Skills highlight"],
    "tech_stack": ["React", "Tailwind CSS"],
    "color": "#7B68EE"
  }
];

const TemplatesSection = () => {
  return (
    <section className="py-10 sm:py-12 px-4">
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
            Student Portfolio Ideas
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-sm"
            variants={fadeInUp}
          >
            Simple portfolio styles perfect for students
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {portfolioTemplates.map((template, index) => {
            const colorStyle = { borderColor: template.color + '40', backgroundColor: template.color + '10' };
            
            return (
              <motion.div 
                key={template.name}
                className="rounded-lg overflow-hidden border backdrop-blur-sm p-6 flex flex-col h-full"
                style={colorStyle}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: template.color }}>
                  {template.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{template.description}</p>
                
                <div className="mb-4 flex-grow">
                  <h4 className="text-sm font-medium mb-2 text-gray-200">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    {template.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2 text-gray-200">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {template.tech_stack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs rounded-full"
                        style={{ backgroundColor: template.color + '30', color: template.color }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TemplatesSection;