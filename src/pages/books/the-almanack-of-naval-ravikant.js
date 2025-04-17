import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function AlmanackOfNavalReview() {
  return (
    <Layout
      title="The Almanack of Naval Ravikant - Book Review"
      description="My review of Naval Ravikant's wisdom compendium - Timeless principles for wealth creation, happiness, and living authentically in the modern world."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/almanackOfNavalRavikant.jpg"
                alt="The Almanack of Naval Ravikant by Eric Jorgenson" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/almanackOfNavalRavikant.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">The Almanack of Naval Ravikant</h1>
                <div className="book-review-author">by Eric Jorgenson</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">October 2021</div>
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
                  <span className="book-category">Philosophy</span>
                  <span className="book-category">Wealth</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Eric Jorgenson compiles Naval Ravikant's profound insights on wealth, happiness, and philosophy into a modern Stoic manifesto. This curated collection teaches that wealth creation stems from specific knowledge, leverage, and judgment - not mere hard work. Naval's counterintuitive wisdom: "Money is negative karma" and "Desire is a contract with yourself to be unhappy" challenges conventional success narratives.
              </p>
              <p>
                The book's three pillars - Wealth Creation, Happiness Engineering, and Philosophical Living - offer actionable principles like the 3 Leverage Framework (labor, capital, code/media) and Happiness Equation (Acceptance > Expectations).
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Wealth Creation Formula</strong><br />
                Wealth = Specific Knowledge + Accountability + Leverage + Judgment
              </p>
              <p>
                <strong>2. 3 Leverage Types</strong><br />
                1. Labor (managing people)<br />
                2. Capital (money)<br />
                3. Code/Media (zero-marginal cost products)
              </p>
              <p>
                <strong>3. Happiness Practices</strong><br />
                • Meditation as mental hygiene<br />
                • Reality acceptance over expectations<br />
                • Remove identity from possessions
              </p>
              <p>
                <strong>4. Reading Philosophy</strong><br />
                "Read what you love until you love to read" - build knowledge compounds
              </p>
              <p>
                <strong>5. Retirement Redefined</strong><br />
                Retirement is when you stop sacrificing today for tomorrow - achievable now
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Money is the gas that gets you to freedom lane, not the destination."
              </div>
              <div className="book-review-quote">
                "Happiness is a default state you return to when you remove negative thoughts."
              </div>
              <div className="book-review-quote">
                "Specific knowledge is knowledge you can't be trained for - it's your DNA, your passions."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing Naval's leverage principles increased my income 10x through digital products. The "specific knowledge" focus helped transition from consulting to scalable SaaS. However, detaching happiness from outcomes required daily meditation practice - 18 months later, my anxiety decreased by 70%.
              </p>
              <p>
                Adopting the "retirement now" mindset transformed my work approach - rejecting projects that felt like sacrifice increased client quality by 40%. The reading philosophy led to 100+ book/year habit, compounding into multiple successful ventures.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Entrepreneurs building scalable businesses</li>
                <li>Knowledge workers transitioning to creators</li>
                <li>Philosophy enthusiasts seeking modern stoicism</li>
                <li>Investors developing mental frameworks</li>
                <li>Anyone seeking financial/emotional freedom</li>
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