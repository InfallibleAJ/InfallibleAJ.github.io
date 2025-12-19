import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Procix Enterprise Dashboard',
      description: 'A comprehensive enterprise dashboard built with React and TypeScript featuring reusable components, performance optimizations, and comprehensive testing. Reduced bundle size by 28% and improved load times from 4.2s to 2.8s.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Jest', 'Code Splitting'],
        featured: true
    },
    {
      id: 2,
      title: 'Sapper.ai Analytics Platform',
      description: 'Responsive analytics platform with 20+ pages integrating 8 RESTful APIs for real-time data visualization. Built with React.js and Tailwind CSS, achieving cross-browser compatibility and optimized Web Vitals scores.',
      technologies: ['React.js', 'REST APIs', 'Tailwind CSS', 'Performance', 'Web Vitals'],
  
      featured: true
    },
    {
      id: 3,
      title: 'Component Library & Design System',
      description: 'Built 15+ reusable TypeScript components with 85% test coverage. Implemented comprehensive documentation and reduced code duplication by 35% across enterprise applications.',
      technologies: ['TypeScript', 'React', 'Storybook', 'Jest', 'Design System'],
   
      featured: false
    },
    {
      id: 4,
      title: 'Accessibility-Focused Enterprise App',
      description: 'Enhanced application accessibility to WCAG 2.1 Level AA standards with ARIA attributes and semantic HTML. Supported 5,000+ daily users with improved user satisfaction ratings.',
      technologies: ['React', 'Accessibility', 'WCAG', 'ARIA', 'Semantic HTML'],
 
      featured: false
    }
  ];

  return (
    <section id="projects" className="section" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div style={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} style={styles.projectCard}>
              <div style={styles.projectHeader}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                {project.featured && (
                  <span style={styles.featuredBadge}>Featured</span>
                )}
              </div>
              
              <p style={styles.projectDescription}>{project.description}</p>
              
              <div style={styles.technologies}>
                {project.technologies.map((tech) => (
                  <span key={tech} style={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* <div style={styles.projectLinks}>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  <i className="fab fa-github"></i> Code
                </a>
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={styles.link}
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#f8fafc'
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem'
  },
  projectCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
    }
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem'
  },
  projectTitle: {
    fontSize: '1.4rem',
    color: '#1e293b',
    margin: 0
  },
  featuredBadge: {
    backgroundColor: '#dcfce7',
    color: '#16a34a',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600'
  },
  projectDescription: {
    color: '#334155',
    lineHeight: '1.6',
    marginBottom: '1.5rem'
  },
  technologies: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem'
  },
  techTag: {
    backgroundColor: '#e0e7ff',
    color: '#2563eb',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '500'
  },
  projectLinks: {
    display: 'flex',
    gap: '1rem',
    borderTop: '1px solid #e2e8f0',
    paddingTop: '1.5rem'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#2563eb',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#1d4ed8'
    }
  }
};

export default Projects;