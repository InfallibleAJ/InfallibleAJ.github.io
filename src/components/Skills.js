import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Technologies',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'HTML5 & CSS3', level: 94 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Redux/State Management', level: 85 }
      ]
    },
    {
      category: 'Tools & Development',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'RESTful APIs', level: 88 },
        { name: 'Jest & Testing Library', level: 82 },
        { name: 'Webpack', level: 78 },
        { name: 'npm/yarn', level: 85 },
        { name: 'VS Code', level: 92 }
      ]
    },
    {
      category: 'Core Competencies',
      skills: [
        { name: 'Performance Optimization', level: 90 },
        { name: 'Component Architecture', level: 92 },
        { name: 'Accessibility (WCAG)', level: 85 },
        { name: 'Cross-Browser Compatibility', level: 88 },
        { name: 'Agile Methodologies', level: 87 },
        { name: 'Code Reviews', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        
        <div style={styles.categoriesGrid}>
          {skillCategories.map((category) => (
            <div key={category.category} style={styles.categoryCard}>
              <h3 style={styles.categoryTitle}>{category.category}</h3>
              <div style={styles.skillsList}>
                {category.skills.map((skill) => (
                  <div key={skill.name} style={styles.skillItem}>
                    <div style={styles.skillHeader}>
                      <span style={styles.skillName}>{skill.name}</span>
                      <span style={styles.skillPercentage}>{skill.level}%</span>
                    </div>
                    <div style={styles.progressBar}>
                      <div 
                        style={{
                          ...styles.progressFill,
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, #2563eb, ${skill.level > 85 ? '#7c3aed' : '#3b82f6'})`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
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
    backgroundColor: '#f8fafc'
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  categoryCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)'
    }
  },
  categoryTitle: {
    fontSize: '1.5rem',
    color: '#1e293b',
    marginBottom: '1.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #e2e8f0'
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem'
  },
  skillItem: {},
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem'
  },
  skillName: {
    fontWeight: '500'
  },
  skillPercentage: {
    color: '#2563eb',
    fontWeight: '600'
  },
  progressBar: {
    height: '8px',
    backgroundColor: '#e2e8f0',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    borderRadius: '4px'
  }
};

export default Skills;