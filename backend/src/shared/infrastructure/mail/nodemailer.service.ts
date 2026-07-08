import nodemailer from "nodemailer";
import { MailService } from "./mail.interface";


export class NodemailerService
    implements MailService {


    private transporter;


    constructor(config: any) {

        this.transporter =
            nodemailer.createTransport(config);

    }



    async send(
        options: {
            to: string;
            subject: string;
            html: string;
        }
    ) {


        await this.transporter.sendMail(
            options
        );


    }


}