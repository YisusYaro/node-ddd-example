import { CreateResourceCommand } from '../aplication/commands/create-resource.command.js';
import { CreateResourceHandler } from '../aplication/commands/create-resource.handler.js';

export const resourcesController = (router) => {
  router.get('/resources', (req, res) => {
    res.send('resources is working.');
  });

  router.post('/resources', (req, res) => {
    const command = new CreateResourceCommand({ ...req.body });
    const handler = new CreateResourceHandler();
    handler.handle(command);
    res.sendStatus(204);
  });
};
