import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function InvisibleWomenReview() {
  return (
    <Layout
      title="Invisible Women - Book Review"
      description="Review of 'Invisible Women: Exposing Data Bias in a World Designed for Men' by Caroline Criado-Perez."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img
                src="/img/books/invisibleWomen.jpg"
                alt="Invisible Women by Caroline Criado-Perez"
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/books/invisibleWomen.jpg";
                }}
              />
              <div className="book-review-info">
                <h1 className="book-review-title">Invisible Women</h1>
                <div className="book-review-author">by Caroline Criado-Perez</div>

                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Read Date: August 2023</span>
                  </div>
                  <div className="book-review-metadata-item">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    <span>Reading Time: ~9 hours</span>
                  </div>
                </div>

                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★★</div>
                  <div className="book-review-rating-value">5/5</div>
                </div>

                <div className="book-review-categories">
                  <span className="book-category">Feminism</span>
                  <span className="book-category">Sociology</span>
                </div>
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                <strong>Invisible Women</strong> is a groundbreaking examination of how data bias against women permeates nearly every aspect of modern life. Caroline Criado-Perez exposes the ways in which systems—from urban planning to medical research—are designed around a male default, with real consequences for women globally.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Themes</h2>
              <ul>
                <li><strong>Gender Data Gap:</strong> The systematic exclusion of women in data collection and analysis.</li>
                <li><strong>Everyday Inequity:</strong> How urban design, workplace tools, and safety equipment disadvantage women.</li>
                <li><strong>Healthcare Disparities:</strong> The lack of female representation in clinical trials and diagnostics.</li>
              </ul>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Notable Quotes</h2>
              <div className="book-review-quote">
                “When we exclude half of humanity from the analysis, we risk creating a world that is literally less fit for women to live in.”
              </div>
              <div className="book-review-quote">
                “Data is not just about numbers. It’s about whose voices count—and whose are ignored.”
              </div>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                This book was both eye-opening and infuriating. It made me question assumptions about neutrality in data and highlighted how even seemingly objective systems can reinforce gender inequality. It’s a call to action for more inclusive design, research, and policymaking.
              </p>
            </div>

            <div className="book-review-section">
              <h2 className="book-review-section-title">Recommended For</h2>
              <ul>
                <li>Professionals in data science, urban planning, and healthcare</li>
                <li>Advocates for gender equality and inclusive policy</li>
                <li>Anyone who wants to understand how bias is built into the world around us</li>
              </ul>
            </div>

            <div className="book-review-navigation">
              <Link to="/books/ikigai-the-japanese-secret" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Previous Review: Ikigai
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
