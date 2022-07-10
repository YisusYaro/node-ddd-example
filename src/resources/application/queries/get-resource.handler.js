import { GetResourceResult } from './get-resource.result.js';

export class GetResourceHandler {
  #resourceRepository;

  constructor({resourceRepository}) {
    this.#resourceRepository = resourceRepository;
  }

  async handle(query) {
    const resource = await this.#resourceRepository.findById(query.id);

    return new GetResourceResult({ ...resource.toProperties() });
  }
}
