export class QueuePresenter {

    static toHTTP(queue: any) {

        return {
            id: queue.id,
            name: queue.name,
            type: queue.type,
            active: queue.active
        };
    }
}