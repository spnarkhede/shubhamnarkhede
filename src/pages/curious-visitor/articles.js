import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import Link from '@docusaurus/Link';

export default function CuriousVisitorArticles() {
  const articles = [
    {
      title: "The AI Revolution: Transforming Industries in 2025",
      date: "March 15, 2025",
      readTime: "12 min read",
      excerpt: "An in-depth analysis of how artificial intelligence is reshaping major industries and what it means for our future.",
      tags: ["AI", "Machine Learning", "Industry Trends"],
      link: "/articles/ai-revolution-2025"
    },
    {
      title: "Future of Jobs Report 2025",
      date: "February 28, 2025",
      readTime: "15 min read",
      excerpt: "Examining the changing landscape of employment and skills in the age of automation and artificial intelligence.",
      tags: ["Career Development", "Future of Work", "Skills"],
      link: "/articles/future-of-jobs-report-2025"
    },
    {
      title: "Generative AI in the Enterprise",
      date: "January 20, 2025",
      readTime: "13 min read",
      excerpt: "A practical look at how enterprises are implementing generative AI for tangible business value, with case studies and implementation strategies.",
      tags: ["Generative AI", "Enterprise", "Implementation"],
      link: "/articles/generative-ai-enterprise"
    },
    {
      title: "Quantum Computing for Business",
      date: "December 10, 2024",
      readTime: "14 min read",
      excerpt: "Exploration of quantum computing's potential business applications and timeline for adoption across different industries.",
      tags: ["Quantum Computing", "Emerging Tech", "Business Strategy"],
      link: "/articles/quantum-computing-business"
    },
    {
      title: "The Evolution of DevOps: From Buzzword to Business Necessity",
      date: "November 5, 2024",
      readTime: "10 min read",
      excerpt: "How DevOps has transformed from a trendy concept to an essential practice for modern software development and delivery.",
      tags: ["DevOps", "Software Development", "Organizational Culture"],
      link: "/articles/evolution-of-devops"
    },
    {
      title: "Sustainable Technology: Building for the Future",
      date: "October 18, 2024",
      readTime: "11 min read",
      excerpt: "Exploring how technology companies are addressing environmental concerns and building more sustainable products and services.",
      tags: ["Sustainability", "Green Tech", "Environmental Impact"],
      link: "/articles/sustainable-technology"
    },
    {
      title: "The Psychology of Productivity: Working Smarter in the Digital Age",
      date: "September 30, 2024",
      readTime: "9 min read",
      excerpt: "Understanding the cognitive science behind productivity and applying it to our increasingly digital work environments.",
      tags: ["Productivity", "Psychology", "Work Culture"],
      link: "/articles/psychology-of-productivity"
    },
    {
      title: "Building a Personal Knowledge Management System",
      date: "August 15, 2024",
      readTime: "8 min read",
      excerpt: "A practical guide to creating a system for capturing, organizing, and retrieving information in an age of information overload.",
      tags: ["Knowledge Management", "Personal Development", "Tools"],
      link: "/articles/personal-knowledge-management"
    }
  ];

  const featuredArticle = articles[0]; // The first article is featured

  return (
    <DashboardLayout
      role="curious-visitor"
      activeTab="articles"
      title="Curious Visitor | Articles"
      description="Read articles by Shubham Narkhede on technology, industry trends, and personal development."
    >
      <SectionTemplate
        title="Articles & Insights"
        subtitle="Thoughts on technology, industry trends, and personal development"
      >
        <div className={styles.featuredArticleSection}>
          <div className={styles.featuredArticleCard}>
            <div className={styles.featuredBadge}>Featured</div>
            <h2 className={styles.featuredArticleTitle}>{featuredArticle.title}</h2>
            
            <div className={styles.articleMeta}>
              <span className={styles.articleDate}>
                <Calendar size={14} />
                {featuredArticle.date}
              </span>
              <span className={styles.articleReadTime}>
                <Clock size={14} />
                {featuredArticle.readTime}
              </span>
            </div>
            
            <p className={styles.featuredArticleExcerpt}>{featuredArticle.excerpt}</p>
            
            <div className={styles.articleTags}>
              {featuredArticle.tags.map((tag, index) => (
                <span key={index} className={styles.articleTag}>
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
            
            <Link to={featuredArticle.link} className={styles.readMoreLink}>
              Read Full Article
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        
        <div className={styles.articlesGrid}>
          {articles.slice(1).map((article, index) => (
            <div key={index} className={styles.articleCard}>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              
              <div className={styles.articleMeta}>
                <span className={styles.articleDate}>
                  <Calendar size={14} />
                  {article.date}
                </span>
                <span className={styles.articleReadTime}>
                  <Clock size={14} />
                  {article.readTime}
                </span>
              </div>
              
              <p className={styles.articleExcerpt}>{article.excerpt}</p>
              
              <div className={styles.articleTags}>
                {article.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.articleTag}>
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link to={article.link} className={styles.readMoreLink}>
                Read Full Article
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Popular Topics"
        subtitle="Explore articles by subject area"
        withBackground={true}
      >
        <div className={styles.topicsSection}>
          <div className={styles.topicsGrid}>
            <div className={styles.topicCard}>
              <h3 className={styles.topicTitle}>Artificial Intelligence</h3>
              <p className={styles.topicDescription}>
                Explorations of AI technologies, applications, and implications for society and business.
              </p>
              <Link to="/tags/ai" className={styles.topicLink}>
                View Articles
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className={styles.topicCard}>
              <h3 className={styles.topicTitle}>Future of Work</h3>
              <p className={styles.topicDescription}>
                Analysis of changing work patterns, skills, and career development in the digital age.
              </p>
              <Link to="/tags/future-of-work" className={styles.topicLink}>
                View Articles
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className={styles.topicCard}>
              <h3 className={styles.topicTitle}>Technology Trends</h3>
              <p className={styles.topicDescription}>
                Insights on emerging technologies and their potential impact on industries and society.
              </p>
              <Link to="/tags/technology-trends" className={styles.topicLink}>
                View Articles
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className={styles.topicCard}>
              <h3 className={styles.topicTitle}>Personal Development</h3>
              <p className={styles.topicDescription}>
                Strategies and insights for continuous learning, productivity, and personal growth.
              </p>
              <Link to="/tags/personal-development" className={styles.topicLink}>
                View Articles
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Newsletter"
        subtitle="Stay updated with my latest articles and insights"
      >
        <div className={styles.newsletterSection}>
          <p className={styles.newsletterDescription}>
            Subscribe to my newsletter to receive new articles directly in your inbox. I share insights on 
            technology trends, career development, and personal growth. No spam, just valuable content.
          </p>
          
          <div className={styles.newsletterFormContainer}>
            <form className={styles.newsletterForm}>
              <div className={styles.formGroup}>
                <label htmlFor="subscriberName" className={styles.formLabel}>Name</label>
                <input 
                  type="text" 
                  id="subscriberName" 
                  className={styles.formInput} 
                  placeholder="Your name"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subscriberEmail" className={styles.formLabel}>Email Address</label>
                <input 
                  type="email" 
                  id="subscriberEmail" 
                  className={styles.formInput} 
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.checkboxLabel}>
                  <input 
                    type="checkbox" 
                    className={styles.formCheckbox} 
                  />
                  I agree to receive occasional emails with articles and insights. You can unsubscribe at any time.
                </label>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Subscribe
              </button>
            </form>
          </div>
          
          <p className={styles.newsletterNote}>
            Your privacy is important to me. I will never share your information with third parties.
          </p>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
