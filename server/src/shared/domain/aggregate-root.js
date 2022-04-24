import { AppContainer } from '../infraestructure/dependency-injection/app-container.js';

export class AggregateRoot {
  eventBus;
  events = [];

  constructor() {
    this.eventBus = AppContainer.getInstance()
      .getContainer()
      .get('EventBus');
  }

  record(event) {
    this.events.push(event);
  }

  async commit() {
    this.events.forEach((event) => {
        this.eventBus.execute(event);
      });
    this.events = [];
  }
}
