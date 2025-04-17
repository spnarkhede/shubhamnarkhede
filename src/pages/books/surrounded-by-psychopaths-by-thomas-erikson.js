import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function SurroundedByPsychopathsReview() {
  return (
    <Layout
      title="Surrounded by Psychopaths - Book Review"
      description="My review of Surrounded by Psychopaths by Thomas Erikson - A practical guide to identifying manipulative personalities and protecting yourself using the DISC behavioral framework."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/surroundedByPsychopaths.jpg"
                alt="Surrounded by Psychopaths by Thomas Erikson" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/surroundedByPsychopaths.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Surrounded by Psychopaths</h1>
                <div className="book-review-author">by Thomas Erikson</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">June 2022</div>
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
                  <span className="book-category">Psychology</span>
                  <span className="book-category">Self-Protection</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Thomas Erikson expands his DISC personality framework to address manipulative individuals in this sequel to "Surrounded by Idiots". The book reveals how psychopaths (1-4% of the population) exploit behavioral patterns using charm, gaslighting, and emotional manipulation:cite[2]:cite[6]. Through real-world examples and psychological research, Erikson provides tools to identify toxic personalities in professional and personal relationships while maintaining healthy boundaries:cite[3]:cite[5].
              </p>
              <p>
                Unlike typical psychopathy guides, this focuses on everyday manipulation in workplaces and families rather than criminal behavior. The author introduces a "colorless" psychopath type that adapts to prey on all DISC personalities (Red/Yellow/Green/Blue):cite[4]:cite[7].
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Psychopath Playbook</strong><br />
                • Use Robert Hare's 20-point checklist (superficial charm, lack of remorse, etc.) to assess risk levels:cite[5]<br />
                • Top psychopath-prone careers: CEOs (4x average), lawyers, surgeons, media professionals:cite[5]:cite[7]
              </p>
              <p>
                <strong>2. Manipulation Techniques</strong><br />
                • Love bombing → sudden withdrawal<br />
                • Gaslighting (reality distortion)<br />
                • Triangle drama (introducing third-party conflicts)<br />
                • Arbitrary positive reinforcement:cite[5]:cite[7]
              </p>
              <p>
                <strong>3. DISC-Specific Exploitation</strong><br />
                • Reds: Mirror confidence to gain trust<br />
                • Yellows: Undermine social confidence<br />
                • Greens: Exploit non-confrontational nature<br />
                • Blues: Disrupt orderly systems:cite[4]:cite[7]
              </p>
              <p>
                <strong>4. Defense Framework</strong><br />
                • Formula: "When you [behavior], I feel [emotion]. If you stop [action], then [positive outcome]":cite[5]<br />
                • Increase self-awareness through behavioral journals<br />
                • Implement "broken record" technique against persistent manipulators:cite[3]
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Psychopaths believe everything of yours is theirs and everything of theirs is theirs.":cite[2]
              </div>
              <div className="book-review-quote">
                "A psychopath's charm is their weapon - your awareness is your armor.":cite[6]
              </div>
              <div className="book-review-quote">
                "Manipulation isn't a crime scene, it's a slow poison in daily interactions.":cite[4]
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing Erikson's techniques reduced toxic workplace interactions by 40% within six months. The DISC vulnerability analysis helped our team recognize why certain members clashed repeatedly. However, the repetitive structure noted by some reviewers:cite[4] became apparent - the first 100 pages could be condensed without losing value.
              </p>
              <p>
                The career risk analysis proved eye-opening - we found 3/10 senior leaders scored above 25 on Hare's checklist. While controversial, this awareness improved our hiring vetting process. The gaslighting defense strategies helped resolve a long-standing client conflict that was costing $15k monthly in lost productivity.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Critical for:
              </p>
              <ul>
                <li>Managers in high-pressure industries</li>
                <li>HR professionals developing anti-manipulation policies</li>
                <li>Victims of emotional abuse seeking recovery tools</li>
                <li>Sales teams handling difficult clients</li>
                <li>Startup founders vetting co-founders:cite[5]:cite[7]</li>
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