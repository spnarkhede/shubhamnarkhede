import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function UsHistory101Review() {
  return (
    <Layout
      title="U.S. History 101 - Book Review"
      description="My review of U.S. History 101 by Kathleen Sears – A foundational guide to understanding American history from its roots to the modern era."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/usHistory101.jpg"
                alt="U.S. History 101 by Kathleen Sears"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/usHistory101.jpg";
                }}
              />

              <div className="book-review-info">
                <h1 className="book-review-title">U.S. History 101</h1>
                <div className="book-review-author">by Kathleen Sears</div>

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
                    <div className="book-review-metadata-value">6 hours</div>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">History</span>
                  <span className="book-category">Education</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                "U.S. History 101" provides a clear and engaging overview of key events, figures, and movements that have shaped the United States. From colonization and revolution to civil rights and globalization, Kathleen Sears distills complex history into digestible, informative chapters that are perfect for beginners and enthusiasts alike.
              </p>
              <p>
                This book serves both as a refresher for those who studied American history long ago and as an introduction for anyone curious about how the United States became what it is today.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Foundational Events Matter</strong><br />
                Understanding the American Revolution, Constitution, and early governance provides context for every later development.
              </p>
              <p>
                <strong>2. Conflict Shapes History</strong><br />
                Civil War, World Wars, and internal political shifts all played defining roles in shaping modern America.
              </p>
              <p>
                <strong>3. Civil Rights is an Ongoing Journey</strong><br />
                The evolution of civil rights highlights both progress and the challenges that remain.
              </p>
              <p>
                <strong>4. Economic Booms & Busts Leave Lasting Effects</strong><br />
                From the Great Depression to post-WWII prosperity and the 2008 crisis, economic patterns deeply affect national policy and social structure.
              </p>
              <p>
                <strong>5. Immigration is Central to U.S. Identity</strong><br />
                Waves of immigration have continually reshaped the nation’s demographics and culture.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "The United States was not born in perfection, but in purpose — to continually strive toward a more perfect union."
              </div>
              <div className="book-review-quote">
                "History doesn't repeat itself, but it often rhymes — understanding the past helps decode the present."
              </div>
              <div className="book-review-quote">
                "Each generation defines freedom through its own lens, shaped by its challenges and triumphs."
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book rekindled my appreciation for how layered and intricate the American story is. Reading it made me realize how much of history gets overlooked in simplified classroom teachings. It deepened my respect for the struggles faced by various groups and how policy, power, and resistance intersect over time.
              </p>
              <p>
                While the format was textbook-like, it never felt dull. Instead, it sparked curiosity and offered just enough detail without overwhelming the reader. I often found myself researching topics it introduced, wanting to go deeper.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                This book is perfect for:
              </p>
              <ul>
                <li>Students or adults revisiting U.S. history</li>
                <li>Immigrants or non-Americans seeking cultural context</li>
                <li>History buffs looking for a concise U.S. overview</li>
                <li>Writers, educators, or content creators seeking quick historical references</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/vaidik-dincharya-rituals" className="book-review-nav-button">
                Next Review: Vaidik Dincharya
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
