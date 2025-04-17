import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function EightRulesOfLoveReview() {
  return (
    <Layout
      title="8 Rules of Love - Book Review"
      description="My review of 8 Rules of Love by Jay Shetty - A spiritual guide to nurturing relationships and finding love through wisdom and self-awareness."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/8RulesOfLove.jpg"
                alt="8 Rules of Love by Jay Shetty" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/8RulesOfLove.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">8 Rules of Love</h1>
                <div className="book-review-author">by Jay Shetty</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">February 2023</div>
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
                  <span className="book-category">Relationships</span>
                  <span className="book-category">Self-Help</span>
                  <span className="book-category">Spirituality</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                In "8 Rules of Love," Jay Shetty combines ancient Vedic wisdom with modern relationship advice to create a compassionate guide to love in all its forms. The book challenges conventional notions of romance, arguing that love is a skill developed through mindful practice rather than something we simply "fall into." Shetty structures his insights around four stages of love (solitude, connection, practice, and purpose) with two rules for each phase.
              </p>
              <p>
                Through personal anecdotes, philosophical teachings, and practical exercises, Shetty guides readers to cultivate self-love, navigate conflicts, and build relationships that foster mutual growth. The book emphasizes that healthy love requires intentionality, emotional awareness, and the courage to embrace vulnerability.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Master Solitude Before Partnership</strong><br />
                True love begins with self-awareness. Develop a strong relationship with yourself before seeking connection with others.
              </p>
              <p>
                <strong>2. Let Go of Perfect Fantasies</strong><br />
                Embrace imperfections in yourself and others. Real love grows through accepting flaws, not chasing idealized versions.
              </p>
              <p>
                <strong>3. Conflict as Growth Opportunity</strong><br />
                Healthy disagreements, approached with empathy and curiosity, can deepen understanding and intimacy.
              </p>
              <p>
                <strong>4. Timing is Essential</strong><br />
                Relationships thrive when both partners are emotionally ready and willing to grow together.
              </p>
              <p>
                <strong>5. Love as Service</strong><br />
                True love manifests through daily acts of kindness, support, and mutual empowerment.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "You don't find love by completing yourself in another person, but by discovering wholeness within."
              </div>
              <div className="book-review-quote">
                "A relationship isn't two people looking at each other, but two people looking in the same direction."
              </div>
              <div className="book-review-quote">
                "The depth of your love is measured by how you love when the initial spark fades."
              </div>
              <div className="book-review-quote">
                "Self-love isn't selfish—it's the foundation for all other loving relationships."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                "8 Rules of Love" fundamentally shifted my understanding of romantic relationships. Shetty's emphasis on self-love helped me recognize patterns of seeking validation through others. The "solitude before partnership" rule inspired me to spend more intentional alone time, leading to greater emotional clarity.
              </p>
              <p>
                I found the distinction between "situational love" (based on circumstances) and "intentional love" particularly powerful. Applying the conflict resolution strategies has improved both my romantic relationship and family dynamics. The book's spiritual perspective added depth to my concept of love as an ongoing practice rather than a static state.
              </p>
              <p>
                While some Vedic concepts felt initially unfamiliar, Shetty's relatable storytelling made the wisdom accessible. The practical exercises, like the "daily love audit," have become valuable tools for maintaining mindful relationships.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                This book is ideal for:
              </p>
              <ul>
                <li>Anyone seeking deeper, more meaningful relationships</li>
                <li>Individuals navigating dating or considering commitment</li>
                <li>Those recovering from heartbreak or divorce</li>
                <li>Readers interested in blending spiritual wisdom with modern psychology</li>
                <li>Couples looking to strengthen their emotional connection</li>
                <li>Anyone struggling with self-love or setting healthy boundaries</li>
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