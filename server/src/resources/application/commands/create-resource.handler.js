import { Factory } from '../../domain/factory.js';
import { ResourceRepository } from '../../infraestructure/resources.repository.js';

export class CreateResourceHandler {
  constructor(resourceRepository = new ResourceRepository()) {
    this.resourceRepository = resourceRepository;
  }

  async handle(command) {
    const resource = Factory.create({ id: command.id, name: command.name });

    this.resourceRepository.save(resource);
  }
}
