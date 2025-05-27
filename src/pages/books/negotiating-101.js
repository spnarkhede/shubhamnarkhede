import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function Negotiating101Review() {
  return (
    <Layout
      title="Negotiating 101 - Book Review"
      description="Review of 'Negotiating 101' by Peter Sander."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/negotiating101.jpg"
                alt="Negotiating 101 by Peter Sander"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/negotiating101.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Negotiating 101</h1>
                <div className="book-review-author">by Peter Sander</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: July 2019</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~3 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Business</span>
                  <span className="book-category">Negotiation</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>Negotiating 101</strong> by Peter Sander provides a straightforward introduction to the principles of negotiation, offering key strategies and psychological insights to help readers confidently and effectively reach win-win outcomes in both personal and professional settings.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <ul>
                <li><strong>Preparation is power:</strong> Know your objectives, alternatives, and limits before entering a negotiation.</li>
                <li><strong>Listen actively:</strong> Understand the other party’s needs to craft mutually beneficial solutions.</li>
                <li><strong>Use silence strategically:</strong> Silence can be a powerful tool in gaining leverage.</li>
                <li><strong>Win-win approach:</strong> Aim for outcomes that satisfy both parties rather than trying to "win" the negotiation.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “The most successful negotiators don’t argue—they listen.”
              </div>
              <div className="book-review-quote">
                “In every negotiation, the power lies with the one who is willing to walk away.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book was a concise and insightful read. I found its practical tips applicable in daily conversations, team discussions, and even salary negotiations. It made me more aware of the psychological side of negotiation and helped improve my confidence in high-stakes discussions.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Professionals involved in sales, management, or hiring</li>
                <li>Entrepreneurs and freelancers negotiating contracts</li>
                <li>Anyone who wants to enhance their communication and persuasion skills</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/management-101" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Management 101
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
