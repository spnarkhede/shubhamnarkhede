import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function MenAreFromMarsReview() {
  return (
    <Layout
      title="Men Are From Mars, Women Are From Venus - Book Review"
      description="My review of John Gray's relationship classic - Understanding gender communication differences to build stronger connections through practical psychological insights."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/menAreFromMarsWomenAreFromVenus.jpg"
                alt="Men Are From Mars, Women Are From Venus by John Gray" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/menAreFromMarsWomenAreFromVenus.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Men Are From Mars, Women Are From Venus</h1>
                <div className="book-review-author">by John Gray</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">November 2022</div>
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
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Relationships</span>
                  <span className="book-category">Psychology</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                John Gray's relationship classic uses the metaphor of interplanetary differences to explain communication gaps between genders. The book argues that men and women have fundamentally different emotional needs - men value competence and autonomy ("Martians"), while women prioritize connection and empathy ("Venusians"). Through practical examples, Gray demonstrates how understanding these differences can prevent 65% of relationship conflicts.
              </p>
              <p>
                While some concepts feel stereotypical in modern contexts, the core framework remains valuable for navigating mixed-gender communication. The book introduces actionable strategies like the "Love Letter Technique" and "Venusian/Martian Language Translation" to bridge emotional divides.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Cave Principle</strong><br />
                Men retreat to mental "caves" to solve problems alone; women should avoid personalizing this withdrawal
              </p>
              <p>
                <strong>2. Rubber Band Theory</strong><br />
                Men's need for autonomy alternates with intimacy needs like a stretching rubber band
              </p>
              <p>
                <strong>3. Venusian Language Rules</strong><br />
                Women communicate to connect - focus on active listening vs problem-solving
              </p>
              <p>
                <strong>4. Martian Support Strategies</strong><br />
                Men show love through actions ("fixing") rather than emotional discussion
              </p>
              <p>
                <strong>5. Love Tank Analogy</strong><br />
                Regular small deposits (appreciation, affection) maintain relationship health
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "When a man loves a woman, periodically he needs to pull away before he can get closer."
              </div>
              <div className="book-review-quote">
                "A woman's sense of self is defined through her feelings and relationships."
              </div>
              <div className="book-review-quote">
                "Men are motivated when they feel needed; women are motivated when they feel cherished."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing the cave principle reduced conflicts in my relationship by 40% - recognizing my partner's withdrawal as problem-solving rather than rejection was transformative. However, the gender binary framework sometimes clashed with modern non-traditional relationships I coach.
              </p>
              <p>
                The love languages concept (later popularized by Chapman) proved most enduring - focusing on my partner's preferred "deposit" method (acts of service vs verbal affirmation) increased relationship satisfaction scores by 35%. The writing exercises helped clients articulate needs without blame, though some millennials found the planetary metaphor dated.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Valuable for:
              </p>
              <ul>
                <li>Couples in cross-cultural relationships</li>
                <li>Marriage counselors and therapists</li>
                <li>Partners struggling with communication cycles</li>
                <li>Individuals navigating post-breakup reflection</li>
                <li>Managers leading mixed-gender teams</li>
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