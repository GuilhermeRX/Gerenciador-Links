<a name="readme-top"></a>


<h3 align="center">LinkManager</h3>

  <p align="center">
    Aplicação FullStack capaz de gerenciar links, com a URL e um título/label, os dados desses links ficam armazenados em um banco de dados na nuvem. O usuário é capaz de criar uma conta e fazer login na plataforma utilizando autenticação JWT e pode gerenciar todos os seus links através de uma interface bastante intuitiva e pensada para propor uma melhor experiência para o usuário.
    <br />
    <a href="https://gerenciador-dev.herokuapp.com/doc/"><strong>Explore a documentação da API»</strong></a>
    <br />
    <br />
    <a href="https://linkmanagerdev.netlify.app/">Ver Aplicação</a>
    ·
    <a href="https://github.com/GuilhermeRX/Gerenciador-Links/issues">Reportar Bug</a>
    ·
  </p>
</div>


<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#ferramentas-utilizadas">Ferramentas Utilizadas</a></li>
      </ul>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#futuras-implementações">Futuras Implementações</a></li>
    <li><a href="#contribuições">Contribuições</a></li>
    <li><a href="#contatos">Contatos</a></li>
  </ol>
</details>

## Sobre o Projeto

[![LinkManager][screenshot]](https://linkmanagerdev.netlify.app/)
Este repositório conta com duas aplicações, o primeiro é o Back-End onde temos uma API que foi desenvolvida seguindo os melhores padrões de código, como arquitetura MSC, Eslint, clean code, programação orientada a objetos e principios SOLID, além disso contamos com um processo de automação chamado CI/CD(Integração contínua/Entrega contínua), utilizando Actions. Uma CI é realizada com sucesso quando novas mudanças no código são desenvolvidas e testadas, após esses passos, temos o CD que realizará o deploy da aplicação automaticamente. Em nossa aplicação Front-End temos uma interface que foi pensada para proporcionar a melhor experiência possivel para a pessoa usuária, também seguindo os melhores padrões de código e utilizando um dos melhores frameworks do mercado.
<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>



### Ferramentas utilizadas

* [![JavaScript][Javascript]][JavaScript-url]
* [![React][React.js]][React-url]
* [![Styled][Styled-Components]][Styled-url]
* [![Node][Node]][Node-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Docker][Docker]][Docker-url]
* [![Express][Express]][Express-url]
* [![Sequelize][Sequelize]][Sequelize-url]
* [![Mocha][Mocha]][Mocha-url]
* [![Chai][Chai]][Chai-url]
* [![Heroku][Heroku]][Heroku-url]
* [![Supabase][Supabase]][Supabase-url]
* [![Swagger][Swagger]][Swagger-url]
* [![Eslint][Eslint]][Eslint-url]


<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>


## Começando

### Pré-requisitos

1. É necessário que você tenha um banco de dados relacional ativo
2. Configurar o dialeto do sequelize de acordo com o banco de dados que estiver utilizando.
* Acesse o diretório.
  ```sh
  cd ./Back-End/src/database/config/
  ```
* Abra o arquivo config/database.ts e faça as modificações necessárias na chave 'dialect' na linha 10.

![dialect-screen]

Para rodar a aplicação localmente, siga estas etapas.

### Instalação

1. Clone o repositório
   ```sh
   git clone git@github.com:GuilhermeRX/Gerenciador-Links.git
   ```
2. Instale os pacotes NPM
   ```sh
   npm install
   ```
3. Configure as váriávies de ambiente no arquivo ./Back-End/.env
   ```js
    PORT=portaDoServidorExpress
    DB_USER=userNameDeAcessoAoBanco
    DB_PASS=passwordDeAcessoAoBanco
    DB_HOST=hostDoBanco
    DB_PORT=portaDeAcessoAoBanco
    JWT_SECRET=segredoDoTokenJwt
    DB_DATABASE=nomeDoSeuBancoDeDados;
   ```
4. Entre no repositório ./Back-End, execute o script que realizará a transpilação do código typescript para javascript e criará as tabelas de nosso banco. 
   ```sh
   npm run dev
   ```
5. Entre no repositório ./Back-End e execute os testes de integração. 
   ```sh
   npm test
   ```
* A saida deve ser a seguinte:
<br />

![testes-screen]

6. Ainda no repositório ./Back-End execute o comando para iniciar o servidor. 
   ```sh
   npm start
   ```
7. Agora em ./Front-End execute o comando para iniciar a aplicação React. 
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>
<br />

## API Endpoints
Você pode conhecer melhor a documentação da API e seus endpoints [Neste Link!](https://gerenciador-dev.herokuapp.com/doc/)
<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>

## Futuras implementações

- [ ] Página para editar dados da pessoa usuária.
- [ ] Automatizar o processo de salvar links com um web crawler.
- [ ] Testes End-to-End

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>


## Contribuições

As contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer são muito bem-vindas.

Se você tiver uma sugestão, faça um fork do repositório e crie uma solicitação pull. Você também pode simplesmente abrir uma Issues com a tag "melhoria". Não se esqueça de dar uma estrela ao projeto! Muito Obrigado!

1. Fork do Projeto
2. Crie uma nova branch (`git checkout -b feature/nomeDaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: suaNovaFeature'`)
4. Faça um Push (`git push origin feature/nomeDaFeature`)
5. Abra um Pull Request

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>

## Contatos

Luiz Guilherme Avelino - [LinkedIn](https://www.linkedin.com/in/luizguilhermeavelino/) - guilhermerx18@gmail.com

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>


[screenshot]: images/home.png
[testes-screen]: images/testes.png
[dialect-screen]: images/dialect.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[JavaScript-url]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
[JavaScript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[Styled-Components]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[Styled-url]: https://styled-components.com/
[Docker-url]: https://www.docker.com/
[Docker]: https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white
[Express]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/pt-br/
[Sequelize]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white
[Sequelize-url]: https://sequelize.org/
[TypeScript-url]: https://www.typescriptlang.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Mocha]: https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white
[Mocha-url]: https://mochajs.org/
[Chai]: https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white
[Chai-url]: https://www.chaijs.com/
[Heroku]: https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white
[Heroku-url]: https://devcenter.heroku.com/categories/reference
[Supabase]: https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/
[Node]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en/
[Swagger]: https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white
[Swagger-url]: https://swagger.io/
[Eslint]: https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white
[Eslint-url]: https://eslint.org/
