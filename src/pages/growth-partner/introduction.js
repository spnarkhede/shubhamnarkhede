import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { GitHub, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import Link from '@docusaurus/Link';

export default function GrowthPartnerIntroduction() {
  const collaborationAreas = [
    {
      title: "Project Collaboration",
      description: "Work together on innovative projects that push boundaries and create impact. I'm open to both short-term and long-term collaborations.",
      icon: "🤝",
      link: "/growth-partner/projects"
    },
    {
      title: "Creative Partnerships",
      description: "Combine technical expertise with creative vision to build unique digital experiences and artistic endeavors.",
      icon: "💡",
      link: "/growth-partner/creative"
    },
    {
      title: "Mentorship & Learning",
      description: "Share knowledge and experiences in a mutual growth relationship. I believe in both teaching and learning from others.",
      icon: "🧠",
      link: "/growth-partner/mentorship"
    },
    {
      title: "Community Building",
      description: "Develop communities around shared interests in technology, art, and professional growth.",
      icon: "👥",
      link: "/growth-partner/community"
    }
  ];

  const growthTimeline = [
    {
      year: "2023",
      title: "DevOps Mastery & Cloud Architecture",
      description: "Focused on advanced DevOps practices and cloud architecture patterns, implementing solutions for enterprise clients."
    },
    {
      year: "2022",
      title: "Full Stack Development & UI/UX Design",
      description: "Expanded expertise in full stack development while developing a deeper understanding of user experience design principles."
    },
    {
      year: "2021",
      title: "Technical Leadership & Team Mentoring",
      description: "Took on leadership roles in technical projects and began mentoring junior developers in best practices."
    },
    {
      year: "2020",
      title: "Frontend Development & JavaScript Frameworks",
      description: "Specialized in modern JavaScript frameworks and responsive design techniques for web applications."
    },
    {
      year: "2019",
      title: "Early Career & Foundation Building",
      description: "Started professional journey in software development, focusing on building strong technical foundations."
    }
  ];

  return (
    <DashboardLayout
      role="growth-partner"
      activeTab="introduction"
      title="Growth Partner | Introduction"
      description="Learn about collaboration opportunities and partnership possibilities with Shubham Narkhede."
    >
      <div className={styles.introductionContent}>
        <div className={styles.welcomeSection}>
          <h1 className={styles.welcomeHeading}>Welcome, Growth Partner!</h1>
          <h2 className={styles.welcomeSubheading}>Let's create something amazing together</h2>
          <p className={styles.welcomeDescription}>
            I believe in the power of collaboration and shared growth. This space is designed for those looking to 
            partner on projects, exchange ideas, or explore creative ventures together. Whether you're interested in 
            technical collaboration, creative partnerships, or mutual learning opportunities, I'm excited to connect and 
            discover how we can grow together.
          </p>
        </div>

        <SectionTemplate
          title="About Me"
          subtitle="The person behind the portfolio"
        >
          <div className={styles.profileSection}>
            <img 
              src="/img/profile.jpg" 
              alt="Shubham Narkhede" 
              className={styles.profileImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/img/profile-placeholder.jpg";
              }}
            />
            
            <div className={styles.profileInfo}>
              <h2 className={styles.profileName}>Shubham Narkhede</h2>
              <h3 className={styles.profileTitle}>DevOps Engineer & Full Stack Developer</h3>
              
              <p className={styles.profileBio}>
                I'm a technology enthusiast with a passion for creating efficient, scalable, and user-friendly 
                solutions. My journey spans from frontend development to DevOps engineering, with a focus on 
                cloud technologies and modern development practices. Beyond my technical work, I'm also an avid 
                reader, amateur artist, and continuous learner who believes in the power of collaboration to 
                create meaningful impact.
              </p>
              
              <div className={styles.socialLinks}>
                <a 
                  href="https://github.com/spnarkhede" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  aria-label="GitHub"
                >
                  <GitHub size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/spnarkhede" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com/spnarkhede" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </SectionTemplate>

        <SectionTemplate
          title="Collaboration Opportunities"
          subtitle="Ways we can work together"
          withBackground={true}
        >
          <div className={styles.collaborationSection}>
            <p className={styles.collaborationDescription}>
              I'm always open to meaningful collaborations that align with my values and interests. 
              Here are some ways we might work together:
            </p>
            
            <div className={styles.collaborationGrid}>
              {collaborationAreas.map((area, index) => (
                <div key={index} className={styles.collaborationCard}>
                  <div className={styles.collaborationIcon}>{area.icon}</div>
                  <h3 className={styles.collaborationCardTitle}>{area.title}</h3>
                  <p className={styles.collaborationCardDescription}>{area.description}</p>
                  <Link to={area.link} className={styles.collaborationCardLink}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </SectionTemplate>

        <SectionTemplate
          title="My Growth Journey"
          subtitle="The path that brought me here"
        >
          <div className={styles.growthTimelineSection}>
            <p className={styles.growthTimelineDescription}>
              Growth has been a constant theme in my professional journey. Here's a brief timeline of my 
              development path:
            </p>
            
            <div className={styles.timelineContainer}>
              {growthTimeline.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineDate}>{item.year}</div>
                  <div className={styles.timelineTitle}>{item.title}</div>
                  <div className={styles.timelineDescription}>{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionTemplate>

        <SectionTemplate
          title="Let's Connect"
          subtitle="Ready to explore possibilities together?"
          withBackground={true}
        >
          <div className={styles.ctaSection}>
            <p className={styles.ctaDescription}>
              If you're interested in exploring collaboration opportunities, have a project idea, or simply want 
              to connect and exchange thoughts, I'd love to hear from you. Let's start a conversation about how 
              we might grow together.
            </p>
            
            <Link to="/growth-partner/contact" className={styles.ctaButton}>
              Get in Touch
            </Link>
          </div>
        </SectionTemplate>
      </div>
    </DashboardLayout>
  );
}
