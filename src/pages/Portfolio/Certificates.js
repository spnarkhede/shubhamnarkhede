// Certificates page

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ExternalLink, Calendar, Award } from 'lucide-react';
import styles from './styles.module.css';

export default function Certificates() {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "September 2022",
      validUntil: "September 2025",
      credentialId: "AWS-ASA-12345",
      description: "Validates expertise in designing distributed systems on AWS, including deployment of compute, storage, database, and networking services according to architectural best practices.",
      skills: ["AWS", "Cloud Architecture", "Distributed Systems", "Security", "Networking"],
      logo: "/img/certificates/aws-certified-solutions-architect.png",
      verificationUrl: "https://www.credly.com/badges/example"
    },
    {
      title: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      date: "March 2021",
      validUntil: "March 2023",
      credentialId: "CSM-123456",
      description: "Demonstrates knowledge of Scrum methodologies and their practical application in software development teams. Skilled in facilitating sprint planning, daily standups, reviews, and retrospectives.",
      skills: ["Agile", "Scrum", "Project Management", "Team Leadership", "Sprint Planning"],
      logo: "/img/certificates/certified-scrum-master.png",
      verificationUrl: "https://certification.scrumalliance.org/verify"
    },
    {
      title: "Angular Certified Developer",
      issuer: "Google",
      date: "July 2020",
      validUntil: "No Expiration",
      credentialId: "ACD-2020-07123",
      description: "Certified expertise in building applications with Angular, including component architecture, state management, routing, and integration with backend services.",
      skills: ["Angular", "TypeScript", "Frontend Development", "SPA", "Component Architecture"],
      logo: "/img/certificates/angular-certified-developer.png",
      verificationUrl: "https://www.angulartraining.com/certification.html"
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "January 2021",
      validUntil: "January 2023",
      credentialId: "MSFT-AZ204-12345",
      description: "Validates skills in developing solutions that use Azure services, including compute, storage, security, and API integration. Demonstrates proficiency in Azure SDKs, data storage options, and authentication methods.",
      skills: ["Azure", "Cloud Development", "Serverless", "Microservices", "API Management"],
      logo: "/img/certificates/microsoft-azure-developer.png",
      verificationUrl: "https://learn.microsoft.com/en-us/certifications/azure-developer/"
    },
    {
      title: "Professional Scrum Developer I (PSD I)",
      issuer: "Scrum.org",
      date: "May 2021",
      validUntil: "No Expiration",
      credentialId: "PSD-I-12345",
      description: "Demonstrates understanding of how to build complex software products using Scrum. Validates knowledge of Scrum framework, development practices, and collaboration in a Scrum Team.",
      skills: ["Scrum", "DevOps", "Continuous Integration", "Test-Driven Development", "Pair Programming"],
      logo: "/img/certificates/professional-scrum-developer.png",
      verificationUrl: "https://www.scrum.org/certificates/verify"
    },
    {
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB",
      date: "November 2020",
      validUntil: "November 2023",
      credentialId: "MCD-2020-11123",
      description: "Validates skills in developing applications using MongoDB, including data modeling, CRUD operations, indexing, aggregation, and performance optimization.",
      skills: ["MongoDB", "NoSQL", "Database Design", "Data Modeling", "Query Optimization"],
      logo: "/img/certificates/mongodb-certified-developer.png",
      verificationUrl: "https://university.mongodb.com/certification/verify"
    }
  ];

  return (
    <Layout
      title="Certificates"
      description="Professional certificates and credentials of Shubham Narkhede, showcasing expertise in various technologies and methodologies."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Professional Certificates</h1>
            <p className="margin-bottom--lg">
              Throughout my career, I've pursued continuous learning and professional development
              through various certification programs. These certifications validate my expertise
              in different technologies, methodologies, and best practices.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col col--10 col--offset-1">
            <div className={styles.certificatesGrid}>
              {certificates.map((cert, index) => (
                <div key={index} className={styles.certificateCard}>
                  <div className={styles.certificateHeader}>
                    <div className={styles.certificateLogo}>
                      <img 
                        src={cert.logo} 
                        alt={`${cert.issuer} logo`} 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src="/img/default-certificate.png";
                        }}
                      />
                    </div>
                    <div className={styles.certificateHeaderContent}>
                      <h3 className={styles.certificateTitle}>{cert.title}</h3>
                      <div className={styles.certificateIssuer}>{cert.issuer}</div>
                      
                      <div className={styles.certificateMetadata}>
                        <div className={styles.certificateDate}>
                          <Calendar size={14} />
                          <span>Issued: {cert.date}</span>
                        </div>
                        {cert.validUntil && (
                          <div className={styles.certificateValidity}>
                            <span>Valid until: {cert.validUntil}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.certificateBody}>
                    <p className={styles.certificateDescription}>{cert.description}</p>
                    
                    <div className={styles.certificateCredential}>
                      <Award size={14} />
                      <span>Credential ID: {cert.credentialId}</span>
                    </div>
                    
                    <div className={styles.certificateSkills}>
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className={styles.certificateSkill}>{skill}</span>
                      ))}
                    </div>
                    
                    {cert.verificationUrl && (
                      <a 
                        href={cert.verificationUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.certificateVerifyLink}
                      >
                        <ExternalLink size={14} />
                        Verify Certificate
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="row margin-top--xl">
          <div className="col col--8 col--offset-2">
            <div className={styles.certificateNote}>
              <h3>Continuous Learning</h3>
              <p>
                I believe in lifelong learning and regularly update my skills through online courses, 
                workshops, and certification programs. In addition to the formal certifications listed above, 
                I've completed numerous specialized courses on platforms like Coursera, Udemy, and LinkedIn Learning.
              </p>
              <p>
                I'm currently pursuing additional certifications in cloud architecture and DevOps practices 
                to further enhance my expertise in these areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
