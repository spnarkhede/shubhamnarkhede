import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default function Accounting101Review() {
  return (
    <Layout
      title="Accounting 101 - Book Review"
      description="Review of Accounting 101 by Michele Cagan — Essential accounting principles and practices explained simply."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/accounting101.jpg"
                alt="Accounting 101 by Michele Cagan"
                className="book-review-cover"
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Accounting 101</h1>
                <div className="book-review-author">by Michele Cagan</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} />
                    December 2019
                  </div>
                  <div className="book-review-metadata-item" style={{ marginLeft: 20 }}>
                    <Clock size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} />
                    4 hours read
                  </div>
                </div>

                <div className="book-review-rating" style={{ marginTop: 8 }}>
                  <span style={{ fontSize: 18 }}>★★★★☆</span> <span style={{ marginLeft: 8 }}>4/5</span>
                </div>

                <div className="book-review-categories" style={{ marginTop: 8 }}>
                  <span className="book-category">Finance</span>{' '}
                  <span className="book-category">Business</span>
                </div>
              </div>
            </div>

            <section className="book-review-section">
              <h2>Summary</h2>
              <p>
                <em>Accounting 101</em> breaks down essential accounting principles and practices into clear, understandable concepts.
                It’s a perfect primer for anyone new to finance or business who wants to grasp how accounting works in the real world.
              </p>
            </section>

            <section className="book-review-section">
              <h2>Key Takeaways</h2>
              <ul>
                <li>Understanding the accounting equation: Assets = Liabilities + Equity.</li>
                <li>The importance of accurate bookkeeping and financial statements.</li>
                <li>How transactions are recorded via debits and credits.</li>
                <li>Basics of balance sheets, income statements, and cash flow statements.</li>
                <li>The role of accounting in business decision making.</li>
              </ul>
            </section>

            <section className="book-review-section">
              <h2>Favorite Quotes</h2>
              <blockquote>
                "Accounting is the language of business."
              </blockquote>
              <blockquote>
                "Without clear records, businesses operate blindly."
              </blockquote>
              <blockquote>
                "Mastering accounting fundamentals empowers smarter financial decisions."
              </blockquote>
            </section>

            <section className="book-review-section">
              <h2>Personal Reflection</h2>
              <p>
                This book made accounting accessible and less intimidating. It gave me a solid foundation to understand business finances better,
                which is invaluable whether you're an entrepreneur, employee, or investor.
              </p>
            </section>

            <section className="book-review-section">
              <h2>Who Should Read This</h2>
              <ul>
                <li>Students starting out in finance or business studies.</li>
                <li>Entrepreneurs wanting to manage their business finances effectively.</li>
                <li>Anyone interested in understanding how accounting supports business operations.</li>
              </ul>
            </section>

            <div className="book-review-navigation" style={{ marginTop: 30 }}>
              <Link to="/books/investing-101" className="book-review-nav-button" style={{ marginRight: 20 }}>
                <ArrowLeft size={16} style={{ marginRight: 4 }} />
                Previous Review: Investing 101
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
