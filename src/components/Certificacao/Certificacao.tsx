import Image from "next/image";
import { certificacoes } from "@/data/certificacao";

import styles from "./Certificacao.module.css";

export default function Certificacao() {
  return (
    <section className={styles.certificacoes} id="certificacoes">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>Qualificações</p>

          <h2 className={styles.title}>Certificações</h2>

          <div className={styles.certifications}>
            {certificacoes.map((certificacao) => (
              <article
                className={styles.card}
                key={`${certificacao.instituicao}-${certificacao.titulo}`}
              >
                <a
                  href={certificacao.imagem.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.imageLink}
                  aria-label={`Visualizar certificado de ${certificacao.titulo}`}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={certificacao.imagem}
                      alt={`Certificado de ${certificacao.titulo}`}
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </a>

                <div className={styles.info}>
                  <div className={styles.header}>
                    <div>
                      <h3 className={styles.certificationTitle}>
                        {certificacao.titulo}
                      </h3>

                      <h4 className={styles.institution}>
                        {certificacao.instituicao}
                      </h4>
                    </div>

                    <span className={styles.period}>
                      {certificacao.periodo}
                    </span>
                  </div>

                  <p className={styles.description}>
                    {certificacao.descricao}
                  </p>

                  <a
                    href={certificacao.imagem.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Ver certificado
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}