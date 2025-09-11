import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default function OneHundredOneEssaysReview() {
  return (
    <Layout
      title="101 Essays That Will Change The Way You Think - Book Review"
      description="Review of 101 Essays That Will Change The Way You Think by Brianna Wiest — A collection of essays that challenge your perspective and inspire personal transformation."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/oneHundredOneEssays.jpg"
                alt="101 Essays That Will Change The Way You Think by Brianna Wiest"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/oneHundredOneEssays.jpg";
                }}
              />

              <div className="book-review-info">
                <h1 className="book-review-title">101 Essays That Will Change The Way You Think</h1>
                <div className="book-review-author">by Brianna Wiest</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">February 2018</div>
                  </div>

                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">6 hours</div>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★½</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Psychology</span>
                  <span className="book-category">Philosophy</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Brianna Wiest’s "101 Essays That Will Change The Way You Think" is a powerful collection that combines self-reflection, psychology, and modern philosophy. Each essay digs into the habits, beliefs, and emotions that shape how we perceive the world — and ourselves.
              </p>
              <p>
                From mental clarity to the importance of emotional intelligence, the book encourages the reader to pause, reassess, and grow. It's a book that doesn’t ask you to agree with everything, but it asks you to think deeper, challenge your biases, and become more conscious of your inner life.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. You Are What You Do Repeatedly</strong><br />
                Your habits shape your identity. Becoming who you want to be starts with acting like that person today.
              </p>
              <p>
                <strong>2. Emotional Intelligence is Freedom</strong><br />
                Understanding your emotions and those of others is a superpower for modern living.
              </p>
              <p>
                <strong>3. Growth is Often Quiet and Uncomfortable</strong><br />
                The most important progress doesn’t look glamorous. It’s often unseen and deeply personal.
              </p>
              <p>
                <strong>4. Self-Sabotage is Familiarity with Suffering</strong><br />
                Many people stay stuck not because they like it, but because it feels familiar.
              </p>
              <p>
                <strong>5. Presence is Power</strong><br />
                The moment is the only place where change and clarity exist. Everything else is a distraction.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "True self-care is not salt baths and chocolate cake, it is making the choice to build a life you don’t need to escape from."
              </div>
              <div className="book-review-quote">
                "You will keep repeating the same cycles until you learn the lesson you were meant to."
              </div>
              <div className="book-review-quote">
                "You change your life by changing the way you think about it."
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book felt like a deep conversation with a wise friend. Every essay made me pause and evaluate my thoughts, choices, and inner dialogue. I appreciated the honesty and simplicity with which Wiest explores complex emotions and behaviors.
              </p>
              <p>
                It’s the kind of book you return to during different life phases, and each time, something new will hit you harder. It genuinely influenced the way I approach mindfulness and decision-making.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>This book is ideal for:</p>
              <ul>
                <li>People seeking introspective growth</li>
                <li>Fans of psychology, self-help, or personal development</li>
                <li>Those recovering from burnout or emotional overwhelm</li>
                <li>Readers who enjoy reflective writing with clarity and depth</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/the-concise-strategies-of-war" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: The Concise Strategies of War
              </Link>
              <Link to="/books" className="book-review-nav-button">
                Back to All Books
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
