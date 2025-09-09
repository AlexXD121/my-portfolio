// Application data
const portfolioData = {
  "portfolio_templates": [
    {
      "name": "Minimalist Design",
      "description": "Clean and simple approach focusing on content",
      "features": ["Clean typography", "Lots of white space", "Fast loading", "Mobile-friendly"],
      "tech_stack": ["HTML", "CSS", "Vanilla JS"],
      "color": "#4A90E2"
    },
    {
      "name": "Interactive/Animated",
      "description": "Engaging animations and smooth interactions",
      "features": ["Smooth animations", "Hover effects", "3D elements", "Engaging UX"],
      "tech_stack": ["React", "GSAP", "Framer Motion"],
      "color": "#7B68EE"
    },
    {
      "name": "Project-Focused",
      "description": "Detailed showcase of your development work",
      "features": ["Case studies", "Live demos", "Code links", "Tech stacks"],
      "tech_stack": ["Next.js", "GitHub API"],
      "color": "#50C878"
    },
    {
      "name": "Creative/Unique",
      "description": "Stand out with unconventional designs",
      "features": ["Unique layouts", "Creative navigation", "Personal branding", "Interactive elements"],
      "tech_stack": ["Three.js", "Custom CSS"],
      "color": "#FF6B6B"
    },
    {
      "name": "Professional/Corporate",
      "description": "Perfect for job applications",
      "features": ["Resume integration", "Skills showcase", "Testimonials", "Contact forms"],
      "tech_stack": ["Next.js", "Tailwind CSS"],
      "color": "#2C3E50"
    }
  ],
  "design_trends": [
    {
      "name": "Bold Typography",
      "description": "Large, attention-grabbing fonts and creative text layouts"
    },
    {
      "name": "Dark Mode Support",
      "description": "Toggle between light and dark themes for better user experience"
    },
    {
      "name": "3D Elements",
      "description": "Interactive 3D models and immersive visual experiences"
    },
    {
      "name": "Mobile-First Design",
      "description": "Responsive layouts optimized for mobile devices first"
    },
    {
      "name": "Sustainable Design",
      "description": "Eco-friendly design choices and optimized performance"
    },
    {
      "name": "Interactive Animations",
      "description": "Smooth scrolling animations and micro-interactions"
    }
  ],
  "resources": [
    {
      "category": "Free Templates",
      "items": ["GitHub - React Portfolio Templates", "Vercel Portfolio Starter", "Next.js Portfolio Kit", "Open Source Templates"]
    },
    {
      "category": "Learning Resources",
      "items": ["FreeCodeCamp Portfolio Guide", "Frontend Mentor Challenges", "YouTube Tutorials", "Web Development Courses"]
    },
    {
      "category": "Design Inspiration",
      "items": ["Dribbble Portfolios", "Behance Showcase", "Awwwards Portfolio Sites", "Developer Portfolio Examples"]
    },
    {
      "category": "Development Tools",
      "items": ["Figma for Design", "GitHub for Code Hosting", "Vercel for Deployment", "Netlify for Static Sites"]
    }
  ],
  "tips": [
    {
      "title": "What to Include",
      "content": "Showcase 3-5 of your best projects, include your skills and technologies, add a professional bio, and provide contact information."
    },
    {
      "title": "Project Presentation",
      "content": "Include live demos, source code links, explain your development process, and highlight challenges you solved."
    },
    {
      "title": "Mobile Optimization",
      "content": "Use responsive design principles, test on multiple devices, optimize images and loading times, and ensure touch-friendly navigation."
    },
    {
      "title": "SEO Best Practices",
      "content": "Use descriptive page titles, add meta descriptions, optimize images with alt text, and include relevant keywords naturally."
    }
  ]
};

// DOM elements
let templateGrid, trendsGrid, resourcesGrid, tipsGrid, modal, modalBody, modalClose, navLinks, sections;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements after page loads
  templateGrid = document.getElementById('templateGrid');
  trendsGrid = document.getElementById('trendsGrid');
  resourcesGrid = document.getElementById('resourcesGrid');
  tipsGrid = document.getElementById('tipsGrid');
  modal = document.getElementById('templateModal');
  modalBody = document.getElementById('modalBody');
  modalClose = document.querySelector('.modal-close');
  navLinks = document.querySelectorAll('.nav-link');
  sections = document.querySelectorAll('.section');

  renderTemplates();
  renderTrends();
  renderResources();
  renderTips();
  setupNavigation();
  setupModal();
});

// Render portfolio templates
function renderTemplates() {
  if (!templateGrid) return;
  
  templateGrid.innerHTML = '';
  
  portfolioData.portfolio_templates.forEach((template, index) => {
    const templateCard = document.createElement('div');
    templateCard.className = 'template-card';
    
    templateCard.innerHTML = `
      <div class="template-preview" style="background-color: ${template.color}">
        ${template.name}
      </div>
      <div class="template-info">
        <h3 class="template-name">${template.name}</h3>
        <p class="template-description">${template.description}</p>
        <ul class="template-features">
          ${template.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <div class="template-tech">
          ${template.tech_stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <button class="btn btn--primary btn--sm" onclick="openTemplateModal(${index})">View Details</button>
      </div>
    `;
    
    // Add click handler to entire card for preview
    templateCard.addEventListener('click', function(e) {
      // Don't open modal if clicking on the button
      if (!e.target.classList.contains('btn')) {
        openTemplateModal(index);
      }
    });
    
    templateGrid.appendChild(templateCard);
  });
}

