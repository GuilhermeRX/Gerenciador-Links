import { Router } from 'express';
import LoginController from '../controllers/loginController';
import LoginService from '../services/LoginService';

const loginRoute = Router();
const loginService = new LoginService();
const loginController = new LoginController(loginService);

loginRoute.post('/', (req, res) => loginController.authenticator(req, res));

export default loginRoute;