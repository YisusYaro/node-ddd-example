import { MongoRepository } from '../../shared/infraestructure/mongo-repository.js';

export class ResourceRepository extends MongoRepository { 
  constructor() {
    super();
    this.collectionName = 'resources';
  }

  async save(resource) {
    await this.persist(resource);
  }
}