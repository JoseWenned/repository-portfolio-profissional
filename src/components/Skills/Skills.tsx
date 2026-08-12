import { skills } from "@/data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={styles.skills} id="habilidades">
      <div className={styles.content}>
        <p className={styles.label}>Tecnologias</p>

        <h2>Habilidades</h2>

        <div className={styles.categories}>
          {skills.map((skill) => (
            <div className={styles.category} key={skill.category}>
              <h3>{skill.category}</h3>

              <ul>
                {skill.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}