import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          © {currentYear} José Wenned. Todos os direitos reservados.
        </p>

        <p>
          Desenvolvido com Next.js, React, TypeScript e CSS.
        </p>
      </div>
    </footer>
  );
}