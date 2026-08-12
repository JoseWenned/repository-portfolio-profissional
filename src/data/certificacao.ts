import { StaticImageData } from "next/image";
import imagemCertificadoFullStack from "../assets/Certificacao/Certificado - Fullstack - Kenzie Academy Brasil_page-0001.jpg";

export interface Certificacao {
  titulo: string;
  instituicao: string;
  periodo: string;
  descricao: string;
  imagem: StaticImageData;
}

export const certificacoes: Certificacao[] = [
  {
    titulo: "Nome da certificação",
    instituicao: "Instituição",
    periodo: "2026",
    descricao:
      "Descrição dos principais conhecimentos e competências desenvolvidos durante a formação.",
    imagem: imagemCertificadoFullStack,
  },
];