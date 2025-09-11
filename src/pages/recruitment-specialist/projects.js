import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import Link from '@docusaurus/Link';
import { Github, ExternalLink, Calendar, Building2, User } from 'lucide-react';
import { companyProjects, personalProjects } from '../../pages/recruitment-specialist/directory/projectsData';
import styles from './styles.module.css';

export default function RecruitmentSpecialistProjects() {
  return (
    <DashboardLayout
      role="recruitment-specialist"
      activeTab="projects"
      title="Recruitment Specialist | Projects"
      description="Showcase of Shubham Narkhede's significant projects and achievements"
    >
      {/* Company Projects Section */}
      <SectionTemplate
        title={
          <div className={styles.sectionHeaderWithIcon}>
            <Building2 size={28} className={styles.sectionIcon} />
            <span>Company Projects</span>
          </div>
        }
        subtitle="Enterprise-scale projects delivered at leading technology companies"
      >
        {/* Featured Company Project */}
        <div className={styles.featuredProjectsGrid}>
          <div className={styles.featuredProjectCard}>
            <div className={styles.projectImageContainer}>
              <img 
                src={companyProjects.featured.image} 
                alt={companyProjects.featured.title} 
                className={styles.projectImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/default-project.jpg";
                }}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{companyProjects.featured.title}</h3>
              <div className={styles.projectMeta}>
                <span className={styles.projectDate}>
                  <Calendar size={16} />
                  {companyProjects.featured.date}
                </span>
                <span className={styles.companyBadge}>@ {companyProjects.featured.company}</span>
              </div>
              <p className={styles.projectDescription}>{companyProjects.featured.longDescription}</p>
              
              <div className={styles.projectTechnologies}>
                {companyProjects.featured.technologies.map((tech, index) => (
                  <span key={index} className={styles.technologyTag}>{tech}</span>
                ))}
              </div>
              
              <div className={styles.projectOutcomes}>
                <h4 className={styles.outcomesTitle}>Key Achievements</h4>
                <ul className={styles.outcomesList}>
                  {companyProjects.featured.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.projectLinks}>
                {companyProjects.featured.demoLink && (
                  <a href={companyProjects.featured.demoLink} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {companyProjects.featured.codeLink && (
                  <a href={companyProjects.featured.codeLink} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    View Code
                  </a>
                )}
                {!companyProjects.featured.codeLink && (
                  <span className={styles.proprietaryNote}>* Code is proprietary</span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Other Company Projects */}
        <div className={styles.additionalProjectsGrid}>
          {companyProjects.projects.map((project, index) => (
            <div key={index} className={styles.additionalProjectCard}>
              <h4 className={styles.additionalProjectTitle}>{project.title}</h4>
              <div className={styles.projectMeta}>
                <span className={styles.projectDate}>
                  <Calendar size={14} />
                  {project.date}
                </span>
                <span className={styles.companyBadge}>@ {project.company}</span>
              </div>
              <p className={styles.additionalProjectDescription}>{project.description}</p>
              
              <div className={styles.additionalProjectTechnologies}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.smallTechnologyTag}>{tech}</span>
                ))}
              </div>
              
              <div className={styles.projectOutcomes}>
                <h5 className={styles.outcomesTitle}>Key Achievements</h5>
                <ul className={styles.outcomesList}>
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.additionalProjectLinks}>
                {project.demoLink && (
                  <a href={project.demoLink} className={styles.smallProjectLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} />
                    Demo
                  </a>
                )}
                {project.codeLink && (
                  <a href={project.codeLink} className={styles.smallProjectLink} target="_blank" rel="noopener noreferrer">
                    <Github size={14} />
                    Code
                  </a>
                )}
                {!project.codeLink && (
                  <span className={styles.proprietaryNote}>* Proprietary</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionTemplate>

      {/* Personal Projects Section */}
      <SectionTemplate
        title={
          <div className={styles.sectionHeaderWithIcon}>
            <User size={28} className={styles.sectionIcon} />
            <span>Personal Projects</span>
          </div>
        }
        subtitle="Personal initiatives showcasing innovation and technical expertise"
        withBackground={true}
      >
        {/* Featured Personal Project */}
        <div className={styles.featuredProjectsGrid}>
          <div className={styles.featuredProjectCard}>
            <div className={styles.projectImageContainer}>
              <img 
                src={personalProjects.featured.image} 
                alt={personalProjects.featured.title} 
                className={styles.projectImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/default-project.jpg";
                }}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{personalProjects.featured.title}</h3>
              <div className={styles.projectMeta}>
                <span className={styles.projectDate}>
                  <Calendar size={16} />
                  {personalProjects.featured.date}
                </span>
                <span className={styles.personalBadge}>Personal Project</span>
              </div>
              <p className={styles.projectDescription}>{personalProjects.featured.longDescription}</p>
              
              <div className={styles.projectTechnologies}>
                {personalProjects.featured.technologies.map((tech, index) => (
                  <span key={index} className={styles.technologyTag}>{tech}</span>
                ))}
              </div>
              
              <div className={styles.projectOutcomes}>
                <h4 className={styles.outcomesTitle}>Key Features</h4>
                <ul className={styles.outcomesList}>
                  {personalProjects.featured.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.projectLinks}>
                {personalProjects.featured.demoLink && (
                  <a href={personalProjects.featured.demoLink} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {personalProjects.featured.codeLink && (
                  <a href={personalProjects.featured.codeLink} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Other Personal Projects */}
        <div className={styles.additionalProjectsGrid}>
          {personalProjects.projects.map((project, index) => (
            <div key={index} className={styles.additionalProjectCard}>
              <h4 className={styles.additionalProjectTitle}>{project.title}</h4>
              <div className={styles.projectMeta}>
                <span className={styles.projectDate}>
                  <Calendar size={14} />
                  {project.date}
                </span>
                <span className={styles.personalBadge}>Personal Project</span>
              </div>
              <p className={styles.additionalProjectDescription}>{project.description}</p>
              
              <div className={styles.additionalProjectTechnologies}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.smallTechnologyTag}>{tech}</span>
                ))}
              </div>
              
              <div className={styles.projectOutcomes}>
                <h5 className={styles.outcomesTitle}>Key Features</h5>
                <ul className={styles.outcomesList}>
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.additionalProjectLinks}>
                {project.demoLink && (
                  <a href={project.demoLink} className={styles.smallProjectLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} />
                    Demo
                  </a>
                )}
                {project.codeLink && (
                  <a href={project.codeLink} className={styles.smallProjectLink} target="_blank" rel="noopener noreferrer">
                    <Github size={14} />
                    Code
                  </a>
                )}
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
            <h3>Planning & Requirements</h3>
            <p>
              I begin each project with thorough requirements gathering, working closely with stakeholders 
              to understand business needs, technical constraints, and success criteria.
            </p>
          </div>
          
          <div className={styles.methodologyCard}>
            <h3>Architecture & Design</h3>
            <p>
              I prioritize creating scalable, maintainable architectures that balance immediate needs 
              with long-term flexibility and incorporate industry best practices.
            </p>
          </div>
          
          <div className={styles.methodologyCard}>
            <h3>Development & Testing</h3>
            <p>
              I follow agile methodologies with iterative development cycles, continuous integration, 
              and automated testing for regular feedback and early issue detection.
            </p>
          </div>
          
          <div className={styles.methodologyCard}>
            <h3>Deployment & Maintenance</h3>
            <p>
              I implement robust CI/CD pipelines for reliable deployments, comprehensive monitoring 
              for proactive issue detection, and thorough documentation.
            </p>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Explore More"
        centered={true}
      >
        <div className={styles.exploreMoreSection}>
          <p className={styles.exploreMoreDescription}>
            Interested in seeing more of my work or discussing a specific project in detail?
          </p>
          <div className={styles.exploreMoreButtons}>
            <Link 
              to="/recruitment-specialist/contact" 
              className={styles.primaryButton}
            >
              Contact Me
            </Link>
            <a 
              href="https://github.com/spnarkhede" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}