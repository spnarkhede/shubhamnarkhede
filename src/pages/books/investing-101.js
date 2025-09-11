import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default function Investing101Review() {
  return (
    <Layout
      title="Investing 101 - Book Review"
      description="Review of Investing 101 by Michele Cagan, CPA — A beginner-friendly guide to understanding investing and building wealth."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/investing101.jpg"
                alt="Investing 101 by Michele Cagan"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/investing101.jpg";
                }}
              />

              <div className="book-review-info">
                <h1 className="book-review-title">Investing 101</h1>
                <div className="book-review-author">by Michele Cagan, CPA</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">January 2018</div>
                  </div>

                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">4–5 hours</div>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Finance</span>
                  <span className="book-category">Investing</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                "Investing 101" offers a clear and approachable introduction to the world of investing. Written by a certified public accountant, the book breaks down complex financial topics into digestible chapters that explain everything from stocks, bonds, and mutual funds to retirement accounts and risk tolerance.
              </p>
              <p>
                It’s designed specifically for beginners who want to start building wealth through long-term financial planning and strategic investment decisions.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Start with a Plan</strong><br />
                Successful investing begins with clear financial goals and an understanding of your risk tolerance.
              </p>
              <p>
                <strong>2. Diversification is Critical</strong><br />
                Spreading your money across different investment types helps reduce risk.
              </p>
              <p>
                <strong>3. Understand What You Invest In</strong><br />
                Don’t blindly follow trends. Always research the assets you’re putting your money into.
              </p>
              <p>
                <strong>4. Time is Your Best Friend</strong><br />
                Compound interest and long-term growth reward those who invest early and consistently.
              </p>
              <p>
                <strong>5. Retirement Planning is a Priority</strong><br />
                Take advantage of tax-advantaged retirement accounts like IRAs and 401(k)s to prepare for the future.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "The earlier you begin investing, the more time your money has to grow."
              </div>
              <div className="book-review-quote">
                "The biggest mistake new investors make is trying to time the market."
              </div>
              <div className="book-review-quote">
                "Investing isn't about getting rich quickly—it's about building wealth steadily over time."
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                As someone new to personal finance at the time, this book gave me the confidence to take control of my financial future. It demystified the language of investing and helped me understand how to start building a simple, solid portfolio. I still recommend it to anyone who says, “I want to start investing, but I don’t know how.”
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>This book is ideal for:</p>
              <ul>
                <li>Young adults beginning their financial journey</li>
                <li>Professionals with zero investing background</li>
                <li>Anyone who feels overwhelmed by financial jargon</li>
                <li>Readers seeking a no-nonsense, practical investing primer</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/101-essays-that-will-change-the-way-you-think" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: 101 Essays That Will Change The Way You Think
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
