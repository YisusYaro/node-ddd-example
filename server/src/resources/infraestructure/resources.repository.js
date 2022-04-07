import { MongoRepository } from '../../shared/infraestructure/mongo-repository.js';
import { Factory } from '../domain/factory.js';

export class ResourceRepository extends MongoRepository { 
  constructor() {
    super();
    this.collectionName = 'resources';
  }

  async save(resource) {
    await this.persist(resource);
  }

  async findById(id) {
    const collection = await this.collection();
    const document = await collection.findOne({ _id: id });
    return this.documentToResource(document);
  }

  documentToResource(document) {
    return Factory.reconstitute({ ...document, id: document._id });
  }
}