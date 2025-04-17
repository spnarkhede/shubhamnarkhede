import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function MasterYourDestinyReview() {
  return (
    <Layout
      title="Master Your Destiny - Book Review"
      description="My review of Master Your Destiny by Thibaut Meurisse - Proactive life design through intentional decision-making and value-aligned action."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/masterYourDestiny.jpg"
                alt="Master Your Destiny by Thibaut Meurisse" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/masterYourDestiny.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Master Your Destiny</h1>
                <div className="book-review-author">by Thibaut Meurisse</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">November 2020</div>
                  </div>
                  
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">4 hours</div>
                  </div>
                </div>
                
                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Self-Improvement</span>
                  <span className="book-category">Personal Development</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Thibaut Meurisse presents the "Life Design Framework" - a 5-phase system for taking ownership of one's path. The book combines stoic philosophy with modern behavioral science, teaching how to convert intentions into systems. Key concepts include the "Decision Multiplier Effect" and the "Three Pillars of Agency" (Awareness, Choice, Action).
              </p>
              <p>
                Through 33 daily exercises, readers learn to conduct life audits, eliminate decision fatigue, and build self-reinforcing success cycles. Modern applications include digital environment design and social circle optimization. Case studies show career changers reducing transition time by 60% using these methods.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Life Assessment Tools</strong><br />
                • Wheel of Control: Focus on influenceable areas<br />
                • Core Value Extraction: Identify 3 non-negotiable principles
              </p>
              <p>
                <strong>2. Decision Systems</strong><br />
                • The 24-Hour Rule: Delay major decisions<br />
                • Choice Filtering: "Does this align with my future self?"
              </p>
              <p>
                <strong>3. Environment Design</strong><br />
                • Default Engineering: Auto-pilot positive choices<br />
                • Social Circle Audit: Relationship ROI analysis
              </p>
              <p>
                <strong>4. Momentum Building</strong><br />
                • Micro-Win Tracking<br />
                • Progress Stacking: Compound small gains
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Destiny isn't discovered - it's designed through daily decisions."
              </div>
              <div className="book-review-quote">
                "Your environment whispers your future actions - choose its voice wisely."
              </div>
              <div className="book-review-quote">
                "Agency is the muscle that turns possibility into reality."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing the Wheel of Control reduced anxiety by 40% within a month. The Social Circle Audit led to 3 strategic relationships that accelerated my career transition. However, over-optimizing decisions caused analysis paralysis until applying the 24-Hour Rule.
              </p>
              <p>
                Micro-Win Tracking uncovered 87% of progress happens in small increments. Progress Stacking helped complete a certification 3 weeks early. Maintaining the Life Design Framework requires weekly reviews, but the compound benefits justify the effort.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Career transitioners</li>
                <li>Decision-fatigued professionals</li>
                <li>Recent graduates shaping their path</li>
                <li>Retirees designing post-work life</li>
                <li>Anyone feeling life "happens to them"</li>
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