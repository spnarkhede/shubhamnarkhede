import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function BharatEkNayiSochReview() {
  return (
    <Layout
      title="Bharat Ek Nayi Soch - Book Review"
      description="My review of Bharat Ek Nayi Soch by Harsh Madhusudan & Rajiv Mantri - A forward-looking economic and political vision for India’s future."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/bharatEkNayiSoch.jpg"
                alt="Bharat Ek Nayi Soch by Harsh Madhusudan & Rajiv Mantri"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/bharatEkNayiSoch.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Bharat Ek Nayi Soch</h1>
                <div className="book-review-author">by Harsh Madhusudan & Rajiv Mantri</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: May 2024</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: 7 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Economics</span>
                  <span className="book-category">Policy</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                "Bharat Ek Nayi Soch" offers a compelling and ambitious vision for India’s future, blending economic reforms with political strategies to drive sustainable growth and social progress.
              </p>
              <p>
                The authors discuss innovative policies aimed at boosting development while addressing contemporary challenges in governance, technology, and global integration.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p><strong>1. Visionary Economic Policies</strong><br />Focus on innovation, entrepreneurship, and inclusive growth.</p>
              <p><strong>2. Political Reforms</strong><br />Advocates transparency, decentralization, and accountable governance.</p>
              <p><strong>3. Technological Advancement</strong><br />Leveraging digital infrastructure to accelerate development.</p>
              <p><strong>4. Social Equity</strong><br />Addressing disparities through targeted welfare and education initiatives.</p>
              <p><strong>5. Global Positioning</strong><br />India’s role in the international arena and strategic partnerships.</p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">"India’s future lies in embracing both tradition and innovation."</div>
              <div className="book-review-quote">"True development is inclusive and leaves no one behind."</div>
              <div className="book-review-quote">"Transparent governance builds trust and accelerates progress."</div>
              <div className="book-review-quote">"Digital India is not just a program, it’s a mindset."</div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Reading this book gave me a renewed sense of optimism about India’s potential. The blend of economic insight and policy suggestions is well-grounded and practical.
              </p>
              <p>
                It’s a must-read for anyone interested in understanding the emerging vision for India's growth and governance.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <ul>
                <li>Policy makers and economists</li>
                <li>Students of Indian politics and economics</li>
                <li>Entrepreneurs and business leaders</li>
                <li>Anyone interested in India’s development trajectory</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/the-concise-art-of-seduction" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: The Concise Art of Seduction
              </Link>
              <Link to="/books/next-book-slug" className="book-review-nav-button">
                Next Review: Coming Soon
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
