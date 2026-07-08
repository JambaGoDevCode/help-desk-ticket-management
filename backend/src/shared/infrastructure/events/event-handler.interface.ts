import { DomainEvent }
    from "../../domain/domain-event";


export interface EventHandler {


    handle(
        event: DomainEvent
    ): Promise<void>;


}