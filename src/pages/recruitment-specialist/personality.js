import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import PersonalityChart from './components/PersonalityChart';
import styles from './styles.module.css';
import { Brain, Target, Users, Lightbulb, Shield } from 'lucide-react';

export default function RecruitmentSpecialistPersonality() {
  const personalityInsights = [
    {
      icon: <Users size={24} />,
      title: 'Team Leadership',
      description: 'High extraversion and agreeableness create natural leadership abilities and team cohesion.',
      color: '#4F46E5'
    },
    {
      icon: <Target size={24} />,
      title: 'Quality Delivery',
      description: 'Perfect conscientiousness score ensures consistent, high-quality deliverables and deadline adherence.',
      color: '#059669'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Innovation Balance',
      description: 'Strong openness to experience combined with conscientiousness enables innovative yet practical solutions.',
      color: '#7C3AED'
    },
    {
      icon: <Shield size={24} />,
      title: 'Stress Resilience',
      description: 'Low neuroticism indicates excellent performance under pressure and emotional stability in challenging projects.',
      color: '#EA580C'
    }
  ];

  return (
    <DashboardLayout
      role="recruitment-specialist"
      activeTab="personality"
      title="Recruitment Specialist | Personality Insights"
      description="Evidence-based personality assessment results for Shubham Narkhede, providing hiring managers with insights into working style and team compatibility"
    >
      <SectionTemplate
        title="Personality Assessment Results"
        subtitle="Evidence-based insights from Big Five personality assessment"
      >
        <div className={styles.personalityIntro}>
          <p className={styles.introText}>
            This personality assessment provides scientifically-backed insights into Shubham's working style, 
            team compatibility, and professional strengths. The Big Five model is widely recognized in 
            organizational psychology and used by leading companies for talent assessment.
          </p>
          
          <div className={styles.assessmentMeta}>
            <div className={styles.metaItem}>
              <strong>Assessment Type:</strong> Big Five Personality Model
            </div>
            <div className={styles.metaItem}>
              <strong>Completion Date:</strong> 2025
            </div>
            <div className={styles.metaItem}>
              <strong>Validity:</strong> Scientifically validated instrument
            </div>
          </div>
        </div>
        
        <PersonalityChart />
      </SectionTemplate>

      <SectionTemplate
        title="Professional Implications"
        subtitle="How these traits translate to workplace excellence"
        withBackground={true}
      >
        <div className={styles.insightsGrid}>
          {personalityInsights.map((insight, index) => (
            <div key={index} className={styles.insightCard} style={{'--accent-color': insight.color}}>
              <div className={styles.insightIcon}>
                {insight.icon}
              </div>
              <h3 className={styles.insightTitle}>{insight.title}</h3>
              <p className={styles.insightDescription}>{insight.description}</p>
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Recruiter Insights"
        subtitle="What these results mean for hiring decisions"
      >
        <div className={styles.recruiterSection}>
          <div className={styles.recruiterGrid}>
            <div className={styles.recruiterCard}>
              <h3 className={styles.recruiterCardTitle}>Team Fit</h3>
              <p className={styles.recruiterCardText}>
                Exceptional team player with natural leadership qualities. High agreeableness ensures 
                smooth collaboration, while strong extraversion brings energy and communication to teams.
              </p>
              <div className={styles.scoreHighlight}>
                <span className={styles.scoreLabel}>Team Compatibility:</span>
                <span className={styles.scoreValue}>Excellent</span>
              </div>
            </div>
            
            <div className={styles.recruiterCard}>
              <h3 className={styles.recruiterCardTitle}>Work Quality</h3>
              <p className={styles.recruiterCardText}>
                Perfect conscientiousness score indicates exceptional attention to detail, organization, 
                and commitment to delivering high-quality work consistently.
              </p>
              <div className={styles.scoreHighlight}>
                <span className={styles.scoreLabel}>Quality Assurance:</span>
                <span className={styles.scoreValue}>Outstanding</span>
              </div>
            </div>
            
            <div className={styles.recruiterCard}>
              <h3 className={styles.recruiterCardTitle}>Adaptability</h3>
              <p className={styles.recruiterCardText}>
                Strong openness to experience combined with emotional stability creates an ideal 
                candidate for dynamic environments and evolving technical landscapes.
              </p>
              <div className={styles.scoreHighlight}>
                <span className={styles.scoreLabel}>Change Management:</span>
                <span className={styles.scoreValue}>Strong</span>
              </div>
            </div>
            
            <div className={styles.recruiterCard}>
              <h3 className={styles.recruiterCardTitle}>Leadership Potential</h3>
              <p className={styles.recruiterCardText}>
                High extraversion and conscientiousness, combined with emotional stability, 
                indicate strong leadership potential and ability to guide technical teams.
              </p>
              <div className={styles.scoreHighlight}>
                <span className={styles.scoreLabel}>Leadership Readiness:</span>
                <span className={styles.scoreValue}>High</span>
              </div>
            </div>
          </div>
          
          <div className={styles.recruiterSummary}>
            <h3 className={styles.summaryTitle}>Assessment Summary for Hiring Managers</h3>
            <div className={styles.summaryContent}>
              <p>
                <strong>Ideal Role Fit:</strong> Shubham's personality profile indicates exceptional 
                suitability for DevOps and Full Stack development roles that require both technical 
                excellence and team collaboration.
              </p>
              <p>
                <strong>Team Impact:</strong> Expect a positive influence on team dynamics, with 
                natural mentoring abilities and conflict resolution skills.
              </p>
              <p>
                <strong>Performance Predictors:</strong> High conscientiousness predicts consistent 
                performance, while emotional stability ensures reliability under pressure.
              </p>
              <p>
                <strong>Growth Potential:</strong> Strong openness to experience indicates excellent 
                learning agility and adaptation to new technologies and methodologies.
              </p>
            </div>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}