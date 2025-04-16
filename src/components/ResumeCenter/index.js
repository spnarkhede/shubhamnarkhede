import React from 'react';
import styles from './styles.module.css';
import { FileText, Download, FileCheck, Calendar } from 'lucide-react';

export default function ResumeCenter() {
  const documents = [
    {
      title: "Curriculum Vitae (CV)",
      description: "Comprehensive overview of my professional experience, education, skills, and achievements.",
      fileName: "Shubham_Narkhede_CV_2025.pdf",
      fileSize: "1.2 MB",
      lastUpdated: "March 2025",
      icon: <FileText size={24} />,
      color: "#0078D7"
    },
    {
      title: "Resume (One-Page)",
      description: "Concise summary of my key qualifications and experience tailored for quick review.",
      fileName: "Shubham_Narkhede_Resume_2025.pdf",
      fileSize: "850 KB",
      lastUpdated: "March 2025",
      icon: <FileText size={24} />,
      color: "#00A4EF"
    },
    {
      title: "Work Permit Documentation",
      description: "Official documentation confirming my authorization to work in Germany.",
      fileName: "Shubham_Narkhede_Work_Permit.pdf",
      fileSize: "1.5 MB",
      lastUpdated: "January 2025",
      icon: <FileCheck size={24} />,
      color: "#7FBA00"
    },
    {
      title: "Project Portfolio",
      description: "Detailed case studies of selected projects with technical specifications and outcomes.",
      fileName: "Shubham_Narkhede_Portfolio_2025.pdf",
      fileSize: "3.2 MB",
      lastUpdated: "February 2025",
      icon: <FileText size={24} />,
      color: "#F25022"
    }
  ];

  return (
    <div className={styles.resumeCenterContainer}>
      <h2 className={styles.resumeCenterTitle}>Resume Center</h2>
      <p className={styles.resumeCenterDescription}>
        Download my resume, CV, and other professional documents in PDF format.
        All documents are regularly updated to reflect my latest experience and achievements.
      </p>
      
      <div className={styles.documentsGrid}>
        {documents.map((document, index) => (
          <div key={index} className={styles.documentCard}>
            <div 
              className={styles.documentIconContainer}
              style={{ backgroundColor: document.color }}
            >
              {document.icon}
            </div>
            
            <div className={styles.documentContent}>
              <h3 className={styles.documentTitle}>{document.title}</h3>
              <p className={styles.documentDescription}>{document.description}</p>
              
              <div className={styles.documentMeta}>
                <div className={styles.documentInfo}>
                  <span className={styles.documentFileName}>{document.fileName}</span>
                  <span className={styles.documentFileSize}>{document.fileSize}</span>
                </div>
                
                <div className={styles.documentDate}>
                  <Calendar size={14} />
                  <span>Updated: {document.lastUpdated}</span>
                </div>
              </div>
              
              <a 
                href={`/documents/${document.fileName}`} 
                download
                className={styles.downloadButton}
              >
                <Download size={16} />
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
