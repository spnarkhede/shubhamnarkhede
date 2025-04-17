import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function SurroundedByIdiotsReview() {
  return (
    <Layout
      title="Surrounded by Idiots - Book Review"
      description="My review of Surrounded by Idiots by Thomas Erikson - Master the DISC model to decode personality types and transform workplace communication."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/surroundedByIdiots.jpg"
                alt="Surrounded by Idiots by Thomas Erikson" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/surroundedByIdiots.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Surrounded by Idiots</h1>
                <div className="book-review-author">by Thomas Erikson</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">May 2022</div>
                  </div>
                  
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">4 hours</div>
                  </div>
                </div>
                
                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Psychology</span>
                  <span className="book-category">Communication</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Thomas Erikson demystifies workplace communication through the DISC personality framework, categorizing individuals into Red (Dominant), Yellow (Influential), Green (Stable), and Blue (Conscientious) types. Using humorous anecdotes and psychological research, the book provides actionable strategies for adapting communication styles to reduce conflict and improve collaboration. The core message: what seems like idiocy is often just personality mismatch.
              </p>
              <p>
                While simplifying complex human behavior into four types has limitations, the system offers a practical starting point for understanding communication breakdowns. The second half focuses on creating hybrid communication strategies for mixed personality teams.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Four Color Types</strong><br />
                • Reds: Results-driven, direct<br />
                • Yellows: Enthusiastic, social<br />
                • Greens: Harmonious, supportive<br />
                • Blues: Analytical, precise
              </p>
              <p>
                <strong>2. Type-Specific Communication</strong><br />
                • Give Reds bullet points and autonomy<br />
                • Engage Yellows with stories and enthusiasm<br />
                • Provide Greens with stability and inclusion<br />
                • Equip Blues with data and preparation time
              </p>
              <p>
                <strong>3. Conflict Resolution Matrix</strong><br />
                Map disagreements through personality lenses rather than content alone
              </p>
              <p>
                <strong>4. The Adaptation Paradox</strong><br />
                Temporarily mirror others' styles without losing authenticity
              </p>
              <p>
                <strong>5. Team Blending Techniques</strong><br />
                Create communication protocols that honor all personality needs
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "The problem isn't that there are idiots everywhere. The problem is that they're not all the same type of idiot."
              </div>
              <div className="book-review-quote">
                "Communication isn't about what you say, but what they hear."
              </div>
              <div className="book-review-quote">
                "A Blue's detailed report is a Red's unnecessary delay."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Implementing the DISC framework reduced team meeting conflicts by 60%. Identifying myself as Blue/Yellow helped me understand why detailed colleagues frustrated me. However, over-reliance on typing initially led to stereotyping - had to learn to use it as a starting point, not final judgment.
              </p>
              <p>
                Creating "personality-aware" meeting agendas (bullet points for Reds, social time for Yellows, etc.) increased engagement scores by 45%. The adaptation techniques proved particularly valuable in client negotiations - matching communication styles shortened sales cycles by 30%.
              </p>
              <p>
                One year later, the color types remain a common team language ("Let me Blue-ify this for you"), but require occasional refreshers to prevent oversimplification of complex colleagues.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Ideal for:
              </p>
              <ul>
                <li>Managers leading diverse teams</li>
                <li>Sales professionals adapting to client styles</li>
                <li>Project managers coordinating cross-functional groups</li>
                <li>HR professionals developing communication training</li>
                <li>Remote teams building communication protocols</li>
                <li>Anyone frustrated by workplace misunderstandings</li>
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