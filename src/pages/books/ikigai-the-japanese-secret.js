import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function IkigaiReview() {
  return (
    <Layout
      title="Ikigai - Book Review"
      description="Review of 'Ikigai: The Japanese Secret Philosophy for a Happy, Healthy Life' by Hector Garcia."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/ikigai.jpg"
                alt="Ikigai by Hector Garcia"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/ikigai.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Ikigai</h1>
                <div className="book-review-author">by Hector Garcia</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: June 2023</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: 4 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Philosophy</span>
                  <span className="book-category">Well-being</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>Ikigai</strong>, meaning "a reason for being" in Japanese, explores the lifestyle practices of the people of Okinawa — one of the world’s longest-living communities. Garcia blends research with cultural insights to deliver a life-enhancing narrative focused on purpose, mindfulness, and healthy habits.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Concepts</h2>
              <p><strong>1. Purpose:</strong> Discovering what makes you jump out of bed each morning.</p>
              <p><strong>2. Flow:</strong> The joy found in complete immersion in meaningful tasks.</p>
              <p><strong>3. Connection:</strong> The value of strong community bonds and shared responsibility.</p>
              <p><strong>4. Balance:</strong> Harmonizing work, hobbies, diet, and rest for longevity.</p>
              <p><strong>5. Simplicity:</strong> Living modestly and appreciating the small pleasures of life.</p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                "Our ikigai is different for all of us, but one thing we have in common is that we are all searching for meaning."
              </div>
              <div className="book-review-quote">
                "Being busy is not the same as being productive or fulfilled."
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book came at a time when I was seeking more balance in life. Ikigai helped me reflect on my own purpose and how small lifestyle changes can lead to greater joy and health. It is both calming and motivating — a gentle reminder that life’s depth lies in simplicity and intention.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Those seeking clarity and direction in life</li>
                <li>Readers interested in Eastern philosophy and longevity</li>
                <li>Anyone wanting to slow down and rediscover daily joy</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/deep-work" className="book-review-nav-button">
                Next Review: Deep Work
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
