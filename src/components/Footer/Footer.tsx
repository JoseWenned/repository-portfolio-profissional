"use client";

import { motion } from "motion/react";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <div className={styles.container}>
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          © {new Date().getFullYear()} José Wenned. Todos os direitos
          reservados.
        </motion.p>
      </div>
    </motion.footer>
  );
}