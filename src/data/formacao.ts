export interface Formacao {
  titulo: string;
  instituicao: string;
  periodo: string;
  status?: string;
}

export const formacoes: Formacao[] = [
  {
    titulo: "Análise e Desenvolvimento de Sistemas",
    instituicao: "UniCesumar",
    periodo: "Abril de 2024 – Novembro de 2026",
    status: "10º semestre",
  },
  {
    titulo: "Desenvolvedor Web Full-Stack",
    instituicao: "Kenzie Academy Brasil",
    periodo: "Janeiro de 2023 – Janeiro de 2024",
    status: "2000 horas/aulas",
  },
];