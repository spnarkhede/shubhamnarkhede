import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function ShoeDogReview() {
  return (
    <Layout
      title="Shoe Dog - Book Review"
      description="My review of Shoe Dog by Phil Knight - A raw, inspiring account of Nike's tumultuous early years."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/shoe-dog.jpg"
                alt="Shoe Dog by Phil Knight" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/shoe-dog.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Shoe Dog</h1>
                <div className="book-review-author">by Phil Knight</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">February 2019</div>
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
                  <span className="book-category">Memoir</span>
                  <span className="book-category">Business</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Phil Knight's memoir "Shoe Dog" offers an unflinching look at Nike's chaotic beginnings, from selling shoes from his car trunk in 1964 to building a global empire. The book reveals how Knight navigated constant financial crises, supplier betrayals, and legal battles while fostering a culture of innovation. Far from a polished success story, it's a gripping tale of perseverance featuring eccentric characters, disastrous miscalculations, and last-minute saves that shaped athletic history.
              </p>
              <p>
                Knight's narrative captures the emotional rollercoaster of entrepreneurship - the paralyzing doubts, obsessive passion, and hard-won triumphs. The memoir doubles as a love letter to running and a testament to the power of trusting unconventional ideas.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Embrace the Grind</strong><br />
                Nike's success wasn't overnight - 14 years of near-bankruptcy, creative problem-solving, and relentless hustle.
              </p>
              <p>
                <strong>2. The Power of "Crazy Ones"</strong><br />
                Breakthrough innovations came from misfit employees encouraged to pursue seemingly irrational ideas.
              </p>
              <p>
                <strong>3. Debt as a Survival Tool</strong><br />
                Knight's creative financial maneuvering (especially with Japanese banks) kept the company afloat during cash crunches.
              </p>
              <p>
                <strong>4. Brand Over Product</strong><br />
                Early focus on storytelling and athlete partnerships (like Steve Prefontaine) built emotional consumer connections.
              </p>
              <p>
                <strong>5. Loyalty Matters</strong><br />
                Long-term relationships with early employees and partners were crucial during existential crises.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "The cowards never started and the weak died along the way. That leaves us."
              </div>
              <div className="book-review-quote">
                "Don't tell people how to do things, tell them what to do and let them surprise you with their results."
              </div>
              <div className="book-review-quote">
                "Have faith in yourself, but also have faith in faith. Not faith as others define it. Faith as you define it."
              </div>
              <div className="book-review-quote">
                "Money seems to motivate people. But when all you care about is money, you don't care about serving customers."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Reading "Shoe Dog" felt like getting a business education wrapped in an adventure novel. Knight's vulnerability about his doubts and fears made entrepreneurial success feel attainable rather than mythical. I was struck by how close Nike came to collapse multiple times - a reminder that even iconic companies have messy origin stories.
              </p>
              <p>
                The memoir inspired me to reframe challenges as necessary parts of growth rather than signs of failure. Knight's partnership with coach Bill Bowerman demonstrated the power of complementary skills - I've since been more intentional about seeking collaborators who balance my weaknesses.
              </p>
              <p>
                While the financial rollercoaster stressed me out vicariously, it highlighted the importance of creative problem-solving under pressure. The book's ending, reflecting on success's bittersweet nature, added poignant depth to the rags-to-riches narrative.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Perfect for:
              </p>
              <ul>
                <li>Aspiring entrepreneurs needing motivation</li>
                <li>Business students studying brand-building</li>
                <li>Anyone facing career or creative challenges</li>
                <li>Sports enthusiasts interested in Nike's history</li>
                <li>Readers who enjoyed "Pour Your Heart Into It" or "Elon Musk's biography"</li>
                <li>Fans of raw, unvarnished success stories</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/elon-musk" className="book-review-nav-button">
                Next Review: Elon Musk Biography
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}