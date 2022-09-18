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

userRoute.post('/', (req, res) => userController.create(req, res));

userRoute.use((req, res, next) => loginController.validationAuthenticator(req, res, next));
userRoute.get('/', (req, res) => userController.read(req, res));
userRoute.post('/', (req, res) => userController.readOne(req, res));
userRoute.put('/:id', (req, res) => userController.update(req, res));
userRoute.delete('/:id', (req, res) => userController.delete(req, res));

export default userRoute;