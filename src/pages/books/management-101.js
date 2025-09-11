import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function Management101Review() {
  return (
    <Layout
      title="Management 101 - Book Review"
      description="Review of 'Management 101' by Stephan Soundering."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/management101.jpg"
                alt="Management 101 by Stephan Soundering"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/management101.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Management 101</h1>
                <div className="book-review-author">by Stephan Soundering</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: May 2019</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~6–8 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Business</span>
                  <span className="book-category">Management</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>Management 101</strong> introduces readers to the essential concepts and skills required for effective leadership and managerial success. It blends theoretical frameworks with real-world examples, making it a great primer for beginners and a refresher for experienced professionals.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Themes</h2>
              <ul>
                <li><strong>Leadership Fundamentals:</strong> Understanding different leadership styles and when to apply them.</li>
                <li><strong>Time & Resource Management:</strong> Techniques for managing tasks, teams, and organizational goals.</li>
                <li><strong>Motivating Teams:</strong> Building trust and performance through effective communication and recognition.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “Good managers are made, not born. They are forged through learning, reflection, and experience.”
              </div>
              <div className="book-review-quote">
                “Management is the art of making people more effective than they would have been without you.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book helped crystallize many management concepts I'd encountered but never fully understood in structured form. I especially appreciated its clear writing and practical checklists. It was a solid foundation that helped me grow as a team leader.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>First-time managers or aspiring leaders</li>
                <li>Students of business or management</li>
                <li>Professionals seeking to refresh core concepts</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/economics-101" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Economics 101
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
