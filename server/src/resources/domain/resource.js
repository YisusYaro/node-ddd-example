export class Resource {
  constructor({ id, name, status }) {
    this.id = id;
    this.name = name;
    this.status = status || 'status';
  }

  toProperties() {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
    };
  }
}
