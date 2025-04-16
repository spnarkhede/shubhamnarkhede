import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { ArrowRight, Code, Terminal, Database, Server } from 'lucide-react';

export default function TechEnthusiastIntroduction() {
  const techStack = {
    "Frontend": [
      "React", "TypeScript", "Next.js", "Redux", "Styled Components", "Tailwind CSS", "Jest", "React Testing Library"
    ],
    "Backend": [
      "Node.js", "Express", "GraphQL", "REST APIs", "Java", "Spring Boot", "Python", "Django"
    ],
    "DevOps & Cloud": [
      "AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions", "Jenkins", "Prometheus", "Grafana"
    ],
    "Database & Storage": [
      "MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "DynamoDB", "S3", "Firebase"
    ]
  };

  return (
    <DashboardLayout
      role="tech-enthusiast"
      activeTab="introduction"
      title="Tech Enthusiast | Introduction"
      description="Technical overview of Shubham Narkhede's skills, tech stack, and development approach"
    >
      <SectionTemplate
        title="Technical Profile"
        subtitle="Full Stack Developer & DevOps Engineer"
      >
        <div className={styles.introductionContent}>
          <div className={styles.profileImageContainer}>
            <img 
              src="/img/profilesquare.png" 
              alt="Shubham Narkhede" 
              className={styles.profileImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src="/img/default-profile.png";
              }}
            />
          </div>
          
          <div className={styles.profileSummary}>
            <p className={styles.summaryText}>
              I'm a Full Stack Developer and DevOps Engineer with a passion for building scalable, high-performance 
              applications and implementing efficient infrastructure solutions. My approach combines clean code principles 
              with modern development practices to create maintainable and robust software.
            </p>
            
            <p className={styles.summaryText}>
              With experience across the entire development lifecycle, I specialize in JavaScript/TypeScript ecosystems, 
              cloud infrastructure, and containerization technologies. I'm committed to continuous learning and staying 
              current with emerging technologies and best practices.
            </p>
            
            <div className={styles.techStack}>
              <h3 className={styles.techStackTitle}>Tech Stack</h3>
              <div className={styles.techCategories}>
                <div className={styles.techCategory}>
                  <h4 className={styles.categoryTitle}>
                    <Code size={16} /> Frontend
                  </h4>
                  <div className={styles.techList}>
                    {techStack["Frontend"].map((tech, index) => (
                      <span key={index} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.categoryTitle}>
                    <Terminal size={16} /> Backend
                  </h4>
                  <div className={styles.techList}>
                    {techStack["Backend"].map((tech, index) => (
                      <span key={index} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.categoryTitle}>
                    <Server size={16} /> DevOps & Cloud
                  </h4>
                  <div className={styles.techList}>
                    {techStack["DevOps & Cloud"].map((tech, index) => (
                      <span key={index} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.categoryTitle}>
                    <Database size={16} /> Database & Storage
                  </h4>
                  <div className={styles.techList}>
                    {techStack["Database & Storage"].map((tech, index) => (
                      <span key={index} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.ctaButtons}>
              <Link to="/tech-enthusiast/projects" className={styles.primaryButton}>
                View Projects
                <ArrowRight size={16} />
              </Link>
              <Link to="/tech-enthusiast/code-samples" className={styles.secondaryButton}>
                Code Samples
              </Link>
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Development Philosophy"
        subtitle="My approach to software development and engineering"
        withBackground={true}
      >
        <div className={styles.philosophyGrid}>
          <div className={styles.philosophyCard}>
            <h3>Clean Code & Best Practices</h3>
            <p>
              I believe that code should be readable, maintainable, and follow established patterns and practices. 
              I prioritize writing self-documenting code with meaningful variable names, appropriate comments, 
              and consistent formatting. I follow SOLID principles and aim for high test coverage.
            </p>
          </div>
          
          <div className={styles.philosophyCard}>
            <h3>Performance & Scalability</h3>
            <p>
              I design systems with performance and scalability in mind from the beginning. This includes 
              efficient algorithms, optimized database queries, caching strategies, and horizontally scalable 
              architectures. I regularly profile and benchmark code to identify bottlenecks.
            </p>
          </div>
          
          <div className={styles.philosophyCard}>
            <h3>Security & Reliability</h3>
            <p>
              Security is not an afterthought in my development process. I implement secure coding practices, 
              follow the principle of least privilege, and stay informed about common vulnerabilities. 
              I design systems with redundancy and fault tolerance to ensure high reliability.
            </p>
          </div>
          
          <div className={styles.philosophyCard}>
            <h3>User-Centered Design</h3>
            <p>
              Technical excellence must be balanced with user needs. I collaborate closely with designers 
              and product managers to ensure that the technical implementation supports a great user experience. 
              I consider accessibility, performance, and usability in all my work.
            </p>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Current Learning Focus"
        subtitle="Technologies and concepts I'm currently exploring"
      >
        <div className={styles.learningFocusGrid}>
          <div className={styles.learningFocusCard}>
            <h3>Rust Programming Language</h3>
            <p>
              I'm exploring Rust for its performance, memory safety, and concurrency features. 
              I'm particularly interested in its potential for systems programming and WebAssembly applications.
            </p>
          </div>
          
          <div className={styles.learningFocusCard}>
            <h3>Machine Learning Operations (MLOps)</h3>
            <p>
              I'm learning about the intersection of machine learning and DevOps, focusing on 
              building robust pipelines for training, deploying, and monitoring ML models in production.
            </p>
          </div>
          
          <div className={styles.learningFocusCard}>
            <h3>Web3 & Blockchain Development</h3>
            <p>
              I'm exploring decentralized application development, smart contracts, and the 
              technical foundations of blockchain technologies to understand their potential applications.
            </p>
          </div>
          
          <div className={styles.learningFocusCard}>
            <h3>Edge Computing</h3>
            <p>
              I'm investigating edge computing architectures and how they can be leveraged to 
              reduce latency, improve reliability, and enhance privacy in distributed applications.
            </p>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
