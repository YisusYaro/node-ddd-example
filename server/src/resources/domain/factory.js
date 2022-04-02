import { Resource } from './resource.js';

export class Factory {
  static create({ id, name }) {
    return new Resource({ id, name });
  }
}
