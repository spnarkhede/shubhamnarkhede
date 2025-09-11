import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import { ContactForm } from '@site/src/components/ContactForm';
import { Mail, Linkedin, Github, MapPin, Phone, Calendar, Clock } from 'lucide-react';
import styles from './styles.module.css';

export default function RecruitmentSpecialistContact() {
  const contactMethods = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "shubhamnarkhede@gmail.com",
      link: "mailto:shubhamnarkhede@gmail.com",
      description: "Best for detailed inquiries and formal communication"
    },
    {
      icon: <Linkedin size={20} />,
      title: "LinkedIn",
      value: "linkedin.com/in/spnarkhede",
      link: "https://linkedin.com/in/spnarkhede",
      description: "Professional networking and quick messages"
    },
    {
      icon: <Github size={20} />,
      title: "GitHub",
      value: "github.com/spnarkhede",
      link: "https://github.com/spnarkhede",
      description: "View my code repositories and contributions"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+49 171 510 8059",
      link: "tel:+4917151080592",
      description: "Available for scheduled calls and urgent matters"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Stuttgart, Germany",
      link: null,
      description: "Open to remote work and relocation opportunities"
    }
  ];

  const availability = {
    status: "Open to New Opportunities",
    details: [
      "Available for immediate start",
      "Open to remote, hybrid, or on-site positions",
      "Willing to relocate for the right opportunity",
      "Seeking full-time employment"
    ],
    timeZone: "Central European Time (CET/CEST)",
    responseTime: "Within 24 hours for all inquiries"
  };

  return (
    <DashboardLayout
      role="recruitment-specialist"
      activeTab="contact"
      title="Recruitment Specialist | Contact"
      description="Get in touch with Shubham Narkhede for recruitment opportunities and professional inquiries"
    >
      <SectionTemplate
        title="Let's Connect"
        subtitle="Ready to discuss opportunities and answer your questions"
      >
        <div className={styles.contactIntro}>
          <p>
            Thank you for your interest in my profile. I'm actively seeking new opportunities 
            and would be delighted to discuss how my skills and experience can contribute to your team's success. 
            I respond to all professional inquiries promptly and thoroughly.
          </p>
        </div>

        {/* Availability Status */}
        <div className={styles.availabilitySection}>
          <div className={styles.availabilityHeader}>
            <div className={styles.availabilityStatus}>
              <div className={styles.statusIndicator}></div>
              <h3>{availability.status}</h3>
            </div>
            <div className={styles.availabilityMeta}>
              <span className={styles.timeZone}>
                <Clock size={16} />
                {availability.timeZone}
              </span>
            </div>
          </div>
          
          <div className={styles.availabilityDetails}>
            <ul>
              {availability.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <p className={styles.responseTime}>
              <strong>Response Time:</strong> {availability.responseTime}
            </p>
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Contact Information"
        subtitle="Multiple ways to reach me for your convenience"
        withBackground={true}
      >
        <div className={styles.contactMethodsGrid}>
          {contactMethods.map((method, index) => (
            <div key={index} className={styles.contactMethodCard}>
              <div className={styles.contactMethodIcon}>
                {method.icon}
              </div>
              <div className={styles.contactMethodContent}>
                <h4 className={styles.contactMethodTitle}>{method.title}</h4>
                {method.link ? (
                  <a 
                    href={method.link} 
                    className={styles.contactMethodValue}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.value}
                  </a>
                ) : (
                  <span className={styles.contactMethodValue}>{method.value}</span>
                )}
                <p className={styles.contactMethodDescription}>{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Send Me a Message"
        subtitle="Use the form below for detailed inquiries"
      >
        <div className={styles.contactFormSection}>
          <div className={styles.formIntroduction}>
            <p>
              Please provide as much detail as possible about the opportunity, including:
            </p>
            <ul className={styles.formGuidelines}>
              <li>Company name and role details</li>
              <li>Location and remote work options</li>
              <li>Required skills and experience level</li>
              <li>Timeline for the hiring process</li>
              <li>Any specific questions about my background</li>
            </ul>
          </div>
          
          <div className={styles.contactFormContainer}>
            <ContactForm />
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Quick Actions"
        centered={true}
      >
        <div className={styles.quickActionsSection}>
          <p className={styles.quickActionsDescription}>
            Need something specific? These quick actions might help:
          </p>
          <div className={styles.quickActionsGrid}>
            <a 
              href="/recruitment-specialist/resume" 
              className={styles.quickActionButton}
            >
              <Calendar size={20} />
              Download Resume
            </a>
            <a 
              href="https://linkedin.com/in/spnarkhede" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.quickActionButton}
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
            <a 
              href="mailto:shubhamnarkhede@gmail.com?subject=Job%20Opportunity%20Inquiry" 
              className={styles.quickActionButton}
            >
              <Mail size={20} />
              Send Quick Email
            </a>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}