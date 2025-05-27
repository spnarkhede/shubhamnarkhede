import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function ConciseStrategiesOfWarReview() {
  return (
    <Layout
      title="The Concise Strategies of War - Book Review"
      description="Review of The Concise Strategies of War by Robert Greene — Timeless tactics and military strategies adapted for modern challenges and life situations."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/conciseStrategiesOfWar.jpg"
                alt="The Concise Strategies of War by Robert Greene"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/conciseStrategiesOfWar.jpg";
                }}
              />

              <div className="book-review-info">
                <h1 className="book-review-title">The Concise Strategies of War</h1>
                <div className="book-review-author">by Robert Greene</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">March 2018</div>
                  </div>

                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">4.5 hours</div>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★½</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Strategy</span>
                  <span className="book-category">History</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Robert Greene’s "The Concise Strategies of War" distills essential strategic concepts from great military minds and historical battles into a compact, potent guide for navigating modern challenges. Drawing on Sun Tzu, Napoleon, and other historical figures, Greene presents warfare as a metaphor for everyday struggles in business, relationships, and life.
              </p>
              <p>
                This condensed version is ideal for readers who seek practical wisdom without the density of the original "33 Strategies of War." It emphasizes mental sharpness, foresight, discipline, and adaptability.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Always Define the Battlefield</strong><br />
                Don't react to others' moves — shape the terrain and timing of conflict to your advantage.
              </p>
              <p>
                <strong>2. Know Your Enemies (and Allies)</strong><br />
                Understanding motivations and patterns makes opponents predictable and manageable.
              </p>
              <p>
                <strong>3. Control Perception</strong><br />
                Strategy often involves illusion, distraction, and psychological maneuvering.
              </p>
              <p>
                <strong>4. Use the Indirect Path</strong><br />
                Direct confrontation is not always effective. Subtlety and misdirection win wars.
              </p>
              <p>
                <strong>5. Never Fight the Last War</strong><br />
                What worked once may not work again. Strategy must evolve with context.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "The greatest victory is the one that requires no battle."
              </div>
              <div className="book-review-quote">
                "Your enemies will never be content to watch you grow stronger; they will provoke you — but don't respond in kind."
              </div>
              <div className="book-review-quote">
                "Strike the shepherd and the sheep will scatter."
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Greene’s work challenged me to view conflict more strategically — not just as confrontation but as an art of patience, planning, and perspective. This book was a wake-up call to approach challenges with more discipline, understanding the terrain of relationships, business decisions, and even personal goals.
              </p>
              <p>
                The historical examples made the abstract concepts tangible. I found myself reflecting on how often we enter situations unprepared, emotionally reactive, or trapped in outdated approaches. This book reminded me of the power of clarity and composure.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>This book is ideal for:</p>
              <ul>
                <li>Entrepreneurs, managers, or strategists seeking an edge</li>
                <li>Fans of Sun Tzu, Machiavelli, or military history</li>
                <li>Anyone facing recurring life or career challenges</li>
                <li>Readers looking for condensed wisdom with practical use</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/u.s.history-101" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: U.S. History 101
              </Link>
              <Link to="/books" className="book-review-nav-button">
                Back to All Books
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
