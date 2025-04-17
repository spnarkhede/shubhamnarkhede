import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function EightyTwentyPrincipleReview() {
  return (
    <Layout
      title="The 80/20 Principle - Book Review"
      description="My review of The 80/20 Principle by Richard Koch - Mastering the Pareto Principle to achieve exceptional results through focused effort."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/eightyTwentyPrinciple.jpg"
                alt="The 80/20 Principle by Richard Koch" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/eightyTwentyPrinciple.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">The 80/20 Principle</h1>
                <div className="book-review-author">by Richard Koch</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">June 2020</div>
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
                  <span className="book-category">Business</span>
                  <span className="book-category">Productivity</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Richard Koch expands Vilfredo Pareto's original observation into a comprehensive system for personal and business optimization. The book demonstrates how 80% of results consistently emerge from 20% of causes across domains - from time management to customer revenue. Koch provides a 7-step framework to identify high-impact activities while eliminating low-value efforts through "productive subtraction."
              </p>
              <p>
                Modern applications include digital minimalism (20% of apps creating 80% of value) and team productivity analysis. The "Double 80/20" concept (focusing on the 20% of the 20%) reveals how exponential results come from recursive prioritization. Case studies show companies achieving 10x growth by reallocating resources to their most profitable products/clients.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Core Applications</strong><br />
                • 80% of profits come from 20% of products<br />
                • 80% of stress comes from 20% of relationships
              </p>
              <p>
                <strong>2. Implementation Framework</strong><br />
                • The 80/20 Audit: Quantify inputs vs outputs<br />
                • Power Curve Mapping: Visualize resource allocation
              </p>
              <p>
                <strong>3. Advanced Techniques</strong><br />
                • Time Revolution: 96-Minute Rule for deep work<br />
                • The 80/20 Matrix: Classify tasks by impact/effort
              </p>
              <p>
                <strong>4. Business Strategy</strong><br />
                • Price Anchoring: 80% of premium pricing power from 20% features<br />
                • Client Grading: A/B/C categorization by profitability
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Progress comes not from working harder, but from working only on what matters."
              </div>
              <div className="book-review-quote">
                "The greatest liberation is discovering what you can ignore."
              </div>
              <div className="book-review-quote">
                "Multiply value by dividing focus."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Applying the 80/20 Audit to my consulting business revealed 73% of revenue came from 17% of clients. Pruning low-value accounts increased profits by 40% while reducing workload. The 96-Minute Rule boosted daily output - 3 focused sessions account for 80% of meaningful work. However, over-optimization risked missing serendipitous opportunities until balanced with "20% exploration time."
              </p>
              <p>
                Implementing Power Curve Mapping for team tasks reduced meeting hours by 60% while improving project completion rates. Six months later, these principles have become mental defaults, though maintaining the discipline to regularly re-audit remains challenging.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Overwhelmed professionals seeking focus</li>
                <li>Startups needing resource prioritization</li>
                <li>Managers optimizing team productivity</li>
                <li>Marketers allocating campaign budgets</li>
                <li>Anyone feeling busy but unproductive</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/deep-work" className="book-review-nav-button">
                Next Review: Deep Work
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}