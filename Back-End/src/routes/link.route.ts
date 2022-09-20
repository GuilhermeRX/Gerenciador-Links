import { Router } from 'express';
import LinkController from '../controllers/linkController';
import LoginController from '../controllers/loginController';
import LinkService from '../services/LinkService';
import LoginService from '../services/LoginService';

const loginService = new LoginService();
const loginController = new LoginController(loginService);

const linkRoute = Router();
const linkService = new LinkService();
const linkController = new LinkController(linkService);

linkRoute.use((req, res, next) => (
  /*
  #swagger.tags = ['Link']
  #swagger.parameters['obj'] = {
    name: "authorization",
    in: "header",
    type: "string"
  }
  #swagger.security = [{
    "bearerAuth": []
  }]
  */
  loginController.validationAuthenticator(req, res, next)
));

linkRoute.post('/link', (req, res) => (
  /*
  #swagger.description = 'Endpoint para cadastrar um novo link.'
  #swagger.parameters['obj'] = {
    in: 'body',
    schema: { $ref: '#/definitions/CreateLink' }
  }
  #swagger.responses[201] = {
    description: 'Link criado com sucesso.',
    schema: { $ref: '#/definitions/Link' }
  } */
  linkController.create(req, res)
));

linkRoute.get('/link', (req, res) => (
  /*
  #swagger.description = 'Endpoint para obter todos os links.'
  #swagger.responses[200] = {
    description: 'Listagem de links obtida com sucesso.',
    schema: { $ref: '#/definitions/LinkArray' }
  } */
  linkController.read(req, res)
));

linkRoute.get('/link/:id', (req, res) => (
  /*
  #swagger.description = 'Endpoint para obter um link específico através do ID.'
  #swagger.parameters['id'] = { description: 'ID do link.' }
  #swagger.responses[200] = {
    description: 'Link obtido com sucesso.',
    schema: { $ref: '#/definitions/Link' }
  }
  */
  linkController.readOne(req, res)
));

linkRoute.put('/link/:id', (req, res) => (
  /*
  #swagger.description = 'Endpoint para atualizar os dados de um link.'
  #swagger.parameters['id'] = { description: 'ID do link.' }
  #swagger.parameters['obj'] = {
      in: 'body',
      type: 'object',
      schema: { $ref: '#/definitions/CreateLink' }
  }
  #swagger.responses[200] = {
    description: 'Link editado com sucesso.',
    schema: { $ref: '#/definitions/Link' }
  } */
  linkController.update(req, res)
));

linkRoute.delete('/link/:id', (req, res) => (
  /*
  #swagger.description = 'Endpoint para deletar um link.'
  #swagger.parameters['id'] = { description: 'ID do link.' }
  #swagger.responses[204] = {
    description: 'Link deletado com sucesso.',
  } */
  linkController.delete(req, res)
));

export default linkRoute;