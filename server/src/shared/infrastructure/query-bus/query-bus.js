export class QueryBus {
  #queryHandlersInformation;

  constructor({ queryHandlersInformation }) {
    this.#queryHandlersInformation = queryHandlersInformation;
  }

  async execute(query) {
    const handler = this.#queryHandlersInformation.search(query);
    return await handler.handle(query);
  }
}
