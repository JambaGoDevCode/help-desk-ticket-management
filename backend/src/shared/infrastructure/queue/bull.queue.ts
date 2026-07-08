import { Queue as BullQueue }
    from "bullmq";

import { Queue }
    from "./queue.interface";


export class BullQueueAdapter
    implements Queue {


    constructor(
        private queue: BullQueue
    ) { }



    async add(
        name: string,
        payload: any
    ) {

        await this.queue.add(
            name,
            payload
        );

    }


}