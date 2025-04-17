import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function CourageToBeDislikedReview() {
  return (
    <Layout
      title="The Courage To Be Disliked - Book Review"
      description="My review of The Courage To Be Disliked by Ichiro Kishimi & Fumitake Koga - Applying Adlerian psychology to achieve freedom through radical self-acceptment and community contribution."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/courageToBeDisliked.jpg"
                alt="The Courage To Be Disliked by Ichiro Kishimi & Fumitake Koga" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/courageToBeDisliked.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">The Courage To Be Disliked</h1>
                <div className="book-review-author">by Ichiro Kishimi & Fumitake Koga</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">February 2021</div>
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
                  <span className="book-category">Philosophy</span>
                  <span className="book-category">Psychology</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                This philosophical dialogue revives Alfred Adler's psychology through a conversation between a youth and philosopher. Challenging Freudian trauma theory, it argues happiness comes from embracing three Adlerian truths: 1) We choose our emotions 2) All problems are interpersonal relationship issues 3) Contribution to community brings meaning. The titular "courage" means accepting that some will disapprove when living authentically.
              </p>
              <p>
                Through Socratic dialogue, the book dismantles common excuses like past trauma or others' expectations. Its radical premise: You can change your life now by adopting new thought patterns, regardless of circumstances.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Separation of Tasks</strong><br />
                Distinguish between what you control (your actions) and others' reactions
              </p>
              <p>
                <strong>2. Teleology Over Etiology</strong><br />
                Focus on current purposes of behavior rather than past causes
              </p>
              <p>
                <strong>3. Horizontal Relationships</strong><br />
                Reject superiority/inferiority complexes - view others as equals
              </p>
              <p>
                <strong>4. Life Tasks Framework</strong><br />
                Build meaning through work, friendship, and love
              </p>
              <p>
                <strong>5. Contribution Circle</strong><br />
                Start with self-acceptance → build confidence → contribute to others
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Freedom is being disliked by other people."
              </div>
              <div className="book-review-quote">
                "The courage to be happy includes the courage to be disliked."
              </div>
              <div className="book-review-quote">
                "We determine our lives not by our experiences, but by the meaning we give them."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Applying the "Separation of Tasks" reduced my social anxiety by 60% - realizing others' opinions are their task, not mine. However, the radical self-responsibility concept initially felt harsh when dealing with past trauma. Over time, focusing on current choices empowered me to rebuild relationships.
              </p>
              <p>
                Implementing "Horizontal Relationships" at work eliminated 75% of approval-seeking behaviors. The Contribution Circle helped shift from validation-seeking to value-creation - client satisfaction scores increased by 40% as a result.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>People-pleasers seeking liberation</li>
                <li>Individuals stuck in victim mentality</li>
                <li>Leaders building authentic cultures</li>
                <li>Those struggling with social anxiety</li>
                <li>Philosophy enthusiasts exploring Eastern interpretations of Adler</li>
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