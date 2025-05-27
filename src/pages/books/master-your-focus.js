import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function MasterYourFocusReview() {
  return (
    <Layout
      title="Master Your Focus - Book Review"
      description="Review of 'Master Your Focus' by Thibaut Meurisse."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/masterYourFocus.jpg"
                alt="Master Your Focus by Thibaut Meurisse"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/masterYourFocus.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Master Your Focus</h1>
                <div className="book-review-author">by Thibaut Meurisse</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: March 2019</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~3–5 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Productivity</span>
                  <span className="book-category">Self-Improvement</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>Master Your Focus</strong> by Thibaut Meurisse is a compact guide that delivers actionable strategies for improving focus, eliminating distractions, and aligning daily actions with long-term goals. It emphasizes clarity, prioritization, and sustained attention to help readers reach peak productivity.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <ul>
                <li><strong>Clarity First:</strong> Know exactly what you want and why it matters.</li>
                <li><strong>Guard Your Time:</strong> Reduce exposure to distractions like social media and multitasking.</li>
                <li><strong>Work Deeply:</strong> Allocate dedicated, uninterrupted time blocks to your most important work.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “Without clarity, you’ll find yourself reacting to life rather than proactively shaping it.”
              </div>
              <div className="book-review-quote">
                “Focus is the gateway to productivity, and clarity is the fuel that powers it.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Reading this book at a time when I was overwhelmed by tasks and distractions helped me reset my priorities. It’s a simple yet effective manual for anyone looking to strengthen their attention span and become more intentional with their time.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Professionals struggling with productivity or procrastination</li>
                <li>Students who want to develop better study habits</li>
                <li>Anyone seeking clarity and purpose in their daily routines</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/master-your-emotions" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Master Your Emotions
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
