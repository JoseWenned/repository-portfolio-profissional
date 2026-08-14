"use client";

import { motion, type Variants } from "motion/react";

import { skills } from "@/data/skills";
import styles from "./Skills.module.css";

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
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const categoryVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const technologyVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section className={styles.skills} id="habilidades">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
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
            Tecnologias
          </motion.p>

          <motion.h2
            className={styles.title}
            variants={itemVariants}
          >
            Habilidades
          </motion.h2>

          <motion.div
            className={styles.categories}
            variants={containerVariants}
          >
            {skills.map((skill) => (
              <motion.article
                className={styles.category}
                key={skill.category}
                variants={categoryVariants}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <motion.h3
                  className={styles.categoryTitle}
                  variants={itemVariants}
                >
                  {skill.category}
                </motion.h3>

                <motion.ul
                  className={styles.technologies}
                  variants={containerVariants}
                >
                  {skill.technologies.map((technology) => (
                    <motion.li
                      className={styles.technology}
                      key={technology}
                      variants={technologyVariants}
                      whileHover={{
                        y: -2,
                        scale: 1.03,
                      }}
                    >
                      {technology}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}