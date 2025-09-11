import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import SpotifyPodcast from '@site/src/components/SpotifyPodcast';

export default function DeepWorkReview() {
  return (
    <Layout
      title="Deep Work - Book Review"
      description="My review of Deep Work by Cal Newport - Rules for focused success in a distracted world."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/deepWork.jpg"
                alt="Deep Work by Cal Newport" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/deepWork.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Deep Work</h1>
                <div className="book-review-subtitle">Rules for Focused Success in a Distracted World</div>
                <div className="book-review-author">by Cal Newport</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">June 2021</div>
                  </div>
                  
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">8 hours</div>
                  </div>
                </div>
                
                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★½</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Productivity</span>
                  <span className="book-category">Self-Improvement</span>
                  <span className="book-category">Career</span>
                </div>
              </div>
            </div>
            
            <SpotifyPodcast 
              spotifyUrl="https://open.spotify.com/episode/77INvjUzXbCTQjCFeAk0Ij"
              title="Deep Work with Cal Newport"
            />
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                "Deep Work" by Cal Newport presents a compelling argument for the value of focused, distraction-free concentration in today's increasingly fragmented digital landscape. Newport defines deep work as "professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit," and contrasts it with shallow work—non-cognitively demanding, logistical tasks often performed while distracted.
              </p>
              <p>
                The book is divided into two main parts: The first establishes the case for why deep work is valuable, rare, and meaningful in our economy. The second provides a training regimen with four rules to transform your mind and habits to support this skill. Newport argues that the ability to perform deep work is becoming increasingly rare precisely at the same time it is becoming increasingly valuable in our economy—and as a consequence, those who cultivate this skill will thrive.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Deep Work Is Valuable and Rare</strong><br />
                In an economy increasingly based on knowledge work, the ability to focus deeply is becoming both more valuable and more scarce.
              </p>
              <p>
                <strong>2. Attention Residue</strong><br />
                Switching between tasks leaves an "attention residue" that reduces cognitive performance. Even brief distractions can significantly impair your ability to perform deep work.
              </p>
              <p>
                <strong>3. Four Rules for Deep Work</strong><br />
                Work Deeply (establish rituals and routines), Embrace Boredom (train your concentration), Quit Social Media (be selective with tools), and Drain the Shallows (reduce shallow work).
              </p>
              <p>
                <strong>4. Schedule Every Minute</strong><br />
                Time-blocking your day forces intentionality and reduces the likelihood of defaulting to shallow activities.
              </p>
              <p>
                <strong>5. Depth Philosophy</strong><br />
                Choose a deep work philosophy that fits your circumstances: monastic (maximize deep work by eliminating shallow obligations), bimodal (dedicate defined stretches to deep work), rhythmic (transform deep work into a regular habit), or journalistic (fit deep work wherever you can).
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in our economy. As a consequence, the few who cultivate this skill, and then make it the core of their working life, will thrive."
              </div>
              <div className="book-review-quote">
                "Who you are, what you think, feel, and do, what you love—is the sum of what you focus on."
              </div>
              <div className="book-review-quote">
                "To learn hard things quickly, you must focus intensely without distraction."
              </div>
              <div className="book-review-quote">
                "Clarity about what matters provides clarity about what does not."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Reading "Deep Work" fundamentally changed how I approach my professional life. Newport's distinction between deep and shallow work helped me recognize how much of my day was consumed by low-value activities that created the illusion of productivity while preventing meaningful progress on important projects.
              </p>
              <p>
                I've implemented several of Newport's strategies with significant results. Time-blocking my calendar has been particularly transformative—by planning my day in advance and designating specific periods for deep work, I've increased both the quantity and quality of my output. I've also adopted a "rhythmic" approach to deep work, scheduling 90-minute focused sessions in the morning when my concentration is at its peak.
              </p>
              <p>
                The concept of "attention residue" resonated strongly with me. I've become much more conscious of how context switching degrades my cognitive performance, and I now batch similar tasks together and minimize interruptions during deep work sessions. This has not only improved my productivity but also reduced the mental fatigue I used to experience by the end of the workday.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                I would recommend "Deep Work" to:
              </p>
              <ul>
                <li>Knowledge workers who feel constantly busy but not productive</li>
                <li>Professionals whose success depends on mastering complex information</li>
                <li>Anyone struggling with digital distraction and fragmented attention</li>
                <li>Students looking to improve their learning efficiency</li>
                <li>Managers seeking to create more productive work environments</li>
                <li>Freelancers and entrepreneurs who need to maximize their cognitive output</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/thinking-fast-slow" className="book-review-nav-button">
                Next Review: Thinking, Fast and Slow
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
