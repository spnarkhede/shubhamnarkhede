import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Mail, Phone, MapPin, GitHub, Linkedin, Twitter, Calendar } from 'lucide-react';
import Link from '@docusaurus/Link';

export default function CuriousVisitorContact() {
  return (
    <DashboardLayout
      role="curious-visitor"
      activeTab="contact"
      title="Curious Visitor | Contact"
      description="Get in touch with Shubham Narkhede for inquiries, collaborations, or just to say hello."
    >
      <SectionTemplate
        title="Get in Touch"
        subtitle="I'd love to hear from you"
      >
        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out through any of the channels below. I'm always open to interesting 
              conversations, collaboration opportunities, or just connecting with like-minded individuals.
            </p>
            
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <Mail size={24} />
                </div>
                <div className={styles.contactDetails}>
                  <h4>Email</h4>
                  <a href="mailto:contact@shubhamnarkhede.com">contact@shubhamnarkhede.com</a>
                </div>
              </div>
              
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <Phone size={24} />
                </div>
                <div className={styles.contactDetails}>
                  <h4>Phone</h4>
                  <p>Available upon request</p>
                </div>
              </div>
              
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <MapPin size={24} />
                </div>
                <div className={styles.contactDetails}>
                  <h4>Location</h4>
                  <p>Bangalore, India</p>
                </div>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <h3>Connect on Social Media</h3>
              <div className={styles.socialIconsContainer}>
                <a 
                  href="https://github.com/spnarkhede" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  aria-label="GitHub"
                >
                  <GitHub size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/spnarkhede" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://twitter.com/spnarkhede" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            
            <div className={styles.availability}>
              <h3>Availability</h3>
              <p>
                I typically respond to messages within 24-48 hours. For urgent matters, please indicate 
                so in your message subject.
              </p>
              <div className={styles.availabilityCalendar}>
                <Calendar size={24} />
                <span>
                  You can also <a href="https://calendly.com/shubhamnarkhede" target="_blank" rel="noopener noreferrer">schedule a call</a> directly on my calendar.
                </span>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <h3>Send a Message</h3>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className={styles.formInput} 
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className={styles.formInput} 
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                <select id="subject" className={styles.formSelect} required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                  <option value="project">Project Discussion</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea 
                  id="message" 
                  className={styles.formTextarea} 
                  placeholder="Enter your message"
                  rows={6}
                  required
                ></textarea>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.checkboxLabel}>
                  <input 
                    type="checkbox" 
                    className={styles.formCheckbox} 
                  />
                  I agree to the privacy policy and consent to being contacted regarding my inquiry.
                </label>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Frequently Asked Questions"
        subtitle="Common questions about contacting me"
        withBackground={true}
      >
        <div className={styles.faqSection}>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              What types of inquiries do you typically respond to?
            </div>
            <div className={styles.faqAnswer}>
              I welcome inquiries related to potential collaborations, technical discussions, speaking engagements, 
              mentorship opportunities, and general networking. While I may not be able to respond to every message, 
              I prioritize thoughtful and specific inquiries.
            </div>
          </div>
          
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              How quickly can I expect a response?
            </div>
            <div className={styles.faqAnswer}>
              I typically respond within 24-48 hours during weekdays. Response times may be longer during weekends, 
              holidays, or when I'm traveling. For time-sensitive matters, please indicate so in your message subject.
            </div>
          </div>
          
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              Are you available for freelance work or consulting?
            </div>
            <div className={styles.faqAnswer}>
              I selectively take on freelance projects and consulting engagements based on my current availability 
              and the alignment with my expertise and interests. Please provide details about your project when 
              reaching out so I can determine if it's a good fit.
            </div>
          </div>
          
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              Can I schedule a call or meeting with you?
            </div>
            <div className={styles.faqAnswer}>
              Yes, you can schedule a call using my Calendly link. Before scheduling, please send a brief message 
              outlining the purpose of the call so I can prepare accordingly.
            </div>
          </div>
          
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              Do you speak at events or conferences?
            </div>
            <div className={styles.faqAnswer}>
              Yes, I occasionally speak at industry events, conferences, and meetups on topics related to software 
              development, DevOps, and technology trends. Please provide details about your event, including date, 
              location, audience, and topic when reaching out.
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Let's Connect"
        subtitle="I look forward to hearing from you"
      >
        <div className={styles.ctaSection}>
          <p className={styles.ctaDescription}>
            Whether you have a specific question, want to discuss a potential collaboration, or just want to say hello, 
            I'd love to hear from you. Don't hesitate to reach out through the contact form or any of my social channels.
          </p>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
