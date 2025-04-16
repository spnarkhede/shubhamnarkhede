import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Mail, Phone, MapPin, Linkedin, GitHub, Twitter, Send } from 'lucide-react';

export default function RecruitmentSpecialistContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'job-opportunity',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: 'job-opportunity',
      message: '',
    });
  };

  return (
    <DashboardLayout
      role="recruitment-specialist"
      activeTab="contact"
      title="Recruitment Specialist | Contact"
      description="Get in touch with Shubham Narkhede about job opportunities and collaborations"
    >
      <SectionTemplate
        title="Contact Information"
        subtitle="Reach out to discuss job opportunities or collaborations"
      >
        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <div className={styles.contactIconContainer}>
                <Mail size={24} className={styles.contactIcon} />
              </div>
              <div className={styles.contactDetails}>
                <h3 className={styles.contactMethod}>Email</h3>
                <a href="mailto:contact@shubhamnarkhede.com" className={styles.contactLink}>
                  contact@shubhamnarkhede.com
                </a>
                <p className={styles.contactNote}>Preferred for initial contact</p>
              </div>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.contactIconContainer}>
                <Phone size={24} className={styles.contactIcon} />
              </div>
              <div className={styles.contactDetails}>
                <h3 className={styles.contactMethod}>Phone</h3>
                <a href="tel:+11234567890" className={styles.contactLink}>
                  +1 (123) 456-7890
                </a>
                <p className={styles.contactNote}>Available weekdays 9 AM - 5 PM EST</p>
              </div>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.contactIconContainer}>
                <MapPin size={24} className={styles.contactIcon} />
              </div>
              <div className={styles.contactDetails}>
                <h3 className={styles.contactMethod}>Location</h3>
                <p className={styles.contactText}>
                  New York, NY, United States
                </p>
                <p className={styles.contactNote}>Open to relocation & remote work</p>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <h3 className={styles.socialTitle}>Connect on Social Media</h3>
              <div className={styles.socialButtons}>
                <a 
                  href="https://linkedin.com/in/shubhamnarkhede" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                
                <a 
                  href="https://github.com/spnarkhede" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                  aria-label="GitHub Profile"
                >
                  <GitHub size={20} />
                  <span>GitHub</span>
                </a>
                
                <a 
                  href="https://twitter.com/shubhamnarkhede" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                  aria-label="Twitter Profile"
                >
                  <Twitter size={20} />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder="Your name"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder="Your email address"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.formLabel}>Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Your company name"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={styles.formSelect}
                >
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="interview-request">Interview Request</option>
                  <option value="reference-check">Reference Check</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.formTextarea}
                  placeholder="Your message"
                  rows={5}
                />
              </div>
              
              <button type="submit" className={styles.submitButton}>
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Availability & Preferences"
        subtitle="Information about my job search status and preferences"
        withBackground={true}
      >
        <div className={styles.preferencesGrid}>
          <div className={styles.preferenceCard}>
            <h3 className={styles.preferenceTitle}>Current Status</h3>
            <p className={styles.preferenceText}>
              I am currently open to new opportunities and can start with a notice period of 2 weeks.
            </p>
          </div>
          
          <div className={styles.preferenceCard}>
            <h3 className={styles.preferenceTitle}>Role Preferences</h3>
            <p className={styles.preferenceText}>
              I am seeking senior-level positions in DevOps Engineering, Cloud Architecture, or Full Stack Development.
            </p>
          </div>
          
          <div className={styles.preferenceCard}>
            <h3 className={styles.preferenceTitle}>Work Model</h3>
            <p className={styles.preferenceText}>
              I am open to remote, hybrid, or on-site positions, with a preference for hybrid arrangements.
            </p>
          </div>
          
          <div className={styles.preferenceCard}>
            <h3 className={styles.preferenceTitle}>Relocation</h3>
            <p className={styles.preferenceText}>
              I am willing to relocate domestically or internationally for the right opportunity.
            </p>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Interview Scheduling"
        subtitle="Information for recruiters about my availability for interviews"
      >
        <div className={styles.interviewSection}>
          <p className={styles.interviewText}>
            I am available for interviews during the following times (Eastern Time):
          </p>
          
          <div className={styles.scheduleGrid}>
            <div className={styles.scheduleDay}>
              <h3 className={styles.dayTitle}>Monday - Thursday</h3>
              <p className={styles.timeSlot}>8:00 AM - 10:00 AM</p>
              <p className={styles.timeSlot}>12:00 PM - 1:00 PM</p>
              <p className={styles.timeSlot}>5:00 PM - 8:00 PM</p>
            </div>
            
            <div className={styles.scheduleDay}>
              <h3 className={styles.dayTitle}>Friday</h3>
              <p className={styles.timeSlot}>8:00 AM - 10:00 AM</p>
              <p className={styles.timeSlot}>12:00 PM - 1:00 PM</p>
              <p className={styles.timeSlot}>4:00 PM - 6:00 PM</p>
            </div>
            
            <div className={styles.scheduleDay}>
              <h3 className={styles.dayTitle}>Weekends</h3>
              <p className={styles.timeSlot}>By appointment only</p>
            </div>
          </div>
          
          <p className={styles.schedulingNote}>
            For urgent interview requests or to schedule outside these times, please email me directly 
            with the subject line "Urgent Interview Request".
          </p>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
