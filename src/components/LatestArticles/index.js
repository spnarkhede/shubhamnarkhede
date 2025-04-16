import React from 'react';
import Link from '@docusaurus/Link';
import { FileText, ChevronRight } from 'lucide-react';
import styles from './styles.module.css';

export default function LatestArticles() {
  const featuredArticles = [
    {
      id: 'ai-revolution-2025',
      title: 'The AI Revolution: Transforming Industries in 2025',
      date: 'April 10, 2025',
      excerpt: 'An in-depth analysis of how artificial intelligence is reshaping major industries in 2025, from healthcare to manufacturing, and what it means for the future of work.',
      image: '/img/articles/ai-revolution-2025.jpg',
    },
    {
      id: 'future-of-jobs-report-2025',
      title: 'Future of Jobs Report 2025: Skills, Displacement, and Growth',
      date: 'March 15, 2025',
      excerpt: 'A comprehensive analysis of the World Economic Forums Future of Jobs Report 2025, examining the changing landscape of employment, emerging skills, and strategies for workforce adaptation.',
      image: '/img/articles/future-of-jobs-2025.jpg',
    },
    {
      id: 'generative-ai-enterprise',
      title: 'Generative AI in the Enterprise: Beyond the Hype',
      date: 'February 22, 2025',
      excerpt: 'Exploring the practical applications of generative AI in enterprise environments, examining real-world case studies, implementation challenges, and measurable business outcomes.',
      image: '/img/articles/generative-ai-enterprise.jpg',
    }
  ];

  return (
    <div className="container margin-top--xl margin-bottom--xl">
      <div className="row">
        <div className="col">
          <h2 className="text--center margin-bottom--lg">Technical Articles</h2>
          <p className="text--center margin-bottom--lg" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            In-depth analysis and thought leadership on artificial intelligence, industry trends, 
            and the future of work. Exploring the technological transformations shaping our world.
          </p>
        </div>
      </div>
      
      <div className={styles.latestArticlesGrid}>
        {featuredArticles.map((article, index) => (
          <div key={index} className={styles.articleCard}>
            <div className={styles.articleImageContainer}>
              <img 
                src={article.image} 
                alt={article.title} 
                className={styles.articleImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/default-article.jpg";
                }}
              />
            </div>
            <div className={styles.articleContent}>
              <div className={styles.articleDate}>
                <FileText size={14} />
                <span>{article.date}</span>
              </div>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.articleExcerpt}>{article.excerpt}</p>
              <Link 
                to={`/articles/${article.id}`}
                className={styles.readMoreLink}
              >
                Read Article
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text--center margin-top--lg">
        <Link to="/articles" className="button button--primary">
          View All Articles
        </Link>
      </div>
    </div>
  );
}
