"use client";

import { motion, type Variants } from "motion/react";

import { contato } from "@/data/contato";

import styles from "./Contato.module.css";

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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Contato() {
  return (
    <section className={styles.contato} id="contato">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <motion.p
            className={styles.label}
            variants={itemVariants}
          >
            Vamos conversar
          </motion.p>

          <motion.h2
            className={styles.title}
            variants={itemVariants}
          >
            Contato
          </motion.h2>

          <motion.p
            className={styles.description}
            variants={itemVariants}
          >
            Estou disponível para novas oportunidades e desafios na área de
            desenvolvimento de software.
          </motion.p>

          <motion.div
            className={styles.contacts}
            variants={containerVariants}
          >
            <motion.a
              href={`mailto:${contato.email}`}
              className={styles.item}
              variants={itemVariants}
              whileHover={{
                y: -6,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <span className={styles.type}>E-mail</span>

              <strong className={styles.value}>
                {contato.email}
              </strong>
            </motion.a>

            <motion.a
              href={contato.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.item}
              variants={itemVariants}
              whileHover={{
                y: -6,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <span className={styles.type}>GitHub</span>

              <strong className={styles.value}>
                Ver perfil
              </strong>
            </motion.a>

            <motion.a
              href={contato.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.item}
              variants={itemVariants}
              whileHover={{
                y: -6,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <span className={styles.type}>LinkedIn</span>

              <strong className={styles.value}>
                Ver perfil
              </strong>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}