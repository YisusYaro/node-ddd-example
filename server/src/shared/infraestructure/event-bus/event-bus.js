export class EventBus {
  #eventHandlersInformation;

  constructor({ eventHandlersInformation }) {
    this.#eventHandlersInformation = eventHandlersInformation;
  }

  async execute(event) {
    const handler = this.#eventHandlersInformation.search(event);
    return await handler.handle(event);
  }
}
