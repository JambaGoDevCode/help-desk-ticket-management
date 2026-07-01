export class RealtimeGateway {

    emit(event: string, payload: any) {

        console.log(`[REALTIME] ${event}`, payload);
    }
}