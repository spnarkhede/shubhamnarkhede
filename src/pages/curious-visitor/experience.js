import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import Timeline from '../../components/Timeline';
import styles from './styles.module.css';
import { Award, Bookmark, ExternalLink } from 'lucide-react';
import Link from '@docusaurus/Link';

export default function CuriousVisitorExperience() {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: "Leading cloud infrastructure and DevOps initiatives for enterprise clients. Implementing CI/CD pipelines, infrastructure as code, and monitoring solutions.",
      achievements: [
        "Reduced deployment time by 70% through automation and pipeline optimization",
        "Implemented infrastructure as code using Terraform, improving consistency and reducing manual errors",
        "Designed and implemented a comprehensive monitoring and alerting system",
        "Mentored junior team members in DevOps practices and cloud technologies"
      ],
      technologies: ["AWS", "Kubernetes", "Terraform", "Docker", "Jenkins", "Prometheus", "Grafana"]
    },
    {
      title: "Full Stack Developer",
      company: "Innovative Systems",
      period: "2020 - 2023",
      description: "Developed and maintained web applications for clients in finance and healthcare sectors. Focused on responsive design, performance optimization, and security.",
      achievements: [
        "Led the development of a patient management system that improved operational efficiency by 40%",
        "Implemented authentication and authorization systems compliant with industry regulations",
        "Optimized application performance, reducing page load times by 60%",
        "Collaborated with UX designers to create intuitive and accessible user interfaces"
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Express", "Redis", "GraphQL"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Creations",
      period: "2018 - 2020",
      description: "Created responsive and interactive user interfaces for web applications. Collaborated with design and backend teams to implement features and improve user experience.",
      achievements: [
        "Developed a component library that improved development efficiency by 30%",
        "Implemented responsive designs that improved mobile user engagement by 45%",
        "Contributed to the adoption of modern frontend practices and tools",
        "Participated in code reviews and mentored junior developers"
      ],
      technologies: ["JavaScript", "React", "CSS/SASS", "HTML5", "Webpack", "Jest", "Storybook"]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Advanced certification validating expertise in designing distributed systems on AWS.",
      link: "https://www.aws.amazon.com/certification/"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      description: "Certification demonstrating proficiency in Kubernetes administration and operations.",
      link: "https://www.cncf.io/certification/cka/"
    },
    {
      title: "Microsoft Certified: Azure DevOps Engineer Expert",
      issuer: "Microsoft",
      date: "2022",
      description: "Expert-level certification for DevOps practices on Microsoft Azure.",
      link: "https://learn.microsoft.com/en-us/certifications/"
    },
    {
      title: "Google Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2021",
      description: "Certification validating expertise in designing, developing, and managing solutions on Google Cloud.",
      link: "https://cloud.google.com/certification/cloud-architect"
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      period: "2016 - 2018",
      description: "Specialized in Distributed Systems and Cloud Computing. Thesis on 'Optimizing Container Orchestration in Microservices Architecture'.",
      achievements: [
        "Graduated with distinction",
        "Published research paper on container orchestration optimization",
        "Teaching assistant for undergraduate programming courses",
        "Received academic scholarship for outstanding performance"
      ]
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "National Institute of Engineering",
      period: "2012 - 2016",
      description: "Comprehensive education in software development, algorithms, data structures, and computer networks.",
      achievements: [
        "Graduated with first-class honors",
        "Led the development of a campus navigation app as final year project",
        "Active member of the coding club and open source community",
        "Participated in multiple hackathons and coding competitions"
      ]
    }
  ];

  return (
    <DashboardLayout
      role="curious-visitor"
      activeTab="experience"
      title="Curious Visitor | Experience"
      description="Explore Shubham Narkhede's professional experience, education, and certifications."
    >
      <SectionTemplate
        title="Professional Experience"
        subtitle="My journey in technology and software development"
      >
        <Timeline items={experiences} />
      </SectionTemplate>

      <SectionTemplate
        title="Skills & Expertise"
        subtitle="Technical and professional competencies"
        withBackground={true}
      >
        <div className={styles.skillsSection}>
          <div className={styles.skillCategory}>
            <h3>Technical Skills</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>JavaScript/TypeScript</span>
              <span className={styles.skillTag}>React</span>
              <span className={styles.skillTag}>Node.js</span>
              <span className={styles.skillTag}>Python</span>
              <span className={styles.skillTag}>Docker</span>
              <span className={styles.skillTag}>Kubernetes</span>
              <span className={styles.skillTag}>AWS</span>
              <span className={styles.skillTag}>Azure</span>
              <span className={styles.skillTag}>Terraform</span>
              <span className={styles.skillTag}>CI/CD</span>
              <span className={styles.skillTag}>GraphQL</span>
              <span className={styles.skillTag}>MongoDB</span>
              <span className={styles.skillTag}>PostgreSQL</span>
              <span className={styles.skillTag}>Redis</span>
              <span className={styles.skillTag}>Git</span>
            </div>
          </div>
          
          <div className={styles.skillCategory}>
            <h3>Professional Skills</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>System Design</span>
              <span className={styles.skillTag}>Technical Leadership</span>
              <span className={styles.skillTag}>Project Management</span>
              <span className={styles.skillTag}>Agile Methodologies</span>
              <span className={styles.skillTag}>Problem Solving</span>
              <span className={styles.skillTag}>Technical Writing</span>
              <span className={styles.skillTag}>Mentoring</span>
              <span className={styles.skillTag}>Code Review</span>
              <span className={styles.skillTag}>Performance Optimization</span>
              <span className={styles.skillTag}>Security Best Practices</span>
            </div>
          </div>
          
          <div className={styles.skillCategory}>
            <h3>Areas of Expertise</h3>
            <div className={styles.expertiseAreas}>
              <div className={styles.expertiseArea}>
                <h4>Cloud & DevOps</h4>
                <p>
                  Expertise in designing and implementing cloud infrastructure, CI/CD pipelines, 
                  and DevOps practices that improve development efficiency and system reliability.
                </p>
              </div>
              
              <div className={styles.expertiseArea}>
                <h4>Full Stack Development</h4>
                <p>
                  Proficiency in building end-to-end web applications with modern frontend frameworks, 
                  backend services, and databases, focusing on performance and user experience.
                </p>
              </div>
              
              <div className={styles.expertiseArea}>
                <h4>System Architecture</h4>
                <p>
                  Experience in designing scalable, resilient, and maintainable software systems, 
                  with a focus on microservices architecture and distributed systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Certifications"
        subtitle="Professional certifications and credentials"
      >
        <div className={styles.certificationsGrid}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.certificationCard}>
              <div className={styles.certificationIcon}>
                <Award size={32} />
              </div>
              
              <div className={styles.certificationContent}>
                <h3 className={styles.certificationTitle}>{cert.title}</h3>
                <p className={styles.certificationIssuer}>
                  <span className={styles.issuerName}>{cert.issuer}</span>
                  <span className={styles.certificationDate}>{cert.date}</span>
                </p>
                <p className={styles.certificationDescription}>{cert.description}</p>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.certificationLink}
                >
                  <ExternalLink size={16} />
                  Verify Certification
                </a>
              </div>
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Education"
        subtitle="Academic background and qualifications"
        withBackground={true}
      >
        <div className={styles.educationSection}>
          {education.map((edu, index) => (
            <div key={index} className={styles.educationCard}>
              <div className={styles.educationIcon}>
                <Bookmark size={32} />
              </div>
              
              <div className={styles.educationContent}>
                <h3 className={styles.educationDegree}>{edu.degree}</h3>
                <p className={styles.educationInstitution}>
                  <span className={styles.institutionName}>{edu.institution}</span>
                  <span className={styles.educationPeriod}>{edu.period}</span>
                </p>
                <p className={styles.educationDescription}>{edu.description}</p>
                
                <div className={styles.educationAchievements}>
                  <h4>Key Achievements</h4>
                  <ul>
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Professional Development"
        subtitle="Continuous learning and growth"
      >
        <div className={styles.professionalDevelopmentSection}>
          <p className={styles.professionalDevelopmentIntro}>
            I believe in continuous learning and professional development. Here are some of the ways I stay 
            current with industry trends and expand my knowledge:
          </p>
          
          <div className={styles.developmentActivities}>
            <div className={styles.developmentActivity}>
              <h3>Conferences & Events</h3>
              <ul>
                <li>Regular attendee at AWS re:Invent and Google Cloud Next</li>
                <li>Speaker at local tech meetups on DevOps and cloud topics</li>
                <li>Participant in hackathons and coding competitions</li>
              </ul>
            </div>
            
            <div className={styles.developmentActivity}>
              <h3>Online Learning</h3>
              <ul>
                <li>Completed advanced courses on distributed systems and microservices architecture</li>
                <li>Regular participant in webinars on emerging technologies</li>
                <li>Active learner on platforms like Coursera, Udemy, and Pluralsight</li>
              </ul>
            </div>
            
            <div className={styles.developmentActivity}>
              <h3>Community Involvement</h3>
              <ul>
                <li>Contributor to open source projects in the cloud-native ecosystem</li>
                <li>Mentor for junior developers and career changers</li>
                <li>Active participant in online developer communities and forums</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.ctaSection}>
            <p className={styles.ctaDescription}>
              Interested in learning more about my professional background or discussing potential opportunities?
            </p>
            <Link to="/curious-visitor/contact" className={styles.ctaButton}>
              Get in Touch
            </Link>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
