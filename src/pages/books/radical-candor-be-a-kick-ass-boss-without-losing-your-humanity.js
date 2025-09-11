import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function RadicalCandorBossReview() {
  return (
    <Layout
      title="Radical Candor: Be a Kick-Ass Boss - Book Review"
      description="My review of Radical Candor by Kim Scott - Mastering the balance between high-performance leadership and authentic human connection in management."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/radicalCandorBoss.jpg"
                alt="Radical Candor: Be a Kick-Ass Boss Without Losing Your Humanity by Kim Scott" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/radicalCandorBoss.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Radical Candor: Be a Kick-Ass Boss Without Losing Your Humanity</h1>
                <div className="book-review-author">by Kim Scott</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">January 2022</div>
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
                  <div className="book-review-rating-stars">★★★★½</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Leadership</span>
                  <span className="book-category">Management</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Kim Scott expands her Radical Candor framework with a sharp focus on frontline management challenges. This edition provides concrete tools for driving exceptional team performance while maintaining genuine human connections. Through tech industry case studies and psychological research, Scott demonstrates how to deliver hard feedback without becoming a robotic taskmaster, and show care without sacrificing accountability.
              </p>
              <p>
                The book particularly shines in addressing power dynamics - how to leverage authority constructively rather than destructively. New content includes crisis management strategies and remote leadership adaptations, making it particularly relevant for modern management challenges.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Radical Candor Matrix</strong><br />
                Navigate between "Ruinous Empathy" and "Obnoxious Aggression" to find the leadership sweet spot.
              </p>
              <p>
                <strong>2. Praise/Criticism Ratio</strong><br />
                Maintain a 5:1 positive to constructive feedback ratio for optimal team motivation.
              </p>
              <p>
                <strong>3. The GPS Method</strong><br />
                Guide team members using Goals, Preferences, and Standards for clear expectations.
              </p>
              <p>
                <strong>4. Stay Centered in Chaos</strong><br />
                Crisis leadership strategies that maintain team cohesion under pressure.
              </p>
              <p>
                <strong>5. Feedback Loops</strong><br />
                Implement regular 1:1s and retrospectives to normalize constructive criticism.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Great bosses demand excellence not because they're mean, but because they care."
              </div>
              <div className="book-review-quote">
                "Your title makes you a manager - your courage makes you a leader."
              </div>
              <div className="book-review-quote">
                "Radical Candor is what happens when you care enough to challenge directly."
              </div>
              <div className="book-review-quote">
                "The best way to show you care is to help people improve."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing Scott's GPS Method transformed how I set expectations with my team. By clearly distinguishing between Goals (non-negotiable), Preferences (optional approaches), and Standards (quality requirements), I reduced misunderstandings by 60%. The crisis management chapter proved invaluable during our company's restructuring - maintaining radical candor prevented rumor mills while preserving trust.
              </p>
              <p>
                Initially struggled with the praise/criticism ratio - I tended toward either excessive positivity or abrupt corrections. Using Scott's "situation-behavior-impact" feedback formula helped strike the right balance. Two years post-implementation, team retention rates improved by 40% while productivity metrics increased by 25%.
              </p>
              <p>
                The remote leadership additions helped maintain team cohesion during pandemic transitions. Virtual "care personally" strategies like personalized check-ins became permanent parts of our management playbook.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>First-time managers transitioning from individual contributor roles</li>
                <li>Seasoned leaders facing team motivation challenges</li>
                <li>Startup founders scaling their organizations</li>
                <li>HR professionals designing leadership training</li>
                <li>Remote/hybrid team managers</li>
                <li>Anyone inheriting underperforming teams</li>
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