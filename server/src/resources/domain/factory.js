import { Resource } from './resource.js';

export class Factory {
  static create({ id, name }) {
    return new Resource({ id, name });
  }

  static reconstitute({ id, name, status }) {
    return new Resource({ id, name, status });
  }
}
