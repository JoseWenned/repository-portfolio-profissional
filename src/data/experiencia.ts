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
    periodo: "Projeto prático",
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
];