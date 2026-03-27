import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('')
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleClick = (section: string) => {
    setActiveLink(section)
    setMenuOpen(false)
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

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}

      <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
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
            onClick={() => setMenuOpen(false)}
          >
            Mon CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
