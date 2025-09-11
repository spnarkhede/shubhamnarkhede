import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function CarelessPeopleReview() {
  return (
    <Layout
      title="Careless People - Book Review"
      description="My review of Careless People by Sarah Wynn-Williams - A damning exposé of corporate power and ethical failures in the tech industry."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/carelessPeople.jpg"
                alt="Careless People by Sarah Wynn-Williams" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/carelessPeople.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Careless People</h1>
                <div className="book-review-subtitle">The explosive memoir that Meta doesn't want you to read</div>
                <div className="book-review-author">by Sarah Wynn-Williams</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">April 2025</div>
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
                  <div className="book-review-rating-stars">★★★★★</div>
                  <div className="book-review-rating-value">5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Memoir</span>
                  <span className="book-category">Corporate Ethics</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Sarah Wynn-Williams' "Careless People" is a blistering insider account of her time at Meta, offering an unprecedented look at the toxic culture and ethical compromises within one of the world's most influential tech giants. The memoir reads like a corporate thriller, revealing how growth-at-all-costs mentality systematically eroded user privacy, manipulated public discourse, and prioritized profits over people.
              </p>
              <p>
                Through vivid anecdotes and documented internal communications, Wynn-Williams chronicles the company's transformation from idealistic startup to what she describes as "a data-hungry monopoly willing to sell democracy itself to the highest bidder." The book particularly focuses on the psychological toll on employees complicit in building systems they knew were harming society.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Myth of Neutral Platforms</strong><br />
                Reveals how algorithmic systems were deliberately designed to maximize engagement through outrage and polarization.
              </p>
              <p>
                <strong>2. Culture of Ethical Evasion</strong><br />
                Documents systematic suppression of internal concerns through NDAs, promoted narratives of "moving fast," and carrot/stick employee incentives.
              </p>
              <p>
                <strong>3. Data Colonialism</strong><br />
                Exposes how user data became a new form of capital, harvested and weaponized with minimal consent or transparency.
              </p>
              <p>
                <strong>4. The Human Cost</strong><br />
                Heartbreaking accounts of content moderators developing PTSD and engineers rationalizing their moral compromises.
              </p>
              <p>
                <strong>5. Regulatory Capture Playbook</strong><br />
                Details sophisticated strategies used to neuter legislation and co-opt policymakers through lobbying and "partnership" programs.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "We weren't building the future - we were mortgaging it, one attention-grabbing notification at a time."
              </div>
              <div className="book-review-quote">
                "In Silicon Valley's lexicon, 'user empowerment' meant making you feel in control while systematically removing your agency."
              </div>
              <div className="book-review-quote">
                "The most dangerous lies are those the tellers convince themselves to believe."
              </div>
              <div className="book-review-quote">
                "Our metrics measured everything except what mattered most - the human consequences of our code."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Reading "Careless People" felt like watching a slow-motion train wreck through the conductor's eyes. Wynn-Williams' unflinching honesty forced me to confront my own complicity as a tech consumer. The most chilling revelations weren't about shady backroom deals, but the mundane everyday decisions that collectively enabled systemic harm.
              </p>
              <p>
                As someone who's worked in tech, I recognized the rationalizations she describes - the "greater good" arguments used to justify ethical shortcuts. The book's greatest strength is showing how good people become collaborators in destructive systems through gradual moral compromise.
              </p>
              <p>
                While deeply unsettling, the memoir ultimately feels hopeful - a crucial step toward accountability. It's changed how I view "free" digital services and made me more proactive about digital privacy and supporting ethical alternatives.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential reading for:
              </p>
              <ul>
                <li>Anyone concerned about tech's societal impact</li>
                <li>Policymakers and regulators dealing with big tech</li>
                <li>Tech employees grappling with ethical dilemmas</li>
                <li>Journalists covering digital rights and corporate power</li>
                <li>Readers of investigative journalism and exposés</li>
                <li>Students studying business ethics or technology policy</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/silicon-sirens" className="book-review-nav-button">
                Next Review: Silicon Sirens
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}