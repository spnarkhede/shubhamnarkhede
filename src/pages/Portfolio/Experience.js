// Experience page

import React from 'react';
import Layout from '@theme/Layout';
import { ExperienceTimeline } from '@site/src/components/ExperienceTimeline';
import { Award, Calendar } from 'lucide-react';

export default function Experience() {
  const skills = [
    {
      category: "Frontend",
      items: ["Angular", "React", "Vue.js", "JavaScript", "TypeScript", "SASS", "Flutter", "Dart"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Java", "Spring Boot", "Kotlin"]
    },
    {
      category: "Database",
      items: ["SQL", "MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Testing Tools",
      items: ["Playwright", "Selenium", "Jenkins", "Automated Testing", "Manual Testing", "Unit Testing"]
    },
    {
      category: "DevOps Tools",
      items: ["Git", "GitHub", "Docker", "Jenkins", "AWS", "Azure DevOps", "Grafana", "SSO", "OpenID"]
    },
    {
      category: "UI/UX Tools",
      items: [ "SAP UI5", "SAP Fiori", "Figma", "Adobe XD", "Sketch", "Invision/Zeplin", "Prototyping", "Requirement Gathering"]
    }
  ];

  return (
    <Layout
      title="Experience"
      description="Professional experience and skills of Shubham Narkhede, DevOps Engineer and Full Stack Developer."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Professional Experience</h1>
            <p className="margin-bottom--lg">
              With over 5 years of experience in software development, DevOps, and UI/UX design, 
              I've had the opportunity to work on diverse projects across different industries. 
              Below is a timeline of my professional journey.
            </p>
          </div>
        </div>
        
        <div className="row margin-bottom--xl">
          <div className="col col--10 col--offset-1">
            <ExperienceTimeline />
          </div>
        </div>
        
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h2>Technical Skills</h2>
            <p className="margin-bottom--lg">
              Throughout my career, I've developed expertise in a wide range of technologies and tools.
            </p>
            
            <div className="row">
              {skills.map((skillGroup, index) => (
                <div key={index} className="col col--4 margin-bottom--lg">
                  <div className="card" style={{ height: '100%' }}>
                    <div className="card__header">
                      <h3>{skillGroup.category}</h3>
                    </div>
                    <div className="card__body">
                      <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li key={skillIndex}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="row margin-top--xl">
          <div className="col col--8 col--offset-2">
            <h2>Certifications & Achievements</h2>
            <div className="row">
              <div className="col col--6 margin-bottom--lg">
                <div className="card" style={{ height: '100%' }}>
                  <div className="card__header">
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem',
                      marginBottom: '0.5rem'
                    }}>
                      <Award size={24} color="var(--ifm-color-primary)" />
                      <h3 style={{ margin: 0 }}>AWS Certified Solutions Architect</h3>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      color: 'var(--ifm-color-emphasis-600)',
                      fontSize: '0.875rem'
                    }}>
                      <Calendar size={16} />
                      <span>Obtained: September 2022</span>
                    </div>
                  </div>
                  <div className="card__body">
                    <p>
                      Validated expertise in designing distributed systems on AWS, including deployment of 
                      compute, storage, database, and networking services according to architectural best practices.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col col--6 margin-bottom--lg">
                <div className="card" style={{ height: '100%' }}>
                  <div className="card__header">
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem',
                      marginBottom: '0.5rem'
                    }}>
                      <Award size={24} color="var(--ifm-color-primary)" />
                      <h3 style={{ margin: 0 }}>Certified Scrum Master</h3>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      color: 'var(--ifm-color-emphasis-600)',
                      fontSize: '0.875rem'
                    }}>
                      <Calendar size={16} />
                      <span>Obtained: March 2021</span>
                    </div>
                  </div>
                  <div className="card__body">
                    <p>
                      Demonstrated knowledge of Scrum methodologies and their practical application in 
                      software development teams. Skilled in facilitating sprint planning, daily standups, 
                      reviews, and retrospectives.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col col--6 margin-bottom--lg">
                <div className="card" style={{ height: '100%' }}>
                  <div className="card__header">
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem',
                      marginBottom: '0.5rem'
                    }}>
                      <Award size={24} color="var(--ifm-color-primary)" />
                      <h3 style={{ margin: 0 }}>Angular Certified Developer</h3>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      color: 'var(--ifm-color-emphasis-600)',
                      fontSize: '0.875rem'
                    }}>
                      <Calendar size={16} />
                      <span>Obtained: July 2020</span>
                    </div>
                  </div>
                  <div className="card__body">
                    <p>
                      Certified expertise in building applications with Angular, including component architecture, 
                      state management, routing, and integration with backend services.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col col--6 margin-bottom--lg">
                <div className="card" style={{ height: '100%' }}>
                  <div className="card__header">
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem',
                      marginBottom: '0.5rem'
                    }}>
                      <Award size={24} color="var(--ifm-color-primary)" />
                      <h3 style={{ margin: 0 }}>Innovation Award</h3>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      color: 'var(--ifm-color-emphasis-600)',
                      fontSize: '0.875rem'
                    }}>
                      <Calendar size={16} />
                      <span>Received: November 2023</span>
                    </div>
                  </div>
                  <div className="card__body">
                    <p>
                      Recognized for developing an innovative automated testing framework that reduced 
                      testing time by 60% and improved deployment reliability for the Connected Charging 
                      Cable project at Robert Bosch GmbH.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
