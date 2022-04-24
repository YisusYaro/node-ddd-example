import { Factory } from '../../domain/factory.js';

export class CreateResourceHandler {
  #resourceRepository;

  constructor({ resourceRepository }) {
    this.#resourceRepository = resourceRepository;
  }

  async handle(command) {
    const resource = Factory.create({ id: command.id, name: command.name });

    resource.handleResourceCreated();

    this.#resourceRepository.save(resource);

    resource.commit();
  }
}
