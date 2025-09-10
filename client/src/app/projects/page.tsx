'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getProjects } from '@/lib/api'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import Card from '@/components/ui/Card'
import { CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Header from '@/components/Header'
// Metadata is handled by layout.tsx for client components

interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  github_url: string | null;
  live_url: string | null;
  technologies: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load projects:', err);
        setError('Failed to load projects');
        setLoading(false);
      }
    }

    loadProjects();
  }, []);
  
  const categories = [...new Set(projects.map(project => project.category))]
  
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
            My Projects
          </motion.h1>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-cyan-300 to-cyan-400 mx-auto mb-6"
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
              className="px-4 py-2 bg-cyan-400/10 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/20"
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
          {loading ? (
            <div className="col-span-full flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
            </div>
          ) : error ? (
            <div className="col-span-full text-center py-20">
              <p className="text-red-400 mb-4">{error}</p>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          ) : projects.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 mb-4">No projects found</p>
            </div>
          ) : (
            projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              custom={index}
            >
              <Card className="h-full group">
                <CardHeader>
                  {project.image_url && (
                    <div className="mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={project.image_url} 
                        alt={project.title} 
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-cyan-400/10 text-cyan-300 rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.split(',').map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                    {project.technologies.split(',').length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                        +{project.technologies.split(',').length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" asChild>
                      <Link href={`/projects/${project.id}`}>
                        View Details
                      </Link>
                    </Button>
                    {project.github_url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.live_url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            ))
          )}
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
        
        {/* End of Projects Section */}
      </div>
    </motion.main>
    </>
  )
}