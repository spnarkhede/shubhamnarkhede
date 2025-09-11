import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function SemenRetentionMiraclesReview() {
  return (
    <Layout
      title="Semen Retention Miracles - Book Review"
      description="Review of 'Semen Retention Miracles' by Prateeik Prajapati."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/semenRetentionMiracles.jpg"
                alt="Semen Retention Miracles by Prateeik Prajapati"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/semenRetentionMiracles.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Semen Retention Miracles</h1>
                <div className="book-review-author">by Prateeik Prajapati</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: February 2024</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~3 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★☆☆</div>
                  <div className="book-review-rating-value">3/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Self-Discipline</span>
                  <span className="book-category">Wellness</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>Semen Retention Miracles</strong> explores the ancient yogic and spiritual practice of preserving sexual energy. The author links semen retention to heightened mental clarity, spiritual growth, improved self-control, and greater overall energy. The book compiles historical references, personal anecdotes, and practical tips for adopting the practice.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <ul>
                <li><strong>Energy Preservation:</strong> Semen is viewed as a vital force that, when retained, enhances vitality and creativity.</li>
                <li><strong>Mental Clarity:</strong> Practitioners often report sharper focus and reduced anxiety.</li>
                <li><strong>Discipline and Self-Control:</strong> Builds strong willpower through conscious lifestyle choices.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “Your seed is sacred—protect it and it will protect your destiny.”
              </div>
              <div className="book-review-quote">
                “Discipline in desire leads to miracles in life.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                The book offers a perspective not commonly found in mainstream wellness literature. While some ideas may seem extreme or unconventional, it provokes thought about the value of restraint, mindfulness, and the role of energy in personal growth. It can serve as a starting point for readers exploring self-mastery through Eastern spiritual principles.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Readers exploring yogic or spiritual approaches to wellness</li>
                <li>Men seeking self-mastery through discipline</li>
                <li>Those curious about ancient practices for modern living</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/moneyworks" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Money Works
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
