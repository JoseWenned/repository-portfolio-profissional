import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <p className={styles.greeting}>Olá, eu sou</p>

                <h1>José Wenned</h1>

                <h2>Desenvolvedor de Software</h2>

                <p className={styles.description}>
                    Desenvolvo aplicações web com foco em qualidade, organização e boas
                    práticas de desenvolvimento.
                </p>
            </div>
        </section>
    );
}