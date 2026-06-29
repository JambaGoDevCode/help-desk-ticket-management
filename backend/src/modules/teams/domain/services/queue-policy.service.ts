import { Queue } from "../entities/queue.entity";

export class QueuePolicyService {

  canAcceptTicket(queue: Queue): boolean {

    return queue.active;
  }

  prioritize(queue: Queue): number {

    switch (queue.type) {

      case "PRIORITY":
        return 3;

      case "SUPPORT":
        return 2;

      case "SALES":
        return 1;

      default:
        return 0;
    }
  }
}