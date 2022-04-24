import { CreateResourceHandler } from '../../application/commands/create-resource.handler.js';
import { GetResourceHandler } from '../../application/queries/get-resource.handler.js'
import { ResourceCreatedHandler } from '../../application/events/resource-created.handler.js';
import { ResourceRepository } from '../resources.repository.js';

const setCommandHandlers = (container) => {
  container
    .register('CreateResourceHandler', CreateResourceHandler)
    .addArgument({ resourceRepository: container.get('ResourceRepository') });
};

const setQueryHandlers = (container) => {
  container
    .register('GetResourceHandler', GetResourceHandler)
    .addArgument({ resourceRepository: container.get('ResourceRepository') });
}

const setEventsHandlers = (container) => {
  container
    .register('ResourceCreatedHandler', ResourceCreatedHandler);
}

const setApplication = (container) => {
  setCommandHandlers(container);
  setQueryHandlers(container);
  setEventsHandlers(container);
};

const setInfraestructure = (container) => {
  container.register('ResourceRepository', ResourceRepository);
};

export const setResourcesModule = (container) => {
  setInfraestructure(container);
  setApplication(container);
};
