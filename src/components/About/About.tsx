"use client";

import { motion, type Variants } from "motion/react";
import styles from "./About.module.css";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <section className={styles.about} id="sobre">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <motion.p
            className={styles.label}
            variants={itemVariants}
          >
            Sobre mim
          </motion.p>

          <motion.h2
            className={styles.title}
            variants={itemVariants}
          >
            Desenvolvedor Full Stack
          </motion.h2>

          <motion.div
            className={styles.description}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              Sou José Wenned, desenvolvedor Full Stack com experiência
              prática no desenvolvimento de aplicações web utilizando Java,
              Spring Boot, React e PostgreSQL.
            </motion.p>

            <motion.p variants={itemVariants}>
              Tenho experiência no desenvolvimento de APIs RESTful,
              integração entre backend e frontend, persistência de dados com
              JPA/Hibernate e implementação de autenticação e autorização
              utilizando Spring Security e JWT.
            </motion.p>

            <motion.p variants={itemVariants}>
              No frontend, desenvolvo interfaces modernas, responsivas e
              componentizadas utilizando React, TypeScript e SCSS.
            </motion.p>

            <motion.p variants={itemVariants}>
              Busco aplicar boas práticas de engenharia de software, com foco
              em código organizado, manutenção, segurança e desenvolvimento
              de soluções eficientes.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}