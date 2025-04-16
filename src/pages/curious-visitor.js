import React from 'react';
import Layout from '@theme/Layout';
import { HeroSection } from '@site/src/components/HomepageFeatures';
import LatestBooks from '@site/src/pages/books';
import styles from './role-pages.module.css';

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
                    continuous learner who enjoys exploring new technologies, reading books across various 
                    domains, and sharing knowledge with the community.
                  </p>
                  <p>
                    My journey in technology began with a curiosity about how things work, which evolved into 
                    a career focused on building and optimizing digital solutions. I believe in the power of 
                    technology to solve real-world problems and enhance human experiences, which drives my 
                    approach to every project I undertake.
                  </p>
                  <p>
                    Outside of my professional life, I enjoy reading, exploring new ideas through books and 
                    podcasts, and occasionally creating art. I find that these diverse interests contribute to 
                    a well-rounded perspective that enhances my problem-solving abilities and creative thinking.
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
                  <div className={styles.timelineContainer}>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineMarker}></div>
                      <div className={styles.timelineContent}>
                        <h3>DevOps Engineer & Full Stack Developer</h3>
                        <p className={styles.timelinePeriod}>2020 - Present</p>
                        <p>
                          Leading DevOps initiatives and full-stack development for various projects, 
                          focusing on cloud infrastructure, CI/CD pipelines, and modern web applications.
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
                <h2 className={styles.sectionTitle}>Philosophy & Approach</h2>
                <div className={styles.sectionContent}>
                  <div className={styles.philosophyGrid}>
                    <div className={styles.philosophyCard}>
                      <h3>Continuous Learning</h3>
                      <p>
                        I believe in the power of lifelong learning and constantly expanding my knowledge 
                        across technical and non-technical domains. This curiosity drives innovation and 
                        keeps me adaptable in a rapidly changing world.
                      </p>
                    </div>
                    
                    <div className={styles.philosophyCard}>
                      <h3>User-Centered Design</h3>
                      <p>
                        Technology should serve people, not the other way around. I approach every project 
                        with a focus on the end-user experience, ensuring that solutions are not just 
                        technically sound but also intuitive and accessible.
                      </p>
                    </div>
                    
                    <div className={styles.philosophyCard}>
                      <h3>Balance of Theory & Practice</h3>
                      <p>
                        I value both theoretical understanding and practical application. Strong fundamentals 
                        provide the foundation for innovation, while hands-on experience ensures solutions 
                        work in real-world contexts.
                      </p>
                    </div>
                    
                    <div className={styles.philosophyCard}>
                      <h3>Collaborative Mindset</h3>
                      <p>
                        The best solutions emerge from diverse perspectives and collaborative efforts. 
                        I enjoy working in teams where ideas can be shared, challenged, and refined 
                        through open communication and mutual respect.
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
            <h2 className={styles.ctaTitle}>Want to know more?</h2>
            <p className={styles.ctaDescription}>
              Feel free to explore other sections of my portfolio or reach out directly.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryButton}>Contact Me</a>
              <a href="/books" className={styles.secondaryButton}>Explore Book Reviews</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
