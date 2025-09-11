import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import useRoleStore from '../../store/roleStore';
import styles from './styles.module.css';

const DashboardLayout = ({ 
  children, 
  role, 
  activeTab,
  title,
  description
}) => {
  const { roles, setActiveRole, setActiveTab } = useRoleStore();
  const roleConfig = roles[role];
  const navRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  
  // Safety check for undefined roleConfig
  if (!roleConfig) {
    console.error(`Role configuration not found for role: ${role}`);
    return (
      <Layout title="Role Not Found" description="The requested role configuration was not found.">
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Role Not Found</h1>
          <p>The role "{role}" is not configured. Please check the role configuration.</p>
        </div>
      </Layout>
    );
  }

  // Set active role when component mounts
  useEffect(() => {
    setActiveRole(role);
  }, [role, setActiveRole]);

  // Check scroll position and update arrow visibility
  const checkScrollPosition = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Initial check and resize listener
  useEffect(() => {
    checkScrollPosition();
    const handleResize = () => checkScrollPosition();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [roleConfig?.tabs]);

  // Scroll navigation functions
  const scrollLeft = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  
  // Handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(role, tabId);
  };
  
  return (
    <Layout
      title={title || roleConfig.title}
      description={description || roleConfig.description}
      wrapperClassName={clsx(styles.dashboardWrapper, styles[`theme${roleConfig.theme.charAt(0).toUpperCase() + roleConfig.theme.slice(1)}`])}
    >
      <div className={styles.dashboardHeader}>
        <div className={styles.dashboardHeaderContent}>
          <Link to="/navigation-guide" className={styles.backLink}>
            <ArrowLeft size={16} />
            Back to Navigation Guide
          </Link>
          <h1 className={styles.dashboardTitle}>{roleConfig.title}</h1>
          <p className={styles.dashboardDescription}>{roleConfig.description}</p>
        </div>
      </div>
      
      <div className={styles.dashboardNav}>
        <div className={styles.navContainer}>
          {showLeftArrow && (
            <button 
              className={clsx(styles.navArrow, styles.navArrowLeft)}
              onClick={scrollLeft}
              aria-label="Scroll tabs left"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          
          <div 
            className={styles.dashboardNavContent}
            ref={navRef}
            onScroll={checkScrollPosition}
          >
            {roleConfig.tabs && roleConfig.tabs.map((tab) => (
              <Link
                key={tab.id}
                to={`/${role}/${tab.id}`}
                className={clsx(
                  styles.dashboardNavItem,
                  activeTab === tab.id && styles.activeNavItem
                )}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </Link>
            ))}

          </div>
          
          {showRightArrow && (
            <button 
              className={clsx(styles.navArrow, styles.navArrowRight)}
              onClick={scrollRight}
              aria-label="Scroll tabs right"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
      
      <main className={styles.dashboardContent}>
        <div className={styles.dashboardContentInner}>
          {children}
        </div>
      </main>
    </Layout>
  );
};

export default DashboardLayout;