"use client";

import { motion, type Variants } from "motion/react";

import { formacoes } from "@/data/formacao";

import styles from "./Formacao.module.css";

const headerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

const timelineContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const timelineItem: Variants = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Formacao() {
  return (
    <section className={styles.formacao} id="formacao">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <motion.p
            className={styles.label}
            variants={headerItem}
          >
            Educação
          </motion.p>

          <motion.h2
            className={styles.title}
            variants={headerItem}
          >
            Formação
          </motion.h2>

          <motion.div
            className={styles.formacoes}
            variants={timelineContainer}
          >
            {formacoes.map((item) => (
              <motion.article
                className={styles.card}
                key={`${item.titulo}-${item.instituicao}`}
                variants={timelineItem}
                whileHover={{
                  x: 6,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <div className={styles.cardContent}>
                  <motion.h3
                    className={styles.course}
                    whileHover={{
                      x: 3,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {item.titulo}
                  </motion.h3>

                  <p className={styles.institution}>
                    {item.instituicao}
                  </p>

                  <p className={styles.period}>
                    {item.periodo}
                  </p>

                  {item.status && (
                    <motion.span
                      className={styles.status}
                      whileHover={{
                        scale: 1.03,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      {item.status}
                    </motion.span>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}