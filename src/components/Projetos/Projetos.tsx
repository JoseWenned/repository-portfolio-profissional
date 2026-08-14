"use client";

import Image from "next/image";
import { useState } from "react";
import { projetos } from "@/data/projetos";
import styles from "./Projetos.module.css";

export default function Projetos() {
  const [selectedImages, setSelectedImages] = useState<
    Record<string, number>
  >({});

  return (
    <section className={styles.projectsSection} id="projetos">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>Portfólio</p>

          <h2 className={styles.title}>Projetos</h2>

          <div className={styles.projects}>
            {projetos.map((project) => {
              const selectedIndex = selectedImages[project.titulo] ?? 0;
              const selectedImage = project.imagens[selectedIndex];

              return (
                <article
                  className={styles.card}
                  key={project.titulo}
                >
                  <div className={styles.gallery}>
                    <div className={styles.mainImage}>
                      {selectedImage && (
                        <Image
                          src={selectedImage.src}
                          alt={selectedImage.alt}
                          fill
                          priority={selectedIndex === 0}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      )}
                    </div>

                    {project.imagens.length > 1 && (
                      <div className={styles.thumbnails}>
                        {project.imagens.map((image, index) => (
                          <button
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
                            aria-pressed={selectedIndex === index}
                          >
                            <Image
                              src={image.src}
                              alt=""
                              fill
                              sizes="80px"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.projectTitle}>
                      {project.titulo}
                    </h3>

                    <p className={styles.description}>
                      {project.descricao}
                    </p>

                    <div className={styles.technologies}>
                      {project.tecnologias.map((technology) => (
                        <span
                          className={styles.technology}
                          key={technology}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className={styles.links}>
                      {project.githubFront && (
                        <a
                          href={project.githubFront}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub - Frontend
                        </a>
                      )}

                      {project.githubBack && (
                        <a
                          href={project.githubBack}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub - Backend
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver projeto →
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}