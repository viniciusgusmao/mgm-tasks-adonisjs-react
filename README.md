# Sistema de Gerenciamento de Projetos

> Sistema simples de gerenciamento de projetos e tarefas feito utilizando AdonisJs (graphQL e REST) no backend e React no frontend.

## Screenshots
<table>
<tr>
<td colspan="2"><img src="https://i.ibb.co/s3JyQ25/Captura-de-tela-de-2020-05-04-19-30-12.png" /></td>
</tr>
<tr>
	<td><img src="https://i.ibb.co/jLnmhvp/Captura-de-tela-de-2020-05-04-19-31-31.png" /></td>
	<td><img src="https://i.ibb.co/gDg2dR3/Captura-de-tela-de-2020-05-04-19-31-43.png" /></td>
</tr>
<tr>
	<td><img src="https://i.ibb.co/DKH1kQY/Captura-de-tela-de-2020-05-04-19-32-02.png" /></td>
	<td><img src="https://i.ibb.co/j6nQffX/Captura-de-tela-de-2020-05-04-19-32-11.png" /></td>
</tr>
</table>

## Pré-requisitos
- Docker
- Node.js >= 8.0.0
- npm >= 3.0.0

## Tecnologias utilizadas
- AdonisJs
	- graphql
	- mysql
- React
	- formik
	- bootstrap
	- apollo-boost
	- node-sass
	- react-bootstrap
	- react-icons
- Docker


## Instalação

Antes de iniciar a instalação do projeto, certifique-se de instalar globalmente a CLI do AdonisJs.
```js
npm i -g @adonisjs/cli
```

Ao clonar o projeto, vc verá a seguinte estrutura de arquivos:

```bash
├── api/
├── frontend/
├── mysql/
├── .gitignore
├── docker-compose.yml
├── README.md
```

*Favor considerar todos os comandos abaixo na pasta raiz do projeto.*

### 1. Iniciar os containers do banco de dados e do phpMyAdmin
```bash
docker-compose up
```
### 2. Para configurar a API
#### 2.1 Instale as dependências
```bash
cd api/ && npm install
```
#### 2.1 Execute as migrations
```bash
cd api/ && adonis migration:run
```
#### 2.2 Execute os seeders para preenchimento no MySql de dados fakes
```bash
cd api/ && adonis seed
```
#### 2.3 Inicie a API
```bash
cd api/ && npm start
```
Feito isso, a API estará rodando na porta 8080 do servidor local http://localhost:8080/

### 3. Para configurar o Frontend
```bash
cd frontend/ && npm install && npm start
```
Acesse http://localhost:3000/ para testar a aplicação. A tela de login já virá com as informações de email e senha para facilitar o processo de autenticação nesta simulação.

## Funcionalidades implementadas no Backend
- Autenticação JWT por e-mail e senha
- Todas as consultas que seriam métodos GET em REST,  foram feitas em GraphQL e as outras (POST, PUT e DELETE) feitas em REST
- Uma query que retorna as informações do usuário (empresa) logado
- CRUD de clientes
- CRUD de projetos;
- CRUD de tarefas;
- CRUD de funcionários.
- Foi utilizado o banco de dados MySQL
- Foi utilizado o Apollo para GraphQL (Server e Client)

## Funcionalidades implementadas no Frontend
- Formulários CRUD Clientes
- Formulários CRUD Projetos
- Formulários CRUD Tarefas
- Formulários CRUD Funcionários

## Roadmap
- Fazer upload de imagem no cadastro de um cliente
- Fazer validações mais específicas nos formulários do sistema. Por exemplo: o campo VALOR do formulário de projeto deverá ter uma máscara de moeda, verificar se a data final é maior que a data inicial no formulário de tarefas, etc
- Colocar mais opções nas tabelas de listagem, por exemplo: campo de pesquisa, campo para ordenar colunas, etc





