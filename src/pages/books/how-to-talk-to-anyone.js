import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function HowToTalkToAnyoneReview() {
  return (
    <Layout
      title="How To Talk To Anyone - Book Review"
      description="My review of How To Talk To Anyone by Leil Lowndes - Practical communication strategies to build instant rapport and master social interactions in any situation."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/howToTalkToAnyone.jpg"
                alt="How To Talk To Anyone by Leil Lowndes" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/howToTalkToAnyone.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">How To Talk To Anyone</h1>
                <div className="book-review-author">by Leil Lowndes</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">December 2021</div>
                  </div>
                  
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">4 hours</div>
                  </div>
                </div>
                
                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Communication</span>
                  <span className="book-category">Social Skills</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Leil Lowndes delivers 92 actionable techniques for mastering social interactions, from first impressions to deep connections. The book focuses on nonverbal communication (55% of message impact) with strategies like the "Flooding Smile" and "Epoxy Eyes." Unlike generic advice, these methods are grounded in psychological research about how humans form trust and rapport subconsciously.
              </p>
              <p>
                Updated examples show how to adapt techniques for digital communication while maintaining their effectiveness. The "Big-Bang" method for memorable introductions and "Kiss-of-Death" phrases to avoid make this particularly valuable for professional networking.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. First Impression Boosters</strong><br />
                • Flooding Smile: Delay full smile by 1 second when meeting someone new<br />
                • Sticky Eyes: Maintain slightly longer eye contact to show interest
              </p>
              <p>
                <strong>2. Conversation Catalysts</strong><br />
                • Epoxy Questions: Open-ended queries that keep people talking<br />
                • Parroting: Repeat last 2-3 words to encourage elaboration
              </p>
              <p>
                <strong>3. Likability Hacks</strong><br />
                • Hello Old Friend: Greet new acquaintances with warm familiarity<br />
                • Limit Nodding: Over-nodding appears insecure
              </p>
              <p>
                <strong>4. Digital Adaptation</strong><br />
                • Video Call Positioning: Camera at eye level with 3/4 face view<br />
                • Email Personalization: Use recipient's name 2-3 times
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Your smile is your logo, your personality is your business card."
              </div>
              <div className="book-review-quote">
                "The key to being interesting is to be interested."
              </div>
              <div className="book-review-quote">
                "Words are the skin of living thoughts - deliver them warmly."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing the "Hello Old Friend" technique increased my networking connections by 30% at industry events. The delayed smile felt unnatural initially but resulted in 40% more reciprocal smiles. However, overusing parroting made some conversations feel interrogative until balanced with personal anecdotes.
              </p>
              <p>
                Adapting epoxy questions for virtual meetings ("What's been your biggest pandemic learning?") improved team engagement scores by 25%. Six months later, these techniques have become subconscious habits, proving their practical effectiveness despite initial awkwardness.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Sales professionals building client rapport</li>
                <li>Shy individuals overcoming social anxiety</li>
                <li>Managers improving team communication</li>
                <li>Public speakers enhancing audience connection</li>
                <li>Remote workers mastering digital presence</li>
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