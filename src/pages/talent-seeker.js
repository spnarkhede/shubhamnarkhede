import React from 'react';
import Layout from '@theme/Layout';
import { HeroSection } from '@site/src/components/HomepageFeatures';
import SkillsMatrix from '@site/src/components/SkillsMatrix';
import ResumeCenter from '@site/src/components/ResumeCenter';
import styles from './role-pages.module.css';

// Simple placeholder component for missing FeaturedSection
const FeaturedSection = () => (
  <div className="container margin-top--xl margin-bottom--xl">
    <div className="row">
      <div className="col col--10 col--offset-1">
        <h2>Featured Work</h2>
        <p>Key projects and achievements</p>
      </div>
    </div>
  </div>
);

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
                    I am a highly skilled DevOps Engineer and Full Stack Developer with over 6 years of 
                    experience in designing, developing, and maintaining scalable software solutions. 
                    My expertise spans across cloud technologies, automation, and full-stack development, 
                    with a proven track record of delivering high-quality solutions in fast-paced environments.
                  </p>
                  <p>
                    My professional journey has taken me through various roles at leading technology companies, 
                    where I've consistently demonstrated my ability to solve complex technical challenges, 
                    lead development teams, and drive innovation. I'm passionate about leveraging technology 
                    to create efficient and impactful solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <FeaturedSection />
        
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
                <h2 className={styles.sectionTitle}>Why Choose Me</h2>
                <div className={styles.sectionContent}>
                  <ul>
                    <li><strong>Technical Excellence:</strong> Deep expertise in modern technologies and best practices</li>
                    <li><strong>Problem Solving:</strong> Proven ability to tackle complex challenges and deliver innovative solutions</li>
                    <li><strong>Leadership:</strong> Experience leading development teams and mentoring junior developers</li>
                    <li><strong>Adaptability:</strong> Quick learner who thrives in dynamic, fast-paced environments</li>
                    <li><strong>Communication:</strong> Strong communication skills with ability to translate technical concepts for non-technical stakeholders</li>
                    <li><strong>Continuous Learning:</strong> Committed to staying current with industry trends and emerging technologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}