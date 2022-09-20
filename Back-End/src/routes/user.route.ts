import { Router } from 'express';
import LoginController from '../controllers/loginController';
import UserController from '../controllers/userController';
import LoginService from '../services/LoginService';
import UserService from '../services/UserService';

const loginService = new LoginService();
const loginController = new LoginController(loginService);

const userRoute = Router();

const userService = new UserService();
const userController = new UserController(userService);

userRoute.post('/user', (req, res) => (
  /* #swagger.tags = ['User']
    #swagger.description = 'Endpoint para cadastrar um novo usuário.'
    #swagger.parameters['obj'] = {
      in: 'body',
      schema: { $ref: '#/definitions/CreateUser' }
    }
    #swagger.responses[201] = {
      description: 'User criado com sucesso.',
      schema: { $ref: '#/definitions/LoginResponse' }
  } */
  userController.create(req, res)
));

userRoute.use((req, res, next) => (
  /*
  #swagger.tags = ['User']
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
userRoute.get('/user', (req, res) => (
  /*
  #swagger.description = 'Endpoint para obter todos os usuários.'
  #swagger.responses[200] = {
    description: 'Listagem de usuários obtida com sucesso.',
    schema: { $ref: '#/definitions/UserArray' }
  } */
  userController.read(req, res)
));

userRoute.get('/user/info', (req, res) => (
  /*
  #swagger.description = 'Endpoint para obter um usuário especifico através de dados obtidos via token jwt.'
  #swagger.responses[200] = {
    description: 'Usuário obtido com sucesso.',
    schema: { $ref: '#/definitions/User' }
  } */
  userController.readOne(req, res)
));

userRoute.put('/user/:id', (req, res) => (
  /*
  #swagger.description = 'Endpoint para atualizar os dados de um usuário.'
  #swagger.parameters['id'] = { description: 'ID do usuário.' }
  #swagger.parameters['obj'] = {
      in: 'body',
      type: 'object',
      schema: { $ref: '#/definitions/CreateUser' }
  }
  #swagger.responses[200] = {
    description: 'Usuário editado com sucesso.',
    schema: { $ref: '#/definitions/User' }
  } */
  userController.update(req, res)
));

userRoute.delete('/user/:id', (req, res) => (
  /*
  #swagger.description = 'Endpoint para deletar um usuário.'
  #swagger.parameters['id'] = { description: 'ID do usuário.' }
  #swagger.responses[204] = {
    description: 'Usuário deletado com sucesso.',
  } */
  userController.delete(req, res)
));

export default userRoute;