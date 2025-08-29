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

const RecommendationsPanel = ({ recommendations = professionalRecommendations, className }) => {
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
const professionalRecommendations = [
  {
    name: "Edgar Koepplin",
    title: "Director Area Sales & Global Distribution Partner Management for Mobile Hydraulics & Digital Sales E2E Process Owner at BOSCH REXROTH AG",
    image: "/img/testimonials/edgar.jpg",
    quote: "Shubham did an exceptional job on recent projects. He did a great job in Bosch Rexroth AG presence in terms of developing digital tools and software for the Sales and Distribution division. He started working with me as a Full-stack Software Engineer intern. The role included creating applications and software tools for digitalizing the sales market, and later expanded his role into DevOps Software Engineer. As I remember, Shubham was a very productive person and is a multiskilled person with vast knowledge. He is careful, proactive, intelligent, a team player and a customer-service oriented colleague. A great employee — whenever there was a problem, Shubham found a solution. He is truly an asset to any company.",
    rating: 5,
    date: "May 2022",
    relationship: "Direct Manager"
  },
  {
    name: "Andrea Alberti",
    title: "Product Manager & Product Owner @Bosch Rexroth | Ubuntu lifestyle",
    image: "/img/testimonials/andrea.jpg",
    quote: "I have been working for one year in close contact with Mr. Shubham Narkhede as part of the Sales and Distribution Management team at Bosch Rexroth. Shubham has been supporting me and my team as SW developer for many of the digital tools we are currently supplying to our sales partners, and I am happy to recommend him as a highly skilled professional in this field based on this experience. In addition to the technical skills, Shubham showed a strong entrepreneurial mindset by investing time to continuously learn new skills that could help the team in reaching better results, and by personally taking over many activities and successfully bringing them to an end.",
    rating: 5,
    date: "August 2022",
    relationship: "Senior Colleague (didn’t manage directly)"
  },
  {
    name: "Selin Kelles",
    title: "Program Manager at Bosch Rexroth AG",
    image: "/img/testimonials/selin.jpg",
    quote: "Shubham is a great developer with great skills. He has impressed all the team with his passion for his projects and ability to do everything possible to reach the goal. His help to his colleagues is impressive as well. He developed tools that strongly impact our Bosch Rexroth industry, which is great. His motivation everyday is strong and he has the strength to motivate people around him, which is amazing. He's a great colleague and friend at the same time, and I wish him all the best!",
    rating: 5,
    date: "July 2022",
    relationship: "Teammate"
  },
  {
    name: "Jakob Tempel",
    title: "Team Manager at Bosch Rexroth AG | Co-Founder at O7EAN GmbH",
    image: "/img/testimonials/jakob.jpg",
    quote: "I am impressed with Mr. Shubham Narkhede's ability to program software, his knowledge of DevOps tools, and his advanced communication skills, which he uses to his advantage when presenting to customers and colleagues. Shubham Narkhede has done a great job expanding Bosch Rexroth AG's presence in terms of software and application development for the Sales and Distribution division. He also diligently ensures that his KPIs are updated and tracked, which helped me understand what was going well and what was not. His expertise as a software engineer is considerable and has helped our team find more efficient solutions and develop various projects. His contributions such as blogs, resources, information, documentation and helpfulness have been very valuable to the community. He is a very focused and analytical person and can add value to any team he is a part of. His energy to push things forward was contagious and helped us achieve great goals. I highly recommend Shubham as a software engineer and would love to work with him again. I am sure Shubham will achieve great things in his career.",
    rating: 5,
    date: "April 2022",
    relationship: "Team Administrtor"
  },
  {
    name: "Dr. Neeranjan Chitare",
    title: "Birmingham City University | Lecturer & Expert Fellow SPRITE+",
    image: "/img/testimonials/neeranjan.jpg",
    quote: "Shubham was my student during his graduation (2014-18). Given any assignment to him, he does it in the best possible way and always before time. His passion for learning will definitely boost his graph of growing. He is equally enthusiastic to work with and help his teammates. His acute interest in arts gives him an additional edge. I am sure he can confidently handle the research as well as professional portfolio in the best manner.",
    rating: 5,
    date: "May 2018",
    relationship: "Professor"
  },
  {
    name: "Ashwini Borle",
    title: "Senior Technical Product Manager at Mastercard",
    image: "/img/testimonials/ashwini.jpg",
    quote: "Shubham is a positive thinker, self motivated and has a lot of software skills. He has done several web development projects. He is good in arts, full with passion, enthusiasm and positive attitude. Completes all his work before time. He is the perfect candidate to hire. Wish you best of luck!!",
    rating: 5,
    date: "May 2019",
    relationship: "Mentor"
  },
  {
    name: "Deepak Dhote",
    title: "Operations Manager at IT-NetworkZ",
    image: "/img/testimonials/deepak.jpg",
    quote: "Hi Shubham. Hope you are doing good! You are one of the best interns we had worked with. There are so many trainees & engineers to whom we trained and worked with, you are a special one. Keep your enthusiasm and willingness to learn new things like earlier. I always saw you as a key person in a team. I would strongly suggest companies to not miss a candidate like you if they are planning to offer you any role. I must say that you are an intelligent & hardworking person of outstanding character. I wish you a successful career ahead.",
    rating: 5,
    date: "May 2019",
    relationship: "Direct Manager"
  },
  {
    name: "Anup Borle",
    title: "DevOps Engineer at Deutsche Bank",
    image: "/img/testimonials/anup.jpg",
    quote: "Mr. Shubham is motivated, forward thinking and highly talented individual with lots of knowledge in his field. His unmatched skills and ingenuity makes him a perfect candidate for anyone who is open to hire and want to take an enthusiastic and energetic person by their side.",
    rating: 5,
    date: "February 2019",
    relationship: "Mentor"
  },
  {
    name: "Akshay Saraf",
    title: "Doctoral Researcher | Ph.D. Scholar at VNIT Nagpur",
    image: "/img/testimonials/akshay.jpg",
    quote: "Shubham is one of my talented and hardworking students. He always strives to achieve set target on time. He worked under me on a Mini Project based on Java Language. I wish him Luck for future endeavors.",
    rating: 5,
    date: "May 2018",
    relationship: "Professor"
  }
];


export default RecommendationsPanel;
