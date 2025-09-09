'use client'

import { motion } from 'framer-motion'
import Header from "@/components/Header";
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import Card from '@/components/ui/Card'
import { CardContent, CardHeader } from '@/components/ui/Card'
import Link from 'next/link';

// Sample blog data
const BLOG_POSTS = [
  {
    id: 'web-dev-trends-2024',
    title: 'Web Development Trends in 2024',
    excerpt: 'Exploring the latest trends in web development including AI integration, serverless architecture, and more.',
    date: 'May 15, 2024',
    category: 'Web Development',
    readTime: '5 min read',
    image: '🌐'
  },
  {
    id: 'data-science-journey',
    title: 'My Journey into Data Science',
    excerpt: 'Personal insights and lessons learned while transitioning into the field of data science from web development.',
    date: 'April 28, 2024',
    category: 'Data Science',
    readTime: '8 min read',
    image: '📊'
  },
  {
    id: 'react-vs-vue',
    title: 'React vs Vue: A Practical Comparison',
    excerpt: 'Comparing React and Vue.js frameworks from a developer perspective with code examples and performance insights.',
    date: 'April 10, 2024',
    category: 'Frontend',
    readTime: '6 min read',
    image: '⚛️'
  },
  {
    id: 'tailwind-tips',
    title: 'Advanced Tailwind CSS Tips and Tricks',
    excerpt: 'Discover advanced techniques to make the most out of Tailwind CSS in your projects.',
    date: 'March 22, 2024',
    category: 'CSS',
    readTime: '4 min read',
    image: '🎨'
  },
  {
    id: 'nextjs-seo',
    title: 'Optimizing SEO in Next.js Applications',
    excerpt: 'Learn how to improve your Next.js application\'s search engine visibility with these practical SEO strategies.',
    date: 'March 5, 2024',
    category: 'SEO',
    readTime: '7 min read',
    image: '🔍'
  },
  {
    id: 'portfolio-building',
    title: 'Building an Effective Developer Portfolio',
    excerpt: 'Tips and strategies for creating a developer portfolio that stands out to potential employers and clients.',
    date: 'February 18, 2024',
    category: 'Career',
    readTime: '5 min read',
    image: '💼'
  }
];

export default function BlogsPage() {
  const categories = [...new Set(BLOG_POSTS.map(post => post.category))];
  
  return (
    <>
      <Header />
      <motion.main 
        className="min-h-screen pt-32 pb-28 bg-black"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              variants={staggerItem}
            >
              My Blog
            </motion.h1>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-6"
              variants={staggerItem}
            />
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              variants={staggerItem}
            >
              Thoughts, ideas, and insights about web development, data science, and technology.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category, index) => (
              <motion.span
                key={category}
                className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20"
                variants={staggerItem}
                custom={index}
              >
                {category}
              </motion.span>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.id}
                variants={staggerItem}
                custom={index}
              >
                <Card className="h-full group hover:border-cyan-500/50 transition-colors duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                      {post.image}
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                      <Link 
                        href={`/blogs/${post.id}`} 
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        Read more →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.main>
    </>
  );
}