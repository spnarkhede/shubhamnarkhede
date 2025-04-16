import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const RecommendationCard = ({ recommendation }) => {
  return (
    <div className={styles.recommendationCard}>
      <div className={styles.recommendationHeader}>
        {recommendation.image ? (
          <img 
            src={recommendation.image} 
            alt={recommendation.name}
            className={styles.recommendationImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src="/img/default-avatar.png";
            }}
          />
        ) : (
          <div className={styles.recommendationImagePlaceholder}>
            {recommendation.name.charAt(0)}
          </div>
        )}
        <div className={styles.recommendationAuthor}>
          <h3 className={styles.recommendationName}>{recommendation.name}</h3>
          <p className={styles.recommendationTitle}>{recommendation.title}</p>
        </div>
      </div>
      
      <div className={styles.recommendationRating}>
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={clsx(
              styles.ratingStar,
              i < recommendation.rating && styles.ratingStarFilled
            )} 
          />
        ))}
      </div>
      
      <blockquote className={styles.recommendationQuote}>
        {recommendation.quote}
      </blockquote>
      
      <div className={styles.recommendationFooter}>
        <span className={styles.recommendationDate}>{recommendation.date}</span>
        {recommendation.relationship && (
          <span className={styles.recommendationRelationship}>{recommendation.relationship}</span>
        )}
      </div>
    </div>
  );
};

const RecommendationsPanel = ({ recommendations = sampleRecommendations, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Auto-rotate recommendations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, [recommendations.length]);
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go to next
      handleNext();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right, go to previous
      handlePrevious();
    }
  };
  
  return (
    <div className={clsx(styles.recommendationsPanel, className)}>
      <div 
        className={styles.recommendationsCarousel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button 
          className={clsx(styles.carouselButton, styles.carouselButtonPrev)}
          onClick={handlePrevious}
          aria-label="Previous recommendation"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className={styles.recommendationsContainer}>
          <RecommendationCard recommendation={recommendations[currentIndex]} />
        </div>
        
        <button 
          className={clsx(styles.carouselButton, styles.carouselButtonNext)}
          onClick={handleNext}
          aria-label="Next recommendation"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className={styles.recommendationIndicators}>
        {recommendations.map((_, index) => (
          <button
            key={index}
            className={clsx(
              styles.recommendationIndicator,
              index === currentIndex && styles.activeIndicator
            )}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to recommendation ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Sample data
const sampleRecommendations = [
  {
    name: "Alex Johnson",
    title: "Senior Engineering Manager at Tech Corp",
    image: "/img/testimonials/alex.jpg",
    quote: "Shubham is an exceptional developer with a keen eye for detail. His ability to solve complex problems while maintaining clean, efficient code is remarkable. He consistently delivered high-quality work and was a valuable asset to our team.",
    rating: 5,
    date: "January 2025",
    relationship: "Direct Manager"
  },
  {
    name: "Priya Sharma",
    title: "Product Lead at InnovateX",
    image: "/img/testimonials/priya.jpg",
    quote: "Working with Shubham was a pleasure. His technical expertise combined with his understanding of user experience made him an invaluable contributor to our projects. He's proactive, communicative, and delivers results that exceed expectations.",
    rating: 5,
    date: "November 2024",
    relationship: "Project Collaborator"
  },
  {
    name: "Michael Chen",
    title: "CTO at StartupVision",
    image: "/img/testimonials/michael.jpg",
    quote: "Shubham's DevOps expertise transformed our deployment process. He implemented CI/CD pipelines that reduced our deployment time by 70% and significantly improved our system reliability. His documentation was thorough and made onboarding new team members seamless.",
    rating: 5,
    date: "August 2024",
    relationship: "Client"
  },
  {
    name: "Sarah Williams",
    title: "Frontend Team Lead at WebSolutions",
    image: "/img/testimonials/sarah.jpg",
    quote: "I had the pleasure of working with Shubham on a complex web application. His full-stack skills are impressive, but what really sets him apart is his ability to mentor others and share knowledge. He's not just a great developer, but a great team player.",
    rating: 5,
    date: "March 2024",
    relationship: "Colleague"
  }
];

export default RecommendationsPanel;
