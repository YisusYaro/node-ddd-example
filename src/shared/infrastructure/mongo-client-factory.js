import { MongoClient } from 'mongodb';

export class MongoClientFactory {
  static async createAndConnect() {
    const url = '';

    const client = new MongoClient(url, {
      useUnifiedTopology: true,
      ignoreUndefined: true,
    });

    await client.connect();

    return client;
  }

  async collection() {
    return (await this.client).db().collection();
  }
}
