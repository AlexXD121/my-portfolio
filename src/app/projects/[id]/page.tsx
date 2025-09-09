'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';
import { fadeIn, fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import Button from '@/components/ui/Button';

const ProjectDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectId = params.id;
    const foundProject = PROJECTS.find(p => p.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
    } else {
      // Project not found, redirect to projects page
      router.push('/projects');
    }
  }, [params.id, router]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-emerald-500">Loading project details...</div>
      </div>
    );
  }

  return (
    <motion.div 
      className="container mx-auto py-12 px-4 md:px-6"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Back button */}
      <motion.div variants={fadeIn} className="mb-8">
        <Link href="/projects" className="inline-flex items-center text-emerald-400 hover:text-emerald-500 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.div variants={fadeInUp} className="mb-12 text-center">
        <div className="text-8xl mb-6 mx-auto">{project.image}</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
              ⭐ Featured Project
            </span>
          )}
        </div>
      </motion.div>

      {/* Project Content */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Main Content */}
        <motion.div variants={fadeInUp} className="md:col-span-2 space-y-6">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Project Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
              {/* Extended description would go here */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Feature 1 - Lorem ipsum dolor sit amet</li>
              <li>Feature 2 - Consectetur adipiscing elit</li>
              <li>Feature 3 - Nullam auctor, nisl eget ultricies</li>
              <li>Feature 4 - Eget ultricies nisl nisl eget nisl</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Development Process</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
            </p>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-white">Project Links</h2>
            <div className="space-y-3">
              <Button variant="primary" size="md" className="w-full" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
              {project.demoUrl && (
                <Button variant="outline" size="md" className="w-full" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-white">Project Timeline</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 mr-3"></div>
                <div>
                  <h3 className="font-medium text-white">Project Start</h3>
                  <p className="text-sm text-gray-400">January 2023</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 mr-3"></div>
                <div>
                  <h3 className="font-medium text-white">MVP Release</h3>
                  <p className="text-sm text-gray-400">March 2023</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 mr-3"></div>
                <div>
                  <h3 className="font-medium text-white">Final Release</h3>
                  <p className="text-sm text-gray-400">June 2023</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        variants={fadeInUp}
        className="text-center bg-gradient-to-r from-emerald-900/50 to-green-900/50 rounded-xl p-8 border border-emerald-800/50"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Interested in similar projects?</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Check out my other projects or get in touch to discuss how we can work together on your next idea.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/projects">
              View More Projects
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">
              Contact Me
            </Link>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailPage;