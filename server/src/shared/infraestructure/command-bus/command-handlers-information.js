import { AppContainer } from '../dependency-injection/app-container.js';
import { registerResourcesCommands } from '../../../resources/infraestructure/dependency-injection/register.commands.js';

export class CommandHandlersInformation {
  #commandHandlersMap;
  #container;

  constructor() {
    this.#container = AppContainer.getInstance().getContainer();
    this.#commandHandlersMap = new Map();
    registerResourcesCommands(this.#commandHandlersMap);
  }

  search(command) {
    const identifier = this.#commandHandlersMap.get(
      command.constructor
    );
    if (!identifier) throw new Error('Command not registered');
    const commandHandler = this.#container.get(identifier);
    return commandHandler;
  }
}
