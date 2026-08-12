import styles from "./About.module.css";

export default function About() {
    return (
        <section className={styles.about} id="sobre">
            <div className={styles.content}>
                <p className={styles.label}>Sobre mim</p>

                <h2>Desenvolvedor Full Stack</h2>

                <p>
                    Sou José Wenned, desenvolvedor Full Stack com experiência prática no
                    desenvolvimento de aplicações web utilizando Java, Spring Boot, React
                    e PostgreSQL.
                </p>

                <p>
                    Tenho experiência no desenvolvimento de APIs RESTful, integração
                    entre backend e frontend, persistência de dados com JPA/Hibernate e
                    implementação de autenticação e autorização utilizando Spring
                    Security e JWT.
                </p>

                <p>
                    No frontend, desenvolvo interfaces modernas, responsivas e
                    componentizadas utilizando React, TypeScript e SCSS.
                </p>

                <p>
                    Busco aplicar boas práticas de engenharia de software, com foco em
                    código organizado, manutenção, segurança e desenvolvimento de
                    soluções eficientes.
                </p>
            </div>
        </section>
    );
}