import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { GitHub, Linkedin, Twitter, Mail, Book, Code, Briefcase, Heart } from 'lucide-react';
import Link from '@docusaurus/Link';

export default function CuriousVisitorIntroduction() {
  const interests = [
    {
      icon: <Code size={32} />,
      title: "Technology",
      description: "Passionate about software development, emerging technologies, and the intersection of tech and business."
    },
    {
      icon: <Book size={32} />,
      title: "Reading",
      description: "Avid reader of non-fiction books on technology, business, psychology, and personal development."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Professional Growth",
      description: "Continuously developing skills and knowledge to stay at the forefront of industry trends."
    },
    {
      icon: <Heart size={32} />,
      title: "Community",
      description: "Dedicated to sharing knowledge and contributing to the tech community through mentorship and open source."
    }
  ];

  const journeyEvents = [
    {
      year: "2018",
      title: "Started Professional Career",
      description: "Began my journey as a Software Developer, focusing on front-end technologies and UI/UX design."
    },
    {
      year: "2019",
      title: "Expanded to Full Stack Development",
      description: "Broadened my skill set to include back-end development, databases, and cloud technologies."
    },
    {
      year: "2020",
      title: "Embraced DevOps Practices",
      description: "Integrated DevOps methodologies into my workflow, focusing on automation, CI/CD, and infrastructure as code."
    },
    {
      year: "2022",
      title: "Leadership & Mentorship",
      description: "Took on leadership responsibilities and began mentoring junior developers in technical skills and career growth."
    },
    {
      year: "2023",
      title: "Specialization in Cloud Architecture",
      description: "Focused on cloud-native solutions and microservices architecture for scalable enterprise applications."
    },
    {
      year: "Present",
      title: "Continuous Learning & Innovation",
      description: "Currently exploring AI integration, serverless architectures, and contributing to open source projects."
    }
  ];

  const exploreCards = [
    {
      title: "Professional Experience",
      description: "Explore my career journey, skills, and professional achievements.",
      image: "/img/explore/experience.jpg",
      link: "/curious-visitor/experience"
    },
    {
      title: "Portfolio Projects",
      description: "Browse through my technical projects and creative work.",
      image: "/img/explore/projects.jpg",
      link: "/curious-visitor/portfolio"
    },
    {
      title: "Book Reviews",
      description: "Discover books I've read and my thoughts on them.",
      image: "/img/explore/books.jpg",
      link: "/curious-visitor/books"
    },
    {
      title: "Technical Articles",
      description: "Read my articles on technology, development, and industry trends.",
      image: "/img/explore/articles.jpg",
      link: "/curious-visitor/articles"
    }
  ];

  return (
    <DashboardLayout
      role="curious-visitor"
      activeTab="introduction"
      title="Curious Visitor | Introduction"
      description="Welcome to Shubham Narkhede's personal website. Learn about my background, interests, and explore my portfolio."
    >
      <div className={styles.introductionContent}>
        <div className={styles.welcomeSection}>
          <h1 className={styles.welcomeHeading}>Welcome to My Digital Space</h1>
          <h2 className={styles.welcomeSubheading}>A place to learn, explore, and connect</h2>
          <p className={styles.welcomeDescription}>
            Thank you for visiting my personal website. This space is designed to share my journey, 
            showcase my work, and connect with like-minded individuals. Whether you're here out of 
            curiosity, looking for professional insights, or seeking collaboration opportunities, 
            I hope you find something valuable.
          </p>
        </div>

        <SectionTemplate
          title="About Me"
          subtitle="Get to know who I am"
        >
          <div className={styles.profileSection}>
            <img 
              src="/img/profilesquare.png" 
              alt="Shubham Narkhede" 
              className={styles.profileImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src="/img/default-profile.png";
              }}
            />
            
            <div className={styles.profileInfo}>
              <h2 className={styles.profileName}>Shubham Narkhede</h2>
              <h3 className={styles.profileTitle}>Full Stack Developer & DevOps Engineer</h3>
              
              <p className={styles.profileBio}>
                I'm a technology enthusiast with a passion for building innovative solutions that solve 
                real-world problems. With experience spanning front-end development, back-end systems, 
                and cloud infrastructure, I bring a holistic approach to software development.
              </p>
              
              <p className={styles.profileBio}>
                Beyond coding, I enjoy reading, writing technical articles, and contributing to open source 
                projects. I believe in continuous learning and sharing knowledge with the community.
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
                <a 
                  href="mailto:contact@shubhamnarkhede.com" 
                  className={styles.socialLink}
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </SectionTemplate>

        <SectionTemplate
          title="My Interests"
          subtitle="What drives and inspires me"
          withBackground={true}
        >
          <div className={styles.interestsGrid}>
            {interests.map((interest, index) => (
              <div key={index} className={styles.interestCard}>
                <div className={styles.interestIcon}>{interest.icon}</div>
                <h3 className={styles.interestTitle}>{interest.title}</h3>
                <p className={styles.interestDescription}>{interest.description}</p>
              </div>
            ))}
          </div>
        </SectionTemplate>

        <SectionTemplate
          title="My Journey"
          subtitle="Key milestones in my professional path"
        >
          <div className={styles.journeyTimeline}>
            {journeyEvents.map((event, index) => (
              <div key={index} className={styles.journeyEvent}>
                <div className={styles.journeyEventDot}></div>
                <div className={styles.journeyEventYear}>{event.year}</div>
                <h3 className={styles.journeyEventTitle}>{event.title}</h3>
                <p className={styles.journeyEventDescription}>{event.description}</p>
              </div>
            ))}
          </div>
        </SectionTemplate>

        <SectionTemplate
          title="Explore My World"
          subtitle="Discover different aspects of my work and interests"
          withBackground={true}
        >
          <div className={styles.exploreGrid}>
            {exploreCards.map((card, index) => (
              <div key={index} className={styles.exploreCard}>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className={styles.exploreCardImage}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src="/img/default-explore.jpg";
                  }}
                />
                <div className={styles.exploreCardContent}>
                  <h3 className={styles.exploreCardTitle}>{card.title}</h3>
                  <p className={styles.exploreCardDescription}>{card.description}</p>
                  <Link to={card.link} className={styles.exploreCardLink}>
                    Explore Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SectionTemplate>

        <SectionTemplate
          title="Let's Connect"
          subtitle="I'm always open to interesting conversations and opportunities"
        >
          <div className={styles.ctaSection}>
            <p className={styles.ctaDescription}>
              Whether you have a question, want to discuss a potential collaboration, or just want to say hello, 
              I'd love to hear from you. Feel free to reach out through any of my social channels or use the 
              contact form.
            </p>
            <Link to="/curious-visitor/contact" className={styles.ctaButton}>
              Get in Touch
            </Link>
          </div>
        </SectionTemplate>
      </div>
    </DashboardLayout>
  );
}
