import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function ThanksForFeedbackReview() {
  return (
    <Layout
      title="Thanks for the Feedback - Book Review"
      description="My review of Thanks for the Feedback by Douglas Stone and Sheila Heen - Evidence-based strategies to receive feedback effectively and use it for personal growth."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/thanksForFeedback.jpg"
                alt="Thanks for the Feedback by Douglas Stone and Sheila Heen" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/thanksForFeedback.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Thanks for the Feedback</h1>
                <div className="book-review-author">by Douglas Stone and Sheila Heen</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">October 2023</div>
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
                  <div className="book-review-rating-stars">★★★★½</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Communication</span>
                  <span className="book-category">Personal Development</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Stone and Heen revolutionize our understanding of feedback dynamics in this research-backed guide. The authors dissect why even well-intentioned feedback often triggers defensive reactions, offering practical frameworks to transform criticism into actionable insights. Through neuroscience and psychology lenses, they reveal how to decode feedback's hidden messages and manage emotional responses effectively.
              </p>
              <p>
                The book distinguishes between three feedback types (appreciation, coaching, and evaluation) and provides tailored strategies for each. Particularly valuable is the emphasis on the receiver's role in the feedback process - arguing that skillful reception is just as crucial as thoughtful delivery.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Feedback Triad</strong><br />
                Recognize whether feedback is appreciation, coaching, or evaluation - each requires different handling.
              </p>
              <p>
                <strong>2. Separate the "What" from the "Who"</strong><br />
                Disentangle the message's content from your relationship with the giver.
              </p>
              <p>
                <strong>3. Spot Your Triggers</strong><br />
                Identify common reaction patterns (truth, relationship, identity triggers) that distort feedback reception.
              </p>
              <p>
                <strong>4. The Coaching Conversation</strong><br />
                Ask clarifying questions to transform vague criticism into specific, actionable input.
              </p>
              <p>
                <strong>5. Second Score Concept</strong><br />
                Rate yourself on how well you received feedback, independent of its content quality.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Feedback is not just helpful information - it's a relationship transaction."
              </div>
              <div className="book-review-quote">
                "We don't just receive feedback, we interpret it - and that interpretation is often flawed."
              </div>
              <div className="book-review-quote">
                "The best feedback receivers are curious detectives, not defensive lawyers."
              </div>
              <div className="book-review-quote">
                "Your growth rate equals your feedback absorption rate."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book fundamentally changed how I approach performance reviews at work. Using the "Second Score" concept, I've learned to assess my receptiveness separately from the feedback's validity. The trigger identification framework helped me recognize my tendency to dismiss feedback from junior colleagues (a relationship trigger I hadn't acknowledged).
              </p>
              <p>
                Implementing the "Coaching Conversation" techniques has yielded surprising insights - asking "What specifically would good look like?" often reveals mismatched expectations rather than personal shortcomings. However, applying these methods with emotional intelligence remains challenging during high-stakes evaluations.
              </p>
              <p>
                The research on neurological feedback responses helped me normalize initial defensive reactions while creating space for more rational processing. Six months post-reading, I've noticed improved team dynamics and more frequent feedback requests from colleagues.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential reading for:
              </p>
              <ul>
                <li>Managers and team leaders</li>
                <li>Professionals in feedback-heavy industries</li>
                <li>Individuals sensitive to criticism</li>
                <li>Anyone involved in mentorship roles</li>
                <li>Teams improving their feedback culture</li>
                <li>Leaders navigating organizational changes</li>
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