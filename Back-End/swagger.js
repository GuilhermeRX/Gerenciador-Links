/* eslint-disable @typescript-eslint/no-var-requires */
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
  './src/routes/login.route.ts',
  './src/routes/user.route.ts',
  './src/routes/link.route.ts',
];

swaggerAutogen(outputFile, endpointsFiles);