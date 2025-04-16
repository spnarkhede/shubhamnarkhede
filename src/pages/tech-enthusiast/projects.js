import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { GitHub, ExternalLink, Globe } from 'lucide-react';

export default function TechEnthusiastProjects() {
  const projects = [
    {
      title: "Microservices Architecture Demo",
      description: "A demonstration of microservices architecture using Docker, Kubernetes, and a variety of backend services communicating through REST and gRPC.",
      image: "/img/projects/microservices.jpg",
      tags: ["Kubernetes", "Docker", "Node.js", "gRPC", "MongoDB", "Redis", "CI/CD"],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/microservices-demo", label: "GitHub" },
        { type: "demo", url: "https://microservices-demo.example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Real-time Collaborative Editor",
      description: "A web-based real-time collaborative code editor with syntax highlighting, version history, and live chat functionality.",
      image: "/img/projects/collaborative-editor.jpg",
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
      tags: ["React", "D3.js", "Node.js", "InfluxDB", "Grafana", "Prometheus"],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/performance-dashboard", label: "GitHub" },
        { type: "demo", url: "https://monitoring-demo.example.com", label: "Live Demo" }
      ]
    }
  ];

  return (
    <DashboardLayout
      role="tech-enthusiast"
      activeTab="projects"
      title="Tech Enthusiast | Projects"
      description="Technical projects showcasing Shubham Narkhede's development skills and expertise"
    >
      <SectionTemplate
        title="Technical Projects"
        subtitle="Showcasing my development skills and problem-solving approach"
      >
        <p className={styles.projectsIntro}>
          Below is a selection of technical projects that demonstrate my skills across different domains and technologies.
          Each project represents a unique challenge and showcases different aspects of my technical expertise.
        </p>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
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
                      {link.type === 'demo' && <Globe size={16} />}
                      {(link.type === 'article' || link.type === 'docs') && <ExternalLink size={16} />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Development Process"
        subtitle="My approach to planning and implementing technical projects"
        withBackground={true}
      >
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.processNumber}>1</div>
            <div className={styles.processContent}>
              <h3>Problem Definition</h3>
              <p>
                I begin by clearly defining the problem to be solved and establishing success criteria.
                This includes understanding user needs, technical constraints, and business objectives.
                A well-defined problem is essential for developing an effective solution.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.processNumber}>2</div>
            <div className={styles.processContent}>
              <h3>Architecture Design</h3>
              <p>
                Next, I design a high-level architecture that addresses the core requirements while
                considering scalability, maintainability, and performance. This includes selecting
                appropriate technologies, defining component interactions, and establishing data models.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.processNumber}>3</div>
            <div className={styles.processContent}>
              <h3>Iterative Development</h3>
              <p>
                I follow an iterative development approach, building core functionality first and
                gradually adding features. This allows for early feedback and course correction.
                Each iteration includes planning, implementation, testing, and review phases.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.processNumber}>4</div>
            <div className={styles.processContent}>
              <h3>Testing & Quality Assurance</h3>
              <p>
                Comprehensive testing is integrated throughout the development process. This includes
                unit tests, integration tests, and end-to-end tests. I also perform code reviews,
                static analysis, and performance testing to ensure high-quality deliverables.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.processNumber}>5</div>
            <div className={styles.processContent}>
              <h3>Deployment & Monitoring</h3>
              <p>
                I implement automated deployment pipelines for reliable and repeatable releases.
                After deployment, I establish monitoring and alerting to track system health and
                performance. This provides insights for continuous improvement and optimization.
              </p>
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Technical Challenges"
        subtitle="Complex problems I've solved in my projects"
      >
        <div className={styles.challengesGrid}>
          <div className={styles.challengeCard}>
            <h3>Scaling Real-time Collaboration</h3>
            <p>
              In the Collaborative Editor project, I faced challenges scaling WebSocket connections
              for thousands of concurrent users. I implemented a custom solution using Redis pub/sub
              for message broadcasting and horizontal scaling with sticky sessions through a load balancer.
            </p>
          </div>
          
          <div className={styles.challengeCard}>
            <h3>Optimizing Serverless Cold Starts</h3>
            <p>
              The Image Processing Pipeline suffered from cold start latency in serverless functions.
              I optimized this by implementing a warming strategy, reducing dependency sizes, and
              using provisioned concurrency for critical functions, reducing cold start times by 80%.
            </p>
          </div>
          
          <div className={styles.challengeCard}>
            <h3>Microservices Data Consistency</h3>
            <p>
              Maintaining data consistency across microservices was challenging in the Microservices
              Architecture Demo. I implemented a Saga pattern with compensating transactions and
              an event-driven architecture to ensure eventual consistency without tight coupling.
            </p>
          </div>
          
          <div className={styles.challengeCard}>
            <h3>GraphQL Performance Optimization</h3>
            <p>
              The GraphQL API Gateway initially had performance issues with complex nested queries.
              I implemented DataLoader for batching and caching database queries, added persisted
              queries, and optimized resolver functions, resulting in a 70% reduction in response times.
            </p>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
