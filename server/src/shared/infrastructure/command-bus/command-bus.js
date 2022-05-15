export class CommandBus {
  #commandHandlersInformation;

  constructor({ commandHandlersInformation }) {
    this.#commandHandlersInformation = commandHandlersInformation;
  }

  async execute(command) {
    const handler = this.#commandHandlersInformation.search(command);
    return await handler.handle(command);
  }
}
