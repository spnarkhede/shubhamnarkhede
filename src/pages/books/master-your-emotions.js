import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function MasterYourEmotionsReview() {
  return (
    <Layout
      title="Master Your Emotions - Book Review"
      description="Review of 'Master Your Emotions' by Thibaut Meurisse."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/masterYourEmotions.jpg"
                alt="Master Your Emotions by Thibaut Meurisse"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/masterYourEmotions.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Master Your Emotions</h1>
                <div className="book-review-author">by Thibaut Meurisse</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: January 2019</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~4–6 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★½</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Psychology</span>
                  <span className="book-category">Emotional Intelligence</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>Master Your Emotions</strong> provides a set of practical, actionable strategies for understanding and managing your emotions. Thibaut Meurisse explores the psychological triggers behind our emotional states and offers step-by-step techniques for gaining emotional clarity and resilience.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Themes</h2>
              <ul>
                <li><strong>Emotional Awareness:</strong> Understanding the root causes of emotional reactions.</li>
                <li><strong>Self-Regulation:</strong> Techniques to stay calm and composed in any situation.</li>
                <li><strong>Building Emotional Strength:</strong> Cultivating positivity, mindfulness, and resilience.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “You are not your emotions. You are the awareness behind them.”
              </div>
              <div className="book-review-quote">
                “What you focus on expands. Shift your attention and you shift your experience.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book served as a powerful reminder that emotions don’t have to control our actions. Meurisse’s approach helped me understand emotional triggers and made me more mindful of my daily reactions. It’s a go-to guide for building emotional clarity and internal strength.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Anyone struggling with mood swings or anxiety</li>
                <li>People interested in self-awareness and mental clarity</li>
                <li>Those looking to build emotional resilience</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/management-101" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Management 101
              </Link>
              <Link to="/books/economics-101" className="book-review-nav-button">
                Next Review: Economics 101
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
