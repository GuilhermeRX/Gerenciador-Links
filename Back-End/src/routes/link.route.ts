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

linkRoute.use((req, res, next) => loginController.validationAuthenticator(req, res, next));
linkRoute.post('/link', (req, res) => linkController.create(req, res));
linkRoute.get('/link', (req, res) => linkController.read(req, res));
linkRoute.get('/link/:id', (req, res) => linkController.readOne(req, res));
linkRoute.put('/link/:id', (req, res) => linkController.update(req, res));
linkRoute.delete('/link/:id', (req, res) => linkController.delete(req, res));

export default linkRoute;