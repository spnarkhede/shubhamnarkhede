import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { ArrowLeft } from 'lucide-react';
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
  
  // Set active role when component mounts
  useEffect(() => {
    setActiveRole(role);
  }, [role, setActiveRole]);
  
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
        <div className={styles.dashboardNavContent}>
          {roleConfig.tabs.map((tab) => (
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
