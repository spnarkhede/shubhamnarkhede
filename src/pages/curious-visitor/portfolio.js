import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { GitHub, ExternalLink, Filter } from 'lucide-react';
import Link from '@docusaurus/Link';

export default function CuriousVisitorPortfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "Microservices Architecture Demo",
      description: "A demonstration of microservices architecture using Docker, Kubernetes, and a variety of backend services communicating through REST and gRPC.",
      image: "/img/projects/microservices.jpg",
      category: "backend",
      tags: ["Kubernetes", "Docker", "Node.js", "gRPC", "MongoDB", "Redis"],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/microservices-demo", label: "GitHub" },
        { type: "demo", url: "https://microservices-demo.example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Real-time Collaborative Editor",
      description: "A web-based real-time collaborative code editor with syntax highlighting, version history, and live chat functionality.",
      image: "/img/projects/collaborative-editor.jpg",
      category: "fullstack",
      tags: ["React", "WebSockets", "Node.js", "MongoDB", "Redis", "Docker"],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/collaborative-editor", label: "GitHub" },
        { type: "demo", url: "https://collab-editor.example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Serverless Image Processing Pipeline",
      description: "A serverless application for processing and transforming images at scale, with automatic resizing, format conversion, and metadata extraction.",
      image: "/img/projects/image-processing.jpg",
      category: "cloud",
      tags: ["AWS Lambda", "S3", "DynamoDB", "API Gateway", "CloudFormation", "Terraform"],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/serverless-image-processor", label: "GitHub" },
        { type: "article", url: "/articles/serverless-architecture", label: "Case Study" }
      ]
    },
    {
      title: "DevOps Automation Toolkit",
      description: "A collection of scripts and tools for automating DevOps workflows, including CI/CD pipelines, infrastructure provisioning, and monitoring setup.",
      image: "/img/projects/devops-toolkit.jpg",
      category: "devops",
      tags: ["Bash", "Python", "Terraform", "Ansible", "Jenkins", "GitHub Actions"],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/devops-toolkit", label: "GitHub" },
        { type: "docs", url: "https://devops-toolkit.example.com", label: "Documentation" }
      ]
    },
    {
      title: "GraphQL API Gateway",
      description: "A GraphQL API gateway that aggregates multiple backend services into a unified API, with authentication, rate limiting, and caching.",
      image: "/img/projects/graphql-gateway.jpg",
      category: "backend",
      tags: ["GraphQL", "Node.js", "Apollo", "Redis", "JWT", "Docker"],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/graphql-gateway", label: "GitHub" },
        { type: "demo", url: "https://graphql-gateway.example.com", label: "API Explorer" }
      ]
    },
    {
      title: "Performance Monitoring Dashboard",
      description: "A real-time dashboard for monitoring application performance metrics, with alerting capabilities and historical data analysis.",
      image: "/img/projects/monitoring-dashboard.jpg",
      category: "frontend",
      tags: ["React", "D3.js", "Node.js", "InfluxDB", "Grafana", "Prometheus"],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/performance-dashboard", label: "GitHub" },
        { type: "demo", url: "https://monitoring-demo.example.com", label: "Live Demo" }
      ]
    },
    {
      title: "E-commerce Mobile App",
      description: "A cross-platform mobile application for e-commerce with product catalog, cart management, payment processing, and order tracking.",
      image: "/img/projects/ecommerce-app.jpg",
      category: "mobile",
      tags: ["React Native", "Redux", "Firebase", "Stripe", "Node.js", "Express"],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/ecommerce-app", label: "GitHub" },
        { type: "demo", url: "https://ecommerce-app.example.com", label: "Demo Video" }
      ]
    },
    {
      title: "Personal Finance Tracker",
      description: "A web application for tracking personal finances, including expense categorization, budget planning, and financial goal setting.",
      image: "/img/projects/finance-tracker.jpg",
      category: "frontend",
      tags: ["React", "TypeScript", "Chart.js", "Firebase", "PWA", "Material UI"],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/finance-tracker", label: "GitHub" },
        { type: "demo", url: "https://finance-tracker.example.com", label: "Live Demo" }
      ]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'devops', label: 'DevOps' },
    { id: 'cloud', label: 'Cloud' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <DashboardLayout
      role="curious-visitor"
      activeTab="portfolio"
      title="Curious Visitor | Portfolio"
      description="Explore Shubham Narkhede's portfolio of projects across various technologies and domains."
    >
      <SectionTemplate
        title="Project Portfolio"
        subtitle="Explore my work across different technologies and domains"
      >
        <div className={styles.portfolioFilters}>
          <div className={styles.filterIcon}>
            <Filter size={18} />
            <span>Filter by:</span>
          </div>
          <div className={styles.filterButtons}>
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`${styles.filterButton} ${activeFilter === filter.id ? styles.activeFilter : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.projectImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/default-project.jpg";
                }}
              />
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
                
                <div className={styles.projectLinks}>
                  {project.links.map((link, linkIndex) => (
                    <a 
                      key={linkIndex} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      {link.type === 'github' && <GitHub size={16} />}
                      {link.type === 'demo' && <ExternalLink size={16} />}
                      {link.type === 'article' && <ExternalLink size={16} />}
                      {link.type === 'docs' && <ExternalLink size={16} />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className={styles.noProjectsMessage}>
            <p>No projects found in this category. Please try another filter.</p>
          </div>
        )}
      </SectionTemplate>

      <SectionTemplate
        title="Project Showcase"
        subtitle="Featured projects with detailed case studies"
        withBackground={true}
      >
        <div className={styles.showcaseProjects}>
          <div className={styles.showcaseProject}>
            <div className={styles.showcaseImage}>
              <img 
                src="/img/projects/collaborative-editor.jpg" 
                alt="Real-time Collaborative Editor" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/default-project.jpg";
                }}
              />
            </div>
            
            <div className={styles.showcaseContent}>
              <h3>Real-time Collaborative Editor</h3>
              <p>
                A web-based collaborative code editor that allows multiple users to edit code simultaneously 
                with real-time updates. Features include syntax highlighting for multiple languages, version 
                history, and integrated chat functionality.
              </p>
              
              <h4>Technical Challenges</h4>
              <p>
                One of the biggest challenges was implementing conflict resolution for concurrent edits. 
                I solved this by implementing Operational Transformation algorithms to ensure consistent 
                document state across all clients.
              </p>
              
              <h4>Technologies Used</h4>
              <ul>
                <li>React for the frontend interface</li>
                <li>WebSockets for real-time communication</li>
                <li>Node.js and Express for the backend</li>
                <li>MongoDB for document storage</li>
                <li>Redis for pub/sub messaging</li>
                <li>Docker for containerization</li>
              </ul>
              
              <div className={styles.showcaseLinks}>
                <a 
                  href="https://github.com/spnarkhede/collaborative-editor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.showcaseLink}
                >
                  <GitHub size={18} />
                  View Source Code
                </a>
                <a 
                  href="https://collab-editor.example.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.showcaseLink}
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Skills & Technologies"
        subtitle="Tools and technologies I work with"
      >
        <div className={styles.skillsSection}>
          <div className={styles.skillCategory}>
            <h3>Frontend Development</h3>
            <div className={styles.skillBars}>
              <div className={styles.skillBar}>
                <span className={styles.skillName}>React</span>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBarFill} style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className={styles.skillBar}>
                <span className={styles.skillName}>TypeScript</span>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBarFill} style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className={styles.skillBar}>
                <span className={styles.skillName}>CSS/SASS</span>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBarFill} style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className={styles.skillBar}>
                <span className={styles.skillName}>Next.js</span>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBarFill} style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.skillCategory}>
            <h3>Backend Development</h3>
            <div className={styles.skillBars}>
              <div className={styles.skillBar}>
                <span className={styles.skillName}>Node.js</span>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBarFill} style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className={styles.skillBar}>
                <span className={styles.skillName}>Express</span>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBarFill} style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className={styles.skillBar}>
                <span className={styles.skillName}>GraphQL</span>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBarFill} style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className={styles.skillBar}>
                <span className={styles.skillName}>Python</span>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBarFill} style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.skillCategory}>
            <h3>DevOps & Cloud</h3>
            <div className={styles.skillBars}>
              <div className={styles.skillBar}>
                <span className={styles.skillName}>Docker</span>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBarFill} style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className={styles.skillBar}>
                <span className={styles.skillName}>AWS</span>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBarFill} style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className={styles.skillBar}>
                <span className={styles.skillName}>Terraform</span>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBarFill} style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className={styles.skillBar}>
                <span className={styles.skillName}>Kubernetes</span>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBarFill} style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Let's Discuss Your Project"
        subtitle="Interested in working together?"
        withBackground={true}
      >
        <div className={styles.ctaSection}>
          <p className={styles.ctaDescription}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Whether you need a developer, consultant, or just some advice, feel free to reach out.
          </p>
          <Link to="/curious-visitor/contact" className={styles.ctaButton}>
            Start a Conversation
          </Link>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
