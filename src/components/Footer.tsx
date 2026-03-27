import React from 'react'
import styles from './Footer.module.css'
import logo from '../assets/logo.png'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <a href="#top" className={styles.logoLink} aria-label="Retour en haut">
        <img src={logo} alt="Cédric Bouchard" className={styles.logo} />
      </a>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Cédric Bouchard
      </p>
    </footer>
  )
}

export default Footer
