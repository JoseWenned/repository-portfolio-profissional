export interface Experiencia {
  empresa: string;
  cargo: string;
  periodo: string;
  descricao: string;
  atividades: string[];
}

export const experiencias: Experiencia[] = [
  {
    empresa: "Kipolpas",
    cargo: "Desenvolvedor de software",
    periodo: "Março 2026 · Projeto concluído",
    descricao:
      "Desenvolvimento de um sistema web voltado para apoiar processos relacionados à operação da empresa, aplicando conhecimentos de desenvolvimento backend e frontend.",
    atividades: [
      "Desenvolvimento de funcionalidades utilizando Java e Spring Boot.",
      "Criação e integração de APIs REST.",
      "Desenvolvimento de interfaces utilizando React.",
      "Integração com banco de dados PostgreSQL.",
      "Utilização de Git e GitHub para versionamento e organização do projeto.",
    ],
  },

  {
    empresa: "Projeto para cliente — Marcélio Costa Ribeiro",
    cargo: "Desenvolvedor Web Freelancer",
    periodo: "Agosto 2026 · Projeto concluído",
    descricao:
      "Desenvolvimento e entrega de um portfólio profissional para cliente real, com foco em apresentação de experiência profissional, competências e trajetória. Responsável pelo desenvolvimento da interface, componentização, responsividade, animações, organização dos estilos, otimização de imagens e publicação da aplicação em produção.",
    atividades: [
      "Desenvolvimento completo da interface;",
      "Criação e organização de componentes React;",
      "Implementação de layout responsivo;",
      "Desenvolvimento de animações e interações;",
      "Tratamento de problemas de responsividade e overflow;",
      "Otimização do carregamento de imagens;",
      "Implementação de boas práticas de HTML semântico e acessibilidade;",
      "Versionamento com Git/GitHub;",
      "Deploy e publicação em produção;",
      "Utilização de LLMs como ferramenta de apoio à análise, desenvolvimento, debugging e refinamento da aplicação."
    ],
  },
];