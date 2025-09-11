import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { ExternalLink, GitHub, Code } from 'lucide-react';

export default function SoftwareDeveloperProjects() {
  const projects = [
    {
      title: "Microservices E-Commerce Platform",
      description: "A scalable e-commerce platform built with microservices architecture, featuring user authentication, product catalog, order management, and payment processing. Implemented with Docker containers and Kubernetes orchestration.",
      technologies: ["Node.js", "React", "MongoDB", "Redis", "Docker", "Kubernetes", "GraphQL"],
      highlights: [
        "Handles 10,000+ concurrent users",
        "99.9% uptime with auto-scaling",
        "Real-time inventory management",
        "Integrated payment gateways (Stripe, PayPal)"
      ],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/ecommerce-microservices", label: "Source Code" },
        { type: "demo", url: "https://ecommerce-demo.spnarkhede.dev", label: "Live Demo" },
        { type: "docs", url: "/projects/ecommerce-platform", label: "Case Study" }
      ],
      status: "Production",
      year: "2024"
    },
    {
      title: "DevOps Automation Suite",
      description: "Comprehensive DevOps toolkit featuring CI/CD pipeline automation, infrastructure provisioning, and monitoring solutions. Built to streamline deployment processes and reduce manual intervention.",
      technologies: ["Terraform", "Jenkins", "Ansible", "Python", "AWS", "Prometheus", "Grafana"],
      highlights: [
        "Automated deployment for 50+ applications",
        "Reduced deployment time by 80%",
        "Infrastructure as Code implementation",
        "Comprehensive monitoring and alerting"
      ],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/devops-automation", label: "Source Code" },
        { type: "docs", url: "/projects/devops-suite", label: "Documentation" }
      ],
      status: "Production",
      year: "2023"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive analytics dashboard providing real-time insights into user behavior, system performance, and business metrics. Features customizable widgets and automated report generation.",
      technologies: ["React", "D3.js", "WebSockets", "InfluxDB", "Node.js", "TypeScript"],
      highlights: [
        "Real-time data visualization",
        "Custom widget builder",
        "Automated report generation",
        "Multi-tenant architecture"
      ],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/analytics-dashboard", label: "Source Code" },
        { type: "demo", url: "https://analytics-demo.spnarkhede.dev", label: "Live Demo" }
      ],
      status: "Production",
      year: "2023"
    },
    {
      title: "AI-Powered Code Review Bot",
      description: "Machine learning-powered bot that automatically reviews code for potential issues, security vulnerabilities, and best practice violations. Integrates with GitHub and GitLab.",
      technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker", "GitHub API"],
      highlights: [
        "Automated code quality analysis",
        "Security vulnerability detection",
        "Integration with popular Git platforms",
        "Custom rule configuration"
      ],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/ai-code-reviewer", label: "Source Code" },
        { type: "docs", url: "/projects/ai-code-reviewer", label: "Documentation" }
      ],
      status: "Beta",
      year: "2024"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure, transparent voting system built on blockchain technology. Features voter authentication, encrypted ballots, and immutable vote recording with real-time result tracking.",
      technologies: ["Solidity", "Web3.js", "React", "Node.js", "Ethereum", "IPFS"],
      highlights: [
        "Cryptographically secure voting",
        "Transparent and auditable results",
        "Decentralized architecture",
        "Mobile-responsive interface"
      ],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/blockchain-voting", label: "Source Code" },
        { type: "demo", url: "https://voting-demo.spnarkhede.dev", label: "Demo" }
      ],
      status: "Prototype",
      year: "2022"
    },
    {
      title: "Cloud Infrastructure Optimizer",
      description: "Intelligent tool that analyzes cloud infrastructure usage and provides optimization recommendations to reduce costs while maintaining performance.",
      technologies: ["Go", "AWS SDK", "Python", "React", "PostgreSQL", "Terraform"],
      highlights: [
        "Cost optimization recommendations",
        "Performance impact analysis",
        "Multi-cloud support (AWS, Azure, GCP)",
        "Automated resource rightsizing"
      ],
      links: [
        { type: "github", url: "https://github.com/spnarkhede/cloud-optimizer", label: "Source Code" },
        { type: "docs", url: "/projects/cloud-optimizer", label: "Case Study" }
      ],
      status: "Production",
      year: "2023"
    }
  ];

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'production': return styles.statusProduction;
      case 'beta': return styles.statusBeta;
      case 'prototype': return styles.statusPrototype;
      default: return styles.statusDefault;
    }
  };

  const getLinkIcon = (type) => {
    switch (type) {
      case 'github': return <GitHub size={16} />;
      case 'demo': return <ExternalLink size={16} />;
      case 'docs': return <Code size={16} />;
      default: return <ExternalLink size={16} />;
    }
  };

  return (
    <DashboardLayout
      role="software-developer"
      activeTab="projects"
      title="Software Developer | Projects"
      description="Showcase of Shubham Narkhede's technical projects and software development work"
    >
      <SectionTemplate
        title="Featured Projects"
        subtitle="A collection of my most significant software development projects and technical implementations"
      >
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div className={styles.projectTitleSection}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectMeta}>
                    <span className={`${styles.statusBadge} ${getStatusBadgeClass(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={styles.projectYear}>{project.year}</span>
                  </div>
                </div>
              </div>
              
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.projectTechnologies}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>{tech}</span>
                ))}
              </div>
              
              <div className={styles.projectHighlights}>
                <h4>Key Features:</h4>
                <ul>
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
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
                    {getLinkIcon(link.type)}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Technical Approach"
        subtitle="My methodology for building scalable and maintainable software"
        withBackground={true}
        className={styles.approachSection}
      >
        <div className={styles.approachGrid}>
          <div className={styles.approachCard}>
            <h3>Architecture Design</h3>
            <p>
              I start every project with a thorough analysis of requirements and design a scalable 
              architecture that can grow with the business needs. I focus on modularity, separation 
              of concerns, and choosing the right technology stack for each use case.
            </p>
          </div>
          
          <div className={styles.approachCard}>
            <h3>Development Process</h3>
            <p>
              I follow agile methodologies with iterative development cycles, continuous integration, 
              and automated testing. This approach allows for regular feedback, early issue detection, 
              and the ability to adapt to changing requirements.
            </p>
          </div>
          
          <div className={styles.approachCard}>
            <h3>Quality Assurance</h3>
            <p>
              Quality is built into every step of the development process through automated testing, 
              code reviews, performance monitoring, and security assessments. I maintain high code 
              coverage and follow industry best practices.
            </p>
          </div>
          
          <div className={styles.approachCard}>
            <h3>Deployment & Maintenance</h3>
            <p>
              I implement robust CI/CD pipelines for reliable deployments, comprehensive monitoring 
              for proactive issue detection, and thorough documentation to support ongoing maintenance 
              and knowledge transfer.
            </p>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Open Source Contributions"
        centered={true}
        className={styles.openSourceSection}
      >
        <p className={styles.openSourceText}>
          Beyond personal projects, I actively contribute to open source projects and maintain 
          several libraries used by the development community.
        </p>
        <div className={styles.openSourceButtons}>
          <a 
            href="https://github.com/spnarkhede" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            <GitHub size={16} />
            View All Repositories
          </a>
          <a href="/software-developer/code-samples" className={styles.secondaryButton}>
            Browse Code Samples
          </a>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}