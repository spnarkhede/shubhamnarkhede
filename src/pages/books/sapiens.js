import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function SapiensReview() {
  return (
    <Layout
      title="Sapiens - Book Review"
      description="My review of Sapiens by Yuval Noah Harari - A sweeping exploration of human history and its defining revolutions."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/sapiens.jpg"
                alt="Sapiens by Yuval Noah Harari" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/sapiens.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Sapiens</h1>
                <div className="book-review-author">by Yuval Noah Harari</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">October 2019</div>
                  </div>
                  
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">10 hours</div>
                  </div>
                </div>
                
                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★½</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">History</span>
                  <span className="book-category">Anthropology</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                In "Sapiens: A Brief History of Humankind," Yuval Noah Harari takes readers on an epic journey through 70,000 years of human evolution. The book examines how Homo sapiens rose from insignificant apes to planetary dominators through three major revolutions: 
                the Cognitive Revolution (70,000 BCE), Agricultural Revolution (10,000 BCE), and Scientific Revolution (1500 CE). Harari challenges conventional narratives by exploring how shared myths - money, gods, nations, and human rights - became the glue of large-scale human cooperation.
              </p>
              <p>
                Blending biology, anthropology, and economics, Harari questions whether human progress has truly increased happiness. The book culminates in provocative speculations about humanity's future in an age of genetic engineering and artificial intelligence.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. The Power of Shared Fiction</strong><br />
                Human dominance stems from our unique ability to believe in abstract concepts that enable mass cooperation (religions, nations, money).
              </p>
              <p>
                <strong>2. Agriculture's Double-Edged Sword</strong><br />
                The Agricultural Revolution allowed population growth but created hierarchies and worse living conditions for most individuals.
              </p>
              <p>
                <strong>3. Imperialism's Lasting Impact</strong><br />
                Modern global culture emerged from centuries of imperial expansion and cultural homogenization.
              </p>
              <p>
                <strong>4. The Science Revolution Paradox</strong><br />
                Scientific progress was fueled by imperialist ambitions, yet created unprecedented human capabilities.
              </p>
              <p>
                <strong>5. The Future of Homo Sapiens</strong><br />
                We may be evolving into a new species through genetic engineering and AI integration, challenging what it means to be human.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "We did not domesticate wheat. It domesticated us."
              </div>
              <div className="book-review-quote">
                "Money is the most universal and most efficient system of mutual trust ever devised."
              </div>
              <div className="book-review-quote">
                "History is something that very few people have been doing while everyone else was ploughing fields and carrying water buckets."
              </div>
              <div className="book-review-quote">
                "Happiness begins within."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                "Sapiens" fundamentally altered my understanding of human civilization. Harari's concept of "shared myths" helped me see modern institutions as collective fictions - liberating in recognizing their malleability, yet terrifying in understanding their power. The agricultural revolution analysis made me reconsider romanticized notions of pre-modern life.
              </p>
              <p>
                While I occasionally questioned Harari's sweeping generalizations, his interdisciplinary approach connected dots between fields I'd never considered related. The book's examination of capitalism as a religion-like system particularly resonated, influencing how I analyze economic trends.
              </p>
              <p>
                The final sections on transhumanism left me equal parts excited and apprehensive. It's changed how I view current debates about AI ethics and genetic engineering, framing them as evolutionary crossroads rather than mere technical challenges.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Perfect for:
              </p>
              <ul>
                <li>History enthusiasts seeking big-picture perspectives</li>
                <li>Readers interested in anthropology/sociology</li>
                <li>Those questioning modern societal structures</li>
                <li>Futurists and technology observers</li>
                <li>Philosophy students exploring human nature</li>
                <li>Anyone who enjoyed "Guns, Germs, and Steel"</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/guns-germs-steel" className="book-review-nav-button">
                Next Review: Guns, Germs, and Steel
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}