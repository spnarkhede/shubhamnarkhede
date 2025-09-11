import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import { SkillsMatrix } from '../../components/SkillsMatrix';
import styles from './styles.module.css';
import { Award, CheckCircle, Globe } from 'lucide-react';

export default function RecruitmentSpecialistSkills() {
  const skills = {
    "Technical Skills": [
      { name: "React", level: 5 },
      { name: "Node.js", level: 4 },
      { name: "JavaScript/TypeScript", level: 5 },
      { name: "AWS", level: 4 },
      { name: "Docker", level: 4 },
      { name: "Kubernetes", level: 3 },
      { name: "CI/CD", level: 4 }
    ],
    "DevOps & Infrastructure": [
      { name: "Infrastructure as Code", level: 4 },
      { name: "Monitoring & Logging", level: 4 },
      { name: "Cloud Architecture", level: 4 },
      { name: "Security Best Practices", level: 3 },
      { name: "Performance Optimization", level: 4 }
    ],
    "Backend Development": [
      { name: "RESTful APIs", level: 5 },
      { name: "GraphQL", level: 4 },
      { name: "Database Design", level: 4 },
      { name: "Microservices", level: 4 },
      { name: "Authentication/Authorization", level: 4 }
    ],
    "Soft Skills": [
      { name: "Team Leadership", level: 4 },
      { name: "Communication", level: 5 },
      { name: "Problem Solving", level: 5 },
      { name: "Project Management", level: 4 },
      { name: "Mentoring", level: 4 }
    ]
  };

  const languages = [
    {
      name: "English",
      proficiency: "Professional Working",
      level: "C1/C2",
      description: "Fluent in business and technical communication",
      context: "Daily work language, technical documentation, presentations",
      flag: "🇬🇧"
    },
    {
      name: "German",
      proficiency: "Intermediate",
      level: "B1",
      description: "Conversational level with ongoing improvement",
      context: "Living and working in Germany, local interactions",
      flag: "🇩🇪"
    },
    {
      name: "Hindi",
      proficiency: "Native",
      level: "Native",
      description: "Native fluency in speaking and writing",
      context: "Personal communication, cultural context",
      flag: "🇮🇳"
    },
    {
      name: "Marathi",
      proficiency: "Native (Mother Tongue)",
      level: "Native",
      description: "Mother tongue with complete fluency",
      context: "Family communication, regional cultural context",
      flag: "🇮🇳"
    },
    {
      name: "Punjabi",
      proficiency: "Basic Understanding",
      level: "A2",
      description: "Understanding of spoken language",
      context: "Regional communication, cultural awareness",
      flag: "🇮🇳"
    },
    {
      name: "Sanskrit",
      proficiency: "Academic Level",
      level: "B1",
      description: "Reading, writing, and listening comprehension with basic speaking",
      context: "Religious texts, cultural studies, academic research",
      flag: "🇮🇳"
    },
    {
      name: "Urdu",
      proficiency: "Conversational",
      level: "B1",
      description: "Speaking and listening skills",
      context: "Cultural communication, poetry appreciation",
      flag: "🇵🇰"
    },
    {
      name: "Bengali",
      proficiency: "Basic Understanding",
      level: "A2",
      description: "Understanding of spoken language",
      context: "Regional interactions, cultural awareness",
      flag: "🇧🇩"
    },
    {
      name: "Gujarati",
      proficiency: "Proficient",
      level: "B2",
      description: "Reading, writing, listening, and speaking skills",
      context: "Business communication, regional interactions",
      flag: "🇮🇳"
    },
    {
      name: "Nepali",
      proficiency: "Basic Understanding",
      level: "A2",
      description: "Understanding of spoken language",
      context: "Regional communication, cultural awareness",
      flag: "🇳🇵"
    },
    {
      name: "Konkani",
      proficiency: "Basic Understanding",
      level: "A2",
      description: "Understanding of spoken language",
      context: "Regional communication, cultural heritage",
      flag: "🇮🇳"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified DevOps Engineer - Professional",
      issuer: "Amazon Web Services",
      date: "2024",
      validUntil: "2027",
      credentialId: "AWS-DEP-12345",
      description: "Validates technical expertise in designing, implementing, and managing continuous delivery systems and methodologies on the AWS platform.",
      skills: ["AWS", "CI/CD", "Infrastructure as Code", "Monitoring", "Security"],
      verificationUrl: "https://aws.amazon.com/verification"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      validUntil: "2026",
      credentialId: "CKA-1234-5678-9012",
      description: "Demonstrates proficiency in Kubernetes installation, configuration, and management in production environments.",
      skills: ["Kubernetes", "Container Orchestration", "Cloud Native", "Microservices"],
      verificationUrl: "https://www.cncf.io/certification/verify"
    },
    {
      name: "Microsoft Certified: Azure DevOps Engineer Expert",
      issuer: "Microsoft",
      date: "2023",
      validUntil: "2025",
      credentialId: "MS-ADOE-987654",
      description: "Validates expertise in designing and implementing DevOps practices for building, testing, and maintaining applications on Microsoft Azure.",
      skills: ["Azure", "DevOps", "CI/CD", "Infrastructure as Code", "Monitoring"],
      verificationUrl: "https://learn.microsoft.com/en-us/certifications/azure-devops"
    },
    {
      name: "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      date: "2022",
      validUntil: "No Expiration",
      credentialId: "PSM-I-123456",
      description: "Demonstrates understanding of Scrum framework and ability to apply Scrum in team environments.",
      skills: ["Agile", "Scrum", "Project Management", "Team Leadership"],
      verificationUrl: "https://www.scrum.org/certificates/verify"
    }
  ];

  return (
    <DashboardLayout
      role="recruitment-specialist"
      activeTab="skills"
      title="Recruitment Specialist | Skills & Certifications"
      description="Shubham Narkhede's technical skills, expertise, and professional certifications"
    >
      <SectionTemplate
        title="Technical Proficiency"
        subtitle="Overview of my technical skills and expertise levels"
      >
        <SkillsMatrix skills={skills} />
      </SectionTemplate>

      <SectionTemplate
        title="Language Proficiency"
        subtitle="Multilingual communication abilities for global collaboration"
        className={styles.languagesSection}
      >
        <div className={styles.languagesGrid}>
          {languages.map((language, index) => (
            <div key={index} className={styles.languageCard}>
              <div className={styles.languageHeader}>
                <div className={styles.languageFlag}>
                  {language.flag}
                </div>
                <div className={styles.languageHeaderContent}>
                  <h3 className={styles.languageName}>{language.name}</h3>
                  <div className={styles.languageLevel}>
                    <Globe size={16} />
                    <span>{language.level}</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.languageBody}>
                <div className={styles.languageProficiency}>
                  <strong>{language.proficiency}</strong>
                </div>
                <p className={styles.languageDescription}>{language.description}</p>
                <div className={styles.languageContext}>
                  <em>Usage: {language.context}</em>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
          title="Professional Certifications"
          subtitle="Industry-recognized certifications and credentials"
          className={styles.certificationsSection}
        >
          <div className={styles.certificatesGrid}>
            {certifications.map((cert, index) => (
              <div key={index} className={styles.certificateCard}>
                <div className={styles.certificateHeader}>
                  <div className={styles.certificateLogo}>
                    <Award size={32} />
                  </div>
                  <div className={styles.certificateHeaderContent}>
                    <h3 className={styles.certificateTitle}>{cert.name}</h3>
                    <p className={styles.certificateIssuer}>{cert.issuer}</p>
                    <div className={styles.certificateMetadata}>
                      <div className={styles.certificateDate}>
                        <span>📅 Issued:</span>
                        <span>{cert.date}</span>
                      </div>
                      <div className={styles.certificateValidity}>
                        <span>⏳ Valid Until:</span>
                        <span>{cert.validUntil}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.certificateBody}>
                  <p className={styles.certificateDescription}>{cert.description}</p>

                  <div className={styles.certificateCredential}>
                    <strong>Credential ID:</strong> {cert.credentialId}
                  </div>

                  <div className={styles.certificateSkills}>
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={styles.certificateSkill}>
                        <CheckCircle size={14} /> {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certificateVerifyLink}
                  >
                    🔗 Verify Credential
                  </a>
                </div>
              </div>
            ))}
          </div>
        </SectionTemplate>



      <SectionTemplate
        title="Continuous Learning"
        subtitle="My approach to skill development and ongoing education"
        withBackground={true}
      >
        <div className={styles.learningSection}>
          <p className={styles.learningSectionText}>
            I am committed to continuous learning and staying current with industry trends and technologies.
            My approach to professional development includes:
          </p>
          
          <div className={styles.learningApproaches}>
            <div className={styles.learningApproach}>
              <h3>Structured Learning</h3>
              <p>
                I regularly complete online courses and certification programs to deepen my knowledge in specific areas.
                Recent courses include Advanced Kubernetes Security and Enterprise Cloud Architecture.
              </p>
            </div>
            
            <div className={styles.learningApproach}>
              <h3>Hands-on Projects</h3>
              <p>
                I believe in learning by doing, so I regularly work on side projects to experiment with new technologies
                and methodologies. This practical approach helps solidify theoretical knowledge.
              </p>
            </div>
            
            <div className={styles.learningApproach}>
              <h3>Community Engagement</h3>
              <p>
                I actively participate in tech communities, attend conferences, and contribute to open-source projects.
                This keeps me connected to the broader tech ecosystem and exposes me to diverse perspectives.
              </p>
            </div>
            
            <div className={styles.learningApproach}>
              <h3>Knowledge Sharing</h3>
              <p>
                I regularly write technical articles and mentor junior developers. Teaching others is one of the
                most effective ways to deepen my own understanding and identify knowledge gaps.
              </p>
            </div>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
