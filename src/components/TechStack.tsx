import React from "react"
import styles from "./TechStack.module.css"

interface TechItem {
  name: string
  icon: string // devicon slug, or empty for fallback
}

interface TechCategory {
  title: string
  items: TechItem[]
}

const techCategories: TechCategory[] = [
  {
    title: "Langages",
    items: [
      { name: "Python", icon: "python" },
      { name: "C/C++", icon: "cplusplus" },
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
    ],
  },
  {
    title: "Frameworks & Librairies",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Vue.js", icon: "vuejs" },
      { name: "React", icon: "react" },
      { name: "PyTorch", icon: "pytorch" },
    ],
  },
  {
    title: "Bases de données",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    title: "Outils",
    items: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Jupyter Notebooks", icon: "jupyter" },
    ],
  },
]

const getIconUrl = (slug: string): string =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`

const FallbackIcon: React.FC = () => (
  <svg className={styles.fallbackIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const handleIconError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.display = "none"
  const fallback = e.currentTarget.nextElementSibling as HTMLElement | null
  if (fallback) fallback.style.display = "flex"
}

const TechStack: React.FC = () => {
  let globalIndex = 0

  return (
    <section className={styles.section} id="skills">
      <h2 className={styles.heading}>Compétences techniques</h2>

      <div className={styles.categoriesGrid}>
        {techCategories.map((category) => (
          <div key={category.title} className={styles.category}>
            <h3 className={styles.categoryLabel}>{category.title}</h3>
            <div className={styles.pillsRow}>
              {category.items.map((item) => {
                const delay = globalIndex * 55
                globalIndex++
                return (
                  <div
                    key={`${category.title}-${item.name}`}
                    className={styles.pill}
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    {item.icon ? (
                      <>
                        <img
                          src={getIconUrl(item.icon)}
                          alt=""
                          className={styles.pillIcon}
                          loading="lazy"
                          onError={handleIconError}
                        />
                        <span style={{ display: "none" }}>
                          <FallbackIcon />
                        </span>
                      </>
                    ) : (
                      <FallbackIcon />
                    )}
                    <span className={styles.pillText}>{item.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
