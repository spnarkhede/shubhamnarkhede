import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function DareToLeadReview() {
  return (
    <Layout
      title="Dare to Lead - Book Review"
      description="My review of Dare to Lead by Brené Brown - A research-backed guide to courageous leadership through vulnerability and emotional intelligence."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/dareToLead.jpg"
                alt="Dare to Lead by Brené Brown" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/dareToLead.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Dare to Lead</h1>
                <div className="book-review-author">by Brené Brown</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">December 2023</div>
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
                  <span className="book-category">Leadership</span>
                  <span className="book-category">Personal Development</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Brené Brown redefines modern leadership through her decade-long research on courage and vulnerability. This groundbreaking work argues that true leadership requires emotional exposure and risk-taking, challenging traditional notions of invulnerable authority. Brown presents practical tools for building trust, navigating difficult conversations, and creating cultures where innovation thrives through psychological safety.
              </p>
              <p>
                The book introduces the "Armored vs Daring Leadership" framework, demonstrating how vulnerability serves as a strength rather than a weakness. Through compelling case studies and personal stories, Brown shows how courageous leaders transform organizations by modeling authenticity and embracing uncertainty.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Vulnerability Paradox</strong><br />
                Courage requires vulnerability - you can't have one without the other.
              </p>
              <p>
                <strong>2. Armored vs Daring Leadership</strong><br />
                Recognize behaviors that protect ego versus those that drive growth.
              </p>
              <p>
                <strong>3. The BRAVING Inventory</strong><br />
                Boundaries, Reliability, Accountability, Vault, Integrity, Non-Judgment, Generosity.
              </p>
              <p>
                <strong>4. Curiosity Over Criticism</strong><br />
                Replace "knowing" with "learning" in tough conversations.
              </p>
              <p>
                <strong>5. Rumble with Vulnerability</strong><br />
                Stay in difficult conversations until meaningful understanding emerges.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Vulnerability is the birthplace of innovation, creativity, and change."
              </div>
              <div className="book-review-quote">
                "Clear is kind. Unclear is unkind."
              </div>
              <div className="book-review-quote">
                "Who we are is how we lead."
              </div>
              <div className="book-review-quote">
                "Courage is contagious. A critical mass of brave leaders is the foundation of daring teams."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing Brown's principles required confronting my own perfectionism as a leader. The BRAVING framework helped me establish clearer boundaries while maintaining team trust. Initially uncomfortable with modeling vulnerability, I was surprised how sharing strategic uncertainties actually increased team problem-solving engagement.
              </p>
              <p>
                The "rumble" concept transformed our conflict resolution - we now approach disagreements as shared investigations rather than battles. However, maintaining vulnerability in high-stakes situations remains challenging. Six months post-reading, our team's psychological safety scores improved by 40%, directly correlating with increased innovation output.
              </p>
              <p>
                Brown's research helped me reframe vulnerability as leadership armor rather than exposure. The most impactful shift has been replacing "What will people think?" with "How can I show up authentically?"
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Executives shaping organizational culture</li>
                <li>Mid-level managers building team trust</li>
                <li>Entrepreneurs scaling their companies</li>
                <li>HR professionals developing leadership programs</li>
                <li>Anyone leading through organizational change</li>
                <li>Individuals overcoming perfectionism in leadership roles</li>
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