import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import SpotifyPodcast from '@site/src/components/SpotifyPodcast';

export default function PersonalMBAReview() {
  return (
    <Layout
      title="The Personal MBA - Book Review"
      description="My review of The Personal MBA by Josh Kaufman - A practical blueprint for mastering essential business principles without formal education."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/the-personal-mba.jpg"
                alt="The Personal MBA by Josh Kaufman" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/the-personal-mba.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">The Personal MBA</h1>
                <div className="book-review-subtitle">Master the art of Business</div>
                <div className="book-review-author">by Josh Kaufman</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">January 2023</div>
                  </div>
                  
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">7 hours</div>
                  </div>
                </div>
                
                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★½</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Business</span>
                  <span className="book-category">Self-Improvement</span>
                </div>
              </div>
            </div>
            
            <SpotifyPodcast 
              spotifyUrl="https://open.spotify.com/episode/0HbmSLJJ9YJ9Q0qQlJQy4I"
              title="The Personal MBA with Josh Kaufman"
            />
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Josh Kaufman's "The Personal MBA" distills decades of business wisdom into a single volume, offering readers a self-directed education in core business concepts. The book systematically covers essential topics including value creation, marketing, sales, finance, and systems thinking, while debunking the myth that formal business education is necessary for success. Kaufman emphasizes mental models over memorization, teaching readers how to think critically about business challenges rather than simply follow templates.
              </p>
              <p>
                Unlike traditional MBA curricula, this guide focuses on practical application over theory. It serves as both a comprehensive reference and actionable playbook, with frameworks like the Five Parts of Every Business and the Twelve Standard Forms of Value helping readers analyze and improve any enterprise.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Five Parts of Every Business</strong><br />
                All businesses must master: Value Creation, Marketing, Sales, Value Delivery, and Finance.
              </p>
              <p>
                <strong>2. The Iron Law of the Market</strong><br />
                Market demand trumps everything - no amount of effort can compensate for lack of demand.
              </p>
              <p>
                <strong>3. Mental Models Matter</strong><br />
                Develop 80-20 thinking, critical thresholds, and opportunity cost analysis for better decisions.
              </p>
              <p>
                <strong>4. Twelve Forms of Value</strong><br />
                Value isn't just physical products - includes subscriptions, knowledge, financial instruments, etc.
              </p>
              <p>
                <strong>5. Self-Education Framework</strong><br />
                The best education comes from focused reading, experimentation, and real-world application.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Business is not about money. It's about making dreams come true for others and yourself."
              </div>
              <div className="book-review-quote">
                "A confused mind always says no. If your prospect doesn't 'get it', they'll never buy."
              </div>
              <div className="book-review-quote">
                "The purpose of a business is to acquire and keep customers. Everything else is commentary."
              </div>
              <div className="book-review-quote">
                "Never pay for what you can learn for free, but always pay for valuable things you can't get anywhere else."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book revolutionized how I approach business learning. Kaufman's emphasis on first principles helped me cut through industry jargon and focus on what truly matters. The mental models section has become my go-to toolkit for analyzing business opportunities - I particularly use the "Four Methods to Increase Revenue" framework when evaluating projects.
              </p>
              <p>
                The chapter on human behavior changed how I approach negotiations and team management. I've implemented the "SCARF" model (Status, Certainty, Autonomy, Relatedness, Fairness) to improve workplace dynamics with measurable success.
              </p>
              <p>
                While some sections feel overwhelming in scope, the book's modular structure lets readers focus on relevant topics. It's become my most loaned business book - I reference it more often than my actual MBA textbooks.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Aspiring entrepreneurs without formal business education</li>
                <li>Career-changers seeking business literacy</li>
                <li>Small business owners wanting systematic growth</li>
                <li>Corporate employees aiming to understand company operations</li>
                <li>Self-learners who prefer practical over academic approaches</li>
                <li>MBA graduates seeking refreshers on core concepts</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/atomic-habits" className="book-review-nav-button">
                Next Review: Atomic Habits
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
