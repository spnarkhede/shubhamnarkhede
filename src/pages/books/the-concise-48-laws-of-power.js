import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function Concise48LawsOfPowerReview() {
  return (
    <Layout
      title="The Concise 48 Laws of Power - Book Review"
      description="Review of 'The Concise 48 Laws of Power' by Robert Greene."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/concise48LawsOfPower.jpg"
                alt="The Concise 48 Laws of Power by Robert Greene"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/concise48LawsOfPower.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">The Concise 48 Laws of Power</h1>
                <div className="book-review-author">by Robert Greene</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: June 2018</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~5 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Strategy</span>
                  <span className="book-category">Psychology</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>The Concise 48 Laws of Power</strong> distills Robert Greene’s iconic manual on influence, manipulation, and realpolitik into an accessible format. Each of the 48 laws comes with historical anecdotes and real-world examples, giving readers actionable insights into the dynamics of power in society, organizations, and relationships.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <ul>
                <li><strong>Law 1:</strong> Never outshine the master.</li>
                <li><strong>Law 3:</strong> Conceal your intentions.</li>
                <li><strong>Law 15:</strong> Crush your enemy totally.</li>
                <li><strong>Law 33:</strong> Discover each man’s thumbscrew.</li>
                <li><strong>Law 48:</strong> Assume formlessness.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “Power is a game, and in games you do not judge your opponents, you play to win.”
              </div>
              <div className="book-review-quote">
                “When you show yourself to the world and display your talents, you naturally stir all kinds of resentment.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book was an eye-opener into the less-discussed realities of influence and control. While some laws feel controversial or ruthless, the insights are undeniably valuable for navigating complex human interactions. It helped me become more aware of power structures and social dynamics in professional and personal settings.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Professionals navigating office politics or leadership roles</li>
                <li>Readers interested in historical strategy and social psychology</li>
                <li>Anyone seeking to better understand manipulation and influence</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/mindset" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Mindset
              </Link>
              <Link to="/books/think-again" className="book-review-nav-button">
                Next Review: Think Again
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
