import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function MasterYourBeliefsReview() {
  return (
    <Layout
      title="Master Your Beliefs - Book Review"
      description="My review of Master Your Beliefs by Thibaut Meurisse - Systematic approach to identifying and reprogramming limiting belief patterns."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/masterYourBeliefs.jpg"
                alt="Master Your Beliefs by Thibaut Meurisse" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/masterYourBeliefs.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Master Your Beliefs</h1>
                <div className="book-review-author">by Thibaut Meurisse</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">October 2020</div>
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
                  <span className="book-category">Psychology</span>
                  <span className="book-category">Self-Improvement</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Thibaut Meurisse provides a cognitive framework for identifying and restructuring self-limiting belief systems. The book introduces the "BICEPS Model" (Belief Identification, Challenge, Evidence-gathering, Progressive Replacement, Solidification) and the "Belief Audit" process. Through 31 daily exercises, it helps track belief patterns and their impact on decision-making.
              </p>
              <p>
                Modern applications include digital belief journals and social media influence awareness. The "Three Circles of Belief Influence" (Genetic, Environmental, Volitional) helps trace belief origins, while neuroplasticity exercises show how to rewire thought patterns. Case studies demonstrate how belief shifts enabled career transitions and relationship improvements.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Belief Identification</strong><br />
                • Emotional Trigger Mapping<br />
                • Limiting Belief Bingo (common patterns list)
              </p>
              <p>
                <strong>2. Cognitive Restructuring</strong><br />
                • The 5 Why's Root Cause Analysis<br />
                • Evidence Board Technique
              </p>
              <p>
                <strong>3. Belief Replacement</strong><br />
                • Affirmation Engineering<br />
                • Future Self Projection
              </p>
              <p>
                <strong>4. Habit Alignment</strong><br />
                • Behavior-Belief Feedback Loop<br />
                • Micro-Action Sequencing
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Your beliefs are the invisible architects of your reality."
              </div>
              <div className="book-review-quote">
                "A limiting belief is a cognitive prison with self-made bars."
              </div>
              <div className="book-review-quote">
                "Belief transformation begins when evidence overpowers assumption."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Completing the Belief Audit revealed 12 hidden limiting beliefs about money. Using the Evidence Board Technique dismantled 8 within 3 months, increasing my investment activity by 300%. The Future Self Projection helped overcome public speaking fears - from avoiding presentations to delivering 3 monthly.
              </p>
              <p>
                However, the Affirmation Engineering felt ineffective until paired with behavior changes. Micro-Action Sequencing (starting with 2-minute speeches) proved crucial for belief solidification. Maintaining the digital belief journal remains challenging but valuable for tracking progress.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Individuals feeling stuck by self-doubt</li>
                <li>Coaches helping clients break mental barriers</li>
                <li>Leaders addressing organizational mindset issues</li>
                <li>Recovering perfectionists</li>
                <li>Anyone making major life transitions</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/mindset" className="book-review-nav-button">
                Next Review: Mindset
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}