import React from 'react';
import Layout from '@theme/Layout';
import { HeroSection } from '@site/src/components/HomepageFeatures';
import styles from './role-pages.module.css';

// Simple placeholder component for missing LatestBooks
const LatestBooks = () => (
  <div className="container margin-top--xl margin-bottom--xl">
    <div className="row">
      <div className="col col--10 col--offset-1">
        <h2>Latest Book Reviews</h2>
        <p>Books that have influenced my thinking</p>
      </div>
    </div>
  </div>
);

export default function CuriousVisitor() {
  return (
    <Layout
      title="For Curious Visitors"
      description="General information for visitors interested in learning more about Shubham Narkhede's background, interests, and professional journey."
    >
      <div className={styles.rolePageHeader}>
        <div className="container">
          <h1 className={styles.rolePageTitle}>For Curious Visitors</h1>
          <p className={styles.rolePageDescription}>
            Welcome! This page provides a general overview of my background, interests, and professional journey.
            Feel free to explore and learn more about who I am beyond the technical skills.
          </p>
        </div>
      </div>
      
      <main>
        <HeroSection />
        
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <div className={styles.sectionContent}>
                  <p>
                    I'm Shubham Narkhede, a DevOps Engineer and Full Stack Developer with a passion for creating 
                    efficient, scalable, and user-friendly solutions. Beyond my technical expertise, I'm a 
                    continuous learner who enjoys exploring various subjects through reading, experimenting 
                    with new technologies, and connecting with like-minded individuals.
                  </p>
                  <p>
                    My journey in technology has been driven by curiosity and a desire to solve complex problems. 
                    I believe in the power of technology to improve lives and create positive change. This belief 
                    motivates me to stay current with industry trends and continuously expand my skill set.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Professional Journey</h2>
                <div className={styles.sectionContent}>
                  <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineMarker}></div>
                      <div className={styles.timelineContent}>
                        <h3>Senior DevOps Engineer</h3>
                        <p className={styles.timelinePeriod}>2022 - Present</p>
                        <p>
                          Currently leading DevOps initiatives and cloud infrastructure projects, 
                          focusing on automation, scalability, and security.
                        </p>
                      </div>
                    </div>
                    
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineMarker}></div>
                      <div className={styles.timelineContent}>
                        <h3>Full Stack Developer</h3>
                        <p className={styles.timelinePeriod}>2020 - 2022</p>
                        <p>
                          Developed and maintained full-stack applications using modern frameworks 
                          and technologies, with a focus on user experience and performance.
                        </p>
                      </div>
                    </div>
                    
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineMarker}></div>
                      <div className={styles.timelineContent}>
                        <h3>Software Developer</h3>
                        <p className={styles.timelinePeriod}>2018 - 2020</p>
                        <p>
                          Developed and maintained web applications using JavaScript frameworks, 
                          collaborated with cross-functional teams, and implemented responsive designs.
                        </p>
                      </div>
                    </div>
                    
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineMarker}></div>
                      <div className={styles.timelineContent}>
                        <h3>Education & Early Career</h3>
                        <p className={styles.timelinePeriod}>2014 - 2018</p>
                        <p>
                          Completed my education in Computer Science and began my professional journey 
                          with internships and entry-level positions in software development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <LatestBooks />
        
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Interests & Hobbies</h2>
                <div className={styles.sectionContent}>
                  <p>
                    Beyond my professional work, I have a wide range of interests that keep me inspired 
                    and motivated. I'm an avid reader, particularly drawn to books on technology, business, 
                    psychology, and personal development. I also enjoy experimenting with new programming 
                    languages and frameworks in my spare time.
                  </p>
                  <p>
                    I believe in the importance of work-life balance and make time for activities that 
                    recharge my creativity and perspective. Whether it's exploring new places, trying 
                    different cuisines, or having meaningful conversations with interesting people, 
                    I'm always looking for new experiences that broaden my understanding of the world.
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