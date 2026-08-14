"use client";

import { motion, type Variants } from "motion/react";
import { experiencias } from "@/data/experiencia";
import styles from "./Experiencia.module.css";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Experiencia() {
  return (
    <section className={styles.experiencia} id="experiencia">
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.label}>Carreira</p>

            <h2 className={styles.title}>Experiência</h2>
          </motion.div>

          <motion.div
            className={styles.experiences}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {experiencias.map((experiencia) => (
              <motion.article
                className={styles.experience}
                key={`${experiencia.empresa}-${experiencia.cargo}`}
                variants={itemVariants}
              >
                <div className={styles.timelineMarker} />

                <div className={styles.header}>
                  <div className={styles.heading}>
                    <h3 className={styles.role}>
                      {experiencia.cargo}
                    </h3>

                    <h4 className={styles.company}>
                      {experiencia.empresa}
                    </h4>
                  </div>

                  <span className={styles.period}>
                    {experiencia.periodo}
                  </span>
                </div>

                <p className={styles.description}>
                  {experiencia.descricao}
                </p>

                <ul className={styles.activities}>
                  {experiencia.atividades.map((atividade) => (
                    <li key={atividade}>{atividade}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}