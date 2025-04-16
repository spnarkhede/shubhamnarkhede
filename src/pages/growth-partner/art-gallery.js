import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import ArtGallery from '../../components/ArtGallery';
import styles from './styles.module.css';
import { Palette, Image, PenTool, Download } from 'lucide-react';
import Link from '@docusaurus/Link';

export default function GrowthPartnerArtGallery() {
  // Sample artwork data - in a real implementation, this would come from a database or API
  const artworks = [
    {
      id: 1,
      title: "Urban Reflections",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      medium: "Acrylic on Canvas",
      year: "2024",
      category: "painting",
      description: "An exploration of urban landscapes and their reflections in modern architecture. This piece uses contrasting colors to highlight the interplay between natural and artificial elements in city environments."
    },
    {
      id: 2,
      title: "Digital Dreamscape",
      image: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      medium: "Digital Art",
      year: "2023",
      category: "digital",
      description: "A digital composition exploring the boundaries between reality and imagination. Created using a combination of digital painting techniques and procedural generation."
    },
    {
      id: 3,
      title: "Serenity in Blue",
      image: "https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      medium: "Watercolor",
      year: "2023",
      category: "painting",
      description: "A watercolor study of tranquility using various shades of blue. This piece was inspired by the calming effect of water and the emotional resonance of blue tones."
    },
    {
      id: 4,
      title: "Geometric Harmony",
      image: "https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      medium: "Ink on Paper",
      year: "2022",
      category: "drawing",
      description: "An intricate pen drawing exploring geometric patterns and their relationship to natural forms. Each element is hand-drawn with meticulous attention to detail."
    },
    {
      id: 5,
      title: "Abstract Emotions",
      image: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      medium: "Mixed Media",
      year: "2022",
      category: "mixed-media",
      description: "A mixed media piece combining acrylic paint, collage elements, and textural components to express complex emotional states through abstract forms and vibrant colors."
    },
    {
      id: 6,
      title: "Nature's Patterns",
      image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      medium: "Photography",
      year: "2021",
      category: "photography",
      description: "A photographic study of patterns found in nature, from the microscopic to the macroscopic. This series explores the mathematical precision and beauty inherent in natural structures."
    },
    {
      id: 7,
      title: "Urban Sketch Series: Market Day",
      image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      medium: "Pen and Watercolor",
      year: "2021",
      category: "drawing",
      description: "Part of an urban sketching series capturing the vibrant atmosphere of local markets. Created on location using pen outlines with watercolor washes for color and depth."
    },
    {
      id: 8,
      title: "Digital Landscape: Futuristic City",
      image: "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      medium: "Digital Art",
      year: "2020",
      category: "digital",
      description: "A speculative visualization of future urban environments, exploring themes of sustainability, technology integration, and human-centered design in city planning."
    },
    {
      id: 9,
      title: "Minimalist Study in Red",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      medium: "Acrylic on Canvas",
      year: "2020",
      category: "painting",
      description: "An exercise in minimalist composition focusing on the emotional impact of red against negative space. This piece explores how color intensity can create presence even in simplicity."
    },
    {
      id: 10,
      title: "Textural Exploration",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      medium: "Mixed Media",
      year: "2019",
      category: "mixed-media",
      description: "An experimental piece focusing on texture as a primary element, incorporating various materials including fabric, paper, sand, and acrylic mediums to create a tactile experience."
    },
    {
      id: 11,
      title: "Portrait Study",
      image: "https://images.unsplash.com/photo-1578301978018-3c5876a72e75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      medium: "Charcoal on Paper",
      year: "2019",
      category: "drawing",
      description: "A detailed charcoal portrait exploring light, shadow, and expression. This study focuses on capturing emotional depth through careful observation and rendering techniques."
    },
    {
      id: 12,
      title: "Street Photography: Morning Light",
      image: "https://images.unsplash.com/photo-1577495508326-19a1a3cf65b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      medium: "Photography",
      year: "2018",
      category: "photography",
      description: "Part of a street photography series capturing the transformative quality of early morning light in urban environments, highlighting how it reveals details and creates atmosphere."
    }
  ];

  const artProcessSteps = [
    {
      number: "01",
      title: "Inspiration & Concept",
      description: "Every piece begins with inspiration and conceptual development. This might come from nature, urban environments, emotions, or abstract ideas that I explore through preliminary sketches and research."
    },
    {
      number: "02",
      title: "Experimentation & Planning",
      description: "Before committing to a final piece, I experiment with different techniques, materials, and approaches. This phase involves creating studies, testing color combinations, and refining the concept."
    },
    {
      number: "03",
      title: "Creation & Development",
      description: "The main creation phase involves bringing the concept to life through careful application of technique and artistic decision-making. This process often evolves organically as the work develops."
    },
    {
      number: "04",
      title: "Reflection & Refinement",
      description: "After the initial creation, I take time to reflect on the work, making adjustments and refinements to ensure the piece effectively communicates its intended meaning and aesthetic quality."
    }
  ];

  return (
    <DashboardLayout
      role="growth-partner"
      activeTab="art-gallery"
      title="Growth Partner | Art Gallery"
      description="Explore Shubham Narkhede's art gallery featuring paintings, digital art, drawings, and mixed media works."
    >
      <SectionTemplate
        title="Art Gallery"
        subtitle="A collection of my creative expressions through various mediums"
      >
        <div className={styles.artGallerySection}>
          <p className={styles.artGalleryDescription}>
            Welcome to my art gallery, where I share my creative explorations across different mediums. 
            Art has always been a parallel passion alongside my technical work, providing a different 
            channel for expression and exploration. This collection represents my journey as an artist, 
            from traditional techniques to digital creations.
          </p>
          
          <ArtGallery artworks={artworks} />
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="My Artistic Process"
        subtitle="How ideas transform into finished works"
        withBackground={true}
      >
        <div className={styles.artProcessSection}>
          <div className={styles.artProcessSteps}>
            {artProcessSteps.map((step, index) => (
              <div key={index} className={styles.artProcessStep}>
                <div className={styles.artProcessStepNumber}>{step.number}</div>
                <h3 className={styles.artProcessStepTitle}>{step.title}</h3>
                <p className={styles.artProcessStepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Artistic Influences"
        subtitle="Artists and movements that inspire my work"
      >
        <div className={styles.influencesSection}>
          <div className={styles.influencesGrid}>
            <div className={styles.influenceCard}>
              <h3><Palette size={20} /> Contemporary Abstract Expressionism</h3>
              <p>
                I'm drawn to the emotional intensity and spontaneity of abstract expressionism, particularly 
                its contemporary interpretations that combine traditional techniques with modern themes and approaches.
              </p>
            </div>
            
            <div className={styles.influenceCard}>
              <h3><Image size={20} /> Digital Art & Generative Design</h3>
              <p>
                The intersection of technology and art fascinates me, especially generative design and algorithmic 
                art that creates complex visual systems from simple rules and parameters.
              </p>
            </div>
            
            <div className={styles.influenceCard}>
              <h3><PenTool size={20} /> Urban Sketching Movement</h3>
              <p>
                The practice of on-location drawing to capture the spirit of urban environments has significantly 
                influenced my approach to observation and quick, expressive documentation of everyday scenes.
              </p>
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Art & Technology"
        subtitle="Exploring the intersection of creative and technical domains"
        withBackground={true}
      >
        <div className={styles.artTechSection}>
          <p className={styles.artTechDescription}>
            As someone with a foot in both the technical and artistic worlds, I'm particularly interested in 
            the intersection of these domains. My background in software development informs my approach to 
            digital art, while my artistic sensibilities influence how I think about user experience and 
            interface design in technical projects.
          </p>
          
          <div className={styles.artTechExamples}>
            <div className={styles.artTechExample}>
              <h3>Generative Art Projects</h3>
              <p>
                Creating algorithmic art systems that produce unique visual compositions based on code and 
                mathematical principles, exploring how rules can create organic and surprising results.
              </p>
            </div>
            
            <div className={styles.artTechExample}>
              <h3>Interactive Installations</h3>
              <p>
                Developing interactive experiences that respond to viewer input, combining sensors, 
                programming, and visual elements to create immersive and participatory art.
              </p>
            </div>
            
            <div className={styles.artTechExample}>
              <h3>Design Systems</h3>
              <p>
                Applying artistic principles to the creation of cohesive design systems for digital 
                products, ensuring both aesthetic quality and functional effectiveness.
              </p>
            </div>
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Collaborate on Creative Projects"
        subtitle="Interested in working together on art or design projects?"
      >
        <div className={styles.ctaSection}>
          <p className={styles.ctaDescription}>
            I'm open to creative collaborations that combine art, design, and technology. Whether you're 
            interested in commissioning artwork, collaborating on a creative project, or exploring the 
            intersection of art and technology, I'd love to discuss possibilities.
          </p>
          
          <div className={styles.ctaButtons}>
            <Link to="/growth-partner/contact" className={styles.ctaButton}>
              Discuss a Collaboration
            </Link>
            
            <a href="/files/art-portfolio.pdf" className={styles.ctaButtonSecondary} download>
              <Download size={16} />
              Download Art Portfolio
            </a>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
