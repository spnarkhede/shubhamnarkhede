import React from 'react';
import styles from './styles.module.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function SkillsMatrix() {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "Angular", level: 95 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "HTML/CSS", level: 90 },
        { name: "UI/UX Design", level: 80 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Java", level: 80 },
        { name: "Spring Boot", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      category: "DevOps",
      skills: [
        { name: "Docker", level: 85 },
        { name: "CI/CD", level: 90 },
        { name: "AWS", level: 80 },
        { name: "Azure", level: 85 },
        { name: "Kubernetes", level: 70 }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "SQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Data Modeling", level: 85 },
        { name: "Query Optimization", level: 80 }
      ]
    }
  ];

  // Format data for radar chart
  const formatDataForRadarChart = (skillsArray) => {
    return skillsArray.map(skill => ({
      subject: skill.name,
      A: skill.level,
      fullMark: 100
    }));
  };

  return (
    <div className={styles.skillsMatrixContainer}>
      <h2 className={styles.skillsMatrixTitle}>Skills Matrix</h2>
      <p className={styles.skillsMatrixDescription}>
        A comprehensive overview of my technical skills and proficiency levels across different domains.
        The radar charts below visualize my expertise in various technologies and methodologies.
      </p>
      
      <div className={styles.skillsMatrixGrid}>
        {skillsData.map((category, index) => (
          <div key={index} className={styles.skillsMatrixCard}>
            <h3 className={styles.skillsMatrixCardTitle}>{category.category}</h3>
            
            <div className={styles.skillsMatrixChart}>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart 
                  cx="50%" 
                  cy="50%" 
                  outerRadius="80%" 
                  data={formatDataForRadarChart(category.skills)}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--ifm-color-emphasis-700)', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: 'var(--ifm-color-emphasis-600)' }} />
                  <Radar 
                    name={category.category} 
                    dataKey="A" 
                    stroke="var(--ifm-color-primary)" 
                    fill="var(--ifm-color-primary)" 
                    fillOpacity={0.6} 
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className={styles.skillsMatrixList}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.skillItem}>
                  <div className={styles.skillName}>{skill.name}</div>
                  <div className={styles.skillBarContainer}>
                    <div 
                      className={styles.skillBar} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className={styles.skillLevel}>{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
