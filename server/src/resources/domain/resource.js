import { AggregateRoot } from "../../shared/domain/aggregate-root.js";
import { ResourceCreatedEvent } from "./events/resource-created.event.js";

export class Resource extends AggregateRoot {
  constructor({ id, name, status = "status" }) {
    super();
    this.id = id;
    this.name = name;
    this.status = status;
  }

  toProperties() {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
    };
  }

  handleResourceCreated() {
    const event = new ResourceCreatedEvent({
      id: this.id,
      name: this.name,
      status: this.status,
    });

    this.record(event);
  }
}
