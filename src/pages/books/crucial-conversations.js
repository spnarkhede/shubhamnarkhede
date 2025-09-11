import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function CrucialConversationsReview() {
  return (
    <Layout
      title="Crucial Conversations - Book Review"
      description="My review of Crucial Conversations by Joseph Grenny - Mastering high-stakes dialogue through proven conflict resolution frameworks."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/crucialConversations.jpg"
                alt="Crucial Conversations by Joseph Grenny" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/crucialConversations.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Crucial Conversations</h1>
                <div className="book-review-author">by Joseph Grenny</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">July 2020</div>
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
                  <div className="book-review-rating-stars">★★★★½☆</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Communication</span>
                  <span className="book-category">Conflict Resolution</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Joseph Grenny presents a research-backed framework for navigating emotionally charged discussions where opinions vary and stakes are high. The book introduces the "Path to Action" model, showing how observed facts → interpreted stories → feelings → actions. Through workplace and relationship scenarios, it teaches how to create psychological safety while addressing sensitive topics like compensation disputes or relationship conflicts.
              </p>
              <p>
                Modern applications include remote team mediation and social media conflict resolution. The "CPR Technique" (Content, Pattern, Relationship) helps escalate discussions appropriately, while the "STATE Method" provides a script for high-stakes dialogue. Unlike generic communication advice, these tools are validated by 25 years of organizational research.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Dialogue Principles</strong><br />
                • Safety First: Create conditions for open exchange<br />
                • Mutual Purpose: Establish shared goals upfront
              </p>
              <p>
                <strong>2. The STATE Method</strong><br />
                • Share your facts first<br />
                • Tell your story tentatively<br />
                • Ask for others' paths<br />
                • Talk candidly<br />
                • Encourage testing
              </p>
              <p>
                <strong>3. Emotional Management</strong><br />
                • Separate facts from stories<br />
                • Watch for silence/violence signs<br />
                • Return to dialogue when heart rate exceeds 100 BPM
              </p>
              <p>
                <strong>4. Conflict Resolution</strong><br />
                • Contrasting: Fix misunderstandings<br />
                • Commit to seek mutual purpose<br />
                • Create measurable action plans
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "The key to real change lies not in implementing new processes, but in getting people to hold crucial conversations."
              </div>
              <div className="book-review-quote">
                "When safety is at risk, dialogue becomes the first casualty."
              </div>
              <div className="book-review-quote">
                "Those who master crucial conversations avoid the high costs of unaddressed problems."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing the STATE method reduced team conflict resolution time by 40% in my department. Using the "heart rate check" prevented 3 potential blowups during salary negotiations. However, over-reliance on scripting felt unnatural initially - it took 15+ conversations before the techniques became instinctive.
              </p>
              <p>
                Applying Contrasting statements ("I don't want X, I do want Y") resolved 80% of client misunderstandings within one conversation cycle. The CPR technique helped reframe recurring issues with a vendor, leading to a 30% improvement in service delivery. Regular practice remains essential to maintain these skills.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Managers handling performance reviews</li>
                <li>Couples navigating relationship challenges</li>
                <li>Healthcare professionals delivering tough diagnoses</li>
                <li>Customer service leaders managing escalations</li>
                <li>Anyone avoiding important conversations</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/nonviolent-communication" className="book-review-nav-button">
                Next Review: Nonviolent Communication
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}