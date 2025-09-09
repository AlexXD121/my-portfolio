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
  { value: '3', label: 'Years of<br />Experience' },
  { value: '7+', label: 'Completed<br />Projects' },
  { value: 'LD', label: 'College of<br />Engineering' },
  { value: 'Full', label: 'Stack<br />Developer' },
];

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center py-24 px-4 mt-16">
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
              <span className="inline-block px-4 py-1 bg-color-bg-1 text-teal-300 rounded-full text-sm font-medium mb-4">
                Full Stack Developer
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-200"
            >
              Hi, I&apos;m <span className="text-teal-300">Dhaval Rathva</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg mb-8 max-w-2xl"
            >
              Full stack web developer currently studying at LD College of Engineering in Ahmedabad. Passionate about creating clean, functional websites and applications with 3 years of development knowledge.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-5 flex-wrap mb-8"
            >
              <Link
                href="/projects"
                className="px-6 py-3 bg-teal-300 text-slate-900 rounded-lg font-medium hover:bg-teal-400 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 border border-gray-400/30 text-gray-200 rounded-lg font-medium hover:bg-gray-400/10 transition-all duration-300 hover:-translate-y-1"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
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
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="w-10 h-10 rounded-full bg-color-bg-1 flex items-center justify-center text-gray-300 hover:text-teal-300 hover:bg-color-bg-1/80 transition-all duration-300"
                >
                  <span>{s.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-2/5 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-teal-300/20 blur-2xl opacity-70" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-teal-300/30">
                <Image
                  src="/MEEEEEEE.png"
                  alt="Dhaval Rathva"
                  width={320}
                  height={320}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-color-bg-1 rounded-full flex items-center justify-center text-2xl">
                <span>👨‍💻</span>
              </div>
            </div>
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
              className="bg-color-bg-1 p-6 rounded-xl border border-gray-400/10 backdrop-blur-sm hover:border-teal-300/20 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-3xl font-bold text-teal-300 mb-2">{s.value}</h3>
              <p
                className="text-gray-300 text-sm"
                dangerouslySetInnerHTML={{ __html: s.label }}
              />
            </motion.div>
          ))}
        </motion.div>


      </div>
    </div>
  );
}
