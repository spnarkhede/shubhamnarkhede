// Contact page

import React from 'react';
import Layout from '@theme/Layout';
import { ContactForm } from '@site/src/components/ContactForm';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <Layout
      title="Contact"
      description="Get in touch with Shubham Narkhede for collaboration, job opportunities, or just to say hello."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Get In Touch</h1>
            <p className="margin-bottom--lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using any of the methods below.
            </p>
            
            <div className="card margin-bottom--lg" style={{ padding: '2rem' }}>
              <div className="contact-info-container">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail size={20} color="var(--ifm-color-primary)" />
                  </div>
                  <div className="contact-info-content">
                    <h3 className="contact-info-title">Email</h3>
                    <a href="mailto:shubhamnarkhede@gmail.com" className="contact-info-value">shubhamnarkhede@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Linkedin size={20} color="var(--ifm-color-primary)" />
                  </div>
                  <div className="contact-info-content">
                    <h3 className="contact-info-title">LinkedIn</h3>
                    <a href="https://linkedin.com/in/spnarkhede" target="_blank" rel="noopener noreferrer" className="contact-info-value">linkedin.com/in/spnarkhede</a>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Github size={20} color="var(--ifm-color-primary)" />
                  </div>
                  <div className="contact-info-content">
                    <h3 className="contact-info-title">GitHub</h3>
                    <a href="https://github.com/spnarkhede" target="_blank" rel="noopener noreferrer" className="contact-info-value">github.com/spnarkhede</a>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={20} color="var(--ifm-color-primary)" />
                  </div>
                  <div className="contact-info-content">
                    <h3 className="contact-info-title">Location</h3>
                    <p className="contact-info-value">Stuttgart, Germany</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Phone size={20} color="var(--ifm-color-primary)" />
                  </div>
                  <div className="contact-info-content">
                    <h3 className="contact-info-title">Phone</h3>
                    <p className="contact-info-value">+49 171 510 8059</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2>Send Me a Message</h2>
            <div className="card" style={{ padding: '2rem' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
