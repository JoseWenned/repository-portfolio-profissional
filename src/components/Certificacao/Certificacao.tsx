"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";

import { certificacoes } from "@/data/certificacao";

import styles from "./Certificacao.module.css";

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

export default function Certificacao() {
  return (
    <section
      className={styles.certificacoes}
      id="certificacoes"
    >
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          <motion.p
            className={styles.label}
            variants={itemVariants}
          >
            Qualificações
          </motion.p>

          <motion.h2
            className={styles.title}
            variants={itemVariants}
          >
            Certificações
          </motion.h2>

          <motion.div
            className={styles.certifications}
            variants={containerVariants}
          >
            {certificacoes.map((certificacao) => (
              <motion.article
                className={styles.card}
                key={`${certificacao.instituicao}-${certificacao.titulo}`}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
              >
                <a
                  href={certificacao.imagem.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.imageLink}
                  aria-label={`Visualizar certificado de ${certificacao.titulo}`}
                >
                  <motion.div
                    className={styles.imageWrapper}
                    whileHover="hover"
                  >
                    <motion.div
                      className={styles.imageInner}
                      variants={{
                        initial: {
                          scale: 1,
                        },
                        hover: {
                          scale: 1.04,
                        },
                      }}
                      initial="initial"
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      <Image
                        src={certificacao.imagem}
                        alt={`Certificado de ${certificacao.titulo}`}
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </motion.div>
                </a>

                <div className={styles.info}>
                  <div className={styles.header}>
                    <div>
                      <h3 className={styles.certificationTitle}>
                        {certificacao.titulo}
                      </h3>

                      <h4 className={styles.institution}>
                        {certificacao.instituicao}
                      </h4>
                    </div>

                    <span className={styles.period}>
                      {certificacao.periodo}
                    </span>
                  </div>

                  <p className={styles.description}>
                    {certificacao.descricao}
                  </p>

                  <motion.a
                    href={certificacao.imagem.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                  >
                    Ver certificado
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}