import React from 'react';
import Link from '@docusaurus/Link';
import { ChevronRight } from 'lucide-react';
import styles from './landing.module.css';

export default function Landing() {
  return (
    <div className={styles.landingWrapper}>
      <div className={styles.welcomeScreen}>
        <div className={styles.welcomeContent}>
          <div className={styles.logoContainer}>
            <img 
              src="/img/profilesquare.png"
              alt="Shubham Narkhede Logo" 
              className={styles.logo}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src="/img/profilesquare.png";
              }}
            />
          </div>
          <h1 className={styles.welcomeTitle}>Shubham Narkhede</h1>
          <p className={styles.welcomeSubtitle}>DevOps Engineer & Full Stack Developer</p>
          <p className={styles.welcomeDescription}>
            Welcome to my professional portfolio showcasing my work, expertise, and creative endeavors.
          </p>
          <Link 
            to="/navigation-guide" 
            className={styles.enterButton}
          >
            Get Started
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
