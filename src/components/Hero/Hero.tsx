import Image from "next/image";
import styles from "./Hero.module.css";

//Imagens
import fotoPerfil from "../../assets/fotos/WhatsApp Image 2026-04-13 at 23.27.49.jpeg";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.backgroundDecoration} aria-hidden="true">
        <span className={styles.grid} />
        <span className={styles.glow} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.greeting}>Olá, eu sou</p>

            <h1 className={styles.title}>
              José <span>Wenned</span>
            </h1>

            <h2 className={styles.subtitle}>
              Desenvolvedor de Software
            </h2>

            <p className={styles.description}>
              Desenvolvo aplicações web com foco em qualidade,
              organização e boas práticas de desenvolvimento.
            </p>

            <div className={styles.actions}>
              <a href="#projetos" className={styles.primaryAction}>
                Ver projetos
              </a>

              <a href="#contato" className={styles.secondaryAction}>
                Entre em contato
              </a>
            </div>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.visualFrame}>
              <div className={styles.visualContent}>
                <span className={styles.visualInitials}>
                  <Image
                    src={fotoPerfil}
                    alt="José Wenned, Desenvolvedor de Software"
                    fill
                    priority
                    className={styles.profileImage}
                  />
                </span>
              </div>
            </div>

            <span className={styles.decorativeCircle} />
            <span className={styles.decorativeSquare} />
            <span className={styles.decorativeDiamond}>◇</span>
          </div>
        </div>
      </div>
    </section>
  );
}