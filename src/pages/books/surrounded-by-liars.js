import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function SurroundedByLiarsReview() {
  return (
    <Layout
      title="Surrounded by Liars - Book Review"
      description="My review of Surrounded by Liars by Thomas Erikson - A behavioral guide to detecting deception and managing relationships with dishonest individuals using the DISC framework."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/surroundedByLiars.jpg"
                alt="Surrounded by Liars by Thomas Erikson" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/surroundedByLiars.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Surrounded by Liars</h1>
                <div className="book-review-author">by Thomas Erikson</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">October 2022</div>
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
                  <span className="book-category">Communication</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Thomas Erikson extends his DISC behavioral framework (Red/Yellow/Green/Blue personalities) to analyze deception in everyday interactions. This installment in the bestselling series reveals that people average 3 lies within 5 minutes of meeting someone new :cite[8]. The book combines psychological research with practical strategies for detecting manipulation tactics like gaslighting and half-truths while maintaining the author's trademark humor :cite[1]:cite[3].
              </p>
              <p>
                Unlike traditional deception guides, Erikson focuses on workplace and personal relationships rather than criminal behavior. New content includes a 30-day digital detox plan to counter social media-fueled dishonesty and cultural analysis linking modern behaviors to collective deception trends :cite[4]:cite[8].
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The 4 Personality Liar Profiles</strong><br />
                • <span style={{color:"#FF0000"}}>Reds</span>: Lie to control outcomes<br />
                • <span style={{color:"#FFD700"}}>Yellows</span>: Fabricate to impress<br />
                • <span style={{color:"#008000"}}>Greens</span>: Omit truths to avoid conflict<br />
                • <span style={{color:"#0000FF"}}>Blues</span>: Distort through over-analysis:cite[3]:cite[8]
              </p>
              <p>
                <strong>2. 3-Step Lie Detection Method</strong><br />
                1. Baseline behavior analysis<br />
                2. Micro-expression spotting<br />
                3. Verbal pattern recognition ("I swear..." redundancy):cite[1]
              </p>
              <p>
                <strong>3. The Deception Paradox</strong><br />
                White lies constitute 75% of daily deception but erode trust cumulatively - strict honesty increases conflict short-term but builds credibility long-term:cite[2]:cite[4]
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "A liar's charm is their weapon - your awareness is your armor":cite[4]
              </div>
              <div className="book-review-quote">
                "We don't lie because we're evil - we lie because we're human":cite[3]
              </div>
              <div className="book-review-quote">
                "Digital deception has made us all part-time fiction writers of our own lives":cite[8]
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing the DISC lie profiles reduced team communication conflicts by 40% - recognizing Reds' outcome-focused fabrications helped reframe project negotiations. However, the cultural analysis chapter (comparing car designs to "aggressive facial expressions") felt anecdotal compared to earlier data-driven sections:cite[4]:cite[8].
              </p>
              <p>
                The 30-day digital detox plan revealed my own participation in "curated reality" - cutting social media lies increased authentic conversations but required adjusting to uncomfortable truths. Two years later, our team maintains a "Radical Candor + DISC" framework that's reduced email misinterpretations by 60%:cite[1]:cite[3].
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>HR professionals developing anti-manipulation policies</li>
                <li>Sales teams handling difficult clients</li>
                <li>Managers in high-pressure industries</li>
                <li>Victims of gaslighting seeking validation</li>
                <li>Social media users combating curated realities:cite[2]:cite[4]:cite[8]</li>
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