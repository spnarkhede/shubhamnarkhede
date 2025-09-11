import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function ConciseArtOfSeductionReview() {
  return (
    <Layout
      title="The Concise Art of Seduction - Book Review"
      description="My review of The Concise Art of Seduction by Robert Greene - Understanding the psychology of attraction and influence."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/conciseArtOfSeduction.jpg"
                alt="The Concise Art of Seduction by Robert Greene"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/conciseArtOfSeduction.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">The Concise Art of Seduction</h1>
                <div className="book-review-author">by Robert Greene</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: July 2018</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: 6 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Psychology</span>
                  <span className="book-category">Relationships</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                "The Concise Art of Seduction" explores the subtle psychological dynamics of attraction and influence. Robert Greene breaks down the tactics and strategies used throughout history to captivate and seduce others in both personal and social contexts.
              </p>
              <p>
                The book provides insights into understanding desires, creating emotional connections, and mastering the art of persuasion.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p><strong>1. Seduction is Psychological</strong><br />It involves understanding deep emotional needs and desires.</p>
              <p><strong>2. Emotional Connection Matters</strong><br />Building genuine rapport is key to lasting influence.</p>
              <p><strong>3. Mystery and Intrigue</strong><br />Creating an aura of mystery increases attraction.</p>
              <p><strong>4. Confidence and Presence</strong><br />A strong, confident presence is magnetic.</p>
              <p><strong>5. Ethical Influence</strong><br />The best seduction respects boundaries and consent.</p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">"The essence of seduction is the art of emotional manipulation — when done ethically, it builds connections."</div>
              <div className="book-review-quote">"Mystery invites curiosity, and curiosity fuels desire."</div>
              <div className="book-review-quote">"True confidence is quiet and steady, never boastful."</div>
              <div className="book-review-quote">"Influence begins with listening and understanding."</div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book offers a fascinating glimpse into the timeless strategies of attraction and influence. It encouraged me to reflect on how subtle psychological factors shape interactions and relationships.
              </p>
              <p>
                While some tactics require careful ethical consideration, understanding these dynamics can improve communication and connection in various social situations.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <ul>
                <li>Readers interested in psychology and human attraction</li>
                <li>People seeking to improve personal relationships and influence</li>
                <li>Those curious about historical and social aspects of seduction</li>
                <li>Anyone wanting to develop stronger emotional intelligence</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/the-concise-laws-of-human-nature" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: The Concise Laws of Human Nature
              </Link>
              <Link to="/books/next-book-slug" className="book-review-nav-button">
                Next Review: [Next Book Title]
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
