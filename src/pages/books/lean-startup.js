import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function LeanStartupReview() {
  return (
    <Layout
      title="The Lean Startup - Book Review"
      description="My review of The Lean Startup by Eric Ries - Revolutionizing entrepreneurship through continuous innovation and validated learning."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/lean-startup.jpg"
                alt="The Lean Startup by Eric Ries" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/lean-startup.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">The Lean Startup</h1>
                <div className="book-review-author">by Eric Ries</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">May 2019</div>
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
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Business</span>
                  <span className="book-category">Entrepreneurship</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Eric Ries' "The Lean Startup" introduces a scientific approach to creating and managing successful startups in an age of uncertainty. The methodology emphasizes rapid iteration, validated learning, and customer feedback over traditional business planning. Central to the philosophy is the Build-Measure-Learn feedback loop, designed to help entrepreneurs continuously improve their products and business models.
              </p>
              <p>
                Ries challenges conventional wisdom about entrepreneurship, advocating for Minimum Viable Products (MVPs) over polished launches, and metrics that matter over vanity numbers. The book provides practical frameworks for deciding when to pivot (change strategy) or persevere, and introduces innovation accounting as a way to measure progress in uncertain environments.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Minimum Viable Product (MVP)</strong><br />
                Launch with the simplest version of your product that can test core assumptions, then iterate based on real user feedback.
              </p>
              <p>
                <strong>2. Validated Learning</strong><br />
                Use scientific experiments to prove business hypotheses rather than relying on untested assumptions.
              </p>
              <p>
                <strong>3. Build-Measure-Learn Loop</strong><br />
                Continuously cycle through building MVPs, measuring customer response, and learning what works.
              </p>
              <p>
                <strong>4. Innovation Accounting</strong><br />
                Track actionable metrics like conversion rates and customer retention instead of vanity metrics.
              </p>
              <p>
                <strong>5. Pivot or Persevere</strong><br />
                Know when to change direction (pivot) based on data vs continuing with current strategy.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "The only way to win is to learn faster than anyone else."
              </div>
              <div className="book-review-quote">
                "Startups exist not just to make stuff, make money, or even serve customers. They exist to learn how to build a sustainable business."
              </div>
              <div className="book-review-quote">
                "Success is not delivering a feature; success is learning how to solve the customer's problem."
              </div>
              <div className="book-review-quote">
                "The big question of our time is not 'Can it be built?' but 'Should it be built?'"
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book fundamentally changed how I approach product development. Implementing MVP strategies helped me avoid wasting months on features users didn't want. The emphasis on actionable metrics versus vanity numbers was revelatory - I stopped obsessing over total downloads and focused instead on activation rates and retention.
              </p>
              <p>
                The pivot/persevere framework became a regular part of my team's quarterly reviews. While some concepts like "innovation accounting" felt initially abstract, applying them to real projects revealed their power in cutting through uncertainty.
              </p>
              <p>
                However, I found the strict lean approach sometimes conflicts with brand-building needs in competitive markets. The book works best when combined with other strategies - it's a powerful tool, not a complete playbook.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Startup founders and entrepreneurs</li>
                <li>Product managers in fast-paced industries</li>
                <li>Corporate innovation teams</li>
                <li>Anyone launching new products/services</li>
                <li>Investors understanding modern startups</li>
                <li>Readers who enjoyed "Zero to One" or "Business Model Generation"</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/zero-to-one" className="book-review-nav-button">
                Next Review: Zero to One
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}