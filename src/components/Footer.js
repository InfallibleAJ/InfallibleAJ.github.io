import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <div style={styles.brand}>
            <a href="#home" style={styles.logo}>
              <span style={{ color: '#2563eb' }}>{"<"}</span>
              Ajeet Bind
              <span style={{ color: '#2563eb' }}>{"/>"}</span>
            </a>
            <p style={styles.tagline}>
              Building digital experiences with passion and precision.
            </p>
          </div>
          
          <div style={styles.links}>
            <h4 style={styles.linksTitle}>Quick Links</h4>
            <ul style={styles.linksList}>
              <li><a href="#home" style={styles.link}>Home</a></li>
              <li><a href="#about" style={styles.link}>About</a></li>
              <li><a href="#skills" style={styles.link}>Skills</a></li>
              <li><a href="#experience" style={styles.link}>Experience</a></li>
              <li><a href="#projects" style={styles.link}>Projects</a></li>
              <li><a href="#education" style={styles.link}>Education</a></li>
              <li><a href="#contact" style={styles.link}>Contact</a></li>
            </ul>
          </div>
          
          <div style={styles.contact}>
            <h4 style={styles.contactTitle}>Connect</h4>
            <div style={styles.socialIcons}>
              <a href="https://github.com/InfallibleAJ" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/ajeet-kumar-bind" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:ajshubh30@gmail.com" style={styles.socialIcon}>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © {currentYear} Ajeet Kumar Bind. All rights reserved.
          </p>
          <p style={styles.credit}>
            Built with React & <span style={{ color: '#2563eb' }}>❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1e293b',
    color: '#cbd5e1',
    padding: '4rem 0 2rem'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem'
  },
  brand: {},
  logo: {
    fontSize: '1.8rem',
    fontWeight: '700',
    textDecoration: 'none',
    color: 'white',
    display: 'inline-block',
    marginBottom: '1rem'
  },
  tagline: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#94a3b8',
    maxWidth: '300px'
  },
  links: {},
  linksTitle: {
    fontSize: '1.2rem',
    color: 'white',
    marginBottom: '1.5rem'
  },
  linksList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  link: {
    color: '#cbd5e1',
    textDecoration: 'none',
    display: 'block',
    padding: '0.5rem 0',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#2563eb'
    }
  },
  contact: {},
  contactTitle: {
    fontSize: '1.2rem',
    color: 'white',
    marginBottom: '1.5rem'
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem'
  },
  socialIcon: {
    width: '45px',
    height: '45px',
    backgroundColor: '#334155',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#cbd5e1',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#2563eb',
      color: 'white',
      transform: 'translateY(-3px)'
    }
  },
  bottom: {
    borderTop: '1px solid #334155',
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  copyright: {
    margin: 0,
    color: '#94a3b8'
  },
  credit: {
    margin: 0,
    color: '#94a3b8'
  }
};

export default Footer;