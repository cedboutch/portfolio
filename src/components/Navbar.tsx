import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navBrand}>
        <span className={styles.logoText}>Portfolio.</span>
      </div>
      
      <ul className={styles.navLinks}>
        <li><a href="#about" className={styles.navItem}>About</a></li>
        <li><a href="#experience" className={styles.navItem}>Experience</a></li>
        <li><a href="#education" className={styles.navItem}>Education</a></li>
        <li><a href="#contact" className={`${styles.navItem} ${styles.specialBtn}`}>Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
