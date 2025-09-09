'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const SOCIALS = [
  { label: 'GitHub', icon: '🐙', href: 'https://github.com/yourname' },
  { label: 'LinkedIn', icon: '🔗', href: 'https://linkedin.com/in/yourname' },
  { label: 'Twitter', icon: '🐦', href: 'https://twitter.com/yourname' },
  { label: 'Email', icon: '✉️', href: 'mailto:hello@example.com' },
];

const STATS = [
  { value: '3+', label: 'Years of<br />Experience' },
  { value: '7+', label: 'Completed<br />Projects' },
  { value: 'LD', label: 'College of<br />Engineering' },
  { value: 'Full', label: 'Stack<br />Developer' },
];

const TECH_SKILLS = [
  { name: 'TypeScript', category: 'frontend' },
  { name: 'HTML', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'HT', category: 'frontend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'Django', category: 'backend' },
  { name: 'Data Science', category: 'datascience' },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4 mt-16">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Row */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content - Text */}
          <div className="w-full md:w-3/5 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="inline-block px-4 py-1 bg-color-bg-1 text-cyan-300 rounded-full text-sm font-medium">
                  Full Stack Developer
                </span>
                <span className="inline-block px-4 py-1 bg-color-bg-1 text-white rounded-full text-sm font-medium">
                  Data Science Enthusiast
                </span>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
            >
              Hi, I&apos;m <span className="text-cyan-300">Dhaval Rathva</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white text-lg mb-8 max-w-2xl"
            >
              Full stack web developer with 3 years of experience in web development, currently studying at LD College of Engineering in Ahmedabad. Passionate about creating clean, functional websites and applications. Also a very enthusiastic data scientist currently studying data science and eager to break into the field.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-5 flex-wrap mb-8"
            >
              <Link
                href="/projects"
                className="px-6 py-3 bg-cyan-300 text-slate-900 rounded-lg font-medium hover:bg-cyan-400 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 border border-cyan-400/30 text-white rounded-lg font-medium hover:bg-cyan-400/10 transition-all duration-300 hover:-translate-y-1"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Tech Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-white text-sm font-medium mb-3">Technical Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {TECH_SKILLS.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${skill.category === 'frontend' ? 'bg-cyan-900/30 text-cyan-300 border border-cyan-500/30' : 
                      skill.category === 'backend' ? 'bg-cyan-900/30 text-white border border-cyan-500/30' : 
                      'bg-cyan-900/30 text-white border border-cyan-500/30'}`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4"
            >
              {SOCIALS.map((s, index) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="w-10 h-10 rounded-full bg-color-bg-1 flex items-center justify-center text-white hover:text-cyan-300 hover:bg-color-bg-1/80 transition-all duration-300"
                >
                  <span>{s.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image with Advanced Effects */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20, 
              delay: 0.3 
            }}
            className="w-full md:w-2/5 flex justify-center"
            style={{ perspective: "1000px" }}
          >
            {/* Glassmorphism Frame */}
            <motion.div 
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80"
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: -10,
                transition: { duration: 0.4 }
              }}
            >
              {/* Circular Glow Effect */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-cyan-300/20 blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1.1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.6, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
                style={{
                  filter: "blur(24px)"
                }}
              />
              
              {/* Circular Container */}
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden"
                style={{
                  background: "rgba(8, 8, 12, 0.4)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px rgba(103, 232, 249, 0.2)",
                  border: "1px solid rgba(103, 232, 249, 0.3)"
                }}
                whileHover={{ 
                  boxShadow: "0 8px 32px rgba(103, 232, 249, 0.4)",
                  borderColor: "rgba(103, 232, 249, 0.6)"
                }}
              >
                {/* Image with Pixelation Effect */}
                <motion.div
                  className="w-full h-full"
                  initial={{ filter: "blur(20px)" }}
                  animate={{ filter: "blur(0px)" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/MEEEEEEE.png"
                    alt="Dhaval Rathva"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                    style={{ 
                      transform: "translateZ(0)",
                      willChange: "transform"
                    }}
                  />
                  
                  {/* Dynamic Border Glow on Hover */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-transparent"
                    whileHover={{ 
                      borderColor: "rgba(103, 232, 249, 0.8)",
                      boxShadow: "inset 0 0 20px rgba(103, 232, 249, 0.6)"
                    }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Removed the floating badge as requested */}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="bg-color-bg-1 p-6 rounded-xl border border-cyan-400/10 backdrop-blur-sm hover:border-cyan-300/20 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-3xl font-bold text-cyan-300 mb-2">{s.value}</h3>
              <p
                className="text-white text-sm"
                dangerouslySetInnerHTML={{ __html: s.label }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
