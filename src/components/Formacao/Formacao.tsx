import { formacao } from "@/data/formacao";
import styles from "./Formacao.module.css";

export default function Formacao() {
    return (
        <section className={styles.container} id="formacao">
            <div className={styles.content}>
                <h2 className={styles.title}>Formação</h2>

                <div className={styles.formacoes}>
                    {formacao.map((item) => (
                        <article
                            className={styles.card}
                            key={`${item.title}-${item.institution}`}
                        >
                            <div className={styles.cardContent}>
                                <h3 className={styles.course}>
                                    {item.title}
                                </h3>

                                <p className={styles.institution}>
                                    {item.institution}
                                </p>

                                <p className={styles.period}>
                                    {item.period}
                                </p>

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
        </section>
    );
}