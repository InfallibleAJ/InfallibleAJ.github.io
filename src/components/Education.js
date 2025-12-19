import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Electronics and Communications Engineering',
      institution: 'Bundelkhand Institute of Engineering and Technology',
      location: 'Jhansi, India',
      period: 'May 2015 – April 2019',
      description: 'Completed degree with focus on electronics, communications, and computer fundamentals.'
    }
  ];

  const certifications = [
    {
      name: 'Frontend Development Specialization',
      issuer: 'Online Learning Platforms',
      date: '2023 - Present',
      description: 'Continuous learning through courses in React, TypeScript, and modern web development.'
    }
  ];

  return (
    <section id="education" className="section" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Education & Learning</h2>
        
        <div style={styles.content}>
          <div style={styles.educationSection}>
            <h3 style={styles.subtitle}>Education</h3>
            <div style={styles.educationList}>
              {education.map((edu, index) => (
                <div key={index} style={styles.educationItem}>
                  <div style={styles.educationHeader}>
                    <h4 style={styles.degree}>{edu.degree}</h4>
                    <span style={styles.institution}>{edu.institution}</span>
                  </div>
                  <div style={styles.educationMeta}>
                    <span style={styles.location}>
                      <i className="fas fa-map-marker-alt"></i> {edu.location}
                    </span>
                    <span style={styles.period}>
                      <i className="fas fa-calendar-alt"></i> {edu.period}
                    </span>
                  </div>
                  <p style={styles.educationDescription}>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div style={styles.certificationsSection}>
            <h3 style={styles.subtitle}>Continuous Learning</h3>
            <div style={styles.certificationsList}>
              {certifications.map((cert, index) => (
                <div key={index} style={styles.certificationItem}>
                  <div style={styles.certificationHeader}>
                    <h4 style={styles.certName}>{cert.name}</h4>
                    <span style={styles.issuer}>{cert.issuer}</span>
                  </div>
                  <div style={styles.certificationMeta}>
                    <span style={styles.certDate}>
                      <i className="fas fa-calendar"></i> {cert.date}
                    </span>
                  </div>
                  <p style={styles.certDescription}>{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'white'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem'
  },
  subtitle: {
    fontSize: '1.8rem',
    color: '#1e293b',
    marginBottom: '2rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #e2e8f0'
  },
  educationSection: {},
  educationList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  educationItem: {
    backgroundColor: '#f8fafc',
    padding: '1.5rem',
    borderRadius: '8px',
    borderLeft: '4px solid #2563eb'
  },
  educationHeader: {
    marginBottom: '0.5rem'
  },
  degree: {
    fontSize: '1.3rem',
    color: '#1e293b',
    marginBottom: '0.3rem'
  },
  institution: {
    color: '#2563eb',
    fontWeight: '500'
  },
  educationMeta: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '1rem',
    color: '#64748b',
    fontSize: '0.9rem'
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
  educationDescription: {
    color: '#334155',
    lineHeight: '1.6'
  },
  certificationsSection: {},
  certificationsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  certificationItem: {
    backgroundColor: '#f0f9ff',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #e0f2fe'
  },
  certificationHeader: {
    marginBottom: '0.5rem'
  },
  certName: {
    fontSize: '1.2rem',
    color: '#1e293b',
    marginBottom: '0.3rem'
  },
  issuer: {
    color: '#0ea5e9',
    fontWeight: '500'
  },
  certificationMeta: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '1rem',
    color: '#64748b',
    fontSize: '0.9rem'
  },
  certDate: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  certDescription: {
    color: '#334155',
    lineHeight: '1.6',
    margin: 0
  }
};

export default Education;