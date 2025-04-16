// Projects page

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Github, ExternalLink, Calendar } from 'lucide-react';

export default function Projects() {
  const featuredProject = {
    title: "Connected Charging Cable (CCC)",
    date: "2022 - Present",
    description: "Led the development of a comprehensive management system for electric vehicle charging infrastructure. The system provides real-time monitoring, user management, and analytics capabilities for charging stations across Europe.",
    longDescription: "The Connected Charging Cable (CCC) project is a flagship initiative at Robert Bosch GmbH that revolutionizes how electric vehicle charging infrastructure is managed. As the lead developer, I architected and implemented a scalable solution that handles thousands of concurrent connections while providing real-time monitoring, user management, payment processing, and analytics capabilities. The system integrates with multiple third-party services and employs a microservices architecture for maximum flexibility and resilience.",
    technologies: ["Angular", "Node.js", "AWS", "Docker", "CI/CD", "Playwright"],
    image: "/img/projects/ccc-project.jpg",
    demoLink: "https://example.com/ccc-demo",
    codeLink: "https://github.com/example/ccc-project",
  };
  
  const projects = [
    {
      title: "Charge Point Management System",
      date: "2022 - Present",
      description: "Developed a comprehensive management system for electric vehicle charging points with monitoring and analytics capabilities.",
      longDescription: "The Charge Point Management System (CPMS) is a sophisticated platform designed to monitor, manage, and analyze electric vehicle charging infrastructure. I led the development of this system, which includes features such as real-time status monitoring, predictive maintenance alerts, usage analytics, and integration with payment systems. The platform supports both DC and AC charging stations and complies with OCPP standards for maximum compatibility.",
      technologies: ["React", "TypeScript", "Docker", "CI/CD", "Azure", "REST APIs"],
      image: "/img/projects/cpms-project.jpg",
      demoLink: "https://example.com/cpms-demo",
      codeLink: "https://github.com/example/cpms-project",
    },
    {
      title: "Support Portal 2.0",
      date: "2023 - Present",
      description: "Redesigned and enhanced the support portal with improved user interface and streamlined ticket management system.",
      longDescription: "Support Portal 2.0 represents a complete overhaul of the customer support experience at Robert Bosch GmbH. I led the UI/UX redesign process, conducting user research and creating wireframes and prototypes in Figma before implementing the new design. The portal features an intuitive ticket management system, knowledge base integration, automated routing, and real-time status updates. The redesign resulted in a 40% reduction in ticket resolution time and significantly improved customer satisfaction scores.",
      technologies: ["UI/UX", "Angular", "Figma", "Azure", "Node.js", "MongoDB"],
      image: "/img/projects/support-portal.jpg",
      demoLink: "https://example.com/support-portal-demo",
      codeLink: "https://github.com/example/support-portal",
    },
    {
      title: "DC-MH/SDI Tool Overview",
      date: "2020 - 2022",
      description: "Created a comprehensive dashboard for the Area Sales and Distribution department to visualize key metrics and streamline decision-making processes.",
      longDescription: "The DC-MH/SDI Tool Overview is a centralized dashboard that provides real-time visibility into sales and distribution metrics for the management team. I designed and developed this tool to consolidate data from multiple sources, creating a single source of truth for decision-making. The dashboard includes interactive visualizations, customizable reports, and automated alerts for key performance indicators. This tool has become essential for strategic planning and has contributed to a 15% increase in operational efficiency.",
      technologies: ["Angular", "D3.js", "Azure", "REST APIs", "SQL"],
      image: "/img/projects/dc-mh-sdi-tool.jpg",
      demoLink: "https://example.com/dc-mh-sdi-demo",
      codeLink: "https://github.com/example/dc-mh-sdi-tool",
    },
    {
      title: "Smart Project Management (SPM)",
      date: "2020 - 2022",
      description: "Created a platform to streamline project tracking and collaboration between sales managers, engineers, and solution partners.",
      longDescription: "Smart Project Management (SPM) is a collaborative platform I developed to enhance transparency and efficiency in project execution. The system connects sales managers, engineers, and solution partners in a unified workspace, providing real-time updates on project status, resource allocation, and milestone tracking. SPM includes features such as automated reporting, document management, and integration with existing CRM systems. The implementation of this platform resulted in a 16% increase in sales efficiency and significantly improved project delivery timelines.",
      technologies: ["Angular", "Node.js", "Azure DevOps", "PostgreSQL", "REST APIs"],
      image: "/img/projects/spm-project.jpg",
      demoLink: "https://example.com/spm-demo",
      codeLink: "https://github.com/example/spm-project",
    },
    {
      title: "SPM Version 2.0.0",
      date: "2021 - 2022",
      description: "Enhanced the Smart Project Management platform with advanced analytics, improved UI, and additional integration capabilities.",
      longDescription: "SPM Version 2.0.0 represents a significant evolution of the original Smart Project Management platform. In this version, I implemented advanced analytics capabilities, including predictive project timelines and resource optimization algorithms. The user interface was completely redesigned for improved usability, and new integration points were added to connect with enterprise resource planning systems. This update also introduced mobile responsiveness, allowing team members to access critical project information from any device.",
      technologies: ["Angular", "TypeScript", "Azure", "PostgreSQL", "Machine Learning"],
      image: "/img/projects/spm-v2-project.jpg",
      demoLink: "https://example.com/spm-v2-demo",
      codeLink: "https://github.com/example/spm-v2-project",
    },
    {
      title: "SPM Version 3.0.0",
      date: "2021 - 2022",
      description: "Completely redesigned the Smart Project Management platform with a focus on scalability, performance, and enhanced collaboration features.",
      longDescription: "SPM Version 3.0.0 was a ground-up redesign of the Smart Project Management platform, focusing on enterprise-scale deployment. I led the architecture and development of this version, which introduced real-time collaboration features, advanced permission management, and comprehensive audit logging. The system was rebuilt using a microservices architecture to improve scalability and resilience. This version also introduced AI-assisted project planning and risk assessment tools, helping project managers identify potential issues before they impact timelines.",
      technologies: ["Angular", "Node.js", "Microservices", "Kubernetes", "PostgreSQL", "AI/ML"],
      image: "/img/projects/spm-v3-project.jpg",
      demoLink: "https://example.com/spm-v3-demo",
      codeLink: "https://github.com/example/spm-v3-project",
    },
    {
      title: "Rexroth Chat App",
      date: "2021 - 2022",
      description: "Developed an internal communication platform for secure, real-time collaboration between teams across different locations.",
      longDescription: "The Rexroth Chat App is a secure, enterprise-grade communication platform I developed to facilitate collaboration between distributed teams. The application features end-to-end encryption, persistent chat history, file sharing capabilities, and integration with the company directory. The platform supports both one-on-one and group conversations, with advanced features such as message threading, reactions, and search functionality. The implementation of this tool has significantly reduced email volume and improved cross-team collaboration efficiency.",
      technologies: ["WebSockets", "Angular", "Node.js", "MongoDB", "End-to-End Encryption"],
      image: "/img/projects/rexroth-chat-app.jpg",
      demoLink: "https://example.com/rexroth-chat-demo",
      codeLink: "https://github.com/example/rexroth-chat",
    },
    {
      title: "Application System Platform Selectors (ASPS)",
      date: "2021 - 2022",
      description: "Developed tools to help partners and customers find the right solutions for their specific requirements.",
      longDescription: "The Application System Platform Selectors (ASPS) is a suite of interactive tools I designed to simplify the product selection process for partners and customers. The system uses a sophisticated decision tree algorithm to guide users through a series of questions about their requirements, ultimately recommending the optimal product configuration. The platform includes detailed product comparisons, compatibility checks, and integration with the e-commerce system for seamless ordering. ASPS has significantly reduced pre-sales support requirements and improved customer satisfaction with the selection process.",
      technologies: ["Angular", "TypeScript", "Azure", "REST APIs", "Decision Trees"],
      image: "/img/projects/asps-project.jpg",
      demoLink: "https://example.com/asps-demo",
      codeLink: "https://github.com/example/asps-project",
    },
    {
      title: "Virtual Streaming Conference Platform",
      date: "2020 - 2021",
      description: "Built a digital environment for remote collaboration and engagement during the COVID-19 pandemic.",
      longDescription: "In response to the COVID-19 pandemic, I developed a Virtual Streaming Conference Platform to enable remote participation in company events and conferences. The platform features high-quality video streaming, interactive Q&A sessions, breakout rooms, and networking opportunities. I implemented a custom solution for presenter management, allowing seamless transitions between speakers and multimedia content. The platform successfully hosted several major company events, including the Partner Manager Meeting, Service Partner Conference, and Solution Partner Conference, with thousands of concurrent participants from around the world.",
      technologies: ["WebRTC", "Node.js", "Angular", "MongoDB", "Media Streaming", "WebSockets"],
      image: "/img/projects/vscp-project.jpg",
      demoLink: "https://example.com/vscp-demo",
      codeLink: "https://github.com/example/vscp-project",
    },
    {
      title: "Partner Manager Meeting 2021",
      date: "2021",
      description: "Designed and implemented a custom virtual event platform for the annual Partner Manager Meeting with interactive features and seamless presenter transitions.",
      longDescription: "For the Partner Manager Meeting 2021, I created a tailored virtual event experience that maintained the engagement and networking value of the traditional in-person event. The platform featured branded virtual environments, scheduled and on-demand content delivery, interactive polling and Q&A, and virtual networking lounges. I implemented a robust backend to handle peak concurrent users and ensure uninterrupted streaming quality. The event was a success, with over 500 partner managers participating and providing highly positive feedback on the virtual experience.",
      technologies: ["Angular", "Node.js", "WebRTC", "Real-time Analytics", "Interactive Media"],
      image: "/img/projects/partner-manager-meeting.jpg",
      demoLink: "https://example.com/pmm-demo",
      codeLink: "https://github.com/example/pmm-platform",
    },
    {
      title: "Amazon Internal Tools",
      date: "2019 - 2020",
      description: "Designed and implemented Amazon-scale tools to facilitate internal business operations, focusing on efficiency and scalability.",
      longDescription: "During my time at Amazon, I developed several high-scale internal tools that streamlined business operations across multiple departments. These tools were designed to handle Amazon's massive data volumes and strict performance requirements. I worked closely with product managers and UX designers to create intuitive interfaces for complex workflows, while implementing robust backend services using Java and Spring Boot. These projects gave me valuable experience in building systems that can scale to millions of users and petabytes of data, with stringent reliability and security requirements.",
      technologies: ["Java", "Spring Boot", "Kotlin", "AWS", "Microservices", "DynamoDB"],
      image: "/img/projects/amazon-tools.jpg",
      demoLink: null,
      codeLink: null,
    },
  ];

  return (
    <Layout
      title="Projects"
      description="Portfolio of software development projects by Shubham Narkhede, including web applications, DevOps solutions, and UI/UX designs."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Projects</h1>
            <p className="margin-bottom--lg">
              Throughout my career, I've had the opportunity to work on a diverse range of projects, 
              from full-stack web applications to DevOps solutions and UI/UX designs. Here's a showcase 
              of some of my most significant work, including projects from my time at Robert Bosch GmbH, 
              Bosch Rexroth AG, and Amazon.
            </p>
          </div>
        </div>
        
        <div className="row margin-bottom--xl">
          <div className="col col--10 col--offset-1">
            <h2>Featured Project</h2>
            <div className="featured-project">
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title} 
                className="project-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/default-project.jpg";
                }}
              />
              <div className="project-content">
                <h3 className="project-title">{featuredProject.title}</h3>
                <div className="project-date">
                  <Calendar size={16} style={{ verticalAlign: 'text-bottom', marginRight: '0.5rem' }} />
                  {featuredProject.date}
                </div>
                <p className="project-description">{featuredProject.longDescription}</p>
                <div className="project-tags">
                  {featuredProject.technologies.map((tech, index) => (
                    <span key={index} className="project-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {featuredProject.demoLink && (
                    <a href={featuredProject.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {featuredProject.codeLink && (
                    <a href={featuredProject.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col col--10 col--offset-1">
            <h2>Other Projects</h2>
            <div className="projects-container">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src="/img/default-project.jpg";
                    }}
                  />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-date">
                      <Calendar size={16} style={{ verticalAlign: 'text-bottom', marginRight: '0.5rem' }} />
                      {project.date}
                    </div>
                    <p className="project-description">{project.longDescription || project.description}</p>
                    <div className="project-tags">
                      {project.technologies.map((tech, tagIndex) => (
                        <span key={tagIndex} className="project-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.demoLink && (
                        <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                      {project.codeLink && (
                        <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                          <Github size={16} /> View Code
                        </a>
                      )}
                    </div>
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
