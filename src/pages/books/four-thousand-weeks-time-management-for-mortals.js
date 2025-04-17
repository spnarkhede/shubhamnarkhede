import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function FourThousandWeeksReview() {
  return (
    <Layout
      title="Four Thousand Weeks - Book Review"
      description="My review of Four Thousand Weeks by Oliver Burkeman - A radical approach to time management embracing human finitude and the art of meaningful imperfection."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/fourThousandWeeks.jpg"
                alt="Four Thousand Weeks by Oliver Burkeman" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/fourThousandWeeks.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Four Thousand Weeks</h1>
                <div className="book-review-author">by Oliver Burkeman</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">September 2021</div>
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
                  <span className="book-category">Productivity</span>
                  <span className="book-category">Philosophy</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Oliver Burkeman confronts our productivity obsession with a startling premise: the average human lifespan is 4000 weeks. This anti-time-management manifesto argues that conventional efficiency approaches backfire by increasing anxiety. Instead, we must embrace "cosmic insignificance therapy" - finding freedom in accepting our limited time through three principles: 1) Pay yourself first with meaningful work 2) Limit work-in-progress 3) Resist middling priorities.
              </p>
              <p>
                Blending philosophy (Heidegger, Seneca) with modern psychology, Burkeman shows how surrendering to finitude paradoxically creates space for what matters. The book challenges productivity culture's false promise that we can "do it all" if we optimize enough.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Efficiency Trap</strong><br />
                Trying to clear more tasks creates more tasks - focus instead on strategic neglect
              </p>
              <p>
                <strong>2. Cosmic Insignificance Therapy</strong><br />
                Find liberation in accepting your limited impact on the vast timeline of existence
              </p>
              <p>
                <strong>3. Patron Saint Principle</strong><br />
                Choose 3-4 "saints" (mentors) to guide priorities when overwhelmed
              </p>
              <p>
                <strong>4. Sequential Living</strong><br />
                Embrace doing one thing at a time in proper sequence rather than multitasking
              </p>
              <p>
                <strong>5. Productivity as Moral License</strong><br />
                Recognize using busyness to avoid hard existential questions about meaning
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "The world is bursting with wonder, and yet it's the rare productivity guru who seems to have considered the possibility that the ultimate point of all our frenetic doing might be to experience more of that wonder."
              </div>
              <div className="book-review-quote">
                "You don't get to dictate life's schedule - but you can stop feeling wronged when it fails to comply with yours."
              </div>
              <div className="book-review-quote">
                "The day will never arrive when you have everything under control."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing "strategic neglect" reduced my task list by 60% while increasing meaningful output. Adopting sequential living helped complete a 2-year writing project in 6 months. However, overcoming productivity guilt required deleting all task manager apps for 30 days - a detox revealing how tools drove anxiety more than progress.
              </p>
              <p>
                The patron saint concept transformed decision-making - choosing Carl Jung, Mary Oliver, and Marcus Aurelius as guides created unexpected clarity. Two years later, I maintain a "4K Week" counter on my desk, a visceral reminder to invest time rather than "spend" it.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Productivity system addicts</li>
                <li>Perfectionists struggling with completion</li>
                <li>Leaders facing decision fatigue</li>
                <li>Existential philosophy enthusiasts</li>
                <li>Anyone feeling trapped in "hustle culture"</li>
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