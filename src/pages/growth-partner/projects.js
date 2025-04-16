import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { ExternalLink, GitHub, Code, ArrowRight } from 'lucide-react';
import Link from '@docusaurus/Link';

export default function GrowthPartnerProjects() {
  const collaborationProjects = [
    {
      title: "Cloud Infrastructure Modernization",
      description: "A collaborative project to modernize legacy infrastructure using cloud-native technologies and DevOps practices. This involved migrating monolithic applications to microservices architecture, implementing CI/CD pipelines, and establishing monitoring and observability solutions.",
      skills: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Microservices"],
      lookingFor: "DevOps specialists, cloud architects, and backend developers interested in infrastructure modernization and cloud-native practices.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Interactive Data Visualization Platform",
      description: "An open-source project focused on creating interactive data visualizations for complex datasets. The platform aims to make data more accessible and understandable through intuitive visual representations and interactive exploration tools.",
      skills: ["React", "D3.js", "Data Visualization", "UX Design", "API Integration"],
      lookingFor: "Frontend developers with experience in data visualization, UX designers focused on data interaction, and data scientists interested in visualization techniques.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI-Assisted Creative Tools",
      description: "A project exploring the intersection of artificial intelligence and creative processes. We're developing tools that leverage AI to enhance human creativity rather than replace it, with applications in design, writing, music, and visual arts.",
      skills: ["Machine Learning", "Python", "UI/UX Design", "Creative Technologies", "API Development"],
      lookingFor: "AI/ML engineers, creative technologists, designers, and artists interested in exploring how technology can enhance creative processes.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const pastCollaborations = [
    {
      title: "Community Learning Platform",
      description: "Collaborated with educators and developers to create an open-source learning platform focused on peer-to-peer knowledge sharing and community-driven content creation.",
      outcome: "The platform has been adopted by several educational communities and continues to evolve with contributions from a growing developer community.",
      link: "https://github.com/example/community-learning-platform"
    },
    {
      title: "Sustainable Tech Initiative",
      description: "Partnered with environmental scientists and software developers to create tools for measuring and reducing the carbon footprint of digital products and services.",
      outcome: "Developed an open-source carbon calculator for websites and applications that has been integrated into several CI/CD pipelines to monitor environmental impact.",
      link: "https://github.com/example/sustainable-tech-tools"
    },
    {
      title: "Accessibility Toolkit",
      description: "Worked with accessibility experts and frontend developers to create a comprehensive toolkit for improving web accessibility implementation and testing.",
      outcome: "The toolkit has been adopted by several organizations and has contributed to making their digital products more inclusive and accessible to all users.",
      link: "https://github.com/example/accessibility-toolkit"
    }
  ];

  const collaborationApproach = [
    {
      title: "Clear Communication",
      description: "I believe in transparent and regular communication throughout the collaboration process. This includes setting clear expectations, providing timely updates, and addressing challenges openly.",
      icon: "💬"
    },
    {
      title: "Shared Ownership",
      description: "Successful collaborations thrive when all parties feel a sense of ownership. I approach projects as true partnerships where everyone's contributions are valued and recognized.",
      icon: "🤝"
    },
    {
      title: "Iterative Process",
      description: "I prefer an iterative approach that allows for continuous feedback and refinement. This helps ensure we're building something that truly meets the project goals and adapts to new insights.",
      icon: "🔄"
    },
    {
      title: "Knowledge Sharing",
      description: "Every collaboration is an opportunity for mutual learning. I actively share my expertise while being open to learning from others' perspectives and specialties.",
      icon: "🧠"
    }
  ];

  return (
    <DashboardLayout
      role="growth-partner"
      activeTab="projects"
      title="Growth Partner | Projects"
      description="Explore collaboration opportunities on innovative projects with Shubham Narkhede."
    >
      <SectionTemplate
        title="Collaboration Projects"
        subtitle="Opportunities to work together on innovative initiatives"
      >
        <div className={styles.collaborationProjectsSection}>
          <p className={styles.collaborationIntro}>
            I'm currently involved in several projects that are open to collaboration. These initiatives span 
            various domains and technologies, offering diverse opportunities for meaningful contribution and 
            mutual growth. If any of these align with your interests or expertise, I'd love to explore potential 
            collaboration.
          </p>
          
          <div className={styles.projectsGrid}>
            {collaborationProjects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={styles.projectImage}
                  />
                </div>
                
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  <div className={styles.projectSkills}>
                    <h4>Key Technologies & Skills:</h4>
                    <div className={styles.skillTags}>
                      {project.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className={styles.skillTag}>{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.projectLookingFor}>
                    <h4>Looking For:</h4>
                    <p>{project.lookingFor}</p>
                  </div>
                  
                  <Link to="/growth-partner/contact" className={styles.projectContactButton}>
                    Discuss This Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Past Collaborations"
        subtitle="Previous projects and their outcomes"
        withBackground={true}
      >
        <div className={styles.pastCollaborationsSection}>
          <p className={styles.pastCollaborationsIntro}>
            Here are some examples of successful collaborations I've been involved with in the past. These 
            projects showcase my collaborative approach and the kind of outcomes we can achieve together.
          </p>
          
          <div className={styles.pastCollaborationsGrid}>
            {pastCollaborations.map((collab, index) => (
              <div key={index} className={styles.pastCollabCard}>
                <h3 className={styles.pastCollabTitle}>{collab.title}</h3>
                <p className={styles.pastCollabDescription}>{collab.description}</p>
                
                <div className={styles.pastCollabOutcome}>
                  <h4>Outcome:</h4>
                  <p>{collab.outcome}</p>
                </div>
                
                <a 
                  href={collab.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.pastCollabLink}
                >
                  <GitHub size={16} />
                  View Project Repository
                </a>
              </div>
            ))}
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="My Collaboration Approach"
        subtitle="How I work with partners on shared projects"
      >
        <div className={styles.collaborationApproachSection}>
          <p className={styles.collaborationApproachIntro}>
            Successful collaborations are built on more than just technical skills. Here's my approach to 
            ensuring productive and rewarding partnerships:
          </p>
          
          <div className={styles.approachGrid}>
            {collaborationApproach.map((approach, index) => (
              <div key={index} className={styles.approachCard}>
                <div className={styles.approachIcon}>{approach.icon}</div>
                <h3 className={styles.approachTitle}>{approach.title}</h3>
                <p className={styles.approachDescription}>{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Open Source Contributions"
        subtitle="My involvement in the open source community"
        withBackground={true}
      >
        <div className={styles.openSourceSection}>
          <p className={styles.openSourceIntro}>
            I'm a strong believer in the power of open source software and the collaborative community it fosters. 
            Here are some of the ways I contribute to and engage with open source projects:
          </p>
          
          <div className={styles.openSourceActivities}>
            <div className={styles.openSourceActivity}>
              <div className={styles.openSourceActivityIcon}>
                <Code size={24} />
              </div>
              <div className={styles.openSourceActivityContent}>
                <h3>Code Contributions</h3>
                <p>
                  I regularly contribute to various open source projects, primarily focusing on cloud infrastructure, 
                  DevOps tools, and frontend libraries. My contributions range from bug fixes and documentation improvements 
                  to feature implementations.
                </p>
                <a 
                  href="https://github.com/spnarkhede" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.openSourceLink}
                >
                  <GitHub size={16} />
                  View My GitHub Profile
                </a>
              </div>
            </div>
            
            <div className={styles.openSourceActivity}>
              <div className={styles.openSourceActivityIcon}>
                <ExternalLink size={24} />
              </div>
              <div className={styles.openSourceActivityContent}>
                <h3>Project Maintenance</h3>
                <p>
                  I maintain several open source projects, including libraries for DevOps automation, development tools, 
                  and UI components. This involves reviewing pull requests, addressing issues, and guiding the overall 
                  direction of these projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Start a Collaboration"
        subtitle="Interested in working together?"
      >
        <div className={styles.ctaSection}>
          <p className={styles.ctaDescription}>
            If you're interested in collaborating on existing projects, have ideas for new initiatives, or simply 
            want to explore potential partnerships, I'd love to hear from you. Let's discuss how we might combine 
            our skills and perspectives to create something valuable together.
          </p>
          
          <div className={styles.ctaButtons}>
            <Link to="/growth-partner/contact" className={styles.ctaButton}>
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
