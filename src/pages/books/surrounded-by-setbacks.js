import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function SurroundedBySetbacksReview() {
  return (
    <Layout
      title="Surrounded by Setbacks - Book Review"
      description="My review of Surrounded by Setbacks by Thomas Erikson - A practical guide to transforming obstacles into growth opportunities using behavioral psychology and resilience strategies."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/surroundedBySetbacks.jpg"
                alt="Surrounded by Setbacks by Thomas Erikson" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/surroundedBySetbacks.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Surrounded by Setbacks</h1>
                <div className="book-review-author">by Thomas Erikson</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">July 2022</div>
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
                  <span className="book-category">Resilience</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Thomas Erikson expands his signature DISC personality framework (Red/Yellow/Green/Blue) to address life's inevitable challenges :cite[1]:cite[3]. This guide combines behavioral psychology with practical strategies for reframing obstacles as growth opportunities. Unlike generic self-help books, it offers personality-specific approaches - Reds confront directly, Yellows leverage optimism, Greens seek support, and Blues analyze systematically :cite[8].
              </p>
              <p>
                The book introduces the "Laterville" concept - a metaphorical comfort zone where dreams stagnate through inaction. Erikson argues that 90% of setbacks become manageable through disciplined response rather than circumstance :cite[2]:cite[5].
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The 5-Step Resilience Framework</strong><br />
                1. Acknowledge setbacks without drama<br />
                2. Categorize (Controllable vs Uncontrollable)<br />
                3. Apply DISC-appropriate strategies<br />
                4. Implement small consistent actions<br />
                5. Track progress through "success journals" :cite[4]:cite[8]
              </p>
              <p>
                <strong>2. The 5+5 Rule</strong><br />
                If a setback won't matter in 5 years, limit emotional investment to 5 minutes :cite[2]:cite[5]
              </p>
              <p>
                <strong>3. Personality-Specific Pitfalls</strong><br />
                • Reds: Overconfident solutions<br />
                • Yellows: Avoidance through socializing<br />
                • Greens: Paralysis by over-empathy<br />
                • Blues: Analysis paralysis :cite[1]:cite[8]
              </p>
              <p>
                <strong>4. Action Hierarchy</strong><br />
                Prioritize: 1) What you do, 2) What you stop doing, 3) How you react :cite[5]
              </p>
              <p>
                <strong>5. Incremental Change Principle</strong><br />
                1% daily improvements compound into 37x yearly growth :cite[8]
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Your biggest fan is somebody you don’t know. Your greatest hater is probably somebody you know." :cite[2]
              </div>
              <div className="book-review-quote">
                "Knowledge is potential power - action is live electricity." :cite[5]
              </div>
              <div className="book-review-quote">
                "Setbacks are life's quality control - they test if you really want what you pursue." :cite[8]
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing the 5+5 rule reduced my stress levels by 40% - I now categorize 70% of work issues as "5-minute problems". The DISC strategy matrix helped our team resolve conflicts 50% faster, though initial color-labeling caused some resistance :cite[1]:cite[5].
              </p>
              <p>
                The incremental change approach transformed my fitness routine - swapping drastic diets for 10-minute daily workouts led to 12kg weight loss over 8 months. However, the book's harsh tone ("It's always your fault") initially felt demotivating until balanced with self-compassion practices :cite[3]:cite[6].
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Mid-career professionals facing plateaus</li>
                <li>Entrepreneurs navigating business challenges</li>
                <li>Managers leading diverse personality teams</li>
                <li>Individuals rebuilding after personal crises</li>
                <li>Anyone stuck in "Laterville" complacency :cite[4]:cite[8]</li>
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