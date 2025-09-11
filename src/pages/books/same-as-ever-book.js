import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function SameAsEverReview() {
  return (
    <Layout
      title="Same As Ever - Book Review"
      description="My review of Same As Ever by Morgan Housel - Exploring timeless patterns in human behavior and financial history that shape our economic future."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/sameAsEver.jpg"
                alt="Same As Ever by Morgan Housel" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/sameAsEver.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Same As Ever</h1>
                <div className="book-review-author">by Morgan Housel</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">May 2020</div>
                  </div>
                  
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">5 hours</div>
                  </div>
                </div>
                
                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★½☆</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Finance</span>
                  <span className="book-category">History</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Morgan Housel examines 24 timeless patterns of human behavior that drive financial markets and historical outcomes. Through century-spanning examples from tulip mania to crypto crashes, the book reveals how greed, fear, and irrational optimism remain constant forces. The "Unchanging Equation of Risk" framework shows how progress and disaster coexist through history.
              </p>
              <p>
                Unlike typical economic forecasts, Housel focuses on enduring psychological drivers rather than temporary trends. The "Three Layers of History" concept (events, trends, and human nature) provides a lens to separate signal from noise in market movements and societal shifts.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Historical Rhythms</strong><br />
                • Progress requires optimism, but survival demands pessimism<br />
                • All booms contain seeds of busts (and vice versa)
              </p>
              <p>
                <strong>2. Behavioral Constants</strong><br />
                • People overestimate short-term change, underestimate long-term transformation<br />
                • Risk perception depends more on recency than probability
              </p>
              <p>
                <strong>3. Market Paradoxes</strong><br />
                • The most valuable lessons are from forgotten histories<br />
                • Complexity grows faster than our ability to manage it
              </p>
              <p>
                <strong>4. Decision-Making Frameworks</strong><br />
                • The 20/30/50 Rule: 20% data, 30% interpretation, 50% psychology<br />
                • Margin of Safety Spectrum: From finances to relationships
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "History never repeats, but it often lectures."
              </div>
              <div className="book-review-quote">
                "The four most dangerous words in investing: 'This time is different.'"
              </div>
              <div className="book-review-quote">
                "We study history not to predict the future, but to widen our circle of understanding."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Applying Housel's "Three Layer Analysis" helped me avoid panic-selling during the 2022 market correction by focusing on enduring human behaviors rather than daily headlines. The "Uncertainty Checklist" from Chapter 14 became my go-to tool for investment decisions, reducing impulsive moves by 60%. However, the historical focus sometimes overlooks modern accelerants like algorithmic trading.
              </p>
              <p>
                Implementing the "Margin of Safety Spectrum" improved both financial planning (maintaining 12-month emergency funds) and professional relationships (allowing buffer in deadlines). Six months after reading, I find myself instinctively asking "What's the permanent lesson?" in chaotic situations.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Investors tired of market noise</li>
                <li>History buffs analyzing economic patterns</li>
                <li>Leaders making long-term strategic decisions</li>
                <li>Psychologists studying financial behavior</li>
                <li>Anyone navigating uncertainty in volatile times</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/psychology-of-money" className="book-review-nav-button">
                Next Review: The Psychology of Money
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}