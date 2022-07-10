import { ulid } from 'ulid';

export class Event {
  aggregateId;
  eventId;
  occurredOn;
  eventName;

  constructor(
    eventName,
    aggregateId,
    eventId,
    occurredOn,
  ) {
    this.aggregateId = aggregateId;
    this.eventId = eventId || ulid();
    this.occurredOn = occurredOn || new Date();
    this.eventName = eventName;
  }
}
