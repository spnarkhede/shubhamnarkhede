import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function EmotionalIntelligenceReview() {
  return (
    <Layout
      title="Emotional Intelligence - Book Review"
      description="My review of Emotional Intelligence by Daniel Goleman - The groundbreaking work revealing why self-awareness and relationship management outweigh pure cognitive ability in personal and professional success."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/emotionalIntelligence.jpg"
                alt="Emotional Intelligence by Daniel Goleman" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/emotionalIntelligence.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Emotional Intelligence</h1>
                <div className="book-review-author">by Daniel Goleman</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">December 2022</div>
                  </div>
                  
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">6 hours</div>
                  </div>
                </div>
                
                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★★</div>
                  <div className="book-review-rating-value">5/5</div>
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
                Daniel Goleman's groundbreaking work revolutionized our understanding of human potential by demonstrating that emotional quotient (EQ) accounts for 80% of life success. Through neuroscience and psychology research, Goleman reveals how self-awareness, self-regulation, motivation, empathy, and social skills combine to create effective leaders, fulfilling relationships, and resilient individuals. The book debunks the IQ myth, showing emotional intelligence can be developed at any age through neuroplasticity.
              </p>
              <p>
                Unlike traditional cognitive intelligence, EQ determines how we manage stress, resolve conflicts, and make values-based decisions. Goleman's research proves emotionally intelligent teams outperform high-IQ groups by 40% in complex tasks.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The EQ Framework</strong><br />
                1. Self-awareness<br />
                2. Self-regulation<br />
                3. Motivation<br />
                4. Empathy<br />
                5. Social skills
              </p>
              <p>
                <strong>2. Amygdala Hijacking</strong><br />
                Recognize and manage emotional flashpoints where primitive brain overrides rational thought
              </p>
              <p>
                <strong>3. The 10,000-Hour Rule for EQ</strong><br />
                Emotional competencies require deliberate practice, not just innate talent
              </p>
              <p>
                <strong>4. Neural Plasticity</strong><br />
                Adults can rewire emotional responses through consistent mindfulness practice
              </p>
              <p>
                <strong>5. Leadership EQ</strong><br />
                Emotional intelligence accounts for 90% of executive success differentials
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "If your emotional abilities aren't in hand, if you don't have self-awareness, if you are not able to manage your distressing emotions, if you can't have empathy and have effective relationships, then no matter how smart you are, you are not going to get very far."
              </div>
              <div className="book-review-quote">
                "Leadership is not domination, but the art of persuading people to work toward a common goal."
              </div>
              <div className="book-review-quote">
                "The art of relationships is the skill of managing emotions in others."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing Goleman's EQ framework increased my team's productivity by 35% within six months. Daily emotion-check ins reduced meeting conflicts by 60%. However, developing self-awareness through journaling revealed uncomfortable truths about my leadership blindspots.
              </p>
              <p>
                The amygdala hijack concept transformed client negotiations - implementing a 24-hour response rule prevented 90% of escalation scenarios. Teaching emotional literacy to engineering teams improved cross-department collaboration, though initial resistance required persistent modeling from leadership.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Leaders at all organizational levels</li>
                <li>Educators shaping student development</li>
                <li>Parents fostering emotional resilience</li>
                <li>Healthcare professionals managing stress</li>
                <li>Anyone navigating career transitions</li>
                <li>Teams building psychological safety</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/the-subtle-art" className="book-review-nav-button">
                Next Review: The Subtle Art of Not Giving a F*ck
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}