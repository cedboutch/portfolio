import React from 'react';
import styles from './HeroSection.module.css';
import heroImg from '../assets/HeroImage.png';

const HeroSection: React.FC = () => {
    return (
        <section id="about" className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={styles.greeting}>Yo!</h1>
                <h2 className={styles.title}>Cédric Bouchard</h2>
                <p className={styles.description}>
                    Je suis un étudiant en génie logiciel et je suis passionné par le développement de logiciels et l'intelligence artificielle.
                </p>
            </div>

            <div className={styles.heroImageContainer}>
                <img src={heroImg} alt="My self" className={styles.heroImage} />
            </div>
        </section>
    );
};

export default HeroSection;
