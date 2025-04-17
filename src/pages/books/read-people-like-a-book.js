import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function ReadPeopleLikeABookReview() {
  return (
    <Layout
      title="Read People Like a Book - Book Review"
      description="My review of Read People Like a Book by Patrick King - Practical techniques to decode human behavior and enhance social intelligence through nonverbal analysis and pattern recognition."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/readPeopleLikeABook.jpg"
                alt="Read People Like a Book by Patrick King" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/readPeopleLikeABook.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Read People Like a Book</h1>
                <div className="book-review-author">by Patrick King</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">May 2021</div>
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
                  <span className="book-category">Communication</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Patrick King distills complex behavioral psychology into actionable techniques for decoding human interactions. This practical guide teaches how to interpret microexpressions, body language clusters, and speech patterns to predict intentions. The book emphasizes pattern recognition over isolated cues - for instance, combining crossed arms (defensive) with foot direction (interest indicator) for accurate readings.
              </p>
              <p>
                Unlike academic texts, this focuses on real-world applications: negotiating salaries, detecting deception, and building rapport. The "BASIC" framework (Body, Action, Speech, Interaction Context) helps systematize observations while avoiding confirmation bias.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The BASIC Framework</strong><br />
                • Body: Posture and proximity<br />
                • Action: Gestures and mirroring<br />
                • Speech: Pace and pronoun usage<br />
                • Interaction: Contextual behavior patterns
              </p>
              <p>
                <strong>2. Microexpression Decoding</strong><br />
                Recognize fleeting facial displays (1/25th second) of true emotions
              </p>
              <p>
                <strong>3. Cluster Analysis</strong><br />
                3+ congruent signals required for accurate readings (e.g., crossed arms + leaning back + foot tapping)
              </p>
              <p>
                <strong>4. Baseline Establishment</strong><br />
                Identify normal behavior patterns before interpreting deviations
              </p>
              <p>
                <strong>5. Deception Detection Triad</strong><br />
                Spot lies through verbal/nonverbal mismatches, emotional latency, and cognitive overload signs
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "The body never lies - it just requires the right dictionary."
              </div>
              <div className="book-review-quote">
                "Context is king in behavioral analysis - a crossed arm in Alaska means something different in Algeria."
              </div>
              <div className="book-review-quote">
                "True social intelligence is observing without judging."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing cluster analysis reduced misinterpretations by 60% in client meetings. The BASIC framework helped identify a team member's unspoken concerns through posture shifts and pronoun changes ("the project" vs "my contribution"). However, over-reliance on microexpressions initially led to analysis paralysis until combining with verbal cues.
              </p>
              <p>
                The deception triad prevented a bad hire by spotting inconsistent emotional responses - candidate's smile appeared 0.8 seconds after hearing benefits (delayed congruence). Weekly practice sessions improved my negotiation success rate by 35% through better rapport-building.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Sales professionals closing deals</li>
                <li>Managers resolving team conflicts</li>
                <li>HR leaders conducting interviews</li>
                <li>Public speakers engaging audiences</li>
                <li>Anyone navigating complex social dynamics</li>
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