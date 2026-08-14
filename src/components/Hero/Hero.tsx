"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";

import styles from "./Hero.module.css";

// Imagens
import fotoPerfil from "../../assets/fotos/WhatsApp Image 2026-04-13 at 23.27.49.jpeg";

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

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div
        className={styles.backgroundDecoration}
        aria-hidden="true"
      >
        <span className={styles.grid} />
        <span className={styles.glow} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={styles.textContent}
            variants={containerVariants}
          >
            <motion.p
              className={styles.greeting}
              variants={itemVariants}
            >
              Olá, eu sou
            </motion.p>

            <motion.h1
              className={styles.title}
              variants={itemVariants}
            >
              José <span>Wenned</span>
            </motion.h1>

            <motion.h2
              className={styles.subtitle}
              variants={itemVariants}
            >
              Desenvolvedor de Software
            </motion.h2>

            <motion.p
              className={styles.description}
              variants={itemVariants}
            >
              Desenvolvo aplicações web com foco em qualidade,
              organização e boas práticas de desenvolvimento.
            </motion.p>

            <motion.div
              className={styles.actions}
              variants={itemVariants}
            >
              <motion.a
                href="#projetos"
                className={styles.primaryAction}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                Ver projetos
              </motion.a>

              <motion.a
                href="#contato"
                className={styles.secondaryAction}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                Entre em contato
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.visual}
            aria-hidden="true"
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: "easeOut",
            }}
          >
            <motion.div
              className={styles.visualFrame}
              animate={{
                rotate: [4, 5, 4],
                y: [0, -6, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className={styles.visualContent}>
                <span className={styles.visualInitials}>
                  <Image
                    src={fotoPerfil}
                    alt="José Wenned, Desenvolvedor de Software"
                    fill
                    priority
                    className={styles.profileImage}
                  />
                </span>
              </div>
            </motion.div>

            <motion.span
              className={styles.decorativeCircle}
              animate={{
                y: [0, -12, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.span
              className={styles.decorativeSquare}
              animate={{
                y: [0, 10, 0],
                rotate: [45, 55, 45],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.span
              className={styles.decorativeDiamond}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ◇
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}