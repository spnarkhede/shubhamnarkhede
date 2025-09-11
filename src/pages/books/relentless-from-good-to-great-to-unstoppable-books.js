import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function RelentlessReview() {
  return (
    <Layout
      title="Relentless - Book Review"
      description="My review of Relentless by Tim Grover - Elite performance strategies from Michael Jordan's legendary trainer to transform from competent to unstoppable."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/relentless.jpg"
                alt="Relentless: From Good to Great to Unstoppable by Tim Grover" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/relentless.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Relentless</h1>
                <div className="book-review-author">by Tim S. Grover</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">April 2021</div>
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
                  <span className="book-category">Sports</span>
                  <span className="book-category">Performance</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Tim Grover, trainer to legends like Michael Jordan and Kobe Bryant, reveals the mindset that separates elite performers from the rest. This no-nonsense guide rejects "balance" and "self-care" mantras, arguing true greatness requires obsessive focus and comfort with discomfort. The book's core framework identifies three performer types: Coolers (do what's asked), Closers (deliver under pressure), and Cleaners (create their own rules).
              </p>
              <p>
                Through brutal honesty and NBA stories, Grover teaches how to access the "Dark Side" - the relentless drive that ignores approval and thrives on proving doubters wrong. Updated content addresses modern performance traps like social media validation and pseudo-productivity.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Three Types of Performers</strong><br />
                • Coolers: Follow instructions<br />
                • Closers: Deliver under pressure<br />
                • Cleaners: Redefine what's possible
              </p>
              <p>
                <strong>2. The 13 Relentless Rules</strong><br />
                Including: "When you're a Cleaner... You don't celebrate your achievements" and "You trust the Dark Side"
              </p>
              <p>
                <strong>3. Pressure Flip</strong><br />
                Transform anxiety into hyperfocus through "selective deafness" to distractions
              </p>
              <p>
                <strong>4. Instincts Over Motivation</strong><br />
                Build automatic success habits that bypass decision fatigue
              </p>
              <p>
                <strong>5. Obsessive Work Cycles</strong><br />
                72-hour intense focus bursts followed by strategic recovery
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "When you’re good, you tell everyone. When you’re great, they tell you. When you’re unstoppable, the results speak for themselves."
              </div>
              <div className="book-review-quote">
                "Normal is the enemy of achievement. You don’t need balance - you need passion."
              </div>
              <div className="book-review-quote">
                "Pressure can bust pipes... or make diamonds. You decide."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing 72-hour work cycles increased my productivity by 300% on key projects, though required strict digital detox periods afterward. The Cleaner mindset helped negotiate 2 major promotions, but the "no celebration" rule initially strained team relationships until balanced with acknowledgment practices.
              </p>
              <p>
                The Dark Side concept transformed my workout regimen - focusing on "ownership not metrics" led to 23% strength gains. However, Grover's dismissal of work-life balance caused burnout cycles until I adapted his methods with recovery protocols.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Athletes pursuing elite performance</li>
                <li>Entrepreneurs building disruptive companies</li>
                <li>Executives leading high-stakes turnarounds</li>
                <li>Coaches developing championship mentalities</li>
                <li>Anyone stuck in "good enough" complacency</li>
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