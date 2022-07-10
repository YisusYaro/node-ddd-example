import { ContainerBuilder } from 'node-dependency-injection';
import { setSharedModule } from './shared.module.js';
import { setResourcesModule } from '../../../resources/infrastructure/dependency-injection/resources.module.js';

export class AppContainer {
  static #instace;
  #container;

  constructor() {
    this.#container = new ContainerBuilder();
  }

  static getInstance() {
    if(!AppContainer.#instace) {
      AppContainer.#instace = new AppContainer();
    }

    return AppContainer.#instace;
  }

  getContainer() {
    return this.#container;
  }

  setDependencyInjectionApp() {
    setSharedModule(this.#container);
    setResourcesModule(this.#container);
  }
}