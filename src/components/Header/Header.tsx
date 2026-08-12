import styles from "./Header.module.css";

export default function Header() {
    return(
        <header className={styles.header}>
            <nav>
                <span>José Wenned</span>
            </nav>
        </header>
    );
}