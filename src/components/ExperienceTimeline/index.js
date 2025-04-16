/* Timeline component for experience page */
import React, { useState } from 'react';
import styles from './styles.module.css';
import { Briefcase, GraduationCap, MapPin, Calendar, ChevronDown, ChevronUp, Award, ExternalLink } from 'lucide-react';

export function ExperienceTimeline() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const experiences = [
    {
      date: "July 2022 - Present",
      title: "Software Developer in DevOps",
      company: "Robert Bosch GmbH",
      location: "Stuttgart, Germany",
      description: "Leading full-stack application development across backend and frontend for Connected Charging Cable (CCC), Charge Point Management System (CPMS), and Support Portal 2.0. Implementing CI/CD pipelines with integrated Playwright for automated testing and optimizing deployment environments with AWS cloud services.",
      icon: <Briefcase size={24} />,
      color: "#0078D7",
      achievements: [
        "Led a team of 5 developers to deliver the Connected Charging Cable (CCC) project, resulting in a 30% increase in charging efficiency",
        "Implemented automated testing with Playwright, reducing testing time by 60% and improving deployment reliability",
        "Designed and developed the Charge Point Management System (CPMS) dashboard, providing real-time monitoring for over 500 charging stations",
        "Redesigned the Support Portal 2.0, resulting in a 40% reduction in ticket resolution time",
        "Received the Innovation Award for developing an automated testing framework"
      ],
      technologies: ["Angular", "Node.js", "AWS", "Docker", "CI/CD", "Playwright", "TypeScript"],
      projects: [
        { name: "Connected Charging Cable (CCC)", link: "/Portfolio/Projects#ccc" },
        { name: "Charge Point Management System", link: "/Portfolio/Projects#cpms" },
        { name: "Support Portal 2.0", link: "/Portfolio/Projects#support-portal" }
      ]
    },
    {
      date: "September 2020 - June 2022",
      title: "Software Application Developer",
      company: "Bosch Rexroth AG",
      location: "Ulm, Germany",
      description: "Drove the development and deployment of key applications including Smart Project Management (SPM), Application System Platform Selectors (ASPS), and Virtual Streaming Conference Platform (VSCP). Led full-stack development using Angular and migrated cloud infrastructure from Bosch IoT to Azure.",
      icon: <Briefcase size={24} />,
      color: "#00A4EF",
      achievements: [
        "Developed the Smart Project Management (SPM) platform, resulting in a 16% increase in sales efficiency",
        "Created the DC-MH/SDI Tool Overview dashboard for the Area Sales and Distribution department",
        "Built the Virtual Streaming Conference Platform that successfully hosted several major company events with thousands of concurrent participants",
        "Designed and implemented the Rexroth Chat App for secure, real-time collaboration between teams",
        "Led the migration of cloud infrastructure from Bosch IoT to Azure, improving system reliability and reducing operational costs"
      ],
      technologies: ["Angular", "Node.js", "Azure", "MongoDB", "WebRTC", "TypeScript", "PostgreSQL"],
      projects: [
        { name: "Smart Project Management (SPM)", link: "/Portfolio/Projects#spm" },
        { name: "DC-MH/SDI Tool Overview", link: "/Portfolio/Projects#dc-mh-sdi" },
        { name: "Virtual Streaming Conference Platform", link: "/Portfolio/Projects#vscp" },
        { name: "Rexroth Chat App", link: "/Portfolio/Projects#rexroth-chat" }
      ]
    },
    {
      date: "April 2019 - June 2020",
      title: "Associate Software Developer",
      company: "Amazon",
      location: "Leipzig, Germany",
      description: "Designed and implemented Amazon-scale tools to facilitate internal business operations, focusing on efficiency, scalability, and robust architecture. Developed high-quality, maintainable code using Java, Spring Boot, Kotlin, and TypeScript.",
      icon: <Briefcase size={24} />,
      color: "#FF9900",
      achievements: [
        "Developed internal tools that improved operational efficiency by 25% for multiple departments",
        "Implemented microservices architecture for high-scale applications handling millions of requests daily",
        "Created data processing pipelines for analyzing customer behavior patterns",
        "Collaborated with product managers and UX designers to create intuitive interfaces for complex workflows",
        "Participated in code reviews and mentored junior developers on best practices"
      ],
      technologies: ["Java", "Spring Boot", "Kotlin", "AWS", "Microservices", "DynamoDB", "TypeScript"],
      projects: [
        { name: "Amazon Internal Tools", link: "/Portfolio/Projects#amazon-tools" }
      ]
    },
    {
      date: "2017 - 2019",
      title: "MSc in Automotive Software Engineering",
      company: "Chemnitz University of Technology",
      location: "Chemnitz, Germany",
      description: "Specialized in automotive software engineering with focus on embedded systems, connected vehicles, and software architecture. Active member of Hochschule SMD, UNIECE, and Indian Cultural Center Chemnitz.",
      icon: <GraduationCap size={24} />,
      color: "#7FBA00",
      achievements: [
        "Graduated with distinction (1.3 GPA)",
        "Master's thesis: 'Development of a Diagnostic Communication Module for Electric Vehicles'",
        "Research assistant in the Connected Mobility Systems lab",
        "Participated in the Formula Student Germany competition as a software team member",
        "Received DAAD scholarship for academic excellence"
      ],
      technologies: ["C/C++", "AUTOSAR", "CAN/LIN", "Embedded Systems", "MATLAB/Simulink", "Python"],
      projects: []
    },
    {
      date: "2013 - 2017",
      title: "BE in Computer Science and Engineering",
      company: "Rashtrasant Tukadoji Maharaj Nagpur University",
      location: "Nagpur, India",
      description: "Completed bachelor's degree in computer science with focus on programming, algorithms, and software development. Active member of Rotary Club, Save Speechless Organization, and The Parents Care.",
      icon: <GraduationCap size={24} />,
      color: "#F25022",
      achievements: [
        "Graduated with First Class Honors",
        "Final year project: 'Smart Home Automation System using IoT'",
        "Published paper on 'Efficient Algorithms for Big Data Processing' in IEEE conference",
        "Won first prize in national-level coding competition",
        "Volunteered for teaching computer basics to underprivileged children"
      ],
      technologies: ["Java", "C++", "Data Structures", "Algorithms", "Database Systems", "Web Development"],
      projects: []
    }
  ];

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelineLine}></div>
      
      {experiences.map((exp, index) => (
        <div key={index} className={styles.timelineItem}>
          <div 
            className={styles.timelineIconContainer} 
            style={{ backgroundColor: exp.color }}
          >
            {exp.icon}
          </div>
          
          <div className={styles.timelineContent}>
            <div className={styles.timelineHeader} onClick={() => toggleExpand(index)}>
              <div className={styles.timelineHeaderContent}>
                <h3 className={styles.timelineTitle}>{exp.title}</h3>
                <h4 className={styles.timelineCompany}>{exp.company}</h4>
                
                <div className={styles.timelineMetadata}>
                  <div className={styles.timelineDate}>
                    <Calendar size={16} />
                    <span>{exp.date}</span>
                  </div>
                  
                  <div className={styles.timelineLocation}>
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <button className={styles.expandButton}>
                {expandedItems[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            
            <div className={`${styles.timelineDetails} ${expandedItems[index] ? styles.expanded : ''}`}>
              <p className={styles.timelineDescription}>{exp.description}</p>
              
              {exp.achievements.length > 0 && (
                <div className={styles.timelineSection}>
                  <h5 className={styles.timelineSectionTitle}>
                    <Award size={16} />
                    Key Achievements
                  </h5>
                  <ul className={styles.timelineList}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {exp.technologies.length > 0 && (
                <div className={styles.timelineTechnologies}>
                  <h5 className={styles.timelineSectionTitle}>Technologies</h5>
                  <div className={styles.timelineTags}>
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className={styles.timelineTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              )}
              
              {exp.projects.length > 0 && (
                <div className={styles.timelineSection}>
                  <h5 className={styles.timelineSectionTitle}>
                    <ExternalLink size={16} />
                    Related Projects
                  </h5>
                  <ul className={styles.timelineProjectList}>
                    {exp.projects.map((project, i) => (
                      <li key={i}>
                        <a href={project.link} className={styles.timelineProjectLink}>
                          {project.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
