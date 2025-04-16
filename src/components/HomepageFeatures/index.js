import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { Github, Linkedin, Mail, ExternalLink, Calendar, BookOpen, Code, Award, Instagram, Globe, Headphones, FileText, FileCode } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="hero fade-in">
      <div className="container">
        <div className="row">
          <div className="col col--7">
            <div>
              <h1 className="hero__title">Shubham Narkhede</h1>
              <p className="hero__subtitle">DevOps Engineer & Full Stack Developer</p>
              <p>
                A curious mind constantly seeking knowledge and applying it to real-world challenges. 
                High-performing IT professional with over 5 years of experience in DevOps, full-stack 
                development, and UI/UX design. Passionate about creating efficient, scalable, and 
                user-friendly solutions with expertise in planning and executing the entire process 
                of IT projects using agile methodologies.
              </p>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/spnarkhede" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/spnarkhede" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
              <a href="mailto:shubhamnarkhede@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Email Contact">
                <Mail size={20} />
              </a>
              <a href="/books" className="social-link" aria-label="Book Reviews">
                <BookOpen size={20} />
              </a>
              <a href="/articles" className="social-link" aria-label="Technical Articles">
                <FileCode size={20} />
              </a>
              <a href="https://instagram.com/spnarkhede" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                <Instagram size={20} />
              </a>
              <a href="/Portfolio/Resume" className="social-link" aria-label="Resume">
                <FileText size={20} />
              </a>
              <a href="https://guide-book.vercel.app" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Guide Book">
                <Globe size={20} />
              </a>
            </div>
           
            <div className="button-container" style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <Link className="button button--primary" to="/Portfolio/Resume">
                View Resume
              </Link>
              <Link className="button button--secondary" to="/contact">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="col col--5">
            <img 
              src={require('@site/static/img/profilesquare.png').default} 
              alt="Shubham Narkhede" 
              className="hero-image"
              style={{
                float: 'right',
                maxWidth: '60%',
                borderRadius: '8px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
