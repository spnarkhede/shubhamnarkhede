import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function KautileeyaArthshastraReview() {
  return (
    <Layout
      title="Kautileeya Arthshastra - Book Review"
      description="Review of 'Kautileeya Arthshastra' by Kautilya (Chanakya)."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/kautileeyaArthshastra.jpg"
                alt="Kautileeya Arthshastra by Kautilya"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/kautileeyaArthshastra.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Kautileeya Arthshastra</h1>
                <div className="book-review-author">by Kautilya</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: April 2024</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~18–20 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">History</span>
                  <span className="book-category">Economics</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>Kautileeya Arthshastra</strong> is an ancient Indian treatise attributed to Kautilya (Chanakya),
                offering deep insights into governance, statecraft, economic policy, warfare, and intelligence systems. It’s
                a seminal work in political economy, written around the 4th century BCE, laying down the blueprint for
                ethical yet strategic governance.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Themes</h2>
              <ul>
                <li><strong>Rajadharma (Duty of a King):</strong> Emphasis on responsibility, justice, and strategic governance.</li>
                <li><strong>Economic Principles:</strong> Insights on taxation, trade, agriculture, and financial administration.</li>
                <li><strong>Espionage & Strategy:</strong> Use of intelligence networks and diplomatic tactics to preserve the state.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “The king shall lose no time when the opportunity waited for arrives.”
              </div>
              <div className="book-review-quote">
                “It is power and power alone which, only when exercised by the king with impartiality and in proportion to guilt, protects this world and the next.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Reading this text was intellectually enriching. It felt like unlocking the ancient blueprint for not only ruling
                an empire but also running a business or nation today. Its rational and methodical tone, combined with strategic foresight, shows why Kautilya was far ahead of his time.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Students of political science, history, and economics</li>
                <li>Leaders and strategists interested in statecraft and governance</li>
                <li>Anyone fascinated by ancient Indian knowledge systems</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/chanakyas-100-best-sutras" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Chanakya's 100 Best Sutras
              </Link>
              <Link to="/books/hindus-in-hindu-rashtra" className="book-review-nav-button">
                Next Review: Hindus in Hindu Rashtra
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
