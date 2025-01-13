# Teste Automatizado DOTS | Cypress + Cucumber + Page Objects 

## Introdução
Este projeto implementa testes automatizados utilizando o **Cypress** e o **Cucumber**, seguindo o padrão de projeto **Page Object Model (POM)**. 

### O que é Cypress
Cypress é um **framework** para automação de testes end-to-end, escrito em JavaScript.

### O que é Cucumber
Cucumber é uma ferramenta de software que suporta o desenvolvimento orientado pelo comportamento (BDD), permitindo escrever cenários de teste em linguagem natural.

## Versão do Cypress
A versão do Cypress utilizada neste projeto é: **5.5.0**

## Versão do Cypress

A versão do Cypress utilizada neste projeto é: **5.5.0**

---

## Estrutura do Projeto

Este projeto segue o padrão **Page Object Model (POM)** para separar os elementos das páginas e as ações realizadas nelas. Abaixo está a estrutura de pastas utilizada:

- **e2e/features/**: Contém os arquivos `.feature`, escritos no formato Gherkin.
- **e2e/step_definitions/**: Contém os arquivos `.js` que implementam os steps descritos nos arquivos `.feature`.
- **support/elements/**: Contém os arquivos que mapeiam os elementos da página.
- **support/page_objects/**: Contém os arquivos que implementam as ações da página com base nos elementos.
- **fixtures/**: Contém arquivos de dados estáticos, como JSON.

---

## Configurando o Ambiente

1. Instale o [Node.js](https://nodejs.org/).
2. Clone o repositório do projeto.
3. No terminal, execute os seguintes comandos para configurar o Cypress e as dependências:

## Execucao do projeto
```bash
npm install
npm install cypress@5.5.0 --save-dev
npx cypress open