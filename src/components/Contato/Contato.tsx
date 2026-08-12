import styles from "./Contato.module.css";
import { contato } from "../../data/contato";

export default function Contato() {
  return (
    <section className={styles.contato} id="contato">
      <div className={styles.container}>
        <h2>Contato</h2>

        <p className={styles.description}>
          Estou disponível para novas oportunidades e desafios na área de
          desenvolvimento de software.
        </p>

        <div className={styles.content}>
          <a href={`mailto:${contato.email}`} className={styles.item}>
            <span>E-mail</span>
            <strong>{contato.email}</strong>
          </a>

          <a
            href={contato.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            <span>GitHub</span>
            <strong>Ver perfil</strong>
          </a>

          <a
            href={contato.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            <span>LinkedIn</span>
            <strong>Ver perfil</strong>
          </a>
        </div>
      </div>
    </section>
  );
}