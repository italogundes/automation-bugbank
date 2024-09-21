# Automação de Testes com Cypress para a plataforma BugBank

Repositório contém testes automatizados para a plataforma Bugbank, criados com Cypress.

O Bugbank é uma aplicação que simula um banco digital.

Os testes tem como objetivo garantir que as funcionalidades estejam funcionando corretamente, seja em casos de sucesso ou de falha.

Toda a documentação dos testes foi realizada utilizando a ferramenta [Qase.io](https://qase.io/)

# Índice

- [Descrição do Projeto](#descricao-do-projeto)
- [Funcionaidades Testadas](#funcionalidades-testadas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Observações](#observacoes)
- [Execução dos Testes](#execução-dos-testes)

## Descrição do Projeto

BugBank é uma aplicação de banco digital que simula operações bancárias como login, cadastro de contas, transferências, extratos, pagamentos e saques. Este projeto visa criar testes automatizados para garantir que as principais funcionalidades funcionem corretamente.

## Funcionalidades Testadas

- Cadastro de Novos Usuários
- Login
- Trasnferência entre contas
- Extrato de contas
- Logout

## Tecnologias Utilizadas

- [![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/) Framework para automação de testes e2e.
- [![VSCode](https://img.shields.io/badge/VSCode-0078d7?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/) IDE para desenvolvimento.
- [![Qase](https://img.shields.io/badge/Qase.io-14A856?style=for-the-badge&logo=qase&logoColor=white)](https://qase.io/) Ferramenta para planejamento e gerenciamento dos testes

## Observações

O Bugbank é uma aplicação que ainda está em desenvolvimento, logo, nem todas as funcionalidades estão finalizadas. O repositório do projeto no git está [aqui](https://github.com/jhonatasmatos/bugbank-ui)

## Execução dos Testes

Para rodar os testes automatizados na sua máquina, siga os seguintes passos:

1 - Faça o clone do projeto

`git clone` https://github.com/italogundes/automation-bugbank.git

2 - Dentro do repositório local, instale as dependências do node

`npm install`

3 - Execute o Cypress para executar os testes no navegador

`npx cypress open`
