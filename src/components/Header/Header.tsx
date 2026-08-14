"use client";

import { AnimatePresence, motion } from "motion/react";
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

      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div className={styles.container}>
          <nav
            className={styles.navigation}
            aria-label="Navegação principal"
          >
            <motion.a
              href="#inicio"
              className={styles.logo}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              José Wenned
            </motion.a>

            <ul className={styles.menu}>
              {navigationItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.25 + index * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <a href={item.href} className={styles.link}>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.button
              type="button"
              className={styles.menuButton}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={handleMenuToggle}
              whileTap={{ scale: 0.92 }}
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
            </motion.button>
          </nav>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                id="mobile-navigation"
                className={styles.mobileNavigation}
                aria-label="Navegação mobile"
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <ul className={styles.mobileMenu}>
                  {navigationItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.04,
                        ease: "easeOut",
                      }}
                    >
                      <a
                        href={item.href}
                        className={styles.mobileLink}
                        onClick={handleNavigation}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}