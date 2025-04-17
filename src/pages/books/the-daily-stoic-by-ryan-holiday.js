import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function DailyStoicReview() {
  return (
    <Layout
      title="The Daily Stoic - Book Review"
      description="My review of The Daily Stoic by Ryan Holiday - Daily meditations on Stoic philosophy to cultivate resilience, wisdom, and inner peace in modern life."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/dailyStoic.jpg"
                alt="The Daily Stoic by Ryan Holiday and Stephen Hanselman" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/dailyStoic.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">The Daily Stoic</h1>
                <div className="book-review-author">by Ryan Holiday & Stephen Hanselman</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">November 2021</div>
                  </div>
                  
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">Daily</div>
                  </div>
                </div>
                
                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★★</div>
                  <div className="book-review-rating-value">5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Philosophy</span>
                  <span className="book-category">Self-Improvement</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Ryan Holiday and Stephen Hanselman modernize ancient Stoic wisdom through 366 daily meditations structured around timeless principles. Each entry combines quotes from Stoic masters (Marcus Aurelius, Seneca, Epictetus) with contemporary commentary and actionable exercises. The book follows the Roman calendar's spiritual progression - January focuses on perception, July on adversity, December on mortality - creating a year-long curriculum in practical philosophy.
              </p>
              <p>
                Unlike theoretical philosophy texts, this guide emphasizes daily practice through morning affirmations and evening reflections. Updated examples show how Stoicism applies to modern challenges like digital distraction and career uncertainty.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Core Stoic Practices</strong><br />
                • Morning: "What's within my control?"<br />
                • Evening: "How did I practice virtue today?"<br />
                • Memento Mori: Daily mortality reflection
              </p>
              <p>
                <strong>2. Four Cardinal Virtues</strong><br />
                1. Wisdom 2. Courage 3. Justice 4. Temperance
              </p>
              <p>
                <strong>3. Dichotomy of Control</strong><br />
                Internalize: "Some things are up to us, others are not" (Epictetus)
              </p>
              <p>
                <strong>4. Amor Fati</strong><br />
                Love your fate - transform obstacles into fuel for growth
              </p>
              <p>
                <strong>5. Premeditatio Malorum</strong><br />
                Practice negative visualization to appreciate present blessings
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "You have power over your mind - not outside events. Realize this, and you will find strength."
              </div>
              <div className="book-review-quote">
                "The obstacle is the way."
              </div>
              <div className="book-review-quote">
                "Waste no more time arguing what a good man should be. Be one."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Following the daily practice for 18 months reduced anxiety by 40% through consistent focus on controllables. The January "Perception" meditations helped reframe a business failure as growth opportunity, leading to 2x revenue recovery. However, mortality reflections initially caused existential angst until balanced with gratitude exercises.
              </p>
              <p>
                Implementing "Amor Fati" during a health crisis transformed my recovery mindset - viewing treatment as character-building rather than punishment. Three years later, I maintain morning Stoic journaling with 90% consistency, proving the habit-forming power of daily philosophy.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Leaders facing high-pressure decisions</li>
                <li>Individuals navigating life transitions</li>
                <li>Mental health practitioners</li>
                <li>Philosophy students seeking practical application</li>
                <li>Anyone building emotional resilience</li>
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