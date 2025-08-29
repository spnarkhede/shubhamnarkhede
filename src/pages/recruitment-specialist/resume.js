import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Download, FileText, FileCheck, ExternalLink } from 'lucide-react';
import { workEligibility, contactInfo, documents } from './content';

export default function RecruitmentSpecialistResume() {
  const handleDownload = (fileName, downloadUrl) => {
    // In a real implementation, this would download the actual file
    console.log(`Downloading: ${fileName} from ${downloadUrl}`);
    // For demo purposes, we'll just show an alert
    alert(`Download initiated for: ${fileName}\n\nIn a real implementation, this would download the file from: ${downloadUrl}`);
  };

  const getDocumentIcon = (title) => {
    if (title.toLowerCase().includes('authorization') || title.toLowerCase().includes('certification')) {
      return <FileCheck size={24} />;
    }
    return <FileText size={24} />;
  };

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
        <div className={styles.documentsGridRow}>
          {documents.map((doc, index) => (
            <div 
              key={index} 
              className={`${styles.documentCardCompact} ${doc.primary ? styles.primaryDocument : ''}`}
            >
              {doc.primary && (
                <div className={styles.primaryBadge}>Recommended</div>
              )}
              
              <div className={styles.documentIconCompact}>
                {getDocumentIcon(doc.title)}
              </div>
              
              <div className={styles.documentInfoCompact}>
                <h3 className={styles.documentTitleCompact}>{doc.title}</h3>
                <p className={styles.documentDescriptionCompact}>{doc.description}</p>
                
                <div className={styles.documentMetaCompact}>
                  <span className={styles.fileSize}>{doc.fileSize}</span>
                  <span className={styles.lastUpdated}>{doc.lastUpdated}</span>
                </div>
              </div>
              
              <button 
                onClick={() => handleDownload(doc.fileName, doc.downloadUrl)}
                className={styles.downloadButtonCompact}
                aria-label={`Download ${doc.title}`}
              >
                <Download size={16} />
                Download
              </button>
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Work Authorization & Contact"
        subtitle="Employment eligibility status and quick contact information"
        withBackground={true}
        className={styles.workAuthSection}
      >
        <div className={styles.workAuthSideBySide}>
          <div className={styles.authStatusContainer}>
            <div className={styles.authImageContainer}>
              <div className={styles.authStatusBadge}>
                <FileCheck size={32} />
                <span>Authorized</span>
              </div>
            </div>
          </div>
          
          <div className={styles.authDetailsContainer}>
            <div className={styles.authStatus}>
              <h3 className={styles.authTitle}>Current Status</h3>
              <p className={styles.authDescription}>
                {workEligibility.description}
              </p>
              
              <h3 className={styles.authTitle}>Sponsorship Requirements</h3>
              <p className={styles.authDescription}>
                {workEligibility.sponsorship}
              </p>
              
              <h3 className={styles.authTitle}>Relocation Flexibility</h3>
              <p className={styles.authDescription}>
                {workEligibility.relocation}
              </p>
            </div>
            
            <div className={styles.contactCta}>
              <p className={styles.contactCtaText}>
                For any specific questions regarding my work authorization or to request verification documents,
                please contact me directly.
              </p>
              <a href="/recruitment-specialist/contact" className={styles.contactCtaButton}>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Quick Contact Information"
        centered={true}
        className={styles.quickContactSection}
      >
        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <strong>Email:</strong> {contactInfo.email}
          </div>
          <div className={styles.contactItem}>
            <strong>Location:</strong> {contactInfo.location}
          </div>
          <div className={styles.contactItem}>
            <strong>Timezone:</strong> {contactInfo.timezone}
          </div>
        </div>
        
        <div className={styles.profileLinks}>
          <a 
            href={contactInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.profileLink}
          >
            <ExternalLink size={16} />
            LinkedIn Profile
          </a>
          <a 
            href={contactInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.profileLink}
          >
            <ExternalLink size={16} />
            GitHub Profile
          </a>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
