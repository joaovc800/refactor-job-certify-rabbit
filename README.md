# Projeto de Escalabilidade com PM2 e RabbitMQ

Este projeto implementa uma solução escalável de consumo de mensagens. O objetivo é escalar os consumidores de operações (consumers) e integrar com RabbitMQ para a troca de mensagens.

## Tecnologias Utilizadas

![PM2](https://img.shields.io/badge/PM2-%23000?style=for-the-badge&logo=pm2&logoColor=white) ![RabbitMQ](https://img.shields.io/badge/RabbitMQ-%23FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white) ![Docker Compose](https://img.shields.io/badge/Docker%20Compose-%232496ED?style=for-the-badge&logo=docker&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-%234479A1?style=for-the-badge&logo=mysql&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-%2328236D?style=for-the-badge&logo=typescript&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-%2343853D?style=for-the-badge&logo=node.js&logoColor=white)

## Como Executar

2. Configurar o Docker Compose:
   - Certifique-se de que o Docker e o Docker Compose estão instalados na sua máquina.
   - Execute o comando para subir os containers do MySQL e RabbitMQ: `docker-compose up -d`

3. Instalar dependências:
   - Com o Node.js e o npm ou yarn instalados, execute: `npm install`

4. Iniciar o projeto com PM2:
   - Para escalar os consumidores de operações, utilize o PM2 para iniciar o processo: `npm run pm2:start`
   - Você pode escalar o número de instâncias conforme necessário no arquivo: `pm2.config.json`

5. Acessar a aplicação:
   - O sistema estará rodando e pronto para receber mensagens via RabbitMQ e processá-las com os consumidores escalados.
   - O rabbitmq irá rodar em `http://localhost:15672/` credenciais na .env-example
   - O Mysql irá rodar na porta 3307 da sua máquina local
