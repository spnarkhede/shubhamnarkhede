import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const SectionTemplate = ({
  title,
  subtitle,
  children,
  className,
  contentClassName,
  withBorder = false,
  withBackground = false,
  centered = false,
  id
}) => {
  return (
    <section 
      id={id}
      className={clsx(
        styles.section,
        withBorder && styles.withBorder,
        withBackground && styles.withBackground,
        centered && styles.centered,
        className
      )}
    >
      {(title || subtitle) && (
        <div className={styles.sectionHeader}>
          {title && <h2 className={styles.sectionTitle}>{title}</h2>}
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={clsx(styles.sectionContent, contentClassName)}>
        {children}
      </div>
    </section>
  );
};

export default SectionTemplate;
