import { contato } from "@/data/contato";

import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <section className={styles.contato} id="contato">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>Vamos conversar</p>

          <h2 className={styles.title}>Contato</h2>

          <p className={styles.description}>
            Estou disponível para novas oportunidades e desafios na área de
            desenvolvimento de software.
          </p>

          <div className={styles.contacts}>
            <a
              href={`mailto:${contato.email}`}
              className={styles.item}
            >
              <span className={styles.type}>E-mail</span>

              <strong className={styles.value}>
                {contato.email}
              </strong>
            </a>

            <a
              href={contato.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.item}
            >
              <span className={styles.type}>GitHub</span>

              <strong className={styles.value}>
                Ver perfil
              </strong>
            </a>

            <a
              href={contato.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.item}
            >
              <span className={styles.type}>LinkedIn</span>

              <strong className={styles.value}>
                Ver perfil
              </strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}