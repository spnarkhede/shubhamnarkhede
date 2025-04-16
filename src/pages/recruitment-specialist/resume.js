import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Download, FileText, FileCheck, Calendar } from 'lucide-react';

export default function RecruitmentSpecialistResume() {
  const resumeFiles = [
    {
      title: "Full Curriculum Vitae",
      description: "Comprehensive CV with detailed work history, projects, and skills",
      icon: <FileText size={24} />,
      fileName: "Shubham_Narkhede_CV.pdf",
      fileSize: "1.2 MB",
      lastUpdated: "March 2025",
      primary: true
    },
    {
      title: "One-Page Resume",
      description: "Concise resume highlighting key skills and experience",
      icon: <FileText size={24} />,
      fileName: "Shubham_Narkhede_Resume.pdf",
      fileSize: "450 KB",
      lastUpdated: "March 2025",
      primary: false
    },
    {
      title: "Work Permit Documentation",
      description: "Proof of work authorization and eligibility",
      icon: <FileCheck size={24} />,
      fileName: "Work_Permit_Documentation.pdf",
      fileSize: "850 KB",
      lastUpdated: "January 2025",
      primary: false
    },
    {
      title: "Project Portfolio",
      description: "Detailed case studies of significant projects",
      icon: <FileText size={24} />,
      fileName: "Shubham_Narkhede_Portfolio.pdf",
      fileSize: "3.5 MB",
      lastUpdated: "February 2025",
      primary: false
    }
  ];

  return (
    <DashboardLayout
      role="recruitment-specialist"
      activeTab="resume"
      title="Recruitment Specialist | Resume Download"
      description="Download Shubham Narkhede's resume, CV, and related documents"
    >
      <SectionTemplate
        title="Resume & Documents"
        subtitle="Download my resume and related documents for your records"
      >
        <div className={styles.resumeIntro}>
          <p>
            Below you'll find various versions of my resume and related documents. 
            All files are up-to-date and available in PDF format. If you need any additional 
            information or a different format, please don't hesitate to contact me.
          </p>
        </div>

        <div className={styles.resumeFilesGrid}>
          {resumeFiles.map((file, index) => (
            <div 
              key={index} 
              className={`${styles.resumeFileCard} ${file.primary ? styles.primaryFileCard : ''}`}
            >
              <div className={styles.resumeFileIcon}>
                {file.icon}
              </div>
              <div className={styles.resumeFileContent}>
                <h3 className={styles.resumeFileTitle}>{file.title}</h3>
                <p className={styles.resumeFileDescription}>{file.description}</p>
                <div className={styles.resumeFileMeta}>
                  <span className={styles.resumeFileName}>
                    {file.fileName}
                  </span>
                  <span className={styles.resumeFileSize}>
                    {file.fileSize}
                  </span>
                  <span className={styles.resumeFileDate}>
                    <Calendar size={14} />
                    Last updated: {file.lastUpdated}
                  </span>
                </div>
              </div>
              <a 
                href={`/files/${file.fileName}`} 
                download 
                className={`${styles.resumeDownloadButton} ${file.primary ? styles.primaryDownloadButton : ''}`}
              >
                <Download size={18} />
                Download
              </a>
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Work Permit Status"
        subtitle="Information about my current work authorization"
        withBackground={true}
      >
        <div className={styles.workPermitSection}>
          <div className={styles.workPermitContent}>
            <h3 className={styles.workPermitTitle}>Current Status</h3>
            <p className={styles.workPermitDescription}>
              I currently hold a valid work permit that authorizes me to work for any employer in the United States.
              The permit is valid through December 2026 with no restrictions on the type of work I can perform.
            </p>
            
            <h3 className={styles.workPermitTitle}>Sponsorship</h3>
            <p className={styles.workPermitDescription}>
              I do not require sponsorship for employment authorization at this time. All necessary documentation
              can be provided upon request, and I am eligible to start work immediately.
            </p>
            
            <h3 className={styles.workPermitTitle}>Relocation</h3>
            <p className={styles.workPermitDescription}>
              I am open to relocation opportunities both domestically and internationally. I have experience
              working in multiple countries and adapting to different work environments.
            </p>
          </div>
          
          <div className={styles.workPermitCta}>
            <p className={styles.workPermitCtaText}>
              For any specific questions regarding my work authorization or to request verification documents,
              please contact me directly.
            </p>
            <a href="/recruitment-specialist/contact" className={styles.workPermitCtaButton}>
              Contact Me
            </a>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
