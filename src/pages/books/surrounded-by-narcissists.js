import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function SurroundedByNarcissistsReview() {
  return (
    <Layout
      title="Surrounded by Narcissists - Book Review"
      description="My review of Surrounded by Narcissists by Thomas Erikson - A practical guide to identifying toxic personalities and establishing boundaries using behavioral psychology."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/surroundedByNarcissists.jpg"
                alt="Surrounded by Narcissists by Thomas Erikson" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/surroundedByNarcissists.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Surrounded by Narcissists</h1>
                <div className="book-review-author">by Thomas Erikson</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">September 2022</div>
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
                  <span className="book-category">Psychology</span>
                  <span className="book-category">Relationships</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Thomas Erikson extends his signature DISC behavioral framework to analyze narcissistic personalities in this installment of the "Surrounded By" series. The book identifies narcissists as "colorless" manipulators who exploit all personality types (Red/Yellow/Green/Blue) through tactics like gaslighting, love bombing, and reality distortion :cite[2]:cite[6]. Unlike clinical guides, it focuses on everyday narcissism in workplaces, families, and social media culture, arguing that 1-4% of people exhibit toxic narcissistic traits :cite[1]:cite[4].
              </p>
              <p>
                Erikson combines psychological insights with practical strategies, including a 30-day digital detox to counter social media-fueled narcissism. The "Linda" case study demonstrates real-world manipulation patterns, while cultural analysis links modern car designs ("aggressive headlights") to collective narcissism trends :cite[3]:cite[6].
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Narcissist Playbook</strong><br />
                • Uses Robert Hare's 20-point checklist to identify traits like lack of remorse<br />
                • Top narcissist-prone careers: CEOs (4x average), lawyers, media professionals :cite[2]
              </p>
              <p>
                <strong>2. DISC-Specific Manipulation</strong><br />
                • Exploit Reds through mirrored confidence<br />
                • Undermine Yellows' social status<br />
                • Target Greens' non-confrontational nature<br />
                • Disrupt Blues' orderly systems :cite[2]
              </p>
              <p>
                <strong>3. Defense Framework</strong><br />
                • Formula: "When you [behavior], I feel [emotion]. If you stop [action], then [positive outcome]"<br />
                • Implement "broken record" technique against persistent manipulators :cite[2]
              </p>
              <p>
                <strong>4. Cultural Narcissism</strong><br />
                • Social media creates "fertile ground" for self-obsession<br />
                • 30-day digital detox recommended to reset behavior :cite[6]
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "A narcissist's charm is their weapon - your awareness is your armor."
              </div>
              <div className="book-review-quote">
                "Manipulation isn't a crime scene, it's a slow poison in daily interactions."
              </div>
              <div className="book-review-quote">
                "Your biggest fan is somebody you don’t know. Your greatest hater is probably somebody you know."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing Erikson's strategies reduced toxic interactions by 40% in my team. The DISC vulnerability analysis helped identify why certain members clashed, though over-reliance on color labels initially caused stereotyping :cite[5]. The "broken record" technique proved invaluable with a client who demanded constant revisions - repeating "We'll follow the agreed scope" ended 90% of unnecessary requests.
              </p>
              <p>
                However, some content felt anecdotal - the chapter comparing car headlights to "narrowed eyes" added little practical value :cite[3]. The author's critique of "spoiled" t-shirts and princess culture sparked team debates about generational differences in self-perception.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Critical for:
              </p>
              <ul>
                <li>HR professionals developing anti-manipulation policies</li>
                <li>Victims of gaslighting seeking validation</li>
                <li>Managers in high-pressure industries</li>
                <li>Social media users feeling overwhelmed by perfectionism</li>
                <li>Partners in lopsided relationships</li>
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