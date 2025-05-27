import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function ShrimadBhagavadGeetaVolume2Review() {
  return (
    <Layout
      title="Shrimad Bhagavad Geeta Volume 2 - Book Review"
      description="Review of 'Shrimad Bhagavad Geeta Volume 2' by Swami Ramsukhdas."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/srimadBhagavadgitaVolumn2.jpg"
                alt="Shrimad Bhagavad Geeta Volume 2 by Swami Ramsukhdas"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/srimadBhagavadgitaVolumn2.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Shrimad Bhagavad Geeta Volume 2</h1>
                <div className="book-review-author">by Swami Ramsukhdas</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: February 2024</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~16 hours</span>
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
                <strong>Shrimad Bhagavad Geeta Volume 2</strong> is the powerful continuation and culmination of the spiritual wisdom presented in Volume 1. Swami Ramsukhdas elaborates on the remaining chapters of the Gita, offering commentary that is deeply rooted in Vedantic thought and practical spirituality. This volume guides readers toward liberation (moksha) through devotion, knowledge, and surrender to the Supreme.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <ul>
                <li><strong>Supreme Devotion (Bhakti Yoga):</strong> Devotion is the most accessible and fulfilling path to realize the Divine.</li>
                <li><strong>Unity of All Paths:</strong> All genuine spiritual paths ultimately lead to the same truth — unity with the Self.</li>
                <li><strong>Letting Go:</strong> True surrender means abandoning all dharmas and taking sole refuge in the Lord.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “Abandon all varieties of dharma and simply surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.”
              </div>
              <div className="book-review-quote">
                “The one who sees Me in all beings, and all beings in Me, never becomes separated from Me.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Volume 2 of Swami Ramsukhdas’s commentary brought the entire teaching of the Gita full circle for me. The emphasis on unconditional surrender and supreme love for the Divine left a lasting impression. It deepened my understanding of not just the Gita, but also of my own spiritual inclinations. This is not just a book — it's a guide for life.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Devotees seeking spiritual direction and surrender</li>
                <li>Readers who completed Volume 1 and want full understanding</li>
                <li>Spiritual practitioners interested in Vedantic and Bhakti philosophy</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/srimad-bhagavadgita-volumn1" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Shrimad Bhagavad Geeta Volume 1
              </Link>
              <Link to="/books/mindset" className="book-review-nav-button">
                Next Review: Mindset
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
