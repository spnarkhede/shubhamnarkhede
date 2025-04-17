import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function StrategicMindsetReview() {
  return (
    <Layout
      title="Strategic Mindset - Book Review"
      description="My review of Strategic Mindset: A 7-Day Plan to Identify What Matters by Thibaut Meurisse - A practical guide to developing strategic thinking and prioritizing what truly matters."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/strategicmindset.jpg"
                alt="Strategic Mindset by Thibaut Meurisse" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/strategicmindset.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Strategic Mindset</h1>
                <div className="book-review-author">by Thibaut Meurisse</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">February 2023</div>
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
                  <span className="book-category">Self-Improvement</span>
                  <span className="book-category">Productivity</span>
                  <span className="book-category">Strategy</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                "Strategic Mindset" offers a concise, action-oriented approach to developing clearer thinking and better decision-making in just one week. Thibaut Meurisse provides a structured 7-day framework that helps readers cut through life's complexity to identify their core priorities and align their actions accordingly.
              </p>
              <p>
                The book combines practical exercises, reflective prompts, and strategic thinking tools designed to help readers gain clarity about what truly matters in their personal and professional lives. Meurisse argues that developing a strategic mindset isn't just for business leaders but is essential for anyone seeking to live with greater purpose and effectiveness.
              </p>
              <p>
                Through this week-long process, readers learn to eliminate distractions, question assumptions, identify core values, and create systems that support sustained focus on high-impact activities. The result is a more intentional approach to life that reduces overwhelm and increases meaningful progress.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Strategic Simplicity</strong><br />
                True strategy is as much about what you choose not to do as what you commit to doing. Clarity comes from ruthless prioritization.
              </p>
              <p>
                <strong>2. Values-Based Decision Framework</strong><br />
                Identifying your core values creates a natural filter for making decisions that align with your authentic self.
              </p>
              <p>
                <strong>3. The 80/20 Principle in Action</strong><br />
                Focusing on the vital few activities that produce the majority of results dramatically increases effectiveness.
              </p>
              <p>
                <strong>4. Systems Over Goals</strong><br />
                Creating supportive systems and environments makes strategic action sustainable rather than relying solely on willpower.
              </p>
              <p>
                <strong>5. Weekly Strategic Review</strong><br />
                Regular reflection and course correction prevent drift and ensure continued alignment with what matters most.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Strategy isn't about doing more things right; it's about doing the right things."
              </div>
              <div className="book-review-quote">
                "Your calendar is a more honest representation of your priorities than your intentions."
              </div>
              <div className="book-review-quote">
                "The strategic mind doesn't just react to life—it creates it."
              </div>
              <div className="book-review-quote">
                "Clarity precedes mastery. Define what matters before attempting to excel."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Working through "Strategic Mindset" helped me recognize how often I was confusing busyness with productivity. The value audit on day three was particularly enlightening—I discovered several activities I routinely prioritized that weren't actually aligned with my core values.
              </p>
              <p>
                I appreciated the book's practicality. Rather than abstract concepts, Meurisse offers concrete exercises that generate immediate insights. The 7-day structure made the process feel manageable while still allowing for deep work. I've since implemented the weekly review practice and found it tremendously helpful for staying focused on high-leverage activities.
              </p>
              <p>
                While the book doesn't offer revolutionary new productivity concepts for those already familiar with strategic thinking, its integrated approach and clear implementation path make it valuable. The simplicity is actually its strength—it distills complex strategic principles into digestible, actionable steps that can be applied immediately.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                This book is ideal for:
              </p>
              <ul>
                <li>Professionals feeling overwhelmed by competing priorities and responsibilities</li>
                <li>Individuals at transition points seeking clarity about next steps</li>
                <li>Productivity enthusiasts wanting a structured approach to decision-making</li>
                <li>Anyone who feels busy but not particularly effective or fulfilled</li>
                <li>Leaders looking to develop more strategic thinking in their personal lives</li>
                <li>People who appreciate practical, action-oriented self-improvement books</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/atomic-habits" className="book-review-nav-button">
                Next Review: Atomic Habits
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}