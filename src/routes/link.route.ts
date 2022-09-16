import { Router } from 'express';
import LinkController from '../controllers/linkController';
import LinkService from '../services/LinkService';

const linkRoute = Router();
const linkService = new LinkService();
const linkController = new LinkController(linkService);

linkRoute.post('/', (req, res) => linkController.create(req, res));
linkRoute.get('/', (req, res) => linkController.read(req, res));
linkRoute.get('/:id', (req, res) => linkController.readOne(req, res));
linkRoute.put('/:id', (req, res) => linkController.update(req, res));
linkRoute.delete('/:id', (req, res) => linkController.delete(req, res));

export default linkRoute;