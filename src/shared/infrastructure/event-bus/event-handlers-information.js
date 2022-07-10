import { AppContainer } from '../dependency-injection/app-container.js';
import { registerResourcesEvents } from '../../../resources/infrastructure/dependency-injection/register.events.js';

export class EventHandlersInformation {
  #eventHandlersMap;
  #container;

  constructor() {
    this.#container = AppContainer.getInstance().getContainer();
    this.#eventHandlersMap = new Map();
    registerResourcesEvents(this.#eventHandlersMap);
  }

  search(event) {
    const identifier = this.#eventHandlersMap.get(
      event.eventName
    );
    if (!identifier) throw new Error('Event not registered');
    const eventHandler = this.#container.get(identifier);
    return eventHandler;
  }
}
