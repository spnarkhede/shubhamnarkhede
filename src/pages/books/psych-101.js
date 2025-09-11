import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function Psych101Review() {
  return (
    <Layout
      title="PSYCH 101 - Book Review"
      description="Review of 'PSYCH 101' by Paul Kleinman."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/psych101.jpg"
                alt="PSYCH 101 by Paul Kleinman"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/psych101.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">PSYCH 101</h1>
                <div className="book-review-author">by Paul Kleinman</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: August 2019</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~6 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★½</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Psychology</span>
                  <span className="book-category">Education</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>PSYCH 101</strong> by Paul Kleinman offers a concise and approachable overview of key concepts in psychology. It covers a wide range of topics including cognitive development, learning theories, behaviorism, mental health disorders, and famous psychological experiments. Ideal for beginners, the book breaks down complex ideas into simple, digestible insights.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <ul>
                <li><strong>Foundations of psychology:</strong> Understand core areas like cognitive, developmental, and abnormal psychology.</li>
                <li><strong>Behavioral science basics:</strong> Learn how behavior is shaped by both biology and environment.</li>
                <li><strong>Notable experiments:</strong> Covers classics like Pavlov’s dogs, Milgram’s obedience study, and the Stanford prison experiment.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “The mind is not a vessel to be filled but a fire to be kindled.”
              </div>
              <div className="book-review-quote">
                “Psychology helps us understand not only how others think—but how we ourselves operate.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book sparked a deep curiosity in how the human brain functions and how our behaviors are formed. It gave me a structured introduction to psychological theories that I now notice in daily life—from how habits form to how we perceive others. A must-read for anyone wanting to better understand themselves and those around them.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Beginners exploring the field of psychology</li>
                <li>Students looking for a foundational psychology refresher</li>
                <li>Anyone curious about why we think, feel, and behave the way we do</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/philosophy-101" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Philosophy 101
              </Link>
              <Link to="/books/negotiating-101" className="book-review-nav-button">
                Next Review: Negotiating 101
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
