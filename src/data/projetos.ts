import type { StaticImageData } from "next/image";

//Project Kipolpas Imagens 
import image01 from "../assets/projetos/kipolpas/Captura de tela 2026-08-14 015143.png";
import image02 from "../assets/projetos/kipolpas/Captura de tela 2026-08-14 015215.png";
import image03 from "../assets/projetos/kipolpas/Captura de tela 2026-08-14 015235.png";
import image04 from "../assets/projetos/kipolpas/Captura de tela 2026-08-14 015256.png";
import image05 from "../assets/projetos/kipolpas/Captura de tela 2026-08-14 015314.png";
import image06 from "../assets/projetos/kipolpas/catalogos.png";
import image07 from "../assets/projetos/kipolpas/dashboardClientPage.png";

//Project Portfólio Marcélio Costa Ribeiro Imagens
import image08 from "../assets/projetos/portfolio-marcelio/image01.png";
import image09 from "../assets/projetos/portfolio-marcelio/image02.png";
import image10 from "../assets/projetos/portfolio-marcelio/image03.png";
import image11 from "../assets/projetos/portfolio-marcelio/image04.png";
import image12 from "../assets/projetos/portfolio-marcelio/image05.png";

export interface ProjetoImagem {
  src: StaticImageData;
  alt: string;
}

export interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagens: ProjetoImagem[],
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
    imagens: [
      {
        src: image01,
        alt: "Tela principal do portfolio",
      },
      {
        src: image02,
        alt: "Tela de experiências do portfolio",
      },
      {
        src: image03,
        alt: "Tela de trajetória profissional",
      },
      {
        src: image04,
        alt: "Tela de clientes do sistema Kipolpas",
      },
      {
        src: image05,
        alt: "Tela de gerenciamento de preços do sistema Kipolpas",
      },
      {
        src: image06,
        alt: "Catálogo de produtos Kipolpas",
      },
      {
        src: image07,
        alt: "Dashboard do cliente do sistema Kipolpas",
      },
    ],
    githubFront: "https://github.com/JoseWenned/Software-Front-Kipolpas",
    githubBack: "https://github.com/JoseWenned/software_backend_kipolpas",
    demo: "https://fabricakipolpas.com.br/",
  },

 {
    titulo: "Portfólio Marcélio Costa Ribeiro",
    descricao:
      "Este projeto foi desenvolvido para Marcélio Costa Ribeiro, profissional especializado na operação de retroescavadeiras, com experiência em montagem de estruturas e atuação no setor de energia. O objetivo foi criar uma presença digital profissional que apresentasse suas experiências e competências de forma clara, moderna e adaptada a diferentes dispositivos.",
    tecnologias: [
      "Next.js",
      "React",
      "TypeScript",
      "SCSS",
      "Framer Motion",
      "Vercel",
      "Git",
      "GitHub",
      "LLMS",
      "React Testing Library",
    ],
    imagens: [
      {
        src: image08,
        alt: "Tela principal do portfolio",
      },
      {
        src: image09,
        alt: "Tela de experiências do portfolio",
      },
      {
        src: image10,
        alt: "Tela de trajetória profissional",
      },
      {
        src: image11,
        alt: "Tela de resultados do portfolio",
      },
      {
        src: image12,
        alt: "Tela de contato do portfolio",
      },
    ],
    githubFront: "https://github.com/JoseWenned/Portifolio-Marcelio-Costa",
    githubBack: "",
    demo: "https://portifolio-marcelio-costa-62x9.vercel.app/",
  },
];