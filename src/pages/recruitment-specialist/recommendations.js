import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import RecommendationsPanel from '../../components/RecommendationsPanel';
import styles from './styles.module.css';
import { Quote, Users, MessageSquare } from 'lucide-react';

export default function RecruitmentSpecialistRecommendations() {
  // Extended recommendations data
  const professionalRecommendations = [
    {
      name: "Alex Johnson",
      title: "Senior Engineering Manager at Tech Corp",
      image: "/img/testimonials/alex.jpg",
      quote: "Shubham is an exceptional developer with a keen eye for detail. His ability to solve complex problems while maintaining clean, efficient code is remarkable. He consistently delivered high-quality work and was a valuable asset to our team.",
      rating: 5,
      date: "January 2025",
      relationship: "Direct Manager"
    },
    {
      name: "Priya Sharma",
      title: "Product Lead at InnovateX",
      image: "/img/testimonials/priya.jpg",
      quote: "Working with Shubham was a pleasure. His technical expertise combined with his understanding of user experience made him an invaluable contributor to our projects. He's proactive, communicative, and delivers results that exceed expectations.",
      rating: 5,
      date: "November 2024",
      relationship: "Project Collaborator"
    },
    {
      name: "Michael Chen",
      title: "CTO at StartupVision",
      image: "/img/testimonials/michael.jpg",
      quote: "Shubham's DevOps expertise transformed our deployment process. He implemented CI/CD pipelines that reduced our deployment time by 70% and significantly improved our system reliability. His documentation was thorough and made onboarding new team members seamless.",
      rating: 5,
      date: "August 2024",
      relationship: "Client"
    },
    {
      name: "Sarah Williams",
      title: "Frontend Team Lead at WebSolutions",
      image: "/img/testimonials/sarah.jpg",
      quote: "I had the pleasure of working with Shubham on a complex web application. His full-stack skills are impressive, but what really sets him apart is his ability to mentor others and share knowledge. He's not just a great developer, but a great team player.",
      rating: 5,
      date: "March 2024",
      relationship: "Colleague"
    },
    {
      name: "David Rodriguez",
      title: "VP of Engineering at CloudScale",
      image: "/img/testimonials/david.jpg",
      quote: "Shubham joined our team during a critical phase of our platform migration, and his impact was immediate. His deep understanding of cloud architecture and DevOps practices helped us overcome significant technical challenges. He's a strategic thinker who sees beyond immediate tasks to the bigger picture.",
      rating: 5,
      date: "December 2023",
      relationship: "Senior Manager"
    },
    {
      name: "Jennifer Lee",
      title: "Agile Coach at AgileMinds Consulting",
      image: "/img/testimonials/jennifer.jpg",
      quote: "As an Agile Coach working with cross-functional teams, I was impressed by Shubham's adaptability and commitment to continuous improvement. He embraced agile methodologies and often suggested process improvements that benefited the entire team. His technical skills are matched by his excellent collaboration abilities.",
      rating: 5,
      date: "October 2023",
      relationship: "Agile Coach"
    }
  ];

  return (
    <DashboardLayout
      role="recruitment-specialist"
      activeTab="recommendations"
      title="Recruitment Specialist | Recommendations"
      description="Professional recommendations and testimonials for Shubham Narkhede"
    >
      <SectionTemplate
        title="Professional Recommendations"
        subtitle="Testimonials from managers, colleagues, and clients"
      >
        <div className={styles.recommendationsIntro}>
          <p>
            Below are recommendations from professionals I've worked with throughout my career. 
            These testimonials reflect my work ethic, technical abilities, and collaborative approach.
          </p>
        </div>
        
        <div className={styles.featuredRecommendation}>
          <div className={styles.featuredRecommendationContent}>
            <div className={styles.quoteIconLarge}>
              <Quote size={40} />
            </div>
            <blockquote className={styles.featuredQuote}>
              Shubham is one of the most talented and dedicated engineers I've had the pleasure to work with. 
              His technical expertise is exceptional, but what truly sets him apart is his ability to 
              understand business needs and translate them into elegant technical solutions. He's a natural 
              leader who elevates the entire team.
            </blockquote>
            <div className={styles.featuredAuthor}>
              <img 
                src="/img/testimonials/featured.jpg" 
                alt="James Wilson" 
                className={styles.featuredAuthorImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/default-avatar.png";
                }}
              />
              <div className={styles.featuredAuthorInfo}>
                <h3>James Wilson</h3>
                <p>Director of Engineering at Enterprise Solutions</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.recommendationsCarousel}>
          <RecommendationsPanel recommendations={professionalRecommendations} />
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Team Collaboration"
        subtitle="Insights into my team dynamics and collaborative approach"
        withBackground={true}
      >
        <div className={styles.collaborationSection}>
          <div className={styles.collaborationCard}>
            <div className={styles.collaborationIcon}>
              <Users size={24} />
            </div>
            <h3 className={styles.collaborationTitle}>Leadership Style</h3>
            <p className={styles.collaborationText}>
              I lead by example and focus on empowering team members to take ownership of their work. 
              My approach emphasizes clear communication, setting realistic expectations, and providing 
              the support needed for success. I believe in recognizing contributions and fostering a 
              culture of continuous improvement.
            </p>
          </div>
          
          <div className={styles.collaborationCard}>
            <div className={styles.collaborationIcon}>
              <MessageSquare size={24} />
            </div>
            <h3 className={styles.collaborationTitle}>Communication Approach</h3>
            <p className={styles.collaborationText}>
              I prioritize transparent and timely communication, adapting my style to different stakeholders. 
              With technical teams, I focus on clarity and precision; with non-technical stakeholders, 
              I translate complex concepts into accessible language. I'm proactive about providing updates 
              and addressing concerns before they become issues.
            </p>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="References"
        subtitle="Professional references available upon request"
        centered={true}
        className={styles.referencesSection}
      >
        <p className={styles.referencesText}>
          Additional professional references are available upon request. These include former managers, 
          colleagues, and clients who can speak to my technical abilities, work ethic, and collaborative approach.
        </p>
        <a href="/recruitment-specialist/contact" className={styles.referencesButton}>
          Request References
        </a>
      </SectionTemplate>
    </DashboardLayout>
  );
}
