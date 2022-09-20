/* eslint-disable max-len */
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
    description: `Documentação da API LinkManager,
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
    LinkArray: [{ $ref: '#/definitions/Link' }],
    LoginResponse: {
      token: 'syJhbGciOiJIUzI1NiIsInR5cCI6IkfXVCJ8.eyJlbWFpbCI6InZpdmlAdGVzdC5jb20iLCJpZCI6MiwiaWF0IjoxNjYzNjI5ODgzfQ.e355HIy1JctDtpAaNi8pgQSEELmVH4o_nujUL2qBz6s',
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);