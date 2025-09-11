import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function MasterYourTimeReview() {
  return (
    <Layout
      title="Master Your Time - Book Review"
      description="My review of Master Your Time by Thibaut Meurisse - Practical systems for reclaiming productivity through intentional time management."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/masterYourTime.jpg"
                alt="Master Your Time by Thibaut Meurisse" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/masterYourTime.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Master Your Time</h1>
                <div className="book-review-author">by Thibaut Meurisse</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">September 2020</div>
                  </div>
                  
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">3 hours</div>
                  </div>
                </div>
                
                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Productivity</span>
                  <span className="book-category">Self-Improvement</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Thibaut Meurisse combines neuroscience and behavioral psychology to create actionable time management systems. The book introduces the "3D Framework" (Delete, Delegate, Do) and the "Focus Funnel" for prioritizing tasks based on energy levels. Through 28 daily challenges, it helps break chronic procrastination patterns while teaching how to design productive routines.
              </p>
              <p>
                Modern features include digital detox strategies and asynchronous work optimization. The "Time Audit Matrix" helps identify hidden time drains, while the "90-Minute Sprint System" leverages ultradian rhythms. Case studies show students and executives gaining 12+ productive hours weekly through implementation.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Core Frameworks</strong><br />
                • Eisenhower Matrix 2.0: Quadrants weighted by ROI<br />
                • Energy Mapping: Align tasks with circadian rhythms
              </p>
              <p>
                <strong>2. Habit Systems</strong><br />
                • The 5-4-3-2-1 Countdown: Beat procrastination<br />
                • Micro-Scheduling: 15-minute task blocks
              </p>
              <p>
                <strong>3. Digital Hygiene</strong><br />
                • App Downtime Scheduling<br />
                • Notification Batching (3x daily)
              </p>
              <p>
                <strong>4. Recovery Strategies</strong><br />
                • The 20-20-20 Rule: Every 20 minutes, 20-second break<br />
                • Weekly Time Buffers: 4-hour unscheduled blocks
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Time management is energy management in disguise."
              </div>
              <div className="book-review-quote">
                "Productivity isn't about doing more, but doing more of what matters."
              </div>
              <div className="book-review-quote">
                "The clock is your most honest employee - track it ruthlessly."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing the 90-Minute Sprint System increased my deep work output by 60%. The Time Audit revealed 14 weekly hours lost to unnecessary meetings - renegotiating these gained 2.8 months/year. However, strict micro-scheduling caused burnout until balanced with recovery buffers.
              </p>
              <p>
                Using the 5-4-3-2-1 Countdown reduced morning procrastination by 80%. Digital hygiene practices cut screen time by 3 hours daily, though initial FOMO was challenging. After 6 months, these systems feel sustainable, proving their long-term value despite the steep learning curve.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Chronic procrastinators</li>
                <li>Remote workers battling distractions</li>
                <li>Students juggling multiple deadlines</li>
                <li>Managers optimizing team workflows</li>
                <li>Entrepreneurs scaling productivity</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/atomic-habits" className="book-review-nav-button">
                Next Review: Atomic Habits
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}