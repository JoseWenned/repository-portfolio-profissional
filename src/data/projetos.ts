export interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  githubFront: string;
  githubBack: string;
  demo: string;
}

export const projetos: Projeto[] = [
  {
    titulo: "Sistema de Gestão Comercial — Kipolpas",
    descricao:
      "Aplicação Full Stack para gestão comercial, com módulos de pedidos, clientes, catálogo de produtos e gerenciamento de preços.",
    tecnologias: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "Spring Security",
      "JWT",
      "Clean Architecture",
      "DDD",
      "SCSS",
      "Jest",
      "React Testing Library",
    ],
    githubFront: "https://github.com/JoseWenned/Software-Front-Kipolpas",
    githubBack: "https://github.com/JoseWenned/software_backend_kipolpas",
    demo: "https://fabricakipolpas.com.br/",
  },
];