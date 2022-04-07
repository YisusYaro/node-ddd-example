import { CreateResourceCommand } from '../application/commands/create-resource.command.js';
import { CreateResourceHandler } from '../application/commands/create-resource.handler.js';
import { GetResourceQuery } from '../application/queries/get-resource.query.js';
import { GetResourceHandler } from '../application/queries/get-resource.handler.js';

export const resourcesController = (router) => {
  router.get('/resources/:id', async (req, res) => {
    const query = new GetResourceQuery({...req.params});
    const handler = new GetResourceHandler();
    const result = await handler.handle(query);
    res.status(200).send(result);
  });

  router.post('/resources', (req, res) => {
    const command = new CreateResourceCommand({ ...req.body });
    const handler = new CreateResourceHandler();
    handler.handle(command);
    res.sendStatus(204);
  });
};
