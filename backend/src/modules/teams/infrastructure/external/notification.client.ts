export class NotificationClient {

    send(userId: string, message: string) {

        console.log(`[NOTIFICATION] ${userId}: ${message}`);
    }
}