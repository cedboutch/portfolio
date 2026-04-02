import React from 'react'
import styles from './Footer.module.css'
import RubikLogo from './RubikLogo'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <a href="#top" className={styles.logoLink} aria-label="Retour en haut">
        <RubikLogo size={120} />
      </a>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Cédric Bouchard
      </p>
    </footer>
  )
}

export default Footer
