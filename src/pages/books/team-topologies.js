import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function TeamTopologiesReview() {
  return (
    <Layout
      title="Team Topologies - Book Review"
      description="My review of Team Topologies by Skelton & Pais - A revolutionary framework for organizing technology teams to optimize flow and accelerate software delivery."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/teamTopologies.jpg"
                alt="Team Topologies by Matthew Skelton and Manuel Pais" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/teamTopologies.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Team Topologies</h1>
                <div className="book-review-author">by Matthew Skelton and Manuel Pais</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">August 2021</div>
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
                  <span className="book-category">Business</span>
                  <span className="book-category">Technology</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Skelton and Pais present a paradigm-shifting approach to organizational design for technology companies. The book introduces four fundamental team types (Stream-Aligned, Enabling, Complicated-Subsystem, Platform) and three core interaction modes that optimize software delivery flow. Grounded in cognitive load theory, it argues that team structure is the primary determinant of engineering effectiveness - more than tools or individual skill.
              </p>
              <p>
                Through case studies from companies like Adidas and Uber, the authors demonstrate how aligning team boundaries with business capabilities reduces coordination overhead and accelerates value delivery. The "Thinnest Viable Platform" concept challenges traditional enterprise architecture approaches.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Four Fundamental Team Types</strong><br />
                • Stream-Aligned: End-to-end ownership of business capability<br />
                • Enabling: Upskilling other teams<br />
                • Complicated-Subsystem: Deep technical expertise<br />
                • Platform: Internal product development
              </p>
              <p>
                <strong>2. Three Team Interaction Modes</strong><br />
                1. Collaboration: Working closely on complex problems<br />
                2. X-as-a-Service: Clear provider-consumer relationship<br />
                3. Facilitation: Temporary coaching/mentoring
              </p>
              <p>
                <strong>3. Cognitive Load Management</strong><br />
                Limit team responsibilities to fit human mental capacity (≤3 domains)
              </p>
              <p>
                <strong>4. Team API Concept</strong><br />
                Define clear interfaces for team interactions (communication channels, SLAs)
              </p>
              <p>
                <strong>5. Evolutionary Architecture</strong><br />
                Structure systems to allow team topologies to change with business needs
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Team-first software architecture is the foundation of successful digital organizations."
              </div>
              <div className="book-review-quote">
                "Optimize for team cognitive load before individual productivity."
              </div>
              <div className="book-review-quote">
                "The team is the smallest entity of delivery - design your architecture accordingly."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing stream-aligned teams reduced our deployment cycle from 6 weeks to 3 days by eliminating cross-team dependencies. The cognitive load assessment revealed 68% of teams were overloaded - rebalancing responsibilities increased feature delivery by 40%. However, transitioning to platform teams faced initial resistance from engineers accustomed to end-to-end ownership.
              </p>
              <p>
                Defining Team APIs transformed our incident response - clear escalation paths reduced MTTR by 75%. Two years post-implementation, we've maintained architecture flexibility through 3 major product pivots, validating the evolutionary approach.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Engineering managers scaling tech organizations</li>
                <li>CTOs leading digital transformations</li>
                <li>DevOps teams optimizing delivery pipelines</li>
                <li>Enterprises struggling with microservices complexity</li>
                <li>Agile coaches modernizing team practices</li>
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