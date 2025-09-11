import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function MillionaireFastlaneReview() {
  return (
    <Layout
      title="The Millionaire Fastlane - Book Review"
      description="My review of The Millionaire Fastlane by MJ DeMarco - Unconventional strategies for building wealth through entrepreneurship."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/millionaireFastlane.jpg"
                alt="The Millionaire Fastlane by MJ DeMarco" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/millionaireFastlane.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">The Millionaire Fastlane</h1>
                <div className="book-review-author">by MJ DeMarco</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">January 2020</div>
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
                  <div className="book-review-rating-stars">★★★★½☆</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Finance</span>
                  <span className="book-category">Entrepreneurship</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                MJ DeMarco challenges conventional wealth-building wisdom with a provocative roadmap to financial freedom through entrepreneurship. The book dismantles the "Slowlane" approach of traditional retirement planning, advocating instead for creating scalable business systems that generate passive income. Core concepts include the Fastlane Equation (Wealth = Net Profit + Asset Value) and the importance of controllable, entry-barriered businesses.
              </p>
              <p>
                DeMarco emphasizes velocity over frugality, arguing that true wealth comes from impacting millions rather than pinching pennies. The "Five Fastlane Commandments" provide a framework for building businesses that can detach time from income through leverage and automation.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Wealth Roadmaps</strong><br />
                • Slowlane: Trade time for money, retire at 65<br />
                • Fastlane: Build systems that work while you sleep
              </p>
              <p>
                <strong>2. Business Fundamentals</strong><br />
                • CONTROL: Own your economic destiny<br />
                • SCALE: Serve millions through products/technology<br />
                • TIME: Decouple effort from income
              </p>
              <p>
                <strong>3. Fastlane Mathematics</strong><br />
                • Wealth = (Net Profit + Asset Value) × Time<br />
                • Profit = Unit Sales × (Price - Costs)
              </p>
              <p>
                <strong>4. Mindset Shifts</strong><br />
                • Focus on needs (yours and others')<br />
                • Make money through multiplication, not addition
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "The surest path to wealth is to make others wealthy first."
              </div>
              <div className="book-review-quote">
                "Money doesn't buy happiness, but it buys freedom - and freedom is the ultimate luxury."
              </div>
              <div className="book-review-quote">
                "Build a business, not a job. If your business requires your presence, you own a job."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing the Fastlane principles helped me transition from freelance work to building a SaaS product that now generates 7x my previous income. The "1% Rule" (serve 1% of a million-person market) transformed how I evaluate business ideas. However, DeMarco's dismissal of all Slowlane strategies overlooks valid hybrid approaches combining employment with entrepreneurship.
              </p>
              <p>
                Applying the "Five Commandments" to an e-commerce venture reduced operational involvement by 60% within 18 months through automation. The harsh truths about "get rich slow" schemes provided needed motivation, though the tone could discourage more risk-averse readers.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Aspiring entrepreneurs seeking non-traditional paths</li>
                <li>Corporate professionals feeling trapped in rat races</li>
                <li>Business owners wanting to scale and automate</li>
                <li>Anyone skeptical of 401(k)-based retirement plans</li>
                <li>Side hustlers ready to productize their skills</li>
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