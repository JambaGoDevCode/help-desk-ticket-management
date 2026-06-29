import { QueueType } from "../value-objects/queue-type.vo";

export class Queue {
  constructor(
    public readonly id: string,
    public name: string,
    public teamId: string,
    public type: QueueType,
    public active: boolean
  ) {}

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }
}