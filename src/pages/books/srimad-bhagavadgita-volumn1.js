import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function ShrimadBhagavadGeetaVolume1Review() {
  return (
    <Layout
      title="Shrimad Bhagavad Geeta Volume 1 - Book Review"
      description="Review of 'Shrimad Bhagavad Geeta Volume 1' by Swami Ramsukhdas."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/srimadBhagavadgitaVolumn1.jpg"
                alt="Shrimad Bhagavad Geeta Volume 1 by Swami Ramsukhdas"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/srimadBhagavadgitaVolumn1.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Shrimad Bhagavad Geeta Volume 1</h1>
                <div className="book-review-author">by Swami Ramsukhdas</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: January 2024</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~15 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★★</div>
                  <div className="book-review-rating-value">5/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Spirituality</span>
                  <span className="book-category">Scripture</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>Shrimad Bhagavad Geeta Volume 1</strong> is a profound and deeply insightful commentary on the first half of the Bhagavad Gita, authored by the revered saint Swami Ramsukhdas. The book emphasizes karma yoga, bhakti, and the path to liberation through detachment and surrender to God. Each verse is expounded with clarity and relevance to both spiritual seekers and modern-day aspirants.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <ul>
                <li><strong>Selfless Action (Nishkama Karma):</strong> Perform duty without attachment to results.</li>
                <li><strong>True Renunciation:</strong> Renunciation of ego and desire is greater than external detachment.</li>
                <li><strong>Steady Wisdom:</strong> The wise remain unmoved by pleasure or pain, maintaining equanimity.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “The Lord resides in the heart of all beings and guides them according to their karma.”
              </div>
              <div className="book-review-quote">
                “Self-realization is not abandonment of work, but renunciation of ego and attachment in work.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This volume is a treasure trove for anyone looking to dive deep into the philosophical core of the Bhagavad Gita. Swami Ramsukhdasji’s interpretations go beyond academic study — they resonate on a soul level, making the teachings accessible and transformative. I found myself reflecting on my own actions, intentions, and approach toward spirituality.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Spiritual seekers on the path of karma yoga</li>
                <li>Students of Hindu scripture and philosophy</li>
                <li>Anyone desiring inner peace and clarity through self-realization</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/semen-retention-miracles" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Semen Retention Miracles
              </Link>
              <Link to="/books/srimad-bhagavadgita-volumn2" className="book-review-nav-button">
                Next Review: Shrimad Bhagavad Geeta Volume 2
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
