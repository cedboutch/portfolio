import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('')

  const handleClick = (section: string) => {
    setActiveLink(section)
  }

  const navItems = [
    { href: '#about', label: 'À propos' },
    { href: '#experience', label: 'Expérience' },
    { href: '#projects', label: 'Projets' },
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.navBrand}>
        <a href="#top">
          <img src={logo} alt="Cédric Bouchard" className={styles.logo} />
        </a>
      </div>

      <ul className={styles.navLinks}>
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`${styles.navItem} ${activeLink === href ? styles.activeItem : ''}`}
              onClick={() => handleClick(href)}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/CV_Cedric_Bouchard.pdf"
            className={`${styles.navItem} ${styles.specialBtn}`}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Mon CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
