import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function IndiaThatIsBharatReview() {
  return (
    <Layout
      title="India That Is Bharat - Book Review"
      description="Review of 'India that is Bharat: Coloniality, Civilisation, Constitution' by Deepak J. Sai."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/indiaThatIsBharat.jpg"
                alt="India That Is Bharat by Deepak J. Sai"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/indiaThatIsBharat.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">India That Is Bharat</h1>
                <div className="book-review-author">by Deepak J. Sai</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: May 2024</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~10 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★★</div>
                  <div className="book-review-rating-value">5/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Constitution</span>
                  <span className="book-category">Indian History</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>India that is Bharat</strong> is a deeply researched and thought-provoking examination of India’s constitutional development through the lens of civilizational identity and colonial influence. The author challenges mainstream narratives and questions whether the Constitution truly reflects the ethos of Bharat or continues to carry the remnants of coloniality.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Themes</h2>
              <ul>
                <li><strong>Colonial Continuities:</strong> How British frameworks and ideologies persist in independent India’s governance.</li>
                <li><strong>Civilizational Identity:</strong> The tension between India’s ancient cultural traditions and the modern, Westernized state structure.</li>
                <li><strong>Constitutional Reassessment:</strong> A call to introspect and realign legal-political systems with indigenous knowledge and societal values.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “The Constitution was drafted in English, debated in English, and passed in English – but governs a civilizational society rooted in Sanskrit.”
              </div>
              <div className="book-review-quote">
                “Decolonization is not a legal exercise; it is a civilizational imperative.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book expanded my understanding of India beyond the post-1947 narrative. It forces the reader to confront uncomfortable truths about how colonial mindsets may still shape our institutions. It was intellectually demanding yet highly rewarding, and I would recommend it to anyone passionate about Bharat’s true identity.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Students and scholars of Indian history, law, and governance</li>
                <li>Readers exploring India’s civilizational roots</li>
                <li>Anyone interested in decolonial and indigenous frameworks</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/bharat-ek-nayi-soch" className="book-review-nav-button">
                Next Review: Bharat Ek Nayi Soch
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
