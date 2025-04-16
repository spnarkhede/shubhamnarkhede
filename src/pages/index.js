import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './docusaurus.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  // Redirect to the landing page
  React.useEffect(() => {
    window.location.href = '/landing';
  }, []);

  return (
    <div className={styles.redirectContainer}>
      <h1>Redirecting to portfolio...</h1>
      <p>If you are not redirected automatically, please <Link to="/landing">click here</Link>.</p>
    </div>
  );
}
