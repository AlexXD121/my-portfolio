'use client';

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { SKILLS, SOCIAL_LINKS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pb-8">
      <Header />
      <div className="container mx-auto py-20 px-4">
        {/* Hero Section */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* Profile Image */}
          <motion.div 
            className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-teal-500"
            variants={fadeInUp}
          >
            <Image 
              src="/MEEEEEEE.png" 
              alt="Dhaval Rathva" 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>
          
          {/* Intro Text */}
          <motion.div className="md:flex-1 text-center md:text-left" variants={fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-teal-400">Me</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Tech Student & Aspiring Developer
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Hello! I'm Dhaval Rathva, a Full Stack Web Developer currently pursuing a BE degree in IT from LD College of Engineering. My journey in tech started with curiosity about how websites work, and now I'm dedicated to creating meaningful digital experiences. I am currently pursuing my data science internship.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4">
              {SOCIAL_LINKS.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:bg-gray-700 transition-all duration-300"
                >
                  <span className="text-xl">
                    {link.icon === 'GitHub' ? '🐙' : 
                     link.icon === 'LinkedIn' ? '🔗' : 
                     link.icon === 'Twitter' ? '🐦' : 
                     link.icon === 'Email' ? '✉️' : '🔗'}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Skills Section */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4"
            variants={fadeInUp}
          >
            My Skills
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Skills */}
            <motion.div 
              className="bg-gray-900 rounded-lg p-6 shadow-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.frontend.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Backend Skills */}
            <motion.div 
              className="bg-gray-900 rounded-lg p-6 shadow-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.backend.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Data Science */}
            <motion.div 
              className="bg-gray-900 rounded-lg p-6 shadow-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-4">Data Science</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.dataScience.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Tools */}
            <motion.div 
              className="bg-gray-900 rounded-lg p-6 shadow-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.tools.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Education & Experience */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4"
            variants={fadeInUp}
          >
            Education & Experience
          </motion.h2>
          
          <div className="space-y-12">
            {/* Timeline Item */}
            <motion.div 
              className="relative pl-8 border-l-2 border-teal-500"
              variants={fadeInUp}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-teal-500"></div>
              <div className="mb-1 text-teal-400 font-semibold">Present</div>
              <h3 className="text-xl font-bold text-white mb-2">BE in Information Technology</h3>
              <p className="text-gray-400">Currently pursuing a Bachelor of Engineering degree in IT from LD College of Engineering.</p>
            </motion.div>
            
            {/* Timeline Item */}
            <motion.div 
              className="relative pl-8 border-l-2 border-teal-500"
              variants={fadeInUp}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-teal-500"></div>
              <div className="mb-1 text-teal-400 font-semibold">Current</div>
              <h3 className="text-xl font-bold text-white mb-2">Data Science Internship</h3>
              <p className="text-gray-400">Currently pursuing a data science internship, applying Python, NumPy, Pandas, and visualization libraries to real-world data problems.</p>
            </motion.div>
            
            {/* Timeline Item */}
            <motion.div 
              className="relative pl-8 border-l-2 border-teal-500"
              variants={fadeInUp}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-teal-500"></div>
              <div className="mb-1 text-teal-400 font-semibold">Recent</div>
              <h3 className="text-xl font-bold text-white mb-2">Freelance Web Development</h3>
              <p className="text-gray-400">Successfully completed freelance projects independently, delivering high-quality web solutions to clients.</p>
            </motion.div>
            

          </div>
        </motion.section>
      </div>
    </main>
  );
}