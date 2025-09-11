import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function CorporateChanakyaReview() {
  return (
    <Layout
      title="Corporate Chanakya - Book Review"
      description="My review of Corporate Chanakya by Radhakrishnan Pillai - Applying ancient wisdom to modern business leadership."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/corporateChanakya.jpg"
                alt="Corporate Chanakya by Radhakrishnan Pillai"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/corporateChanakya.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Corporate Chanakya</h1>
                <div className="book-review-author">by Radhakrishnan Pillai</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: February 2024</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: 6 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Leadership</span>
                  <span className="book-category">Business</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Corporate Chanakya draws on the strategic teachings of the ancient Indian thinker Chanakya and adapts them to the modern corporate world. It offers insights into leadership, management, negotiation, and organizational strategy through the lens of timeless wisdom.
              </p>
              <p>
                The book is designed for business leaders seeking practical, philosophical, and ethical frameworks to lead their teams and companies more effectively.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Strategic Leadership</strong><br />
                Chanakya’s principles emphasize foresight, planning, and ethical leadership as pillars of corporate success.
              </p>
              <p>
                <strong>2. Managing People</strong><br />
                Understanding human nature and motivations is key to motivating and managing teams.
              </p>
              <p>
                <strong>3. Negotiation and Diplomacy</strong><br />
                The book provides timeless negotiation tactics grounded in psychology and realpolitik.
              </p>
              <p>
                <strong>4. Organizational Strategy</strong><br />
                Success is rooted in clear vision, adaptability, and efficient resource management.
              </p>
              <p>
                <strong>5. Ethical Governance</strong><br />
                Ethics and values form the backbone of sustainable leadership and corporate reputation.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "A person should not be too honest. Straight trees are cut first and honest people are victimized first."
              </div>
              <div className="book-review-quote">
                "Test a servant while in the discharge of his duty, a relative in difficulty, a friend in adversity, and a wife in misfortune."
              </div>
              <div className="book-review-quote">
                "He who is overly attached to his family members experiences fear and sorrow, for the root of all grief is attachment."
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book beautifully bridges ancient philosophy and contemporary business practices. It encouraged me to think beyond conventional management techniques and appreciate the value of timeless wisdom in leadership.
              </p>
              <p>
                Some concepts felt challenging to directly apply in today's fast-paced environment, but the underlying principles remain highly relevant.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <ul>
                <li>Business leaders and managers interested in ethical leadership</li>
                <li>Entrepreneurs seeking strategic guidance</li>
                <li>Students of management and leadership philosophy</li>
                <li>Anyone curious about applying ancient wisdom to modern business</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/chanakyas-100-best-sutras" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Chanakya's 100 Best Sutras
              </Link>
              <Link to="/books" className="book-review-nav-button">
                Next Review: Back to All Books
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
