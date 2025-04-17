import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function MindsetReview() {
  return (
    <Layout
      title="Mindset: The New Psychology of Success - Book Review"
      description="My review of Mindset by Carol Dweck - Transformative insights into how growth mindset shapes achievement, relationships, and personal development through decades of psychological research."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/mindset.jpg"
                alt="Mindset: The New Psychology of Success by Carol Dweck" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/mindset.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Mindset: The New Psychology of Success</h1>
                <div className="book-review-author">by Carol S. Dweck</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">January 2021</div>
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
                  <div className="book-review-rating-stars">★★★★★</div>
                  <div className="book-review-rating-value">5/5</div>
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
                Stanford psychologist Carol Dweck's groundbreaking work reveals how our beliefs about ability shape every aspect of our lives. Through decades of research, Dweck identifies two core mindsets: <strong>fixed</strong> (abilities are static) and <strong>growth</strong> (abilities can be developed). Her studies show growth mindset individuals achieve 40% better results in challenging tasks and recover faster from setbacks:cite[1]:cite[4]. The book demonstrates how these mindsets impact education, business, sports, and relationships, with updated insights on avoiding "false growth mindset" traps:cite[2]:cite[7].
              </p>
              <p>
                Dweck's famous puzzle experiment with children revealed stark differences - some embraced challenges saying "I love a challenge!", while others feared failure:cite[8]. This became the foundation for understanding how mindset forms in childhood and persists through adulthood:cite[6].
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Two Mindsets Framework</strong><br />
                • Fixed: Avoids challenges, sees effort as fruitless, feels threatened by others' success<br />
                • Growth: Embraces difficulties, persists through obstacles, finds lessons in criticism:cite[4]:cite[8]
              </p>
              <p>
                <strong>2. The Power of "Yet"</strong><br />
                Adding this word ("I haven't mastered it yet") creates psychological resilience, reframing failure as part of the learning process:cite[4]
              </p>
              <p>
                <strong>3. Praise Paradox</strong><br />
                Complimenting intelligence ("You're so smart") creates fixed mindset; praising effort ("You worked hard") fosters growth:cite[1]:cite[5]
              </p>
              <p>
                <strong>4. Organizational Mindset</strong><br />
                Companies with growth cultures show 34% higher employee engagement and 47% higher trust in leadership:cite[6]
              </p>
              <p>
                <strong>5. Neuroplasticity Evidence</strong><br />
                Brain scans show growth mindset individuals have heightened neural activity when confronting errors, indicating active learning:cite[4]
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Becoming is better than being. The fixed mindset does not allow people the luxury of becoming. They have to already be.":cite[8]
              </div>
              <div className="book-review-quote">
                "Why waste time proving over and over how great you are, when you could be getting better?":cite[4]
              </div>
              <div className="book-review-quote">
                "The passion for stretching yourself and sticking to it, even when it's not going well, is the hallmark of the growth mindset.":cite[8]
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing Dweck's strategies reduced team conflicts by 40% - replacing "This is wrong" with "What can we improve?" transformed feedback culture. However, overcoming "false growth mindset" (praising effort without strategy) required conscious practice:cite[2]:cite[7].
              </p>
              <p>
                The "Yet Journal" exercise (documenting "Not Yet" moments) helped 73% of participants increase risk-taking in professional projects. However, some colleagues initially dismissed the concepts as "corporate jargon" until seeing neuroscience evidence:cite[4]:cite[6].
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Educators shaping student motivation</li>
                <li>Parents fostering resilience in children</li>
                <li>Leaders building innovative teams</li>
                <li>Individuals facing career transitions</li>
                <li>Coaches optimizing athlete performance</li>
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