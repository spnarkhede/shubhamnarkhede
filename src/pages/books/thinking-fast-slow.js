import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export default function ThinkingFastSlowReview() {
  return (
    <Layout
      title="Thinking, Fast and Slow - Book Review"
      description="My review of Daniel Kahneman's groundbreaking work on behavioral psychology and decision-making systems."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/thinking-fast-slow.jpg"
                alt="Thinking, Fast and Slow by Daniel Kahneman" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/thinking-fast-slow.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">Thinking, Fast and Slow</h1>
                <div className="book-review-author">by Daniel Kahneman</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">August 2020</div>
                  </div>
                  
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Reading Time
                    </div>
                    <div className="book-review-metadata-value">12 hours</div>
                  </div>
                </div>
                
                <div className="book-review-rating">
                  <div className="book-review-rating-stars">★★★★★</div>
                  <div className="book-review-rating-value">5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Psychology</span>
                  <span className="book-category">Behavioral Economics</span>
                </div>
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                Nobel laureate Daniel Kahneman's seminal work "Thinking, Fast and Slow" revolutionizes our understanding of human cognition by introducing two distinct systems that govern our thinking: 
                System 1 (fast, intuitive, and emotional) and System 2 (slow, deliberate, and logical). Through decades of research, Kahneman reveals how these systems shape our judgments and decisions, 
                often in predictably irrational ways.
              </p>
              <p>
                The book explores cognitive biases like the anchoring effect, availability heuristic, and loss aversion, demonstrating how even experts fall prey to mental shortcuts. 
                Kahneman's insights into prospect theory and happiness research challenge traditional economic models of rational decision-making, establishing behavioral economics as a vital field of study.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Two Systems of Thinking</strong><br />
                System 1 operates automatically/quickly with little effort. System 2 requires focused attention for complex computations. We default to System 1, often with problematic results.
              </p>
              <p>
                <strong>2. Cognitive Biases Are Predictable</strong><br />
                Humans consistently make irrational decisions due to mental shortcuts (heuristics) like anchoring, framing effects, and the planning fallacy.
              </p>
              <p>
                <strong>3. Prospect Theory</strong><br />
                Losses loom larger than gains. Our risk tolerance flips depending on how choices are framed (gain vs loss scenarios).
              </p>
              <p>
                <strong>4. The Illusion of Validity</strong><br />
                Experts often maintain confidence in predictions even when their accuracy doesn't exceed chance, due to coherent storytelling in hindsight.
              </p>
              <p>
                <strong>5. Importance of Slow Thinking</strong><br />
                Critical decisions benefit from engaging System 2: questioning initial impressions, statistical reasoning, and considering alternative scenarios.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Nothing in life is as important as you think it is, while you are thinking about it."
              </div>
              <div className="book-review-quote">
                "A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth."
              </div>
              <div className="book-review-quote">
                "We can be blind to the obvious, and we are also blind to our blindness."
              </div>
              <div className="book-review-quote">
                "The confidence people have in their beliefs is not a measure of the quality of evidence, but of the coherence of the story the mind has managed to construct."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Reading this book was like getting an owner's manual for the human mind. Kahneman's framework helped me recognize my own cognitive biases - I now catch myself falling for 
                the planning fallacy in projects and notice how anchoring affects my financial decisions. The concept of "What You See Is All There Is" (WYSIATI) particularly transformed 
                how I evaluate information, making me more cautious about jumping to conclusions.
              </p>
              <p>
                While intellectually demanding, the book rewards careful reading. I've applied its lessons to improve decision-making at work by implementing pre-mortem analyses 
                and challenging overconfident predictions. It's sobering yet empowering to understand the limits of our rationality.
              </p>
              <p>
                The research on experienced vs remembered happiness changed how I approach life choices. I'm more mindful about creating positive memories rather than just chasing 
                momentary pleasures, understanding how duration neglect and peak-end rules shape our retrospective evaluations.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                Essential for:
              </p>
              <ul>
                <li>Psychology and economics enthusiasts</li>
                <li>Professionals in finance, marketing, or policymaking</li>
                <li>Anyone interested in improving decision-making skills</li>
                <li>Critical thinkers wanting to understand cognitive biases</li>
                <li>Students of human behavior and rationality</li>
                <li>Readers who enjoyed "Nudge" or "Predictably Irrational"</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/sapiens" className="book-review-nav-button">
                Next Review: Sapiens
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}