import React from 'react';
import Layout from '@theme/Layout';
import { HeroSection, FeaturedSection } from '@site/src/components/HomepageFeatures';
import SkillsMatrix from '@site/src/components/SkillsMatrix';
import ResumeCenter from '@site/src/components/ResumeCenter';
import styles from './role-pages.module.css';

export default function TalentSeeker() {
  return (
    <Layout
      title="For Recruiters & Hiring Managers"
      description="Information for recruiters and hiring managers about Shubham Narkhede's professional experience, skills, and qualifications."
    >
      <div className={styles.rolePageHeader}>
        <div className="container">
          <h1 className={styles.rolePageTitle}>For Talent Seekers</h1>
          <p className={styles.rolePageDescription}>
            Welcome, recruiters and hiring managers. This page highlights my professional experience, 
            skills, and qualifications to help you evaluate my fit for your organization.
          </p>
        </div>
      </div>
      
      <main>
        <HeroSection />
        
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Professional Summary</h2>
                <div className={styles.sectionContent}>
                  <p>
                    I am a DevOps Engineer and Full Stack Developer with over 5 years of experience 
                    in designing, implementing, and maintaining scalable software solutions. My expertise 
                    spans the entire software development lifecycle, from requirements gathering and 
                    architecture design to deployment and monitoring.
                  </p>
                  <p>
                    My technical skills include proficiency in cloud technologies (AWS, Azure), containerization 
                    (Docker, Kubernetes), CI/CD pipelines, and full-stack development using modern frameworks. 
                    I have a proven track record of delivering high-quality solutions that meet business 
                    requirements while adhering to best practices in security, performance, and scalability.
                  </p>
                  <p>
                    I thrive in collaborative environments where I can leverage my technical expertise 
                    and problem-solving abilities to drive innovation and deliver value. My communication 
                    skills and ability to translate complex technical concepts into understandable terms 
                    make me effective at working with cross-functional teams and stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <SkillsMatrix />
            </div>
          </div>
        </div>
        
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <ResumeCenter />
            </div>
          </div>
        </div>
        
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Why Hire Me</h2>
                <div className={styles.sectionContent}>
                  <div className={styles.valuePropositionGrid}>
                    <div className={styles.valuePropositionCard}>
                      <h3>Technical Excellence</h3>
                      <p>
                        Strong foundation in software engineering principles with expertise in 
                        modern technologies and frameworks. Continuous learner who stays updated 
                        with industry trends and best practices.
                      </p>
                    </div>
                    
                    <div className={styles.valuePropositionCard}>
                      <h3>Problem Solver</h3>
                      <p>
                        Analytical thinker with a proven ability to tackle complex challenges and 
                        develop innovative solutions. Approaches problems methodically while 
                        maintaining focus on business objectives.
                      </p>
                    </div>
                    
                    <div className={styles.valuePropositionCard}>
                      <h3>Team Collaborator</h3>
                      <p>
                        Effective communicator who works well in cross-functional teams. Shares 
                        knowledge, mentors junior team members, and contributes positively to 
                        team culture and productivity.
                      </p>
                    </div>
                    
                    <div className={styles.valuePropositionCard}>
                      <h3>Delivery Focused</h3>
                      <p>
                        Committed to delivering high-quality work on time and within scope. 
                        Balances technical excellence with practical considerations to ensure 
                        business value is realized.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.ctaSection}>
          <div className="container">
            <h2 className={styles.ctaTitle}>Interested in discussing opportunities?</h2>
            <p className={styles.ctaDescription}>
              I'm open to discussing how my skills and experience can benefit your organization.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryButton}>Contact Me</a>
              <a href="/Portfolio/Resume" className={styles.secondaryButton}>View Full Resume</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
