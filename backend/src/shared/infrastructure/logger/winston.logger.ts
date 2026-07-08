import winston from "winston";
import { Logger } from "./logger.interface";


export class WinstonLogger
    implements Logger {


    private logger =
        winston.createLogger({

            transports: [
                new winston.transports.Console()
            ]

        });



    info(
        message: string
    ) {

        this.logger.info(message);

    }



    error(
        message: string,
        error?: unknown
    ) {

        this.logger.error(
            message,
            error
        );

    }



    warn(
        message: string
    ) {

        this.logger.warn(message);

    }



    debug(
        message: string
    ) {

        this.logger.debug(message);

    }



}