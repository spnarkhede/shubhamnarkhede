// src/pages/recruitment-specialist/components/ProfessionalTimeline.js
import React, { useState, useCallback } from 'react';
import { 
  Building, 
  Calendar, 
  Award, 
  Target,
  Zap,
  TrendingUp,
  Code,
  Brain,
  User,
  BookOpen,
  FolderOpen,
  MapPin,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import styles from './ProfessionalTimeline.module.css';

const PROFESSIONAL_EXPERIENCES = [
  {
    id: 1,
    company: 'Robert Bosch GmbH',
    position: 'Senior DevOps Engineer',
    period: '2022 – Present',
    years: '2022 – 2025',
    location: 'Stuttgart, Germany',
    tasks: [
      'Lead DevOps transformation initiatives across multiple product teams',
      'Design and implement cloud-native infrastructure solutions',
      'Mentor junior engineers and establish DevOps best practices',
      'Manage CI/CD pipeline architecture and deployment strategies'
    ],
    challenges: [
      'Modernizing legacy infrastructure while maintaining system stability',
      'Implementing security standards across distributed teams',
      'Scaling deployment processes for high-frequency releases',
      'Coordinating multi-team adoption of new DevOps practices'
    ],
    actions: [
      'Implemented infrastructure as code using Terraform and Ansible',
      'Established automated security scanning and compliance checks',
      'Created comprehensive documentation and training programs',
      'Built monitoring and alerting systems for proactive issue resolution'
    ],
    results: [
      'Zero security breaches maintained for 2+ years',
      'Increased deployment frequency by 70% with reduced failure rates',
      'Achieved 99.9% system uptime across all managed services',
      'Recognized as "DevOps Champion of the Year 2023"'
    ],
    measurableImpacts: [
      '40% reduction in infrastructure costs through optimization',
      '60% faster incident response time with automated monitoring',
      '90% reduction in manual deployment efforts',
      '85% improvement in team productivity metrics'
    ],
    technologies: [
      'Kubernetes', 'Docker', 'Terraform', 'AWS', 'Jenkins', 
      'Prometheus', 'Grafana', 'Ansible', 'GitLab CI/CD'
    ],
    derivedSkills: [
      'Cloud Architecture Design', 'Infrastructure as Code', 
      'Security Automation', 'Team Leadership', 'Process Optimization'
    ],
    personalStrengths: [
      'Strategic Thinking', 'Problem Solving', 'Team Collaboration', 
      'Continuous Learning', 'Innovation Leadership'
    ],
    derivedKnowledge: [
      'Advanced cloud security principles', 'Microservices architecture patterns',
      'DevOps culture transformation', 'Automated testing strategies'
    ],
    projectTitles: [
      { name: 'Cloud Migration Platform', link: '/projects/cloud-migration' },
      { name: 'Security Automation Suite', link: '/projects/security-automation' }
    ]
  },
  {
    id: 2,
    company: 'Robert Bosch GmbH',
    position: 'DevOps Engineer',
    period: '2020 – 2022',
    years: '2020 – 2022',
    location: 'Stuttgart, Germany',
    tasks: [
      'Implement automated testing and deployment pipelines',
      'Manage containerized applications and orchestration',
      'Collaborate with development teams on CI/CD optimization',
      'Monitor system performance and implement improvements'
    ],
    challenges: [
      'Migrating monolithic applications to microservices architecture',
      'Ensuring consistent deployment across multiple environments',
      'Implementing comprehensive logging and monitoring solutions',
      'Managing complex dependency chains in deployment pipelines'
    ],
    actions: [
      'Designed modular CI/CD pipeline architecture',
      'Implemented centralized logging with ELK stack',
      'Created automated rollback mechanisms for failed deployments',
      'Established code quality gates and automated testing protocols'
    ],
    results: [
      'Successfully migrated 15 legacy applications to cloud',
      'Achieved 100% automated test coverage for critical systems',
      'Received "Innovation Excellence Award" for automation solutions',
      'Built disaster recovery systems with 99.99% reliability'
    ],
    measurableImpacts: [
      '85% reduction in security vulnerabilities through systematic audits',
      '90% decrease in manual deployment efforts',
      '50% improvement in application performance',
      '75% faster time-to-market for new features'
    ],
    technologies: [
      'Azure', 'Docker', 'Jenkins', 'Python', 'Ansible', 
      'ELK Stack', 'Git', 'Terraform', 'Kubernetes'
    ],
    derivedSkills: [
      'Container Orchestration', 'Automated Testing', 
      'Performance Monitoring', 'Security Implementation'
    ],
    personalStrengths: [
      'Analytical Thinking', 'Detail Orientation', 'Adaptability', 
      'Technical Innovation', 'Cross-team Communication'
    ],
    derivedKnowledge: [
      'Microservices design patterns', 'Container security best practices',
      'Monitoring and observability', 'Automated deployment strategies'
    ],
    projectTitles: [
      { name: 'Microservices Migration', link: '/projects/microservices' },
      { name: 'Automated Testing Framework', link: '/projects/testing-framework' }
    ]
  },
  {
    id: 3,
    company: 'Bosch Rexroth AG',
    position: 'Software Application Developer',
    period: '2019 – 2020',
    years: '2019 – 2020',
    location: 'Lohr am Main, Germany',
    tasks: [
      'Develop industrial automation software solutions',
      'Design user interfaces for hydraulic system control',
      'Integrate with existing Bosch technology ecosystem',
      'Collaborate with hardware engineers on system requirements'
    ],
    challenges: [
      'Learning industrial automation domain from software background',
      'Integrating with legacy control systems and protocols',
      'Meeting strict real-time performance requirements',
      'Ensuring safety compliance in industrial environments'
    ],
    actions: [
      'Completed comprehensive training in industrial automation',
      'Developed modular software architecture for reusability',
      'Implemented real-time data processing algorithms',
      'Created comprehensive testing protocols for safety validation'
    ],
    results: [
      'Delivered 5 major industrial automation projects on schedule',
      'Earned certification in Industrial Automation Systems',
      'Contributed to 3 patent applications for automation solutions',
      'Successfully integrated with legacy industrial systems'
    ],
    measurableImpacts: [
      '25% improvement in system efficiency through optimization',
      '30% reduction in maintenance costs through predictive analytics',
      '99.8% system reliability in production environments',
      '20% faster processing time for control algorithms'
    ],
    technologies: [
      'PLC Programming', 'HMI Development', 'SCADA', 'Industrial IoT', 
      'C++', 'LabVIEW', 'CAN Protocol', 'OPC UA'
    ],
    derivedSkills: [
      'Industrial System Design', 'Real-time Programming', 
      'Safety-Critical Development', 'Hardware-Software Integration'
    ],
    personalStrengths: [
      'Domain Adaptation', 'Precision Engineering', 'Safety Mindset', 
      'System Integration', 'Quality Focus'
    ],
    derivedKnowledge: [
      'Industrial automation principles', 'Safety-critical system design',
      'Real-time system optimization', 'Industrial communication protocols'
    ],
    projectTitles: [
      { name: 'Hydraulic Control System', link: '/projects/hydraulic-control' },
      { name: 'Predictive Maintenance Platform', link: '/projects/predictive-maintenance' }
    ]
  },
  {
    id: 4,
    company: 'Amazon',
    position: 'Software Developer',
    period: '2018 – 2019',
    years: '2018 – 2019',
    location: 'Hyderabad, India',
    tasks: [
      'Design and implement scalable business process solutions',
      'Collaborate with UX designers and product managers',
      'Develop microservices for large-scale distributed systems',
      'Participate in code reviews and architectural decisions'
    ],
    challenges: [
      'Working with massive scale systems serving millions of users',
      'Maintaining high performance under extreme load conditions',
      'Coordinating with global teams across different time zones',
      'Implementing features with strict backward compatibility requirements'
    ],
    actions: [
      'Designed scalable microservice architecture patterns',
      'Implemented comprehensive monitoring and logging solutions',
      'Created automated testing suites for high-confidence deployments',
      'Established performance optimization protocols'
    ],
    results: [
      'Developed features used by millions of Amazon customers',
      'Successfully launched 3 major product features',
      'Received "Customer Obsession Award" for user-centric solutions',
      'Mentored 2 intern developers to full-time conversion'
    ],
    measurableImpacts: [
      '40% improvement in application performance through optimization',
      '50% reduction in system latency through architectural improvements',
      '99.99% uptime for customer-facing services',
      '30% increase in user engagement for developed features'
    ],
    technologies: [
      'Java', 'Spring Boot', 'AWS', 'DynamoDB', 'Microservices', 
      'RESTful APIs', 'Kotlin', 'TypeScript', 'Lambda'
    ],
    derivedSkills: [
      'Large-Scale System Design', 'Performance Optimization', 
      'Distributed Systems', 'Customer-Centric Development'
    ],
    personalStrengths: [
      'Scale Thinking', 'Customer Focus', 'Innovation Drive', 
      'Global Collaboration', 'Technical Excellence'
    ],
    derivedKnowledge: [
      'Distributed system design patterns', 'Performance optimization techniques',
      'Customer-centric product development', 'Agile development methodologies'
    ],
    projectTitles: [
      { name: 'Business Process Automation', link: '/projects/process-automation' },
      { name: 'Customer Analytics Platform', link: '/projects/analytics-platform' }
    ]
  },
  {
    id: 5,
    company: 'Tech Startup',
    position: 'Junior Software Developer',
    period: '2017 – 2018',
    years: '2017 – 2018',
    location: 'Pune, India',
    tasks: [
      'Develop full-stack web applications from requirements',
      'Learn industry best practices and coding standards',
      'Participate in agile development processes',
      'Create responsive user interfaces and backend APIs'
    ],
    challenges: [
      'Transitioning from academic learning to professional development',
      'Learning multiple technologies and frameworks simultaneously',
      'Working under tight deadlines with limited resources',
      'Ensuring code quality while meeting project timelines'
    ],
    actions: [
      'Established structured learning approach for new technologies',
      'Implemented code review processes for quality assurance',
      'Created comprehensive testing protocols for applications',
      'Built reusable component libraries for faster development'
    ],
    results: [
      'Successfully completed 8 client projects within deadlines',
      'Built responsive web applications serving 10,000+ users',
      'Earned "Rising Star Developer" recognition',
      'Contributed to open-source projects gaining 500+ GitHub stars'
    ],
    measurableImpacts: [
      '60% improvement in code quality scores through peer reviews',
      '45% reduction in bug reports through comprehensive testing',
      '30% faster development time through reusable components',
      '95% client satisfaction rate for delivered projects'
    ],
    technologies: [
      'JavaScript', 'React', 'Node.js', 'MongoDB', 'HTML5', 
      'CSS3', 'Git', 'Express.js', 'Bootstrap'
    ],
    derivedSkills: [
      'Full-Stack Development', 'Agile Methodologies', 
      'Client Communication', 'Rapid Learning'
    ],
    personalStrengths: [
      'Quick Learning', 'Adaptability', 'Attention to Detail', 
      'Team Collaboration', 'Problem Solving'
    ],
    derivedKnowledge: [
      'Modern web development practices', 'Client relationship management',
      'Agile project management', 'Software development lifecycle'
    ],
    projectTitles: [
      { name: 'E-commerce Platform', link: '/projects/ecommerce' },
      { name: 'Customer Management System', link: '/projects/cms' }
    ]
  }
];

const ProfessionalTimeline = () => {
  const [selectedExperience, setSelectedExperience] = useState(PROFESSIONAL_EXPERIENCES[0]);

  const handleExperienceSelect = useCallback((experience) => {
    setSelectedExperience(experience);
  }, []);

  // Sort experiences by most recent first for display
  const sortedExperiences = [...PROFESSIONAL_EXPERIENCES].sort((a, b) => {
    const getYear = (period) => {
      const match = period.match(/(\d{4})/);
      return match ? parseInt(match[1]) : 0;
    };
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <div className={styles.professionalTimeline} role="main" aria-label="Professional Experience Timeline">
      {/* Header */}
      {/* <div className={styles.timelineHeader}>
        <div className={styles.headerContent}>
          <h3>Professional Experience Timeline</h3>
          <p>Click on any company or year to view detailed professional information.</p>
        </div>
      </div> */}

      {/* Two-Column Layout */}
      <div className={styles.twoColumnLayout}>
        {/* Left Column - Combined Company Names and Timeline */}
        <div className={styles.leftColumn}>
          <h4 className={styles.columnTitle}>Career Timeline</h4>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineLineVertical} />
            {sortedExperiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`${styles.timelineItem} ${
                  selectedExperience.id === experience.id ? styles.active : ''
                }`}
                style={{ top: `${(index * 100) / (sortedExperiences.length - 1)}%` }}
              >
                <div className={styles.yearDot} />
                <div className={styles.timelineContent}>
                  <button
                    className={styles.companyButton}
                    onClick={() => handleExperienceSelect(experience)}
                    aria-pressed={selectedExperience.id === experience.id}
                  >
                    <div className={styles.yearLabel}>{experience.years}</div>
                    <div className={styles.companyName}>{experience.company}</div>
                    <div className={styles.companyRole}>{experience.position}</div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Simple Content Display */}
        <div className={styles.rightColumn}>
          <div className={styles.detailContent}>
            {/* Company Header */}
            <div className={styles.detailHeader}>
              <h4 className={styles.selectedCompany}>
                {selectedExperience.company}
              </h4>
              <div className={styles.selectedMeta}>
                <div className={styles.selectedLocation}>
                  <MapPin size={14} />
                  {selectedExperience.location}
                </div>
                <div className={styles.selectedPeriod}>
                  <Calendar size={14} />
                  {selectedExperience.years}
                </div>
              </div>
              <div className={styles.selectedPosition}>
                {selectedExperience.position}
              </div>
            </div>

            {/* Simple Content Sections - No Expansion */}
            <div className={styles.contentSections}>
              <div className={styles.contentSection}>
                <h5><Target size={16} /> Tasks</h5>
                <ul className={styles.contentList}>
                  {selectedExperience.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.contentSection}>
                <h5><Zap size={16} /> Challenges / Problem Assignments</h5>
                <ul className={styles.contentList}>
                  {selectedExperience.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.contentSection}>
                <h5><Building size={16} /> Actions / Solutions</h5>
                <ul className={styles.contentList}>
                  {selectedExperience.actions.map((action, index) => (
                    <li key={index}>{action}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.contentSection}>
                <h5><Award size={16} /> Results / Achievements / Recognitions</h5>
                <ul className={styles.contentList}>
                  {selectedExperience.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.contentSection}>
                <h5><TrendingUp size={16} /> Measurable Impacts</h5>
                <ul className={styles.contentList}>
                  {selectedExperience.measurableImpacts.map((impact, index) => (
                    <li key={index}>{impact}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.contentSection}>
                <h5><Code size={16} /> Technologies</h5>
                <div className={styles.techList}>
                  {selectedExperience.technologies.map((tech, index) => (
                    <span key={index} className={styles.techItem}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.contentSection}>
                <h5><Brain size={16} /> Derived Skills</h5>
                <ul className={styles.contentList}>
                  {selectedExperience.derivedSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.contentSection}>
                <h5><User size={16} /> Personal Strengths</h5>
                <ul className={styles.contentList}>
                  {selectedExperience.personalStrengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.contentSection}>
                <h5><BookOpen size={16} /> Derived Knowledge</h5>
                <ul className={styles.contentList}>
                  {selectedExperience.derivedKnowledge.map((knowledge, index) => (
                    <li key={index}>{knowledge}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.contentSection}>
                <h5><FolderOpen size={16} /> Project Titles</h5>
                <ul className={styles.contentList}>
                  {selectedExperience.projectTitles.map((project, index) => (
                    <li key={index}>
                      <a 
                        href={project.link} 
                        className={styles.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.name}
                        <ExternalLink size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTimeline;
