import { Router } from 'express';
import LoginController from '../controllers/loginController';
import LoginService from '../services/LoginService';

const loginRoute = Router();
const loginService = new LoginService();
const loginController = new LoginController(loginService);

loginRoute.post('/login', (req, res) => (
  /*
  #swagger.tags = ['Login']
  #swagger.description = 'Endpoint para se autenticar na plataforma.'
  #swagger.parameters['obj'] = {
    in: 'body',
    schema: { $ref: '#/definitions/Login' }
  }
  #swagger.responses[200] = {
    description: 'Login efetuado com sucesso.',
    schema: { $ref: '#/definitions/LoginResponse' }
  } */
  loginController.authenticator(req, res)
));

export default loginRoute;