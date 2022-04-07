import { GetResourceResult } from './get-resource.result.js';
import { ResourceRepository } from '../../infraestructure/resources.repository.js';

export class GetResourceHandler {
  constructor() {
    this.resourceRepository = new ResourceRepository();
  }

  async handle(query) {
    const resource = await this.resourceRepository.findById(query.id);

    return new GetResourceResult({ ...resource.toProperties() });
  }
}
