# Portfólio Profissional

Portfólio profissional desenvolvido para apresentar minha trajetória como desenvolvedor, minhas habilidades técnicas, projetos, formação, experiências e certificações na área de desenvolvimento de software.

O projeto está sendo desenvolvido com **Next.js, React e TypeScript**, seguindo uma arquitetura baseada em componentes e buscando aplicar boas práticas de desenvolvimento, organização de código, versionamento, qualidade e automação.

## Sobre o projeto

Este projeto tem dois objetivos principais:

1. Criar meu portfólio profissional para apresentação a recrutadores e empresas.
2. Utilizar o desenvolvimento do próprio portfólio como oportunidade prática para estudar e aprofundar meus conhecimentos em Next.js, React, TypeScript e ferramentas utilizadas no desenvolvimento moderno.

O projeto está sendo desenvolvido de forma incremental, utilizando Git e GitHub para controle de versão, organização das alterações e integração através de Pull Requests.

## Tecnologias

Atualmente o projeto utiliza:

- Next.js
- React
- TypeScript
- CSS Modules
- ESLint
- React Compiler
- Git
- GitHub

Novas tecnologias poderão ser adicionadas conforme surgirem necessidades reais durante o desenvolvimento.

## Requisitos

Para executar o projeto localmente, é necessário ter instalado:

- Node.js
- npm
- Git

## Instalação

Clone o repositório:

```bash
git clone git@github.com:JoseWenned/repository-portfolio-profissional.git
```

Acesse o diretório:

```bash
cd repository-portfolio-profissional
```

Instale as dependências:

```bash
npm install
```

## Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

## Scripts disponíveis

### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento do Next.js.

### Lint

```bash
npm run lint
```

Executa o ESLint para verificar problemas e inconsistências no código.

### Build

```bash
npm run build
```

Cria a versão otimizada da aplicação para produção e verifica a compilação do projeto.

### Produção

```bash
npm run start
```

Inicia a aplicação utilizando o build de produção.

## Funcionalidades

O portfólio possui atualmente as seguintes seções:

- Header
- Apresentação profissional
- Sobre
- Habilidades técnicas
- Formação
- Projetos
- Experiência
- Certificações
- Contato
- Footer

## Estrutura do projeto

A estrutura principal do projeto segue uma organização baseada em componentes:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── assets/
│   └── Certificacao/
│       └── Certificado - Fullstack - Kenzie Academy Brasil_page-0001.jpg
│
├── components/
│   ├── About/
│   │   ├── About.tsx
│   │   └── About.module.css
│   │
│   ├── Certificacao/
│   │   ├── Certificacao.tsx
│   │   └── Certificacao.module.css
│   │
│   ├── Contato/
│   │   ├── Contato.tsx
│   │   └── Contato.module.css
│   │
│   ├── Experiencia/
│   │   ├── Experiencia.tsx
│   │   └── Experiencia.module.css
│   │
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   │
│   ├── Formacao/
│   │   ├── Formacao.tsx
│   │   └── Formacao.module.css
│   │
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   │
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.module.css
│   │
│   ├── Projetos/
│   │   ├── Projetos.tsx
│   │   └── Projetos.module.css
│   │
│   └── Skills/
│       ├── Skills.tsx
│       └── Skills.module.css
│
└── data/
    ├── certificacao.ts
    ├── contato.ts
    ├── experiencia.ts
    ├── formacao.ts
    ├── projetos.ts
    └── skills.ts

