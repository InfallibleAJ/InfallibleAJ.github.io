import React, { useState } from 'react';
import '../styles/main.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="header" style={styles.header}>
      <div className="container" style={styles.container}>
        <a href="#home" style={styles.logo}>
          <span style={{ color: '#2563eb' }}>{"<"}</span>
          Ajeet Kumar Bind
          <span style={{ color: '#2563eb' }}>{"/>"}</span>
        </a>
        
        <nav style={styles.nav}>
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={styles.menuToggle}
            aria-label="Toggle menu"
          >
            <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
          </button>
          
          <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`} style={styles.navList}>
            {navItems.map((item) => (
              <li key={item.name} style={styles.navItem}>
                <a 
                  href={item.href} 
                  style={styles.navLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    textDecoration: 'none',
    color: '#1e293b'
  },
  nav: {
    position: 'relative'
  },
  menuToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    color: '#2563eb',
    cursor: 'pointer'
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem'
  },
  navItem: {},
  navLink: {
    textDecoration: 'none',
    color: '#334155',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#2563eb'
    }
  }
};

// Add media query styles in your SCSS or here as inline styles
export default Header;