// Render design trends
function renderTrends() {
  if (!trendsGrid) return;
  
  trendsGrid.innerHTML = '';
  
  portfolioData.design_trends.forEach(trend => {
    const trendCard = document.createElement('div');
    trendCard.className = 'trend-card';
    
    trendCard.innerHTML = `
      <h3 class="trend-name">${trend.name}</h3>
      <p class="trend-description">${trend.description}</p>
    `;
    
    trendsGrid.appendChild(trendCard);
  });
}

// Render resources
function renderResources() {
  if (!resourcesGrid) return;
  
  resourcesGrid.innerHTML = '';
  
  portfolioData.resources.forEach(resource => {
    const resourceCard = document.createElement('div');
    resourceCard.className = 'resource-card';
    
    resourceCard.innerHTML = `
      <h3 class="resource-category">${resource.category}</h3>
      <ul class="resource-list">
        ${resource.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
    
    resourcesGrid.appendChild(resourceCard);
  });
}

// Render tips
function renderTips() {
  if (!tipsGrid) return;
  
  tipsGrid.innerHTML = '';
  
  portfolioData.tips.forEach(tip => {
    const tipCard = document.createElement('div');
    tipCard.className = 'tip-card';
    
    tipCard.innerHTML = `
      <h3 class="tip-title">${tip.title}</h3>
      <p class="tip-content">${tip.content}</p>
    `;
    
    tipsGrid.appendChild(tipCard);
  });
}

// Setup navigation functionality
function setupNavigation() {
  if (!navLinks || !sections) return;
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
      updateActiveNav(link);
    });
  });

  // Update active navigation on scroll
  window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

// Scroll to section with smooth animation
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 80; // Account for fixed nav
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// Global function for button clicks
window.scrollToSection = scrollToSection;

// Update active navigation link
function updateActiveNav(activeLink) {
  if (!navLinks) return;
  navLinks.forEach(link => link.classList.remove('active'));
  activeLink.classList.add('active');
}

// Setup modal functionality
function setupModal() {
  if (!modal || !modalClose) return;
  
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// Open template details modal
function openTemplateModal(templateIndex) {
  if (!modal || !modalBody) return;
  
  const template = portfolioData.portfolio_templates[templateIndex];
  if (!template) return;
  
  modalBody.innerHTML = `
    <h2 class="modal-template-name">${template.name}</h2>
    <p class="modal-template-description">${template.description}</p>
    
    <div class="modal-section">
      <h4>Key Features</h4>
      <ul class="modal-features">
        ${template.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    </div>
    
    <div class="modal-section">
      <h4>Recommended Technology Stack</h4>
      <div class="modal-tech-stack">
        ${template.tech_stack.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
      </div>
    </div>
    
    <div class="modal-section">
      <h4>Best For</h4>
      <p style="color: var(--color-text-secondary); line-height: var(--line-height-normal);">
        ${getTemplateUsageAdvice(template.name)}
      </p>
    </div>
    
    <div class="modal-section">
      <h4>Getting Started</h4>
      <p style="color: var(--color-text-secondary); line-height: var(--line-height-normal);">
        ${getGettingStartedAdvice(template.name)}
      </p>
    </div>
  `;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Make openTemplateModal globally accessible
window.openTemplateModal = openTemplateModal;

// Close modal
function closeModal() {
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Get usage advice for template type
function getTemplateUsageAdvice(templateName) {
  const advice = {
    'Minimalist Design': 'Ideal for developers who want to highlight their code quality and problem-solving skills. Perfect for backend developers, data scientists, or anyone who prefers substance over flashy design.',
    'Interactive/Animated': 'Great for frontend developers, UI/UX designers, and creative professionals. Shows technical skills in modern web technologies and attention to user experience.',
    'Project-Focused': 'Perfect for showcasing your development journey and technical expertise. Ideal for bootcamp graduates, junior developers, and anyone with strong projects to demonstrate.',
    'Creative/Unique': 'Best for creative developers, game developers, or those working in creative industries. Helps you stand out in competitive markets.',
    'Professional/Corporate': 'Excellent for job seekers targeting traditional companies, enterprise roles, or formal business environments. Shows professionalism and business awareness.'
  };
  return advice[templateName] || 'A versatile choice for various career paths in technology.';
}

// Get getting started advice for template type
function getGettingStartedAdvice(templateName) {
  const advice = {
    'Minimalist Design': 'Start with a clean HTML structure, focus on typography and spacing. Use CSS Grid and Flexbox for layouts. Keep JavaScript minimal and purposeful.',
    'Interactive/Animated': 'Begin with React or Vue.js for component structure. Add GSAP or Framer Motion for animations. Plan your interactions before coding.',
    'Project-Focused': 'Create detailed case studies for 3-5 projects. Include problem statements, solutions, and results. Use GitHub API to showcase your repositories.',
    'Creative/Unique': 'Experiment with Three.js for 3D elements. Use CSS animations and creative layouts. Balance creativity with usability.',
    'Professional/Corporate': 'Focus on clean design and clear information hierarchy. Include resume sections, testimonials, and contact forms. Ensure fast loading times.'
  };
  return advice[templateName] || 'Plan your content structure and choose appropriate technologies for your skill level.';
}