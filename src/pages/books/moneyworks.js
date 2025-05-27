import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function MoneyWorksReview() {
  return (
    <Layout
      title="Money Works - Book Review"
      description="Review of 'Money Works' by Prateeik Prajapati."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/moneyworks.jpg"
                alt="Money Works by Prateeik Prajapati"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/moneyworks.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Money Works</h1>
                <div className="book-review-author">by Prateeik Prajapati</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: April 2024</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~3–4 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Finance</span>
                  <span className="book-category">Self-Help</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>Money Works</strong> by Prateeik Prajapati blends financial wisdom with Indian dharmic values. It discusses how to earn, spend, and grow money consciously, aligning monetary behavior with ethics, purpose, and sustainability. The book emphasizes both material and spiritual perspectives of wealth.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <ul>
                <li><strong>Dharmic finance:</strong> Wealth should serve one's higher purpose, not just personal gain.</li>
                <li><strong>Conscious consumption:</strong> Avoid unnecessary expenses by understanding real needs vs. wants.</li>
                <li><strong>Financial discipline:</strong> Regular saving, giving (dāna), and mindful investing build long-term wealth.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “Money is a servant, not a master. The wise never reverse this role.”
              </div>
              <div className="book-review-quote">
                “Wealth that isn’t rooted in dharma becomes a burden instead of a blessing.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                I appreciated the integration of ancient wisdom with modern financial planning. The book prompted me to reflect on how I treat money and reminded me that financial success is incomplete without ethical grounding and gratitude. A practical guide with a spiritual compass.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Young professionals learning financial independence</li>
                <li>Readers interested in holistic and ethical money management</li>
                <li>Anyone seeking balance between wealth and well-being</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/master-your-time" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Master Your Time
              </Link>
              <Link to="/books/kautileeya-arthshastra" className="book-review-nav-button">
                Next Review: Kautileeya Arthshastra
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
