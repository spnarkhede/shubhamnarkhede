import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Star, ArrowRight } from 'lucide-react';
import Link from '@docusaurus/Link';

export default function CuriousVisitorBooks() {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      cover: "/img/books/atomic-habits.jpg",
      rating: 5,
      excerpt: "An easy and proven way to build good habits and break bad ones. This book offers practical strategies for forming good habits, breaking bad ones, and mastering tiny behaviors that lead to remarkable results.",
      link: "/books/atomic-habits"
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      cover: "/img/books/deep-work.jpg",
      rating: 5,
      excerpt: "Rules for focused success in a distracted world. The book argues that the ability to focus without distraction is becoming increasingly valuable in our economy, and it presents a series of training regimens for cultivating this skill.",
      link: "/books/deep-work"
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      cover: "/img/books/psychology-of-money.jpg",
      rating: 4,
      excerpt: "Timeless lessons on wealth, greed, and happiness. The book explores how our relationship with money is complex and often irrational, influenced more by our personal histories and psychology than by spreadsheets and calculations.",
      link: "/books/psychology-of-money"
    },
    {
      title: "The Personal MBA",
      author: "Josh Kaufman",
      cover: "/img/books/the-personal-mba.jpg",
      rating: 4,
      excerpt: "Master the art of business. This book distills the essentials of business education into a single comprehensive volume, covering marketing, sales, negotiation, strategy, and more without the expense of business school.",
      link: "/books/the-personal-mba"
    },
    {
      title: "Principles: Life and Work",
      author: "Ray Dalio",
      cover: "/img/books/principles-life-and-work.jpg",
      rating: 4,
      excerpt: "A rich exploration of principles that have guided one of the world's most successful investors and entrepreneurs. Dalio shares the unconventional principles that he's developed and refined over the course of his career.",
      link: "/books/principles-life-and-work"
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      cover: "/img/books/thinking-fast-slow.jpg",
      rating: 5,
      excerpt: "A groundbreaking exploration of the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. Understanding these systems helps explain human judgment and decision-making.",
      link: "/books/thinking-fast-slow"
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      cover: "/img/books/sapiens.jpg",
      rating: 5,
      excerpt: "A sweeping narrative of humanity's creation and evolution. The book explores how Homo sapiens came to dominate the planet, examining the cognitive, agricultural, and scientific revolutions that shaped our species.",
      link: "/books/sapiens"
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      cover: "/img/books/zero-to-one.jpg",
      rating: 4,
      excerpt: "Notes on startups, or how to build the future. Thiel presents his philosophy on innovation, arguing that true progress comes from creating something entirely new (going from zero to one) rather than iterating on existing ideas.",
      link: "/books/zero-to-one"
    }
  ];

  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          fill={i < rating ? 'currentColor' : 'none'} 
          color={i < rating ? '#ffc107' : '#d1d5db'} 
        />
      );
    }
    return stars;
  };

  const recentlyRead = books.slice(0, 3);
  const allBooks = books;

  return (
    <DashboardLayout
      role="curious-visitor"
      activeTab="books"
      title="Curious Visitor | Book Reviews"
      description="Explore book reviews and recommendations by Shubham Narkhede on technology, business, psychology, and personal development."
    >
      <SectionTemplate
        title="Book Reviews"
        subtitle="My thoughts on books that have influenced my thinking"
      >
        <div className={styles.bookReviewsSection}>
          <p className={styles.bookReviewsDescription}>
            Reading is one of my favorite ways to explore new ideas and perspectives. Here, I share reviews of books 
            that have influenced my thinking on technology, business, psychology, and personal development. Each review 
            includes my key takeaways and how I've applied these insights in my professional and personal life.
          </p>
          
          <h3>Recently Read</h3>
          <div className={styles.bookReviewsGrid}>
            {recentlyRead.map((book, index) => (
              <div key={index} className={styles.bookReviewCard}>
                <img 
                  src={book.cover} 
                  alt={`${book.title} by ${book.author}`} 
                  className={styles.bookCover}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src="/img/default-book.jpg";
                  }}
                />
                
                <div className={styles.bookReviewContent}>
                  <h4 className={styles.bookTitle}>{book.title}</h4>
                  <p className={styles.bookAuthor}>by {book.author}</p>
                  
                  <div className={styles.bookRating}>
                    {renderRating(book.rating)}
                  </div>
                  
                  <p className={styles.bookExcerpt}>{book.excerpt}</p>
                  
                  <Link to={book.link} className={styles.readReviewLink}>
                    Read Full Review
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <h3>All Reviews</h3>
          <div className={styles.bookReviewsGrid}>
            {allBooks.map((book, index) => (
              <div key={index} className={styles.bookReviewCard}>
                <img 
                  src={book.cover} 
                  alt={`${book.title} by ${book.author}`} 
                  className={styles.bookCover}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src="/img/default-book.jpg";
                  }}
                />
                
                <div className={styles.bookReviewContent}>
                  <h4 className={styles.bookTitle}>{book.title}</h4>
                  <p className={styles.bookAuthor}>by {book.author}</p>
                  
                  <div className={styles.bookRating}>
                    {renderRating(book.rating)}
                  </div>
                  
                  <p className={styles.bookExcerpt}>{book.excerpt}</p>
                  
                  <Link to={book.link} className={styles.readReviewLink}>
                    Read Full Review
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Reading Philosophy"
        subtitle="My approach to reading and learning"
        withBackground={true}
      >
        <div className={styles.readingPhilosophySection}>
          <p className={styles.readingPhilosophyIntro}>
            I approach reading as a deliberate practice for expanding my knowledge and perspective. Here's my philosophy on reading:
          </p>
          
          <div className={styles.philosophyPoints}>
            <div className={styles.philosophyPoint}>
              <h3>Diverse Topics</h3>
              <p>
                I intentionally read across different domains—technology, business, psychology, philosophy, and more. 
                This cross-disciplinary approach helps me make connections between seemingly unrelated ideas and develop 
                a more holistic understanding of complex problems.
              </p>
            </div>
            
            <div className={styles.philosophyPoint}>
              <h3>Deep Over Broad</h3>
              <p>
                While I explore many topics, I prefer to go deep rather than broad. I'd rather thoroughly understand 
                a few key concepts than have a surface-level understanding of many. This often means reading multiple 
                books on the same subject or re-reading important books to extract more insights.
              </p>
            </div>
            
            <div className={styles.philosophyPoint}>
              <h3>Active Reading</h3>
              <p>
                I practice active reading by taking notes, highlighting key passages, and writing summaries of what I've learned. 
                This helps me engage more deeply with the material and increases retention. I often revisit these notes later 
                to refresh my understanding.
              </p>
            </div>
            
            <div className={styles.philosophyPoint}>
              <h3>Application Over Accumulation</h3>
              <p>
                Knowledge without application has limited value. I try to apply what I learn from books in my work and life. 
                This practical application not only reinforces learning but also helps me evaluate the usefulness of different ideas.
              </p>
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Reading Recommendations"
        subtitle="Books I recommend for different interests"
      >
        <div className={styles.readingRecommendationsSection}>
          <div className={styles.recommendationCategory}>
            <h3>For Technology Enthusiasts</h3>
            <ul className={styles.recommendationList}>
              <li>
                <strong>Deep Work</strong> by Cal Newport - For understanding how to focus in a distracted world
              </li>
              <li>
                <strong>The Pragmatic Programmer</strong> by Andrew Hunt & David Thomas - For timeless software development wisdom
              </li>
              <li>
                <strong>Designing Data-Intensive Applications</strong> by Martin Kleppmann - For understanding modern data systems
              </li>
            </ul>
          </div>
          
          <div className={styles.recommendationCategory}>
            <h3>For Business Minds</h3>
            <ul className={styles.recommendationList}>
              <li>
                <strong>Zero to One</strong> by Peter Thiel - For insights on innovation and startup thinking
              </li>
              <li>
                <strong>The Psychology of Money</strong> by Morgan Housel - For understanding financial decision-making
              </li>
              <li>
                <strong>Principles</strong> by Ray Dalio - For developing systematic approaches to work and life
              </li>
            </ul>
          </div>
          
          <div className={styles.recommendationCategory}>
            <h3>For Personal Growth</h3>
            <ul className={styles.recommendationList}>
              <li>
                <strong>Atomic Habits</strong> by James Clear - For building better habits and systems
              </li>
              <li>
                <strong>Thinking, Fast and Slow</strong> by Daniel Kahneman - For understanding human decision-making
              </li>
              <li>
                <strong>Man's Search for Meaning</strong> by Viktor Frankl - For perspective on purpose and meaning
              </li>
            </ul>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Book Recommendations"
        subtitle="Have a book suggestion for me?"
        withBackground={true}
      >
        <div className={styles.bookSuggestionSection}>
          <p className={styles.bookSuggestionIntro}>
            I'm always looking for new books to add to my reading list. If you have a recommendation for a book 
            you think I might enjoy or find valuable, I'd love to hear it. Your suggestions help me discover new 
            perspectives and ideas.
          </p>
          
          <div className={styles.suggestionFormContainer}>
            <form className={styles.suggestionForm}>
              <div className={styles.formGroup}>
                <label htmlFor="bookTitle" className={styles.formLabel}>Book Title</label>
                <input 
                  type="text" 
                  id="bookTitle" 
                  className={styles.formInput} 
                  placeholder="e.g., The Innovator's Dilemma"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="bookAuthor" className={styles.formLabel}>Author</label>
                <input 
                  type="text" 
                  id="bookAuthor" 
                  className={styles.formInput} 
                  placeholder="e.g., Clayton Christensen"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="bookReason" className={styles.formLabel}>Why do you recommend it?</label>
                <textarea 
                  id="bookReason" 
                  className={styles.formTextarea} 
                  placeholder="What makes this book special or valuable?"
                  rows={4}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="contactEmail" className={styles.formLabel}>Your Email (optional)</label>
                <input 
                  type="email" 
                  id="contactEmail" 
                  className={styles.formInput} 
                  placeholder="To discuss the book recommendation"
                />
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Submit Recommendation
              </button>
            </form>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
