import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react';

export default function Articles() {
  const articles = [
    {
      id: 'ai-revolution-2025',
      title: 'The AI Revolution: Transforming Industries in 2025',
      date: 'April 10, 2025',
      readTime: '12 min read',
      excerpt: 'An in-depth analysis of how artificial intelligence is reshaping major industries in 2025, from healthcare to manufacturing, and what it means for the future of work.',
      tags: ['Artificial Intelligence', 'Industry Trends', 'Future of Work'],
      image: '/img/articles/ai-revolution-2025.jpg',
      featured: true
    },
    {
      id: 'future-of-jobs-report-2025',
      title: 'Future of Jobs Report 2025: Skills, Displacement, and Growth',
      date: 'March 15, 2025',
      readTime: '15 min read',
      excerpt: 'A comprehensive analysis of the World Economic Forums Future of Jobs Report 2025, examining the changing landscape of employment, emerging skills, and strategies for workforce adaptation.',
      tags: ['Future of Work', 'Skills Development', 'Job Market'],
      image: '/img/articles/future-of-jobs-2025.jpg',
      featured: true
    },
    {
      id: 'generative-ai-enterprise',
      title: 'Generative AI in the Enterprise: Beyond the Hype',
      date: 'February 22, 2025',
      readTime: '10 min read',
      excerpt: 'Exploring the practical applications of generative AI in enterprise environments, examining real-world case studies, implementation challenges, and measurable business outcomes.',
      tags: ['Generative AI', 'Enterprise Technology', 'Business Strategy'],
      image: '/img/articles/generative-ai-enterprise.jpg',
      featured: false
    },
    {
      id: 'quantum-computing-breakthrough',
      title: 'Quantum Computing Breakthrough: Implications for Cybersecurity',
      date: 'January 18, 2025',
      readTime: '14 min read',
      excerpt: 'Analyzing recent quantum computing advancements and their profound implications for cryptography, data security, and the future of secure communications.',
      tags: ['Quantum Computing', 'Cybersecurity', 'Cryptography'],
      image: '/img/articles/quantum-computing.jpg',
      featured: false
    },
    {
      id: 'sustainable-tech-2024',
      title: 'Sustainable Technology: The Green Tech Revolution of 2024',
      date: 'December 5, 2024',
      readTime: '11 min read',
      excerpt: 'Examining how technology is driving sustainability initiatives across industries, from renewable energy innovations to circular economy solutions and carbon capture technologies.',
      tags: ['Sustainability', 'Green Tech', 'Climate Tech'],
      image: '/img/articles/sustainable-tech.jpg',
      featured: false
    },
    {
      id: 'web3-enterprise-adoption',
      title: 'Web3 and Enterprise Adoption: Beyond the Blockchain Hype',
      date: 'October 30, 2024',
      readTime: '13 min read',
      excerpt: 'A critical analysis of Web3 technologies and their practical applications in enterprise environments, examining real use cases, adoption challenges, and future potential.',
      tags: ['Web3', 'Blockchain', 'Enterprise Technology'],
      image: '/img/articles/web3-enterprise.jpg',
      featured: false
    },
    {
      id: 'ai-ethics-framework',
      title: 'Building Ethical AI Systems: A Practical Framework',
      date: 'September 12, 2024',
      readTime: '16 min read',
      excerpt: 'Proposing a comprehensive framework for developing and deploying ethical AI systems, addressing bias, transparency, accountability, and governance considerations.',
      tags: ['AI Ethics', 'Responsible AI', 'Technology Governance'],
      image: '/img/articles/ai-ethics.jpg',
      featured: false
    },
    {
      id: 'digital-transformation-2023',
      title: 'Digital Transformation in 2023: Lessons from Industry Leaders',
      date: 'July 25, 2023',
      readTime: '14 min read',
      excerpt: 'Analyzing successful digital transformation initiatives from industry leaders, extracting key lessons, strategies, and implementation approaches for organizations at various stages of digital maturity.',
      tags: ['Digital Transformation', 'Business Strategy', 'Technology Leadership'],
      image: '/img/articles/digital-transformation.jpg',
      featured: false
    },
    {
      id: 'metaverse-enterprise-applications',
      title: 'The Metaverse and Enterprise Applications: Beyond the Hype',
      date: 'May 18, 2023',
      readTime: '12 min read',
      excerpt: 'Examining practical enterprise applications of metaverse technologies, from virtual collaboration and training to digital twins and immersive customer experiences.',
      tags: ['Metaverse', 'Enterprise Technology', 'Virtual Reality'],
      image: '/img/articles/metaverse-enterprise.jpg',
      featured: false
    },
    {
      id: 'cloud-native-architecture',
      title: 'Cloud-Native Architecture: Principles for Modern Applications',
      date: 'March 10, 2023',
      readTime: '15 min read',
      excerpt: 'A technical deep dive into cloud-native architecture principles, examining microservices, containers, orchestration, and serverless computing approaches for building resilient, scalable applications.',
      tags: ['Cloud Computing', 'Software Architecture', 'DevOps'],
      image: '/img/articles/cloud-native.jpg',
      featured: false
    },
    {
      id: 'ai-ml-production',
      title: 'AI/ML in Production: From Prototype to Scalable System',
      date: 'January 15, 2023',
      readTime: '17 min read',
      excerpt: 'A comprehensive guide to deploying AI/ML models in production environments, addressing challenges in scalability, monitoring, maintenance, and continuous improvement.',
      tags: ['Machine Learning', 'MLOps', 'Production AI'],
      image: '/img/articles/ai-ml-production.jpg',
      featured: false
    },
    {
      id: 'edge-computing-iot',
      title: 'Edge Computing and IoT: Architectures for the Connected World',
      date: 'November 22, 2022',
      readTime: '13 min read',
      excerpt: 'Exploring edge computing architectures for IoT applications, examining data processing strategies, security considerations, and real-world implementation patterns.',
      tags: ['Edge Computing', 'IoT', 'Distributed Systems'],
      image: '/img/articles/edge-computing.jpg',
      featured: false
    },
    {
      id: 'devops-devsecops-evolution',
      title: 'The Evolution from DevOps to DevSecOps: Integrating Security',
      date: 'September 8, 2022',
      readTime: '14 min read',
      excerpt: 'Analyzing the evolution from DevOps to DevSecOps, examining strategies for integrating security throughout the software development lifecycle without sacrificing agility.',
      tags: ['DevSecOps', 'Security', 'Software Development'],
      image: '/img/articles/devsecops.jpg',
      featured: false
    },
    {
      id: 'data-mesh-architecture',
      title: 'Data Mesh Architecture: Decentralizing Data for Scale',
      date: 'July 15, 2022',
      readTime: '16 min read',
      excerpt: 'A technical exploration of data mesh architecture, examining principles of domain-oriented data ownership, self-service infrastructure, and federated governance.',
      tags: ['Data Architecture', 'Data Engineering', 'Data Governance'],
      image: '/img/articles/data-mesh.jpg',
      featured: false
    },
    {
      id: 'low-code-enterprise',
      title: 'Low-Code Development in the Enterprise: Opportunities and Limitations',
      date: 'May 20, 2022',
      readTime: '11 min read',
      excerpt: 'Evaluating the role of low-code development platforms in enterprise environments, examining use cases, integration challenges, and governance considerations.',
      tags: ['Low-Code', 'Enterprise Development', 'Digital Transformation'],
      image: '/img/articles/low-code.jpg',
      featured: false
    },
    {
      id: 'ai-automation-workforce',
      title: 'AI Automation and the Workforce: Navigating the Transition',
      date: 'March 12, 2022',
      readTime: '15 min read',
      excerpt: 'Examining the impact of AI automation on the workforce, analyzing job displacement patterns, emerging roles, and strategies for individual and organizational adaptation.',
      tags: ['AI Automation', 'Future of Work', 'Workforce Transition'],
      image: '/img/articles/ai-automation.jpg',
      featured: false
    },
    {
      id: 'zero-trust-security',
      title: 'Zero Trust Security: Implementing a Modern Security Architecture',
      date: 'January 25, 2022',
      readTime: '14 min read',
      excerpt: 'A comprehensive guide to implementing zero trust security architecture, examining principles, technologies, implementation strategies, and organizational considerations.',
      tags: ['Cybersecurity', 'Zero Trust', 'Security Architecture'],
      image: '/img/articles/zero-trust.jpg',
      featured: false
    },
    {
      id: 'api-economy-strategy',
      title: 'The API Economy: Strategic Approaches for Digital Platforms',
      date: 'November 18, 2021',
      readTime: '12 min read',
      excerpt: 'Analyzing the strategic importance of APIs in the digital economy, examining business models, monetization strategies, and governance approaches for API platforms.',
      tags: ['API Economy', 'Digital Strategy', 'Platform Business'],
      image: '/img/articles/api-economy.jpg',
      featured: false
    },
    {
      id: 'ai-healthcare-transformation',
      title: 'AI in Healthcare: Transforming Diagnosis, Treatment, and Care',
      date: 'September 5, 2021',
      readTime: '16 min read',
      excerpt: 'Examining the transformative impact of AI in healthcare, from diagnostic imaging and personalized medicine to operational efficiency and patient experience.',
      tags: ['Healthcare Technology', 'AI in Medicine', 'Medical Innovation'],
      image: '/img/articles/ai-healthcare.jpg',
      featured: false
    },
    {
      id: 'blockchain-beyond-crypto',
      title: 'Blockchain Beyond Cryptocurrency: Enterprise Use Cases',
      date: 'July 10, 2021',
      readTime: '13 min read',
      excerpt: 'Exploring practical enterprise applications of blockchain technology beyond cryptocurrency, examining supply chain, identity management, and smart contract implementations.',
      tags: ['Blockchain', 'Enterprise Technology', 'Distributed Ledger'],
      image: '/img/articles/blockchain-enterprise.jpg',
      featured: false
    },
    {
      id: 'remote-work-future',
      title: 'The Future of Remote Work: Technology, Culture, and Strategy',
      date: 'May 22, 2021',
      readTime: '14 min read',
      excerpt: 'Analyzing the long-term implications of remote work adoption, examining technology requirements, cultural shifts, and strategic considerations for organizations.',
      tags: ['Remote Work', 'Future of Work', 'Digital Workplace'],
      image: '/img/articles/remote-work.jpg',
      featured: false
    },
    {
      id: 'ai-ml-explainability',
      title: 'Explainable AI: Making Machine Learning Models Transparent',
      date: 'March 15, 2021',
      readTime: '15 min read',
      excerpt: 'A technical exploration of approaches for making AI/ML models more explainable and interpretable, examining techniques, tools, and regulatory considerations.',
      tags: ['Explainable AI', 'Machine Learning', 'AI Ethics'],
      image: '/img/articles/explainable-ai.jpg',
      featured: false
    },
    {
      id: 'digital-twins-industry',
      title: 'Digital Twins in Industry: From Concept to Implementation',
      date: 'January 8, 2021',
      readTime: '13 min read',
      excerpt: 'Examining the implementation of digital twin technology across industries, from manufacturing and energy to urban planning and healthcare.',
      tags: ['Digital Twins', 'Industry 4.0', 'IoT'],
      image: '/img/articles/digital-twins.jpg',
      featured: false
    },
    {
      id: 'ai-bias-mitigation',
      title: 'Mitigating Bias in AI Systems: A Practical Approach',
      date: 'November 20, 2020',
      readTime: '16 min read',
      excerpt: 'A comprehensive guide to identifying and mitigating bias in AI systems, examining data collection, model development, testing, and ongoing monitoring approaches.',
      tags: ['AI Ethics', 'Bias Mitigation', 'Responsible AI'],
      image: '/img/articles/ai-bias.jpg',
      featured: false
    },
    {
      id: 'microservices-architecture',
      title: 'Microservices Architecture: Patterns and Anti-patterns',
      date: 'September 12, 2020',
      readTime: '17 min read',
      excerpt: 'A technical deep dive into microservices architecture patterns, examining service design, communication strategies, data management, and common anti-patterns.',
      tags: ['Microservices', 'Software Architecture', 'Distributed Systems'],
      image: '/img/articles/microservices.jpg',
      featured: false
    },
    {
      id: 'ai-manufacturing',
      title: 'AI in Manufacturing: Transforming Production and Quality Control',
      date: 'July 25, 2020',
      readTime: '14 min read',
      excerpt: 'Analyzing the application of AI in manufacturing environments, from predictive maintenance and quality control to supply chain optimization and production planning.',
      tags: ['Manufacturing Technology', 'Industrial AI', 'Industry 4.0'],
      image: '/img/articles/ai-manufacturing.jpg',
      featured: false
    },
    {
      id: 'serverless-architecture',
      title: 'Serverless Architecture: Building Applications at Scale',
      date: 'May 18, 2020',
      readTime: '15 min read',
      excerpt: 'A comprehensive guide to serverless architecture, examining design patterns, operational considerations, and strategies for building scalable, resilient applications.',
      tags: ['Serverless', 'Cloud Computing', 'Software Architecture'],
      image: '/img/articles/serverless.jpg',
      featured: false
    },
    {
      id: 'ai-ethics-governance',
      title: 'AI Ethics and Governance: Building Responsible Systems',
      date: 'March 10, 2020',
      readTime: '16 min read',
      excerpt: 'Examining frameworks for AI ethics and governance, analyzing approaches for ensuring responsible development and deployment of AI systems.',
      tags: ['AI Ethics', 'Technology Governance', 'Responsible AI'],
      image: '/img/articles/ai-governance.jpg',
      featured: false
    },
    {
      id: 'cybersecurity-trends-2020',
      title: 'Cybersecurity Trends 2020: Threats and Defensive Strategies',
      date: 'January 15, 2020',
      readTime: '13 min read',
      excerpt: 'Analyzing emerging cybersecurity threats and defensive strategies for 2020, examining ransomware evolution, supply chain attacks, and zero-trust implementation approaches.',
      tags: ['Cybersecurity', 'Threat Intelligence', 'Security Strategy'],
      image: '/img/articles/cybersecurity-2020.jpg',
      featured: false
    },
    {
      id: 'data-privacy-regulations',
      title: 'Navigating Global Data Privacy Regulations: GDPR, CCPA, and Beyond',
      date: 'November 22, 2019',
      readTime: '14 min read',
      excerpt: 'A comprehensive guide to navigating global data privacy regulations, examining compliance requirements, implementation strategies, and technology solutions.',
      tags: ['Data Privacy', 'Compliance', 'Regulatory Technology'],
      image: '/img/articles/data-privacy.jpg',
      featured: false
    },
    {
      id: 'ai-predictive-analytics',
      title: 'AI-Powered Predictive Analytics: From Data to Decisions',
      date: 'September 8, 2019',
      readTime: '15 min read',
      excerpt: 'Exploring the application of AI in predictive analytics, examining methodologies, implementation approaches, and strategies for translating insights into business decisions.',
      tags: ['Predictive Analytics', 'Business Intelligence', 'Data Science'],
      image: '/img/articles/predictive-analytics.jpg',
      featured: false
    },
    {
      id: 'cloud-migration-strategy',
      title: 'Cloud Migration Strategy: Planning for Success',
      date: 'July 15, 2019',
      readTime: '16 min read',
      excerpt: 'A comprehensive guide to cloud migration strategy, examining assessment methodologies, migration patterns, risk mitigation, and operational considerations.',
      tags: ['Cloud Migration', 'Digital Transformation', 'IT Strategy'],
      image: '/img/articles/cloud-migration.jpg',
      featured: false
    },
    {
      id: 'future-of-jobs-2018',
      title: 'Future of Jobs Report 2018: Skills for the Digital Economy',
      date: 'May 20, 2018',
      readTime: '14 min read',
      excerpt: 'Analyzing the World Economic Forums Future of Jobs Report 2018, examining changing skill requirements, job displacement patterns, and strategies for workforce adaptation.',
      tags: ['Future of Work', 'Skills Development', 'Digital Economy'],
      image: '/img/articles/future-of-jobs-2018.jpg',
      featured: false
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <Layout
      title="Technical Articles"
      description="In-depth technical articles on AI, industry trends, and the future of work by Shubham Narkhede."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1 className={styles.articlesTitle}>Technical Articles</h1>
            <p className={styles.articlesDescription}>
              In-depth analysis and thought leadership on artificial intelligence, industry trends, 
              and the future of work. These articles reflect my research, expertise, and perspectives 
              on the evolving technology landscape.
            </p>
          </div>
        </div>

        {featuredArticles.length > 0 && (
          <div className="row margin-bottom--xl">
            <div className="col col--10 col--offset-1">
              <h2 className={styles.sectionTitle}>Featured Articles</h2>
              <div className={styles.featuredArticlesGrid}>
                {featuredArticles.map((article) => (
                  <div key={article.id} className={styles.featuredArticleCard}>
                    <div className={styles.featuredArticleImage}>
                      <img 
                        src={article.image} 
                        alt={article.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src="/img/default-article.jpg";
                        }}
                      />
                    </div>
                    <div className={styles.featuredArticleContent}>
                      <div className={styles.articleMeta}>
                        <div className={styles.articleDate}>
                          <Calendar size={14} />
                          <span>{article.date}</span>
                        </div>
                        <div className={styles.articleReadTime}>
                          <Clock size={14} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <h3 className={styles.featuredArticleTitle}>{article.title}</h3>
                      <p className={styles.featuredArticleExcerpt}>{article.excerpt}</p>
                      <div className={styles.articleTags}>
                        {article.tags.map((tag, index) => (
                          <span key={index} className={styles.articleTag}>
                            <Tag size={12} />
                            {tag}
                          </span>
                        ))}
                      </div>
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
            </div>
          </div>
        )}

        <div className="row">
          <div className="col col--10 col--offset-1">
            <h2 className={styles.sectionTitle}>All Articles</h2>
            <div className={styles.articlesGrid}>
              {regularArticles.map((article) => (
                <div key={article.id} className={styles.articleCard}>
                  <div className={styles.articleImage}>
                    <img 
                      src={article.image} 
                      alt={article.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src="/img/default-article.jpg";
                      }}
                    />
                  </div>
                  <div className={styles.articleContent}>
                    <div className={styles.articleMeta}>
                      <div className={styles.articleDate}>
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className={styles.articleReadTime}>
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className={styles.articleTitle}>{article.title}</h3>
                    <p className={styles.articleExcerpt}>{article.excerpt}</p>
                    <div className={styles.articleTags}>
                      {article.tags.map((tag, index) => (
                        <span key={index} className={styles.articleTag}>
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
