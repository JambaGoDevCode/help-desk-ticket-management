import { Queue } from "../../domain/entities/queue.entity";
import { QueueRepository } from "../../domain/repositories/queue.repository";

export class CreateQueueUseCase {

    constructor(private queueRepo: QueueRepository) { }

    async execute(teamId: string, name: string, type: any) {

        const queue = new Queue(
            crypto.randomUUID(),
            name,
            teamId,
            type,
            true
        );

        return await this.queueRepo.create(queue);
    }
}