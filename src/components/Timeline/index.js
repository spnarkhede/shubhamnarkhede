import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TimelineItem = ({ 
  title, 
  subtitle, 
  period, 
  content, 
  tags = [], 
  icon,
  expandable = true
}) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    if (expandable) {
      setExpanded(!expanded);
    }
  };
  
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineMarker}>
        {icon ? (
          <div className={styles.timelineIcon}>{icon}</div>
        ) : (
          <div className={styles.timelineDot}></div>
        )}
      </div>
      
      <div className={styles.timelineContent}>
        <div 
          className={clsx(styles.timelineHeader, expandable && styles.expandable)}
          onClick={toggleExpanded}
        >
          <div className={styles.timelineHeaderContent}>
            <h3 className={styles.timelineTitle}>{title}</h3>
            {subtitle && <div className={styles.timelineSubtitle}>{subtitle}</div>}
            {period && <div className={styles.timelinePeriod}>{period}</div>}
          </div>
          
          {expandable && (
            <button className={styles.expandButton} aria-label={expanded ? "Collapse" : "Expand"}>
              {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          )}
        </div>
        
        {(expanded || !expandable) && (
          <div className={styles.timelineBody}>
            {content && <div className={styles.timelineDescription}>{content}</div>}
            
            {tags.length > 0 && (
              <div className={styles.timelineTags}>
                {tags.map((tag, index) => (
                  <span key={index} className={styles.timelineTag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Timeline = ({ items, className }) => {
  return (
    <div className={clsx(styles.timeline, className)}>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          period={item.period}
          content={item.content}
          tags={item.tags}
          icon={item.icon}
          expandable={item.expandable !== false}
        />
      ))}
    </div>
  );
};

export default Timeline;
export { TimelineItem };
