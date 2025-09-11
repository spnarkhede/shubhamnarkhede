import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function AmericanGovernment101Review() {
  return (
    <Layout
      title="American Government 101 - Book Review"
      description="My review of American Government 101 by Kathleen Sears - A concise overview of American governmental structures and processes."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/americanGovernment101.jpg"
                alt="American Government 101 by Kathleen Sears"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/americanGovernment101.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">American Government 101</h1>
                <div className="book-review-author">by Kathleen Sears</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: September 2019</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: 5 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★☆</div>
                  <div className="book-review-rating-value">4/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Politics</span>
                  <span className="book-category">Education</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                "American Government 101" provides a clear and concise overview of the structures, roles, and processes of the U.S. government. The book covers the legislative, executive, and judicial branches, as well as elections, federalism, and policy-making.
              </p>
              <p>
                It's an accessible guide for anyone seeking to understand how American democracy functions at various levels.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p><strong>1. Three Branches of Government</strong><br />Checks and balances keep power separated and accountable.</p>
              <p><strong>2. Federalism</strong><br />The division of power between federal and state governments is complex but crucial.</p>
              <p><strong>3. Electoral Process</strong><br />Elections shape governance through voter participation and representation.</p>
              <p><strong>4. Policy-Making</strong><br />Multiple actors influence legislation, including interest groups and the public.</p>
              <p><strong>5. Civic Engagement</strong><br />Understanding government processes empowers citizens.</p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">"Democracy thrives when citizens know the rules of the game."</div>
              <div className="book-review-quote">"Checks and balances ensure no single branch dominates the political landscape."</div>
              <div className="book-review-quote">"Active participation is the lifeblood of effective governance."</div>
              <div className="book-review-quote">"Understanding federalism helps citizens grasp the layered nature of power."</div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book was an enlightening read that demystified many aspects of American government for me. It helped me appreciate the balance of power and the importance of civic awareness in preserving democracy.
              </p>
              <p>
                I recommend this book to anyone interested in politics or wanting a foundational knowledge of U.S. governance.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <ul>
                <li>Students and newcomers to political science</li>
                <li>Citizens seeking better understanding of U.S. government</li>
                <li>Anyone interested in the democratic process</li>
                <li>Educators looking for clear teaching material</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/u.s.history-101" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: U.S. History 101
              </Link>
              <Link to="/books/stock-market-101" className="book-review-nav-button">
                Next Review: Stock Market 101
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
