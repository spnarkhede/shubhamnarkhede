import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const SkillBar = ({ skill, level, className }) => {
  // Convert level to percentage (1-5 scale to 0-100%)
  const percentage = (level / 5) * 100;
  
  return (
    <div className={clsx(styles.skillBar, className)}>
      <div className={styles.skillInfo}>
        <span className={styles.skillName}>{skill}</span>
        <span className={styles.skillLevel}>{level}/5</span>
      </div>
      <div className={styles.skillBarContainer}>
        <div 
          className={styles.skillBarFill} 
          style={{ width: `${percentage}%` }}
          data-level={level}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills, className }) => {
  return (
    <div className={clsx(styles.skillCategory, className)}>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <SkillBar 
            key={index} 
            skill={skill.name} 
            level={skill.level} 
          />
        ))}
      </div>
    </div>
  );
};

const SkillsMatrix = ({ skills, className }) => {
  return (
    <div className={clsx(styles.skillsMatrix, className)}>
      <div className={styles.skillsGrid}>
        {Object.keys(skills).map((category) => (
          <SkillCategory 
            key={category}
            title={category}
            skills={skills[category]}
          />
        ))}
      </div>
    </div>
  );
};

// Sample skills data structure
const sampleSkills = {
  "Frontend": [
    { name: "React", level: 5 },
    { name: "JavaScript", level: 5 },
    { name: "HTML/CSS", level: 4 },
    { name: "TypeScript", level: 4 },
    { name: "Redux", level: 4 }
  ],
  "Backend": [
    { name: "Node.js", level: 4 },
    { name: "Express", level: 4 },
    { name: "Python", level: 3 },
    { name: "Java", level: 3 },
    { name: "SQL", level: 4 }
  ],
  "DevOps": [
    { name: "Docker", level: 4 },
    { name: "Kubernetes", level: 3 },
    { name: "CI/CD", level: 4 },
    { name: "AWS", level: 4 },
    { name: "Linux", level: 4 }
  ],
  "Tools & Methodologies": [
    { name: "Git", level: 5 },
    { name: "Agile/Scrum", level: 4 },
    { name: "Jira", level: 4 },
    { name: "Testing", level: 3 },
    { name: "UI/UX Design", level: 3 }
  ]
};

// Default export with sample data for easy usage
export default function DefaultSkillsMatrix({ className }) {
  return <SkillsMatrix skills={sampleSkills} className={className} />;
}

// Named exports for more flexibility
export { SkillsMatrix, SkillCategory, SkillBar };
