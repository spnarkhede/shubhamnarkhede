import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function VaidikDincharyaRitualsReview() {
  return (
    <Layout
      title="Vaidik Dincharya - Book Review"
      description="My review of Vaidik Dincharya by Prateeik Prajapati - A spiritual guide to daily Vedic routines and rituals for a balanced and meaningful life."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/vaidikDincharya.jpg"
                alt="Vaidik Dincharya by Prateeik Prajapati" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/vaidikDincharya.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Vaidik Dincharya: Rituals, Routines & Shlokas for Ideal Life</h1>
                <div className="book-review-author">by Prateeik Prajapati</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">March 2024</div>
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
                  <span className="book-category">Spirituality</span>
                  <span className="book-category">Lifestyle</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                "Vaidik Dincharya" offers a deep dive into daily Vedic routines, ancient rituals, and lifestyle disciplines that promote physical, mental, and spiritual well-being. Prateeik Prajapati presents timeless wisdom in a modern format, explaining the significance of each practice and mantra in the context of leading an ideal life.
              </p>
              <p>
                From early morning prayers to evening reflections, the book is structured as a practical guide for aligning one’s day with the rhythms of nature and the teachings of the Vedas. Shlokas, chants, and their meanings are interwoven throughout, enriching the reader’s spiritual journey.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Start the Day with Brahma Muhurta</strong><br />
                Waking up before sunrise aligns your energy with nature and enhances clarity, discipline, and peace.
              </p>
              <p>
                <strong>2. Importance of Dincharya</strong><br />
                A structured daily routine cultivates stability, health, and purpose through consistency.
              </p>
              <p>
                <strong>3. Role of Mantras & Shlokas</strong><br />
                Chanting sacred verses anchors the mind and invites divine consciousness into daily life.
              </p>
              <p>
                <strong>4. Align with Nature's Cycles</strong><br />
                Eating, working, and resting in harmony with the sun and moon rhythms fosters balance and vitality.
              </p>
              <p>
                <strong>5. Daily Rituals as Spiritual Anchors</strong><br />
                Simple acts like lighting a diya or meditating become gateways to self-awareness and mindfulness.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "A day lived in tune with the Vedas is a day lived in tune with your true self."
              </div>
              <div className="book-review-quote">
                "Discipline is not restriction—it is freedom through alignment with Dharma."
              </div>
              <div className="book-review-quote">
                "When the body moves in rhythm with rituals, the soul begins to dance with peace."
              </div>
              <div className="book-review-quote">
                "Every shloka is a vibration—a sound that brings you closer to silence within."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                "Vaidik Dincharya" served as a reminder of the spiritual potential embedded in our everyday actions. It reconnected me with long-forgotten rituals I saw elders perform, giving them new relevance in my modern routine.
              </p>
              <p>
                Implementing the early morning practices and mindful eating principles made a tangible difference in my energy and focus. The explanations of shlokas helped me move from mere recitation to heartfelt engagement.
              </p>
              <p>
                While some of the Sanskrit terms required effort to understand, the book’s layout and clarity made it approachable. It’s a guide I’ll revisit again and again.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                This book is ideal for:
              </p>
              <ul>
                <li>Spiritual seekers looking for a structured daily path</li>
                <li>Anyone interested in Vedic culture and lifestyle</li>
                <li>Readers wanting to integrate mindfulness into daily life</li>
                <li>Practitioners of yoga or Ayurveda</li>
                <li>Those seeking inner balance through ancient wisdom</li>
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
