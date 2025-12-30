import React from 'react';
import profilePic from "../assets/Ajeet_Linkedin_Profile.jpg"

const Hero = () => {
  return (
    <section id="home" className="hero" style={styles.hero}>
      <div className="container" style={styles.container}>
        
        <div className="content" style={styles.content}>
          <h1 style={styles.title}>
            Hi, I'm <span style={{ color: '#2563eb' }}>Ajeet Kumar Bind</span>
          </h1>
          <h2 style={styles.subtitle}>
            Senior Frontend Developer • React & TypeScript Specialist
          </h2>
          <p style={styles.description}>
            Front-End Developer with 5 years of experience building responsive, scalable, 
            and high-performance web applications using React.js and TypeScript. 
            Passionate about developing clean, reusable UI components and optimizing 
            performance to deliver exceptional user experiences.
          </p>
          <div className="buttonGroup" style={styles.buttonGroup}>
            <a href="#contact" className="btn" style={styles.btn}>
              Get In Touch
            </a>
            <a 
              href="https://github.com/InfallibleAJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={styles.btnOutline}
            >
              <i className="fab fa-github"></i> View GitHub
            </a>
          </div>
        </div>
        <div className="imageContainer" style={styles.imageContainer}>
          <div className="imagePlaceholder" style={styles.imagePlaceholder}>
            <img 
              src={profilePic}
              alt="Ajeet Kumar Bind" 
              style={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    paddingTop: '80px'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '3rem',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    '@media (max-width: 992px)': {
      flexDirection: 'column',
      textAlign: 'center'
    }
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#1e293b'
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#64748b',
    marginBottom: '1.5rem',
    fontWeight: '400'
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#334155',
    marginBottom: '2rem',
    maxWidth: '600px'
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  btn: {
    textDecoration: 'none'
  },
  btnOutline: {
    textDecoration: 'none'
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
  },
  imagePlaceholder: {
    width: '350px',
    height: '350px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)',
    overflow: 'hidden' // Important for circular image
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%'
  }
};

export default Hero;