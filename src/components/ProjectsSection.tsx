import React from "react"
import styles from "./ProjectsSection.module.css"

interface TechBadge {
    name: string
    icon: string
    variant?: string
}

interface Project {
    title: string
    language: string
    description: string
    techBadges: TechBadge[]
    accentColor: string
    link?: string
    inProgress?: boolean
}

const getIconUrl = (slug: string, variant = "original"): string =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`

const projects: Project[] = [
    {
        title: "Robot autonome — WaveRover",
        language: "Python",
        description:
            "Programmation d'un véhicule WaveRover sous ROS2 : architecture de nœuds publish/subscribe, cartographie et localisation simultanées (SLAM), gestion des capteurs et navigation autonome.",
        techBadges: [
            { name: "Python", icon: "python" },
            { name: "ROS2", icon: "ros" },
        ],
        accentColor: "#C4333E",
        inProgress: true,
    },
    {
        title: "Site web UFood",
        language: "JavaScript",
        description:
            "SPA de découverte de restaurants avec routing côté client, appels à une API REST et déploiement continu sur Vercel.",
        techBadges: [
            { name: "JavaScript", icon: "javascript" },
            { name: "Vue.js", icon: "vuejs" },
        ],
        accentColor: "#5B9BD5",
        link: "https://ufood-2025.vercel.app",
    },
    {
        title: "API de marketplace",
        language: "Java",
        description:
            "API REST complète avec gestion de produits, vendeurs et acheteurs. Conteneurisée avec Docker et pipeline CI/CD automatisé via GitHub Actions.",
        techBadges: [
            { name: "Java", icon: "java" },
            { name: "Docker", icon: "docker" },
            { name: "GitHub Actions", icon: "githubactions" },
        ],
        accentColor: "#B06FE8",
    },
    {
        title: "Simulateur de coupes CNC",
        language: "Java",
        description:
            "Application permettant de dessiner des trajectoires d'usinage et de générer le G-code correspondant pour piloter des machines CNC physiques.",
        techBadges: [
            { name: "Java", icon: "java" },
        ],
        accentColor: "#6B8CFF",
    },
    {
        title: "Forum de discussion",
        language: "Python, JavaScript",
        description:
            "Application web fullstack : backend REST en Flask, frontend réactif en Vue.js, base de données MySQL. Gestion de l'authentification, des fils de discussion et des utilisateurs.",
        techBadges: [
            { name: "Python", icon: "python" },
            { name: "Flask", icon: "flask" },
            { name: "JavaScript", icon: "javascript" },
            { name: "Vue.js", icon: "vuejs" },
            { name: "MySQL", icon: "mysql" },
        ],
        accentColor: "#FFC1CC",
    },
    {
        title: "Gestionnaire d'équipe de hockey",
        language: "C++",
        description:
            "Application de gestion d'équipes, joueurs et coachs avec héritage, interface en ligne de commande et manipulation de données via la STL.",
        techBadges: [
            { name: "C++", icon: "cplusplus" },
        ],
        accentColor: "#A8DADC",
    },
    {
        title: "Jeu vidéo Quoridor",
        language: "Python",
        description:
            "Implémentation complète du jeu de société : logique de placement de murs, validation qu'un chemin reste toujours accessible pour chaque joueur, gestion des tours et interface graphique.",
        techBadges: [
            { name: "Python", icon: "python" },
        ],
        accentColor: "#B39CD0",
    },
]

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className={styles.projectsSection}>
            <h2 className={styles.heading}>Mes projets</h2>

            <div className={styles.projectGrid}>
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className={styles.projectCard}
                        style={{ "--accent-color": project.accentColor } as React.CSSProperties}
                    >
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            {project.inProgress && (
                                <span className={styles.inProgressBadge}>en cours</span>
                            )}
                        </div>
                        <span className={styles.languageLabel} style={{ color: project.accentColor }}>
                            {project.language}
                        </span>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.techBadges}>
                            {project.techBadges.map((badge) => (
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
                        {project.link && (
                            <a
                                className={styles.projectLink}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Accéder au site web ↗
                            </a>
                        )}
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection
