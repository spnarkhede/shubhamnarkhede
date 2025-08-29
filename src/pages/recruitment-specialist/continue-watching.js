import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import LatestArticles from '../../components/LatestArticles';
import ContinueExploring from '../../components/ContinueExploring';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { BookOpen, PlayCircle, ExternalLink, ArrowRight } from 'lucide-react';

export default function RecruitmentSpecialistContinueWatching() {
  const contentRecommendations = [
    {
      id: 'technical-articles',
      title: 'Technical Articles',
      description: 'In-depth articles on AI, DevOps, and emerging technologies',
      type: 'articles',
      items: [
        {
          title: 'The AI Revolution in 2025: Transforming Industries',
          url: '/articles/ai-revolution-2025',
          readTime: '8 min read',
          category: 'AI & Technology'
        },
        {
          title: 'Future of Jobs Report 2025: Skills in Demand',
          url: '/articles/future-of-jobs-report-2025',
          readTime: '12 min read',
          category: 'Career Development'
        },
        {
          title: 'Generative AI in Enterprise: Implementation Guide',
          url: '/articles/generative-ai-enterprise',
          readTime: '10 min read',
          category: 'Enterprise Technology'
        }
      ],
      icon: <BookOpen size={24} />,
      ctaText: 'Browse All Articles',
      ctaUrl: '/articles'
    },
    {
      id: 'book-reviews',
      title: 'Book Reviews & Insights',
      description: 'Curated book reviews with podcast discussions on professional development',
      type: 'books',
      items: [
        {
          title: 'Atomic Habits by James Clear',
          url: '/books/atomic-habits',
          readTime: 'Book Review',
          category: 'Personal Development',
          hasAudio: true
        },
        {
          title: 'The DevOps Handbook',
          url: '/books/devops-handbook',
          readTime: 'Book Review',
          category: 'Technical Leadership',
          hasAudio: true
        },
        {
          title: 'Lean Startup by Eric Ries',
          url: '/books/lean-startup',
          readTime: 'Book Review',
          category: 'Business Strategy',
          hasAudio: false
        }
      ],
      icon: <BookOpen size={24} />,
      ctaText: 'View All Book Reviews',
      ctaUrl: '/books'
    },
    {
      id: 'professional-blog',
      title: 'Professional Blog Posts',
      description: 'Personal insights and experiences from my professional journey',
      type: 'blog',
      items: [
        {
          title: 'Five Years in Tech: Lessons Learned',
          url: '/blog/2023/03/15/five-years-in-tech',
          readTime: '6 min read',
          category: 'Career Reflection'
        },
        {
          title: 'DevOps at Robert Bosch: Scaling Enterprise Solutions',
          url: '/blog/2022/08/20/devops-at-robert-bosch',
          readTime: '9 min read',
          category: 'DevOps Experience'
        },
        {
          title: 'Leadership Mindset in Technology',
          url: '/blog/2021/03/08/leadershipmindset',
          readTime: '7 min read',
          category: 'Leadership'
        }
      ],
      icon: <PlayCircle size={24} />,
      ctaText: 'Read More Blog Posts',
      ctaUrl: '/blog'
    }
  ];

  const quickLinks = [
    {
      title: 'Download Resume',
      description: 'Get my latest resume in PDF format',
      url: '/recruitment-specialist/resume',
      icon: <ExternalLink size={20} />
    },
    {
      title: 'View Projects',
      description: 'Explore my technical projects and case studies',
      url: '/recruitment-specialist/projects',
      icon: <ExternalLink size={20} />
    },
    {
      title: 'Contact Information',
      description: 'Get in touch for opportunities or questions',
      url: '/recruitment-specialist/contact',
      icon: <ExternalLink size={20} />
    },
    {
      title: 'Professional References',
      description: 'View recommendations from colleagues',
      url: '/recruitment-specialist/recommendations',
      icon: <ExternalLink size={20} />
    }
  ];

  return (
    <DashboardLayout
      role="recruitment-specialist"
      activeTab="continue-watching"
      title="Recruitment Specialist | Continue Exploring"
      description="Additional content and resources for recruitment professionals"
    >
      <SectionTemplate
        title="Continue Exploring"
        subtitle="Discover more about my professional journey, insights, and technical expertise"
      >
        <div className={styles.continueWatchingIntro}>
          <p className={styles.introText}>
            Thank you for exploring my professional profile. Here you'll find additional content 
            including technical articles, book reviews, blog posts, and insights that showcase 
            my thought leadership and continuous learning approach.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {contentRecommendations.map((section) => (
            <div key={section.id} className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>{section.icon}</div>
                <div>
                  <h3 className={styles.sectionTitle}>{section.title}</h3>
                  <p className={styles.sectionDescription}>{section.description}</p>
                </div>
              </div>

              <div className={styles.contentItems}>
                {section.items.map((item, index) => (
                  <div key={index} className={styles.contentItem}>
                    <div className={styles.itemContent}>
                      <h4 className={styles.itemTitle}>
                        <Link to={item.url}>{item.title}</Link>
                      </h4>
                      <div className={styles.itemMeta}>
                        <span className={styles.itemCategory}>{item.category}</span>
                        <span className={styles.itemReadTime}>{item.readTime}</span>
                        {item.hasAudio && (
                          <span className={styles.audioIndicator}>
                            <PlayCircle size={14} /> Audio Available
                          </span>
                        )}
                      </div>
                    </div>
                    <Link to={item.url} className={styles.itemLink}>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                ))}
              </div>

              <div className={styles.sectionFooter}>
                <Link to={section.ctaUrl} className={styles.sectionCta}>
                  {section.ctaText}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Quick Access"
        subtitle="Direct links to key sections for easy navigation"
        withBackground={true}
        className={styles.quickLinksSection}
      >
        <div className={styles.quickLinksGrid}>
          {quickLinks.map((link, index) => (
            <Link key={index} to={link.url} className={styles.quickLinkCard}>
              <div className={styles.quickLinkIcon}>{link.icon}</div>
              <div className={styles.quickLinkContent}>
                <h4 className={styles.quickLinkTitle}>{link.title}</h4>
                <p className={styles.quickLinkDescription}>{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Stay Connected"
        centered={true}
        className={styles.stayConnectedSection}
      >
        <p className={styles.stayConnectedText}>
          For the latest updates on my professional journey, technical insights, and new content, 
          feel free to connect with me on professional platforms or subscribe to my newsletter.
        </p>
        
        <div className={styles.socialLinks}>
          <a 
            href="https://linkedin.com/in/spnarkhede" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/spnarkhede" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
          <a 
            href="mailto:shubhamnarkhede@gmail.com" 
            className={styles.socialLink}
          >
            Email
          </a>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}