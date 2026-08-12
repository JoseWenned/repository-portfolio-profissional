import { experiencias } from "@/data/experiencia";
import styles from "./Experiencia.module.css";

export default function Experiencia() {
  return (
    <section className={styles.experiencia} id="experiencia">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>Carreira</p>

          <h2 className={styles.title}>Experiência</h2>

          <div className={styles.experiences}>
            {experiencias.map((experiencia) => (
              <article
                className={styles.experience}
                key={`${experiencia.empresa}-${experiencia.cargo}`}
              >
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>
                      {experiencia.cargo}
                    </h3>

                    <h4 className={styles.company}>
                      {experiencia.empresa}
                    </h4>
                  </div>

                  <span className={styles.period}>
                    {experiencia.periodo}
                  </span>
                </div>

                <p className={styles.description}>
                  {experiencia.descricao}
                </p>

                <ul className={styles.activities}>
                  {experiencia.atividades.map((atividade) => (
                    <li key={atividade}>{atividade}</li>
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