public/
├── file.svg
├── globe.svg
├── next.svg
├── vercel.svg
└── window.svg
```

A estrutura será evoluída conforme novas funcionalidades e componentes forem adicionados ao projeto.

## Organização dos dados

As informações apresentadas no portfólio são separadas dos componentes de interface.

Os dados estão organizados no diretório:

```text
src/data/
```

Atualmente existem arquivos responsáveis por:

- `certificacao.ts` — informações das certificações
- `contato.ts` — informações de contato
- `experiencia.ts` — experiências
- `formacao.ts` — formação acadêmica e cursos
- `projetos.ts` — projetos desenvolvidos
- `skills.ts` — habilidades e tecnologias

Essa separação permite manter os componentes responsáveis pela apresentação e os arquivos de dados responsáveis pelo conteúdo.

## Design System

O projeto possui uma etapa dedicada à construção e organização do **Design System**.

O objetivo é estabelecer uma identidade visual consistente entre os componentes e facilitar a manutenção e evolução da interface.

Durante essa etapa estão sendo trabalhados:

- Padronização de espaçamentos
- Tipografia
- Cores
- Responsividade
- Estados de interação
- Estrutura visual dos componentes
- Reutilização de padrões
- Organização dos estilos através de CSS Modules

O Design System está sendo desenvolvido de forma incremental conforme novos componentes são implementados e revisados.

## Qualidade e validação

Antes de integrar alterações à branch principal, são realizadas validações locais.

### ESLint

```bash
npm run lint
```

O ESLint é utilizado para identificar problemas e inconsistências no código.

### Build

```bash
npm run build
```

O build verifica a compilação da aplicação, incluindo TypeScript, geração das páginas e otimização para produção.

Atualmente, as validações de **Lint e Build estão passando com sucesso**.

## Versionamento

O projeto utiliza Git para controle de versão.

Os commits seguem uma convenção baseada no tipo de alteração realizada, por exemplo:

```text
feat: nova funcionalidade
fix: correção de problema
style: alteração visual
refactor: refatoração
docs: documentação
chore: configuração ou manutenção
```

Exemplos:

```text
feat: adiciona seção de projetos
style: implementa design system
refactor: padroniza estrutura dos componentes
docs: atualiza documentação do projeto
```

## Branches

O desenvolvimento utiliza branches específicas para organizar cada etapa do projeto.

Exemplos:

```text
main
feature/desing-system
refactor/auditoria-tecnica
```

A branch `main` representa a versão principal do projeto.

Novas funcionalidades, melhorias e refatorações são desenvolvidas em branches específicas antes de serem integradas à `main`.

## Pull Requests

As alterações são integradas através de Pull Requests.

O fluxo utilizado busca manter a branch principal organizada e facilitar a revisão das alterações antes do merge.

Cada alteração relevante passa por:

1. Desenvolvimento em uma branch específica.
2. Validação com ESLint.
3. Validação do build.
4. Commit.
5. Push para o GitHub.
6. Criação do Pull Request.
7. Revisão.
8. Merge para a branch correspondente.
9. Atualização da branch `main`.

## Auditoria técnica

O projeto também possui uma etapa de **auditoria técnica**, utilizada para revisar a estrutura e a qualidade do código após determinadas etapas de desenvolvimento.

A auditoria busca identificar:

- Problemas de organização.
- Inconsistências entre componentes.
- Problemas de nomenclatura.
- Duplicação de código.
- Problemas de tipagem.
- Inconsistências de estilos.
- Melhorias de arquitetura.
- Melhorias de manutenção.

Essa etapa é realizada de forma incremental conforme o projeto evolui.

## Fluxo do projeto

O fluxo atual de desenvolvimento segue:

```text
Desenvolvimento
      ↓
ESLint
      ↓
Build
      ↓
Commit
      ↓
Push
      ↓
Pull Request
      ↓
Revisão
      ↓
Merge
      ↓
Main
```

Esse processo ajuda a manter a branch principal estável e permite acompanhar melhor a evolução do projeto.

## Status do projeto

🚧 **Em desenvolvimento.**

O portfólio está sendo construído gradualmente como um projeto real, com foco em:

- Aprendizado
- Organização
- Qualidade de código
- Boas práticas
- Arquitetura de componentes
- Design System
- Responsividade
- Versionamento
- Documentação

## Próximos passos

Entre as próximas etapas planejadas estão:

- Evolução do Design System
- Melhorias de responsividade
- Aprimoramento da navegação
- Melhorias de acessibilidade
- Animações e interações
- Melhorias de SEO
- Configuração e evolução do deploy
- Automação do processo de validação
- Evolução dos testes
- Novas revisões de arquitetura e código

## Autor

**José Wenned**

Desenvolvedor de Software.

---

Este projeto está em evolução contínua e novas funcionalidades, melhorias de arquitetura, automações e documentação serão adicionadas ao longo do desenvolvimento.