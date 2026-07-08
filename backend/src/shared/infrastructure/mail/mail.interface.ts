export interface MailService {


    send(options: {
        to: string;
        subject: string;
        html: string;
    }): Promise<void>;

}