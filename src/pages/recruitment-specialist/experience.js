import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import Timeline, { TimelineItem } from '../../components/Timeline';
import ProfessionalTimeline from './components/ProfessionalTimeline';
import styles from './styles.module.css';
import { Briefcase, Award, Code, Building } from 'lucide-react';

export default function RecruitmentSpecialistExperience() {
  const experienceItems = [
    {
      title: "Senior DevOps Engineer",
      subtitle: "Tech Innovations Inc.",
      period: "2023 - Present",
      content: (
        <div>
          <p>Leading DevOps initiatives across multiple product teams, implementing CI/CD pipelines, and optimizing cloud infrastructure.</p>
          <ul>
            <li>Reduced deployment time by 70% through automation and pipeline optimization</li>
            <li>Implemented infrastructure as code using Terraform and AWS CloudFormation</li>
            <li>Led migration from monolithic architecture to microservices</li>
            <li>Mentored junior engineers and established DevOps best practices</li>
          </ul>
        </div>
      ),
      tags: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Docker", "Microservices"],
      icon: <Briefcase size={16} />,
      expandable: true
    },
    {
      title: "Full Stack Developer",
      subtitle: "Digital Solutions Group",
      period: "2021 - 2023",
      content: (
        <div>
          <p>Developed and maintained web applications for enterprise clients, focusing on scalable and maintainable code.</p>
          <ul>
            <li>Built responsive web applications using React and Node.js</li>
            <li>Implemented RESTful APIs and GraphQL endpoints</li>
            <li>Collaborated with UX/UI designers to implement pixel-perfect interfaces</li>
            <li>Participated in agile development processes and sprint planning</li>
          </ul>
        </div>
      ),
      tags: ["React", "Node.js", "GraphQL", "MongoDB", "Express", "TypeScript"],
      icon: <Code size={16} />,
      expandable: true
    },
    {
      title: "Software Engineer",
      subtitle: "InnovateTech Solutions",
      period: "2019 - 2021",
      content: (
        <div>
          <p>Worked on developing and maintaining enterprise software solutions for clients in finance and healthcare sectors.</p>
          <ul>
            <li>Developed features for a healthcare management system serving 50+ clinics</li>
            <li>Implemented secure authentication and authorization systems</li>
            <li>Optimized database queries resulting in 40% performance improvement</li>
            <li>Participated in code reviews and maintained high code quality standards</li>
          </ul>
        </div>
      ),
      tags: ["Java", "Spring Boot", "SQL", "JavaScript", "Angular", "REST APIs"],
      icon: <Building size={16} />,
      expandable: true
    },
    {
      title: "Junior Developer",
      subtitle: "StartUp Ventures",
      period: "2018 - 2019",
      content: (
        <div>
          <p>Contributed to the development of a SaaS platform for small businesses, focusing on frontend development.</p>
          <ul>
            <li>Implemented UI components using React and styled-components</li>
            <li>Fixed bugs and improved application performance</li>
            <li>Assisted in implementing responsive design for mobile devices</li>
            <li>Participated in user testing and feedback incorporation</li>
          </ul>
        </div>
      ),
      tags: ["HTML/CSS", "JavaScript", "React", "Git", "Responsive Design"],
      icon: <Code size={16} />,
      expandable: true
    }
  ];

  const educationItems = [
    {
      title: "Master of Science in Computer Science",
      subtitle: "Stanford University",
      period: "2016 - 2018",
      content: (
        <div>
          <p>Specialized in Software Engineering and Distributed Systems. Graduated with honors.</p>
          <p>Key courses included:</p>
          <ul>
            <li>Advanced Algorithms</li>
            <li>Distributed Systems</li>
            <li>Cloud Computing</li>
            <li>Machine Learning Fundamentals</li>
          </ul>
        </div>
      ),
      tags: ["Computer Science", "Software Engineering", "Distributed Systems"],
      icon: <Award size={16} />,
      expandable: true
    },
    {
      title: "Bachelor of Technology in Computer Engineering",
      subtitle: "Indian Institute of Technology",
      period: "2012 - 2016",
      content: (
        <div>
          <p>Graduated with First Class Honors. Active member of the Coding Club and participated in multiple hackathons.</p>
          <p>Notable projects:</p>
          <ul>
            <li>Developed a real-time collaborative code editor for final year project</li>
            <li>Created an automated attendance system using facial recognition</li>
            <li>Contributed to open-source projects in the university repository</li>
          </ul>
        </div>
      ),
      tags: ["Computer Engineering", "Data Structures", "Algorithms", "Software Development"],
      icon: <Award size={16} />,
      expandable: true
    }
  ];

  return (
    <DashboardLayout
      role="recruitment-specialist"
      activeTab="experience"
      title="Recruitment Specialist | Experience"
      description="Shubham Narkhede's professional experience and career timeline"
    >
      <SectionTemplate
        title="Professional Experience Timeline"
        subtitle="Click on company or year to view detailed professional information."
      >
        <ProfessionalTimeline />
      </SectionTemplate>

      <SectionTemplate
        title="Professional Experience"
        subtitle="A chronological overview of my career journey"
      >
        <Timeline items={experienceItems} />
      </SectionTemplate>

      <SectionTemplate
        title="Education"
        subtitle="Academic background and qualifications"
      >
        <Timeline items={educationItems} />
      </SectionTemplate>

      <SectionTemplate
        title="Career Highlights"
        subtitle="Key achievements and milestones"
        withBackground={true}
        className={styles.careerHighlights}
      >
        <div className={styles.highlightsGrid}>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>
              <Code size={24} />
            </div>
            <h3 className={styles.highlightTitle}>Technical Leadership</h3>
            <p className={styles.highlightDescription}>
              Led the architecture and implementation of a microservices-based platform that scaled to support 2 million daily active users.
            </p>
          </div>
          
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>
              <Briefcase size={24} />
            </div>
            <h3 className={styles.highlightTitle}>Project Management</h3>
            <p className={styles.highlightDescription}>
              Successfully managed cross-functional teams to deliver 15+ projects on time and within budget, with a client satisfaction rate of 98%.
            </p>
          </div>
          
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>
              <Award size={24} />
            </div>
            <h3 className={styles.highlightTitle}>Recognition</h3>
            <p className={styles.highlightDescription}>
              Received the "Innovation Excellence" award for developing an automated deployment system that reduced release cycles by 60%.
            </p>
          </div>
          
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>
              <Building size={24} />
            </div>
            <h3 className={styles.highlightTitle}>Industry Impact</h3>
            <p className={styles.highlightDescription}>
              Contributed to open-source projects with over 5,000 stars on GitHub and presented at three major tech conferences.
            </p>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
