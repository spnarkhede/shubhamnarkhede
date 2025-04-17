import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function RadicalCandorReview() {
  return (
    <Layout
      title="Radical Candor - Book Review"
      description="My review of Radical Candor by Kim Scott - A transformative approach to leadership communication that balances care and challenge for optimal team performance."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/radicalCandorRevised.jpg"
                alt="Radical Candor by Kim Scott" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/radicalCandorRevised.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Radical Candor</h1>
                <div className="book-review-author">by Kim Scott</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">November 2023</div>
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
                  <div className="book-review-rating-stars">★★★★★</div>
                  <div className="book-review-rating-value">5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Communication</span>
                  <span className="book-category">Leadership</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Kim Scott's groundbreaking work introduces a communication framework that transforms workplace relationships through the dual principles of "Care Personally" and "Challenge Directly." Using real-world examples from her tech industry experience, Scott demonstrates how radical candor fosters trust, improves performance, and creates psychologically safe environments. The book provides actionable guidance for giving and receiving feedback, addressing underperformance, and building cohesive teams.
              </p>
              <p>
                Unlike traditional management approaches, radical candor emphasizes the importance of personal relationships in professional settings while maintaining high standards. Scott's quadrant model helps readers navigate the fine line between empathetic leadership and results-driven management.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Radical Candor Framework</strong><br />
                Balance "Care Personally" (y-axis) with "Challenge Directly" (x-axis) for optimal communication.
              </p>
              <p>
                <strong>2. The Criticism Sandwich Myth</strong><br />
                Avoid diluting feedback with excessive praise - be clear, specific, and kind.
              </p>
              <p>
                <strong>3. Get Stuff Done (GSD) Wheel</strong><br />
                A continuous cycle for effective leadership: Listen, Clarify, Debate, Decide, Persuade, Execute.
              </p>
              <p>
                <strong>4. Solicit Feedback First</strong><br />
                Create safety for tough conversations by requesting criticism before giving it.
              </p>
              <p>
                <strong>5. Guidance vs. Criticism</strong><br />
                Distinguish between actionable feedback ("Your presentation needed more data") and vague criticism ("You did a bad job").
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Radical Candor is guidance that's kind and clear, specific and sincere."
              </div>
              <div className="book-review-quote">
                "Care Personally: Don't professionalize personal relationships. Personalize professional ones."
              </div>
              <div className="book-review-quote">
                "Challenge Directly is when you tell someone when their work isn't good enough - and that's a gift."
              </div>
              <div className="book-review-quote">
                "The most important thing you can do as a boss is have regular 1:1s where you listen."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing Radical Candor revolutionized my leadership approach. The framework helped me address long-standing performance issues I'd avoided due to fear of damaging relationships. Learning to separate "challenging directly" from being confrontational was particularly transformative.
              </p>
              <p>
                Using Scott's 1:1 meeting structure increased team engagement dramatically. However, practicing radical candor required overcoming my own discomfort with direct communication - I initially leaned too far into "Ruinous Empathy." The GSD Wheel became an invaluable tool for maintaining accountability while preserving trust.
              </p>
              <p>
                Six months later, my team reports higher job satisfaction and clearer expectations. The most surprising outcome? Being on the receiving end of radical candor from reports has accelerated my own professional growth.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                This book is essential for:
              </p>
              <ul>
                <li>New and experienced managers</li>
                <li>Team leaders in fast-paced industries</li>
                <li>Anyone struggling with difficult conversations</li>
                <li>Organizations building feedback cultures</li>
                <li>Employees wanting to influence upward</li>
                <li>Remote work managers maintaining team cohesion</li>
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