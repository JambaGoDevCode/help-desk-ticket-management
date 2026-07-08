import { DomainEvent }
    from "../../domain/domain-event";


export interface EventBus {


    publish(
        event: DomainEvent
    ): Promise<void>;



    subscribe(
        event: string,
        handler: any
    ): void;


}