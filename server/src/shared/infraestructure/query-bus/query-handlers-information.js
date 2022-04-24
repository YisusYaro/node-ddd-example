import { AppContainer } from '../dependency-injection/app-container.js';
import { registerResourcesQueries } from '../../../resources/infraestructure/dependency-injection/register.queries.js';

export class QueryHandlersInformation {
  #queryHandlersMap;
  #container;

  constructor() {
    this.#container = AppContainer.getInstance().getContainer();
    this.#queryHandlersMap = new Map();
    registerResourcesQueries(this.#queryHandlersMap);
  }

  search(query) {
    const identifier = this.#queryHandlersMap.get(
      query.constructor
    );
    if (!identifier) throw new Error('Querie not registered');
    const queryHandler = this.#container.get(identifier);
    return queryHandler;
  }
}
