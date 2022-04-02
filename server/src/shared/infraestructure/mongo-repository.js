import { MongoClientFactory } from './mongo-client-factory.js';

export class MongoRepository {
  constructor() {
    this.client = MongoClientFactory.createAndConnect();
  }

  async persist(aggregateRoot) {
    const collection = await this.collection();

    const properties = aggregateRoot.toProperties();

    const document = { ...properties, _id: properties.id, id: undefined };
    await collection.updateOne(
      { _id: properties.id },
      { $set: document },
      { upsert: true }
    );
  }

  async collection() {
    return (await this.client).db().collection(this.collectionName);
  } 
}
