import { Router } from 'express';
import UserController from '../controllers/userController';
import UserService from '../services/UserService';

const userRoute = Router();
const userService = new UserService();
const userController = new UserController(userService);

userRoute.post('/', (req, res) => userController.create(req, res));
userRoute.get('/', (req, res) => userController.read(req, res));
userRoute.get('/:id', (req, res) => userController.readOne(req, res));
userRoute.put('/:id', (req, res) => userController.update(req, res));
userRoute.delete('/:id', (req, res) => userController.delete(req, res));

export default userRoute;