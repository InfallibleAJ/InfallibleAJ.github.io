import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'ajshubh30@gmail.com',
      link: 'mailto:ajshubh30@gmail.com',
      description: 'Send me an email directly'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/ajeet-kumar-bind',
      link: 'https://linkedin.com/in/ajeet-kumar-bind',
      description: 'Connect with me professionally'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'github.com/InfallibleAJ',
      link: 'https://github.com/InfallibleAJ',
      description: 'Check out my projects and code'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Greater Noida, Uttar Pradesh, India',
      link: 'https://maps.google.com/?q=Greater Noida,Uttar+Pradesh,India',
      description: 'Open to remote opportunities'
    }
  ];

  return (
    <section id="contact" className="section" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        
        <div style={styles.content}>
          <div style={styles.intro}>
            <h3 style={styles.subtitle}>Get In Touch</h3>
            <p style={styles.description}>
              I'm currently open to new opportunities, collaborations, and interesting projects. 
              Whether you have a question, want to discuss a potential collaboration, 
              or just want to say hello, feel free to reach out!
            </p>
            <p style={styles.description}>
              The fastest way to reach me is through email or LinkedIn. 
              I typically respond within 24 hours.
            </p>
            
            <div style={styles.ctaContainer}>
              <a 
                href="mailto:ajshubh30@gmail.com" 
                style={styles.primaryCta}
              >
                <i className="fas fa-paper-plane"></i> Send Email
              </a>
              <a 
                href="https://linkedin.com/in/ajeet-kumar-bind" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.secondaryCta}
              >
                <i className="fab fa-linkedin"></i> Connect on LinkedIn
              </a>
            </div>
          </div>
          
          <div style={styles.contactCards}>
            {contactInfo.map((info, index) => (
              <a 
                key={index}
                href={info.link}
                style={styles.contactCard}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <div style={styles.cardIcon}>
                  <i className={info.icon}></i>
                </div>
                <div style={styles.cardContent}>
                  <h4 style={styles.cardTitle}>{info.title}</h4>
                  <p style={styles.cardValue}>{info.value}</p>
                  <p style={styles.cardDescription}>{info.description}</p>
                </div>
                <div style={styles.cardArrow}>
                  <i className="fas fa-chevron-right"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        <div style={styles.footerNote}>
          <p style={styles.footerText}>
            <i className="fas fa-clock"></i> Response time: Usually within 24 hours
          </p>
          <p style={styles.footerText}>
            <i className="fas fa-briefcase"></i> Status: Open to new opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#f8fafc',
    padding: '5rem 0'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    marginBottom: '3rem'
  },
  intro: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  subtitle: {
    fontSize: '2rem',
    color: '#1e293b',
    marginBottom: '1.5rem',
    fontWeight: '600'
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#334155',
    marginBottom: '1.5rem'
  },
  ctaContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '2rem'
  },
  primaryCta: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    padding: '1rem 2rem',
    backgroundColor: '#2563eb',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#1d4ed8',
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)'
    }
  },
  secondaryCta: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    padding: '1rem 2rem',
    backgroundColor: 'white',
    color: '#2563eb',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1.1rem',
    border: '2px solid #2563eb',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#2563eb',
      color: 'white',
      transform: 'translateY(-2px)'
    }
  },
  contactCards: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem'
  },
  contactCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    textDecoration: 'none',
    color: 'inherit',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    border: '1px solid #e2e8f0',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      borderColor: '#2563eb'
    }
  },
  cardIcon: {
    width: '60px',
    height: '60px',
    backgroundColor: '#e0e7ff',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2563eb',
    fontSize: '1.5rem',
    flexShrink: 0
  },
  cardContent: {
    flex: 1
  },
  cardTitle: {
    fontSize: '1.1rem',
    color: '#1e293b',
    marginBottom: '0.3rem',
    fontWeight: '600'
  },
  cardValue: {
    fontSize: '0.95rem',
    color: '#2563eb',
    marginBottom: '0.3rem',
    fontWeight: '500'
  },
  cardDescription: {
    fontSize: '0.85rem',
    color: '#64748b',
    margin: 0
  },
  cardArrow: {
    color: '#94a3b8',
    fontSize: '1.2rem'
  },
  footerNote: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    marginTop: '3rem',
    paddingTop: '2rem',
    borderTop: '1px solid #e2e8f0',
    flexWrap: 'wrap'
  },
  footerText: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#64748b',
    fontSize: '0.9rem',
    margin: 0
  }
};

export default Contact;