import React from 'react';
import styles from './styles.module.css';
import { Music } from 'lucide-react';

export default function SpotifyPodcast({ spotifyUrl, title, showCover = true }) {
  // Extract the Spotify URI from the URL
  const getSpotifyEmbedUrl = (url) => {
    if (!url) return null;
    
    // Handle different Spotify URL formats
    let embedUrl;
    
    if (url.includes('spotify.com/episode/')) {
      // For episode URLs
      const episodeId = url.split('episode/')[1]?.split('?')[0];
      if (episodeId) {
        embedUrl = `https://open.spotify.com/embed/episode/${episodeId}`;
      }
    } else if (url.includes('spotify.com/show/')) {
      // For show/podcast URLs
      const showId = url.split('show/')[1]?.split('?')[0];
      if (showId) {
        embedUrl = `https://open.spotify.com/embed/show/${showId}`;
      }
    } else if (url.includes('spotify.com/playlist/')) {
      // For playlist URLs
      const playlistId = url.split('playlist/')[1]?.split('?')[0];
      if (playlistId) {
        embedUrl = `https://open.spotify.com/embed/playlist/${playlistId}`;
      }
    } else if (url.includes('spotify:')) {
      // For Spotify URIs
      const parts = url.split(':');
      if (parts.length >= 3) {
        const type = parts[1];
        const id = parts[2];
        embedUrl = `https://open.spotify.com/embed/${type}/${id}`;
      }
    }
    
    return embedUrl || null;
  };

  const embedUrl = getSpotifyEmbedUrl(spotifyUrl);
  
  if (!embedUrl) {
    return null;
  }

  return (
    <div className={styles.spotifyPodcastContainer}>
      <div className={styles.spotifyPodcastHeader}>
        <Music size={18} className={styles.spotifyIcon} />
        <h3 className={styles.spotifyPodcastTitle}>
          {title || 'Related Podcast'}
        </h3>
      </div>
      <div className={styles.spotifyPodcastEmbed}>
        <iframe 
          src={`${embedUrl}?utm_source=generator${showCover ? '' : '&theme=0'}`}
          width="100%" 
          height="152" 
          frameBorder="0" 
          allowFullScreen 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          title={title || "Spotify Podcast"}
        ></iframe>
      </div>
    </div>
  );
}
