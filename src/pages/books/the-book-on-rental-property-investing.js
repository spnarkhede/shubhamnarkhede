import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function RentalPropertyInvestingReview() {
  return (
    <Layout
      title="The Book on Rental Property Investing - Book Review"
      description="My review of The Book on Rental Property Investing by Brandon Turner - Practical strategies for building wealth through real estate investments."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/bookOnRentalPropertyInvesting.jpg"
                alt="The Book on Rental Property Investing by Brandon Turner" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/bookOnRentalPropertyInvesting.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">The Book on Rental Property Investing</h1>
                <div className="book-review-author">by Brandon Turner</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">February 2020</div>
                  </div>
                  
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">8 hours</div>
                  </div>
                </div>
                
                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Real Estate</span>
                  <span className="book-category">Investing</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Brandon Turner provides a comprehensive guide to building wealth through rental properties, covering everything from finding deals to managing tenants. The book emphasizes the "BRRRR" strategy (Buy, Rehab, Rent, Refinance, Repeat) and offers practical frameworks for analyzing property cash flow. Unlike generic real estate advice, Turner focuses on sustainable wealth-building through systems and scale.
              </p>
              <p>
                Updated for modern investors, the book includes strategies for remote landlording, working with property managers, and leveraging technology. The "Four Square Method" for evaluating deals and detailed mortgage calculations make this particularly valuable for avoiding common investment pitfalls.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Deal Analysis Fundamentals</strong><br />
                • 1% Rule: Monthly rent should be 1% of purchase price<br />
                • 50% Rule: 50% of income goes to operating expenses
              </p>
              <p>
                <strong>2. Scaling Strategies</strong><br />
                • BRRRR Method: Recycled capital for continuous investing<br />
                • House Hacking: Live-in multifamily properties
              </p>
              <p>
                <strong>3. Risk Management</strong><br />
                • Vacancy Reserves: 6-8% of gross income<br />
                • CapEx Budgeting: 10-20% of rent for maintenance
              </p>
              <p>
                <strong>4. Modern Landlording</strong><br />
                • Automated Screening: AI tenant verification tools<br />
                • Remote Management: Digital lease agreements
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Rental properties are like printing machines for cash flow - if you feed them properly."
              </div>
              <div className="book-review-quote">
                "The best investment property is the one someone else manages but you profit from."
              </div>
              <div className="book-review-quote">
                "Real estate wealth isn't made in the buying, but in the buying right."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Applying the BRRRR strategy helped me acquire 3 properties with 75% recycled capital within 18 months. The 1% Rule prevented 2 bad purchases that seemed attractive superficially. However, Turner's maintenance estimates proved low in high-cost areas - adjusting CapEx to 25% preserved cash flow.
              </p>
              <p>
                Implementing automated rent collection reduced late payments by 90%, but the suggested screening criteria rejected 80% of applicants in competitive markets. Balancing Turner's systems with local market nuances proved essential for success.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>First-time real estate investors</li>
                <li>House hackers seeking multifamily units</li>
                <li>Stock investors diversifying into tangible assets</li>
                <li>Retirees building passive income streams</li>
                <li>Agents transitioning to investing</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/rich-dad-poor-dad" className="book-review-nav-button">
                Next Review: Rich Dad Poor Dad
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}