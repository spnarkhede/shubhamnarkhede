import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function BossBasicsOfSanatanSanskritiReview() {
  return (
    <Layout
      title="B.O.S.S. Basics of Sanatan Sanskriti - Book Review"
      description="My review of B.O.S.S. Basics of Sanatan Sanskriti by Prateeik Prajapati - An insightful introduction to the foundations of Sanatan Dharma and Indian culture."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/bossBasicsOfSanatanSanskriti.jpg"
                alt="B.O.S.S. Basics of Sanatan Sanskriti by Prateeik Prajapati"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/bossBasicsOfSanatanSanskriti.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">B.O.S.S. Basics of Sanatan Sanskriti</h1>
                <div className="book-review-author">by Prateeik Prajapati</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: March 2024</span>
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
                  <span className="book-category">Culture</span>
                  <span className="book-category">Sanatan Dharma</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                "B.O.S.S. Basics of Sanatan Sanskriti" demystifies the core principles and timeless traditions of Sanatan Dharma. Prateeik Prajapati offers an engaging overview of philosophy, rituals, festivals, and the cultural heritage that underpin Indian spiritual life.
              </p>
              <p>
                Through concise explanations and illustrative stories, the book traces how ancient wisdom remains relevant in modern times, fostering a deeper appreciation for India's spiritual roots.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Eternal Dharma</strong><br />
                Sanatan Dharma’s core values—truth, non-violence, and duty—are universal and enduring.
              </p>
              <p>
                <strong>2. Role of Rituals</strong><br />
                Rituals and festivals reinforce communal bonds and spiritual mindfulness.
              </p>
              <p>
                <strong>3. Philosophical Foundations</strong><br />
                Concepts like karma, dharma, and moksha guide ethical living and personal growth.
              </p>
              <p>
                <strong>4. Integration with Daily Life</strong><br />
                Ancient practices can be adapted to modern routines for holistic well-being.
              </p>
              <p>
                <strong>5. Cultural Continuity</strong><br />
                Understanding cultural heritage strengthens identity and cross-generational connection.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Sanatan Dharma is not just a religion; it is a way of life that honors the eternal."
              </div>
              <div className="book-review-quote">
                "Our rituals are the threads that weave individual actions into a collective tapestry."
              </div>
              <div className="book-review-quote">
                "Karma teaches us that every action resonates beyond the present moment."
              </div>
              <div className="book-review-quote">
                "True knowledge comes from experiencing the sacred in the everyday."
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Reading this book deepened my respect for the depth and nuance of Sanatan Sanskriti. The author’s clear writing made complex philosophies accessible and inspiring.
              </p>
              <p>
                I found the sections on integrating ancient practices into daily life particularly helpful for maintaining mindfulness and cultural connection.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <ul>
                <li>Anyone curious about Indian spiritual and cultural traditions</li>
                <li>Readers seeking to apply ancient wisdom in modern life</li>
                <li>Students of religion, philosophy, and culture</li>
                <li>Practitioners of yoga, meditation, and other wellness arts</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/bharat-ek-nayi-soch" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Bharat Ek Nayi Soch
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
