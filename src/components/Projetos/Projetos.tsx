"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { useState } from "react";

import { projetos } from "@/data/projetos";

import styles from "./Projetos.module.css";

const projectsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const projectCard: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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

export default function Projetos() {
  const [selectedImages, setSelectedImages] = useState<
    Record<string, number>
  >({});

  return (
    <section className={styles.projectsSection} id="projetos">
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.header}
            variants={headerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <motion.p
              className={styles.label}
              variants={headerItem}
            >
              Portfólio
            </motion.p>

            <motion.h2
              className={styles.title}
              variants={headerItem}
            >
              Projetos
            </motion.h2>
          </motion.div>

          <motion.div
            className={styles.projects}
            variants={projectsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            {projetos.map((project) => {
              const selectedIndex =
                selectedImages[project.titulo] ?? 0;

              const selectedImage =
                project.imagens[selectedIndex];

              return (
                <motion.article
                  className={styles.card}
                  key={project.titulo}
                  variants={projectCard}
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                >
                  <div className={styles.gallery}>
                    <motion.div
                      className={styles.mainImage}
                      layout
                    >
                      {selectedImage && (
                        <motion.div
                          key={selectedImage.src.src}
                          className={styles.imageWrapper}
                          initial={{
                            opacity: 0,
                            scale: 1.03,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            duration: 0.4,
                            ease: "easeOut",
                          }}
                        >
                          <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            priority={selectedIndex === 0}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </motion.div>
                      )}
                    </motion.div>

                    {project.imagens.length > 1 && (
                      <div className={styles.thumbnails}>
                        {project.imagens.map((image, index) => (
                          <motion.button
                            type="button"
                            className={`${styles.thumbnail} ${
                              selectedIndex === index
                                ? styles.thumbnailActive
                                : ""
                            }`}
                            key={image.alt}
                            onClick={() =>
                              setSelectedImages((previous) => ({
                                ...previous,
                                [project.titulo]: index,
                              }))
                            }
                            aria-label={`Visualizar imagem ${
                              index + 1
                            } de ${project.imagens.length}`}
                            aria-pressed={
                              selectedIndex === index
                            }
                            whileHover={{
                              y: -3,
                              scale: 1.03,
                            }}
                            whileTap={{
                              scale: 0.96,
                            }}
                          >
                            <Image
                              src={image.src}
                              alt=""
                              fill
                              sizes="80px"
                            />
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={styles.cardContent}>
                    <motion.h3
                      className={styles.projectTitle}
                      whileHover={{
                        x: 3,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      {project.titulo}
                    </motion.h3>

                    <p className={styles.description}>
                      {project.descricao}
                    </p>

                    <div className={styles.technologies}>
                      {project.tecnologias.map((technology) => (
                        <motion.span
                          className={styles.technology}
                          key={technology}
                          whileHover={{
                            y: -2,
                            scale: 1.03,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                        >
                          {technology}
                        </motion.span>
                      ))}
                    </div>

                    <div className={styles.links}>
                      {project.githubFront && (
                        <motion.a
                          href={project.githubFront}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{
                            y: -2,
                          }}
                          whileTap={{
                            scale: 0.97,
                          }}
                        >
                          GitHub - Frontend
                        </motion.a>
                      )}

                      {project.githubBack && (
                        <motion.a
                          href={project.githubBack}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{
                            y: -2,
                          }}
                          whileTap={{
                            scale: 0.97,
                          }}
                        >
                          GitHub - Backend
                        </motion.a>
                      )}

                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{
                            y: -3,
                            scale: 1.02,
                          }}
                          whileTap={{
                            scale: 0.97,
                          }}
                        >
                          Ver projeto →
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}