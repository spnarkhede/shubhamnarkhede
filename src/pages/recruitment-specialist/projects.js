import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { ExternalLink, GitHub, Globe, Code } from 'lucide-react';
import Link from '@docusaurus/Link';

export default function RecruitmentSpecialistProjects() {
  const featuredProjects = [
    {
      title: "Enterprise DevOps Platform",
      description: "Led the development of a comprehensive DevOps platform that streamlined CI/CD processes for 20+ development teams. The platform automated deployment pipelines, integrated security scanning, and provided real-time monitoring dashboards.",
      image: "/img/projects/devops-platform.jpg",
      technologies: ["Kubernetes", "Docker", "Jenkins", "Terraform", "AWS", "Prometheus", "Grafana"],
      outcomes: [
        "Reduced deployment time by 75% across all teams",
        "Decreased production incidents by 60% through automated testing",
        "Improved developer productivity by automating routine tasks",
        "Standardized deployment processes across the organization"
      ],
      links: [
        { type: "demo", url: "https://devops-demo.example.com", label: "Live Demo" },
        { type: "github", url: "https://github.com/example/devops-platform", label: "GitHub Repo" }
      ]
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Designed and implemented a real-time financial analytics dashboard for investment professionals. The application processed large volumes of market data and provided interactive visualizations for trend analysis and decision making.",
      image: "/img/projects/finance-dashboard.jpg",
      technologies: ["React", "Node.js", "GraphQL", "D3.js", "MongoDB", "WebSockets", "AWS"],
      outcomes: [
        "Processed and visualized 10+ million data points in real-time",
        "Reduced analysis time by 40% for investment professionals",
        "Implemented predictive analytics features with 85% accuracy",
        "Designed responsive UI that worked seamlessly across devices"
      ],
      links: [
        { type: "demo", url: "https://finance-demo.example.com", label: "Live Demo" },
        { type: "case-study", url: "/projects/finance-dashboard", label: "Case Study" }
      ]
    },
    {
      title: "Healthcare Management System",
      description: "Developed a comprehensive healthcare management system for a network of clinics. The system handled patient records, appointment scheduling, billing, and integrated with various medical devices for data collection.",
      image: "/img/projects/healthcare-system.jpg",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Angular", "OAuth", "Docker", "Azure"],
      outcomes: [
        "Streamlined operations for 50+ healthcare providers",
        "Reduced administrative overhead by 35%",
        "Implemented HIPAA-compliant security measures",
        "Integrated with 15+ different medical devices and systems"
      ],
      links: [
        { type: "case-study", url: "/projects/healthcare-system", label: "Case Study" },
        { type: "documentation", url: "/docs/healthcare-api", label: "API Documentation" }
      ]
    }
  ];

  const otherProjects = [
    {
      title: "E-commerce Microservices Platform",
      description: "Architected and implemented a microservices-based e-commerce platform capable of handling high-volume transactions and dynamic pricing.",
      technologies: ["Microservices", "Node.js", "Kubernetes", "Redis", "MongoDB", "RabbitMQ"],
      links: [
        { type: "github", url: "https://github.com/example/ecommerce-microservices", label: "GitHub" }
      ]
    },
    {
      title: "Automated Content Moderation System",
      description: "Built an AI-powered content moderation system that used machine learning to detect and filter inappropriate content in real-time.",
      technologies: ["Python", "TensorFlow", "Flask", "AWS Lambda", "S3", "React"],
      links: [
        { type: "case-study", url: "/projects/content-moderation", label: "Case Study" }
      ]
    },
    {
      title: "IoT Monitoring Dashboard",
      description: "Created a real-time monitoring dashboard for IoT devices in industrial environments, processing thousands of data points per second.",
      technologies: ["React", "WebSockets", "Node.js", "InfluxDB", "Grafana", "MQTT"],
      links: [
        { type: "demo", url: "https://iot-demo.example.com", label: "Demo" }
      ]
    },
    {
      title: "Mobile Wallet Application",
      description: "Developed a secure mobile wallet application with biometric authentication, transaction history, and integration with multiple payment gateways.",
      technologies: ["React Native", "Node.js", "MongoDB", "Redux", "JWT", "Stripe API"],
      links: [
        { type: "case-study", url: "/projects/mobile-wallet", label: "Case Study" }
      ]
    }
  ];

  return (
    <DashboardLayout
      role="recruitment-specialist"
      activeTab="projects"
      title="Recruitment Specialist | Projects"
      description="Showcase of Shubham Narkhede's significant projects and achievements"
    >
      <SectionTemplate
        title="Featured Projects"
        subtitle="Significant projects that demonstrate my technical expertise and leadership"
      >
        <div className={styles.featuredProjectsGrid}>
          {featuredProjects.map((project, index) => (
            <div key={index} className={styles.featuredProjectCard}>
              <div className={styles.projectImageContainer}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.projectImage}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src="/img/default-project.jpg";
                  }}
                />
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.technologyTag}>{tech}</span>
                  ))}
                </div>
                
                <div className={styles.projectOutcomes}>
                  <h4 className={styles.outcomesTitle}>Key Outcomes</h4>
                  <ul className={styles.outcomesList}>
                    {project.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex}>{outcome}</li>
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
                      {link.type === 'github' && <GitHub size={16} />}
                      {link.type === 'demo' && <Globe size={16} />}
                      {link.type === 'case-study' && <ExternalLink size={16} />}
                      {link.type === 'documentation' && <Code size={16} />}
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
        title="Additional Projects"
        subtitle="Other notable projects from my portfolio"
        withBackground={true}
      >
        <div className={styles.additionalProjectsGrid}>
          {otherProjects.map((project, index) => (
            <div key={index} className={styles.additionalProjectCard}>
              <h3 className={styles.additionalProjectTitle}>{project.title}</h3>
              <p className={styles.additionalProjectDescription}>{project.description}</p>
              
              <div className={styles.additionalProjectTechnologies}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.smallTechnologyTag}>{tech}</span>
                ))}
              </div>
              
              <div className={styles.additionalProjectLinks}>
                {project.links.map((link, linkIndex) => (
                  <a 
                    key={linkIndex} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.smallProjectLink}
                  >
                    {link.type === 'github' && <GitHub size={14} />}
                    {link.type === 'demo' && <Globe size={14} />}
                    {link.type === 'case-study' && <ExternalLink size={14} />}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Project Methodology"
        subtitle="My approach to project planning and execution"
      >
        <div className={styles.methodologySection}>
          <div className={styles.methodologyCard}>
            <h3 className={styles.methodologyTitle}>Planning & Requirements</h3>
            <p className={styles.methodologyDescription}>
              I begin each project with a thorough requirements gathering phase, working closely with stakeholders to understand business needs, technical constraints, and success criteria. This foundation ensures alignment and clear direction from the start.
            </p>
          </div>
          
          <div className={styles.methodologyCard}>
            <h3 className={styles.methodologyTitle}>Architecture & Design</h3>
            <p className={styles.methodologyDescription}>
              I prioritize creating scalable, maintainable architectures that balance immediate needs with long-term flexibility. My designs incorporate industry best practices, security considerations, and performance optimization from the ground up.
            </p>
          </div>
          
          <div className={styles.methodologyCard}>
            <h3 className={styles.methodologyTitle}>Development & Testing</h3>
            <p className={styles.methodologyDescription}>
              I follow agile methodologies with iterative development cycles, continuous integration, and automated testing. This approach allows for regular feedback, early issue detection, and the ability to adapt to changing requirements.
            </p>
          </div>
          
          <div className={styles.methodologyCard}>
            <h3 className={styles.methodologyTitle}>Deployment & Maintenance</h3>
            <p className={styles.methodologyDescription}>
              I implement robust CI/CD pipelines for reliable deployments, comprehensive monitoring for proactive issue detection, and thorough documentation to support ongoing maintenance and knowledge transfer.
            </p>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Explore More"
        centered={true}
        className={styles.exploreMoreSection}
      >
        <p className={styles.exploreMoreText}>
          Interested in seeing more of my work or discussing a specific project in detail?
        </p>
        <div className={styles.exploreMoreButtons}>
          <Link to="/recruitment-specialist/contact" className={styles.primaryButton}>
            Contact Me
          </Link>
          <a 
            href="https://github.com/spnarkhede" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            <GitHub size={16} />
            View GitHub Profile
          </a>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
