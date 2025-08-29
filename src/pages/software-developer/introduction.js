import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { ArrowRight, Code, Database, Cloud, Terminal } from 'lucide-react';

export default function SoftwareDeveloperIntroduction() {
  return (
    <DashboardLayout
      role="software-developer"
      activeTab="introduction"
      title="Software Developer | Introduction"
      description="Technical overview of Shubham Narkhede's software development expertise and coding philosophy"
    >
      <SectionTemplate
        title="Technical Profile"
        subtitle="Full Stack Developer & DevOps Engineer with expertise in modern technologies"
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
          
          <div className={styles.profileDescription}>
            <p className={styles.leadParagraph}>
              Welcome to my technical profile! I'm a passionate software developer with 6+ years of experience 
              building scalable applications, implementing DevOps practices, and mentoring fellow developers. 
              My journey spans from frontend frameworks to cloud infrastructure, with a focus on creating 
              efficient, maintainable, and well-architected solutions.
            </p>
            
            <p>
              My technical expertise lies in modern JavaScript/TypeScript ecosystems, cloud-native development, 
              and DevOps automation. I believe in writing clean, testable code and implementing robust CI/CD 
              pipelines that enable teams to deliver value continuously and reliably.
            </p>
            
            <div className={styles.techHighlights}>
              <h3 className={styles.highlightsTitle}>Core Expertise</h3>
              <div className={styles.techGrid}>
                <div className={styles.techItem}>
                  <Code size={24} />
                  <div>
                    <h4>Frontend Development</h4>
                    <p>React, Angular, TypeScript, Next.js</p>
                  </div>
                </div>
                <div className={styles.techItem}>
                  <Database size={24} />
                  <div>
                    <h4>Backend & APIs</h4>
                    <p>Node.js, Python, GraphQL, REST</p>
                  </div>
                </div>
                <div className={styles.techItem}>
                  <Cloud size={24} />
                  <div>
                    <h4>Cloud & DevOps</h4>
                    <p>AWS, Docker, Kubernetes, Terraform</p>
                  </div>
                </div>
                <div className={styles.techItem}>
                  <Terminal size={24} />
                  <div>
                    <h4>Tools & Automation</h4>
                    <p>CI/CD, Jenkins, Git, Linux</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.ctaButtons}>
              <Link to="/software-developer/code-samples" className={styles.primaryButton}>
                View Code Samples
                <ArrowRight size={16} />
              </Link>
              <Link to="/software-developer/project-repos" className={styles.secondaryButton}>
                Browse Repositories
              </Link>
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Development Philosophy"
        subtitle="My approach to building software that matters"
        withBackground={true}
        className={styles.philosophySection}
      >
        <div className={styles.philosophyGrid}>
          <div className={styles.philosophyCard}>
            <h3>Clean Code Advocacy</h3>
            <p>
              I believe code should be self-documenting and easy to understand. I follow principles 
              like SOLID, DRY, and KISS to ensure maintainability and reduce technical debt.
            </p>
          </div>
          
          <div className={styles.philosophyCard}>
            <h3>Test-Driven Development</h3>
            <p>
              Writing tests isn't just about catching bugs—it's about designing better APIs and 
              ensuring confidence in deployments. I practice TDD and maintain high test coverage.
            </p>
          </div>
          
          <div className={styles.philosophyCard}>
            <h3>Performance Optimization</h3>
            <p>
              Performance matters for user experience and business metrics. I optimize applications 
              through profiling, caching strategies, and efficient algorithms.
            </p>
          </div>
          
          <div className={styles.philosophyCard}>
            <h3>Continuous Learning</h3>
            <p>
              Technology evolves rapidly. I stay current through open source contributions, 
              technical blogs, conferences, and experimenting with emerging technologies.
            </p>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Recent Technical Focus"
        centered={true}
        className={styles.focusAreasSection}
      >
        <p className={styles.focusText}>
          Currently exploring microservices architecture, serverless computing, and AI/ML integration 
          in web applications. Always interested in discussing technical challenges and innovative solutions.
        </p>
        
        <div className={styles.focusButtons}>
          <Link to="/software-developer/technical-skills" className={styles.nextStepButton}>
            Technical Skills Deep Dive
          </Link>
          <Link to="/software-developer/projects" className={styles.nextStepButton}>
            Project Case Studies
          </Link>
          <Link to="/articles" className={styles.nextStepButton}>
            Technical Articles
          </Link>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}