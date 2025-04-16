import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Mail, Calendar, MapPin, GitHub, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import Link from '@docusaurus/Link';

export default function GrowthPartnerContact() {
  return (
    <DashboardLayout
      role="growth-partner"
      activeTab="contact"
      title="Growth Partner | Contact"
      description="Connect with Shubham Narkhede for collaboration opportunities and partnerships."
    >
      <SectionTemplate
        title="Let's Connect"
        subtitle="Start a conversation about potential collaborations"
      >
        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>
            <p>
              I'm always open to discussing new projects, creative collaborations, and opportunities 
              to work together. Feel free to reach out through any of the channels below.
            </p>
            
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <Mail size={24} />
                </div>
                <div className={styles.contactDetails}>
                  <h4>Email</h4>
                  <a href="mailto:collaborate@shubhamnarkhede.com">collaborate@shubhamnarkhede.com</a>
                </div>
              </div>
              
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <Calendar size={24} />
                </div>
                <div className={styles.contactDetails}>
                  <h4>Schedule a Call</h4>
                  <a href="https://calendly.com/shubhamnarkhede/collaboration" target="_blank" rel="noopener noreferrer">
                    Book a 30-minute discussion
                  </a>
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
          </div>
          
          <div className={styles.contactForm}>
            <h3>Collaboration Inquiry</h3>
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
                <label htmlFor="collaborationType" className={styles.formLabel}>Collaboration Type</label>
                <select id="collaborationType" className={styles.formSelect} required>
                  <option value="">Select collaboration type</option>
                  <option value="project">Project Collaboration</option>
                  <option value="creative">Creative Partnership</option>
                  <option value="mentorship">Mentorship & Learning</option>
                  <option value="community">Community Building</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Tell me about your idea</label>
                <textarea 
                  id="message" 
                  className={styles.formTextarea} 
                  placeholder="Share details about your collaboration idea, project, or how you think we might work together"
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
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Collaboration Process"
        subtitle="What to expect when working together"
        withBackground={true}
      >
        <div className={styles.processSection}>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.processStepNumber}>01</div>
              <h3 className={styles.processStepTitle}>Initial Conversation</h3>
              <p className={styles.processStepDescription}>
                We'll start with an informal discussion to explore your ideas, objectives, and how our skills and 
                interests might align. This helps establish if there's a good foundation for collaboration.
              </p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.processStepNumber}>02</div>
              <h3 className={styles.processStepTitle}>Define Scope & Expectations</h3>
              <p className={styles.processStepDescription}>
                If we decide to move forward, we'll clearly define the scope, goals, timeline, and expectations for 
                the collaboration. This ensures we're aligned on what we want to achieve together.
              </p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.processStepNumber}>03</div>
              <h3 className={styles.processStepTitle}>Collaborative Work</h3>
              <p className={styles.processStepDescription}>
                During the active collaboration phase, we'll maintain regular communication, share progress, address 
                challenges, and adapt our approach as needed to ensure the best possible outcome.
              </p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.processStepNumber}>04</div>
              <h3 className={styles.processStepTitle}>Evaluation & Next Steps</h3>
              <p className={styles.processStepDescription}>
                Upon completion, we'll evaluate the results, discuss learnings, and explore potential next steps or 
                future collaboration opportunities based on our shared experience.
              </p>
            </div>
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Frequently Asked Questions"
        subtitle="Common questions about collaborations"
      >
        <div className={styles.faqSection}>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              What types of collaborations are you most interested in?
            </div>
            <div className={styles.faqAnswer}>
              I'm particularly interested in collaborations that combine technology with creative elements, 
              such as interactive digital experiences, generative art projects, innovative web applications, 
              and educational initiatives. However, I'm open to discussing any project that involves meaningful 
              problem-solving and mutual growth opportunities.
            </div>
          </div>
          
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              How much time can you dedicate to collaborative projects?
            </div>
            <div className={styles.faqAnswer}>
              My availability varies depending on current commitments, but I typically allocate 5-10 hours per 
              week for collaborative projects. For more intensive collaborations, we can discuss specific time 
              requirements and scheduling to ensure I can provide the necessary commitment.
            </div>
          </div>
          
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              Do you charge for collaborations?
            </div>
            <div className={styles.faqAnswer}>
              It depends on the nature of the collaboration. For open source projects, community initiatives, 
              and mutual learning opportunities, I often participate without financial compensation. For commercial 
              projects or those requiring significant time investment, we can discuss appropriate compensation 
              arrangements based on the specific requirements and value contribution.
            </div>
          </div>
          
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              How do you handle intellectual property in collaborations?
            </div>
            <div className={styles.faqAnswer}>
              I believe in clear agreements about intellectual property from the start of any collaboration. 
              For open source projects, I prefer using standard open source licenses. For other collaborations, 
              I'm open to discussing arrangements that fairly recognize all contributors' work while meeting 
              the project's needs.
            </div>
          </div>
          
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              Can we collaborate remotely?
            </div>
            <div className={styles.faqAnswer}>
              Absolutely! Most of my collaborations are conducted remotely using tools like GitHub, Slack, 
              Zoom, and other collaboration platforms. I'm experienced in remote work practices and maintaining 
              effective communication across different time zones and locations.
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Ready to Collaborate?"
        subtitle="Let's create something amazing together"
        withBackground={true}
      >
        <div className={styles.ctaSection}>
          <p className={styles.ctaDescription}>
            Whether you have a specific project in mind or just want to explore potential collaboration 
            opportunities, I'd love to hear from you. The best partnerships often start with a simple 
            conversation, so don't hesitate to reach out.
          </p>
          
          <Link to="#top" className={styles.ctaButton}>
            Start the Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
