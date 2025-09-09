'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PROJECTS } from '@/lib/constants'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import Card from '@/components/ui/Card'
import { CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Header from '@/components/Header'
// Metadata is handled by layout.tsx for client components

export default function ProjectsPage() {
  const categories = [...new Set(PROJECTS.map(project => project.category))]
  
  return (
    <>
      <Header />
      <motion.main 
        className="min-h-screen pt-32 pb-28"
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
            My Projects
          </motion.h1>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mb-6"
            variants={staggerItem}
          />
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            variants={staggerItem}
          >
            Here&apos;s a collection of projects I&apos;ve worked on, showcasing my skills in web development, 
            full-stack applications, and modern technologies.
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
              className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20"
              variants={staggerItem}
              custom={index}
            >
              {category}
            </motion.span>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              custom={index}
            >
              <Card className="h-full group">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs font-medium">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs font-medium">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" asChild>
                      <Link href={`/projects/${project.id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-400 mb-6">
            I&apos;m always open to discussing new opportunities and interesting projects.
          </p>
          <Button asChild>
            <Link href="/contact">
              Get In Touch
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.main>
    </>
  )
}