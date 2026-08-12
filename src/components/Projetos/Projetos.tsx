import { projetos } from "@/data/projetos";
import styles from "./Projetos.module.css";

export default function Projetos() {
  return (
    <section className={styles.projectsSection} id="projetos">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>Portfólio</p>

          <h2 className={styles.title}>Projetos</h2>

          <div className={styles.projects}>
            {projetos.map((project) => (
              <article className={styles.card} key={project.titulo}>
                <div className={styles.cardContent}>
                  <h3 className={styles.projectTitle}>
                    {project.titulo}
                  </h3>

                  <p className={styles.description}>
                    {project.descricao}
                  </p>

                  <div className={styles.technologies}>
                    {project.tecnologias.map((technology) => (
                      <span
                        className={styles.technology}
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className={styles.links}>
                    {project.githubFront && (
                      <a
                        href={project.githubFront}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub - Frontend
                      </a>
                    )}

                    {project.githubBack && (
                      <a
                        href={project.githubBack}
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
      </div>
    </section>
  );
}