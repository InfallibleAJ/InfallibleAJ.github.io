import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Procix Software Pvt. Ltd.',
      location: 'Noida, India',
      period: 'June 2025 – Present',
      description: [
        'Architected and developed 15+ reusable React components using TypeScript, reducing code duplication by 35%',
        'Optimized application bundle size by 28% through code splitting and lazy loading techniques',
        'Implemented comprehensive unit testing achieving 85% code coverage and reducing production bugs by 40%',
        'Collaborated with UX designers and backend engineers to deliver enterprise-level features',
        'Mentored 3 junior developers on React best practices and TypeScript patterns'
      ]
    },
    {
      id: 2,
      title: 'Frontend Engineer',
      company: 'Sapper Software (sapper.ai)',
      location: 'Noida, India',
      period: 'April 2023 – May 2025',
      description: [
        'Designed and built 20+ responsive web pages using React.js and Tailwind CSS',
        'Integrated 8 RESTful APIs to enable dynamic data rendering, reducing manual data entry by 60%',
        'Refactored legacy JavaScript codebase to TypeScript, reducing runtime errors by 45%',
        'Improved Web Vitals scores achieving LCP under 2.5 seconds and FID under 100ms',
        'Conducted code reviews ensuring adherence to coding standards and best practices'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'YARS Enterprises Private Limited',
      location: 'India',
      period: 'November 2021 – March 2023',
      description: [
        'Developed 12 interactive UI components using React.js supporting 5,000+ daily active users',
        'Enhanced application accessibility achieving WCAG 2.1 Level AA compliance',
        'Reduced CSS file size by 22% through optimization and migration to Tailwind CSS',
        'Collaborated with product managers in Agile sprints to deliver major product releases',
        'Resolved 50+ frontend bugs and performance bottlenecks improving user satisfaction'
      ]
    }
  ];

  return (
    <section id="experience" className="section" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div style={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.id} style={styles.timelineItem}>
              <div style={styles.timelineMarker}>
                <div style={styles.markerCircle}></div>
                {index !== experiences.length - 1 && <div style={styles.timelineLine}></div>}
              </div>
              
              <div style={styles.timelineContent}>
                <div style={styles.timelineHeader}>
                  <h3 style={styles.jobTitle}>{exp.title}</h3>
                  <span style={styles.company}>{exp.company}</span>
                </div>
                
                <div style={styles.timelineMeta}>
                  <span style={styles.location}>
                    <i className="fas fa-map-marker-alt"></i> {exp.location}
                  </span>
                  <span style={styles.period}>
                    <i className="fas fa-calendar-alt"></i> {exp.period}
                  </span>
                </div>
                
                <ul style={styles.descriptionList}>
                  {exp.description.map((item, idx) => (
                    <li key={idx} style={styles.descriptionItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'white'
  },
  timeline: {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto'
  },
  timelineItem: {
    display: 'flex',
    marginBottom: '3rem',
    position: 'relative'
  },
  timelineMarker: {
    position: 'relative',
    marginRight: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  markerCircle: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#2563eb',
    border: '4px solid white',
    boxShadow: '0 0 0 4px #2563eb'
  },
  timelineLine: {
    width: '2px',
    height: 'calc(100% + 3rem)',
    backgroundColor: '#e2e8f0',
    position: 'absolute',
    top: '20px'
  },
  timelineContent: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
  },
  timelineHeader: {
    marginBottom: '0.5rem'
  },
  jobTitle: {
    fontSize: '1.3rem',
    color: '#1e293b',
    marginBottom: '0.3rem'
  },
  company: {
    color: '#2563eb',
    fontWeight: '500',
    fontSize: '1.1rem'
  },
  timelineMeta: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '1rem',
    color: '#64748b'
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  period: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  descriptionList: {
    listStyleType: 'disc',
    paddingLeft: '1.5rem'
  },
  descriptionItem: {
    marginBottom: '0.5rem',
    color: '#334155'
  }
};

export default Experience;