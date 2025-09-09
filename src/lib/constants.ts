// Project data
export const PROJECTS = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'My personal portfolio website built with Next.js and Tailwind CSS.',
    image: '🌐',
    category: 'Web Development',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/username/portfolio',
    featured: true
  },
  {
    id: 'task-manager',
    title: 'Task Manager App',
    description: 'A full-stack task management application with authentication and real-time updates.',
    image: '📝',
    category: 'Full Stack',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/username/task-manager',
    featured: false
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'A weather application that shows current and forecasted weather using a third-party API.',
    image: '🌤️',
    category: 'Web Development',
    tech: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
    github: 'https://github.com/username/weather-app',
    featured: false
  },
  {
    id: 'chat-application',
    title: 'Real-time Chat App',
    description: 'A real-time chat application with private and group messaging capabilities.',
    image: '💬',
    category: 'Full Stack',
    tech: ['React', 'Firebase', 'Firestore', 'Authentication'],
    github: 'https://github.com/username/chat-app',
    featured: true
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce Platform',
    description: 'An online store with product listings, cart functionality, and payment processing.',
    image: '🛒',
    category: 'Full Stack',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/username/e-commerce',
    featured: false
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'A content management system for creating and managing blog posts.',
    image: '📰',
    category: 'Web Development',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/username/blog-platform',
    featured: false
  }
];

// Navigation links
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact Me', path: '/contact' }
];

// Skills data
export const SKILLS = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'SQL'],
  tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman']
};

// Social links
export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/username', icon: 'GitHub' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'LinkedIn' },
  { name: 'Twitter', url: 'https://twitter.com/username', icon: 'Twitter' },
  { name: 'Email', url: 'mailto:dmr19104@gmail.com', icon: 'Email' }
];