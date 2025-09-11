import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function PsychologyOfMoneyReview() {
  return (
    <Layout
      title="The Psychology of Money - Book Review"
      description="My review of The Psychology of Money by Morgan Housel – Timeless insights into how people think about money, behavior, and decision-making."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/psychologyOfMoney.jpg"
                alt="The Psychology of Money by Morgan Housel"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/psychologyOfMoney.jpg";
                }}
              />

              <div className="book-review-info">
                <h1 className="book-review-title">The Psychology of Money</h1>
                <div className="book-review-author">by Morgan Housel</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">March 2022</div>
                  </div>

                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">4.5 hours</div>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★½</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Finance</span>
                  <span className="book-category">Psychology</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                "The Psychology of Money" is a profound yet accessible book that explores how people behave with money. Unlike traditional finance books, it doesn’t focus on numbers or investment strategies but on how psychology, ego, biases, and emotions influence financial decisions.
              </p>
              <p>
                Housel draws from real-life stories and research to explain why financial success is more about behavior than intelligence—and why mastering your mindset is key to building lasting wealth.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Compounding is Magic</strong><br />
                Wealth builds through patience and time, not by chasing big wins.
              </p>
              <p>
                <strong>2. Wealth ≠ Income</strong><br />
                True wealth is what you don't see—savings, not spending, is the foundation of freedom.
              </p>
              <p>
                <strong>3. Everyone's Financial World is Different</strong><br />
                People make money decisions based on personal experiences and beliefs, not logic alone.
              </p>
              <p>
                <strong>4. “Enough” is Powerful</strong><br />
                Chasing more without a clear purpose can lead to ruin—know what “enough” means for you.
              </p>
              <p>
                <strong>5. Save > Invest</strong><br />
                Good saving habits matter more than picking the perfect investment.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Doing well with money has little to do with how smart you are and a lot to do with how you behave."
              </div>
              <div className="book-review-quote">
                "Spending money to show people how much money you have is the fastest way to have less money."
              </div>
              <div className="book-review-quote">
                "The ability to do what you want, when you want, with who you want, for as long as you want, is priceless."
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book completely shifted the way I view money and wealth. It made me question the purpose of financial goals and understand that security, flexibility, and peace of mind matter far more than flashy assets or status.
              </p>
              <p>
                I now prioritize simplicity in finances and think more about the long term. Morgan Housel’s writing style is crisp, relatable, and deeply impactful. A book I’ll surely revisit.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Highly recommended for:
              </p>
              <ul>
                <li>Anyone starting their financial journey</li>
                <li>Young professionals learning to save or invest</li>
                <li>People interested in behavioral finance</li>
                <li>Investors wanting a mindset reset</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/u.s.history-101" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: U.S. History 101
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
