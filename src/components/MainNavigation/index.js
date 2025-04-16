import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function MainNavigation() {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Books', path: '/books' },
    { label: 'Portfolio', 
      children: [
        { label: 'Projects', path: '/Portfolio/Projects' },
        { label: 'Experience', path: '/Portfolio/Experience' },
        { label: 'Certificates', path: '/Portfolio/Certificates' },
        { label: 'Resume', path: '/Portfolio/Resume' }
      ]
    },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={styles.mainNavigation}>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            {item.children ? (
              <div className={styles.dropdownContainer}>
                <span className={styles.dropdownTrigger}>{item.label}</span>
                <ul className={styles.dropdownMenu}>
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex} className={styles.dropdownItem}>
                      <Link 
                        to={child.path}
                        className={styles.navLink}
                        activeClassName={styles.navLinkActive}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link 
                to={item.path}
                className={styles.navLink}
                activeClassName={styles.navLinkActive}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
