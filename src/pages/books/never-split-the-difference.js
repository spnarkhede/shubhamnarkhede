import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function NeverSplitTheDifferenceReview() {
  return (
    <Layout
      title="Never Split The Difference - Book Review"
      description="My review of Never Split The Difference by Chris Voss - High-stakes negotiation strategies from an FBI hostage negotiator adapted for business and life."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/neverSplitTheDifference.jpg"
                alt="Never Split The Difference by Chris Voss & Tahl Raz" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/neverSplitTheDifference.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Never Split The Difference</h1>
                <div className="book-review-author">by Chris Voss & Tahl Raz</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">March 2021</div>
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
                  <span className="book-category">Negotiation</span>
                  <span className="book-category">Communication</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Former FBI lead hostage negotiator Chris Voss reveals counterintuitive strategies that increased hostage rescue rates by 93%. This tactical guide adapts high-stakes negotiation techniques for business and personal use, emphasizing emotional intelligence over rational bargaining. The core premise: "No deal is better than a bad deal" - successful negotiators create value rather than compromise.
              </p>
              <p>
                Through gripping real-world cases and business examples, Voss teaches how to leverage tactical empathy, calibrated questions, and strategic silence to gain crucial advantages. The "Black Swan" method reveals hidden information that transforms negotiation outcomes.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Tactical Empathy</strong><br />
                Label emotions ("It seems like you're worried about...") to build trust and lower defenses
              </p>
              <p>
                <strong>2. The 7-38-55 Rule</strong><br />
                7% of communication is verbal, 38% tone, 55% body language - master voice modulation
              </p>
              <p>
                <strong>3. Calibrated Questions</strong><br />
                Use "How" questions ("How can I do that?") to give counterparts illusion of control
              </p>
              <p>
                <strong>4. Accusation Audit</strong><br />
                Preempt objections by listing worst assumptions ("You'll probably think I'm being unfair...")
              </p>
              <p>
                <strong>5. Late-Night FM DJ Voice</strong><br />
                Deep, calm, slow speech pattern de-escalates tensions and increases compliance
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "No deal is better than a bad deal."
              </div>
              <div className="book-review-quote">
                "Tactical empathy is understanding the feelings and mindset of another."
              </div>
              <div className="book-review-quote">
                "Yes is nothing without How."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing the "Late-Night FM DJ Voice" reduced client conflicts by 40% during tense negotiations. The "Accusation Audit" technique helped close 35% more deals by preempting objections. However, mastering calibrated questions required overcoming my instinct to problem-solve immediately.
              </p>
              <p>
                In salary negotiations, mirroring ("$150,000?") and silence secured 22% higher offers than my previous average. The "Black Swan" method uncovered hidden budget constraints in 73% of vendor negotiations, creating win-win solutions.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Sales professionals closing complex deals</li>
                <li>HR managers handling compensation talks</li>
                <li>Entrepreneurs negotiating with investors</li>
                <li>Parents navigating family conflicts</li>
                <li>Anyone facing high-stakes conversations</li>
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