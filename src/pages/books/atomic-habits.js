import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import SpotifyPodcast from '@site/src/components/SpotifyPodcast';

export default function AtomicHabitsReview() {
  return (
    <Layout
      title="Atomic Habits - Book Review"
      description="My review of Atomic Habits by James Clear - An easy and proven way to build good habits and break bad ones."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/atomicHabits.jpg"
                alt="Atomic Habits by James Clear" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/atomicHabits.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Atomic Habits</h1>
                <div className="book-review-author">by James Clear</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">January 2023</div>
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
                  <div className="book-review-rating-stars">★★★★★</div>
                  <div className="book-review-rating-value">5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Self-Improvement</span>
                  <span className="book-category">Psychology</span>
                  <span className="book-category">Productivity</span>
                </div>
              </div>
            </div>
            
            <SpotifyPodcast 
              spotifyUrl="https://open.spotify.com/episode/6e8EcqwoZEEuYNi6XNv4hu"
              title="Atomic Habits with James Clear"
            />
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                "Atomic Habits" by James Clear is a comprehensive guide to understanding how habits work and how to transform them to achieve remarkable results. The book breaks down the complex science of habit formation into simple, actionable steps that anyone can follow to build good habits and break bad ones.
              </p>
              <p>
                Clear argues that small, incremental changes (atomic habits) can lead to remarkable results over time through the power of compound growth. He introduces the four-step model of habits—cue, craving, response, and reward—and provides practical strategies for each stage to create lasting behavior change.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Power of 1% Improvements</strong><br />
                Small habits don't seem to make much difference on any given day, but over months or years, the impact of daily 1% improvements can be enormous due to compounding.
              </p>
              <p>
                <strong>2. Focus on Identity, Not Outcomes</strong><br />
                The most effective way to change habits is to focus on who you want to become, not what you want to achieve. When you tie habits to your identity, they become more sustainable.
              </p>
              <p>
                <strong>3. The Four Laws of Behavior Change</strong><br />
                To build a good habit: make it obvious, make it attractive, make it easy, and make it satisfying.<br />
                To break a bad habit: make it invisible, make it unattractive, make it difficult, and make it unsatisfying.
              </p>
              <p>
                <strong>4. Environment Design</strong><br />
                Your environment has a powerful influence on your behavior. Design your environment to make good habits easier and bad habits harder.
              </p>
              <p>
                <strong>5. Habit Stacking</strong><br />
                Link a new habit to an existing one using the formula: "After [current habit], I will [new habit]."
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "You do not rise to the level of your goals. You fall to the level of your systems."
              </div>
              <div className="book-review-quote">
                "Every action you take is a vote for the type of person you wish to become."
              </div>
              <div className="book-review-quote">
                "Habits are the compound interest of self-improvement."
              </div>
              <div className="book-review-quote">
                "The most practical way to change who you are is to change what you do."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Reading "Atomic Habits" was a transformative experience for me. The book's practical approach to habit formation has helped me implement several positive changes in my daily routine. I particularly found the concept of habit stacking useful—I've successfully built a morning routine by linking new habits to existing ones.
              </p>
              <p>
                The idea that small, consistent actions compound over time has changed how I approach personal development. Instead of setting ambitious goals that often lead to burnout, I now focus on establishing sustainable systems through tiny improvements.
              </p>
              <p>
                I've applied Clear's four laws of behavior change to establish a consistent exercise routine, improve my reading habits, and reduce social media usage. The emphasis on identity-based habits has been particularly powerful—framing habits in terms of becoming the type of person I want to be rather than achieving specific outcomes.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                I would recommend "Atomic Habits" to:
              </p>
              <ul>
                <li>Anyone looking to make positive changes in their life but struggling with consistency</li>
                <li>Professionals seeking to improve productivity and performance</li>
                <li>Coaches, teachers, and parents interested in understanding behavior change</li>
                <li>People who have tried and failed to establish good habits in the past</li>
                <li>Anyone interested in the psychology behind human behavior and habit formation</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/psychology-of-money" className="book-review-nav-button">
                Next Review: The Psychology of Money
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
