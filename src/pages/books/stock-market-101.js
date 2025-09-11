import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function StockMarket101Review() {
  return (
    <Layout
      title="Stock Market 101 - Book Review"
      description="My review of Stock Market 101 by Michele Cagan - Fundamental concepts for understanding and participating in the stock market."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/stockMarket101.jpg"
                alt="Stock Market 101 by Michele Cagan" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/stockMarket101.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Stock Market 101</h1>
                <div className="book-review-author">by Michele Cagan</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">November 2019</div>
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
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Finance</span>
                  <span className="book-category">Investing</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                "Stock Market 101" offers a clear and concise introduction to the essential principles of stock market investing. Michele Cagan breaks down complex financial jargon and concepts into digestible insights, making it accessible for beginners.
              </p>
              <p>
                The book covers foundational topics such as stocks, bonds, market indices, trading strategies, and risk management, empowering readers to make informed investment decisions with confidence.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Understand the Basics</strong><br />
                Knowing what stocks are and how markets operate is crucial before investing.
              </p>
              <p>
                <strong>2. Importance of Diversification</strong><br />
                Spreading investments reduces risk and protects your portfolio.
              </p>
              <p>
                <strong>3. Long-term Perspective</strong><br />
                Patience and discipline often yield better returns than frequent trading.
              </p>
              <p>
                <strong>4. Beware of Emotional Decisions</strong><br />
                Avoid impulsive reactions to market volatility to safeguard your investments.
              </p>
              <p>
                <strong>5. Continuous Learning</strong><br />
                The stock market is dynamic; staying informed improves investment success.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Investing isn't about beating others at their game. It's about controlling yourself at your own game."
              </div>
              <div className="book-review-quote">
                "The stock market is a device for transferring money from the impatient to the patient."
              </div>
              <div className="book-review-quote">
                "Diversification is protection against ignorance."
              </div>
              <div className="book-review-quote">
                "Risk comes from not knowing what you’re doing."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Reading "Stock Market 101" solidified my understanding of how the stock market functions at a fundamental level. Michele Cagan’s straightforward explanations removed much of the intimidation I felt about investing.
              </p>
              <p>
                The emphasis on discipline and emotional control resonated with me, especially as a beginner investor prone to reacting to market swings. This book motivated me to adopt a patient, long-term approach rather than chasing quick gains.
              </p>
              <p>
                Overall, it’s a great starter guide that anyone looking to begin investing should consider.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                This book is ideal for:
              </p>
              <ul>
                <li>Beginner investors wanting to understand the stock market basics</li>
                <li>Anyone interested in personal finance and wealth-building</li>
                <li>Individuals seeking a clear, jargon-free introduction to investing</li>
                <li>People who want to avoid common investment mistakes</li>
                <li>Those looking for practical advice on managing risk and emotions</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/next-book-slug" className="book-review-nav-button">
                Next Review: [Next Book Title]
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
