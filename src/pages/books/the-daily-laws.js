import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function TheDailyLawsReview() {
  return (
    <Layout
      title="The Daily Laws - Book Review"
      description="A review of The Daily Laws by Robert Greene — a guide of daily meditations on mastery, power, seduction, and human nature."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/dailyLaws.jpg"
                alt="The Daily Laws by Robert Greene"
                className="book-review-cover"
              />

              <div className="book-review-info">
                <h1 className="book-review-title">The Daily Laws</h1>
                <div className="book-review-author">by Robert Greene</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">May 2018</div>
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
                  <span className="book-category">Self-Improvement</span>
                  <span className="book-category">Strategy</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                "The Daily Laws" is a year-long journey of transformation. Greene distills key principles from his earlier works (like "The 48 Laws of Power", "Mastery", "The Art of Seduction") into 366 concise daily entries. Each day offers strategic insights into human behavior, self-awareness, and long-term mastery.
              </p>
              <p>
                These daily meditations act as mental calibrations—guiding readers to think clearly, act decisively, and grow continuously.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Awareness Before Action</strong><br />
                Understand yourself and others deeply before trying to influence outcomes.
              </p>
              <p>
                <strong>2. Embrace Daily Discipline</strong><br />
                Small, consistent mental shifts each day compound into lasting transformation.
              </p>
              <p>
                <strong>3. Strategy is Power</strong><br />
                Whether in relationships, work, or personal development, strategic thinking enhances influence.
              </p>
              <p>
                <strong>4. Seduction is a Skill</strong><br />
                Not just romantic, but in ideas and persuasion—mastering this art is crucial.
              </p>
              <p>
                <strong>5. Accept Human Nature</strong><br />
                Stop resisting reality. Power comes from working with, not against, human tendencies.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Become who you are by learning who you are."
              </div>
              <div className="book-review-quote">
                "The future belongs to those who learn more skills and combine them in creative ways."
              </div>
              <div className="book-review-quote">
                "Your mind is the greatest tool you have. Sharpen it daily."
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Reading one principle a day created a rhythm of reflection and recalibration in my routine. I often found that the insight of the day aligned perfectly with real-life challenges I was facing. Greene’s work consistently challenges me to act with more intention and clarity.
              </p>
              <p>
                This is a book I’ll keep on my desk and return to year after year.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <ul>
                <li>Fans of Robert Greene's other books</li>
                <li>Anyone seeking a structured path to personal mastery</li>
                <li>Leaders, entrepreneurs, strategists</li>
                <li>Those interested in power dynamics and human behavior</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/psychology-of-money" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: The Psychology of Money
              </Link>
              <Link to="/books" className="book-review-nav-button">
                Back to All Books
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
