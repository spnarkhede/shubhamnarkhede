import React, { useState } from 'react';
import styles from './styles.module.css';
import { Send, Mail, MessageSquare, User, Phone } from 'lucide-react';

export default function ContactPanel() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const subjectOptions = [
    { value: "job_opportunity", label: "Job Opportunity" },
    { value: "project_collaboration", label: "Project Collaboration" },
    { value: "speaking_engagement", label: "Speaking Engagement" },
    { value: "consulting_request", label: "Consulting Request" },
    { value: "general_inquiry", label: "General Inquiry" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <div className={styles.contactPanelContainer}>
      <h2 className={styles.contactPanelTitle}>Get in Touch</h2>
      <p className={styles.contactPanelDescription}>
        Have a question or want to work together? Feel free to reach out using the form below.
      </p>
      
      <div className={styles.contactPanelContent}>
        <div className={styles.contactInfo}>
          <div className={styles.contactInfoCard}>
            <h3 className={styles.contactInfoTitle}>Contact Information</h3>
            <p className={styles.contactInfoDescription}>
              Feel free to reach out through any of these channels. I typically respond within 24-48 hours.
            </p>
            
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.contactMethodIcon}>
                  <Mail size={20} />
                </div>
                <div className={styles.contactMethodContent}>
                  <h4 className={styles.contactMethodTitle}>Email</h4>
                  <a href="mailto:shubham.narkhede@example.com" className={styles.contactMethodValue}>
                    shubham.narkhede@example.com
                  </a>
                </div>
              </div>
              
              <div className={styles.contactMethod}>
                <div className={styles.contactMethodIcon}>
                  <Phone size={20} />
                </div>
                <div className={styles.contactMethodContent}>
                  <h4 className={styles.contactMethodTitle}>Phone</h4>
                  <a href="tel:+4917151080595" className={styles.contactMethodValue}>
                    +49 171 510 8059
                  </a>
                </div>
              </div>
              
              <div className={styles.contactMethod}>
                <div className={styles.contactMethodIcon}>
                  <MessageSquare size={20} />
                </div>
                <div className={styles.contactMethodContent}>
                  <h4 className={styles.contactMethodTitle}>Social</h4>
                  <div className={styles.socialLinks}>
                    <a href="https://linkedin.com/in/shubhamnarkhede" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                    <span className={styles.socialDivider}>•</span>
                    <a href="https://github.com/spnarkhede" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.contactLocation}>
              <p>Based in Ulm, Baden-Württemberg, Germany</p>
              <p>Available for remote work and relocation opportunities</p>
            </div>
          </div>
        </div>
        
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                <User size={16} />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                <Mail size={16} />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.formInput}
                placeholder="Enter your email address"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.formSelect}
                required
              >
                <option value="" disabled>Select a subject</option>
                {subjectOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                <MessageSquare size={16} />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextarea}
                placeholder="Type your message here..."
                rows={5}
                required
              />
            </div>
            
            <button type="submit" className={styles.submitButton}>
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
