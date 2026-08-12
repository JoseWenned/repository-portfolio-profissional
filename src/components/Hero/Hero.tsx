import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>Olá, eu sou</p>

          <h1 className={styles.title}>José Wenned</h1>

          <h2 className={styles.subtitle}>
            Desenvolvedor de Software
          </h2>

          <p className={styles.description}>
            Desenvolvo aplicações web com foco em qualidade, organização
            e boas práticas de desenvolvimento.
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
      </div>
    </section>
  );
}