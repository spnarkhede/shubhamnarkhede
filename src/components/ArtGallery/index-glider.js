import React, { useState } from 'react';
import styles from './ArtGallery.module.css';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const ArtGallery = ({ artworks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  
  // Default artworks if none provided
  const defaultArtworks = [
    {
      id: 1,
      title: 'Abstract Digital Composition',
      description: 'A digital exploration of form and color, created using digital painting techniques.',
      image: '/img/art/placeholder-art-1.jpg',
      medium: 'Digital',
      year: '2024'
    },
    {
      id: 2,
      title: 'Watercolor Landscape',
      description: 'A serene landscape painted with watercolors, capturing the tranquility of nature.',
      image: '/img/art/placeholder-art-2.jpg',
      medium: 'Watercolor on paper',
      year: '2023'
    },
    {
      id: 3,
      title: 'Pencil Portrait Study',
      description: 'A detailed portrait study created with graphite pencils, focusing on light and shadow.',
      image: '/img/art/placeholder-art-3.jpg',
      medium: 'Graphite on paper',
      year: '2023'
    },
    {
      id: 4,
      title: 'Mixed Media Composition',
      description: 'An experimental piece combining various media and techniques to create texture and depth.',
      image: '/img/art/placeholder-art-4.jpg',
      medium: 'Mixed media',
      year: '2022'
    }
  ];
  
  const galleryItems = artworks || defaultArtworks;
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <div className={styles.artGalleryContainer}>
      <div className={styles.galleryHeader}>
        <h2 className={styles.galleryTitle}>Art Gallery</h2>
        <p className={styles.galleryDescription}>
          A collection of my creative works including paintings, sketches, and digital art.
        </p>
      </div>
      
      {/* Featured Artwork */}
      <div className={styles.featuredArtwork}>
        <div className={styles.featuredImageContainer}>
          <img 
            src={galleryItems[currentIndex].image} 
            alt={galleryItems[currentIndex].title}
            className={styles.featuredImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src="/img/default-art.jpg";
            }}
          />
          <button 
            className={styles.zoomButton}
            onClick={() => setShowModal(true)}
            aria-label="Zoom in"
          >
            <ZoomIn size={20} />
          </button>
        </div>
        
        <div className={styles.featuredInfo}>
          <h3 className={styles.featuredTitle}>{galleryItems[currentIndex].title}</h3>
          <p className={styles.featuredMedium}>
            {galleryItems[currentIndex].medium}, {galleryItems[currentIndex].year}
          </p>
          <p className={styles.featuredDescription}>
            {galleryItems[currentIndex].description}
          </p>
          
          <div className={styles.navigationControls}>
            <button 
              className={styles.navButton}
              onClick={handlePrevious}
              aria-label="Previous artwork"
            >
              <ChevronLeft size={24} />
            </button>
            <span className={styles.galleryCounter}>
              {currentIndex + 1} / {galleryItems.length}
            </span>
            <button 
              className={styles.navButton}
              onClick={handleNext}
              aria-label="Next artwork"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Thumbnail Gallery */}
      <div className={styles.thumbnailGallery}>
        {galleryItems.map((artwork, index) => (
          <div 
            key={artwork.id} 
            className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img 
              src={artwork.image} 
              alt={artwork.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src="/img/default-art.jpg";
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Gallery Grid */}
      <div className={styles.galleryGrid}>
        {galleryItems.map((artwork, index) => (
          <div 
            key={artwork.id} 
            className={styles.galleryItem}
            onClick={() => openModal(index)}
          >
            <div className={styles.galleryImageContainer}>
              <img 
                src={artwork.image} 
                alt={artwork.title}
                className={styles.galleryImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="/img/default-art.jpg";
                }}
              />
              <div className={styles.galleryItemOverlay}>
                <ZoomIn size={24} />
              </div>
            </div>
            <h3 className={styles.galleryItemTitle}>{artwork.title}</h3>
            <p className={styles.galleryItemMedium}>
              {artwork.medium}, {artwork.year}
            </p>
          </div>
        ))}
      </div>
      
      {/* Modal for enlarged view */}
      {showModal && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            <img 
              src={galleryItems[currentIndex].image} 
              alt={galleryItems[currentIndex].title}
              className={styles.modalImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src="/img/default-art.jpg";
              }}
            />
            <div className={styles.modalInfo}>
              <h3>{galleryItems[currentIndex].title}</h3>
              <p>{galleryItems[currentIndex].medium}, {galleryItems[currentIndex].year}</p>
              <p>{galleryItems[currentIndex].description}</p>
            </div>
            <div className={styles.modalNavigation}>
              <button 
                className={styles.modalNavButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                aria-label="Previous artwork"
              >
                <ChevronLeft size={30} />
              </button>
              <button 
                className={styles.modalNavButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next artwork"
              >
                <ChevronRight size={30} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtGallery;
