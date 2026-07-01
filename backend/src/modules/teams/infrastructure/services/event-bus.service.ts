export class EventBusService {

    private handlers: Record<string, Function[]> = {};

    on(event: string, handler: Function) {

        if (!this.handlers[event]) {
            this.handlers[event] = [];
        }

        this.handlers[event].push(handler);
    }

    emit(event: string, payload: any) {

        const handlers = this.handlers[event] || [];

        handlers.forEach(h => h(payload));
    }
}