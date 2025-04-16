import React from 'react';
import Layout from '@theme/Layout';
import { HeroSection } from '@site/src/components/HomepageFeatures';
import ArtGallery from '@site/src/components/ArtGallery';
import styles from './role-pages.module.css';

export default function GrowthPartner() {
  // Sample artwork data - in a real implementation, this could come from a data file or API
  const artworks = [
    {
      id: 1,
      title: 'Abstract Digital Composition',
      description: 'A digital exploration of form and color, created using digital painting techniques.',
      image: '/img/art/placeholder-art-1.jpg',
      medium: 'Digital',
      year: '2024'
    },
    {
      id: 2,
      title: 'Watercolor Landscape',
      description: 'A serene landscape painted with watercolors, capturing the tranquility of nature.',
      image: '/img/art/placeholder-art-2.jpg',
      medium: 'Watercolor on paper',
      year: '2023'
    },
    {
      id: 3,
      title: 'Pencil Portrait Study',
      description: 'A detailed portrait study created with graphite pencils, focusing on light and shadow.',
      image: '/img/art/placeholder-art-3.jpg',
      medium: 'Graphite on paper',
      year: '2023'
    },
    {
      id: 4,
      title: 'Mixed Media Composition',
      description: 'An experimental piece combining various media and techniques to create texture and depth.',
      image: '/img/art/placeholder-art-4.jpg',
      medium: 'Mixed media',
      year: '2022'
    }
  ];

  return (
    <Layout
      title="For Collaboration Opportunities"
      description="Information for potential collaborators and partners interested in working with Shubham Narkhede on creative and professional projects."
    >
      <div className={styles.rolePageHeader}>
        <div className="container">
          <h1 className={styles.rolePageTitle}>For Growth Partners</h1>
          <p className={styles.rolePageDescription}>
            Welcome, potential collaborators and creative partners. This page highlights collaboration 
            opportunities, my creative endeavors, and areas where we might work together to create value.
          </p>
        </div>
      </div>
      
      <main>
        <HeroSection />
        
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Collaboration Opportunities</h2>
                <div className={styles.sectionContent}>
                  <p>
                    I believe in the power of collaboration to create something greater than the sum of its parts. 
                    My technical expertise, creative thinking, and problem-solving abilities can complement your 
                    vision and skills to produce exceptional results.
                  </p>
                  <p>
                    I'm particularly interested in collaborations that involve innovative technology solutions, 
                    creative projects with technical components, mentorship opportunities, and knowledge sharing 
                    initiatives. Whether you're looking for a technical partner for a creative project, a 
                    collaborator for a startup idea, or a contributor to an open-source initiative, I'd love 
                    to explore how we might work together.
                  </p>
                  <p>
                    My approach to collaboration emphasizes clear communication, mutual respect, and a shared 
                    commitment to quality. I believe the best partnerships are those where all parties bring 
                    unique value and share a vision for what they want to achieve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <ArtGallery artworks={artworks} />
            </div>
          </div>
        </div>
        
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>Partnership Areas</h2>
                <div className={styles.sectionContent}>
                  <div className={styles.partnershipGrid}>
                    <div className={styles.partnershipCard}>
                      <h3>Technical Consulting</h3>
                      <p>
                        Leverage my expertise in software development, DevOps, and cloud architecture 
                        to enhance your technical projects or provide guidance on technology decisions.
                      </p>
                    </div>
                    
                    <div className={styles.partnershipCard}>
                      <h3>Creative Collaborations</h3>
                      <p>
                        Combine my technical skills with your creative vision to build innovative 
                        digital experiences, interactive art installations, or multimedia projects.
                      </p>
                    </div>
                    
                    <div className={styles.partnershipCard}>
                      <h3>Mentorship & Education</h3>
                      <p>
                        Partner on educational initiatives, workshops, or mentorship programs 
                        that help others develop technical skills and creative problem-solving abilities.
                      </p>
                    </div>
                    
                    <div className={styles.partnershipCard}>
                      <h3>Open Source Contributions</h3>
                      <p>
                        Collaborate on open source projects that create value for the broader 
                        community while advancing technology and promoting knowledge sharing.
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
            <h2 className={styles.ctaTitle}>Let's create something amazing together</h2>
            <p className={styles.ctaDescription}>
              Have a project idea or collaboration opportunity? I'd love to hear about it and explore how we might work together.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryButton}>Start a Conversation</a>
              <a href="/Portfolio/Projects" className={styles.secondaryButton}>View My Projects</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
