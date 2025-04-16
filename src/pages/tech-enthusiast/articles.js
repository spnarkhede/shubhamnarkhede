import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import Link from '@docusaurus/Link';

export default function TechEnthusiastArticles() {
  const articles = [
    {
      title: "The AI Revolution: Transforming Industries in 2025",
      date: "March 15, 2025",
      readTime: "12 min read",
      excerpt: "An in-depth analysis of how artificial intelligence is reshaping major industries and what developers need to know to stay ahead of the curve.",
      tags: ["AI", "Machine Learning", "Industry Trends"],
      link: "/articles/ai-revolution-2025"
    },
    {
      title: "Microservices vs. Monoliths: Making the Right Architecture Choice",
      date: "February 28, 2025",
      readTime: "10 min read",
      excerpt: "A practical guide to choosing between microservices and monolithic architectures based on project requirements, team size, and business objectives.",
      tags: ["Architecture", "Microservices", "Best Practices"],
      link: "/articles/microservices-vs-monoliths"
    },
    {
      title: "Serverless Computing: Beyond the Hype",
      date: "January 20, 2025",
      readTime: "8 min read",
      excerpt: "An honest examination of serverless computing, including its benefits, limitations, and ideal use cases based on real-world implementations.",
      tags: ["Serverless", "Cloud Computing", "AWS Lambda"],
      link: "/articles/serverless-computing"
    },
    {
      title: "Future of Jobs Report 2025: Tech Skills in Demand",
      date: "December 10, 2024",
      readTime: "15 min read",
      excerpt: "Analysis of the World Economic Forum's Future of Jobs Report with a focus on technology skills that will be most valuable in the coming years.",
      tags: ["Career Development", "Tech Industry", "Skills"],
      link: "/articles/future-of-jobs-report-2025"
    },
    {
      title: "Optimizing React Performance: Advanced Techniques",
      date: "November 5, 2024",
      readTime: "11 min read",
      excerpt: "Deep dive into advanced React optimization techniques including memoization, code splitting, virtualization, and state management strategies.",
      tags: ["React", "Performance", "JavaScript"],
      link: "/articles/react-performance-optimization"
    },
    {
      title: "Quantum Computing for Business: Strategic Implications",
      date: "October 18, 2024",
      readTime: "14 min read",
      excerpt: "Exploration of quantum computing's potential business applications and timeline for adoption across different industries.",
      tags: ["Quantum Computing", "Emerging Tech", "Business Strategy"],
      link: "/articles/quantum-computing-business"
    },
    {
      title: "Containerization Best Practices for Production",
      date: "September 30, 2024",
      readTime: "9 min read",
      excerpt: "Practical guidelines for deploying containerized applications in production environments, focusing on security, scalability, and monitoring.",
      tags: ["Docker", "Kubernetes", "DevOps"],
      link: "/articles/containerization-best-practices"
    },
    {
      title: "Generative AI in the Enterprise: Beyond the Hype",
      date: "August 15, 2024",
      readTime: "13 min read",
      excerpt: "A practical look at how enterprises are implementing generative AI for tangible business value, with case studies and implementation strategies.",
      tags: ["Generative AI", "Enterprise", "Implementation"],
      link: "/articles/generative-ai-enterprise"
    }
  ];

  const featuredArticle = articles[0]; // The first article is featured

  return (
    <DashboardLayout
      role="tech-enthusiast"
      activeTab="articles"
      title="Tech Enthusiast | Articles"
      description="Technical articles and insights by Shubham Narkhede on software development, emerging technologies, and industry trends"
    >
      <SectionTemplate
        title="Technical Articles"
        subtitle="Insights on software development, emerging technologies, and industry trends"
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
        title="Writing Philosophy"
        subtitle="My approach to technical writing and knowledge sharing"
        withBackground={true}
      >
        <div className={styles.writingPhilosophySection}>
          <p className={styles.writingPhilosophyIntro}>
            Technical writing is an extension of my development practice. I believe in sharing knowledge to 
            help others grow and to deepen my own understanding. Here's my approach to technical writing:
          </p>
          
          <div className={styles.philosophyPoints}>
            <div className={styles.philosophyPoint}>
              <h3>Clarity and Accessibility</h3>
              <p>
                I strive to make complex technical concepts accessible to readers with different levels of expertise. 
                This means using clear language, providing context, and breaking down difficult ideas into manageable parts.
              </p>
            </div>
            
            <div className={styles.philosophyPoint}>
              <h3>Practical Application</h3>
              <p>
                My articles focus on practical application rather than pure theory. I include code examples, 
                step-by-step guides, and real-world scenarios to help readers apply concepts in their own work.
              </p>
            </div>
            
            <div className={styles.philosophyPoint}>
              <h3>Research and Accuracy</h3>
              <p>
                I thoroughly research topics before writing and verify information from multiple sources. 
                Technical accuracy is paramount, and I regularly update articles to reflect evolving best practices.
              </p>
            </div>
            
            <div className={styles.philosophyPoint}>
              <h3>Thoughtful Analysis</h3>
              <p>
                Beyond tutorials, I provide analysis and insights based on my experience. I explore trade-offs, 
                consider different perspectives, and help readers make informed decisions about technologies and approaches.
              </p>
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Topic Suggestions"
        subtitle="Have a technical topic you'd like me to write about?"
      >
        <div className={styles.topicSuggestionSection}>
          <p className={styles.topicSuggestionIntro}>
            I'm always looking for new topics to explore in my technical writing. If you have a suggestion 
            for a topic you'd like me to cover, I'd love to hear it. Your input helps me create content 
            that's valuable to the developer community.
          </p>
          
          <div className={styles.suggestionFormContainer}>
            <form className={styles.suggestionForm}>
              <div className={styles.formGroup}>
                <label htmlFor="topicTitle" className={styles.formLabel}>Topic Title</label>
                <input 
                  type="text" 
                  id="topicTitle" 
                  className={styles.formInput} 
                  placeholder="e.g., Implementing GraphQL Federation in Microservices"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="topicDescription" className={styles.formLabel}>Brief Description</label>
                <textarea 
                  id="topicDescription" 
                  className={styles.formTextarea} 
                  placeholder="What specific aspects of this topic would you like to see covered?"
                  rows={4}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="contactEmail" className={styles.formLabel}>Your Email (optional)</label>
                <input 
                  type="email" 
                  id="contactEmail" 
                  className={styles.formInput} 
                  placeholder="To receive a notification when the article is published"
                />
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Submit Suggestion
              </button>
            </form>
          </div>
          
          <p className={styles.topicSuggestionNote}>
            You can also reach out with topic suggestions via Twitter or LinkedIn. I review all suggestions 
            and prioritize topics based on community interest and relevance.
          </p>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
