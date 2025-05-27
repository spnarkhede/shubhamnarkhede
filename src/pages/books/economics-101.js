import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function Economics101Review() {
  return (
    <Layout
      title="Economics 101 - Book Review"
      description="My review of Economics 101 by Alfred Mill - A primer on economic theories and concepts."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/economics101.jpg"
                alt="Economics 101 by Alfred Mill"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/economics101.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Economics 101</h1>
                <div className="book-review-author">by Alfred Mill</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: June 2019</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: 7 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Economics</span>
                  <span className="book-category">Education</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Economics 101 offers a foundational overview of economic theories and concepts designed for everyday readers. Alfred Mill breaks down complex ideas into simple explanations, making the subject accessible for beginners.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p><strong>1. Basic Economic Principles:</strong> Understanding supply, demand, and market equilibrium.</p>
              <p><strong>2. Role of Government:</strong> How policies influence markets and economic growth.</p>
              <p><strong>3. Economic Indicators:</strong> Insight into GDP, inflation, and unemployment metrics.</p>
              <p><strong>4. Market Structures:</strong> Differences between perfect competition, monopoly, and oligopoly.</p>
              <p><strong>5. Personal Finance Impact:</strong> How macroeconomics affects individual financial decisions.</p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Economics is everywhere, and understanding it helps you make better choices."
              </div>
              <div className="book-review-quote">
                "Markets are not perfect, but they are powerful mechanisms for resource allocation."
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book provided me with a solid foundation to grasp economic principles that impact both global and personal finances. It’s a great starter book before diving into more complex economic texts.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <ul>
                <li>Students beginning their study of economics</li>
                <li>Anyone curious about how economic systems work</li>
                <li>Individuals interested in improving financial literacy</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/stock-market-101" className="book-review-nav-button">
                Next Review: Stock Market 101
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
