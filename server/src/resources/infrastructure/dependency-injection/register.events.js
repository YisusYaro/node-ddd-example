import { ResourceCreatedEvent } from '../../domain/events/resource-created.event.js';

export const registerResourcesEvents = (eventHandlersMap) => {
  eventHandlersMap.set(ResourceCreatedEvent.EVENT_NAME, 'ResourceCreatedHandler');
}