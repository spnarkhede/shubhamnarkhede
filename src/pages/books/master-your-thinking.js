import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function MasterYourThinkingReview() {
  return (
    <Layout
      title="Master Your Thinking - Book Review"
      description="Review of 'Master Your Thinking' by Thibaut Meurisse."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/masterYourThinking.jpg"
                alt="Master Your Thinking by Thibaut Meurisse"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/masterYourThinking.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Master Your Thinking</h1>
                <div className="book-review-author">by Thibaut Meurisse</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: December 2020</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~4–5 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★½</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Psychology</span>
                  <span className="book-category">Critical Thinking</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>Master Your Thinking</strong> is a concise and actionable guide to strengthening your thinking patterns, identifying mental distortions, and improving clarity in decision-making. Thibaut Meurisse lays out a simple framework to help readers replace destructive thought habits with more constructive and empowering mental routines.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <ul>
                <li><strong>Your thoughts shape your outcomes:</strong> Becoming aware of your inner narrative is the first step toward change.</li>
                <li><strong>Challenge automatic thinking:</strong> Most mental errors stem from unconscious or conditioned patterns that need deliberate rewiring.</li>
                <li><strong>Clarity through simplicity:</strong> Reduce cognitive overload by simplifying decisions and focusing on what truly matters.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “The quality of your thinking determines the quality of your life.”
              </div>
              <div className="book-review-quote">
                “To master your mind, start by observing it without judgment.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book gave me a toolkit to declutter my thoughts and evaluate ideas with greater objectivity. I found myself more mindful of how I was interpreting situations and better able to shift perspectives. It's a valuable read for those seeking to upgrade their cognitive habits in a noisy, reactive world.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Anyone who feels mentally stuck or overwhelmed</li>
                <li>Readers wanting to build stronger critical thinking habits</li>
                <li>People who struggle with overthinking or indecision</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/master-your-motivation" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Master Your Motivation
              </Link>
              <Link to="/books/master-your-emotions" className="book-review-nav-button">
                Next Review: Master Your Emotions
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
