import { projects } from "@/data/projetos";
import styles from "./Projetos.module.css";

export default function Projects() {
    return (
        <section className={styles.container} id="projects">
            <div className={styles.content}>
                <h2 className={styles.title}>Projetos</h2>

                <div className={styles.projects}>
                    {projects.map((project) => (
                        <article
                            className={styles.card}
                            key={project.title}
                        >
                            <div className={styles.cardContent}>
                                <h3 className={styles.projectTitle}>
                                    {project.title}
                                </h3>

                                <p className={styles.description}>
                                    {project.description}
                                </p>

                                <div className={styles.technologies}>
                                    {project.technologies.map(
                                        (technology) => (
                                            <span
                                                className={styles.technology}
                                                key={technology}
                                            >
                                                {technology}
                                            </span>
                                        )
                                    )}
                                </div>

                                <div className={styles.links}>
                                    {project.githubfront && (
                                        <a
                                            href={project.githubfront}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub - Frontend
                                        </a>
                                    )}

                                    {project.githubback && (
                                        <a
                                            href={project.githubback}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub - Backend
                                        </a>
                                    )}

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Ver projeto
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}