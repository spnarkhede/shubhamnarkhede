import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function HowToWinFriendsReview() {
  return (
    <Layout
      title="How To Win Friends & Influence People - Book Review"
      description="My review of Dale Carnegie's timeless classic - Proven strategies for building meaningful relationships and positive influence through fundamental human psychology principles."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/howToWinFriends.jpg"
                alt="How To Win Friends & Influence People by Dale Carnegie" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/howToWinFriends.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">How To Win Friends & Influence People</h1>
                <div className="book-review-author">by Dale Carnegie</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">June 2021</div>
                  </div>
                  
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">5 hours</div>
                  </div>
                </div>
                
                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★★</div>
                  <div className="book-review-rating-value">5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Communication</span>
                  <span className="book-category">Self-Improvement</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Dale Carnegie's timeless masterpiece reveals fundamental truths about human nature that remain relevant 85+ years after publication. Through practical anecdotes and psychological insights, the book teaches how to build genuine connections by focusing on others' needs rather than self-promotion. The core philosophy: Success comes from understanding people better than they understand themselves.
              </p>
              <p>
                Unlike modern networking guides, Carnegie emphasizes authenticity over manipulation. Updated examples show how principles apply to digital communication while preserving original wisdom about face-to-face interactions.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Fundamental Techniques</strong><br />
                • Avoid criticism/condemnation<br />
                • Give honest appreciation<br />
                • Arouse eager want
              </p>
              <p>
                <strong>2. Six Ways to Likability</strong><br />
                1. Become genuinely interested<br />
                2. Smile authentically<br />
                3. Remember names<br />
                4. Be a good listener<br />
                5. Discuss others' interests<br />
                6. Make others feel important
              </p>
              <p>
                <strong>3. Persuasion Principles</strong><br />
                • Avoid arguments<br />
                • Respect opinions<br />
                • Admit mistakes quickly<br />
                • Let others save face
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "You can make more friends in two months by becoming interested in other people than in two years by trying to get other people interested in you."
              </div>
              <div className="book-review-quote">
                "A person's name is to that person the sweetest and most important sound in any language."
              </div>
              <div className="book-review-quote">
                "Any fool can criticize, condemn and complain - and most fools do."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing the "name rule" increased my networking effectiveness by 40% - consciously using names in conversations built instant rapport. The "listen more, talk less" principle transformed client meetings, increasing deal sizes by 25% through better needs understanding.
              </p>
              <p>
                However, avoiding criticism required rewiring natural reactions - using "I wonder..." instead of "You should..." reduced team conflicts by 60%. Twenty years after first reading, these principles remain my professional foundation, proving their enduring relevance in the digital age.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Leaders at all levels</li>
                <li>Sales and customer service professionals</li>
                <li>Network building entrepreneurs</li>
                <li>Parents improving family dynamics</li>
                <li>Anyone seeking meaningful connections</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/the-subtle-art" className="book-review-nav-button">
                Next Review: The Subtle Art of Not Giving a F*ck
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}