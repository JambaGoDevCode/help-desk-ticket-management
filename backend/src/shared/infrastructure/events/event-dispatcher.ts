import { EventBus }
    from "./event-bus";


export class EventDispatcher
    implements EventBus {


    private handlers =
        new Map<string, any[]>();



    async publish(event: any) {


        const list =
            this.handlers.get(
                event.eventName()
            ) || [];



        for (const handler of list) {

            await handler.handle(event);

        }

    }



    subscribe(
        event: string,
        handler: any
    ) {

        const current =
            this.handlers.get(event)
            || [];


        current.push(handler);


        this.handlers.set(
            event,
            current
        );


    }


}