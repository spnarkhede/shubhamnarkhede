import React from 'react';
import Layout from '@theme/Layout';
import { HeroSection } from '@site/src/components/HomepageFeatures';
import styles from './role-pages.module.css';

// Simple placeholder component for missing LatestProjects
const LatestProjects = () => (
  <div className="container margin-top--xl margin-bottom--xl">
    <div className="row">
      <div className="col col--10 col--offset-1">
        <h2>Latest Projects</h2>
        <p>Technical projects and implementations</p>
      </div>
    </div>
  </div>
);

// Simple placeholder component for missing LatestArticles
const LatestArticles = () => (
  <div className="container margin-top--xl margin-bottom--xl">
    <div className="row">
      <div className="col col--10 col--offset-1">
        <h2>Latest Articles</h2>
        <p>Recent technical articles and insights</p>
      </div>
    </div>
  </div>
);

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
                <h2 className={styles.sectionTitle}>Development Philosophy</h2>
                <div className={styles.sectionContent}>
                  <p>
                    I believe in writing code that tells a story. Code should be readable by humans first, 
                    and machines second. This philosophy drives my approach to naming conventions, code structure, 
                    and documentation. I also strongly advocate for test-driven development and continuous 
                    integration practices.
                  </p>
                  <p>
                    In today's fast-paced development environment, I focus on building robust, scalable systems 
                    that can evolve with changing requirements. This means thinking about architecture patterns, 
                    choosing the right tools for the job, and always considering the long-term maintenance implications 
                    of technical decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}