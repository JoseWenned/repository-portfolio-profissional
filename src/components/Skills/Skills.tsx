import { skills } from "@/data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={styles.skills} id="habilidades">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>Tecnologias</p>

          <h2 className={styles.title}>Habilidades</h2>

          <div className={styles.categories}>
            {skills.map((skill) => (
              <article
                className={styles.category}
                key={skill.category}
              >
                <h3 className={styles.categoryTitle}>
                  {skill.category}
                </h3>

                <ul className={styles.technologies}>
                  {skill.technologies.map((technology) => (
                    <li
                      className={styles.technology}
                      key={technology}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}