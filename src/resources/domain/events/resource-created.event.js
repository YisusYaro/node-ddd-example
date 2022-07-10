import { Event } from '../../../shared/domain/events/event.js';

export class ResourceCreatedEvent extends Event {
  static EVENT_NAME = 'resourceCreated';
  id;
  name;
  status;

  constructor({ id, name, status }) {
    super(ResourceCreatedEvent.EVENT_NAME, id);
    this.id = id;
    this.name = name;
    this.status = status;
  }

  toProperties() {
    const { id, name, status } = this;
    return { id, name, status }
  }
}
