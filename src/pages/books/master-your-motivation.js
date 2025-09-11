import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function MasterYourMotivationReview() {
  return (
    <Layout
      title="Master Your Motivation - Book Review"
      description="Review of 'Master Your Motivation' by Thibaut Meurisse."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/masterYourMotivation.jpg"
                alt="Master Your Motivation by Thibaut Meurisse"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/masterYourMotivation.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Master Your Motivation</h1>
                <div className="book-review-author">by Thibaut Meurisse</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: February 2019</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~3–4 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Psychology</span>
                  <span className="book-category">Self-Improvement</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>Master Your Motivation</strong> provides readers with insights into the internal mechanisms of motivation and how to maintain it consistently. Thibaut Meurisse offers a structured, mindset-oriented approach to identify and remove mental blocks, clarify goals, and harness lasting drive.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <ul>
                <li><strong>Motivation Is Created, Not Found:</strong> You don’t wait for motivation—you generate it through action.</li>
                <li><strong>Clarity Fuels Motivation:</strong> The more precise your goal, the easier it is to stay motivated.</li>
                <li><strong>Remove Internal Resistance:</strong> Address limiting beliefs and negative self-talk to boost inner drive.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “Motivation isn’t something you either have or don’t have—it’s something you cultivate intentionally.”
              </div>
              <div className="book-review-quote">
                “The gap between where you are and where you want to be is bridged by action, not inspiration.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book came at a crucial time when I needed a mental push. It helped me understand that motivation isn’t a mysterious force—it’s a mindset and a skill. The focus on small wins and mental clarity gave me a more grounded and sustainable way to stay energized in my work and goals.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Those struggling to maintain consistency in their goals</li>
                <li>People battling procrastination and burnout</li>
                <li>Anyone wanting to build discipline through inner alignment</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/master-your-focus" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Master Your Focus
              </Link>
              <Link to="/books/master-your-emotions" className="book-review-nav-button">
                Next Review: Master Your Emotions
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
