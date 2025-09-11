import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ArtGallery = ({ artworks = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentArtwork, setCurrentArtwork] = useState(null);

  // Extract unique categories from artworks with safety checks
  const categories = ['all', ...new Set(
    artworks
      .map(artwork => artwork?.category)
      .filter(category => category && typeof category === 'string')
  )];

  // Filter artworks based on selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredArtworks(artworks);
    } else {
      setFilteredArtworks(artworks.filter(artwork => artwork?.category === selectedCategory));
    }
  }, [selectedCategory, artworks]);

  // Open modal with selected artwork
  const openModal = (artwork) => {
    setCurrentArtwork(artwork);
    setModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  // Navigate to next artwork in modal
  const nextArtwork = () => {
    const currentIndex = filteredArtworks.findIndex(artwork => artwork.id === currentArtwork.id);
    const nextIndex = (currentIndex + 1) % filteredArtworks.length;
    setCurrentArtwork(filteredArtworks[nextIndex]);
  };

  // Navigate to previous artwork in modal
  const prevArtwork = () => {
    const currentIndex = filteredArtworks.findIndex(artwork => artwork.id === currentArtwork.id);
    const prevIndex = (currentIndex - 1 + filteredArtworks.length) % filteredArtworks.length;
    setCurrentArtwork(filteredArtworks[prevIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          nextArtwork();
          break;
        case 'ArrowLeft':
          prevArtwork();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, currentArtwork]);

  return (
    <div className={styles.artGalleryContainer}>
      {/* Category Filter */}
      <div className={styles.categoryFilter}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category && typeof category === 'string' ? 
              category.charAt(0).toUpperCase() + category.slice(1) : 
              'Unknown'
            }
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className={styles.galleryGrid}>
        {filteredArtworks.map((artwork) => (
          <div 
            key={artwork.id} 
            className={styles.galleryItem}
            onClick={() => openModal(artwork)}
          >
            <img 
              src={artwork.image} 
              alt={artwork.title} 
              className={styles.galleryImage}
              loading="lazy"
            />
            <div className={styles.galleryItemOverlay}>
              <h3 className={styles.galleryItemTitle}>{artwork.title}</h3>
              <p className={styles.galleryItemMedium}>{artwork.medium}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredArtworks.length === 0 && (
        <div className={styles.emptyState}>
          <p>No artworks found in this category.</p>
        </div>
      )}

      {/* Modal for Full View */}
      {modalOpen && currentArtwork && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>
              <X size={24} />
            </button>
            
            <img 
              src={currentArtwork.image} 
              alt={currentArtwork.title} 
              className={styles.modalImage}
            />
            
            <div className={styles.modalInfo}>
              <h2 className={styles.modalTitle}>{currentArtwork.title}</h2>
              <p className={styles.modalMedium}>{currentArtwork.medium}, {currentArtwork.year}</p>
              <p className={styles.modalDescription}>{currentArtwork.description}</p>
            </div>
            
            <button 
              className={`${styles.modalNav} ${styles.modalNavPrev}`}
              onClick={(e) => {
                e.stopPropagation();
                prevArtwork();
              }}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className={`${styles.modalNav} ${styles.modalNavNext}`}
              onClick={(e) => {
                e.stopPropagation();
                nextArtwork();
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtGallery;
