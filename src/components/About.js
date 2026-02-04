import React from 'react';
import resumePDF from '../assets/Ajeet_Kumar_FrontEnd.pdf'; // Add this import

const About = () => {
  return (
    <section id="about" className="section" style={styles.section}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="content" style={styles.content}>
          <div className="text" style={styles.text}>
            <p style={styles.paragraph}>
              I'm a Senior Front-End Developer with 4 years of professional experience 
              specializing in React.js and TypeScript. My passion lies in creating 
              responsive, accessible, and high-performance web applications that 
              provide exceptional user experiences.
            </p>
            <p style={styles.paragraph}>
              Throughout my career, I've had the opportunity to work on enterprise-level 
              applications serving thousands of users, optimize performance metrics, 
              mentor junior developers, and collaborate with cross-functional teams 
              to deliver impactful products. I believe in writing clean, maintainable 
              code and staying updated with the latest frontend technologies.
            </p>
            
            <div className="details" style={styles.details}>
              <div style={styles.detailItem}>
                <strong style={styles.label}>Name:</strong>
                <span>Ajeet Kumar Bind</span>
              </div>
              <div style={styles.detailItem}>
                <strong style={styles.label}>Location:</strong>
                <span>Greater Noida, Uttar Pradesh, India</span>
              </div>
              <div style={styles.detailItem}>
                <strong style={styles.label}>Email:</strong>
                <span>ajshubh30@gmail.com</span>
              </div>
              <div style={styles.detailItem}>
                <strong style={styles.label}>Availability:</strong>
                <span>Open to Opportunities</span>
              </div>
            </div>
            
            <a 
              href={resumePDF}
              download 
              className="btn"
              style={styles.resumeBtn}
            >
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
          
          <div className="skillsPreview" style={styles.skillsPreview}>
            <h3 style={styles.skillsTitle}>Core Technologies</h3>
            <div style={styles.skillsGrid}>
              {['React.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Redux', 'Git', 'REST APIs', 'Jest', 'Webpack'].map((skill) => (
                <span key={skill} style={styles.skillTag}>
                  {skill}
                </span>
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
    gap: '4rem',
    alignItems: 'start'
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    color: '#334155'
  },
  details: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    margin: '2rem 0'
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    color: '#2563eb',
    marginBottom: '0.3rem'
  },
  resumeBtn: {
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  skillsPreview: {
    backgroundColor: '#f8fafc',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
  },
  skillsTitle: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    color: '#1e293b'
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.8rem'
  },
  skillTag: {
    backgroundColor: '#e0e7ff',
    color: '#2563eb',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontWeight: '500'
  }
};

export default About;