"use client";

import { useState } from "react";
import styles from "./Header.module.css";

const navigationItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Formação", href: "#formacao" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Certificações", href: "#certificacoes" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((previous) => !previous);
  };

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <a href="#conteudo" className={styles.skipLink}>
        Pular para o conteúdo principal
      </a>

      <header className={styles.header}>
        <div className={styles.container}>
          <nav
            className={styles.navigation}
            aria-label="Navegação principal"
          >
            <a href="#inicio" className={styles.logo}>
              José Wenned
            </a>

            <ul className={styles.menu}>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={styles.menuButton}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={handleMenuToggle}
            >
              <span
                className={isMenuOpen ? styles.menuLineOpen : ""}
              />
              <span
                className={isMenuOpen ? styles.menuLineOpen : ""}
              />
              <span
                className={isMenuOpen ? styles.menuLineOpen : ""}
              />
            </button>
          </nav>

          {isMenuOpen && (
            <nav
              id="mobile-navigation"
              className={styles.mobileNavigation}
              aria-label="Navegação mobile"
            >
              <ul className={styles.mobileMenu}>
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={styles.mobileLink}
                      onClick={handleNavigation}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}