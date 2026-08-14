export interface Skill {
  category: string;
  technologies: string[];
}

export const skills: Skill[] = [
  {
    category: "Linguagens",
    technologies: ["Java", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    technologies: [
      "Spring Boot",
      "Spring Web",
      "Spring Data JPA",
      "Spring Security",
      "APIs REST",
    ],
  },
  {
    category: "Frontend",
    technologies: [
      "React",
      "React Router",
      "Axios",
      "React Hook Form",
      "Zod",
      "React Query",
      "SCSS",
    ],
  },
  {
    category: "Banco de Dados",
    technologies: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  },
  {
    category: "Persistência e ORM",
    technologies: ["JPA", "Hibernate"],
  },
  {
    category: "Arquitetura e Boas Práticas",
    technologies: [
      "POO",
      "SOLID",
      "Clean Architecture",
      "Domain Driven Design",
    ],
  },
  {
    category: "Segurança",
    technologies: ["Spring Security", "JWT"],
  },
  {
    category: "Testes",
    technologies: [
      "JUnit",
      "Mockito",
      "Vitest",
      "React Testing Library",
      "Cypress",
    ],
  },
  {
    category: "Ferramentas",
    technologies: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Maven",
      "Docker",
      "Swagger",
    ],
  },
  {
    category: "Metodologias",
    technologies: ["Scrum", "Kanban"],
  },
];