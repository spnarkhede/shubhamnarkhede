import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function HindusInHinduRashtraReview() {
  return (
    <Layout
      title="Hindus in Hindu Rashtra - Book Review"
      description="Review of Anand Ranganathan's provocative book on the socio-political status of Hindus in India."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/hindusInHinduRashtra.jpg"
                alt="Hindus in Hindu Rashtra by Anand Ranganathan"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/hindusInHinduRashtra.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">
                  Hindus in Hindu Rashtra
                </h1>
                <div className="book-review-author">by Anand Ranganathan</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: March 2024</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: 6.5 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Politics</span>
                  <span className="book-category">Indian Society</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                In <strong>Hindus in Hindu Rashtra</strong>, Anand Ranganathan presents a bold critique of India's socio-political landscape, examining the perceived marginalization of Hindus despite India being labeled a Hindu-majority country. The book confronts popular narratives and challenges deeply embedded institutional practices.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Themes</h2>
              <p><strong>1. State-Sanctioned Discrimination:</strong> The author argues that legal and administrative systems have institutionalized unequal treatment.</p>
              <p><strong>2. Media Narratives vs. Ground Reality:</strong> A comparison of prevailing media portrayals with real socio-political issues faced by Hindus.</p>
              <p><strong>3. Historical Context:</strong> How India's post-independence policy framework shaped current perceptions and policies.</p>
              <p><strong>4. Political Hypocrisy:</strong> Discrepancies in how minority and majority rights are debated and implemented.</p>
              <p><strong>5. The Call for Equal Rights:</strong> A plea for a truly secular and just society free from vote-bank politics.</p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                "India is perhaps the only country where the majority is treated as a second-class citizen."
              </div>
              <div className="book-review-quote">
                "When secularism becomes selective, it stops being secular."
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book was intellectually stimulating and emotionally stirring. While provocative, it compels one to re-evaluate assumptions about equality and secularism in modern India. It is a vital read for anyone interested in Indian politics, regardless of ideological stance.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Readers interested in Indian politics and social justice</li>
                <li>Policy makers and academics exploring secularism and minority rights</li>
                <li>Anyone open to critical perspectives on popular narratives</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/boss-basics-of-sanatan-sanskriti" className="book-review-nav-button">
                Next Review: B.O.S.S. Basics of Sanatan Sanskriti
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
