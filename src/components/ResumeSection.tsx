import React, { useState } from "react";
import styles from "./ResumeSection.module.css";
import benevaLogo from "../assets/benevaLogo.png";
import idexiaLogo from "../assets/idexiaLogo.png";
import ulavalLogo from "../assets/ulavalLogo.png";
import cndfLogo from "../assets/cndfLogo.png";

type ResumeTab = "work" | "education";

interface TechBadge {
    name: string;
    icon: string;
    variant?: string;
}

const getIconUrl = (slug: string, variant = "original"): string =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;

const workItems = [
    {
        role: "Stagiaire Innovateur",
        place: "Beneva",
        date: "Été 2025",
        details: [
            "Réalisé des analyses structurées sur des technologies émergentes (IA générative, outils/plateformes), et synthétisé les apprentissages sous forme de présentations.",
            "Prototypé et intégré des modèles d’intelligence artificielle dans une application web.",
            "Développé des scripts de tests en Python pour valider les prédictions de modèles d’IA générative.",
        ],
        techBadges: [
            { name: "Python", icon: "python" },
            { name: "Vue.js", icon: "vuejs" },
            { name: "TypeScript", icon: "typescript" },
            { name: "AWS", icon: "amazonwebservices", variant: "original-wordmark" },
        ] as TechBadge[],
        logo: benevaLogo,
        logoPadding: "2px",
        color: "#B06FE8",
    },
    {
        role: "Stagiaire en R&D dans le domaine de l’intelligence artificielle",
        place: "Idexia",
        date: "Été 2023 et 2024",
        details: [
            "Développé un pipeline NLP avec spaCy pour le prétraitement de texte (tokenisation, annotation, normalisation).",
            "Mis en place des workflows Microsoft 365 (Power Automate, AI Builder, Azure AI Studio) pour automatiser des processus.",
            "Construit et préparé des jeux de données pour entraîner des modèles sur Hugging Face.",
            "Conduit des tests d’hypothèses et analysé les résultats en vue d’améliorer en continu les solutions IA.",
            "Rédigé de la documentation technique et des documents de présentation.",
            "Présenté les avancées à l’équipe lors des revues de sprint.",
        ],
        techBadges: [
            { name: "Python", icon: "python" },
            { name: "PyTorch", icon: "pytorch" },
            { name: "Azure", icon: "azure" },
        ] as TechBadge[],
        logo: idexiaLogo,
        color: "#6B8CFF",
    },
];

const educationItems = [
    {
        program: "Baccalauréat en Génie Logiciel",
        school: "Université Laval",
        date: "2022 - Aujourd'hui",
        logo: ulavalLogo,
        color: "#C4333E",
    },
    {
        program: "Diplôme d'Études Collégiales en Sciences de la Nature",
        school: "Collège Notre-Dame-de-Foy (CNDF)",
        date: "2020 - 2022",
        logo: cndfLogo,
        color: "#5B9BD5",
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
                                        <div className={styles.logoContainer} style={item.logoPadding ? { padding: item.logoPadding } : undefined}>
                                            <img src={item.logo} alt={`${item.place} logo`} className={styles.companyLogo} />
                                        </div>
                                    )}
                                    <div className={styles.itemBody}>
                                        <div className={styles.itemHeader}>
                                            <h3>{item.role}</h3>
                                            <span>{item.date}</span>
                                        </div>
                                        <p className={styles.itemPlace} style={{ color: item.color }}>{item.place}</p>
                                        <ul className={styles.detailList}>
                                            {item.details.map((detail, i) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                        {item.techBadges.length > 0 && (
                                            <div className={styles.techBadges}>
                                                {item.techBadges.map((badge) => (
                                                    <span key={badge.name} className={styles.techBadge}>
                                                        {badge.icon && (
                                                            <img
                                                                src={getIconUrl(badge.icon, badge.variant)}
                                                                alt=""
                                                                className={styles.techBadgeIcon}
                                                                loading="lazy"
                                                            />
                                                        )}
                                                        <span>{badge.name}</span>
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}

                    {activeTab === "education" &&
                        educationItems.map((item) => (
                            <article key={`${item.program}-${item.school}`} className={styles.itemCard}>
                                <div className={styles.itemCardContent}>
                                    <div className={styles.logoContainer}>
                                        <img src={item.logo} alt={`${item.school} logo`} className={styles.companyLogo} />
                                    </div>
                                    <div className={styles.itemBody}>
                                        <div className={styles.itemHeader}>
                                            <h3>{item.program}</h3>
                                            <span>{item.date}</span>
                                        </div>
                                        <p className={styles.itemPlace} style={{ color: item.color }}>{item.school}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;