import Image from "next/image";
import styles from "./Certificacao.module.css";
import { certificacoes } from "../../data/certificacao";

export default function Certificacao() {
  return (
    <section className={styles.certificacoes} id="certificacoes">
      <div className={styles.container}>
        <h2>Certificações</h2>

        <div className={styles.content}>
          {certificacoes.map((certificacao) => (
            <article
              className={styles.item}
              key={`${certificacao.instituicao}-${certificacao.titulo}`}
            >
              <a
                href={certificacao.imagem.src}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imageLink}
              >
                <Image
                  src={certificacao.imagem}
                  alt={`Certificado de ${certificacao.titulo}`}
                  className={styles.image}
                  width={800}
                  height={600}
                />
              </a>

              <div className={styles.info}>
                <div className={styles.header}>
                  <div>
                    <h3>{certificacao.titulo}</h3>
                    <h4>{certificacao.instituicao}</h4>
                  </div>

                  <span>{certificacao.periodo}</span>
                </div>

                <p>{certificacao.descricao}</p>

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
    </section>
  );
}