import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import SpotifyPodcast from '@site/src/components/SpotifyPodcast';

export default function PsychologyOfMoneyReview() {
  return (
    <Layout
      title="The Psychology of Money - Book Review"
      description="My review of The Psychology of Money by Morgan Housel - Timeless lessons on wealth, greed, and happiness."
    >
      <div className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="book-review-header">
              <img 
                src="/img/books/psychologyOfMoney.jpg"
                alt="The Psychology of Money by Morgan Housel" 
                className="book-review-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/books/psychologyOfMoney.jpg";
                }}
              />
              
              <div className="book-review-info">
                <h1 className="book-review-title">The Psychology of Money</h1>
                <div className="book-review-author">by Morgan Housel</div>
                
                <div className="book-review-metadata">
                  <div className="book-review-metadata-item">
                    <div className="book-review-metadata-label">
                      <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      Read Date
                    </div>
                    <div className="book-review-metadata-value">March 2022</div>
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
                  <div className="book-review-rating-stars">★★★★½</div>
                  <div className="book-review-rating-value">4.5/5</div>
                </div>
                
                <div className="book-review-categories">
                  <span className="book-category">Finance</span>
                  <span className="book-category">Psychology</span>
                  <span className="book-category">Personal Development</span>
                </div>
              </div>
            </div>
            
            <SpotifyPodcast 
              spotifyUrl="https://open.spotify.com/episode/7y0JtpMTdvYYhZPGiRBOkS"
              title="The Psychology of Money with Morgan Housel"
            />
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Summary</h2>
              <p>
                "The Psychology of Money" by Morgan Housel explores the complex relationship between humans and money through 19 short stories, each highlighting a different aspect of our financial behavior. Rather than focusing on technical investment strategies, Housel delves into the psychological and emotional factors that influence our financial decisions.
              </p>
              <p>
                The book argues that financial success isn't necessarily about what you know, but about how you behave. Housel emphasizes that being reasonable is more important than being rational when it comes to managing money. Through historical examples and personal anecdotes, he illustrates how our backgrounds, worldviews, ego, pride, marketing, and odd incentives influence our thoughts and behaviors around money.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Key Takeaways</h2>
              <p>
                <strong>1. Financial Decisions Are Personal</strong><br />
                No single financial strategy works for everyone because our decisions are influenced by our unique experiences, values, and goals.
              </p>
              <p>
                <strong>2. Compounding Is Powerful</strong><br />
                The most powerful force in investing is compound interest over long periods. Patience and consistency often outperform brilliance and timing.
              </p>
              <p>
                <strong>3. Reasonable > Rational</strong><br />
                Making reasonable financial decisions that you can stick with is more important than making mathematically optimal decisions that cause stress or anxiety.
              </p>
              <p>
                <strong>4. Wealth Is What You Don't See</strong><br />
                True wealth is the money not spent—the financial assets that haven't been converted into visible status symbols.
              </p>
              <p>
                <strong>5. Plan for Uncertainty</strong><br />
                Financial planning should account for the unexpected. Having a margin of safety is crucial for long-term success.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Favorite Quotes</h2>
              <div className="book-review-quote">
                "Doing well with money has a little to do with how smart you are and a lot to do with how you behave."
              </div>
              <div className="book-review-quote">
                "The highest form of wealth is the ability to wake up every morning and say, 'I can do whatever I want today.'"
              </div>
              <div className="book-review-quote">
                "Wealth is what you don't see. It's the cars not purchased. The diamonds not bought. The renovations postponed, the clothes forgone and the first-class upgrade declined."
              </div>
              <div className="book-review-quote">
                "Good investing is not necessarily about making good decisions. It's about consistently not screwing up."
              </div>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Personal Reflection</h2>
              <p>
                Reading "The Psychology of Money" was eye-opening for me. Housel's perspective on wealth as the money not spent—rather than the possessions accumulated—fundamentally shifted how I think about financial success. I've since become more conscious of the difference between displaying wealth and building actual financial security.
              </p>
              <p>
                The concept that resonated most with me was the idea that financial decisions are deeply personal. I've stopped comparing my financial strategy to others and instead focused on what works for my specific goals, risk tolerance, and life circumstances. This has reduced financial anxiety and helped me make more consistent progress.
              </p>
              <p>
                I've also embraced the power of "room for error" in my financial planning. By building in buffers and safety margins, I've created a more resilient financial system that can withstand unexpected events without derailing my long-term goals.
              </p>
            </div>
            
            <div className="book-review-section">
              <h2 className="book-review-section-title">Who Should Read This</h2>
              <p>
                I would recommend "The Psychology of Money" to:
              </p>
              <ul>
                <li>Anyone looking to develop a healthier relationship with money</li>
                <li>New investors seeking to understand the behavioral aspects of investing</li>
                <li>Experienced investors who want to reflect on their financial decision-making process</li>
                <li>People who feel anxious or overwhelmed about financial planning</li>
                <li>Those interested in the psychological and emotional aspects of wealth building</li>
                <li>Anyone who wants to understand why smart people often make poor financial decisions</li>
              </ul>
            </div>
            
            <div className="book-review-navigation">
              <Link to="/books" className="book-review-nav-button">
                <ArrowLeft size={16} style={{ marginRight: '4px' }} />
                Back to All Books
              </Link>
              <Link to="/books/deep-work" className="book-review-nav-button">
                Next Review: Deep Work
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
