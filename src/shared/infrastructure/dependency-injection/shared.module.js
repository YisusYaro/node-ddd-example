import { CommandBus } from '../command-bus/command-bus.js';
import { CommandHandlersInformation } from '../command-bus/command-handlers-information.js';
import { QueryBus } from '../query-bus/query-bus.js';
import { QueryHandlersInformation } from '../query-bus/query-handlers-information.js';
import { EventBus } from '../event-bus/event-bus.js';
import { EventHandlersInformation } from '../event-bus/event-handlers-information.js';

const setInfrastructure = (container) => {
  container.register('CommandHandlersInformation', CommandHandlersInformation);
  
  container.register('QueryHandlersInformation', QueryHandlersInformation);

  container.register('EventHandlersInformation', EventHandlersInformation);

  container.register('CommandBus', CommandBus).addArgument({
    commandHandlersInformation: container.get('CommandHandlersInformation'),
  });

  container.register('QueryBus', QueryBus).addArgument({
    queryHandlersInformation: container.get('QueryHandlersInformation'),
  });

  container.register('EventBus', EventBus).addArgument({
    eventHandlersInformation: container.get('EventHandlersInformation')
  });
};

export const setSharedModule = (container) => {
  setInfrastructure(container);
};
