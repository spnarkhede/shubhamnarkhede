import React from 'react';
import styles from './styles.module.css';
import { Music, BookOpen, Newspaper, Lightbulb, TrendingUp, ExternalLink } from 'lucide-react';

export default function ContinueExploring() {
  const sections = [
    {
      title: "Music Preferences",
      icon: <Music size={24} />,
      color: "#0078D7",
      items: [
        {
          title: "Spotify Playlists",
          description: "My curated playlists for coding, relaxation, and workouts.",
          link: "https://open.spotify.com/user/example",
          image: "/img/exploring/spotify-playlists.jpg"
        },
        {
          title: "Favorite Artists",
          description: "Musicians and bands that inspire my creativity and focus.",
          link: "/exploring/music",
          image: "/img/exploring/favorite-artists.jpg"
        }
      ]
    },
    {
      title: "Current Reads",
      icon: <BookOpen size={24} />,
      color: "#00A4EF",
      items: [
        {
          title: "Reading List 2025",
          description: "Books I'm currently reading or planning to read this year.",
          link: "/exploring/reading-list",
          image: "/img/exploring/reading-list.jpg"
        },
        {
          title: "Book Recommendations",
          description: "My personal recommendations for professional and personal growth.",
          link: "/books",
          image: "/img/exploring/book-recommendations.jpg"
        }
      ]
    },
    {
      title: "Tech Articles",
      icon: <Newspaper size={24} />,
      color: "#7FBA00",
      items: [
        {
          title: "My Medium Blog",
          description: "Articles I've written about software development and technology.",
          link: "https://medium.com/@example",
          image: "/img/exploring/medium-blog.jpg"
        },
        {
          title: "Recommended Reads",
          description: "Insightful articles from around the web that I've found valuable.",
          link: "/exploring/tech-articles",
          image: "/img/exploring/tech-articles.jpg"
        }
      ]
    },
    {
      title: "Thought Leadership",
      icon: <Lightbulb size={24} />,
      color: "#FFB900",
      items: [
        {
          title: "Conference Talks",
          description: "Presentations I've given at industry conferences and meetups.",
          link: "/exploring/talks",
          image: "/img/exploring/conference-talks.jpg"
        },
        {
          title: "Podcast Appearances",
          description: "Interviews and discussions I've participated in.",
          link: "/exploring/podcasts",
          image: "/img/exploring/podcast-appearances.jpg"
        }
      ]
    },
    {
      title: "Trends Tracker",
      icon: <TrendingUp size={24} />,
      color: "#F25022",
      items: [
        {
          title: "Tech Trends 2025",
          description: "My analysis of emerging technologies and industry trends.",
          link: "/exploring/tech-trends",
          image: "/img/exploring/tech-trends.jpg"
        },
        {
          title: "Learning Roadmap",
          description: "Technologies and skills I'm currently exploring and learning.",
          link: "/exploring/learning-roadmap",
          image: "/img/exploring/learning-roadmap.jpg"
        }
      ]
    }
  ];

  return (
    <div className={styles.continueExploringContainer}>
      <h2 className={styles.continueExploringTitle}>Continue Exploring</h2>
      <p className={styles.continueExploringDescription}>
        Beyond my professional work, here are some additional areas where I share my interests,
        thoughts, and ongoing learning journey.
      </p>
      
      <div className={styles.exploringSections}>
        {sections.map((section, index) => (
          <div key={index} className={styles.exploringSection}>
            <div 
              className={styles.exploringSectionHeader}
              style={{ backgroundColor: section.color }}
            >
              {section.icon}
              <h3 className={styles.exploringSectionTitle}>{section.title}</h3>
            </div>
            
            <div className={styles.exploringSectionContent}>
              {section.items.map((item, itemIndex) => (
                <a 
                  key={itemIndex} 
                  href={item.link}
                  className={styles.exploringItem}
                  target={item.link.startsWith('http') ? "_blank" : "_self"}
                  rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}
                >
                  <div className={styles.exploringItemImage}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src="/img/default-exploring.jpg";
                      }}
                    />
                  </div>
                  
                  <div className={styles.exploringItemContent}>
                    <h4 className={styles.exploringItemTitle}>
                      {item.title}
                      {item.link.startsWith('http') && (
                        <ExternalLink size={14} className={styles.externalLinkIcon} />
                      )}
                    </h4>
                    <p className={styles.exploringItemDescription}>{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
