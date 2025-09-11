import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function ConciseLawsOfHumanNatureReview() {
  return (
    <Layout
      title="The Concise Laws of Human Nature - Book Review"
      description="My review of The Concise Laws of Human Nature by Robert Greene - Understanding human behavior patterns and psychological tendencies."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/conciseLawsOfHumanNature.jpg"
                alt="The Concise Laws of Human Nature by Robert Greene"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/conciseLawsOfHumanNature.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">The Concise Laws of Human Nature</h1>
                <div className="book-review-author">by Robert Greene</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: April 2018</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: 8 hours</span>
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
                "The Concise Laws of Human Nature" distills Robert Greene’s insights into the patterns and motivations underlying human behavior. The book explores psychological tendencies, social dynamics, and strategies to better understand and influence people.
              </p>
              <p>
                Greene offers practical advice on reading people’s true intentions, managing emotions, and navigating social complexities, making this an essential guide for personal growth and interpersonal mastery.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p><strong>1. Human Nature is Complex</strong><br />Understanding the multifaceted nature of human drives and emotions is critical.</p>
              <p><strong>2. Awareness is Power</strong><br />Being aware of your own and others’ tendencies can help you make better decisions.</p>
              <p><strong>3. Emotional Intelligence</strong><br />Mastering emotional responses can improve relationships and influence.</p>
              <p><strong>4. Social Dynamics</strong><br />Recognizing social games and power plays can protect you from manipulation.</p>
              <p><strong>5. Self-Improvement</strong><br />Continuous reflection and growth lead to stronger character and wisdom.</p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">"The ability to see through human nature’s masks is the key to influence."</div>
              <div className="book-review-quote">"Your character is the foundation of your power."</div>
              <div className="book-review-quote">"Emotions are signals that reveal deeper truths if you learn to read them."</div>
              <div className="book-review-quote">"Understanding others starts with understanding yourself."</div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book profoundly impacted my understanding of psychology and human interactions. Robert Greene’s insights challenge you to look beyond surface behaviors and develop a deeper awareness of motivations. It encourages ongoing self-examination and growth.
              </p>
              <p>
                For anyone seeking to navigate social environments more effectively and improve themselves, this book is a powerful resource.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <ul>
                <li>Anyone interested in psychology and human behavior</li>
                <li>People looking to improve interpersonal skills and influence</li>
                <li>Those committed to personal development and self-awareness</li>
                <li>Leaders, managers, and professionals in social roles</li>
                <li>Readers of Robert Greene’s other works or similar self-improvement books</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/next-book-slug" className="book-review-nav-button">
                Next Review: [Next Book Title]
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
