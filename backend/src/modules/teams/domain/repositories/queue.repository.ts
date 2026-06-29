import { Queue } from "../entities/queue.entity";

export interface QueueRepository {

  create(queue: Queue): Promise<Queue>;

  update(queue: Queue): Promise<Queue>;

  findById(id: string): Promise<Queue | null>;

  findByTeam(teamId: string): Promise<Queue[]>;

  delete(id: string): Promise<void>;
}