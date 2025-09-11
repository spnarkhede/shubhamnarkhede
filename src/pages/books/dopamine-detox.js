import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function DopamineDetoxReview() {
  return (
    <Layout
      title="Dopamine Detox - Book Review"
      description="My review of Dopamine Detox by Thibaut Meurisse - Science-backed strategies to overcome digital addiction and reclaim focus in an overstimulated world."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/dopamineDetox.jpg"
                alt="Dopamine Detox by Thibaut Meurisse" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/dopamineDetox.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Dopamine Detox</h1>
                <div className="book-review-author">by Thibaut Meurisse</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">September 2023</div>
                  </div>
                  
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">3 hours</div>
                  </div>
                </div>
                
                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★½</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Psychology</span>
                  <span className="book-category">Self-Improvement</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Thibaut Meurisse presents a compelling blueprint for breaking free from the dopamine-driven cycles of modern life. The book explains how our brains have been hijacked by constant notifications, social media, and instant gratification, offering a structured approach to reset our neurological reward system. Through a combination of neuroscience insights and practical exercises, Meurisse guides readers in creating sustainable habits for deep focus and meaningful productivity.
              </p>
              <p>
                The detox program outlined in the book isn't about complete abstinence, but rather a strategic recalibration of how we engage with digital stimuli. Meurisse emphasizes gradual changes over extreme measures, making the methods accessible even for those deeply entrenched in digital addiction.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The 72-Hour Reset</strong><br />
                A complete digital detox period to baseline your dopamine levels and break compulsive habits.
              </p>
              <p>
                <strong>2. Stimulus Stacking</strong><br />
                Identifying and eliminating combinations of triggers that create addictive feedback loops.
              </p>
              <p>
                <strong>3. Delayed Gratification Training</strong><br />
                Systematically increasing your tolerance for postponing rewards to rebuild focus stamina.
              </p>
              <p>
                <strong>4. Environmental Design</strong><br />
                Restructuring physical and digital spaces to support intentional rather than reactive behavior.
              </p>
              <p>
                <strong>5. Mindful Consumption</strong><br />
                Developing awareness around micro-decisions that contribute to dopamine dependency.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Your attention span is your new IQ - protect it fiercely."
              </div>
              <div className="book-review-quote">
                "We don't need more willpower, we need fewer temptations."
              </div>
              <div className="book-review-quote">
                "Every ping is a tiny theft of your future self's potential."
              </div>
              <div className="book-review-quote">
                "True freedom isn't unlimited options, but conscious constraints."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing the 72-hour reset was transformative but challenging. The first day felt like withdrawal, but by day three, I experienced mental clarity I hadn't felt in years. Meurisse's approach helped me recognize how I was using social media as a "dopamine slot machine" throughout my day.
              </p>
              <p>
                The environmental design strategies were particularly effective. By simply charging my phone outside the bedroom and using website blockers, I regained 90 minutes of productive morning time. However, maintaining these habits requires ongoing vigilance - the book wisely frames this as a lifestyle shift rather than a quick fix.
              </p>
              <p>
                While some methods felt initially extreme, the science-backed explanations helped me push through discomfort. Six months post-detox, I've sustained a 300% increase in deep work sessions and significantly reduced my screen time.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                This book is crucial for:
              </p>
              <ul>
                <li>Digital natives feeling mentally fragmented</li>
                <li>Knowledge workers struggling with focus</li>
                <li>Parents concerned about children's screen time</li>
                <li>Anyone experiencing "scroll fatigue"</li>
                <li>Leaders managing distracted teams</li>
                <li>Individuals seeking more meaningful leisure time</li>
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