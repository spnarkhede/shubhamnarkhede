import React from 'react';
import Layout from '@theme/Layout';
import { HeroSection } from '@site/src/components/HomepageFeatures';
import LatestProjects from '@site/src/pages/Portfolio/Projects';
import LatestArticles from '@site/src/components/LatestArticles';
import styles from './role-pages.module.css';

export default function TechEnthusiast() {
  return (
    <Layout
      title="For Developers & Tech Professionals"
      description="Technical information for developers and tech professionals about Shubham Narkhede's projects, technical articles, and coding expertise."
    >
      <div className={styles.rolePageHeader}>
        <div className="container">
          <h1 className={styles.rolePageTitle}>For Tech Enthusiasts</h1>
          <p className={styles.rolePageDescription}>
            Welcome, fellow developers and tech professionals. This page highlights my technical projects, 
            coding expertise, and in-depth articles on various technology topics.
          </p>
        </div>
      </div>
      
      <main>
        <HeroSection />
        
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Technical Background</h2>
                <div className={styles.sectionContent}>
                  <p>
                    My journey in technology began with a strong foundation in computer science fundamentals, 
                    which I've built upon through continuous learning and practical application. I specialize 
                    in DevOps practices, cloud architecture, and full-stack development, with a particular 
                    focus on creating scalable and maintainable systems.
                  </p>
                  <p>
                    My technical stack includes proficiency in languages such as JavaScript/TypeScript, Python, 
                    and Go, along with frameworks like React, Angular, and Node.js. On the infrastructure side, 
                    I work extensively with Docker, Kubernetes, Terraform, and major cloud platforms (AWS, Azure).
                  </p>
                  <p>
                    I'm passionate about software craftsmanship, clean code principles, and building systems 
                    that are not only functional but also elegant and efficient. I believe in the power of 
                    automation, testing, and continuous integration to deliver high-quality software consistently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <LatestProjects />
        
        <LatestArticles />
        
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Open Source & Contributions</h2>
                <div className={styles.sectionContent}>
                  <p>
                    I'm an advocate for open source software and contribute to various projects when time permits. 
                    My contributions range from documentation improvements to feature implementations and bug fixes.
                  </p>
                  
                  <div className={styles.githubStatsContainer}>
                    <div className={styles.githubStat}>
                      <h3>GitHub Stats</h3>
                      <p>
                        Check out my GitHub profile for a more detailed look at my code, contributions, and personal projects.
                      </p>
                      <a 
                        href="https://github.com/spnarkhede" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                      >
                        View GitHub Profile
                      </a>
                    </div>
                    
                    <div className={styles.githubStat}>
                      <h3>Coding Philosophy</h3>
                      <p>
                        I believe in writing clean, maintainable code that solves real problems. My approach emphasizes:
                      </p>
                      <ul className={styles.philosophyList}>
                        <li>Readability and simplicity over cleverness</li>
                        <li>Thorough testing and documentation</li>
                        <li>Performance optimization where it matters</li>
                        <li>Continuous refactoring and improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.ctaSection}>
          <div className="container">
            <h2 className={styles.ctaTitle}>Let's connect and collaborate</h2>
            <p className={styles.ctaDescription}>
              Interested in discussing technical topics, collaborating on projects, or sharing ideas?
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryButton}>Get in Touch</a>
              <a href="https://github.com/spnarkhede" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>GitHub Profile</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
