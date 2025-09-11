import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function Chanakyas100BestSutrasReview() {
  return (
    <Layout
      title="Chanakya's 100 Best Sutras - Book Review"
      description="My review of Chanakya's 100 Best Sutras by Radhakrishnan Pillai - Timeless principles for personal growth and success."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/chanakyas100BestSutras.jpg"
                alt="Chanakya's 100 Best Sutras by Radhakrishnan Pillai"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/chanakyas100BestSutras.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Chanakya's 100 Best Sutras: Ageless Wisdom for Unlocking Your Potential and Achieving Your Goals</h1>
                <div className="book-review-author">by Radhakrishnan Pillai</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: April 2024</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: 7 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Motivation</span>
                  <span className="book-category">Wisdom</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                This book distills the wisdom of Chanakya, an ancient Indian philosopher and strategist, into 100 succinct sutras that offer guidance on personal development, leadership, and achieving success.
              </p>
              <p>
                Each sutra is explained with practical examples and applications, making timeless principles accessible for modern readers aiming to unlock their full potential.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Discipline and Self-Control</strong><br />
                Chanakya emphasizes mastering the mind and maintaining discipline as foundations of success.
              </p>
              <p>
                <strong>2. Strategic Thinking</strong><br />
                Planning ahead and understanding one’s environment are critical to achieving goals.
              </p>
              <p>
                <strong>3. Importance of Education</strong><br />
                Lifelong learning and knowledge acquisition fuel growth and adaptability.
              </p>
              <p>
                <strong>4. Leadership and Influence</strong><br />
                Effective leadership is rooted in integrity, empathy, and clear communication.
              </p>
              <p>
                <strong>5. Resilience and Adaptability</strong><br />
                Success requires bouncing back from failures and adjusting strategies as needed.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "A person should not be too honest. Straight trees are cut first and honest people are victimized first."
              </div>
              <div className="book-review-quote">
                "Education is the best friend. An educated person is respected everywhere."
              </div>
              <div className="book-review-quote">
                "Test a servant while in the discharge of his duty, a relative in difficulty, a friend in adversity, and a wife in misfortune."
              </div>
              <div className="book-review-quote">
                "There is some self-interest behind every friendship. There is no friendship without self-interests. This is a bitter truth."
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                The book provides powerful insights that blend philosophy with practical advice. It challenged me to reflect on my own habits and leadership style, encouraging a more disciplined and strategic approach.
              </p>
              <p>
                While some sutras may seem harsh or pragmatic, their context and relevance in real life are undeniable.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <ul>
                <li>Anyone interested in personal growth and self-discipline</li>
                <li>Students of leadership, strategy, and Indian philosophy</li>
                <li>Professionals seeking timeless wisdom to enhance their decision-making</li>
                <li>Readers fascinated by ancient practical wisdom</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/boss-basics-of-sanatan-sanskriti" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: B.O.S.S. Basics of Sanatan Sanskriti
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
