import { Queue } from "../../domain/entities/queue.entity";

export class QueueMapper {

    static toDTO(queue: Queue) {

        return {
            id: queue.id,
            name: queue.name,
            type: queue.type,
            active: queue.active
        };
    }
}