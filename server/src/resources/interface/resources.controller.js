import { CreateResourceCommand } from '../application/commands/create-resource.command.js';
import { GetResourceQuery } from '../application/queries/get-resource.query.js';
import { AppContainer } from '../../shared/infrastructure/dependency-injection/app-container.js';

export const resourcesController = (router) => {
  const queryBus = AppContainer.getInstance().getContainer().get('QueryBus');
  const commandBus = AppContainer.getInstance()
    .getContainer()
    .get('CommandBus');

  router.get('/resources/:id', async (req, res) => {
    const query = new GetResourceQuery({ ...req.params });
    const result = await queryBus.execute(query);
    res.status(200).send(result);
  });

  router.post('/resources', async (req, res) => {
    const command = new CreateResourceCommand({ ...req.body });
    await commandBus.execute(command);
    res.sendStatus(204);
  });
};
