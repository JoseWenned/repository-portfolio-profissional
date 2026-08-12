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
    titulo: "Desenvolvedor Web Full-Stack",
    instituicao: "Kenzie Academy Brasil",
    periodo: "Janeiro de 2023 – Janeiro de 2024",
    descricao:
      "Formação em desenvolvimento web Full-Stack realizada na Kenzie Academy Brasil.",
    imagem: imagemCertificadoFullStack,
  },
];