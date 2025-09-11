// PersonalityChart component file
import React from 'react';
import styles from './PersonalityChart.module.css';

const PersonalityChart = () => {
  const personalityData = [
    {
      trait: 'Extraversion',
      score: 100,
      shortDescription: 'Leadership and collaboration',
      description: 'Highly outgoing and energetic in professional settings',
      professionalValue: 'Strong leadership presence, excellent in client-facing roles, and natural team collaboration',
      color: '#4F46E5',
      icon: '👥'
    },
    {
      trait: 'Conscientiousness',
      score: 100,
      shortDescription: 'Quality and reliability',
      description: 'Extremely organized and detail-oriented',
      professionalValue: 'Delivers consistent quality, meets deadlines, and maintains high standards in all deliverables',
      color: '#059669',
      icon: '🎯'
    },
    {
      trait: 'Agreeableness',
      score: 89,
      shortDescription: 'Team compatibility',
      description: 'Highly cooperative and considerate',
      professionalValue: 'Excellent team player, conflict resolution skills, and builds strong working relationships',
      color: '#DC2626',
      icon: '🤝'
    },
    {
      trait: 'Openness',
      score: 75,
      shortDescription: 'Innovation and adaptability',
      description: 'Open to new ideas and creative solutions',
      professionalValue: 'Adaptable to change, innovative problem-solving, and embraces new technologies and methodologies',
      color: '#7C3AED',
      icon: '💡'
    },
    {
      trait: 'Neuroticism',
      score: 25,
      shortDescription: 'Emotional stability',
      description: 'Emotionally stable and calm under pressure',
      professionalValue: 'Performs well under pressure, maintains composure in challenging situations, and provides stability to team dynamics',
      color: '#EA580C',
      icon: '🛡️'
    }
  ];

  return (
    <div className={styles.chartContainer}>
      <div className={styles.personalityGrid}>
        {personalityData.map((trait, index) => (
          <div key={index} className={styles.traitCard} style={{'--trait-color': trait.color}}>
            <div className={styles.cardHeader}>
              <div className={styles.traitIcon}>
                {trait.icon}
              </div>
              <div className={styles.headerContent}>
                <h3 className={styles.traitName}>{trait.trait}</h3>
                <p className={styles.shortDescription}>{trait.shortDescription}</p>
              </div>
              <div className={styles.scoreCircle}>
                <span className={styles.scoreValue}>{trait.score}%</span>
              </div>
            </div>
            
            <div className={styles.progressSection}>
              <div className={styles.progressBarContainer}>
                <div 
                  className={styles.progressBar}
                  style={{ 
                    '--progress': `${trait.score}%`,
                    '--color': trait.color 
                  }}
                >
                  <div className={styles.progressFill}></div>
                </div>
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <p className={styles.traitDescription}>{trait.description}</p>
              <div className={styles.professionalValue}>
                <strong>Professional Impact:</strong>
                <span>{trait.professionalValue}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalityChart;