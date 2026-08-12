import { formacoes } from "@/data/formacao";
import styles from "./Formacao.module.css";

export default function Formacao() {
  return (
    <section className={styles.formacao} id="formacao">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>Educação</p>

          <h2 className={styles.title}>Formação</h2>

          <div className={styles.formacoes}>
            {formacoes.map((item) => (
              <article
                className={styles.card}
                key={`${item.titulo}-${item.instituicao}`}
              >
                <div className={styles.cardContent}>
                  <h3 className={styles.course}>{item.titulo}</h3>

                  <p className={styles.institution}>
                    {item.instituicao}
                  </p>

                  <p className={styles.period}>{item.periodo}</p>

                  {item.status && (
                    <span className={styles.status}>
                      {item.status}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}