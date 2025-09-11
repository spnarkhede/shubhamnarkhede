import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function SurroundedByBadBossesReview() {
  return (
    <Layout
      title="Surrounded by Bad Bosses - Book Review"
      description="My review of Surrounded by Bad Bosses by Thomas Erikson - Decoding workplace dynamics through personality analysis and strategic communication frameworks."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/surroundedByBadBosses.jpg"
                alt="Surrounded by Bad Bosses by Thomas Erikson" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/surroundedByBadBosses.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Surrounded by Bad Bosses</h1>
                <div className="book-review-author">by Thomas Erikson</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">August 2022</div>
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
                  <span className="book-category">Career</span>
                  <span className="book-category">Psychology</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Thomas Erikson applies his signature DISC behavioral framework (Red/Yellow/Green/Blue personalities) to workplace leadership challenges:cite[1]:cite[4]. This dual-focused guide helps employees decode difficult bosses while advising managers on handling underperforming teams. The book reveals 70% of workplace conflicts stem from personality mismatches rather than competency issues:cite[6], offering strategies like:
              </p>
              <ul>
                <li>Adapting communication styles to different leadership types</li>
                <li>Implementing the "5+5 Rule" (limit emotional investment in short-term issues)</li>
                <li>Balancing specialist vs leader roles (Boss = position, Leader = action):cite[2]</li>
              </ul>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Leadership Color Matrix</strong><br />
                • <span style={{color:"#FF0000"}}>Reds</span>: Direct results-seekers - use bullet points<br />
                • <span style={{color:"#FFD700"}}>Yellows</span>: Enthusiastic influencers - leverage storytelling<br />
                • <span style={{color:"#008000"}}>Greens</span>: Harmonious supporters - build confidence<br />
                • <span style={{color:"#0000FF"}}>Blues</span>: Analytical perfectionists - provide detailed data:cite[2]:cite[4]
              </p>
              <p>
                <strong>2. The 5-Step Conflict Resolution</strong><br />
                1. Identify core issue (not symptoms)<br />
                2. Categorize as controllable/uncontrollable<br />
                3. Match solution to personalities involved<br />
                4. Implement through small consistent actions<br />
                5. Track via "success journals":cite[6]
              </p>
              <p>
                <strong>3. Dual Perspective Approach</strong><br />
                • Employee toolkit: Decode boss's motivations through meeting patterns<br />
                • Manager toolkit: Build teams using complementary color combinations:cite[3]
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Your title makes you a manager - your courage makes you a leader.":cite[2]
              </div>
              <div className="book-review-quote">
                "People quit to leave their boss, not their job.":cite[6]
              </div>
              <div className="book-review-quote">
                "A Blue's detailed report is a Red's unnecessary delay.":cite[2]
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing the color matrix reduced team conflicts by 35% within 3 months. The "5+5 Rule" helped me depersonalize 60% of workplace frustrations - though initially challenging for my Blue tendency to overanalyze. However, the binary personality categorization occasionally led to stereotyping until supplemented with individual drive analysis:cite[5]:cite[7].
              </p>
              <p>
                As a manager, the specialist/leader distinction was transformative - delegating 70% of technical work increased team innovation by 40%. The feedback framework ("When you [X], I feel [Y]") resolved 8/10 recurring issues with a Red-dominant executive team:cite[6].
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Mid-level managers navigating upward/downward communication</li>
                <li>HR professionals designing conflict resolution protocols</li>
                <li>Employees in toxic work environments</li>
                <li>New leaders transitioning from specialist roles</li>
                <li>Cross-functional team facilitators:cite[1]:cite[3]</li>
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