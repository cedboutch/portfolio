import React, { useState } from "react";
import styles from "./ResumeSection.module.css";
import benevaLogo from "../assets/BenevaLogo.png";
import idexiaLogo from "../assets/IdexiaLogo.png";

type ResumeTab = "work" | "education";

const workItems = [
    {
        role: "Stagiaire Innovateur",
        place: "Beneva",
        date: "Été 2025",
        details: "détail",
        logo: benevaLogo,
    },
    {
        role: "Stagiaire en R&D dans le domaine de l’intelligence artificielle",
        place: "Idexia",
        date: "Été 2024",
        details: "détail",
        logo: idexiaLogo,
    },
];

const educationItems = [
    {
        program: "Baccalauréat en Génie Logiciel",
        school: "Université Laval",
        date: "2022 - Present",
    },
    {
        program: "Diplôme d'Études Collégiales en Sciences de la Nature",
        school: "Collège Notre-Dame-de-Foy (CNDF)",
        date: "2020 - 2022",
    },
];

const ResumeSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ResumeTab>("work");

    return (
        <section id="experience" className={styles.resumeSection}>
            <h2 className={styles.heading}>Mon expérience</h2>

            <div className={styles.resumeBox}>
                <div className={styles.tabButtons}>
                    <button
                        type="button"
                        className={`${styles.tabButton} ${activeTab === "work" ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab("work")}
                    >
                        Travail
                    </button>
                    <button
                        type="button"
                        className={`${styles.tabButton} ${activeTab === "education" ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab("education")}
                    >
                        Éducation
                    </button>
                </div>

                <div className={styles.tabContent} id="education">
                    {activeTab === "work" &&
                        workItems.map((item) => (
                            <article key={`${item.role}-${item.place}`} className={styles.itemCard}>
                                <div className={styles.itemCardContent}>
                                    {item.logo && (
                                        <div className={styles.logoContainer}>
                                            <img src={item.logo} alt={`${item.place} logo`} className={styles.companyLogo} />
                                        </div>
                                    )}
                                    <div className={styles.itemBody}>
                                        <div className={styles.itemHeader}>
                                            <h3>{item.role}</h3>
                                            <span>{item.date}</span>
                                        </div>
                                        <p className={styles.itemPlace}>{item.place}</p>
                                        <p>{item.details}</p>
                                    </div>
                                </div>
                            </article>
                        ))}

                    {activeTab === "education" &&
                        educationItems.map((item) => (
                            <article key={`${item.program}-${item.school}`} className={styles.itemCard}>
                                <div className={styles.itemHeader}>
                                    <h3>{item.program}</h3>
                                    <span>{item.date}</span>
                                </div>
                                <p className={styles.itemPlace}>{item.school}</p>
                            </article>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;