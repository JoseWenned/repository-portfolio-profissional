import type { StaticImageData } from "next/image";

//Imagens 
import image01 from "../assets/projetos/kipolpas/Captura de tela 2026-08-14 015143.png";
import image02 from "../assets/projetos/kipolpas/Captura de tela 2026-08-14 015215.png";
import image03 from "../assets/projetos/kipolpas/Captura de tela 2026-08-14 015235.png";
import image04 from "../assets/projetos/kipolpas/Captura de tela 2026-08-14 015256.png";
import image05 from "../assets/projetos/kipolpas/Captura de tela 2026-08-14 015314.png";
import image06 from "../assets/projetos/kipolpas/catalogos.png";
import image07 from "../assets/projetos/kipolpas/dashboardClientPage.png";

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
        alt: "Tela principal do sistema de gestão comercial Kipolpas",
      },
      {
        src: image02,
        alt: "Tela de gerenciamento do sistema Kipolpas",
      },
      {
        src: image03,
        alt: "Tela de pedidos do sistema Kipolpas",
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
];