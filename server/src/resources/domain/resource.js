export class Resource {
  constructor({ id, name }) {
    this.id = id;
    this.name = name;
  }

  toProperties() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
