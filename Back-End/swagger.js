/* eslint-disable @typescript-eslint/no-var-requires */
const swaggerAutogen = require('swagger-autogen')({ language: 'pt-BR' });

const outputFile = './src/swaggerFile.json';
const endpointsFiles = [
  './src/routes/login.route.ts',
  './src/routes/user.route.ts',
  './src/routes/link.route.ts',
];

const doc = {
  info: {
    version: '1.0.0',
    title: 'LinkManager API RESTfull',
    description: `Documentação da API Link Manager,
    que fornece dados para a aplicação: https://linkmanagerdev.netlify.app/
    Desenvolvido por: Luiz Guilherme Avelino.`,
  },
  host: 'localhost:3001',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Login',
      description: 'Endpoints',
    },
    {
      name: 'User',
      description: 'Endpoints',
    },
    {
      name: 'Link',
      description: 'Endpoints',
    },
  ],
  definitions: {
    Login: {
      email: 'luiz@test.com',
      password: '123456',
    },
    User: {
      id: 2,
      name: 'Luiz guilherme',
      email: 'test@test.com',
      password: '123456',
    },
    Link: {
      id: 1,
      url: 'www.flamengo.com',
      label: 'Site Oficial do Flamengo',
      userId: 2,
    },
    CreateUser: {
      name: 'Bill',
      password: 'bill123456',
      email: 'bill@linkmanager.com',
    },
    CreateLink: {
      url: 'www.betrybe.com',
      label: 'Site da Trybe',
      userId: 2,
    },
    UserArray: [{ $ref: '#/definitions/User' }],
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);