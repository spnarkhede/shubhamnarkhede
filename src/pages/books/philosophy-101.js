import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function Philosophy101Review() {
  return (
    <Layout
      title="Philosophy 101 - Book Review"
      description="Review of 'Philosophy 101' by Paul Kleinman."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/philosophy101.jpg"
                alt="Philosophy 101 by Paul Kleinman"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/philosophy101.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Philosophy 101</h1>
                <div className="book-review-author">by Paul Kleinman</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: April 2019</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~5 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★½</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Philosophy</span>
                  <span className="book-category">Education</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>Philosophy 101</strong> by Paul Kleinman is a well-structured and engaging primer on the fundamentals of philosophical thought. It covers major thinkers like Plato, Aristotle, Descartes, and Nietzsche, while also introducing essential concepts such as ethics, logic, metaphysics, epistemology, and existentialism in a clear and accessible manner.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <ul>
                <li><strong>Philosophy is about questioning:</strong> It begins by asking why things are the way they are and challenges conventional wisdom.</li>
                <li><strong>Major schools of thought:</strong> From rationalism to empiricism, from utilitarianism to deontology, this book simplifies complex schools of philosophy.</li>
                <li><strong>Ethics and morality:</strong> Understanding different ethical frameworks helps evaluate real-world dilemmas more critically.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “The unexamined life is not worth living.” — Socrates
              </div>
              <div className="book-review-quote">
                “We are what we repeatedly do. Excellence, then, is not an act, but a habit.” — Aristotle
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book rekindled my interest in deep thinking and abstract reasoning. It’s an ideal starting point for those new to philosophy or for anyone who wants to revisit foundational concepts in a digestible way. I found myself reflecting on how philosophical principles apply to everyday life, decisions, and values.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Students or beginners exploring philosophy for the first time</li>
                <li>Readers interested in understanding human thought and ethics</li>
                <li>Anyone who enjoys thinking deeply about life, purpose, and society</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/negotiating-101" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Negotiating 101
              </Link>
              <Link to="/books/moneyworks" className="book-review-nav-button">
                Next Review: Money Works
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
